export type Locale = string;

export type CvEntry = {
  period: string;
  title: string;
  titleLink?: string;
  group?: string;
  groupLink?: string;
  detail: string;
};

export type CvSection = {
  title: string;
  entries: CvEntry[];
};

export type Translation = {
  nav: {
    home: string;
    projects: string;
    cv: string;
    menu: string;
  };
  home: {
    eyebrow: string;
    role: string;
    lede: string;
  };
  projects: {
    title: string;
    back: string;
    techUsed: string;
    links: string;
    code: string;
    details: string;
    tryLabel: string;
    items: Record<
      string,
      {
        title: string;
        description: string;
        longDescription: string;
      }
    >;
  };
  cv: {
    summaryLabel: string;
    summary: string;
    objectiveLabel: string;
    objective: string;
    download: string;
    sections: Record<string, CvSection>;
    skillGroups: { title: string; skills: string[] }[];
  };
};

export const languages: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

const en: Translation = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    cv: 'CV',
    menu: 'Menu',
  },
  home: {
    eyebrow: 'Erasmus Mundus Scholar · Systems Engineering',
    role: 'Systems Engineer & EMSSE Student',
    lede:
      `I've always been obsessed with finding efficient solutions to problems; that is what \
      led me to study Systems Engineering. Along the way, I discovered my passion for data \
      and the value behind it. That is why I am pursuing a Master’s in Sustainable Systems \
      Engineering across Europe. I am very curios and ambitious. I want to maximize every \
      opportunity to learn and grow.

      You can find more information on my CV section or take a look at my work in the Projects \
      section. You can reach me via the contact details in the footer.`,
  },
  projects: {
    title: 'Projects',
    back: 'Back to Projects',
    techUsed: 'Technologies Used',
    links: 'Links',
    code: 'Code',
    details: 'Details',
    tryLabel: 'Try',
    items: {
      'fpl-analytics-engine': {
        title: 'FPL Analytics Engine',
        description:
          'An automated, containerized data pipeline that integrates live FPL API data with understat.com \
          for missing metrics prior to 2023, into a normalized database that and warehouse that feeds \
          predictive models.',
        longDescription: `The Fantasy Premier League (FPL) Analytics Engine is an end-to-end data \
engineering pipeline designed to automate the extraction, integration, and modeling of \
multi-source football data. To address a key statistical gap in the official FPL API: \
historical expected goals (xG) and expected assists (xA) prior to 2023. The system \
automatically ingests match and player data from understat.com alongside official FPL \
endpoints. Containerized entirely using Docker and managed via DevContainers, the pipeline \
utilizes Apache Airflow to orchestrate daily ETL workflows, managing data extraction, raw \
staging, and schema harmonization within a PostgreSQL target database.

To solve complex entity resolution challenges stemming from mismatched player naming conventions \
and changing team affiliations across disparate sources, the integration layer pairs fuzzy string \
matching algorithms with Google AI Studio LLMs. This hybrid approach automates cross-source record \
linkage with high accuracy, eliminating manual mapping. Once integrated, dbt handles downstream data \
transformation, modular data modeling, and optimized analytical views. The resulting schema feeds a \
baseline points prediction model, serving as a production-ready data foundation for future machine \
learning enhancements and web-facing dashboard deployment.`,
      },
    },
  },
  cv: {
    summaryLabel: 'Summary',
    summary:
      'Master’s student in Sustainable Systems Engineering specializing in Advanced ML & Opt. of Systems, with 1+ years of\
experience in Software Engineering and Data Engineering. Seeking an internship to deploy scalable solutions through data-driven insights. I am a EU \
citizen, willing to relocate and available from February 2027.',
    objectiveLabel: 'What I am looking for',
    objective:
      'I am looking for opportunities where I can apply my engineering background \
      to data-driven and sustainable technology projects, keep learning from experienced \
      teams, and grow one step at a time.',
    download: 'Download CV',
    sections: {
      skills: {
        title: 'Skills',
        entries: [],
      },
      experience: {
        title: 'Experience',
        entries: [
          {
            period: 'June 2025 - August 2025',
            title: 'Data Engineer',
            group: 'Suplymos',
            groupLink: 'https://www.suplymos.com/',
            detail:
              '● Designed and implemented an end-to-end data pipelines for a retail price intelligence system using Airflow, dbt,\
              and BigQuery, orchestrating web scrapers (BeautifulSoup) and field forms (Kobo) while leveraging PostgreSQL \
              (pgvector) embeddings and cosine similarity for automated SKU matching across multichannel sources.',
          },
          {
            period: 'August 2024 - January 2025',
            title: 'Financial Transformation Trainee',
            group: 'Farmatodo',
            groupLink: 'https://www.linkedin.com/company/farmatodo/about/',
            detail:
              `● Automated bank statement and internal sales reconciliation, engineering a matching pipeline for unmatched\
records and refunds that eliminated manual processing, ensured regulatory compliance, and freed operational\
bandwidth for fraud detection.
● Engineered an automated gross income document generation system across 194 stores, replacing unscalable\
workflows to eliminate reporting bottlenecks and mitigate future recurring fines.
● Engineered an LLM-assisted receipt processing tool on GCP to parse complex, multi-page partner invoices into\
the respective database, drastically reducing manual data entry time and human error.`
          },

          {
            period: 'February 2024 - June 2024',
            title: 'Intern of Quality Assurance',
            group: 'Telefónica',
            groupLink: 'https://www.telefonica.com/',
            detail:
              '● Designed an evaluation framework to assess and select automated testing tools, addressing manual testing\
bottlenecks in the company`s strategic migration to a DevOps methodology.\n ● Automated core end-to-end use cases with Playwright for the most critical and complex legacy application,\
reducing manual testing overhead, execution time, and operational costs.',
          },
        ],
      },
      studies: {
        title: 'Education',
        entries: [
          {
            period: 'September 2025 — Present',
            title: 'M.Sc. Advanced Machine Learning and Optimization of Systems (AOS)',
            group: 'EMSSE',
            groupLink: 'https://www.emsse.eu/',
            detail: `● Erasmus Mundus Joint Master Degree, called European Master in Sustainable Systems Engineering (EMSSE)
            ● The AOS track involves the Polytechnic University of Catalonia (UPC), the Polytechnic\
             Univeristy of Tirana (UPT) and the Technologic University of Compiègne.`,
          },
          {
            period: 'September 2020 — December 2024',
            title: 'B.Sc. Systems Engineering',
            group: 'Universidad Metropolitana',
            groupLink: 'https://www.unimet.edu.ve/',
            detail: ` ● Cum Laude with a GPA of 17.73/20 & 3rd position in the class of 2024.
            ● Honorific mention on capstone project.`,
          },
        ],
      },
      certifications: {
        title: 'Certifications',
        entries: [
          {
            period: 'July 2025',
            title: 'AWS Certified Solutions Architect Associate (SAA-C03)',
            group: 'AWS Training and Certification',
            titleLink: 'https://www.credly.com/badges/276df663-1cf1-4513-be0c-befb8daf5d99',
            detail: 'Exam intended for individuals who perform a solutions architect role. It \
            validates a candidate`s ability to design solutions based on the AWS Well-Architected \
            Framework. The target candidate should have at least 1 year of hands-on experience designing \
            cloud solutions that use AWS services.',
          },
          {
            period: 'November 2024',
            title: 'IELTS Academic Band 8.0 (C1)',
            group: 'IELTS',
            detail: 'English language proficiency test for non-native speakers, assessing listening, reading, writing, and speaking skills.',
          },
        ],
      },
      awards: {
        title: 'Awards',
        entries: [
          {
            period: 'September 2025 - January 2027',
            title: 'EMSSE Scholarship',
            group: 'EMMSE',
            groupLink: 'https://www.emsse.eu/',
            detail: 'Competitive merit-based scholarship covering full tuition fees and a monthly living \
            allowance for the duration of the Master’s program.',
          },
          {
            period: 'November 2024',
            title: 'Dean’s List of Academic Excellence',
            group: 'Universidad Metropolitana',
            groupLink: 'https://www.unimet.edu.ve/',
            detail: 'Excellence Program designed to recognize the academic performance and dedication of students who excel during their formative process.',
          },
          {
            period: 'November 2022',
            title: 'Dean’s List of Academic Excellence',
            group: 'Universidad Metropolitana',
            groupLink: 'https://www.unimet.edu.ve/',
            detail: 'Excellence Program designed to recognize the academic performance and dedication of students who excel during their formative process.',
          },
          {
            period: 'February 2021 - December 2024',
            title: 'Excellence Scholarship',
            group: 'Universidad Metropolitana',
            groupLink: 'https://www.unimet.edu.ve/',
            detail: 'Highly competitive academic distinction awarded in recognition of outstanding achievement. Partial tuition waiver combined with access to mentorship programs and professional development workshops to sustain academic excellence.',
          },
        ],
      },
    },
    skillGroups: [
      {
        title: 'Programming Languages',
        skills: ['Python', 'SQL', 'Java', 'MATLAB', 'Bash'],
      },
      {
        title: 'Data & Machine Learning',
        skills: [
          'pandas',
          'NumPy',
          'SciPy',
          'scikit-learn',
          'PyTorch',
          'XGBoost',
          'matplotlib',
          'seaborn',
          'OpenCV',
          'Google AI',
        ],
      },
      {
        title: 'Data Engineering & Databases',
        skills: [
          'PostgreSQL',
          'SQLite',
          'MongoDB',
          'Firebase',
          'BigQuery',
          'Prisma',
          'Apache Airflow',
          'dbt',
          'BeautifulSoup',
        ],
      },
      {
        title: 'Cloud & DevOps',
        skills: ['Google Cloud', 'AWS', 'Docker', 'Linux', 'Playwright'],
      },
      {
        title: 'Web Development',
        skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Django'],
      },
    ],
  },
};

const es: Translation = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    cv: 'CV',
    menu: 'Menú',
  },
  home: {
    eyebrow: 'Lorem ipsum · Dolor sit amet · Consectetur',
    role: 'Lorem ipsum dolor sit amet',
    lede:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  projects: {
    title: 'Proyectos',
    back: 'Volver a proyectos',
    techUsed: 'Tecnologías utilizadas',
    links: 'Enlaces',
    code: 'Código',
    details: 'Detalles',
    tryLabel: 'Probar',
    items: {
      'fpl-analytics-engine': {
        title: 'Lorem ipsum engine',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        longDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      },
    },
  },
  cv: {
    summaryLabel: 'Resumen',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    objectiveLabel: 'Lo que busco',
    objective:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris.',
    download: 'Descargar CV',
    sections: {
      experience: {
        title: 'Experiencia',
        entries: [
          {
            period: '2023 — Presente',
            title: 'Lorem ipsum dolor sit amet',
            detail:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            period: '2022 — 2023',
            title: 'Sed ut perspiciatis unde omnis',
            detail:
              'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
          },
        ],
      },
      skills: {
        title: 'Habilidades',
        entries: [],
      },
      awards: {
        title: 'Premios',
        entries: [
          {
            period: '2023',
            title: 'Lorem ipsum premio',
            detail: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.',
          },
        ],
      },
      studies: {
        title: 'Estudios',
        entries: [
          {
            period: '2024 — Presente',
            title: 'M.Sc. Ingeniería de Sistemas Sostenibles',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            period: '2018 — 2023',
            title: 'Ing. de Sistemas',
            detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        ],
      },
      certifications: {
        title: 'Certificaciones',
        entries: [
          {
            period: '2024',
            title: 'Lorem ipsum certificación',
            detail: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          },
        ],
      },
    },
    skillGroups: [
      {
        title: 'Lenguajes de programación',
        skills: ['Python', 'SQL', 'Java', 'MATLAB', 'Bash'],
      },
      {
        title: 'Datos y Machine Learning',
        skills: [
          'pandas',
          'NumPy',
          'SciPy',
          'scikit-learn',
          'PyTorch',
          'XGBoost',
          'matplotlib',
          'seaborn',
          'OpenCV',
          'Google AI',
        ],
      },
      {
        title: 'Ingeniería de datos y bases de datos',
        skills: [
          'PostgreSQL',
          'SQLite',
          'MongoDB',
          'Firebase',
          'BigQuery',
          'Prisma',
          'Apache Airflow',
          'dbt',
          'BeautifulSoup',
        ],
      },
      {
        title: 'Cloud y DevOps',
        skills: ['Google Cloud', 'AWS', 'Docker', 'Linux', 'Playwright'],
      },
      {
        title: 'Desarrollo web',
        skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Django'],
      },
    ],
  },
};

export const translations: Record<Locale, Translation> = {
  en,
  es,
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
