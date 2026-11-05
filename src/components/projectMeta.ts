export type ProjectMeta = {
  technologies: string[];
  image: string;
  githubUrl: string;
  example: string;
  /* Set this to the live website URL when the project is deployed (e.g. 'https://myproject.com').
     While it is null, the "Try" button in the slider redirects to the home page. */
  liveUrl: string | null;
};

export const projectMeta: Record<string, ProjectMeta> = {
  'fpl-analytics-engine': {
    technologies: ['Docker', 'Python', 'Airflow', 'dbt', 'Google AI', 'Postgres'],
    image:
      'src/assets/fpl-analytics-engine.png',
    githubUrl: 'https://github.com/martinrojasmet/fpl_project',
    example:
      'src/assets/fpl-analytics-engine.png',
    liveUrl: null,
  },
};
