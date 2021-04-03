import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { Box, Flex, Center, Heading, Container, Text } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"
import Event from "./event"

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { subtitle, title } = frontmatter

  return (
    <Box as="sectionFirst" minHeight={[0, 0, 0, "50vh", "50vh"]} id="hero">
      {/* <Container height="100%"> */}
      <Box position="relative" height="100%" display="block" overflow="visible">
        <Container
          position="absolute"
          top="0"
          left="0"
          background="primary"
          height="100%"
          transform="skew(-10deg, 0deg)"
          zIndex="-1"
        />
        <Container
          position="absolute"
          top="0"
          left="0"
          background="secondary"
          height="100%"
          transform="skew(-10deg, 0deg) translate(10%,0)"
          zIndex="-2"
        />
        <Container direction="column" p="3rem" maxW="xl" m="0">
          <Heading color="white" as="h2" className="subtitle" mt="1rem">
            {title}
          </Heading>
          <Text color="white" fontWeight="600">
            {subtitle}
          </Text>
        </Container>
      </Box>
      {/* </Container> */}
    </Box>
  )
}

export default Hero
