import React from 'react';
import '../../../../styles/User.css';
import { connect } from 'react-redux';
import SearchView from './search_view';
import FriendsView from './friends_view';
import DefaultView from './default_view';
import OptionsView from './options_view';
import MessagesView from './messages_view';
import ChatView from './chat_view';

function ViewController({
  friends, search, options, messages, chat,
}) {
  if (search) {
    return (
      <SearchView />
    );
  }
  if (friends) {
    return (
      <FriendsView />
    );
  }
  if (options) {
    return (
      <OptionsView />
    );
  }
  if (messages) {
    return (
      <MessagesView />
    );
  }
  if (chat) {
    return (
      <ChatView />
    );
  }
  return (
    <DefaultView />
  );
}

export default connect((state) => ({
  friends: state.main.userNavigation.friends,
  messages: state.main.userNavigation.messages,
  chat: state.main.userNavigation.chat,
  groups: state.main.userNavigation.groups,
  options: state.main.userNavigation.options,
  search: state.main.userNavigation.search,
}))(ViewController);
