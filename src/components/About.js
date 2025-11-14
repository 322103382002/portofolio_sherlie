import { Box, Typography, Grid, Paper, Link, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About() {
  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '800px', 
      margin: '0 auto',
      textAlign: 'center',
      padding: '20px'
    }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>About Me</Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        Sherlie Angel Ballikuri
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
        Driven by a deep passion for AI and Machine Learning, I build practical systems that solve real problems. 
        I love working full‑stack and connecting research ideas to production-ready code.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>Personal Skills</Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          {[
            "Analytical Thinking",
            "Team Collaboration",
            "Adaptability",
            "Communication",
            "Problem Solving",
            "Creative Innovation"
          ].map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill}>
              <Paper elevation={2} sx={{ 
                p: 2, 
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.paper',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.2s'
                }
              }}>
                <Typography>{skill}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Connect With Me</Typography>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 2,
          mt: 2 
        }}>
          <Typography>
            <Link href="mailto:sherlieangelballikuri@gmail.com" underline="hover">
              sherlieangelballikuri@gmail.com
            </Link>
          </Typography>
          <Typography>
            <Link href="tel:+917330822251" underline="hover">
              +91 7330822251
            </Link>
          </Typography>
          <Typography>
            Visakhapatnam, Andhra Pradesh - 530044
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Button
              variant="outlined"
              href="https://linkedin.com/in/sherlie-angel-321591255"
              target="_blank"
              rel="noreferrer"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/sherlie2005"
              target="_blank"
              rel="noreferrer"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default About;