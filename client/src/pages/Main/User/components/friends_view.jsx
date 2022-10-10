import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import userThunks from '../../../../store/Main/User/thunks';
import userActions from '../../../../store/Main/User/actions';

function FriendsView({ subscribers, currentId }) {
  const { chat } = userActions.navigation;
  const { determineChatId } = userActions.dataDisplay;
  const { getFriendsList } = userThunks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriendsList(currentId));
  }, [currentId, dispatch, getFriendsList]);
  const changeToChatView = function (chatId) {
    dispatch(determineChatId(chatId));
    dispatch(chat(true));
  };
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
            <button type="submit" onClick={() => changeToChatView(el.id)}>send a message</button>
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
