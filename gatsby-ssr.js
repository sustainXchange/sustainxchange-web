/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link, Text } from "@chakra-ui/react"
import Layout from "./src/components/globals/layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        p: Text,
        a: Link
      }}
    >
      {element}
    </MDXProvider>
  )
}
