import { Heading, Text } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/layout"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Blog from "../components/pages/resources/association"
import HowTo from "../components/pages/resources/howTo"
import Output from "../components/pages/resources/output"

export default function Resources() {
  return (
    <Container maxW="2xl">
      <Flex direction="column" justifyContent="flex-start">
        <Heading variant="subHeading" my="2rem">
          Ressourcen
        </Heading>
        <Tabs
          variant="soft-rounded"
          orientation="horizontal"
          colorScheme="gray"
        >
          <TabList overflow="scroll" p="0.5rem" outline="none">
            <Tab>sustain X association</Tab>
            <Tab>sustain X howTos</Tab>
            <Tab>sustain X output</Tab>
          </TabList>
          <TabPanels>
            <TabPanel my="2rem">
              <Blog />
            </TabPanel>
            <TabPanel>
              <HowTo />
            </TabPanel>
            <TabPanel>
              <Output />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  )
}
