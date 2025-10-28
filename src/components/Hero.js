function Hero() {
  return (
    <header id="home" className="hero-section container">
      <div style={{display:"flex",alignItems:"center",gap:"2rem", flexWrap:"wrap"}}>
        <div>
          <h1>Hi, I'm Sherlie Angel Ballikuri</h1>
          <h3>AI/ML Enthusiast | Software Developer | Salesforce Certified</h3>
          <p className="lead">
            Motivated and versatile—I'm passionate about building ML systems, full-stack apps, and meaningful tech for social good.
          </p>
          <div style={{marginTop:"1.5rem"}}>
            <a className="btn btn-primary" href="#contact">Get In Touch</a>{" "}
            <a className="btn btn-outline" href="#projects">View Projects</a>{" "}
            <a className="btn" href="/Sherlie_Angel_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div style={{marginTop:"1.5rem"}}>
            <a href="https://linkedin.com/in/sherlie-angel-321591255" target="_blank" rel="noopener noreferrer">LinkedIn</a>{" "}
            <a href="https://github.com/sherlie2005" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div>
          <img
            src="/assets/sherlie.jpg"
            alt="Profile: Sherlie Angel Ballikuri"
            style={{
              width:"220px",
              height:"220px",
              objectFit:"cover",
              borderRadius:"16px",
              boxShadow:"0 10px 30px rgba(0,0,0,0.12)"
            }}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}
export default Hero;
