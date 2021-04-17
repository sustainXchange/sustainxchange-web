import { Box, Container, Flex, Heading } from "@chakra-ui/layout"
import Img from "gatsby-image"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Partner(node) {
  return (
    <Box borderRadius="md" padding={[0, "5"]} key={node.frontmatter.name}>
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
          filter: {
            fileAbsolutePath: { regex: "/content/pages/home/partners/" }
          }
          sort: { fields: frontmatter___importance, order: ASC }
        ) {
          nodes {
            frontmatter {
              name
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
        <Heading variant="subHeading">Unsere Partner</Heading>
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
