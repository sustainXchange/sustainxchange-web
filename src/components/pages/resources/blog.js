import { Button } from "@chakra-ui/button"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/layout"
import { StatHelpText } from "@chakra-ui/stat"
import { Divider } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

function ToBlogButton(node) {
  return (
    <>
      <Box
        borderBottom="gray"
        key={node.slug}
        _hover={{ background: "gray.50" }}
        borderRadius="xl"
      >
        <Link width="100%" to={`/${node.slug}`}>
          <Flex
            justifyContent="space-between"
            flexDir={["column", "row"]}
            alignItems="center"
            width="100%"
          >
            <Container>
              <Heading fontSize="3xl">{node.frontmatter.title}</Heading>
              <StatHelpText mt="0.5rem">
                {node.frontmatter.date} - von {node.frontmatter.author}
              </StatHelpText>
              <Text>{node.frontmatter.abstract}</Text>
            </Container>
            <ChevronRightIcon color="secondary" boxSize="10" />
          </Flex>
        </Link>
      </Box>
    </>
  )
}

export default function Blog() {
  const { allMdx: data } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/resources/blog/" } }) {
        nodes {
          body
          slug
          frontmatter {
            title
            author
            date
            abstract
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing="8">
      {data.nodes.map(node => ToBlogButton(node))}
      {data.nodes.map(node => ToBlogButton(node))}
    </VStack>
  )
}
