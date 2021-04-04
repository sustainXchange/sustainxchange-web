import React from "react"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Box, Flex, Heading, Text, Center } from "@chakra-ui/react"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <Box as="section" id="about" mt="2rem">
      <Container maxW="4xl">
        <Center m="1rem">
          <Heading as="i" fontFamily="mono">
            {frontmatter.title}
          </Heading>
        </Center>
        <Text fontSize="lg" align="center">
          <MDXRenderer>{body}</MDXRenderer>
        </Text>
      </Container>
      {/* <Box
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
        </Box> */}
    </Box>
  )
}

export default About
