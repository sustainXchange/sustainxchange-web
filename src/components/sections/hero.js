import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { Box, Flex, Center, Heading, Container } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <Box as="sectionFirst" width="100%" height="50vh" id="hero">
      {/* <BackgroundImage
        fluid={frontmatter.image.childImageSharp.fluid}
        sx={{ width: "100%" }}
      > */}
      <Container>
        <Flex direction="column" maxWidth="950px" p="3rem">
          <Heading as="h2" className="subtitle" mt="1rem">
            {frontmatter.subtitle}
          </Heading>
        </Flex>
        <div className="description">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Container>
      {/* </BackgroundImage> */}
    </Box>
  )
}

export default Hero
