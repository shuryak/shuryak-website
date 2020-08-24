import { OutputData } from '@editorjs/editorjs';

export type MetaArticle = {
  id: string;
  name: string;
  author: string,
  is_draft: boolean;
  thumbnail: string;
};

export type Article = {
  id: string;
  name: string;
  author: string,
  is_draft: boolean;
  thumbnail: string;
  article_data: OutputData;
}
