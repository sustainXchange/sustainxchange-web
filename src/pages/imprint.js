import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/globals/layout"
import SEO from "../components/globals/seo"
import { seoTitleSuffix } from "../../config"

import { Flex } from "@chakra-ui/react"

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
        <h1 data-testid="heading">{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </Flex>
    </>
  )
}

Imprint.propTypes = {
  data: PropTypes.shape({
    imprint: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            body: PropTypes.string.isRequired,
            frontmatter: PropTypes.object.isRequired
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired
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
