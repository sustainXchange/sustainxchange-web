import React from "react";
import { graphql } from "gatsby";

import ImprintPage from "../components/wrapper/ImprintPage";

const Imprint = ({ data }) => {
  const { body, frontmatter } = data.imprint.edges[0].node;
  const { title, seoTitle, useSeoTitleSuffix } = frontmatter;

  return (
    <ImprintPage
      title={title}
      body={body}
      seo={{ seoTitle: seoTitle, useSeoTitleSuffix: useSeoTitleSuffix }}
    />
  );
};

export default Imprint;

export const pageQuery = graphql`
  {
    imprint: allMdx(filter: { fileAbsolutePath: { regex: "/imprint/" } }) {
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
