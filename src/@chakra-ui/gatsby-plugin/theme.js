import { extendTheme } from "@chakra-ui/react"
import "@fontsource/playfair-display/900.css" // Weight 500 with all styles included.
import "@fontsource/fira-code/600.css" // Weight 500 with all styles included.
import "@fontsource/dosis/700.css" // Weight 500 with all styles included.

const theme = extendTheme({
  fonts: {
    heading: "Dosis",
    mono: "Fira Code"
  },
  colors: {
    primary: "#247bfc",
    secondary: "#0ed9a7",
    secondaryLight: "#79D9C1",
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
      },
      variants: {
        subHeading: {
          fontFamily: "mono",
          fontStyle: "italic",
          mb: "2rem",
          textAlign: "center",
          fontSize: "4xl"
        },
        blogTitle: {
          mb: "1rem"
        }
      }
    },
    Box: {
      baseStyle: {
        color: "backgroundLight"
      }
    },
    Text: {
      baseStyle: {
        fontSize: "lg",
        marginTop: "1rem",
        [`strong`]: {
          color: "warning"
        }
      },
      variants: {
        mdxText: {
          mb: "1rem"
        }
      }
    },
    Link: {
      baseStyle: {
        fontSize: "lg",
        color: "secondary",
        fontWeight: "bold"
      }
    }
  }
})

export default theme
