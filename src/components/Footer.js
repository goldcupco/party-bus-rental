import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Container maxWidth="lg" component="footer" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Party Bus Rental. All rights reserved.
      </Typography>
    </Container>
  );
}

export default Footer;