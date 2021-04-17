import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Heading, Text, Container } from "@chakra-ui/layout"
import TeamGrid from "../components/pages/team/teamGrid"
import Layout from "../components/globals/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Team = () => {
  const { allMdX: team } = useStaticQuery(graphql`
    {
      event: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/pages/team/" } }
      ) {
        edges {
          node {
            body
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Container maxW="2xl" mt="2rem">
        <Heading>{team.edges[0].node.frontmatter.title}</Heading>
        <MDXRenderer>{team.edges[0].node.body}</MDXRenderer>
      </Container>
      <TeamGrid />
    </>
  )
}

export default Team
