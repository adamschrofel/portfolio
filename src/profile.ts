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
  whaddup:
    "Recent CS grad, currently working on my full-stack development skills. Passionate about HCI and Software Design. Check out my work in Projects or view the repos through my GitHub!",
  links: {
    github: "https://github.com/adamschrofel",
    linkedin: "http://linkedin.com/in/adam-schrofel-78b1a6250",
    resume: ".portfolio/public/Adam_Schrofel_Resume.pdf",
  },
  about: [
    "Recent Honours B.Sc. Applied Computer Science graduate (University of Winnipeg).",
    "Lately I've been working on my fullstack development skills, building a full scrabble solver.",
    "Hobbies: Reading, Running, Biking, and cheering for the Montreal Canadiens.",
  ],
  contact: {
    email: "aschrofel10@gmail.com",
  },
  skills: {
    coursework: [
      "Data Structures & Algorithms",
      "Adv. DB Systems",
      "Adv. Internet Programming",
      "HCI",
      "Computer Architecture and System Software",
      "Software Architecture",
      "Machine Learning",
    ],
    languages: ["Java", "Javascript", "TypeScript", "Python", "SQL"],

    frontend: ["NodeJS", "Express", "React", "Vite", "HTML/CSS", "Tailwind"],
    dataCloud: [
      "Azure Data Factory",
      "Databricks",
      "MySQL",
      "Azure SQL",
      "Power BI",
    ],
    backend: ["DBeaver", "MongoDB", "Spring Boot", "REST APIs", "PostgreSQL"],

    tooling: ["Git/GitHub", "VS Code"],
  },
  projects: [
    {
      title: "Scrabble Helpers",
      description:
        "Full-stack Scrabble helper web application with a Spring Boot backend and React frontend providing:\n• Rack solver for generating valid words from tiles.\n• Word validation using trie-based dictionary.\n• Board solver that evaluates board states and suggests optimal plays.\nThe backend uses a full board evaluation engine to efficiently generate and score legal moves.",
      tech: [
        "React",
        "Typescript",
        "Spring Boot",
        "REST API",
        "Trie",
        "Vite",
        "Docker",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/adamschrofel/Scrabble-Application",
        },
        {
          label: "Site",
          href: "https://scrabble-helpers.vercel.app/",
        },
      ],
    },
    {
      title: "Poker Range Parser / Solver (WIP)",
      description:
        "Preflop Range Chart tool displays starting hands and play recommendations based on seating position. Working towards a full-stack solver feature for 6-max to Full-Ring tournament style.",
      tech: ["Java", "React", "Javascript", "Vite", "Maven", "Algorithms"],
      links: [{ label: "Repo", href: "https://github.com/adamschrofel/Poker" }],
    },
    {
      title:
        "Glanceable Interfaces Literature Review (Senior Research Project)",
      description:
        "Centralized data warehouse + nightly ETL pipeline across university databases using Azure services and Power BI dashboards.",
      tech: ["Latex", "Overleaf", "Excel"],
      links: [
        {
          label: "Research Paper",
          href: `${import.meta.env.BASE_URL}_ACS_4931__Adam.pdf`,
        },
      ],
    },
    {
      title: "Azure ETL & Analytics Platform (Senior Project)",
      description:
        "Centralized data warehouse + nightly ETL pipeline across university databases using Azure services and Power BI dashboards.",
      tech: ["Azure", "ADF", "Databricks", "MySQL", "Azure SQL", "Power BI"],
    },
    {
      title: "Portfolio Website",
      description:
        "Built this site using React and Typescript. Hosted using GitHub pages. ",
      tech: ["React", "Typescript", "Vite"],
    },
    {
      title: "The Beer Can Website e-design (WIP)",
      description:
        "Currently re-building The Beer Can website for popular local bar.\n\nMore coming soon... ",
      tech: ["React", "Typescript", "Vite"],
    },
  ] as Project[],
};
