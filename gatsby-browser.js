/* eslint-disable react/display-name */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  Link,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Heading,
  Box,
  Center,
  List,
  UnorderedList,
  ListItem
} from "@chakra-ui/react"
import Layout from "./src/components/globals/layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider
      components={{
        p: ({ ...props }) => (
          <Container maxW="2xl">
            <Text variant="mdxText" {...props} />
          </Container>
        ),
        ul: ({ ...props }) => (
          <Container maxW="xl">
            <UnorderedList fontSize="lg" variant="mdxText" {...props} />
          </Container>
        ),
        li: ListItem,
        table: ({ ...props }) => (
          <Center overflowX="scroll">
            <Table {...props} minWidth="min-content" />,
          </Center>
        ),
        tr: Tr,
        th: Th,
        td: Td,
        tbody: Tbody,
        a: Link,
        h1: ({ ...props }) => <Heading as="h1" textAlign="center" {...props} />,
        h2: ({ ...props }) => (
          <Heading as="h2" variant="subHeading" fontSize="xl" {...props} />
        ),
        h3: ({ ...props }) => (
          <Heading as="h2" variant="subHeading" fontSize="xl" {...props} />
        )
      }}
    >
      {element}
    </MDXProvider>
  )
}
