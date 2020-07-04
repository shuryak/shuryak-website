import React from 'react';
import '../scss/article-thumbnails.scss';

export const ArticleThumbnail: React.FunctionComponent = () => {
  return (
    <div className="article-thumbnail">
      <h1 className="article-title">Article Title</h1>
      <div className="article-fade"/>
      <img className="article-image" src="" alt="thumbnail"/>
    </div>
  );
}
