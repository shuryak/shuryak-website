import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
const Header = require('@editorjs/header');
const Delimiter = require('@editorjs/delimiter');
const InlineCode = require('@editorjs/inline-code');
const CodeTool = require('@editorjs/code');
const Table = require('@editorjs/table');
const List = require('@editorjs/list');

export const EditorPage: React.FunctionComponent = () => {
  const editor = new EditorJS({
    placeholder: 'Александр, Вы у пульта управления контентом блога!',
    tools: {
      header: Header,
      delimiter: Delimiter,
      inlineCode: {
        class: InlineCode,
        shortcut: 'ALT+C',
      },
      code: CodeTool,
      table: Table,
      list: {
        class: List,
        inlineToolbar: true,
      },
    }
  });

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
