import React from 'react';
import { ArticleThumbnail } from '../Components/ArticleThumbnail';

export const ArticlesPage: React.FunctionComponent = () => (
  <React.Fragment>
    <h1 className="page-header">Статьи</h1>
    <p className="page-text">
      Здесь статьи удобно разделены по различным категориям, выбирайте приглянувшуюся и читайте!
    </p>
    <ArticleThumbnail/>
  </React.Fragment>
);
