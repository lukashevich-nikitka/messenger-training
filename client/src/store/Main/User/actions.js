import { createAction } from '@reduxjs/toolkit';

const friends = createAction('main/user/friends');
const messages = createAction('main/user/messages');
const groups = createAction('main/user/groups');
const options = createAction('main/user/options');

const userActions = {
  friends,
  messages,
  groups,
  options,
};

export default userActions;
