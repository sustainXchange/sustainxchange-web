import React from "react";
import { AspectRatio, Box, Container, Text } from "@chakra-ui/layout";
import GatsbyImage from "gatsby-image";

export const PersonTitle = ({ person, lang }) => (
  <Container maxW="2xs" p="0">
    <AspectRatio ratio={1}>
      <Box overflow="hidden" background="warning">
        {person.img && (
          <GatsbyImage
            style={{ position: "initial" }}
            fluid={person.img.childImageSharp.fluid}
          />
        )}
      </Box>
    </AspectRatio>
    <Text fontFamily="mono" mt="0.5rem" mb="0.5rem">
      {person.firstName + person.lastName
        ? person.firstName + " " + person.lastName
        : "Anonymous"}
    </Text>
    <Text>
      {person.bio[lang]
        ? person.bio[lang]
        : "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."}
    </Text>
  </Container>
);
