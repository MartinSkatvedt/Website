import React, { FC } from "react";
import { Box, Link } from "@chakra-ui/react";
import NexLink from "next/link";
import Image from "next/image";

const NavLogo: FC = () => {
  return (
    <Box w="200px" color={["white", "white", "primary.500", "primary.500"]}>
      <NexLink href="/" passHref>
        <Link _focus={{ outline: 0 }}>
          <Image
            alt="Home screen logo"
            src="/image/logo/logo.png"
            width="200px"
            height="50px"
          />
        </Link>
      </NexLink>
    </Box>
  );
};

export default NavLogo;
