import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, IconButton, Fab, useScrollTrigger, Zoom } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getTheme } from './theme';

function ScrollTop() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1500
        }}
        color="primary"
        size="medium"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

function App() {
  const [mode, setMode] = useState('dark'); // default dark mode
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

      {/* Theme Toggle (fixed, but responsive) */}
      <IconButton
        className="theme-toggle"
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        color="inherit"
        aria-label="toggle theme"
      >
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>

      {/* Main scroll-snap container */}
      <main className="snap-container">
        <div className="content-wrapper">
          <section className="snap-section" id="home"><Hero /></section>
          <section className="snap-section" id="about"><About /></section>
          <section className="snap-section" id="skills"><Skills /></section>
          <section className="snap-section" id="experience"><Experience /></section>
          <section className="snap-section" id="education"><Education /></section>
          <section className="snap-section" id="certifications"><Certifications /></section>
          <section className="snap-section" id="projects"><Projects /></section>
          <section className="snap-section" id="contact"><Contact /></section>
        </div>
      </main>

      <Footer />
      <ScrollTop />
    </ThemeProvider>
  );
}
export default App;
