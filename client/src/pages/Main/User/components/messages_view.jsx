import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import userThunks from '../../../../store/Main/User/thunks';

function MessagesView({ currentId, messagesList }) {
  const { getMessages } = userThunks;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages(currentId));
  }, [dispatch, currentId, getMessages]);
  if (messagesList.length) {
    return (
      <div className="messages-wrapper">
        {messagesList.map((el) => (
          <div className="dialog-wrapper" key={el.id}>
            <div>{`${el.name} ${el.surname}`}</div>
            <div className="dialog-screen">
              <div>{`${el.lastMessage}`}</div>
            </div>
            <button type="submit">continue</button>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>Dialogs list is empty</div>
  );
}

export default connect((state) => ({
  currentId: state.main.userDataDisplay.currentUserData.id,
  messagesList: state.main.userDataDisplay.userMessagesList,
}))(MessagesView);
