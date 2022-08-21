import chakraImage from "../../img/chakra.png";
import reactBootstrapImage from "../../img/react-bootstrap.png";
import reactRouterdomImage from "../../img/react-router-dom.png";
import sassImage from "../../img/sass.png";
import reactImage from "../../img/react.png";
import semanticImage from "../../img/semantic.png";
import styledImage from "../../img/styled-logo.png";
import viteImage from "../../img/vite.png";
import cssImage from "../../img/css.png";
import simpsonProject from "../../img/simpsons.png";
import dymamicFormProject from "../../img/dynamic.png";
import gasolineraProject from "../../img/gasolinera.jpg";
import marvelProject from "../../img/marvel.jpg";
import rickMorty from "../../img/rick-morty.jpg";
import tareasProject from "../../img/todo.png";


export const projectsPortfolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
      { name: "React ", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
    repository: "https://github.com/shermaes/rick-morty-frontend",
    website: "https://jocular-custard-c879b0.netlify.app/",
  },
  {
    title: "Lists Todo",
    image: tareasProject,
    techs: [
      { name: "React ", src: reactImage },
      { name: "Semantic UI React", src: semanticImage },
    ],
    description:
      "Application created with React JS and Semantic UI to make a list of tasks where you can add or remove it.",
    repository: "https://github.com/shermaes/to-do-course",
    website: "https://gregarious-zabaione-f17a36.netlify.app/",
  },
  {
    title: "Simpson API",
    image: simpsonProject,
    techs: [
      { name: "React JS ", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
    repository: "https://github.com/shermaes/phrases-simpson",
    website: "https://ephemeral-fudge-318fff.netlify.app/",
  },
  {
    title: "Marvel API",
    image: marvelProject,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router ", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Application created with React JS, React Router and Sass to make a request an external API of Marvel.",
    repository: "https://github.com/shermaes/marvel-react",
    website: "https://peppy-clafoutis-e0466b.netlify.app",
  },
  {
    title: "Dynamic Form",
    image: dymamicFormProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
    repository: "https://github.com/shermaes/dynamic-form-project",
    website: "https://sensational-belekoy-0d3a5c.netlify.app/",
  },
  {
    title: "Gas Station",
    image: gasolineraProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Chakra", src: chakraImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Application created with Vite where you can save the information and see it on a summary",
    repository: "https://github.com/shermaes/gas-station",
    website: "https://sage-croissant-e6329a.netlify.app",
  },
];