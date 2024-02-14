import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6350c8',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#0b0c25',
      paper: '#6350c8',
    },
    text: {
      primary: '#f2f1f8',
    },
  },

  components: {
    MuiTab: {
      root: {
        textTransform: 'none',
      },
    },
  },
});

export default Theme;