import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Wrapper from './Navbar.styles';

const Navbar = () => {
  const { logout, user, isAuthenticated } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.nickname} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      <button
        type="button"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </Wrapper>
  );
};

export default Navbar;
