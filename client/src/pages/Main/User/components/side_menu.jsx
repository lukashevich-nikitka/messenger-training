/* eslint-disable default-case */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../../../../store/Main/User/actions';

function SideMenu() {
  const {
    friends, messages, groups, options,
  } = userActions;
  const dispatch = useDispatch();
  const click = function (clicker) {
    switch (clicker) {
      case 1: dispatch(friends(true));
        break;
      case 2: dispatch(messages(true));
        break;
      case 3: dispatch(groups(true));
        break;
      case 4: dispatch(options(true));
        break;
    }
  };
  return (
    <div className="side-menu-wrapper">
      <div className="menu-option" onClick={() => click(1)}>Friends</div>
      <div className="menu-option" onClick={() => click(2)}>Messages</div>
      <div className="menu-option" onClick={() => click(3)}>Groups</div>
      <div className="menu-option" onClick={() => click(4)}>Options</div>
    </div>
  );
}

export default SideMenu;
