import { Github, Twitter, Figma } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoAppUnik from "/public/images/logos/App-Unik-Logo.png";
import LogoNovusCode from "/public/images/logos/novuscode-logo.png";

import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";
import ProjectCoverAll from "/public/images/project-coverandall.png";
import LetUsNudge from "/public/images/letusnudge.jpg";

import ProjectAiColor from "/public/images/project-aicolors.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsClass,
  TestimonialDetails,
  WorkDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/milanbagiya",
  GITHUB_REPO: "https://github.com/milanbagiya",
  TWITTER: "https://twitter.com/milanbagiya",
  FIGMA: "https://www.figma.com/@milanbagiya57",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1372237220870362629/milan-bagiya-personal-portfolio-website-template-mobile-desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Blog",
    href: "/blogs",
  }
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/milanbagiya",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/milanbagiya",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@milanbagiya57",
  },
];

export const TECHNOLOGIES: TechDetailsClass[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "text-javascript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
    color: "text-typescript",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
    color: "text-react",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
    color: "text-nextjs",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
    color: "text-nodejs",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
    color: "text-express",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
    color: "text-nest",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
    color: "text-socket",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
    color: "text-postgresql",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
    color: "text-mongodb",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
    color: "text-sass",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
    color: "text-tailwind",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
    color: "text-figma",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
    color: "text-cypress",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
    color: "text-storybook",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
    color: "text-git",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    position: "FullTime Freelancer",
    startDate: new Date(2024, 0),
    currentlyWorkHere: true,
    summary: [
      "Worked for various clients like Fiskil, Covers and all, LetUsNudge.",
      "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
  {
    logo: LogoNovusCode,
    text: "NovusCode",
    typoColor: "#1c429e",
    logoAlt: "Novus logo",
    position: "Sr. Fullstack Developer",
    startDate: new Date(2023, 6),
    endDate: new Date(2022, 11),
    summary: [
      "Acted as team lead in different projects.",
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend + backend).",
      "Worked on enterprise-level projects for a variety of clients.",
      "Handled sprint planning & task distribution.",
    ],
  },
  {
    logo: LogoAppUnik,
    text: "AppUnik",
    typoColor: "#3c68c4",
    logoAlt: "AppUnik logo",
    position: "Frontend Developer and Designer",
    startDate: new Date(2021, 6),
    endDate: new Date(2023, 11),
    summary: [
      "Worked as a Frontend developer (Angular / React).",
      "Worked in MonoRepo Architecture projects in angular",
      "Develop web and mobile application using angular, ionic",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
  {
    name: "Covers and All",
    description:
      "Shop outdoor furniture covers to provide the utlimate protection to your Patio Furniture. Keep your tables, chairs, cushions, couches, cars and many more...",
    url: "https://coversandall.com/",
    previewImage: ProjectCoverAll,
    technologies: [
      "Angular",
      "Nest.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Express.js",
      "MySQL",
      "Cypress",
    ],
  },
  {
    name: "Let US Nudge",
    description:
      "Let us Nudge is an emergent technology solution that maximizes table seating efficiencies during both busy times and slow times",
    url: "https://www.letusnudge.com/",
    previewImage: LetUsNudge,
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "Express.js",
      "MySQL",
      "Cypress",
    ],
  },
  {
    name: "AI Colors",
    description:
      "Create cool and unique color palettes with our AI-powered color palette generator. Browse, edit, and visualize your palettes to find the perfect combinations.",
    url: "https://aicolors.netlify.app/",
    previewImage: ProjectAiColor,
    technologies: [
      "Angular",
      "Typescript",
      "Tailwind CSS",
      "Firebase",
      "MySql",
      "Node.JS",
    ],
  },
];

export const WORKS: WorkDetails[] = [
  {
    name: "Wingie",
    previewImage: ProjectWingie,
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Milan and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Milan was extremely easy and pleasant to work with and he truly cares about the project being a success. Milan has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
