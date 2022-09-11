import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import '../../styles/Auth.css';
import loginData from '../../store/Login/thunks';

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(loginData(data));
  return (
    <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>Login</div>
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
        Login
      </Button>
    </form>
  );
}

export default Login;
