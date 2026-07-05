import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import Macwindows from './Macwindows'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./note.scss"
const Note = ({windowName, setWindowState}) => {

    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))

    }, [])

    return (
        <div>
            <Macwindows windowName={windowName} setWindowState={setWindowState}>
                <div className="note-window">
                    <SyntaxHighlighter
                        language="typescript"
                        style={atelierDuneDark}
                        customStyle={{
                            background: "transparent",
                            margin: 0,
                            padding: 0
                        }}
                    >
                        {markdown}   <p>Loading...</p>
                    </SyntaxHighlighter>
                </div>
            </Macwindows>
        </div>
    )
}

export default Note
