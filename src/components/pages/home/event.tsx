import { Center, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Gallery from "../../globals/gallery";
import { useLocalization } from "gatsby-theme-i18n";
import { getIntlNodes } from "../../../../i18n/intlQueries";

export default function Event({ title, body }) {
  const { locale } = useLocalization();

  const { allMdx: query } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/home/event/" } }
        ) {
          nodes {
            fields {
              locale
            }
            body
            frontmatter {
              title
            }
          }
        }
      }
    `
  );

  const nodes = getIntlNodes(query, locale);

  return (
    <Flex
      id="news"
      background="secondary"
      shadow="inner"
      width="100%"
      direction={["column", "column", "column", "row"]}
      alignItems="center"
    >
      <Container maxW="xl" py="3rem">
        <Center>
          <Heading as="i" fontSize="4xl" fontFamily="mono" color="white">
            {nodes[0].frontmatter.title}
          </Heading>
        </Center>
        <MDXRenderer>{nodes[0].body}</MDXRenderer>
      </Container>
      <Gallery />
    </Flex>
  );
}
