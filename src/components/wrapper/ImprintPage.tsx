import React, { FC } from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../globals/seo";
import { seoTitleSuffix } from "../../../config";

import { Container, Flex } from "@chakra-ui/react";

const ImprintPage: FC<{
  body: any;
  title: string;
  seo: {
    useSeoTitleSuffix: Boolean;
    seoTitle: string;
  };
}> = ({ title, body, seo }) => {
  return (
    <>
      <SEO
        title={
          seo.useSeoTitleSuffix
            ? `${seo.seoTitle} - ${seoTitleSuffix}`
            : `${seo.seoTitle}`
        }
        meta={[{ name: "robots", content: "noindex" }]}
      />
      <Flex id={title}>
        <Container maxW="xl" m="2rem">
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </Flex>
    </>
  );
};

export default ImprintPage;
