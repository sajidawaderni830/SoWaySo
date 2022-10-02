import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDom from 'react-dom';
import {theme} from "./theme"
import App from './App';
 
ReactDom.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        </ThemeProvider>
        
    <App />
    </React.StrictMode>
   
    , document.getElementById('root'))