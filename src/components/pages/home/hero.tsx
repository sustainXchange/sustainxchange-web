import React from "react";
import { Box, Heading, Container, Text } from "@chakra-ui/react";
import SocialBar from "../../icons/socialBar";

const Hero = ({ nodes }) => {
  const { frontmatter } = nodes[0];
  const { subtitle, title } = frontmatter;

  return (
    <Box minHeight={[0, 0, 0, "50vh", "50vh"]} id="hero">
      <Box
        position="relative"
        height="100%"
        display="block"
        overflow={["hidden", "hidden", "hidden", "visible"]}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          background="primary"
          height="100%"
          width="100%"
          zIndex="-1"
          clipPath="polygon(0 0,100% 0%,80% 100%,0% 100%)"
          opacity="0.9"
        />
        <Box
          opacity="0.7"
          position="absolute"
          top="0"
          left="0"
          background="secondary"
          height="100%"
          width="110%"
          clipPath="polygon(0 0,100% 0%,80% 100%,0% 100%)"
          zIndex="-2"
        />
        <Container direction="column" p="3rem" maxW="xl" m="0">
          <Heading color="white" as="h2" className="subtitle" mt="1rem">
            {title}
          </Heading>
          <Text color="white" fontWeight="600">
            {subtitle}
          </Text>
          <SocialBar />
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
