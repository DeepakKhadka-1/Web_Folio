import "./styles/Work.css";

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <h2 className="work-section-title">Featured Projects</h2>
        
        <div className="work-cards">
          {/* Project 1 */}
          <div className="work-card layout-media-left">
            <a href="https://youtu.be/i0qLbIqCqRo" target="_blank" rel="noopener noreferrer" className="work-card-media-wrapper">
               <img src="/images/youtube_thumbnail.jpg" alt="AI-Assisted Retail Analytics Dashboard" className="work-media work-image" />
            </a>
            <div className="work-card-content">
               <h3>AI-Assisted Retail Analytics Dashboard</h3>
               <p>End-to-end retail analytics solution that transforms raw sales data into executive dashboards using Python, SQL, Power BI, and AI-assisted analytics.</p>
               <div className="work-card-chips">
                 <span className="work-chip">Python</span>
                 <span className="work-chip">SQL</span>
                 <span className="work-chip">Power BI</span>
                 <span className="work-chip">AI</span>
               </div>
               <div className="work-card-buttons">
                 <a href="https://github.com/DeepakKhadka-1/01-Leveraging-AI-Tools-for-Data-Analytics" target="_blank" rel="noopener noreferrer" className="work-btn primary-btn">View Project →</a>
               </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="work-card layout-media-right">
            <div className="work-card-media-wrapper">
               <img src="/images/hr_dashboard.png" alt="HR Analytics Dashboard" className="work-media work-image" />
            </div>
            <div className="work-card-content">
               <h3>HR Analytics & Attrition Intelligence</h3>
               <p>Interactive HR analytics dashboard built using Python, SQL, and Tableau to analyze workforce trends, employee attrition, and business insights.</p>
               <div className="work-card-chips">
                 <span className="work-chip">Python</span>
                 <span className="work-chip">SQL</span>
                 <span className="work-chip">Tableau</span>
               </div>
               <div className="work-card-buttons">
                 <a href="https://github.com/DeepakKhadka-1/02-HR-Analytics-Attrition-Project" target="_blank" rel="noopener noreferrer" className="work-btn primary-btn">View Project →</a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
