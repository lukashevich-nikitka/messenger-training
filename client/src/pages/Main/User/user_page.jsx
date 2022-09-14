import React from 'react';

import SideMenu from './components/side_menu';
import ViewController from './components/view_controller';

function UserPage() {
  return (
    <div className="user-page-wrapper">
      <div className="left-side-wrapper">
        <SideMenu />
      </div>
      <ViewController />
    </div>
  );
}

export default UserPage;
