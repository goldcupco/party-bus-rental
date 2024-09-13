import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

function Services() {
  const services = [
    { title: 'Wedding Transportation', description: 'Make your special day even more memorable with our luxurious party buses.' },
    { title: 'Birthday Celebrations', description: 'Celebrate your birthday in style with a mobile party experience.' },
    { title: 'Corporate Events', description: 'Impress clients or reward employees with our premium transportation services.' },
    { title: 'Night Out Packages', description: 'Explore the city nightlife safely and in luxury.' },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Services;