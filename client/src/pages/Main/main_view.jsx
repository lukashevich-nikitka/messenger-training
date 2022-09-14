import React from 'react';
import { connect } from 'react-redux';
import Auth from '../Auth/Auth';
import Login from '../Login/Login';
import UserPage from './User/user_page';
import '../../styles/Main.css';

function Main({ loginAnswer }) {
  if (loginAnswer === '' || loginAnswer === 'error') {
    return (
      <div className="main-wrapper">
        <Auth />
        <Login />
      </div>
    );
  }
  return (
    <UserPage />
  );
}

export default connect((state) => ({
  loginAnswer: state.login.loginAnswer,
}))(Main);
