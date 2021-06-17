import React, { FC } from "react";
import { VStack, Text, Link } from "@chakra-ui/react";

const Others: FC = () => {
  return (
    <VStack>
      <Text>
        <b>ANDRE</b>
      </Text>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/martin-skatvedt-47597511a/"
      >
        <Text fontSize="1xl" display="block" textDecoration="none">
          Linkedin
        </Text>
      </Link>
      <Link target="_blank" href="https://github.com/MartinSkatvedt">
        <Text fontSize="1xl" display="block" textDecoration="none">
          Github
        </Text>
      </Link>
      <Link
        target="_blank"
        href="https://stackoverflow.com/users/16038209/martin-skatvedt?tab=profile"
      >
        <Text fontSize="1xl" display="block" textDecoration="none">
          Stack overflow
        </Text>
      </Link>
    </VStack>
  );
};

export default Others;
