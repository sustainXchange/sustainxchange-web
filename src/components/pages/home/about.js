import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Box, Heading, Text, Center } from "@chakra-ui/react"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <Box as="section" id="about" my="3rem" mt="4rem">
      <Container maxW="xl">
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
