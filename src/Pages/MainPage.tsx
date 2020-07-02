import React from 'react';
import { differenceInYears } from 'date-fns';

export const MainPage: React.FunctionComponent = () => {
  const age: number = differenceInYears(
    Date.now(),
    new Date(2004, 1, 24)
  );

  const getAgeDeclension = (n: number) => {
    const values = ['год', 'года', 'лет'];
    return n + ' ' + values[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][ (n % 10 < 5) ? n % 10 : 5]];
  }

  return (
    <React.Fragment>
      <h1 className="page-header">Главная</h1>
      <p className="page-text">
        Меня зовут Саша, мне {getAgeDeclension(16)}, я разработчик, преимущественно по части backend: люблю <mark>C#</mark> и&nbsp;
        <mark>ASP.NET Core</mark>, умею в <mark>PHP</mark> и хочу научиться в GoLang. Также интересуюсь низкоуровневым программированием.
        Люблю писать статьи &mdash; причина создания этого сайта.
      </p>
    </React.Fragment>
  );
};
