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
            Mehr erfahren
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
          limit: 6
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
    <Flex background="secondary" width="100%" mt="10rem !important">
      <Container maxW="4xl" py="1rem">
        <Center>
          <Heading fontFamily="mono" color="white">
            News:
          </Heading>
        </Center>
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={10} my="2rem">
          {news.nodes.map(node => NewsCard(node))}
        </SimpleGrid>
      </Container>
    </Flex>
  )
}
