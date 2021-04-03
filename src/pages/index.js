import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import GlobalStateProvider from "../context/provider"
import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  Spacer,
  StackDivider
} from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import { seoTitleSuffix } from "../../config"
import { theme } from "../styles/theme"
import Event from "../components/sections/event"
import News from "../components/sections/news"
import BackgroundImage from "gatsby-background-image"

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix } = frontmatter

  return (
    <>
      <SEO
        title={
          useSeoTitleSuffix ? `${seoTitle} - ${seoTitleSuffix}` : `${seoTitle}`
        }
      />
      {/* <Flex  direction={["column", "column", "column", "row"]}> */}
      {/* <BackgroundImage
        fluid={data.hero.edges[0].node.frontmatter.image.childImageSharp.fluid}
        sx={{ width: "100%" }}
      > */}
      <Flex
        justifyContent="space-around"
        direction={["column", "column", "column", "row"]}
        alignSelf="stretch"
      >
        <Hero content={data.hero.edges} />
        <Event />
      </Flex>
      {/* </BackgroundImage> */}
      <Divider
        mt="0 !important"
        sx={{
          borderTop: "0.5rem solid #444444",
          opacity: 1
        }}
      />
      <Box mt="10rem !important">
        <News />
        {/* Articles is populated via Medium RSS Feed fetch */}
        {/* <Articles /> */}
        <About content={data.about.edges} />
        {/* <Interests content={data.interests.edges} /> */}
        {/* <Projects content={data.projects.edges} /> */}
        {/* <Contact content={data.contact.edges} /> */}
      </Box>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage

export const pageQuery = graphql`
  {
    index: allMdx(filter: { fileAbsolutePath: { regex: "/index/index/" } }) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
    hero: allMdx(filter: { fileAbsolutePath: { regex: "/index/hero/" } }) {
      edges {
        node {
          body
          frontmatter {
            greetings
            title
            subtitlePrefix
            subtitle
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    about: allMdx(filter: { fileAbsolutePath: { regex: "/index/about/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    interests: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/interests/" } }
    ) {
      edges {
        node {
          exports {
            shownItems
            interests {
              name
              icon {
                childImageSharp {
                  fixed(width: 20, height: 20, quality: 90) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
    projects: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/index/projects/" }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [frontmatter___position], order: ASC }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }
    contact: allMdx(
      filter: { fileAbsolutePath: { regex: "/index/contact/" } }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            email
            profileImage {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
