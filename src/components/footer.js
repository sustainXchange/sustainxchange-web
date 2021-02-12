import React, { useContext } from "react";

import Context from "../context";
import { footerLinks } from "../../config";
import { Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  const { darkMode } = useContext(Context).state;
  return (
    <Flex>
      <div className="footer-links" data-testid="footer-links">
        {footerLinks.map(({ name, url }, key) => (
          <Link key={key} to={url} $darkMode={darkMode}>
            {name}
          </Link>
        ))} 
      </div>
    </Flex>
  );
};

export default Footer;
