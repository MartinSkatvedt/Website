import React, { FC } from "react";
import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
type ProjectWidgetProps = {
  header: string;
  imageURL: string;
  path: string;
};

const ProjectWidget: FC<ProjectWidgetProps> = ({
  header,
  imageURL,
  path,
}: ProjectWidgetProps) => {
  return (
    <Box
      borderWidth="1px"
      margin="1px"
      borderColor="white"
      borderRadius="2px"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
        filter: "saturate(50%)",
      }}
    >
      <Box>
        <Box borderBottom="1px" borderColor="white">
          <Image src={imageURL} alt="Project image cover" w="100%" />
        </Box>
        <Heading size="sm" margin="10px">
          {header}
        </Heading>
      </Box>
    </Box>
  );
};
//<Link passHref href={path}>    </Link>
export default ProjectWidget;
