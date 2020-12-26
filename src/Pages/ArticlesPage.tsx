import React, { useState, useEffect } from 'react';
import { ArticleList } from '../Components/ArticleList';
import { MetaArticle } from '../../custom-typings/articles';
import sendRequest from '../sendRequest';
import { ArticlesMethods } from '../apiMethods';
import '../scss/articles.scss';
import ApiErrors from '../apiErrors';
import { refreshTokenPair } from '../jwt';

export const ArticlesPage: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<MetaArticle[]>([]);
  const [getDrafts, setGetDrafts] = useState<boolean>(false);

  useEffect(() => {
    getArticlesList(false);
  }, [])

  const getArticlesList = (drafts: boolean) => {
    if(drafts) {
      sendRequest('POST', ArticlesMethods.GetDraftsList, {
        count: 10,
        offset: 0
      })
        .then(data => {
          const errorCode: number | undefined = data.data.error_code;

          if(errorCode === undefined && data.data) {
            setArticles(data.data);
            return;
          }

          switch (errorCode) {
            case ApiErrors.InvalidToken:
              refreshTokenPair().then(() => getArticlesList(drafts));
              break;
          }
        });
    } else {
      sendRequest('POST', ArticlesMethods.GetList, {
        count: 10,
        offset: 0
      })
        .then(data => {
          if(data.data) {
            setArticles(data.data);
            return;
          }
        });
    }
  }

  const changeGetDrafts = () => {
    setGetDrafts(prevState => {
      getArticlesList(!prevState);
      return !prevState;
    });
  }
  
  return (
    <React.Fragment>
      <h1 className="page-header">Статьи</h1>
      <p className="page-text">
        На этой странице представлен список всех статьей, открывай приглянувшуюся и читай! Надеюсь, тебе понравится! :)
      </p>
      <div className="filters">
        <p className="get-drafts" onClick={changeGetDrafts}>{
          getDrafts ?  '📰 Показать все статьи' : '📄 Показать мои черновики'
        }</p>
      </div>
      <ArticleList articles={articles} />
    </React.Fragment>
  );
};
