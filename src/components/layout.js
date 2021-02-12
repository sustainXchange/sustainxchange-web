import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex variant="main">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </Flex>
  );
};

export default Layout;
