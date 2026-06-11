import { useState } from 'react'
import Editor from "@monaco-editor/react"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css";
import axios from "axios"
import './App.css'
import './responsive.css'

function App() {
  const [code, setcode] = useState(`function sum () {
    return 1 + 1
}`)

  const [review, setreview] = useState(``)

  async function reviewCode () {
    // const responce = await axios.post('http://localhost:3000/ai/get-review', {code})
    const responce = await axios.post('https://ai-code-review-backed.onrender.com/ai/get-review', {code})
    setreview(responce.data)
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">AI Code Review</div>
      </nav>
      <main>
         <div className="left">
              <div className="code">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  value={code}
                  onChange={(value) => setcode(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 16,
                    fontFamily: '"Fira Code", "Fira Mono", monospace',
                    scrollBeyondLastLine: false,
                    padding: { top: 10, bottom: 10 }
                  }}
                />
              </div>
              <button onClick={reviewCode} className="review-button">Review</button>
         </div>
         <div className="right">
           <div className="review-output">
             <Markdown
              rehypePlugins={[rehypeHighlight]}
              >
              {review}
              </Markdown>
           </div>
         </div>
      </main>
    </>
  )
}

export default App