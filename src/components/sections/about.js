import React from "react"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Box, Flex, Heading, Spacer } from "@chakra-ui/react"

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <Box as="section" id="about" bg="blue.100" width="100%">
      <Flex
        flexDir={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        m="2rem"
      >
        <Container centerContent={false} m="1rem">
          <Heading as="h3" className="section-title">
            {frontmatter.title}
          </Heading>
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
        <Box
          display={["none", "none", "block"]}
          overflow="hidden"
          boxSize="sm"
          boxShadow={"0 0 2.5rem rgba(0, 0, 0, 0.5)"}
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
