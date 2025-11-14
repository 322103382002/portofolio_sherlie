// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: '#4e5ee4' },
    secondary: { main: '#7685f2' },
    background: {
      default: mode === "dark" ? "#121212" : "#f8f9fa",
      paper: mode === "dark" ? "#181c22" : "#fff",
    }
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: `'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`,
    fontWeightBold: 700,
  }
});
