import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './Error.styles';

const Error = () => (
  <Wrapper>
    <h1>404</h1>
    <h3>Sorry, the page you tried cannot be found</h3>
    <Link to="/" className="btn">
      back home
    </Link>
  </Wrapper>
);

export default Error;
