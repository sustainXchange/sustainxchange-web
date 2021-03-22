import { extendTheme } from "@chakra-ui/react"
import { Container } from "./Container"
import "@fontsource/playfair-display/900.css" // Weight 500 with all styles included.
import "@fontsource/fira-code/600.css" // Weight 500 with all styles included.
import "@fontsource/dosis/700.css" // Weight 500 with all styles included.
import { Box } from "./Box"

export const theme = extendTheme({
  fonts: {
    heading: "Dosis",
    mono: "Fira Code"
  },
  colors: {
    primary: "#247bfc",
    secondary: "#0ed9a7",
    warning: "#FC533D",
    backgroundLight: "#fcffea",
    black: "#444444"
  },
  borders: {
    base: "0.5rem solid #333"
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
    },
    Text: {
      baseStyle: {
        marginTop: "1rem",
        [`strong`]: {
          color: "warning"
        }
      }
    },
    Link: {
      baseStyle: {
        color: "secondary",
        fontWeight: "bold"
      }
    }
  }
})
