/* eslint-disable camelcase */
import React from 'react';
import { useGlobalContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
import Wrapper from './Repos.styles';

const Repos = () => {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  // Most used language
  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // Most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.star)
    .map((item) => ({ ...item, value: item.stars }))
    .slice(0, 5);

  // Most Popular/Forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks: forks_count } = item;

      // Stars
      total.stars[stargazers_count] = { label: name, value: stargazers_count };

      // Forks
      total.forks[forks_count] = { label: name, value: forks_count };
      return total;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();

  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

export default Repos;
