import React, { useState } from "react";
function Contact() {
  const [alert, setAlert] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setAlert("Message sent (demo; email not sent). Thank you!");
    e.target.reset();
    // Wire up EmailJS or backend here for real submissions.
  }

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:"500px",margin:"0 auto"}}>
        <input type="text" placeholder="Your Name" name="name" required style={{width:"100%",marginBottom:"1rem"}} />
        <input type="email" placeholder="Your Email" name="email" required style={{width:"100%",marginBottom:"1rem"}} />
        <input type="text" placeholder="Subject" name="subject" required style={{width:"100%",marginBottom:"1rem"}} />
        <textarea placeholder="Your Message" name="message" rows={5} required style={{width:"100%",marginBottom:"1rem"}} />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      {alert && <div style={{margin:"1rem 0",color:"var(--primary)",fontWeight:"bold"}}>{alert}</div>}
      <small style={{display:"block",marginTop:"1rem",color:"var(--muted)"}}>Demo: form currently doesn't send email.</small>
    </section>
  );
}
export default Contact;
