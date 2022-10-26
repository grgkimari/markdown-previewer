import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <section id="content">
      <textarea className="textarea content-box" id="editor"></textarea>
      <aside id="preview" className="content-box">
        
      </aside>
      </section>
    </div>
  );
}

export default App;
