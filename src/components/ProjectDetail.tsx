import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Wrench } from 'lucide-react';

type ProjectDetailProps = {
  id: string;
  onBack: () => void;
};

export function ProjectDetail({ id, onBack }: ProjectDetailProps) {
  const projects = {
    'ai-task-manager': {
      title: "FPL Point Prediction",
      description: "A smart task management application that uses machine learning to prioritize and categorize tasks automatically. The system learns from user behavior to suggest task organization and deadlines.",
      longDescription: `This is a fun project I’ve wanted to tackle for a while: a Fantasy Premier League (FPL) prediction system. My goal was to build as much of an end-to-end solution as I could, but I don’t think I am capable of tracking and calculating the stats from the actual match videos yet; hopefully pretty soon I'll be able to. I started with the data provided by vaastav in his repository as a foundation, since I wasn’t sure where else to access the historic official FPL game data. To address gaps in expected goals (xG) and expected assists (xA) data for seasons prior to 2022-23, I complemented the dataset by scraping understat.com.

After cleaning and merging the official FPL data with Understat’s metrics, I developed a model to predict players’ points for the upcoming gameweek. The predictions factor in the player’s historical performance and their track record against specific opponents. I used XGBoost and Linear Regression algorithms to generate these forecasts.

The results are displayed on a simple webpage featuring an interactive graph of the player’s performance history and predicted points, as well as the basic details like the player name and opponent. As I gain more experience and find time to do it, I plan to refine the model’s accuracy and add new features.
`,
      technologies: ["Python", "Typescript", "Pytorch", "Flask", "React"],
      image: "https://github.com/martinrojasmet/fpl-prediction/raw/main/fpl-prediction-thumbnail.jpeg",
      githubUrl: "https://github.com/martinrojasmet/fpl-prediction",
      example: "https://github.com/martinrojasmet/fpl-prediction/raw/main/fpl-prediction.gif"
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
        className="flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
      />
      <div className="px-[3%]">

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 whitespace-pre-wrap">{project.longDescription}</p>
        </div>
        <div className='flex'>
          <div className='w-[70%]'>
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 h-9"
          >
            <Github size={20} />
            View Code
          </a>
        </div>
        </div>

        <img src={project.example} alt="Example of the project" className='w-[80%] mx-auto rounded-lg shadow-xl'/>
      </div>
      </div>
    </div>
  );
}