import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Food Supply to the Poor (Salesforce)",
    image: "/assets/project1.jpg",
    link: "https://github.com/sherlie2005/Salesforce_FoodConnect",
    description: "Automated food distribution system using Salesforce."
  },
  {
    title: "AI Depression Predictor",
    image: "/assets/project2.jpg",
    link: "https://github.com/sherlie2005/Mindscope",
    description: "Models analyzing behavioral signals for depression risk."
  }
];

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      px: 3
    }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, i) => (
          <Grid item xs={12} md={6} key={i}>
            <motion.div
              ref={i === 0 ? ref : undefined}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                ...cardVariants,
                visible: {
                  ...cardVariants.visible,
                  transition: {
                    ...cardVariants.visible.transition,
                    delay: i * 0.2
                  }
                }
              }}
              style={{ height: '100%' }}
            >
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <CardMedia 
                  component="img" 
                  height="200" 
                  image={project.image} 
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="contained"
                    size="large"
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
