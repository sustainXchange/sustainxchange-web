import React from "react"
import { Box, Link, Text, Stack, Icon } from "@chakra-ui/react"
import { FaBars, FaTimes } from "react-icons/fa"

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} mt="1rem" onClick={toggle}>
      {isOpen ? (
        <Icon boxSize={6} color="black" as={FaTimes} />
      ) : (
        <Icon boxSize={6} color="black" as={FaBars} />
      )}
    </Box>
  )
}

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} fontSize="xl">
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export const Navigation = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/team">Team</MenuItem>
    </Stack>
  </Box>
)
