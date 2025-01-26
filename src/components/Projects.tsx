import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  onClick: () => void;
};

function ProjectCard({
  title,
  description,
  technologies,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "ai-task-manager",
      title: "FPL Point Prediction",
      description: "Webpage with points predictions for the game of Fantasy Premier League Football (FPL) using Machine Learning",
      technologies: ["Python", "Typescript"],
      image: "https://github.com/martinrojasmet/fpl-prediction/raw/main/fpl-prediction-thumbnail.jpeg"
    }
  ];

  if (selectedProject) {
    return (
      <ProjectDetail
        id={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => setSelectedProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
}