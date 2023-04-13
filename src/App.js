import './App.css';
import { PostList } from './features/post/PostList';
import AddPostForm from './features/post/AddPostForm';

export const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}


