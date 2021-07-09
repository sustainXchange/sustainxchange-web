import React from "react";
import { graphql } from "gatsby";

import ImprintPage from "../components/wrapper/ImprintPage";
import { getIntlNodes } from "../../i18n/intlQueries";
import { useLocalization } from "gatsby-theme-i18n";

const Imprint = ({ data }) => {
  const { locale } = useLocalization();

  const nodes = getIntlNodes(data.allMdx, locale);
  const { body, frontmatter } = nodes[0];
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
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/imprint/" } }) {
      nodes {
        body
        frontmatter {
          title
          seoTitle
          useSeoTitleSuffix
          useSplashScreen
        }
        fields {
          locale
        }
      }
    }
  }
`;
