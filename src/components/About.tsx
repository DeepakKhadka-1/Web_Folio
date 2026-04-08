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
          Entry-level Data Analyst with formal training in Python, SQL, Excel, Power BI, and Tableau, and hands-on experience through end-to-end analytics projects. Currently working in an SLA-driven operations role at Siemens (US Healthineers), contributing to ticket management, process tracking, and issue resolution. Skilled in data cleaning, exploratory data analysis, KPI development, and dashboard creation, with a strong interest in using data to solve business and operational problems.
        </p>
      </div>
    </div>
  );
};

export default About;
