import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Party Bus Rental has been providing exceptional transportation services since 2010. Our mission is to create unforgettable experiences for our clients, combining luxury, safety, and fun.
      </Typography>
      <Typography variant="body1" paragraph>
        With a fleet of state-of-the-art party buses and a team of professional drivers, we ensure that every journey with us is memorable and worry-free.
      </Typography>
    </Container>
  );
}

export default About;