import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simple Blog Website</h1>
      </header>
      <main>
        <PostForm />
        <Posts />
      </main>
    </div>
  );
}

export default App;
