import './App.css';
import {useState} from 'react'
import {marked} from 'marked'

marked.setOptions({
  breaks: true,
})

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

## This is where your text goes

Here's how code is handled inline, \`<div></div>\`, check preview panel for results.

Here's how multi-line code is handled:

\`\`\`

console.log(\"Hello\");
\`\`\`

You can also make text **bold** 
Or _italic_.

Strikethrough ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


- List items look like this


1. And there are numbered lists too.

Embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `)
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <section id="content">
      <textarea className="textarea content-box" id="editor" value={text}  placeholder="Type markdown here" onChange = {(event) => {
        setText(event.target.value)
        
        }}></textarea>
      <div id="preview" className="content-box" dangerouslySetInnerHTML={{
        __html: marked.parse(text)
      }}>
        
      </div>
      </section>
    </div>
  );
}

export default App;
