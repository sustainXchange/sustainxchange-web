import { Center, Container, Flex, Heading, Text } from "@chakra-ui/layout"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Gallery from "../../globals/gallery"

export default function Event() {
  const { allMdx: event } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/home/event/" } }
        ) {
          nodes {
            body
            frontmatter {
              title
            }
          }
        }
      }
    `
  )

  return (
    <Flex
      id="news"
      background="secondary"
      shadow="inner"
      width="100%"
      direction={["column", "column", "column", "row"]}
    >
      <Container maxW="xl" py="3rem">
        <Center>
          <Heading as="i" fontSize="4xl" fontFamily="mono" color="white">
            {event.nodes[0].frontmatter.title}
          </Heading>
        </Center>
        <Text fontSize="lg">
          <MDXRenderer>{event.nodes[0].body}</MDXRenderer>
        </Text>
      </Container>
      <Gallery />
    </Flex>
  )
}
