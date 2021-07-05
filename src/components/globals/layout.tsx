import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Flex } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh" justifyContent="space-between">
      <Header />
      <Flex
        direction="column"
        alignItems="center"
        flexGrow={1}
        bgGradient="linear(to-b, lightGradient, white, white,  lightGradient)"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
