import { DiJavascript, DiJavascript1, DiTerminal } from "react-icons/di";
import { SiFirebase, SiGit, SiDocker, SiJavascript } from "react-icons/si";
import { RiAngularjsFill, RiReactjsFill, RiToolsFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "Javascript",
    Description: () => <>I've been work with Javascript over 6 years.</>,
  },
  {
    slug: "typescript",
    Component: DiJavascript,
    title: "Typescript",
    Description: () => <>More than 4 years of Typescript experience. </>,
  },
  {
    slug: "angularJs",
    Component: RiAngularjsFill,
    title: "AngularJs",
    Description: () => (
      <>I've worked with AngularJs, and Angular2+ more more than two years.</>
    ),
  },
  {
    slug: "react",
    Component: RiReactjsFill,
    title: "React",
    Description: () => (
      <>
        I have use ReactJs to write complex products and internal, and
        open-source libraries for over 4 yearss.
      </>
    ),
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => (
      <>I have written dozens of Shell scripts for various purposes.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
  {
    slug: "docker",
    Component: SiDocker,
    title: "Docker",
    Description: () => (
      <>
        Docker is a platform designed to help developers build, share, and run
        modern applications. I've been use it for the last 4 years.
      </>
    ),
  },

  {
    slug: "ci-cd",
    Component: RiToolsFill,
    title: "CI/CD",
    Description: () => (
      <>
        Pipeline, Github Actions, Containers, and another tools for continuos
        integration.
      </>
    ),
  },
  {
    slug: "javascript-ecosystem",
    Component: DiTerminal,
    title: "",
    Description: () => (
      <>
        I've a great experience, and knowledge in Javascript ecosystem like;
        React, Angular, Redux, D3, NPM, Webpack...
      </>
    ),
  },
];
