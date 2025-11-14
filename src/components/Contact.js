import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setError('Please fill all fields');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Your message has been sent! (Demo)');
      // reset form here if needed
    }
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: 'auto', paddingBottom: 8 }}>
      <Typography variant="h4" gutterBottom>Get in Touch</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Email" fullWidth margin="normal" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <TextField label="Subject" fullWidth margin="normal" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>Send Message</Button>
      </form>
    </Box>
  );
}

export default Contact;
