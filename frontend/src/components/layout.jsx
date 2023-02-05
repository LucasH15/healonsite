import React from "react"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #A58144;
    --black: #1A1F1C;
    --grey: #5D6663;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    font-family: 'Nunito', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'El Messiri', sans-serif;
  }
  
  h1 {
    font-size: 56px;
    color: var(--primary);
  }
  
  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  footer {
    margin-top: auto;
  }
`

const Layout = ({ children, withHeader = true, withFooter = true }) => {
  return (
    <>
      <GlobalStyle />
      {withHeader && <Header />}
      <main>
        {children}
      </main>
      {withFooter && <Footer />}
    </>
  )
}

export default Layout
