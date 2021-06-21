import React, { FC } from "react";
import { VStack, Text } from "@chakra-ui/react";
import Link from "next/link";

const NavFooter: FC = () => {
  return (
    <VStack>
      <Text>
        <b>SIDEMENY</b>
      </Text>
      <Link passHref href="/About">
        <Text fontSize="1xl" display="block" textDecoration="none">
          Om meg
        </Text>
      </Link>
      <Link passHref href="/Projects">
        <Text fontSize="1xl" display="block" textDecoration="none">
          Prosjekter
        </Text>
      </Link>

      <Link passHref href="/CV">
        <Text fontSize="1xl" display="block" textDecoration="none">
          CV
        </Text>
      </Link>
    </VStack>
  );
};

/*
  <Link passHref href="/Technologies">
        <Text fontSize="1xl" display="block" textDecoration="none">
          Teknologier
        </Text>
      </Link>
      */
export default NavFooter;
