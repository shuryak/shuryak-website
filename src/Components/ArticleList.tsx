import React from 'react';
import { ArticleThumbnail } from './ArticleThumbnail';
import { MetaArticle } from '../../custom-typings/common';

export const ArticleList: React.FunctionComponent<{categoryTitle: string, articles: MetaArticle[]}> = ({categoryTitle, articles}) => {
  return (
    <div className="article-list">
      <h3 className="article-category-title">{categoryTitle}</h3>
      <div className="article-grid">
        {articles.map((article: MetaArticle, index: number) => {
          return (
            <ArticleThumbnail
              name={article.name}
              thumbnail={article.thumbnail}
              is_draft={article.is_draft}
              id={article.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
