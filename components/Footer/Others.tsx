import React, { FC } from "react";
import { VStack, Text } from "@chakra-ui/react";
import FooterLink from "./FooterLink";

const Others: FC = () => {
  return (
    <VStack>
      <Text fontWeight={700}>ANDRE</Text>
      <FooterLink
        name="Linkedin"
        href="https://www.linkedin.com/in/martin-skatvedt-47597511a/"
        isExternal
      />
      <FooterLink
        name="Github"
        href="https://github.com/MartinSkatvedt"
        isExternal
      />
      <FooterLink
        name="Stack overflow"
        href="https://stackoverflow.com/users/16038209/martin-skatvedt?tab=profile"
        isExternal
      />
    </VStack>
  );
};

export default Others;
