import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import EventPage from "../components/wrapper/EventPage";

export default function Events() {
  const { allMdx: event } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/pages/events/next/" } }
        ) {
          nodes {
            body
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

  const { body, frontmatter } = event.nodes[0];
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
