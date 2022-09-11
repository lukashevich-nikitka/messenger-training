import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import '../../styles/Auth.css';
import authData from '../../store/Auth/thunks';

function Auth() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(authData(data));
  return (
    <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>Create an account</div>
      <TextField
        size="medium"
        variant="outlined"
        label="Name"
        {...register('name', { required: true })}
      />
      <TextField
        size="medium"
        variant="outlined"
        label="Surname"
        {...register('surname', { required: true })}
      />
      <TextField
        type="email"
        size="medium"
        variant="outlined"
        label="Email"
        {...register('email', { required: true })}
      />
      <TextField
        type="password"
        label="Password"
        size="medium"
        variant="outlined"
        {...register('password', { required: true, minLength: 6 })}
      />
      <Button type="submit" size="large" variant="outlined">
        Create
      </Button>
    </form>
  );
}

export default Auth;
