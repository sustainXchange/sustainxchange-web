import { Container } from "@chakra-ui/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

export default function MdxTextWrapper({ children }) {
  return (
    <Container maxW="2xl">
      <MDXRenderer>{children}</MDXRenderer>
    </Container>
  )
}
