import { OutputData } from '@editorjs/editorjs';

export type MetaArticle = {
  name: string;
  is_draft: boolean;
  thumbnail: string;
  id: string;
};

export type Article = {
  name: string;
  is_draft: boolean;
  thumbnail: string;
  id: string;
  article_data: OutputData;
}
