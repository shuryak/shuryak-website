import React from 'react';
import { RouteComponentProps } from 'react-router';
import ArticleExample from '../test-assets/article.json';
import ArticleToHtml from '../ArticleToHtml';

// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
interface ArticleParams {
    id: string;
}

export const ArticlePage: React.FunctionComponent<RouteComponentProps<ArticleParams>> = (props) => {
    return (
        <React.Fragment>
            <p>Article ID: {props.match.params.id}</p>
            <div className="article-content">{ArticleToHtml(ArticleExample)}</div>
        </React.Fragment>
    );
}
