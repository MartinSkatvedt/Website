import React, { FC } from "react";
import { Box, Link, Image } from "@chakra-ui/react";

const NavLogo: FC = () => {
  return (
    <Box w="200px" color={["white", "white", "primary.500", "primary.500"]}>
      <Link href="/">
        <Image alt="Home screen logo" src="/image/logo/logo.png" />
      </Link>
    </Box>
  );
};

export default NavLogo;
