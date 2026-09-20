import React from 'react';
import { ArrowLeft, Github } from 'lucide-react';

type ProjectDetailProps = {
  id: string;
  onBack: () => void;
};

export function ProjectDetail({ id, onBack }: ProjectDetailProps) {
  const projects = {
    'fpl-analytics-engine': {
      title: "FPL Analytics Engine",
      description: "Automated, containerized data pipeline integrating live FPL API data with understat.com metrics, feeding predictive model.",
      longDescription: `The Fantasy Premier League (FPL) Analytics Engine is an end-to-end data engineering pipeline designed to automate the extraction, integration, and modeling of multi-source football data. To address a key statistical gap in the official FPL API: historical expected goals (xG) and expected assists (xA) prior to 2023. The system automatically ingests match and player data from understat.com alongside official FPL endpoints. Containerized entirely using Docker and managed via DevContainers, the pipeline utilizes Apache Airflow to orchestrate daily ETL workflows, managing data extraction, raw staging, and schema harmonization within a PostgreSQL target database.

To solve complex entity resolution challenges stemming from mismatched player naming conventions and changing team affiliations across disparate sources, the integration layer pairs fuzzy string matching algorithms with Google AI Studio LLMs. This hybrid approach automates cross-source record linkage with high accuracy, eliminating manual mapping. Once integrated, dbt handles downstream data transformation, modular data modeling, and optimized analytical views. The resulting schema feeds a baseline points prediction model, serving as a production-ready data foundation for future machine learning enhancements and web-facing dashboard deployment.`,
      technologies: ["Docker", "Python", "Airflow", "dbt", "Google AI", "Postgres"],
      image: "https://github.com/martinrojasmet/portfolio/raw/main/src/assets/premier-league.png",
      githubUrl: "https://github.com/martinrojasmet/fpl_project",
      example: "https://github.com/martinrojasmet/portfolio/raw/main/src/assets/fpl-analytics-engine.png"
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-8">
            <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:scale-[1.03] cursor-pointer transition-transform bg-secondary p-2 rounded-full"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <div className="px-[3%]">

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-title_text">{project.title}</h1>

        <div className="prose max-w-none">
          <p className="text-primary_text whitespace-pre-wrap font-light text-justify">{project.longDescription}</p>
          <br />
        </div>
        <div className='flex'>
          <div className='w-[70%]'>
            <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="m-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-gradient-to-b from-github  to-github2 text-primary rounded-lg hover:scale-[1.03] h-9 font-bold text-xs md:gap-2 md:text-base"
          >
            <Github size={20} />
            Code
          </a>
        </div>
        </div>

        <img src={project.example} alt="Example of the project" className='w-[80%] mx-auto rounded-lg shadow-xl'/>
        <br />
      </div>
      </div>
    </div>
  );
}