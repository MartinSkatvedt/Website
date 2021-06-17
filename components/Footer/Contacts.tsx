import React, { FC } from "react";
import { Box, HStack, VStack, Text, StackDivider } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
const Contacts: FC = () => {
  return (
    <VStack>
      <Box>
        <Text>
          <EmailIcon margin="4px" />
          martinskatvedt@gmail.com
        </Text>
      </Box>

      <Box>
        <Text>
          <PhoneIcon margin="4px" />
          +47 476 71 687
        </Text>
      </Box>
    </VStack>
  );
};

export default Contacts;
