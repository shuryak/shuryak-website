import React from 'react';
import { RouteComponentProps } from 'react-router';
import ArticleExample from '../test-assets/article.json';
import ArticleToHtml from '../ArticleToHtml';
import '../scss/article.scss';

// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
interface ArticleParams {
    id: string;
}

export const ArticlePage: React.FunctionComponent<RouteComponentProps<ArticleParams>> = (props) => {
    return (
        <React.Fragment>
            <h1 className="page-header">Просмотр статьи</h1>
            <div className="article-content">{ArticleToHtml(ArticleExample)}</div>
        </React.Fragment>
    );
}
