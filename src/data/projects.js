import portfolioImg from "../assets/portfolio.png";
import hotelImg from "../assets/Hotel.png";
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
    title: "Hotel Booking Website",
    description:
      "A hotel booking website that allows users to search and book hotels with ease.",
    image: hotelImg,
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/duolgT/grand-plaza-booking-hotel.git",
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