import React, { useContext } from "react"

import Context from "../context"
import { footerLinks } from "../../config"
import { Flex, Link } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex>
      <div className="footer-links" data-testid="footer-links">
        {footerLinks.map(({ name, url }, key) => (
          <Link key={key} to={url}>
            {name}
          </Link>
        ))}
      </div>
    </Flex>
  )
}

export default Footer
