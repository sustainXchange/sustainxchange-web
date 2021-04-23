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
import React from "react"
import { PersonTitle } from "../components/globals/person"

const speaker = [
  {
    firstName: "Erika",
    lastName: "Hendriks",
    taskforce: "board",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit",
    Position: "Fellow"
    // Arbeitgeber: "McKinsey & Company",
    // personalSDG: "SDG 12",
    // LinkedIn: "",
    // "weitere Websites": ""
  },
  {
    firstName: "Astrid",
    lastName: "Bimmer",
    taskforce: "planning",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
    Position: "Referent",
    Arbeitgeber:
      "Hessisches Ministerium für Umwelt, Klimaschutz, Landwirtschaft und Verbraucherschutz",
    personalSDG: "SDG4",
    LinkedIn: "",
    "weitere Websites": ""
  },
  {
    firstName: "Erika",
    lastName: "Hendriks",
    taskforce: "board",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit",
    Position: "Fellow"
    // Arbeitgeber: "McKinsey & Company",
    // personalSDG: "SDG 12",
    // LinkedIn: "",
    // "weitere Websites": ""
  }
]

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
    <Box py="2rem">
      <Container maxW="4xl">
        <Heading as="h2" variant="dateHeading" textAlign="center">
          {eventDateFrom} bis {eventDateTo}
        </Heading>
        <Heading textAlign="center">{title}</Heading>
        <MDXRenderer>{body}</MDXRenderer>
        <Heading as="h2" textAlign="center">
          Unsere Speaker
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {speaker.map(person => (
            <PersonTitle key={person.lastName} {...person} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
