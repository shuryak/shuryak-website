import React, { useState } from 'react';
import { ArticleThumbnail } from '../Components/ArticleThumbnail';
import image from '../test-assets/osdev.png';
import { ArticleList } from '../Components/ArticleList';
import { Article } from '../../custom-typings/common';

export const ArticlesPage: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      title: 'Как меня пригласили разрабатывать ПО для кораблей SpaceX',
      image
    },
    {
      title: 'Физика правильной посадки ракеты на Марс',
      image
    },
    {
      title: 'Rocket Science For Dummies',
      image
    },
    {
      title: 'Rocket Science For Dummies',
      image
    },
    {
      title: 'Rocket Science For Dummies',
      image
    }
  ]);

  return (
    <React.Fragment>
      <h1 className="page-header">Статьи</h1>
      <p className="page-text">
        Здесь статьи удобно разделены по различным категориям, выбирайте приглянувшуюся и читайте!
      </p>
      <ArticleList categoryTitle={'Мои любимые рецепты блинчиков'} articles={articles} />
    </React.Fragment>
  );
};
