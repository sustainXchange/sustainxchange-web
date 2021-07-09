import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import { StatHelpText } from "@chakra-ui/stat";
import { LocalizedLink as GLink } from "gatsby-theme-i18n";
import { useIntl } from "react-intl";

function LinkWrapper({ isExternal, url, component, ...props }) {
  return (
    <>
      {isExternal ? (
        <Link
          href={url}
          style={{ textDecoration: "none" }}
          {...props}
          target="_blank"
          color="black"
          rel="noopener noreferrer"
        >
          {component}
        </Link>
      ) : (
        <Link
          as={GLink}
          width="100%"
          to={url}
          style={{ textDecoration: "none" }}
          color={"black"}
          {...props}
        >
          {component}
        </Link>
      )}
    </>
  );
}

export function ResourceCard({ node }) {
  const intl = useIntl();

  const { abstract, title, author, date, urlOnlyResource } = node.frontmatter;

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
                <StatHelpText mt="0.5rem" color="lightgrey">
                  {date} - {intl.formatMessage({ id: "by" })}
                  {author}
                </StatHelpText>
                <Text>{abstract}</Text>
              </Container>
              <ChevronRightIcon color="secondary" boxSize="10" />
            </Flex>
          }
        />
      </Box>
    </>
  );
}
