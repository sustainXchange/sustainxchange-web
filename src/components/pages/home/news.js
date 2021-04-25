import {
  Box,
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
import { Stat, StatHelpText } from "@chakra-ui/stat"
import SignUp from "../../signUp"

function NewsCard(node) {
  return (
    <Box
      key={node.frontmatter.title}
      borderRadius="md"
      background="white"
      shadow="lg"
      padding="5"
    >
      <Container>
        <Stat>
          <StatHelpText>{node.frontmatter.date}</StatHelpText>
        </Stat>
        <Heading m="0">{node.frontmatter.title}</Heading>
        <MDXRenderer color="red">{node.body}</MDXRenderer>
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
          filter: { fileAbsolutePath: { regex: "/content/pages/home/news/" } }
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

  return (
    <Flex
      id="news"
      background="secondary"
      flexDirection="column"
      shadow="inner"
      width="100%"
      borderTop="base"
      pt="2rem !important"
    >
      <Container maxW="6xl" py="2rem">
        <Heading variant="subHeading" color="white" textAlign="left">
          Das ist neu:
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10} mt="2rem">
          {news.nodes.map(node => NewsCard(node))}
        </SimpleGrid>
      </Container>
      <SignUp />
    </Flex>
  )
}
