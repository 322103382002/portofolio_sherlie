import { Card, CardContent, Typography, Grid, Link, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certs = [
  {
    name: "Certified Salesforce Developer",
    source: "Professional Certification",
    link: "https://drive.google.com/file/d/1tU_eJRZXKGp1jW6VuUd812aGJ3E0T9rz/view?usp=sharing"
  },
  {
    name: "NPTEL — Ethical Hacking",
    source: "Online Certification",
    link: "#"
  },
  {
    name: "Pandas for Data Analysis",
    source: "Udemy",
    link: "https://drive.google.com/file/d/11ZmZxdbSOPk0bXsB-Fp7K18ekehcSMP6/view?usp=sharing"
  }
];

function Certifications() {
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
      <Typography variant="h4" fontWeight={700} gutterBottom>Certifications</Typography>
      <Grid container spacing={3} justifyContent="center">
        {certs.map((cert, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
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
              <Card 
                elevation={i === 0 ? 6 : 4}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '180px',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h6">{cert.name}</Typography>
                  <Typography color="text.secondary">{cert.source}</Typography>
                  <Link 
                    href={cert.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 'auto',
                      pt: 2,
                      display: 'inline-block',
                      '&:hover': {
                        textDecoration: 'none',
                        opacity: 0.8
                      }
                    }}
                  >
                    View Certificate
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Certifications;
