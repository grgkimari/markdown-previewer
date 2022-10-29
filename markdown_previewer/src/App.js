import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <section id="content">
      <textarea className="textarea content-box" id="editor" placeholder="Type markdown here"></textarea>
      <aside id="preview" className="content-box">
        <p>Markdown will render here</p>
      </aside>
      </section>
    </div>
  );
}

export default App;
