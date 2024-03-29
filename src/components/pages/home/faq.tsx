import { AccordionItem } from "@chakra-ui/accordion";
import { AccordionButton } from "@chakra-ui/accordion";
import { AccordionPanel } from "@chakra-ui/accordion";
import { AccordionIcon } from "@chakra-ui/accordion";
import { Accordion } from "@chakra-ui/accordion";
import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useLocalization } from "gatsby-theme-i18n";
import React from "react";
import { getIntlNodes } from "../../../../i18n/intlQueries";

function Item(data) {
  const { body } = data;

  return (
    <AccordionItem fontSize="xl" key={data.frontmatter.title}>
      <AccordionButton>
        <Flex textAlign="left" justifyContent="space-between" width="100%">
          {/* <Heading color="white" fontSize="2xl"> */}
          <Heading fontSize="2xl">{data.frontmatter.title}</Heading>
          <AccordionIcon boxSize="8" ml="0.25rem" />
        </Flex>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <MDXRenderer>{body}</MDXRenderer>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default function FAQ() {
  const { locale } = useLocalization();

  const { allMdx: query } = useStaticQuery(graphql`
    query MyQuery {
      allMdx(filter: { fileAbsolutePath: { regex: "/pages/home/faq/" } }) {
        nodes {
          body
          frontmatter {
            title
          }
          fields {
            locale
          }
        }
      }
    }
  `);

  const nodes = getIntlNodes(query, locale);

  return (
    // <Flex background="secondary" width="100%" py="2rem">
    <Flex width="100%" py="2rem">
      {/* <Container color="white" maxW="3xl"> */}
      <Container maxW="3xl">
        {/* <Heading variant="subHeading" color="white"> */}
        <Heading variant="subHeading">FAQs</Heading>
        <Accordion allowMultiple>{nodes.map(node => Item(node))}</Accordion>
      </Container>
    </Flex>
  );
}
