import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Duol Daniel Gatbel</h2>

      <p>Junior Front-End Developer</p>

      <div className="footer-socials">
        <a
          href="https://github.com/duolgT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/duol-daniel-gatbel-1a0b4b1b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:duolkuach100@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="copyright">
        © {year} Duol Daniel Gatbel. All rights reserved.
      </p>

      <a href="#hero" className="back-top">
        <FaArrowUp />
      </a>
    </footer>
  );
};

export default Footer;