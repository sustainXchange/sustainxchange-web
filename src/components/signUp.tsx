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
import { useIntl } from "react-intl";

export default function SignUp({ noTranslate, ...props }) {
  const { register, handleSubmit } = useForm();
  const [allowLogin, setAllowLogin] = useState(true);
  const [singUpError, setSingUpError] = useState(false);
  const intl = useIntl();

  const onSubmit = (data, e) => {
    const options = {
      url: "https://api.sendinblue.com/v3/contacts",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": `${process.env.GATSBY_SENDINBLUE_API}`,
      },
      data: { updateEnabled: true, email: data.email, listIds: [5] },
    };

    axios(options)
      .then((response) => {
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
        {intl.formatMessage({ id: "upToDate" })}
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
              {intl.formatMessage({ id: "subscribe" })}
            </Button>
          </Stack>
          {allowLogin ? (
            <FormHelperText>
              <Link to="privacy">
                {intl.formatMessage({ id: "acceptPrivacyStatement" })}
              </Link>
            </FormHelperText>
          ) : (
            <FormHelperText color="secondary">
              {intl.formatMessage({ id: "emailSuccess" })}
            </FormHelperText>
          )}
          {singUpError && (
            <FormHelperText color="warning">
              {intl.formatMessage({ id: "emailFailed" })}
            </FormHelperText>
          )}
        </FormControl>
      </form>
    </Container>
  );
}
