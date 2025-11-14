import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2">&copy; 2025 Sherlie Angel Ballikuri</Typography>
      <Typography variant="body2">
        <Link href="https://linkedin.com/in/sherlie-angel-321591255" target="_blank" rel="noopener">LinkedIn</Link> |{' '}
        <Link href="https://github.com/sherlie2005" target="_blank" rel="noopener">GitHub</Link>
      </Typography>
    </Box>
  );
}

export default Footer;
