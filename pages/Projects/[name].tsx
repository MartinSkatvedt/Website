import React, { FC } from "react";
import ProjectComponents from "../../components/ProjectComponents";
import { useRouter } from "next/router";

const Projects: FC = () => {
  const router = useRouter();
  const { name } = router.query;
  return <div>{name}</div>;
};

export default Projects;
