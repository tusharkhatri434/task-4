import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../utils/Constant.js";

const ProjectSection = () => {
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    setProjectData(PROJECT_DATA);
  }, []);
  return (
    <div
      id="project"
      className="pt-20 flex flex-wrap bg-stone-50 flex-col pb-32 gap-10"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-500">PROJECTS</h1>
        <p className="text-2xl font-bold mt-3">
          Each project is a unique piece of development 🧩
        </p>
      </div>

      {projectData?.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </div>
  );
};

export default ProjectSection;
