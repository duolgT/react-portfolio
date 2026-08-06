import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="hero">

      <div className="hero-text">

        <p className="intro">Hello, I'm</p>

        <h1>Duol Daniel Gatbel</h1>

        <h2 className="typing">
  <Typewriter
    words={[
      "Front-End Developer",
      "React Developer",
      "JavaScript Developer",
      "UI Developer",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1800}
  />
</h2>

        <p className="description">
          I build responsive, accessible, and user-friendly web applications
          using HTML, CSS, JavaScript, and React. I enjoy turning ideas into
          modern digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="/cv.pdf" className="btn-primary">
            Download CV
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/duolgT" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/duol-daniel-gatbel-b659a3268" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="duolkuach100@hmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img src={profile} alt="Duol Daniel Gatbel" />
      </div>

    </section>
  );
};

export default Hero;