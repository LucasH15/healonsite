import * as React from "react"
import { createGlobalStyle } from 'styled-components'

import Layout from "../components/layout"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #E3E2D9;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle />
      <h1>Titre 1</h1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
