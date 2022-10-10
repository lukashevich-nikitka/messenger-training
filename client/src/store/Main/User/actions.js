import { createAction } from '@reduxjs/toolkit';

// navigation actions
const profile = createAction('main/user/profile');
const friends = createAction('main/user/friends');
const messages = createAction('main/user/messages');
const chat = createAction('main/user/chat');
const groups = createAction('main/user/groups');
const options = createAction('main/user/options');
const search = createAction('main/user/search');
// ---------- // ----------- // ---------------- //

// data display actions
const determineChatId = createAction('main/user/determineChatId');
const updateChat = createAction('main/user/updateChat');

const userActions = {
  navigation: {
    profile,
    friends,
    messages,
    chat,
    groups,
    options,
    search,
  },
  dataDisplay: {
    determineChatId,
    updateChat,
  },
};

export default userActions;
