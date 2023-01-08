import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ThemeProvider from './providers/themeProvider';
import ApiProvider from './providers/apiProvider';

import Container from '@mui/material/Container';

import Posts from './components/posts/Posts';

function App() {

  return (
    <ThemeProvider>
      <ApiProvider>
        <AppBar component='nav'>
          <Toolbar>
            <Typography>Masterclazz Blog</Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{width: "100vw"}}>
          <Posts />
        </Container>
      </ApiProvider>
    </ThemeProvider>
  );
}

export default App;
