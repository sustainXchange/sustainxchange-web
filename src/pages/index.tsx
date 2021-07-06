import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import IndexPage from "../components/wrapper/IndexPage";
import { useLocalization } from "gatsby-theme-i18n";
import { getIntlNodes } from "../../i18n/intlQueries";
import Layout from "../components/globals/layout";

const Index = ({ data }) => {
  const { locale } = useLocalization();
  console.log("locale is", locale);

  return (
    <IndexPage
      hero={getIntlNodes(data.hero, locale)}
      about={getIntlNodes(data.about, locale)}
    />
  );
};

export default Index;

export const pageQuery = graphql`
  {
    hero: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/pages/home/hero/" } }
    ) {
      nodes {
        body
        fields {
          locale
        }
        frontmatter {
          title
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    about: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/pages/home/about/" } }
    ) {
      nodes {
        body
        fields {
          locale
        }
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
