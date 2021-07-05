import React from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

// import Helmet from "react-helmet";

import Logo from "./logo";
import { Flex } from "@chakra-ui/react";
import { MenuToggle, Navigation } from "./navbar";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={5}
      direction={["column", "column", "row"]}
      px={16}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      shadow="md"
    >
      {/* <Helmet /> */}
      <Link to="/" aria-label="home">
        <Logo color="primary" size="2rem" />
      </Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Navigation isOpen={isOpen} />
    </Flex>
  );
};

export default Header;
