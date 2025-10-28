function Education() {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Education & Certifications</h2>
      <div style={{display:"flex",flexWrap:"wrap",gap:"1.5rem"}}>
        <div className="card" style={{flex:"1 1 250px"}}>
          <h5>B.Tech — CSE (AI & ML)</h5>
          <small>Gayatri Vidya Parishad College of Engineering (Autonomous)</small>
          <p>2022 — Present | CGPA: 9.53</p>
        </div>
        <div className="card" style={{flex:"1 1 250px"}}>
          <h5>Intermediate, MPC</h5>
          <small>Sri Chaitanya Junior College</small>
          <p>2020 — 2022 | Percentage: 97.7%</p>
        </div>
        <div className="card" style={{flex:"1 1 250px"}}>
          <h6>Certified Salesforce Developer</h6>
          <small>Professional Certification</small>
          <a href="https://drive.google.com/file/d/1tU_eJRZXKGp1jW6VuUd812aGJ3E0T9rz/view?usp=sharing" target="_blank" rel="noopener">Salesforce Certificate</a>
        </div>
        <div className="card" style={{flex:"1 1 250px"}}>
          <h6>NPTEL — Ethical Hacking</h6>
          <small>Online Certification</small>
          <a href="#" target="_blank" rel="noopener">NPTEL Certificate</a>
        </div>
        <div className="card" style={{flex:"1 1 250px"}}>
          <h6>Pandas for Data Analysis</h6>
          <small>Udemy</small>
          <a href="https://drive.google.com/file/d/11ZmZxdbSOPk0bXsB-Fp7K18ekehcSMP6/view?usp=sharing" target="_blank" rel="noopener">Pandas Certificate</a>
        </div>
      </div>
    </section>
  );
}
export default Education;
