import React, { useState } from 'react';
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
    <div className="bg-primary rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-title_text mb-2">{title}</h3>
        <p className="text-title_text font-thin mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm font-medium"
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
      id: "fpl-analytics-engine",
      title: "FPL Analytics Engine",
      description: "Automated, containerized data pipeline integrating live FPL API data with understat.com metrics, feeding predictive model.",
      technologies: ["Docker", "Python", "Airflow", "dbt", "Google AI", "Postgres"],
      image: "https://github.com/martinrojasmet/portfolio/raw/main/src/assets/premier-league.png"
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