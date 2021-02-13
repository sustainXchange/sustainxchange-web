import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Flex, VStack } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Flex direction="column">
      <Header />
      <VStack spacing="5rem">{children}</VStack>
      <Footer />
    </Flex>
  )
}

export default Layout
