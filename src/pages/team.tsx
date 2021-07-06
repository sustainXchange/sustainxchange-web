import React from "react";
import { graphql } from "gatsby";
import TeamPage from "../components/wrapper/TeamPage";
import { useLocalization } from "gatsby-theme-i18n";
import { getIntlNodes } from "../../i18n/intlQueries";

const Team = ({ data }) => {
  const { locale } = useLocalization();
  const nodes = getIntlNodes(data.allMdx, locale);
  const { title } = nodes[0].frontmatter;
  const { body } = nodes[0];

  return <TeamPage title={title} body={body} />;
};

export default Team;

export const pageQuery = graphql`
  {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/pages/team/" } }) {
      nodes {
        body
        fields {
          locale
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
