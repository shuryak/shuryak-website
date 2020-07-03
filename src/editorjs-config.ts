import EditorJS from '@editorjs/editorjs';
const Header = require('@editorjs/header');
const Delimiter = require('@editorjs/delimiter');
const InlineCode = require('@editorjs/inline-code');
const CodeTool = require('@editorjs/code');
const Table = require('@editorjs/table');
const List = require('@editorjs/list');

const editorConfig: EditorJS.EditorConfig = {
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
};

export default editorConfig;
