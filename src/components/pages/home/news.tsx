import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Link
} from "@chakra-ui/layout";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { LocalizedLink as GLink, useLocalization } from "gatsby-theme-i18n";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Stat, StatHelpText } from "@chakra-ui/stat";
import SignUp from "../../signUp";
import { getIntlNodes } from "../../../../i18n/intlQueries";
import { useIntl } from "react-intl";

function NewsCard(node) {
  return (
    <Box
      key={node.frontmatter.title}
      borderRadius="md"
      background="white"
      shadow="lg"
      padding="5"
    >
      <Container>
        <Stat>
          <StatHelpText>{node.frontmatter.date}</StatHelpText>
        </Stat>
        <Heading m="0">{node.frontmatter.title}</Heading>
        <MDXRenderer color="red">{node.body}</MDXRenderer>
        {node.frontmatter.more && (
          <Link as={GLink} to={node.frontmatter.more} fontSize="lg">
            Mehr!
          </Link>
        )}
      </Container>
    </Box>
  );
}

export default function News() {
  const { locale } = useLocalization();
  const intl = useIntl();

  const { allMdx: news } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/home/news/" } }
          limit: 4
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          nodes {
            body
            frontmatter {
              date
              title
              more
            }
            fields {
              locale
            }
          }
        }
      }
    `
  );

  const nodes = getIntlNodes(news, locale);

  return (
    <Flex
      id="news"
      background="secondary"
      flexDirection="column"
      shadow="inner"
      width="100%"
      borderTop="base"
      pt="2rem !important"
    >
      <Container maxW="6xl" py="2rem">
        <Heading variant="subHeading" color="white" textAlign="left">
          {intl.formatMessage({ id: "news" })}:
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10} mt="2rem">
          {nodes.map(node => NewsCard(node))}
        </SimpleGrid>
      </Container>
      <SignUp />
    </Flex>
  );
}
