/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../../../../styles/User.css';

function UserInfo() {
  return (
    <div className="user-info">
      <div>Name</div>
      <div>Age</div>
      <div>Status</div>
      <div>Education</div>
      <div>Profession</div>
    </div>
  );
}

export default UserInfo;
