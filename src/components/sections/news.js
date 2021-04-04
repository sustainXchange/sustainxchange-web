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
  const { allMdx: news } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "index/news/" } }
          limit: 4
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            body
            frontmatter {
              date
              title
              more
            }
          }
        }
      }
    `
  )

  console.log(news.nodes.map(node => node))

  return (
    <Flex
      id="news"
      background="secondary"
      shadow="inner"
      width="100%"
      borderTop="base"
      pt="2rem !important"
    >
      <Container maxW="6xl" py="2rem">
        <Heading as="i" fontSize="4xl" fontFamily="mono" color="white">
          Das ist neu:
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10} my="2rem">
          {news.nodes.map(node => NewsCard(node))}
        </SimpleGrid>
      </Container>
    </Flex>
  )
}
