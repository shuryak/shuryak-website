import React from 'react';
import { ArticleThumbnail } from './ArticleThumbnail';
import { Article } from '../../custom-typings/common';

export const ArticleList: React.FunctionComponent<{articles: Article[]}> = ({articles}) => {
  return (
    <div className="article-list">
      {articles.map((article: Article, index: number) => {
        return (
          <ArticleThumbnail
            title={article.title}
            image={article.image}
            key={index}
          />
        );
      })}
    </div>
  );
}
