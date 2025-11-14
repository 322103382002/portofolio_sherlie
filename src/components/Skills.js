import { Typography, Box, Chip, Tooltip, Zoom } from '@mui/material';
import { motion } from 'framer-motion';

const skillInfo = {
  // Programming Languages
  "Python": "Advanced Python programming with expertise in web development, data science, and AI applications.",
  "C": "Strong foundation in C programming, memory management, and system-level programming.",
  "C++": "Object-oriented programming and STL library experience for efficient software development.",
  "HTML": "Modern HTML5 features and semantic markup for accessible web development.",
  "CSS": "Advanced CSS3 styling, animations, and responsive design implementations.",
  "JavaScript": "ES6+ features, async programming, and modern JavaScript frameworks.",
  
  // Machine Learning & AI
  "TensorFlow": "Deep learning model development and deployment using TensorFlow 2.x.",
  "Keras": "Neural network architecture design and training with Keras API.",
  "PyTorch": "Dynamic computational graphs and deep learning research implementations.",
  "Scikit-learn": "Machine learning algorithms implementation and model evaluation.",
  "Neural Networks (CNN/RNN)": "Deep neural network architectures for computer vision and sequence modeling.",
  "Computer Vision": "Image processing, object detection, and visual recognition systems.",
  "Natural Language Processing": "Text analysis, sentiment analysis, and language understanding models.",
  
  // Data Science
  "Pandas": "Data manipulation, analysis, and preprocessing with Pandas DataFrames.",
  "NumPy": "Numerical computing and array operations for scientific computing.",
  "Matplotlib": "Data visualization and statistical graphics creation.",
  "Data Visualization": "Interactive dashboards and insightful data representations.",
  
  // Development Tools
  "Git": "Version control and collaborative development using Git workflows.",
  "GitHub": "Project management, CI/CD pipelines, and code collaboration.",
  "VS Code": "Advanced IDE features and extensions for efficient development.",
  "Jupyter": "Interactive computing and data science notebook environments.",
  "Colab": "Cloud-based notebook environment for ML/AI development.",
  
  // Frameworks
  "Node.js": "Server-side JavaScript and API development with Node.js.",
  "Express": "RESTful API design and web application backend development.",
  "React": "Modern UI development with React hooks and components.",
  "Material-UI": "Professional UI components and theming with Material Design."
};

function Skills() {
  const skillCategories = {
    "Programming Languages": ["Python", "C", "C++", "HTML", "CSS", "JavaScript"],
    "Machine Learning & AI": [
      "TensorFlow", "Keras", "PyTorch", "Scikit-learn",
      "Neural Networks (CNN/RNN)",
      "Computer Vision",
      "Natural Language Processing"
    ],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Data Visualization"],
    "Development Tools": ["Git", "GitHub", "VS Code", "Jupyter", "Colab"],
    "Frameworks": ["Node.js", "Express", "React", "Material-UI"]
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>Skills</Typography>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>{category}</Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1.5, 
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {skills.map(skill => (
              <Tooltip
                key={skill}
                title={skillInfo[skill] || skill}
                placement="top"
                TransitionComponent={Zoom}
                arrow
                enterDelay={200}
                leaveDelay={0}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip 
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{ 
                      fontSize: '1rem',
                      padding: '20px 12px',
                      borderRadius: '16px',
                      cursor: 'pointer'
                    }}
                  />
                </motion.div>
              </Tooltip>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default Skills;
