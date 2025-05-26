// src/pages/Register.jsx
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from '@mui/material';

const roles = ['Admin', 'Manager', 'Developer'];

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Submitted:', formData);
    // 👉 Add API call here later
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create an Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          {/* Name */}
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Role */}
          <TextField
            fullWidth
            select
            label="Select Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            margin="normal"
            required
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
