import React, { FC } from "react";
import ProjectComponents from "../../components/ProjectComponents";
import { useRouter } from "next/router";

const Projects: FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <ProjectComponents />
    </div>
  );
};

export default Projects;
