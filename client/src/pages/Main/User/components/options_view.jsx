import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import userThunks from '../../../../store/Main/User/thunks';

function OptionsView({ currentId }) {
  const { fillOutTheInfo } = userThunks;
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const save = (data) => dispatch(fillOutTheInfo({ id: currentId, info: data }));
  return (
    <form onSubmit={handleSubmit(save)}>
      <div className="oprions-wrapper">
        Fill out the information about yourself
        <div className="options-block">
          <label id="age-block">
            {' '}
            Age
            <input type="number" htmlFor="age-block" {...register('age')} />
          </label>
        </div>
        <div className="options-block">
          <label id="status-block">
            {' '}
            Status
            <input htmlFor="status-block" {...register('status')} />
          </label>
        </div>
        <div className="options-block">
          <label id="education-block">
            {' '}
            Education
            <input htmlFor="education-block" {...register('education')} />
          </label>
        </div>
        <div className="options-block">
          <label id="profession-block">
            {' '}
            Profession
            <input htmlFor="profession-block" {...register('profession')} />
          </label>
        </div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default connect((state) => ({
  currentId: state.main.userDataDisplay.currentUserData.id,
}))(OptionsView);
