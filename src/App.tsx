import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ThemeProvider from './providers/themeProvider';
import { getPosts } from './api/getPosts';
import { addPost } from './api/addPost';
import { removePost } from './api/removePost';
import { updatePost } from './api/updatePost';


import { Post } from './types';
import Container from '@mui/material/Container';

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  async function handleAddPost() {
    await addPost({
      title: 'New Post',
      body: 'New Post Body',
  }).then((res) => console.log(res));
}

  async function handleDeletePost() {
    await removePost('51dasdaqf13616asd5q6').then((res) => console.log(res));
  }

  async function handleUpdatePost() {
    await updatePost('51dasdaqf13616asd5q6', {
      title: 'New title',
      content: 'new content',
    }).then((res) => console.log(res));
  }

  return (
    <ThemeProvider>
      <AppBar component='nav'>
        <Toolbar>
          <Typography>Masterclazz Blog</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>{posts.map(post => <li key={post._id}>post.title</li>)}</Container>
      <button onClick={handleAddPost}>Add post</button>
      <button onClick={handleDeletePost}>Delete post</button>
      <button onClick={handleUpdatePost}>Update post</button>

    </ThemeProvider>
  )
}

export default App;
