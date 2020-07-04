import React from 'react';
import '../scss/article-thumbnails.scss';

type ArticleProps = {
  title: string;
  image: string;
}

export const ArticleThumbnail: React.FunctionComponent<ArticleProps> = ({title, image}) => {
  return (
    <div className="article-thumbnail">
      <h1 className="article-title">{title}</h1>
      <div className="article-fade"/>
      <img className="article-image" src={image} alt={title}/>
    </div>
  );
}
