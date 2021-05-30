import '@emotion/react'

interface IPalette {
  main: string
  accent: string
}
declare module '@emotion/react' {
  export interface Theme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
        gray: string
      }
      primary: IPalette 
      secondary: IPalette
    }
  }
}
