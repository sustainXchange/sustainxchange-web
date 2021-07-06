import React from "react";

import { footerLinks } from "../../../config";
import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { LocalizedLink as GLink } from "gatsby-theme-i18n";

import {
  FaCreativeCommons,
  FaCreativeCommonsNc,
  FaCreativeCommonsBy
} from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      justifyContent="space-around"
      flexDirection={["column", "row"]}
      background="secondary"
      p="2rem"
    >
      <Container>
        {footerLinks.map(({ name, url }, key) => (
          <Box key={name}>
            <Link as={GLink} to={url} color="white">
              {name}
            </Link>
            <br />
          </Box>
        ))}
      </Container>
      <Container textAlign={["left", "right"]} color="white">
        <Text>
          sustainXchange.org <br />
          Designed & Developed by Jasper Anders
        </Text>
        <Icon as={FaCreativeCommons} />
        <Icon as={FaCreativeCommonsNc} />
        <Icon as={FaCreativeCommonsBy} />
      </Container>
    </Flex>
  );
};

export default Footer;
