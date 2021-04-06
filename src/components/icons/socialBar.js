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
          <Link>
            <Icon boxSize={size} color="white" as={FaGithub} />
          </Link>
          <Link>
            <Icon boxSize={size} color="white" as={FaLinkedin} />
          </Link>
          <Link>
            <Icon boxSize={size} color="white" as={FaAt} />
          </Link>
        </>
      )}
    </Center>
  )
}
