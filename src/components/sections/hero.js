import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SXCLogo from "../../../content/assets/logo.svg"
import { Box, Flex, Center, Heading } from "@chakra-ui/react"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <Box as="section" width="100%" id="hero">
      <Center>
        <Flex direction="column" maxWidth="950px" p="3rem">
          <SXCLogo
            width="100%"
            height="100%"
            shadow={"0 0 2.5rem rgba(0, 0, 0, 0.5)"}
          />
          <Heading as="h2" className="subtitle" mt="1rem">
            {frontmatter.subtitle}
          </Heading>
        </Flex>
        <div className="description">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Center>
    </Box>
  )
}

export default Hero
