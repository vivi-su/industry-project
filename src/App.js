import Header from "../src/components/header/Header";
import Hero from "../src/components/hero/Hero";
import Post from "./components/posts/Post";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Post />
    </div>
  );
}

export default App;
