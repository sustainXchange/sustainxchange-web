import React from "react"
import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/globals/seo"
import { seoTitleSuffix } from "../../config"

import { Container, Flex } from "@chakra-ui/react"

const Imprint = ({ data }) => {
  const { body, frontmatter } = data.imprint.edges[0].node
  const { title, seoTitle, useSeoTitleSuffix } = frontmatter

  return (
    <>
      <SEO
        title={
          useSeoTitleSuffix ? `${seoTitle} - ${seoTitleSuffix}` : `${seoTitle}`
        }
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <Flex id={title}>
        <Container>
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </Flex>
    </>
  )
}

export default Imprint

export const pageQuery = graphql`
  {
    imprint: allMdx(filter: { fileAbsolutePath: { regex: "/privacy/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
  }
`
