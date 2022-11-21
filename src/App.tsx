import { useEffect, useState } from 'react';

import ThemeProvider from './providers/themeProvider';
import fetcher from './api/fetcher';
import Container from '@mui/material/Container';


async function getPosts () {
  return fetcher.get('/v1/posts');
}

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => console.log(res));
  }, []);

  return (
    <ThemeProvider>
      <Container maxWidth='md'>Lorem Ipsum</Container>
    </ThemeProvider>
  )
}

export default App
