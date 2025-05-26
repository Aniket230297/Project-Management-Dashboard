
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Logo = styled('img')({
  width: 24,
  height: 24,
  marginRight: 8,
});

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo + Title */}
          <Box display="flex" alignItems="center">
            <Logo src="/logo192.png" alt="Logo" />
            <Typography variant="h6" color="textPrimary" fontWeight={600}>
              Project Management Dashboard
            </Typography>
          </Box>

          {/* Auth Links */}
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              component={RouterLink}
              to="/login"
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              Log In
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
