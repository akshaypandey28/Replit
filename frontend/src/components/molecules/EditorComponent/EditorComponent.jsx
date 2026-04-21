import Editor from '@monaco-editor/react';
import { useState,useEffect } from 'react';
export const EditorComponent = () => {

    const [editorTheme, setEditorTheme] = useState({
        theme:null
    });


    async function downloadTheme() {
        const response = await fetch('/Dracula.json');
        const data = await response.json();
        console.log(data);
        setEditorTheme({ ...editorTheme, theme: data });
    }

    function handleEditorTheme(editor,monaco) {
        monaco.editor.defineTheme('dracula', editorTheme.theme);
        monaco.editor.setTheme('dracula');
    }

    useEffect(()=>{
       downloadTheme();
    },[]);

    
    return(
        <>
            {  editorTheme.theme &&
                <Editor
                    height={'1000vh'}
                    width={'100%'}
                    defaultLanguage='javascript'
                    defaultValue='//Welcome to the PlayGround'
                    options={{
                        fontSize:18,
                        fontFamily:'monospace'
                    }}
                    theme='vs-dark'
                    onMount={handleEditorTheme}
                />
            }
        </>
    )
}