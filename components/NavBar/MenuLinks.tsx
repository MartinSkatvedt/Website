import React, { FC, useState } from "react";
import NavLink from "./NavLink";
import { Box, Stack } from "@chakra-ui/react";

type MenuLinksProps = {
  isOpen: boolean;
};

export enum MenuTypes {
  PROJECTS = "Projects",
  TECHNOLOGIES = "Technologies",
  CV = "CV",
  NONE = "None",
}

const MenuLinks: FC<MenuLinksProps> = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavLink url={MenuTypes.TECHNOLOGIES} name="Teknologier" />
        <NavLink url={MenuTypes.PROJECTS} name="Prosjekter" />
        <NavLink url={MenuTypes.CV} name="CV" />
      </Stack>
    </Box>
  );
};

export default MenuLinks;
