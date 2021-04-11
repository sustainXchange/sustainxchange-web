import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, SimpleGrid } from "@chakra-ui/layout"
import GatsbyImage from "gatsby-image"

export default function Gallery() {
  const { allFile: data } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            absolutePath: { regex: "/content/pages/home/event/images/" }
          }
        ) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )

  const images = data.nodes.filter(img => img.childImageSharp !== null)

  return (
    <Container p="0" borderRadius="xl" overflow="hidden" my="2rem" shadow="lg">
      <SimpleGrid columns={[1, 1, 2]} spacing="0.5rem">
        {images.map(img => (
          <Box height="200px" overflow="hidden" key={img.originalName}>
            <GatsbyImage fluid={img.childImageSharp.fluid} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
