import { VStack } from "@chakra-ui/layout";
import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import { graphql, useStaticQuery } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import React, { useEffect, useState } from "react";
import { PersonTitle } from "../../globals/person";

export default function TeamGrid() {
  const { locale, defaultLang } = useLocalization();
  const [team, setTeam] = useState([]);

  let teamQuery = useStaticQuery(graphql`
    query {
      teamData: allTeamJson {
        edges {
          node {
            firstName
            lastName
            bio {
              en
              de
            }
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

  useEffect(() => {
    let tmpTeam = teamQuery.teamData.edges.map(element => {
      element.node.img =
        teamQuery.teamImg.nodes[
          teamQuery.teamImg.nodes.findIndex(node => {
            return (
              node.name ===
              `${element.node.firstName}-${element.node.lastName}`.toLowerCase()
            );
          })
        ];
      return element;
    });

    // omit non current languages
    tmpTeam = tmpTeam.map(edge => {
      edge.node.bio = edge.node.bio[locale]
        ? edge.node.bio[locale]
        : edge.node.bio[defaultLang];
      return edge;
    });
    setTeam([...tmpTeam]);
  }, []);

  const board = team.filter(ele => ele.node.taskforce === "board");
  const finance = team.filter(ele => ele.node.taskforce === "finance");
  const content = team.filter(ele => ele.node.taskforce === "content");
  const planning = team.filter(ele => ele.node.taskforce === "planning");
  // map img to person

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
