import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1f2937', color: '#f9fafb', py: 6, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left: About */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Project Dashboard
            </Typography>
            <Typography variant="body2" color="gray">
              Manage your team, projects and tasks efficiently with our dashboard.
            </Typography>
          </Grid>

          {/* Middle: Newsletter */}
          <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', pt: 3 }}>
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Project Dashboard. All rights reserved.
          </Typography>
          <Box mt={1}>
            <Link href="#" underline="hover" color="gray" sx={{ mx: 1 }}>
              Privacy
            </Link>
            <Link href="#" underline="hover" color="gray" sx={{ mx: 1 }}>
              Terms
            </Link>
            <Link href="#" underline="hover" color="gray" sx={{ mx: 1 }}>
              Contact
            </Link>
          </Box>
        </Box>
          </Grid>

          {/* Right: Social Links */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom */}
       
      </Container>
    </Box>
  );
};

export default Footer;
