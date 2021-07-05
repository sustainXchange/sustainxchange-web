import { Center, HStack, Link, VStack } from "@chakra-ui/layout"
import React from "react"
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa"
import Icon from "@chakra-ui/icon"

export default function SocialBar({ vertical }) {
  const makeStack = child => {
    if (vertical) {
      return <VStack>{child}</VStack>
    } else {
      return (
        <HStack spacing="5" my="4rem">
          {child}
        </HStack>
      )
    }
  }

  const size = 9

  return (
    <Center>
      {makeStack(
        <>
          <Link isExternal href="https://github.com/sustainxchange">
            <Icon boxSize={size} color="white" as={FaGithub} />
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/company/sustainxchange/about/"
          >
            <Icon boxSize={size} color="white" as={FaLinkedin} />
          </Link>
          <Link href="mailto:hello@sustainxchange.org">
            <Icon boxSize={size} color="white" as={FaAt} />
          </Link>
        </>
      )}
    </Center>
  )
}
