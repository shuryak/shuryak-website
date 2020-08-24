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
              id={article.id}
              name={article.name}
              author={article.author}
              thumbnail={article.thumbnail}
              is_draft={article.is_draft}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
