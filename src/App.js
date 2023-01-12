import './App.css';
import { Box, Container } from '@mui/system';

import bg from './assets/Background.svg'
import logo from './assets/logo.svg'
import { createTheme, CssBaseline, SvgIcon, ThemeProvider, Typography } from '@mui/material';
import CardForm from './CardForm/CardForm';
import { themeOptions } from './theme';

function App() {
  const customTheme = createTheme(themeOptions)
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center' }}>
      <img src={bg} style={{ position: 'absolute', zIndex: '-10', width: '100%' }}>
      </img>
      <ThemeProvider theme={customTheme}>
        <Container maxWidth='xl' sx={{ justifyContent: 'center' }}>

          <Box sx={{ margin: '2rem 0rem', marginBottom: '0rem' }}>
            <img src={logo}>
            </img>
          </Box>

          <Container maxWidth='sm'>
            <CardForm></CardForm>
          </Container>
          <Container>
            <Typography textAlign='center' sx={{ margin: '5rem' }}>
              Terms of use  |  Privacy policy
            </Typography>
          </Container>
        </Container>
      </ThemeProvider>
    </Container>
  );
}

export default App;
