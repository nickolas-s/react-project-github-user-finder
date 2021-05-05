/* eslint-disable camelcase */
import React from 'react';
import { useGlobalContext } from '../context/context';
import Wrapper from './Followers.styles';

const Followers = () => {
  const { followers } = useGlobalContext();

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, login, html_url } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noreferrer">
                  {html_url}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Followers;
