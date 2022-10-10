/* eslint-disable no-new */
/* eslint-disable no-param-reassign */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import userThunks from '../../../../store/Main/User/thunks';
import userActions from '../../../../store/Main/User/actions';
import '../../../../styles/User.css';

function ChatView({ chatMessages, currentId, friendId }) {
  const { getChatMessages } = userThunks;
  const { updateChat } = userActions.dataDisplay;
  const ws = useMemo(() => new WebSocket(`ws://localhost:4200/chat/${currentId}/${friendId}`), [currentId, friendId]);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    ws.addEventListener('message', (msg) => {
      dispatch(updateChat(JSON.parse(msg)));
    });
    dispatch(getChatMessages({ currentId, friendId }));
  }, [currentId, dispatch, friendId, getChatMessages, ws]);
  const sendMessage = function (data) {
    data.timeStamp = new Date();
    ws.send(JSON.stringify(data));
  };
  return (
    <div className="chat-wrapper">
      <div className="previous-messages-wrapper">
        {chatMessages.length ? (
          chatMessages.map((msg) => <div>{msg.value}</div>)
        ) : (
          <div>Write your first message</div>
        )}
      </div>
      <form onSubmit={handleSubmit(sendMessage)} className="textarea-wrapper">
        <textarea {...register('value')} />
        <button type="submit" onClick={sendMessage}>
          push
        </button>
      </form>
    </div>
  );
}

export default connect((state) => ({
  chatMessages: state.main.userDataDisplay.userChatMessages.messages,
  currentId: state.main.userDataDisplay.currentUserData.id,
  friendId: state.main.userDataDisplay.userChatMessages.chatId,
}))(ChatView);
