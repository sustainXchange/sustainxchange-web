import { Container, Heading } from "@chakra-ui/layout";
import SEO from "../globals/seo";
import React from "react";
import SignUp from "../signUp";
import MdxTextWrapper from "../globals/mdxTextWrapper";
import { MDXProvider } from "@mdx-js/react";
import { useIntl } from "react-intl";

export default function EventPage({ eventDateFrom, eventDateTo, title, body }) {
  const intl = useIntl();

  return (
    <MDXProvider components={{ SignUp }}>
      <SEO title="sustainXchange - Events" />

      <Container maxW="4xl" mb="4rem">
        <Heading as="h2" variant="dateHeading" textAlign="center">
          {eventDateFrom &&
          {eventDateFrom}} 
          {eventDateTo && `${intl.formatMessage({ id: "to" })} ${eventDateTo}`}
        </Heading>
        <Heading textAlign="center">{title}</Heading>
        <MdxTextWrapper>{body}</MdxTextWrapper>
        {/* <Heading as="h2" textAlign="center">
          Unsere Speaker
        </Heading> */}
        {/* <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} mb="4rem">
          {speaker.map(person => (
            <PersonTitle key={person.lastName} person={person} />
          ))}
        </SimpleGrid> */}
      </Container>
    </MDXProvider>
  );
}
