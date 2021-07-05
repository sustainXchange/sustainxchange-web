import { Heading, StackDivider, VStack } from "@chakra-ui/layout"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { ResourceCard } from "../../globals/resourceCard"

export default function HowTo() {
  const { allMdx: data } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/resources/howto/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          body
          slug
          frontmatter {
            urlOnlyResource
            title
            author
            date
            abstract
          }
        }
      }
    }
  `)
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing="8">
      {data.nodes.length ? (
        data.nodes.map(node => <ResourceCard key={node.slug} node={node} />)
      ) : (
        <Heading fontSize="2xl" fontFamily="mono" color="gray.500">
          Hier gibt es noch nichts zu sehen.
        </Heading>
      )}
    </VStack>
  )
}
