// src/components/HeroSection.jsx
import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import DashboardPreview from './DashboardPreview.jsx';

const HeroSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Plan, Track, and <br />
              Deliver Your Projects< br />
               Efficiently
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" paragraph>
              A modern project management dashboard built with the MERN stack.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2, px: 4, py: 1.5, textTransform: 'none', borderRadius: 2 }}
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Image Preview */}
          <Grid item xs={12} md={6}>
           <DashboardPreview/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
