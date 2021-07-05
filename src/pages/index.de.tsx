import React from "react";
import { graphql } from "gatsby";
import IndexPage from "../components/wrapper/IndexPage";

const Index = ({ data }) => {
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
