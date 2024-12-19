import PostListFetch from "./components/PostListFetch";
import PostListAxios from "./components/PostListAxios";

export default function App(){
  return (
    <div className="App">
      <h1>React API Examples</h1>
      <PostListFetch />
      <PostListAxios />
    </div>
  );
};
