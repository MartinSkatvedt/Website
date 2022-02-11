import React, { FC } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const Technologies: FC = () => {
  return (
    <Box marginLeft="auto" marginRight="auto" w="80%">
      <Box w="80%">
        <Heading>Teknologier</Heading>
        <Text w={["100%", "75%", "50%"]} margin="10px 0px 10px 0px">
          Her finner du teknologier jeg bruker.
        </Text>
      </Box>
    </Box>
  );
};

export default Technologies;
