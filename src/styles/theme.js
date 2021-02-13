import { extendTheme } from "@chakra-ui/react"
import { Container } from "./Container"
import { Box } from "./Box"

export const theme = extendTheme({
  colors: {
    primary: "#247bfc",
    backgroundLight: "#fcffea"
  },
  components: {
    Heading: {
      baseStyle: {
        color: "primary"
      }
    },
    Container,
    Box: {
      baseStyle: {
        color: "backgroundLight"
      }
    }
  }
})
