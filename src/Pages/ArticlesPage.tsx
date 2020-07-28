import React, { useState, useEffect } from 'react';
import { ArticleThumbnail } from '../Components/ArticleThumbnail';
import image from '../test-assets/osdev.png';
import { ArticleList } from '../Components/ArticleList';
import { MetaArticle } from '../../custom-typings/common';
import sendRequest from '../sendRequest';

export const ArticlesPage: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<MetaArticle[]>([]);

  useEffect(() => {
    sendRequest('POST', 'http://localhost:8181/api/articles.getList', {
      count: 10,
      offset: 0
    })
        .then(data => {
          console.log(data.data);
          if(data.data) {
            setArticles(data.data);
          }
        });
  }, [])
  
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
