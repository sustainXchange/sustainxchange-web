import { VStack } from "@chakra-ui/layout";
import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import { graphql, useStaticQuery } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import React, { useEffect, useState } from "react";
import { PersonTitle } from "../../globals/person";
import { useIntl } from "react-intl";

export default function TeamGrid() {
  const { locale } = useLocalization();
  const [team, setTeam] = useState([]);
  const intl = useIntl();

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
    setTeam([...tmpTeam]);
  }, [locale]);

  const board = team.filter(ele => ele.node.taskforce === "board");
  const finance = team.filter(ele => ele.node.taskforce === "finance");
  const content = team.filter(ele => ele.node.taskforce === "content");
  const planning = team.filter(ele => ele.node.taskforce === "planning");
  // map img to person

  return (
    <VStack spacing={"3rem"} alignItems="flex-start" mb="2rem">
      <Box>
        <Heading as="h3" mt="3rem">
          {intl.formatMessage({ id: "ourTaskforces" })}
        </Heading>
        <Heading as="h4" size="lg" mb="2rem" mt="1rem">
          {intl.formatMessage({ id: "board" })}
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {board.map(person => (
            <PersonTitle
              lang={locale}
              key={person.node.lastName}
              person={person.node}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          {intl.formatMessage({ id: "finance" })}
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {finance.map(person => (
            <PersonTitle
              lang={locale}
              key={person.node.lastName}
              person={person.node}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          {intl.formatMessage({ id: "speaker" })}
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {content.map(person => (
            <PersonTitle
              lang={locale}
              key={person.node.lastName}
              person={person.node}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h4" size="lg" mb="2rem" mt="2rem">
          {intl.formatMessage({ id: "planningPR" })}
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {planning.map(person => (
            <PersonTitle
              lang={locale}
              key={person.node.lastName}
              person={person.node}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
