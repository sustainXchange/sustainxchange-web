import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/globals/layout"
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
        <Container maxW="xl" m="2rem">
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </Flex>
    </>
  )
}

export default Imprint

export const pageQuery = graphql`
  {
    imprint: allMdx(filter: { fileAbsolutePath: { regex: "/imprint/" } }) {
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
