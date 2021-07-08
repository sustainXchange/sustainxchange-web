import React, { FC } from "react";
import { graphql } from "gatsby";

import { Flex, Spacer } from "@chakra-ui/react";
import Hero from "../pages/home/hero";
import About from "../pages/home/about";
import EventOverlay from "../pages/home/elements/eventOverlay";
// import Partners from "../pages/home/partners";
import Event from "../pages/home/event";
import News from "../pages/home/news";
import heroIMG from "../../../content/pages/home/hero/hero.jpg";
import FAQ from "../pages/home/faq";
import SEO from "../globals/seo";

const IndexPage: FC<{ hero: any; about: any }> = ({ hero, about }) => {
  return (
    <>
      <SEO title="sustainXchange" />
      <Flex
        justifyContent="space-between"
        direction={["column", "column", "column", "row"]}
        alignSelf="stretch"
        background={`url(${heroIMG}) no-repeat center center fixed`}
        backgroundSize="cover"
        zIndex="0"
      >
        <Hero nodes={hero} />
        <Spacer />
        <EventOverlay />
        <Spacer />
      </Flex>
      <News />
      <About nodes={about} />
      <Event />
      {/* <Partners /> */}
      <FAQ />
    </>
  );
};

export default IndexPage;
