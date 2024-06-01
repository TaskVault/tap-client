import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#f6f7f9',
    },
    primary: {
      main: '#4DA4FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E0E0E0',
      contrastText: '#757575',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          textTransform: 'none',
          padding: '8px 16px',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
        },
        contained: {
          backgroundColor: '#4DA4FF',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1A73E8',
          },
        },
        outlined: {
          borderColor: '#E0E0E0',
          backgroundColor: '#F5F5F5',
          color: '#757575',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
        },
      },
    },
  },
})
