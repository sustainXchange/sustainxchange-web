import React from "react";
import { graphql } from "gatsby";
import PrivacyPage from "../components/wrapper/PrivacyPage";
import { getIntlNodes } from "../../i18n/intlQueries";
import { useLocalization } from "gatsby-theme-i18n";

const Imprint = ({ data }) => {
  const { locale } = useLocalization();

  const nodes = getIntlNodes(data.allMdx, locale);
  const { body, frontmatter } = nodes[0];
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
    allMdx(filter: { fileAbsolutePath: { regex: "/privacy/" } }) {
      nodes {
        body
        fields {
          locale
        }
        frontmatter {
          title
          seoTitle
          useSeoTitleSuffix
          useSplashScreen
        }
      }
    }
  }
`;
