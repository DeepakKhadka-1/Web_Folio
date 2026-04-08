import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Advanced Certification in Data Science & AI</h4>
                <h5>E&ICT Academy, IIT Guwahati</h5>
              </div>
              <h3>Pursuing</h3>
            </div>
            <p>
              Gaining formal training in Python, SQL, Power BI, and Tableau. Building a strong foundation in Data cleaning, EDA, and KPI development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Commerce (B.Com)</h4>
                <h5>CMR University, Bengaluru</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Commerce degree with a current CGPA of 8.20. Developing a strong understanding of business and financial principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Service Support Operator</h4>
                <h5>Siemens, Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Manage ServiceNow tickets end-to-end within SLA timelines. Support subscription activations, L1 troubleshooting, and booking operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
