import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Flex, Spacer } from "@chakra-ui/react"
import Layout from "../components/globals/layout"
// import SEO from "../components/globals/seo"
import Hero from "../components/pages/home/hero"
import About from "../components/pages/home/about"
// import { seoTitleSuffix } from "../../config"
import EventOverlay from "../components/pages/home/elements/eventOverlay"
import Partners from "../components/pages/home/partners"
import Events from "../components/pages/home/events"
import News from "../components/pages/home/news"
import heroIMG from "../../content/pages/home/hero/hero.jpg"
import FAQ from "../components/pages/home/faq"

const IndexPage = ({ data }) => {
  // const { seoTitle, useSeoTitleSuffix } = frontmatter

  return (
    <>
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
        <EventOverlay />
        <Spacer />
      </Flex>
      <News />
      <About content={data.about.edges} />
      <Events />
      <Partners />
      <FAQ />
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/pages/home/hero/" } }
    ) {
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
    about: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/pages/home/about/" } }
    ) {
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
  }
`
