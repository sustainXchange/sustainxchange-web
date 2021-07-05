import React from "react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout"
import { StatHelpText } from "@chakra-ui/stat"
import { Link } from "gatsby"
import { render } from "react-dom"

function LinkWrapper({ isExternal, url, component, ...props }) {
  return (
    <>
      {isExternal ? (
        <a href={url} {...props} target="_blank" rel="noopener noreferrer">
          {component}
        </a>
      ) : (
        <Link width="100%" to={url} {...props}>
          {component}
        </Link>
      )}
    </>
  )
}

export function ResourceCard({ node }) {
  const { abstract, title, author, date, urlOnlyResource } = node.frontmatter

  return (
    <>
      <Box
        borderBottom="gray"
        key={node.slug}
        _hover={{ background: "gray.50" }}
        borderRadius="xl"
      >
        <LinkWrapper
          isExternal={!!urlOnlyResource}
          width="100%"
          url={urlOnlyResource ? urlOnlyResource : `/${node.slug}`}
          component={
            <Flex
              justifyContent="space-between"
              flexDir={["column", "row"]}
              alignItems="center"
              width="100%"
            >
              <Container>
                <Heading fontSize="3xl">{title}</Heading>
                <StatHelpText mt="0.5rem">
                  {date} - von {author}
                </StatHelpText>
                <Text>{abstract}</Text>
              </Container>
              <ChevronRightIcon color="secondary" boxSize="10" />
            </Flex>
          }
        />
      </Box>
    </>
  )
}
