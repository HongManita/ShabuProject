import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#64DD17',
      contrastText: '#ffffff',
      light: '#e4b0d8',
    },
    secondary: {
      main: '#fdffff',
      light: '#DFDFDF',
    },
    info: {
      main: '#05fbe0',
    },
    warning: {
      main: '#00edf5',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
