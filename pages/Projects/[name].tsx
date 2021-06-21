import React, { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Projects: FC = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Box>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/Projects">Prosjekter</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href={"/Projects/" + name}>{name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {name}
    </Box>
  );
};

export default Projects;
