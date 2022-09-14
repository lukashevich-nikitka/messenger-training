import { createAction } from '@reduxjs/toolkit';

// navigation actions
const profile = createAction('main/user/profile');
const friends = createAction('main/user/friends');
const messages = createAction('main/user/messages');
const groups = createAction('main/user/groups');
const options = createAction('main/user/options');
const search = createAction('main/user/search');
// ---------- // ----------- // ---------------- //

// data display actions

const userActions = {
  navigation: {
    profile,
    friends,
    messages,
    groups,
    options,
    search,
  },
};

export default userActions;
