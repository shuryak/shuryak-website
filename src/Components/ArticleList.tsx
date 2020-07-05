import React from 'react';
import { ArticleThumbnail } from './ArticleThumbnail';
import { Article } from '../../custom-typings/common';

export const ArticleList: React.FunctionComponent<{categoryTitle: string, articles: Article[]}> = ({categoryTitle, articles}) => {
  return (
    <div className="article-list">
      <h3 className="article-category-title">{categoryTitle}</h3>
      <div className="article-grid">
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
    </div>
  );
}
