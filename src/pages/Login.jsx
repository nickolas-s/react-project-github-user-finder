import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../images/login-img.svg';
import Wrapper from './Login.styles';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="gitbhub user" />
        <h1>GitHub User Finder</h1>
        <button
          type="button"
          className="btn"
          onClick={() => loginWithRedirect()}
        >
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;
