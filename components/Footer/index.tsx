import React, { FC } from "react";
import { Box, HStack, VStack, Text, StackDivider } from "@chakra-ui/react";
import NavFooter from "./NavFooter";
import Contacts from "./Contacts";
import Others from "./Others";
const Footer: FC = () => {
  return (
    <Box w="100%" bg="orange.400" position="fixed" bottom="0" padding="10px">
      <HStack spacing="10%" justify="center">
        <Contacts />
        <NavFooter />
        <Others />
      </HStack>
    </Box>
  );
};

export default Footer;
