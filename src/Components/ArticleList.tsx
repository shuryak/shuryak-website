import React from 'react';
import { ArticleThumbnail } from './ArticleThumbnail';
import { MetaArticle } from '../../custom-typings/articles';

export const ArticleList: React.FunctionComponent<{articles: MetaArticle[]}> = ({articles}) => {
  return (
    <div className="article-list">
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
