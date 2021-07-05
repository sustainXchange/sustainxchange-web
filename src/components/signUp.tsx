import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Container, Stack } from "@chakra-ui/layout";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { FormHelperText } from "@chakra-ui/form-control";
import { Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import axios from "axios";

export default function SignUp({ noTranslate, ...props }) {
  const { register, handleSubmit } = useForm();
  const [allowLogin, setAllowLogin] = useState(true);
  const [singUpError, setSingUpError] = useState(false);

  const onSubmit = (data, e) => {
    const options = {
      url: "https://api.sendinblue.com/v3/contacts",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": `${process.env.GATSBY_SENDINBLUE_API}`
      },
      data: { updateEnabled: true, email: data.email, listIds: [5] }
    };

    axios(options)
      .then(response => {
        console.log(response);
        setAllowLogin(false);
        setSingUpError(false);
        e.target.reset();
      })
      .catch(() => {
        setSingUpError(true);
      });
  };

  return (
    <Container
      background="white"
      borderRadius="md"
      padding="2rem"
      boxShadow="lg"
      alignSelf="flex-start"
      transform={noTranslate ? "" : "translate(0, 20%)"}
      {...props}
    >
      <Heading fontSize="2xl" m="0" color="warning" fontFamily="mono">
        Bleib auf dem neusten Stand!
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" mt="0.5rem">
          <Stack direction={["column", "row", "row"]} spacing="4">
            <Input
              label="email"
              {...register("email")}
              required
              placeholder="greta@beispiel.de"
              type="email"
            />
            <Button
              background="primary"
              disabled={!allowLogin}
              color="white"
              type="submit"
            >
              {"Anmelden"}
            </Button>
          </Stack>
          {allowLogin ? (
            <FormHelperText>
              Mit dem Anmelden stimmst du unseren{" "}
              <Link to="privacy">Datenschutzbestimmungen</Link> zu.
            </FormHelperText>
          ) : (
            <FormHelperText color="secondary">
              Danke für deine Anmeldung
            </FormHelperText>
          )}
          {singUpError && (
            <FormHelperText color="warning">
              Ups! Da ist bei uns etwas schief gelaufen, versuche es später noch
              einmal.
            </FormHelperText>
          )}
        </FormControl>
      </form>
    </Container>
  );
}
