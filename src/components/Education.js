import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    title: "B.Tech — CSE (AI & ML)",
    school: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
    period: "2022 — Present",
    details: "CGPA: 9.53"
  },
  {
    title: "Intermediate, MPC",
    school: "Sri Chaitanya Junior College",
    period: "2020 — 2022",
    details: "Percentage: 97.7%"
  }
];

function Education() {
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
      <Typography variant="h4" fontWeight={700} gutterBottom>Education</Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <motion.div
            ref={ref}
            className="floating-card"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            style={{ height: '100%' }}
          >
            <Card elevation={6} sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              minHeight: '200px'
            }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{education[0].title}</Typography>
                <Typography color="text.secondary" gutterBottom>{education[0].school}</Typography>
                <Typography>{education[0].period} | {education[0].details}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            style={{ height: '100%' }}
          >
            <Card elevation={4} sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              minHeight: '200px'
            }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{education[1].title}</Typography>
                <Typography color="text.secondary" gutterBottom>{education[1].school}</Typography>
                <Typography>{education[1].period} | {education[1].details}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Education;
