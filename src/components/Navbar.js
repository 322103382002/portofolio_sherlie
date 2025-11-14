import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

const sections = [
  "Home","About","Skills","Experience","Education","Certifications","Projects","Contact"
];

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AppBar position="sticky" color="primary" elevation={2} sx={{ top: 0, zIndex: 1200 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Sherlie Angel
        </Typography>
        <Stack direction="row" spacing={2}>
          {sections.map(s => (
            <Button
              key={s}
              color="inherit"
              onClick={() => scrollToSection(s.toLowerCase())}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                transition: 'background-color 0.3s'
              }}
            >
              {s}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
