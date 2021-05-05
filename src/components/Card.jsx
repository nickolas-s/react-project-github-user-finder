/* eslint-disable camelcase */
import React from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
import Wrapper from './Card.styles';

const Card = () => {
  const { githubUser } = useGlobalContext();
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{twitter_username ? `@${twitter_username}` : ''}</p>
        </div>
        <a href={html_url} target="_blank" rel="noreferrer">
          follow
        </a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company || '-'}
        </p>
        <p>
          <MdLocationOn /> {location || '-'}
        </p>
        <p>
          <a href={`https://${blog}`} target="_blank" rel="noreferrer">
            <MdLink /> {blog || '-'}
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default Card;
