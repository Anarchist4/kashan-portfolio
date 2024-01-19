import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/classification.jpg"
          title="Project 1: Classification Using Transfer Learning"
          description="Diverse Image Classification: Developed a deep learning model to classify 100k images of sandals, shoes, and boots using transfer learning."
        />
        <ProjectCard
          src="/numberplate.png"
          title="Project 2: License Plate detection"
          description="License Plate Detection using OpenCV and EasyOCR.  
          This project Detects and recognize license plates from images using OpenCV and EasyOCR libraries."
        />
        <ProjectCard
          src="/tableau portfolio.png"
          title="Project 3: Ecommerce Dashboard"
          description="Developed an interactive Tableau dashboard for an ecommerce platform,
          providing real-time insights on sales performance, customer behavior, and product analytics, enhancing data-driven decision-making for the business."
        />
      </div>
    </div>
  );
};

export default Projects;