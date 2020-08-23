import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Buttons/LogoutButton';
import LoginButton from './Buttons/LoginButton';

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? <LogoutButton/> : <LoginButton/>
  );
};

export default Login;
