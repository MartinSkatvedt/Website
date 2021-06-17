import React, { FC, useState } from "react";
import { Text } from "@chakra-ui/react";
import { MenuTypes } from "./MenuLinks";
import { useRouter } from "next/router";
import Link from "next/link";
type NavLinkProps = {
  name: string;
  url: MenuTypes;
};

const NavLink: FC<NavLinkProps> = ({ name, url }: NavLinkProps) => {
  const router = useRouter();
  const currentTab = router.pathname.slice(1);
  let isCurrent = false;

  if (currentTab == url) isCurrent = true;
  else isCurrent = false;
  return (
    <Link passHref href={url}>
      <Text
        fontSize="3xl"
        display="block"
        textDecoration={isCurrent ? "underline" : "none"}
        textDecorationColor="orange.400"
        textUnderlineOffset="0.2em"
      >
        {name}
      </Text>
    </Link>
  );
};

export default NavLink;
