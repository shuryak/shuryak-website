import React, { ReactElement, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import ArticleToHtml from '../ArticleToHtml';
import '../scss/article.scss';
import sendRequest from '../sendRequest';
import { OutputData } from '@editorjs/editorjs';

// https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props
interface ArticleParams {
    id: string;
}

export const ArticlePage: React.FunctionComponent<RouteComponentProps<ArticleParams>> = (props) => {
    const [article, setArticle] = useState<OutputData>();

    useEffect(() => {
        sendRequest('POST', 'http://localhost:8181/api/articles.getById', {
            id: props.match.params.id
        }).then(data => {
            if(data.data) {
                setArticle(data.data.article_data);
            }
        });
    }, [])

    return (
        <React.Fragment>
            <div className="under-header"/>
            <div className="article-content">{ArticleToHtml(article)}</div>
        </React.Fragment>
    );
}
