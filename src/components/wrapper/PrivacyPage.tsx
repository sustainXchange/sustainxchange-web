import React, { FC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../globals/seo";
import { seoTitleSuffix } from "../../../config";
import { Container, Flex } from "@chakra-ui/react";

const PrivacyPage: FC<{
  title: string;
  body: any;
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
        <Container>
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </Flex>
    </>
  );
};

export default PrivacyPage;
