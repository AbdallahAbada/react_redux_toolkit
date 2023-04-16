import './App.css';
import { PostList } from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';

export const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}


