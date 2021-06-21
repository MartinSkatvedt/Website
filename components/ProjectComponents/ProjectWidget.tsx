import React, { FC } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
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
    <Box>
      <Heading>{header} </Heading>
      <Link passHref href={path}>
        <Image src={imageURL} alt="Project image cover" />
      </Link>
    </Box>
  );
};

export default ProjectWidget;
