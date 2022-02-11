import React, { FC } from "react";
import { Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

type FooterLinkProps = {
  name: string;
  href: string;
  isExternal: boolean;
};

const FooterLink: FC<FooterLinkProps> = ({
  name,
  href,
  isExternal,
}: FooterLinkProps) => {
  return (
    <NextLink passHref href={href}>
      <Link target={isExternal ? "_blank" : ""}>
        <Text fontSize="1xl" display="block" textDecoration="none">
          {name}
          {isExternal && <ExternalLinkIcon mx="5px" />}
        </Text>
      </Link>
    </NextLink>
  );
};

export default FooterLink;
