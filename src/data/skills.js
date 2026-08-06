import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiVite,
  SiTailwindcss,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vite", icon: SiVite },
      { name: "VS Code", icon: VscVscode },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
];

export default skills;