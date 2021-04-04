import React from "react"
import Header from "./header"
import Footer from "./footer"
import { ChakraProvider, Flex, VStack } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import GlobalStateProvider from "../context/provider"

const Layout = ({ element }) => {
  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStateProvider initialState={globalState}>
        <Flex direction="column">
          <Header />
          <Flex direction="column">{element}</Flex>
          <Footer />
        </Flex>
      </GlobalStateProvider>
    </ChakraProvider>
  )
}

export default Layout
