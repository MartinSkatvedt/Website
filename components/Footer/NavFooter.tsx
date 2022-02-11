import React, { FC } from "react";
import { VStack, Text } from "@chakra-ui/react";
import FooterLink from "./FooterLink";

const NavFooter: FC = () => {
  return (
    <VStack>
      <Text fontWeight={700}>SIDEMENY</Text>
      <FooterLink name="Teknologier" href="/Technologies" isExternal={false} />
      <FooterLink name="Prosjekter" href="/Projects" isExternal={false} />
      <FooterLink name="CV" href="/CV" isExternal={false} />
    </VStack>
  );
};

export default NavFooter;
