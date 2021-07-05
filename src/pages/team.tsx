import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Heading, Text, Container } from "@chakra-ui/layout"
import TeamGrid from "../components/pages/team/teamGrid"
import Layout from "../components/globals/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/globals/seo"

const Team = () => {
  const { allMdx: data } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/pages/team/" } }) {
        nodes {
          body
          frontmatter {
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO meta={[{ name: "robots", content: "noindex" }]} />
      <Container maxW="2xl" mt="2rem">
        <Heading>{data.nodes[0].frontmatter.title}</Heading>
        <MDXRenderer>{data.nodes[0].body}</MDXRenderer>
      </Container>
      <TeamGrid />
    </>
  )
}

export default Team
