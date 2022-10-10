/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import userActions from '../../../../store/Main/User/actions';
import userThunks from '../../../../store/Main/User/thunks';

function SideMenu() {
  const {
    profile, friends, messages, groups, options, search,
  } = userActions.navigation;
  const [selector, setSelector] = useState('');
  // useEffect(() => {
  //   if (currentId) {
  //     const ws = new WebSocket(`ws://localhost:4200/${currentId}`);
  //     ws.addEventListener('open', () => {
  //       ws.send();
  //     });
  //   }
  // }, [currentId]);
  const { getUserBySelector } = userThunks;
  const dispatch = useDispatch();
  const setReq = (event) => setSelector(event.target.value);
  const findUser = function () {
    if (selector === '') {
      dispatch(getUserBySelector('all'));
    } else {
      dispatch(getUserBySelector(selector));
      setSelector('');
    }
    dispatch(search(true));
  };
  const click = function (clicker) {
    switch (clicker) {
      case 1:
        dispatch(profile(true));
        break;
      case 2:
        dispatch(friends(true));
        break;
      case 3:
        dispatch(messages(true));
        break;
      case 4:
        dispatch(groups(true));
        break;
      case 5:
        dispatch(options(true));
        break;
      case 6:
        dispatch(search(true));
        break;
    }
  };
  return (
    <div className="side-menu-wrapper">
      <div>
        <label htmlFor="search">
          <input id="search" onChange={setReq} />
        </label>
        <button type="submit" onClick={findUser}>
          search
        </button>
      </div>
      <div className="menu-option" onClick={() => click(1)}>
        My profile
      </div>
      <div className="menu-option" onClick={() => click(2)}>
        Friends
      </div>
      <div className="menu-option" onClick={() => click(3)}>
        Messages
      </div>
      <div className="menu-option" onClick={() => click(4)}>
        Groups
      </div>
      <div className="menu-option" onClick={() => click(5)}>
        Options
      </div>
    </div>
  );
}

export default connect((state) => ({
  currentId: state.main.userDataDisplay.currentUserData.id,
}))(SideMenu);
