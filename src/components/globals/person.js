import React from "react"
import { Box, Container, Text } from "@chakra-ui/layout"

export const PersonTitle = ({ person }) => (
  <Container maxW="2xs" p="0">
    <Box bg="tomato" height="250px"></Box>
    <Text fontFamily="mono" mt="0.5rem" mb="0.5rem">
      {person.firstName + person.lastName
        ? person.firstName + " " + person.lastName
        : "Anonymous"}
    </Text>
    <Text>
      {person.bio
        ? person.bio
        : "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."}
    </Text>
  </Container>
)
