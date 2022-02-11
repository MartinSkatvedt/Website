import React, { FC } from "react";
import { Box, HStack, VStack, Text, Link } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
const Contacts: FC = () => {
  return (
    <VStack>
      <Text>
        <b>KONTAKT</b>
      </Text>
      <Box>
        <Text>
          <Link href="mailto: martinskatvedt@gmail.com">
            <EmailIcon margin="4px" />
            martinskatvedt@gmail.com
          </Link>
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
