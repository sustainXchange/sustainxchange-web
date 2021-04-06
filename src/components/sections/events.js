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
import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Tag } from "@chakra-ui/tag"
import { Stat, StatHelpText } from "@chakra-ui/stat"
import Gallery from "../gallery"

function NewsCard(node) {
  console.log(node)
  return (
    <Box borderRadius="md" background="white" shadow="lg" padding="5">
      <Container>
        <Stat>
          <StatHelpText>{node.frontmatter.date}</StatHelpText>
        </Stat>
        <Heading>{node.frontmatter.title}</Heading>
        <Text fontSize="lg">
          <MDXRenderer>{node.body}</MDXRenderer>
        </Text>
        {node.frontmatter.more && (
          <Link as={GatsbyLink} to={node.frontmatter.more} fontSize="lg">
            Mehr!
          </Link>
        )}
      </Container>
    </Box>
  )
}

export default function News() {
  const { allMdx: event } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "index/event/section/" } }
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
    <Flex id="news" background="secondary" shadow="inner" width="100%">
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
