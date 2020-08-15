import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import editorConfigure from '../editorjsConfig';

export const EditorPage: React.FunctionComponent = () => {
  const editor = new EditorJS(editorConfigure());

  const displayData = () => {
    editor.save().then(output => {
      console.log(output);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
      <React.Fragment>
        <div id="editorjs"/>
        <button onClick={displayData}>save</button>
      </React.Fragment>
    );
}
