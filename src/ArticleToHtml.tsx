import React from 'react';
import EditorJS from '@editorjs/editorjs';

export default (jsonData : EditorJS.OutputData) => {
    const result: JSX.Element[] = [];
    let index = 0;
    for (const block of jsonData.blocks) {
        index++;
        switch (block.type) {
            case 'header':
                const CustomHeaderTag = `h${block.data.level}`;
                result.push(<CustomHeaderTag {...{key: index}}>{block.data.text}</CustomHeaderTag>);
                break;
            case 'paragraph':
                result.push(<p key={index}>{block.data.text}</p>);
                break;
        }
    }
    console.log(result);
    return result;
}
