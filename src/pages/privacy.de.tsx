import React from "react";
import { graphql } from "gatsby";
import PrivacyPage from "../components/wrapper/PrivacyPage";

const Imprint = ({ data }) => {
  const { body, frontmatter } = data.imprint.edges[0].node;
  const { title, seoTitle, useSeoTitleSuffix } = frontmatter;

  return (
    <PrivacyPage
      body={body}
      title={title}
      seo={{ seoTitle, useSeoTitleSuffix }}
    />
  );
};

export default Imprint;

export const pageQuery = graphql`
  {
    imprint: allMdx(filter: { fileAbsolutePath: { regex: "/privacy/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
  }
`;
