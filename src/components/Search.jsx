import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
import { Wrapper, ErrorWrapper } from './Search.styles';

const Search = () => {
  const [user, setUser] = useState('');
  const { requests, error, searchGithubUser, isLoading } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return;

    searchGithubUser(user);
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button type="submit">Search</button>
            )}
          </div>
        </form>
        <h3>requests : {requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

export default Search;
