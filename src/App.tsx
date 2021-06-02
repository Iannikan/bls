import React from 'react';
import MyMap from './components/MyMap';
import './App.css'
import { ThemeProvider } from '@emotion/react';
import theme from './Theme';
import Layout from './components/Layout';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Layout>
        <MyMap />
      </Layout>
    </ThemeProvider >
  );
}

export default App;
