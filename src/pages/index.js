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
import EventCard from "../components/eventCard"
import Partners from "../components/sections/partners"
import Events from "../components/sections/events"
import News from "../components/sections/news"
import BackgroundImage from "gatsby-background-image"
import heroIMG from "../../content/index/hero/george-pagan-iii.jpg"

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
        justifyContent="space-between"
        direction={["column", "column", "column", "row"]}
        alignSelf="stretch"
        background={`url(${heroIMG}) no-repeat center center fixed`}
        backgroundSize="cover"
        zIndex="0"
      >
        <Hero content={data.hero.edges} />
        <Spacer />
        <EventCard />
        <Spacer />
      </Flex>
      {/* </BackgroundImage> */}
      <News />
      <About content={data.about.edges} />
      <Events />
      <Partners />
      {/* <Interests content={data.interests.edges} /> */}
      {/* <Projects content={data.projects.edges} /> */}
      {/* <Contact content={data.contact.edges} /> */}
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
