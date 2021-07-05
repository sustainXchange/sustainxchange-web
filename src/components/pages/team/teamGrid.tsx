import { VStack } from "@chakra-ui/layout";
import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { PersonTitle } from "../../globals/person";

export default function TeamGrid() {
  let team = useStaticQuery(graphql`
    query {
      teamData: allTeamJson {
        edges {
          node {
            firstName
            lastName
            bio
            taskforce
          }
        }
      }
      teamImg: allFile(
        filter: {
          absolutePath: { regex: "/content/pages/team/members/images/" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  team = team.teamData.edges.map(element => {
    element.node.img =
      team.teamImg.nodes[
        team.teamImg.nodes.findIndex(node => {
          return (
            node.name ===
            `${element.node.firstName}-${element.node.lastName}`.toLowerCase()
          );
        })
      ];
    return element;
  });

  const board = team.filter(ele => ele.node.taskforce === "board");
  const finance = team.filter(ele => ele.node.taskforce === "finance");
  const content = team.filter(ele => ele.node.taskforce === "content");
  const planning = team.filter(ele => ele.node.taskforce === "planning");

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
            <PersonTitle key={person.node.lastName} person={person.node} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          Sponsoring und Finanzen
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {finance.map(person => (
            <PersonTitle key={person.node.lastName} person={person.node} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          Inhalt und Speaker
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {content.map(person => (
            <PersonTitle key={person.node.lastName} person={person.node} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          Planung und Marketing
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {planning.map(person => (
            <PersonTitle key={person.node.lastName} person={person.node} />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
