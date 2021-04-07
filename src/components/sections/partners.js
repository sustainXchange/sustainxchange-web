import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link
} from "@chakra-ui/layout"
import Img from "gatsby-image"
import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Tag } from "@chakra-ui/tag"
import { Stat, StatHelpText } from "@chakra-ui/stat"

function Partner(node) {
  return (
    <Box borderRadius="md" padding={[0, "5"]}>
      {/* <Container boxSize={node.frontmatter.size ? node.frontmatter.size : 5}> */}
      <Img fixed={node.frontmatter.image.childImageSharp.fixed} />
    </Box>
  )
}

export default function Partners() {
  const { allMdx: data } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "index/partners/" } }
          sort: { fields: frontmatter___importance, order: ASC }
        ) {
          nodes {
            frontmatter {
              size
              image {
                childImageSharp {
                  fixed(height: 200, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const partners = data.nodes.filter(img => img.childImageSharp !== null)

  return (
    <Flex id="partners" width="100%" pt="2rem !important">
      <Container maxW="6xl" py="2rem">
        <Heading as="i" fontSize="4xl" fontFamily="mono">
          Unsere Partner
        </Heading>
        <Flex
          my="2rem"
          direction={["column", "column", "row", "row"]}
          alignItems="center"
        >
          {partners.map(node => Partner(node))}
        </Flex>
      </Container>
    </Flex>
  )
}
