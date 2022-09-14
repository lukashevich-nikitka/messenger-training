/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';

function SearchView({ userListDisplay, currentId }) {
  return (
    <div className="search-users-wrapper">
      {userListDisplay.filter((el) => el._id !== currentId).map((el) => (
        <div className="search-user-card" key={el._id}>
          <div className="search-user-info">
            {`${el.name} ${el.surname}`}
          </div>
          <button className="subscribe-button" type="submit">subscribe</button>
        </div>
      ))}
    </div>
  );
}

export default connect((state) => ({
  userListDisplay: state.main.userDataDisplay.userListDisplay,
  currentId: state.main.userDataDisplay.currentUserData.id,
}))(SearchView);
