
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react';
import { css, jsx, useTheme, Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
import IBMFont from '../fonts/IBMPlexSans-Thin.ttf';
import Navbar from './Navbar';




const Layout: React.FC = ({ children }) => {
  const styledContainer = css({
    width: '100vw',
    height: '100vw',
  })
  const styledMain = css({
    display: 'flex',
    justifyContent: 'center',
  })
  const globalStyles = css`
  @font-face {
    font-family: 'IBMFont';
    src: local('IBMFont'),
     url(${IBMFont}) format("truetype")
  }  
  * {
  font-family: "IBMFont"
  }
  `;

  return (
    <div css={styledContainer}>
      <Global styles={globalStyles}/>
      <Helmet>
        <title>Labor Statistics Map</title>
      </Helmet>
      <Navbar />
      <main css={styledMain}>
        {children}
      </main>
    </div>
  )

}

export default Layout;