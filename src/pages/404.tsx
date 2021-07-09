import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { Container, Heading } from "@chakra-ui/layout";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/de/");
  }, []);
  return (
    <Container>
      <Heading>We are redirecting you.</Heading>
    </Container>
  );
};

export default NotFoundPage;
