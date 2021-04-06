import React from "react"
import { graphql } from "gatsby"

import { Heading, Text, Container } from "@chakra-ui/layout"
import TeamGrid from "../components/templates/teamGrid"

const Team = () => {
  // const { frontmatter } = data.index.edges[0].node
  // const { seoTitle, useSeoTitleSuffix } = frontmatter

  return (
    <>
      <Container maxW="2xl" mt='2rem'>
        <Heading>Das sind wir:</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
          cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Text>
      </Container>
      <TeamGrid />
    </>
  )
}

export default Team

// export const pageQuery = graphql``
