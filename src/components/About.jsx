import profile from "../assets/profile.png";
import { FaMapMarkerAlt, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-image">
        <img src={profile} alt="Duol Daniel Gatbel" />
      </div>

      <div className="about-content">

        <h2>About Me</h2>

        <p>
          I'm <strong>Duol Daniel Gatbel</strong>, a passionate Junior
          Front-End Developer who enjoys creating modern, responsive, and
          user-friendly web applications using HTML, CSS, JavaScript, and
          React.
        </p>

        <p>
          I love solving real-world problems through technology and I'm
          constantly learning new tools to improve my skills and build better
          digital experiences.
        </p>

        <div className="about-highlights">

          <div className="highlight">
            <FaLaptopCode />
            <span>Front-End Development</span>
          </div>

          <div className="highlight">
            <FaLaptopCode />
            <span>Responsive Web Design</span>
          </div>

          <div className="highlight">
            <FaLaptopCode />
            <span>React Applications</span>
          </div>

        </div>

        <div className="about-info">

          <div>
            <FaMapMarkerAlt />
            <span>Kenya</span>
          </div>

          <div>
            <FaGraduationCap />
            <span>ALX Front-End Graduate</span>
          </div>

          <div>
            <FaLaptopCode />
            <span>Junior Front-End Developer</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;