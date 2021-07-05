import React from "react";
import { graphql } from "gatsby";
import TeamPage from "../components/wrapper/TeamPage";

const Team = ({ data }) => {
  console.log(data.allMdx.nodes[0].frontmatter);
  const { title } = data.allMdx.nodes[0].frontmatter;
  const { body } = data.allMdx.nodes[0];

  return <TeamPage title={title} body={body} />;
};

export default Team;

export const pageQuery = graphql`
  {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/pages/team/" } }) {
      nodes {
        body
        frontmatter {
          title
        }
      }
    }
  }
`;
