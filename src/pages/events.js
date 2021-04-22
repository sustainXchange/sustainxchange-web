import { Box, Center, Container, Heading } from "@chakra-ui/layout"
import { useStaticQuery, graphql } from "gatsby"
import SXCLogo from "../../content/globals/assets/logo.svg"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

export default function Events() {
  const { allMdx: event } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/events/next/" } }
        ) {
          nodes {
            body
            frontmatter {
              title
              eventDateFrom
              eventDateTo
              abstract
            }
          }
        }
      }
    `
  )

  const { body, frontmatter } = event.nodes[0]
  const { title, eventDateFrom, eventDateTo } = frontmatter

  return (
    <Box>
      <Container maxW="4xl">
        <Heading as="h2" variant="dateHeading" textAlign="center">
          {eventDateFrom} bis {eventDateTo}
        </Heading>
        <Heading textAlign="center">{title}</Heading>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Box>
  )
}
