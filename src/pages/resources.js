import { Heading, Text } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/layout"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Blog from "../components/pages/resources/blog"

export default function Resources() {
  // const {allMDX: data} = useStaticQuery(graphql`
  //   {
  //     query {}
  //   }
  // `)

  return (
    <Container maxW="2xl" flexGrow="1">
      <Heading variant="subHeading" my="2rem">
        Ressourcen
      </Heading>
      <Tabs variant="soft-rounded" orientation="horizontal" colorScheme="gray">
        <TabList overflow="scroll" p="0.5rem" outline="none">
          <Tab outline="none">Blog</Tab>
          <Tab>Veröffentlichungen</Tab>
          <Tab>Event Output</Tab>
        </TabList>
        <TabPanels>
          <TabPanel my="2rem">
            <Blog />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}
