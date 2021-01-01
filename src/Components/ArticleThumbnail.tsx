import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../scss/article-list.scss';
import { Article, MetaArticle } from '../../custom-typings/articles';
import { EditorPage } from '../Pages/EditorPage';
import sendRequest from '../sendRequest';
import { ArticlesMethods, UsersMethods } from '../apiMethods';
import { OutputData } from '@editorjs/editorjs';
import ApiErrors from '../apiErrors';
import { refreshTokenPair } from '../jwt';
import Client from '../client';

export const ArticleThumbnail: React.FunctionComponent<MetaArticle> = ({id, name, author, is_draft, thumbnail}, isMini: boolean) => {
  const [mini, setMini] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('');

  useEffect(() => {
    getNickname();
  }, [])

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('scroll', handleResize);
  });

  const handleResize = () => {
    setMini(Client.isMobile);
  };

  const getNickname = () => {
    sendRequest('POST', UsersMethods.GetUserInfo)
      .then(data => {
        const errorCode: number | undefined = data.data.error_code;

        if(errorCode === undefined && data.data) {
          setNickname(data.data.nickname);
        }

        switch (errorCode) {
          case ApiErrors.InvalidToken:
            refreshTokenPair().then(() => getNickname());
            break;
        }
      });
  };

  const Edit = () => {
    if (nickname === author) {
      return (
        <Link to={{
          pathname: '/editor',
          state: {articleId: id}
        }} className="edit-draft">
          <p>✏</p>
        </Link>
      );
    }
    return <React.Fragment/>;
  };

  return (
    <React.Fragment>
      { mini
        ? <React.Fragment>
            <div className="article-thumbnail-mini">
              <NavLink to={`/article/${id}`}>
                <h1 className="article-title-mini">{name}</h1>
              </NavLink>
            </div>
          </React.Fragment>
        : <div className="article-thumbnail-wrapper">
            <Edit/>
            <NavLink to={`/article/${id}`} className="article-thumbnail">
              <h1 className="article-title">{name}</h1>
              <div className="article-fade"/>
              <img className="article-image" src={thumbnail} alt=""/>
            </NavLink>
          </div>
      }
    </React.Fragment>
  );
}
