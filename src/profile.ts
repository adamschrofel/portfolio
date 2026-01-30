export type Link = { label: string; href: string };
export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: Link[];
};

export const profile = {
  name: "Adam Schrofel",
  lilbio:
    "Applied Computer Science (Honours) • University of Winnipeg • Winnipeg, MB",
  whaddup: "Welcome to my site, hope you enjoy your stay!",
  links: {
    github: "https://github.com/adamschrofel",
    linkedin: "http://linkedin.com/in/adam-schrofel-78b1a6250",
    resume: ".portfolio/public/Adam_Schrofel_Resume.pdf",
  },
  about: [
    "Recent Honours B.Sc. Applied Computer Science graduate (University of Winnipeg).",
    "Lately I've been working on my fullstack development skills, building a full scrabble solver.",
    "Hobbies: Reading, Biking, cheering for the Montreal Canadiens, and a good pint.",
  ],
  contact: {
    email: "aschrofel10@gmail.com",
    fax: "Recently broken but I can still be reached by carrier pigeon in the Wolseley Area",
  },
  skills: {
    languages: ["Java", "Javascript", "TypeScript", "", "Python", "SQL"],
    frontend: ["NodeJS", "Express", "React", "Vite", "HTML/CSS", "Tailwind"],
    backend: ["DBeaver", "MongoDB", "Spring Boot", "REST APIs"],
    dataCloud: [
      "Azure Data Factory",
      "Databricks",
      "MySQL",
      "Azure SQL",
      "Power BI",
    ],
    tooling: ["Git/GitHub", "VS Code"],
  },
  projects: [
    {
      title: "Scrabble Solver (Web App)",
      description:
        "Full-stack Scrabble helper that generates valid words and best plays from a board + rack, with scoring and UI to explore results.",
      tech: ["React", "TypeScript", "Java", "Spring Boot", "Javascript", "Vite", "Maven"],
      links: [{ label: "Repo", href: "https://github.com/adamschrofel/Scrabble-Application" }],
    },
    {
      title: "Poker Range Parser / Solver (WIP)",
      description:
        "Preflop Range Chart tool using. Working towards a full-stack solver feature for 6-max to Full-Ring tournament style.",
      tech: ["Java", "Testing", "Algorithms"],
      links: [{ label: "Repo", href: "https://github.com/adamschrofel/Poker" }]
    },
    {
      title: "Glanceable Interfaces Literature Review (Senior Research Project)",
      description:
        "Centralized data warehouse + nightly ETL pipeline across university databases using Azure services and Power BI dashboards.",
      tech: ["Latex", "Overleaf", "Excel"],
      links: [{ label: "Research Paper", href: "https://github.com/adamschrofel" }],
    },
    {
      title: "Azure ETL & Analytics Platform (Senior Project)",
      description:
        "Centralized data warehouse + nightly ETL pipeline across university databases using Azure services and Power BI dashboards.",
      tech: ["Azure", "ADF", "Databricks", "MySQL", "Azure SQL", "Power BI"],
    },
    
    
  ] as Project[],
};
