import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ProjectWidget from "./ProjectWidget";

const ProjectComponents: FC = () => {
  return (
    <Flex>
      <ProjectWidget imageURL="/" header="nibble4" path="/Projects/nibble4" />
    </Flex>
  );
};

export default ProjectComponents;
