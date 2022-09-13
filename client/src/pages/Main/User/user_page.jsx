import React from 'react';
import SideMenu from './components/side_menu';
import UserInfo from './components/user_info';
import UserPosts from './components/user_posts';

function UserPage() {
  return (
    <div className="user-page-wrapper">
      <div className="left-side-wrapper">
        <SideMenu />
      </div>
      <div className="right-side-wrapper">
        <UserInfo />
        <UserPosts />
      </div>
    </div>
  );
}

export default UserPage;
