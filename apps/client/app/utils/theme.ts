import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#f6f7f9',
    },
    // Define other palette properties here if needed
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
});
