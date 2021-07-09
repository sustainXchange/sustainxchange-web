import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container, Box, Heading } from "@chakra-ui/react";

const About = ({ nodes }) => {
  const { frontmatter, body } = nodes[0];

  return (
    <Box as="section" id="about" my="3rem" mt="4rem">
      <Container maxW="xl">
        <Heading variant="subHeading">{frontmatter.title}</Heading>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Box>
  );
};

export default About;
