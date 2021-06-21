import React, { FC } from "react";
import { Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import ProjectWidget from "./ProjectWidget";

const ProjectComponents: FC = () => {
  return (
    <Box marginLeft="auto" marginRight="auto" w="80%">
      <Box w="80%">
        <Heading>Prosjekter</Heading>
        <Text w={["100%", "75%", "50%"]} margin="10px 0px 10px 0px">
          Her finner du noen av prosjektene jeg har har gjennomført, enten alene
          eller i samarbeid med andre.
        </Text>
      </Box>

      <SimpleGrid minChildWidth="300px" spacing="1%" spacingY="3%" w="75%">
        <ProjectWidget
          imageURL="/image/project/website.png"
          header="Homepage"
          path="/Projects/website"
        />

        <ProjectWidget
          imageURL="/image/project/nibble4.png"
          header="nibble4"
          path="/Projects/nibble4"
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProjectComponents;
