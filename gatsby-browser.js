/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link, Text } from "@chakra-ui/react"
import Layout from "./src/components/globals/layout"

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        p: Text,
        a: Link
        // eslint-disable-next-line react/display-name
        // img: props => {
        //   console.log(props)
        //   return <Img {...props} />
        // }
      }}
    >
      {element}
    </MDXProvider>
  )
}
