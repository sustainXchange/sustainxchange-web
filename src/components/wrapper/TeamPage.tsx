import React, { FC } from "react";
import { Heading, Container } from "@chakra-ui/layout";
import TeamGrid from "../pages/team/teamGrid";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../globals/seo";

const TeamPage: FC<{ title: string; body: any; seo?: any }> = ({
  title,
  body,
  seo
}) => {
  return (
    <>
      <SEO
        title="sustainXchange Team"
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <Container maxW="2xl" mt="2rem">
        <Heading>{title}</Heading>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
      <TeamGrid />
    </>
  );
};

export default TeamPage;
