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
      title: "Scrabble Solver (WIP)",
      description:
        "Full-stack Scrabble helper that provides multiple scrabble tools including Word Finder given set of x tiles, word validator given word, and currently devloping full solver generating best plays given board layout + tiles, with scoring and UI to explore results.",
      tech: [
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Javascript",
        "Vite",
        "Maven",
      ],
      links: [
        {
          label: "Repo",
          href: "https://github.com/adamschrofel/Scrabble-Application",
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
  ] as Project[],
};
