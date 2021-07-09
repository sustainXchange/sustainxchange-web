import { useStaticQuery, graphql } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n";
import React from "react";
import { getIntlNodes } from "../../i18n/intlQueries";
import EventPage from "../components/wrapper/EventPage";

export default function Events() {
  const { locale } = useLocalization();

  const { allMdx: event } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/events/next/" } }
        ) {
          nodes {
            body
            fields {
              locale
            }
            frontmatter {
              title
              eventDateFrom
              eventDateTo
              abstract
            }
          }
        }
      }
    `
  );

  const nodes = getIntlNodes(event, locale);

  const { body, frontmatter } = nodes[0];
  const { title, eventDateFrom, eventDateTo } = frontmatter;

  return (
    <EventPage
      eventDateFrom={eventDateFrom}
      eventDateTo={eventDateTo}
      title={title}
      body={body}
    />
  );
}
