import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import '../scss/article-list.scss';
import { MetaArticle } from '../../custom-typings/common';

export const ArticleThumbnail: React.FunctionComponent<MetaArticle> = ({name, thumbnail, id}) => {
  return (
      <NavLink to={`/article/${id}`} className="article-thumbnail">
        <h1 className="article-title">{name}</h1>
        <div className="article-fade"/>
        <img className="article-image" src={thumbnail} alt={name}/>
      </NavLink>
  );
}
