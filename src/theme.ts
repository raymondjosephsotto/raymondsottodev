import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Purple
    },
    secondary: {
      main: '#ff5722', // Orange
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;