import { Box, Typography, Button, Stack, Avatar } from '@mui/material';

import { motion } from 'framer-motion';

function Hero() {
  
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      gap={5} 
      py={8} 
      flexWrap="wrap"
      sx={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Text column: grows, allows wrapping */}
      <Box sx={{ flex: '1 1 60%', minWidth: 260, textAlign: { xs: 'center', md: 'left' } }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            gutterBottom
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              lineHeight: 1.05,
              overflowWrap: 'break-word'
            }}
          >
            Hi, I'm{' '}
            <Box component="span" sx={{ display: 'inline-block', color: 'primary.main' }}>
              {['Sherlie', 'Angel', 'Ballikuri'].map((word, idx) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30, scale: 0.85, rotate: 8 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.25 + idx * 0.12,
                    type: 'spring',
                    damping: 12,
                    stiffness: 140
                  }}
                  style={{ display: 'inline-block', marginRight: idx < 2 ? '0.6rem' : 0 }}
                >
                  {word}
                </motion.span>
              ))}
            </Box>
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            AI/ML Enthusiast | Software Developer | Salesforce Certified
          </Typography>
          <Typography variant="body1" mb={3}>
            Motivated and versatile—I'm passionate about building ML systems, full-stack apps, and meaningful tech for social good.
          </Typography>
          <Stack 
            spacing={2} 
            direction="row" 
            sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
          >
            <Button 
              variant="contained" 
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outlined"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="text" 
              href="/Sherlie_Angel_Resume.pdf" 
              target="_blank"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </Button>
          </Stack>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          delay: 0.5
        }}
        // keep avatar from shrinking and give it its own column
        style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 140 }}
      >
        <Avatar
          alt="Profile: Sherlie Angel Ballikuri"
          src="/assets/sherlie.jpg"
          sx={{ 
            width: { xs: 140, md: 180 }, 
            height: { xs: 140, md: 180 }, 
            boxShadow: 5,
            border: '4px solid',
            borderColor: 'primary.main'
          }}
        />
      </motion.div>
    </Box>
  );
}
export default Hero;
