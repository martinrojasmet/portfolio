import React from 'react';

type SkillCategoryProps = {
  title: string;
  skills: string[];
};

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["TypeScript", "Python", "Java", "Go", "SQL"]
    },
    {
      title: "Technologies",
      skills: ["React", "Node.js", "Docker", "Kubernetes", "AWS", "GraphQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "Jenkins", "Jira", "Figma", "VS Code"]
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
      {skillCategories.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </section>
  );
}