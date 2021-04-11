import React from "react"
import SXCLogo from "../../../content/globals/assets/logo.svg"
import { Box } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props} height="5rem">
      <SXCLogo height="100%" />
    </Box>
  )
}
