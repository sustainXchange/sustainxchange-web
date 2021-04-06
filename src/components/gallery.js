import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Container } from "@chakra-ui/layout"

export default function Gallery() {
  const { allFile: data } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/event/section/images/" } }) {
          nodes {
            childImageSharp {
              fixed(height: 200, quality: 90) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `
  )

  const images = data.nodes

  return (
    <Container>
      <div>{images.map(img => img.childImageSharp.fixed.originalName)}</div>
    </Container>
  )
}
