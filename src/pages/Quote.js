import React from 'react';
import { Typography, Container } from '@mui/material';
import QuoteForm from '../components/QuoteForm';

function Quote() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Get a Quote
      </Typography>
      <QuoteForm />
    </Container>
  );
}

export default Quote;