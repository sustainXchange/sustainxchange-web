import React from "react"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Box, Flex, Heading, Text } from "@chakra-ui/react"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <Box as="section" id="about">
      <Flex
        flexDir={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        m="2rem"
      >
        <Container m="1rem" maxW={["container.sm", "container.md"]}>
          <Heading as="h3" className="section-title">
            {frontmatter.title}
          </Heading>
          <Text>
            <MDXRenderer>{body}</MDXRenderer>
          </Text>
        </Container>
        <Box
          display={["none", "none", "block"]}
          overflow="hidden"
          boxSize="sm"
          boxShadow="dark-lg"
          borderRadius="10px"
        >
          <Img
            className="about-author"
            fluid={frontmatter.image.childImageSharp.fluid}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default About
