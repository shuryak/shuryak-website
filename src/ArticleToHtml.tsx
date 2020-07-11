import React from 'react';
import EditorJS from '@editorjs/editorjs';

export default (jsonData : EditorJS.OutputData) => {
    const result: JSX.Element[] = [];

    let index = 0;
    for (const block of jsonData.blocks) {
        switch (block.type) {
            case 'header':
                const CustomHeaderTag = `h${block.data.level}`;
                result.push(<CustomHeaderTag {...{key: index++}}>{block.data.text}</CustomHeaderTag>);
                break;
            case 'paragraph':
                result.push(<p key={index++}>{block.data.text}</p>);
                break;
            case 'table':
                const tableArray: JSX.Element[] = [];

                let trIndex = 0;
                for (const tr of block.data.content) {
                    const rowArray: JSX.Element[] = [];

                    let tdIndex = 0;
                    for (const td of tr) {
                        rowArray.push(<td key={tdIndex++}>{td}</td>);
                    }

                    tableArray.push(<tr key={trIndex++}>{...rowArray}</tr>);
                }
                result.push(<table key={index++}><tbody>{tableArray}</tbody></table>);
                break;
        }
    }

    console.log(result);

    return result;
}
