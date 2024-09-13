import React from 'react';
import { Typography, Container, Grid, TextField, Button } from '@mui/material';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Our Information
          </Typography>
          <Typography variant="body1">Phone: (555) 123-4567</Typography>
          <Typography variant="body1">Email: info@partybusrental.com</Typography>
          <Typography variant="body1">Address: 123 Party Street, Fun City, FC 12345</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Send us a message
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" margin="normal" required />
            <TextField fullWidth label="Email" type="email" margin="normal" required />
            <TextField fullWidth label="Message" multiline rows={4} margin="normal" required />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;