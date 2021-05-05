/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import Wrapper from './Info.styles';
import { useGlobalContext } from '../context/context';

const UserInfo = () => {
  const { githubUser } = useGlobalContext();
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'pink',
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => (
  <article className="item">
    <span className={color}>{icon}</span>
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </article>
);

export default UserInfo;
