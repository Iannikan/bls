
/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react';
import { css, jsx, useTheme, Global } from '@emotion/react';
import { Helmet } from 'react-helmet';
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
  const GlobalStyles = () => <Global styles={css({
    '*': {
      boxSizing: 'border-box',
    }
  })} />
  return (
    <div css={styledContainer}>
      {GlobalStyles()}
      <Helmet title={"Labor Statistics Map"} />
      <Navbar />
      <main css={styledMain}>
        {children}
      </main>
    </div>
  )

}

export default Layout;