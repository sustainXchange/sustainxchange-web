import { useForm } from "react-hook-form"
import React from "react"
import { Container, Stack } from "@chakra-ui/layout"
import { FormControl } from "@chakra-ui/form-control"
import { FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { FormHelperText } from "@chakra-ui/form-control"
import { Heading } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/layout"
import { HStack } from "@chakra-ui/layout"
import { Link } from "gatsby"

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(JSON.stringify(data))
  }

  return (
    <Container
      background="white"
      borderRadius="md"
      padding="2rem"
      boxShadow="lg"
      alignSelf="flex-start"
      transform="translate(0, 20%)"
    >
      <Heading fontSize="2xl" color="warning" fontFamily="mono">
        Bleib auf dem neusten Stand!
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" mt="0.5rem">
          <Stack direction={["column", "row", "row"]} spacing="4">
            <Input
              label="email"
              register={register}
              required
              placeholder="greta@beispiel.de"
              type="email"
            />
            <Button background="primary" color="white" type="submit">
              Anmelden
            </Button>
          </Stack>
          <FormHelperText>
            Mit dem Anmelden stimmst du unseren{" "}
            <Link to="privacy">Datenschutzbestimmungen</Link> zu.
          </FormHelperText>
        </FormControl>
      </form>
    </Container>
  )
}
