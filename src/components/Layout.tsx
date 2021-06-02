
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react';
import { css, jsx, useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';



const Layout: React.FC = ({ children }) => {
  const styledContainer = css({
    width: '100vw',
    height: '100vw',
    boxSizing: 'border-box',
  })
  const styledMain = css({
    display: 'flex',
    justifyContent: 'center',
  })
  return (
    <div css={styledContainer}>
      <Helmet title={"Labor Statistics Map"} />
      <Navbar />
      <main css={styledMain}>
        {children}
      </main>
    </div>
  )

}

export default Layout;