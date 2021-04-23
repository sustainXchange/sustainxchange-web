import { VStack } from "@chakra-ui/layout"
import { Container, Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { PersonTitle } from "../../globals/person"

export default function TeamGrid() {
  const team = useStaticQuery(graphql`
    {
      allTeamJson {
        edges {
          node {
            firstName
            lastName
            bio
            taskforce
          }
        }
      }
    }
  `)

  const board = team.allTeamJson.edges.filter(
    ele => ele.node.taskforce === "board"
  )
  const finance = team.allTeamJson.edges.filter(
    ele => ele.node.taskforce === "finance"
  )
  const content = team.allTeamJson.edges.filter(
    ele => ele.node.taskforce === "content"
  )
  const planning = team.allTeamJson.edges.filter(
    ele => ele.node.taskforce === "planning"
  )

  return (
    <VStack spacing={"3rem"} alignItems="flex-start" mb="2rem">
      <Box>
        <Heading as="h3" mt="3rem">
          Unsere Taskforces
        </Heading>
        <Heading as="h4" size="lg" mb="2rem" mt="1rem">
          Vorstandsteam
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {board.map(person => (
            <PersonTitle key={person.lastName} {...person} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          Sponsoring und Finanzen
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {finance.map(person => (
            <PersonTitle key={person.lastName} {...person} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          Inhalt und Speaker
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {content.map(person => (
            <PersonTitle key={person.lastName} {...person} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          Planung und Marketing
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {planning.map(person => (
            <PersonTitle key={person.lastName} {...person} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  )
}
