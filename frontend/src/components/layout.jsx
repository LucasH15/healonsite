import React from "react"
import { createTheme, CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material"

import Header from "./header"
import Footer from "./footer"

const theme = createTheme({
  palette: {
    primary: {
      main: "#A58144"
    },
    secondary: {
      main: "#5D6663"
    },
    text: {
      primary: "#1A1F1C"
    }
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontFamily: "El Messiri, sans-serif",
      color: "#A58144"
    },
    h2: {
      fontFamily: "El Messiri, sans-serif"
    },
    h3: {
      fontFamily: "El Messiri, sans-serif"
    },
    h4: {
      fontFamily: "El Messiri, sans-serif"
    },
    h5: {
      fontFamily: "El Messiri, sans-serif"
    },
    h6: {
      fontFamily: "El Messiri, sans-serif"
    }
  }
})

const Layout = ({children, withHeader = true, withFooter = true}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        "#gatsby-focus-wrapper": {
          "min-height": "100vh",
          display: "flex",
          "flex-direction": "column"
        }
      }} />
      {withHeader && <Header />}
      <main>
        {children}
      </main>
      {withFooter && <Footer />}
    </ThemeProvider>
  )
}

export default Layout
