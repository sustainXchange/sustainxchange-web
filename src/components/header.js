import React from "react";
import { Link } from "gatsby";
// import Helmet from "react-helmet";

import Logo from "./logo";
import { Flex, Container } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex>
      {/* <Helmet /> */}
      <Link to="/" aria-label="home">
        <Logo color="primary" size="2rem" />
      </Link>
    </Flex>
  );
};

export default Header;
