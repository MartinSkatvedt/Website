import React, { FC } from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  Icon,
  Stack,
  Link,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";
import { FiMail } from "react-icons/fi";

const Home: FC = () => {
  return (
    <Box
      w="40%"
      textAlign="center"
      justifyContent="center"
      marginLeft="auto"
      marginRight="auto"
    >
      <Heading>Martin Skatvedt</Heading>
      <Text>
        Jeg er en andreårsstudent på Informatikk ved NTNU Gløshaugen med stor
        interesse for teknologi!
      </Text>

      <Divider margin="10px" />
      <Stack
        direction={["column", "row", "row", "row"]}
        spacing="4%"
        justify="center"
      >
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/martin-skatvedt-47597511a/"
        >
          <Icon as={AiFillLinkedin} boxSize="12" />
        </Link>
        <Link href="mailto:martinskatvedt@gmail.com">
          <Icon as={FiMail} boxSize="12" />
        </Link>

        <Link target="_blank" href="https://github.com/MartinSkatvedt">
          <Icon as={AiFillGithub} boxSize="12" />
        </Link>

        <Link
          target="_blank"
          href="https://stackoverflow.com/users/16038209/martin-skatvedt?tab=profile"
        >
          <Icon as={DiStackoverflow} boxSize="12" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Home;
