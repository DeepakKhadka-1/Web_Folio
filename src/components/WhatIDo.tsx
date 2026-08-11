import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    gsap.fromTo(
      containerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 75%",
        },
      }
    );
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <p className="what-intro-text">
            I transform business data into actionable insights and improve business processes through analytics, dashboards, and AI-assisted productivity.
          </p>

          <div className="what-list">
            {/* Item 1 */}
            <div className="what-list-item what-noTouch" ref={(el) => setRef(el, 0)}>
              <div className="what-list-content">
                <h3 className="what-list-title">DATA ANALYTICS</h3>
                <p className="what-list-subtitle">Collect • Analyze • Visualize</p>
                <div className="what-content-flex">
                  <div className="what-tags">SQL</div>
                  <div className="what-tags">Python</div>
                  <div className="what-tags">Power BI</div>
                  <div className="what-tags">Tableau</div>
                  <div className="what-tags">Microsoft Excel</div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="what-list-item what-noTouch" ref={(el) => setRef(el, 1)}>
              <div className="what-list-content">
                <h3 className="what-list-title">BUSINESS OPERATIONS</h3>
                <p className="what-list-subtitle">Support • Resolve • Optimize</p>
                <div className="what-content-flex">
                  <div className="what-tags">ServiceNow</div>
                  <div className="what-tags">Process Management</div>
                  <div className="what-tags">Issue Resolution</div>
                  <div className="what-tags">Workflow Optimization</div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="what-list-item what-noTouch" ref={(el) => setRef(el, 2)}>
              <div className="what-list-content">
                <h3 className="what-list-title">AI PRODUCTIVITY</h3>
                <p className="what-list-subtitle">Analyze • Assist • Accelerate</p>
                <div className="what-content-flex">
                  <div className="what-tags">ChatGPT</div>
                  <div className="what-tags">Google Gemini</div>
                  <div className="what-tags">GitHub</div>
                  <div className="what-tags">Visual Studio Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
