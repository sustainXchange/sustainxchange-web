import { Heading, StackDivider, VStack } from "@chakra-ui/layout";
import { useStaticQuery, graphql } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import React from "react";
import { getIntlNodes } from "../../../../i18n/intlQueries";
import { ResourceCard } from "../../globals/resourceCard";
import { useIntl } from "react-intl";

export default function HowTo() {
  const { locale } = useLocalization();
  const intl = useIntl();

  const { allMdx: data } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/resources/howto/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          body
          slug
          frontmatter {
            urlOnlyResource
            title
            author
            date
            abstract
          }
          fields {
            locale
          }
        }
      }
    }
  `);

  const nodes = getIntlNodes(data, locale, true);

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing="8">
      {nodes.length ? (
        nodes.map((node) => <ResourceCard key={node.slug} node={node} />)
      ) : (
        <Heading fontSize="2xl" fontFamily="mono" color="gray.500">
          {intl.formatMessage({ id: "nothingToSee" })}
        </Heading>
      )}
    </VStack>
  );
}
