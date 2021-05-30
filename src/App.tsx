import React from 'react';
import MyMap from './components/MyMap';
import './App.css'
import { ThemeProvider } from '@emotion/react';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <MyMap />
    </ThemeProvider>
  );
}

export default App;
