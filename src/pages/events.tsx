import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid
} from "@chakra-ui/layout"
import { useStaticQuery, graphql } from "gatsby"
import SXCLogo from "../../content/globals/assets/logo.svg"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/globals/seo"
import React from "react"
import { PersonTitle } from "../components/globals/person"
import SignUp from "../components/signUp"
import MdxTextWrapper from "../components/globals/mdxTextWrapper"
import EventPageWrapper from "../components/wrapper/EventPageWrapper"
import { MDXProvider } from "@mdx-js/react"

export default function Events() {
  const { allMdx: event } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/events/next/" } }
        ) {
          nodes {
            body
            frontmatter {
              title
              eventDateFrom
              eventDateTo
              abstract
            }
          }
        }
      }
    `
  )

  const { body, frontmatter } = event.nodes[0]
  const { title, eventDateFrom, eventDateTo } = frontmatter

  return (
    <MDXProvider components={{ SignUp }}>
      <SEO title="sustainXchange - Events" />
      <EventPageWrapper  />
      <Container maxW="4xl" mb="4rem">
        <Heading as="h2" variant="dateHeading" textAlign="center">
          {eventDateFrom} bis {eventDateTo}
        </Heading>
        <Heading textAlign="center">{title}</Heading>
        <MdxTextWrapper>{body}</MdxTextWrapper>
        {/* <Heading as="h2" textAlign="center">
          Unsere Speaker
        </Heading> */}
        {/* <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} mb="4rem">
          {speaker.map(person => (
            <PersonTitle key={person.lastName} person={person} />
          ))}
        </SimpleGrid> */}
      </Container>
    </MDXProvider>
  )
}
