import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import userThunks from '../../../../store/Main/User/thunks';
import '../../../../styles/User.css';

function DefaultView({ currentUserData, jwt }) {
  const {
    name, surname, age, status, education, profession,
  } = currentUserData;
  const dispatch = useDispatch();
  const { getCurrentUserData } = userThunks;
  useEffect(() => {
    if (name === 'unknown') {
      dispatch(getCurrentUserData(jwt));
    }
  }, [dispatch, getCurrentUserData, jwt, name]);
  return (
    <div className="right-side-wrapper">
      <div className="user-info">
        <div className="user-name">{`${name} ${surname}`}</div>
        <div className="user-data">{`Age: ${age}`}</div>
        <div className="user-data">{`Status: ${status}`}</div>
        <div className="user-data">{`Education: ${education}`}</div>
        <div className="user-data">{`Profession: ${profession}`}</div>
      </div>
      <div className="user-posts">
        Posts in future
      </div>
    </div>
  );
}

export default connect((state) => ({
  currentUserData: state.main.userDataDisplay.currentUserData,
  jwt: state.login.loginAnswer,
}))(DefaultView);
