import React, { FC } from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Home: FC = () => {
  return (
    <Box
      w="40%"
      textAlign="center"
      justifyContent="center"
      marginLeft="auto"
      marginRight="auto"
    >
      <Heading>Martin Skatvedt</Heading>
      <Text>
        Jeg er en andreårsstudent på Informatikk ved NTNU Gløshaugen med stor
        interesse for teknologi!
      </Text>
      <Divider />
    </Box>
  );
};

export default Home;
