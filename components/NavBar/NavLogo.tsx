import React, { FC } from "react";
import { Box, Link, Image } from "@chakra-ui/react";

const NavLogo: FC = () => {
  return (
    <Box w="100px" color={["white", "white", "primary.500", "primary.500"]}>
      <Link href="/">
        <Image alt="Home screen logo" src="/logo.png" />
      </Link>
    </Box>
  );
};

export default NavLogo;