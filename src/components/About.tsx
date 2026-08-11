import "./styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-me",
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          Aspiring Data Analyst with nearly two years of experience in business operations and customer support. Skilled in SQL, Python, Power BI, Tableau, and Microsoft Excel through hands-on projects and professional training. Passionate about using data to solve business problems and support data-driven decision-making.
        </p>
      </div>
    </div>
  );
};

export default About;
