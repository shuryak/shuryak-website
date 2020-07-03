import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import CodeTool from '@editorjs/code';
import Table from '@editorjs/table';
import List from '@editorjs/list';

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
