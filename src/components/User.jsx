import React from 'react';
import Card from './Card.jsx';
import Followers from './Followers.jsx';
import Wrapper from './User.styles';

const User = () => (
  <section className="section">
    <Wrapper className="section-center">
      <Card />
      <Followers />
    </Wrapper>
  </section>
);

export default User;
