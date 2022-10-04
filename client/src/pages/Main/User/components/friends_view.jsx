import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import userThunks from '../../../../store/Main/User/thunks';

function FriendsView({ subscribers, currentId }) {
  const { getFriendsList } = userThunks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriendsList(currentId));
  }, [currentId, dispatch, getFriendsList]);
  return (
    <div>
      <div className="title">My friends</div>
      <label htmlFor="search">
        <input id="search" type="text" />
      </label>
      <div className="subscribers-wrapper">
        {subscribers.map((el) => (
          <>
            <div key={el.id}>{`${el.name} ${el.surname}`}</div>
            <button type="submit">visit</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default connect((state) => ({
  subscribers: state.main.userDataDisplay.userSubscribers,
  currentId: state.main.userDataDisplay.currentUserData.id,
}))(FriendsView);
