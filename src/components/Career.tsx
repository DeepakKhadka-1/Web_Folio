import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span>Journey</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Milestone 1 */}
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-date">2020 – 2023</div>
              <h4 className="career-title">Bachelor of Commerce (B.Com)</h4>
              <h5 className="career-org">CMR University, Bengaluru</h5>
            </div>
            <div className="career-right">
              <p className="career-desc">
                Built a strong foundation in business, finance, accounting, and analytical thinking while graduating with a CGPA of 8.20/10.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-date">2025 – 2026</div>
              <h4 className="career-title">Advanced Certification in Data Science & AI</h4>
              <h5 className="career-org">Electronics & ICT Academy, IIT Guwahati<br/>(Offline Program in collaboration with Besant Technologies)</h5>
            </div>
            <div className="career-right">
              <p className="career-desc">
                Completed an industry-focused certification with hands-on training in SQL, Python, Excel, Power BI, Tableau, data analytics, and AI-powered problem solving.
              </p>
              <div className="career-chips">
                <span className="career-chip">SQL</span>
                <span className="career-chip">Python</span>
                <span className="career-chip">Power BI</span>
                <span className="career-chip">Tableau</span>
                <span className="career-chip">Microsoft Excel</span>
                <span className="career-chip">Data Analysis</span>
                <span className="career-chip">Artificial Intelligence</span>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="career-info-box">
            <div className="career-left">
              <div className="career-date">September 2024 – Present</div>
              <h4 className="career-title">Customer Service Support Operator (Order-to-Cash)</h4>
              <h5 className="career-org">Siemens Technology and Services Private Limited (STSPL)</h5>
            </div>
            <div className="career-right">
              <p className="career-desc">
                Supporting Order-to-Cash business operations by managing ServiceNow requests, processing subscription and licensing operations, performing Level-1 troubleshooting, maintaining SLA compliance, and collaborating with cross-functional stakeholders to ensure efficient service delivery.
              </p>
              <div className="career-chips">
                <span className="career-chip">Managed approx. 50 ServiceNow tickets/week</span>
                <span className="career-chip">Maintained SLA compliance</span>
                <span className="career-chip">Subscription Activations</span>
                <span className="career-chip">License Provisioning</span>
                <span className="career-chip">Access Management</span>
                <span className="career-chip">Level-1 Troubleshooting</span>
                <span className="career-chip">Stakeholder Collaboration</span>
                <span className="career-chip">Operational Documentation</span>
                <span className="career-chip">Process Improvement</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
