import React, { useContext } from "react"

import { footerLinks } from "../../config"
import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react"
import {
  FaCreativeCommons,
  FaCreativeCommonsNc,
  FaCreativeCommonsBy
} from "react-icons/fa"

const Footer = () => {
  return (
    <Flex
      justifyContent="space-around"
      flexDirection={["column", "row"]}
      background="secondary"
      p="2rem"
    >
      <Container>
        <Text>
          {footerLinks.map(({ name, url }, key) => (
            <>
              <Link key={key} to={url} color="white">
                {name}
              </Link>
              <br />
            </>
          ))}
        </Text>
      </Container>
      <Container textAlign={["left", "right"]} color="white">
        <Text>
          sustainXchange.org <br />
          Design und Entwicklung Jasper Anders
        </Text>
        <Icon as={FaCreativeCommons} />
        <Icon as={FaCreativeCommonsNc} />
        <Icon as={FaCreativeCommonsBy} />
      </Container>
    </Flex>
  )
}

export default Footer
