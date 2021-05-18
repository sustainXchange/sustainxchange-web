import { useForm } from "react-hook-form"
import React from "react"
import { Container, Stack } from "@chakra-ui/layout"
import { FormControl } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { FormHelperText } from "@chakra-ui/form-control"
import { Heading } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Link } from "gatsby"
import axios from "axios"

export default function SignUp() {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    const options = {
      url: "https://api.sendgrid.com/v3/mail/send ",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: {
        personalizations: [{ to: [{ email: "test@example.com" }] }],
        from: { email: "test@example.com" },
        subject: "Sending with SendGrid is Fun",
        content: [
          {
            type: "text/plain",
            value: "and easy to do anywhere, even with cURL"
          }
        ]
      }
    }

    axios(options).then(response => {console.log(response)})
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
      <Heading fontSize="2xl" m="0" color="warning" fontFamily="mono">
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
