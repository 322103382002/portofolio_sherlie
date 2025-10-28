function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <div className="card">
        <h5>Food Supply to the Poor (Salesforce)</h5>
        <div>
          <span className="skill-badge">Salesforce</span>
          <span className="skill-badge">Social Impact</span>
        </div>
        <p>Built a Salesforce solution to automate food distribution, donor tracking and beneficiary management.</p>
        <a href="https://github.com/sherlie2005/Salesforce_FoodConnect" target="_blank" rel="noopener">View on GitHub</a>
      </div>
      <div className="card">
        <h5>Mindscope — AI Depression Predictor</h5>
        <div>
          <span className="skill-badge">AI/ML</span>
          <span className="skill-badge">Health</span>
        </div>
        <p>Built models (Random Forest, SVM, Neural Nets) to analyse behavioural signals and predict depression risk.</p>
        <a href="https://github.com/sherlie2005/Mindscope" target="_blank" rel="noopener">View on GitHub</a>
      </div>
    </section>
  );
}
export default Projects;
