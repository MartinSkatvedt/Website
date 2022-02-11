import React, { FC } from "react";
import { Link } from "@chakra-ui/react";
import { MenuTypes } from "./MenuLinks";
import { useRouter } from "next/router";
import NextLink from "next/link";

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
    <NextLink passHref href={"/" + url}>
      <Link
        fontSize="3xl"
        display="block"
        textDecoration={isCurrent ? "underline" : "none"}
        textDecorationColor="orange.400"
        textUnderlineOffset="0.2em"
        _hover={{ color: "orange.400" }}
        transition="all 0.2s"
        webkitTapHighlightColor="transparent"
        _focus={{ outline: 0 }}
      >
        {name}
      </Link>
    </NextLink>
  );
};

export default NavLink;
