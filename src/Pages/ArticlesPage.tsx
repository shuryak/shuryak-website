import React, { useState, useEffect } from 'react';
import { ArticleList } from '../Components/ArticleList';
import { MetaArticle } from '../../custom-typings/articles';
import sendRequest from '../sendRequest';
import { ArticlesMethods } from '../apiMethods';

export const ArticlesPage: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<MetaArticle[]>([]);

  useEffect(() => {
    sendRequest('POST', ArticlesMethods.GetList, {
      get_drafts: false,
      count: 10,
      offset: 0
    })
        .then(data => {
          if(data.data) {
            setArticles(data.data);
          }
        });
  }, [])
  
  return (
    <React.Fragment>
      <h1 className="page-header">Статьи</h1>
      <p className="page-text">
        На этой странице представлен список всех статьей, открывай приглянувшуюся и читай! Надеюсь, тебе понравится! :)
      </p>
      <ArticleList articles={articles} />
    </React.Fragment>
  );
};
