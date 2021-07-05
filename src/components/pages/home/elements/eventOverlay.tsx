import React from "react";
import { Box, Flex, Text, Heading, Container, Link } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { LocalizedLink as GLink, useLocalization } from "gatsby-theme-i18n";
import { getIntlNodes } from "../../../../../i18n/intlQueries";

const EventOverlay = () => {
  const { locale } = useLocalization();

  const { allMdx: query } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/pages/events/next/" } }
      ) {
        nodes {
          frontmatter {
            eventDateFrom
            eventDateTo
            title
            abstract
          }
          fields {
            locale
          }
        }
      }
    }
  `);

  const nodes = getIntlNodes(query, locale);

  const { frontmatter } = nodes[0];

  const { eventDateFrom, eventDateTo, title, abstract } = frontmatter;

  return (
    <Box
      borderTop="base"
      borderLeft={[0, 0, 0, "base"]}
      borderRight={[0, 0, 0, 0, "base"]}
      borderBottom={[0, 0, 0, "base"]}
      padding="0.5rem"
      transform={[
        "translate(0, 0)",
        "translate(0, 0)",
        "translate(0, 0)",
        "translate(0, 25%)"
      ]}
      background="white"
      alignSelf={["stretch", "stretch", "stretch", "flex-end"]}
      p="2rem"
      shadow="2xl"
    >
      <Container maxW="2xl" p={0}>
        <Flex
          flexDir={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Container p={0}>
              <Text as="Mono" fontFamily="mono" fontSize="3xl" color="warning">
                {eventDateFrom} bis {eventDateTo}
              </Text>
              <Heading as="h2" fontSize="5xl">
                {title}
              </Heading>
            </Container>
          </Box>
          <Box>
            <Container
              textAlign="right"
              maxW="xl"
              p={0}
              mt={["2rem", "2rem", 0]}
            >
              <Text fontSize="xl">{abstract}</Text>
              <Link as={GLink} to="/events" fontSize="xl">
                Mehr erfahren
              </Link>
            </Container>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default EventOverlay;
