function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <p>
        Driven by a deep passion for AI and Machine Learning, I build practical systems that solve real problems. I love working full‑stack and connecting research ideas to production-ready code.
      </p>
      <div style={{display:"flex",gap:"2rem",flexWrap:"wrap",marginTop:"2rem"}}>
        <div>
          <h3>Personal Skills</h3>
          <ul>
            <li>Analytical Thinking</li>
            <li>Team Collaboration</li>
            <li>Adaptability</li>
            <li>Communication</li>
            <li>Problem Solving</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: <a href="mailto:sherlieangelballikuri@gmail.com">sherlieangelballikuri@gmail.com</a></p>
          <p>Phone: <a href="tel:+917330822251">+91 7330822251</a></p>
          <p>Visakhapatnam, Andhra Pradesh - 530044</p>
          <div>
            <a href="https://linkedin.com/in/sherlie-angel-321591255" target="_blank" rel="noopener">LinkedIn</a>{" "}
            <a href="https://github.com/sherlie2005" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
