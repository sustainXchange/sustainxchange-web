import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SXCLogo from "../../../content/assets/logo.svg"
import {
  Box,
  Flex,
  Button,
  Text,
  Heading,
  Container,
  Link
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"

const Event = () => {
  const data = useStaticQuery(graphql`
    {
      event: allMdx(filter: { fileAbsolutePath: { regex: "/index/event/" } }) {
        edges {
          node {
            body
            frontmatter {
              eventDateFrom
              eventDateTo
              eventTitle
            }
          }
        }
      }
    }
  `)

  const { frontmatter, body } = data.event.edges[0].node

  const { eventDateFrom, eventDateTo, eventTitle } = frontmatter

  return (
    <Box
      borderTop="base"
      borderLeft={[0, 0, 0, "base"]}
      borderRight={[0, 0, 0, "base"]}
      borderBottom={[0, 0, 0, "base"]}
      padding="0.5rem"
      transform={[
        "translate(0, 0)",
        "translate(0, 0)",
        "translate(0, 0)",
        "translate(0, 30%)"
      ]}
      background="white"
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
                {eventTitle}
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
              <Text fontSize="xl">
                <MDXRenderer>{body}</MDXRenderer>
              </Text>
              <Link fontSize="xl">Mehr erfahren</Link>
            </Container>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Event
