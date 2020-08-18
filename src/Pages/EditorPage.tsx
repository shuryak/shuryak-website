import React, { useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import editorConfigure from '../editorjsConfig';
import '../scss/editor.scss';
import Limits from '../limits';
import sendRequest from '../sendRequest';
import { ArticlesMethods } from '../apiMethods';
import { Article, MetaArticle } from '../../custom-typings/articles';
import { ArticleThumbnail } from '../Components/ArticleThumbnail';
import ApiErrors from '../apiErrors';
import { refreshTokenPair } from '../jwt';

const editor = new EditorJS(editorConfigure());

export const EditorPage: React.FunctionComponent = () => {
  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const isImage = (url: string): boolean => {
    try {
      const urlObject = new URL(url);

      if(!urlObject.pathname.includes('.')) {
        return false;
      }

      const pathname = urlObject.pathname.split('.').reverse();

      const ext = pathname[0];

      return ext === 'jpg' || ext === 'jpeg' || ext === 'png';
    } catch (e) {
      return false;
    }
  }

  const saveArticle = async (isDraft: boolean) => {
    if(name.length < Limits.ArticleNameMin && id.length < Limits.ArticleIdMin) {
      setError('Недопустимая длина названия и ID!');
      return;
    } else if(name.length < Limits.ArticleNameMin) {
      setError('Недопустимая длина названия!');
      return;
    } else if(id.length < Limits.ArticleIdMin) {
      setError('Недопустимая длина ID!');
      return;
    }


    const articleData = await editor.save();
      const metaArticle: Article = {
        id,
        name,
        thumbnail,
        is_draft: isDraft,
        article_data: articleData
      }

      sendRequest('POST', ArticlesMethods.Create, metaArticle)
        .then(data => {
          const errorCode: number | undefined = data.data.error_code;

          if(errorCode === undefined) {
            alert('article is saved!');
            return;
          }

          let errorMessage: string = '';

          switch (errorCode) {
            case ApiErrors.InvalidToken:
              refreshTokenPair().then(() => saveArticle(isDraft));
              break;
            case ApiErrors.InvalidFieldLength:
              errorMessage = 'Недопустимая длина названия или ID';
              break;
            case ApiErrors.NotUniqueData:
              errorMessage = 'Статья с таким названием или ID уже существует: ' + data.data.message;
              break;
            case ApiErrors.BadRequest:
              errorMessage = data.data.message;
              break;
            default:
              errorMessage = 'Непредвиденная ошибка!';
          }

          setError(errorMessage)
        });
  }

  const handleInputChange = (event) => {
    isImage(thumbnail);

    const target = event.target;
    const name = target.name;

    if(name === 'id') {
      setId(target.value);
    } else if(name === 'name') {
      setName(target.value);
    } else if(name === 'thumbnail') {
      setThumbnail(target.value);
    }
  }

  return (
      <div className="editor">
        <h1>Редактор статей</h1>
        <p className="page-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, cum cupiditate ea minima nam nobis omnis perspiciatis vel voluptatem.
        </p>

        <p className="error-message">{error}</p>

        <div className="article-top">
          <div className="article-metadata">
            <div className="field-block">
              <label htmlFor="name">Название:</label>
              <input
                id="name"
                name="name"
                type="text"
                className={name.length < Limits.ArticleNameMin ? 'article-input bad-input' : 'article-input'}
                maxLength={Limits.ArticleNameMax}
                onChange={handleInputChange}
              />
            </div>
            <div className="field-block">
              <label htmlFor="id">Текстовый ID:</label>
              <input
                id="id"
                name="id"
                type="text"
                className={id.length < Limits.ArticleIdMin ? 'article-input bad-input' : 'article-input'}
                maxLength={Limits.ArticleIdMax}
                onChange={handleInputChange}
              />
            </div>
            <div className="field-block">
              <label htmlFor="thumbnail">Ссылка на обложку:</label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                className={!isImage(thumbnail) ? 'article-input bad-input' : 'article-input'}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <ArticleThumbnail
            name={name}
            thumbnail={thumbnail}
            is_draft={true}
            id={id}
          />
        </div>

        <div id="editorjs"/>
        <div className="editor-save-buttons">
          <button className="draft-button" onClick={() => saveArticle(true)}>Сохранить как черновик 📓</button>
          <button className="publish-button" onClick={() => saveArticle(false)}>Опубликовать 📢</button>
        </div>
      </div>
    );
}
