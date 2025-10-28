function Skills() {
  const skills =
    [
      "Python","C","C++","HTML","CSS",
      "TensorFlow","Keras","PyTorch","Scikit-learn",
      "Pandas","NumPy","Matplotlib",
      "Node.js","Express",
      "Git","GitHub","OpenCV","Colab"
    ];
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills</h2>
      <div>
        {skills.map(skill =>
          <span key={skill} className="skill-badge">{skill}</span>
        )}
      </div>
      <div style={{margin:"2rem 0"}}>
        <h5>Machine Learning</h5>
        <ul>
          <li>Supervised & Unsupervised Learning</li>
          <li>Neural Networks (CNN/RNN)</li>
          <li>Model Evaluation & Deployment</li>
        </ul>
      </div>
    </section>
  );
}
export default Skills;
