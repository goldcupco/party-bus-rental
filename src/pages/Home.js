import React from 'react';
import { Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Experience the Ultimate Party on Wheels
      </Typography>
      <Typography variant="h5" paragraph>
        Luxury party buses for any occasion
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/quote">
        Book Now
      </Button>

      <Grid container spacing={3} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Luxury Fleet
              </Typography>
              <Typography variant="body1">
                State-of-the-art party buses with premium amenities
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Professional Drivers
              </Typography>
              <Typography variant="body1">
                Experienced and licensed chauffeurs for a safe journey
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Customizable Packages
              </Typography>
              <Typography variant="body1">
                Tailored services to meet your specific needs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;