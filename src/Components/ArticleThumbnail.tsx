import React from 'react';
import '../scss/article-list.scss';
import { Article } from '../../custom-typings/common';

export const ArticleThumbnail: React.FunctionComponent<Article> = ({title, image}) => {
  return (
    <div className="article-thumbnail">
      <h1 className="article-title">{title}</h1>
      <div className="article-fade"/>
      <img className="article-image" src={image} alt={title}/>
    </div>
  );
}
