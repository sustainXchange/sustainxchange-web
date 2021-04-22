import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Box, Flex, Text, Heading, Container, Link } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"

const Event = () => {
  const data = useStaticQuery(graphql`
    {
      event: allMdx(
        filter: { fileAbsolutePath: { regex: "/content/pages/events/next/" } }
      ) {
        edges {
          node {
            frontmatter {
              eventDateFrom
              eventDateTo
              title
              abstract
            }
          }
        }
      }
    }
  `)

  const { frontmatter } = data.event.edges[0].node

  const { eventDateFrom, eventDateTo, title, abstract } = frontmatter

  return (
    <Box
      borderTop="base"
      borderLeft={[0, 0, 0, "base"]}
      borderRight={[0, 0, 0, 0, "base"]}
      borderBottom={[0, 0, 0, "base"]}
      padding="0.5rem"
      transform={[
        "translate(0, 0)",
        "translate(0, 0)",
        "translate(0, 0)",
        "translate(0, 25%)"
      ]}
      background="white"
      alignSelf={["stretch", "stretch", "stretch", "flex-end"]}
      p="2rem"
      shadow="2xl"
    >
      <Container maxW="2xl" p={0}>
        <Flex
          flexDir={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Container p={0}>
              <Text as="Mono" fontFamily="mono" fontSize="3xl" color="warning">
                {eventDateFrom} bis {eventDateTo}
              </Text>
              <Heading as="h2" fontSize="5xl">
                {title}
              </Heading>
            </Container>
          </Box>
          <Box>
            <Container
              textAlign="right"
              maxW="xl"
              p={0}
              mt={["2rem", "2rem", 0]}
            >
              <Text fontSize="xl">{abstract}</Text>
              <Link fontSize="xl">Mehr erfahren</Link>
            </Container>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Event
