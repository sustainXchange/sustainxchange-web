import React, { useEffect } from "react";
import { graphql } from "gatsby";
import IndexPage from "../components/wrapper/IndexPage";
import { useLocalization } from "gatsby-theme-i18n";

const Index = ({ data }) => {
  const { locale } = useLocalization();
  useEffect(() => {
    console.log(locale);
  });
  return <IndexPage hero={data.hero.edges} about={data.about.edges} />;
};

export default Index;

export const pageQuery = graphql`
  {
    hero: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/pages/home/hero/" } }
    ) {
      edges {
        node {
          body
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
    }
    about: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/pages/home/about/" } }
    ) {
      edges {
        node {
          body
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
  }
`;
