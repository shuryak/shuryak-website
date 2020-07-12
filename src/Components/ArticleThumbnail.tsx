import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import '../scss/article-list.scss';
import { Article } from '../../custom-typings/common';

export const ArticleThumbnail: React.FunctionComponent<Article> = ({title, image}) => {
  return (
      <NavLink to="/article/3" className="article-thumbnail">
        <h1 className="article-title">{title}</h1>
        <div className="article-fade"/>
        <img className="article-image" src={image} alt={title}/>
      </NavLink>
  );
}
