import React, { FC } from "react";
import { Box, Text, Heading, UnorderedList, Flex } from "@chakra-ui/react";
import ListElement from "../components/technologies/ListElement";
const Technologies: FC = () => {
  return (
    <Box marginLeft="auto" marginRight="auto" w="75%">
      <Box w="80%">
        <Heading>Teknologier og programmeringsspråk</Heading>
        <Text w={["100%", "75%", "85%"]} margin="10px 0px 10px 0px">
          Her finner du teknologier og programmeringsspråk jeg bruker.
        </Text>

        <Flex flexDir={["column", "row"]}>
          <Box w={["95%", "50%"]}>
            <Heading as="h5" size="md" margin={2} marginBottom={5}>
              Språk
            </Heading>
            <UnorderedList spacing={1} styleType="none">
              <ListElement>JavaScript/TypeScript</ListElement>
              <ListElement>Python</ListElement>
              <ListElement>C</ListElement>
              <ListElement>Python</ListElement>
              <ListElement>Java</ListElement>
            </UnorderedList>
          </Box>
          <Box w={["95%", "50%"]}>
            <Heading as="h5" size="md" margin={2} marginBottom={5}>
              Teknologier
            </Heading>
            <UnorderedList spacing={1} styleType="none">
              <ListElement>React.js</ListElement>
              <ListElement>Next.js</ListElement>
              <ListElement>MongoDB</ListElement>
              <ListElement>PostgreSQL</ListElement>
              <ListElement>Azure</ListElement>
              <ListElement>Git</ListElement>
              <ListElement>Docker</ListElement>
              <ListElement>Node</ListElement>
              <ListElement>Django</ListElement>
              <ListElement>REST</ListElement>
              <ListElement>GraphQL</ListElement>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Technologies;
