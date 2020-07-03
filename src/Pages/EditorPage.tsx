import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import editorConfig from '../editorjs-config';

export const EditorPage: React.FunctionComponent = () => {
  const editor = new EditorJS(editorConfig);

  const displayData = () => {
    editor.save().then(output => {
      console.log(output);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
      <React.Fragment>
        <div id="editorjs"></div>
        <button onClick={displayData}>save</button>
      </React.Fragment>
    );
}
