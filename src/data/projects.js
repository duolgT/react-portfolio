import portfolioImg from "../assets/portfolio.png";
import weatherImg from "../assets/weather.png";
import todoImg from "../assets/todo.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built with React, featuring dark mode and a modern UI.",
    image: portfolioImg,
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/duolgT/react-portfolio",
    demo: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Weather application using a public API to display real-time weather information.",
    image: weatherImg,
    technologies: ["React", "API", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "To-Do App",
    description:
      "A task management application with Local Storage support.",
    image: todoImg,
    technologies: ["React", "Local Storage", "JavaScript"],
    github: "#",
    demo: "#",
  },
];

export default projects;