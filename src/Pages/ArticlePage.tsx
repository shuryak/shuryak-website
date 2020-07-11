import React from 'react';
import ArticleExample from '../test-assets/article.json';
import ArticleToHtml from '../ArticleToHtml';

export const ArticlePage: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <div className="article-content">{ArticleToHtml(ArticleExample)}</div>
        </React.Fragment>
    );
}
