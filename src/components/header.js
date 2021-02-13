import React from "react"
import { Link } from "gatsby"
// import Helmet from "react-helmet";

import Logo from "./logo"
import { Flex } from "@chakra-ui/react"
import { MenuToggle, Navigation } from "./navbar"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      mb={8}
      p={8}
      px={16}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
    >
      {/* <Helmet /> */}
      <Link to="/" aria-label="home">
        <Logo color="primary" size="2rem" />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Navigation isOpen={isOpen} />
    </Flex>
  )
}

export default Header
