import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

function Fleet() {
  const fleet = [
    { name: 'Luxury Party Bus', capacity: 20, features: 'LED lighting, premium sound system, mini bar', image: 'path_to_image1.jpg' },
    { name: 'VIP Limo Bus', capacity: 15, features: 'Leather seating, TV screens, champagne bar', image: 'path_to_image2.jpg' },
    { name: 'Party Shuttle', capacity: 30, features: 'Dance floor, karaoke system, multiple bars', image: 'path_to_image3.jpg' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Our Fleet
      </Typography>
      <Grid container spacing={3}>
        {fleet.map((bus, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={bus.image}
                alt={bus.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {bus.name}
                </Typography>
                <Typography variant="body1">
                  Capacity: {bus.capacity} passengers
                </Typography>
                <Typography variant="body2">
                  Features: {bus.features}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Fleet;