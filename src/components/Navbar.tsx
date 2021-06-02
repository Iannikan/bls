
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx, useTheme } from '@emotion/react';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const styledNav = css({
    minHeight: '5rem',
    backgroundColor: theme.palette.primary.accent,
  })
  return (
    <nav css={styledNav}>
      {document.title}
    </nav>
  )

}


export default Navbar;