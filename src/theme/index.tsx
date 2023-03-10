import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#2C4251',
      paper: '#1d2d37',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbaba',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#8dcbc2',
      dark: '#5a827c91',
    },
    secondary: {
      main: '#e1d999',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
