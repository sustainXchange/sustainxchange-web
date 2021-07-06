import React, { FC } from "react";
import { Heading, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import Blog from "../pages/resources/association";
import HowTo from "../pages/resources/howTo";
import Output from "../pages/resources/output";
import { useIntl } from "react-intl";

const ResourcesPage: FC<{ language?: string }> = ({ language }) => {
  const intl = useIntl();

  return (
    <Container maxW="2xl">
      <Flex direction="column" justifyContent="flex-start">
        <Heading variant="subHeading" my="2rem">
          {intl.formatMessage({ id: "resources" })}
        </Heading>
        <Tabs
          variant="soft-rounded"
          orientation="horizontal"
          colorScheme="gray"
        >
          <TabList overflowX="auto" p="0.5rem" outline="none">
            <Tab>sustain X association</Tab>
            <Tab>sustain X howTos</Tab>
            <Tab>sustain X output</Tab>
          </TabList>
          <TabPanels>
            <TabPanel my="2rem">
              <Blog />
            </TabPanel>
            <TabPanel>
              <HowTo />
            </TabPanel>
            <TabPanel>
              <Output />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
};

export default ResourcesPage;
