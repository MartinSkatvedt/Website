import React, { FC } from "react";
import { Box, HStack, Stack, WrapItem, StackDivider } from "@chakra-ui/react";
import NavFooter from "./NavFooter";
import Contacts from "./Contacts";
import Others from "./Others";
const Footer: FC = () => {
  return (
    <Box w="100%" bg="orange.400" padding="10px">
      <Stack
        direction={["column", "row", "row", "row"]}
        spacing="10%"
        justify="center"
      >
        <Contacts />
        <NavFooter />
        <Others />
      </Stack>
    </Box>
  );
};

export default Footer;
