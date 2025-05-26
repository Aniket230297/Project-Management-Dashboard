import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

const features = [
  {
    icon: <LockIcon fontSize="large" color="primary" />,
    title: 'Authentication',
    desc: 'Secure JWT-based login',
  },
  {
    icon: <SecurityIcon fontSize="large" color="primary" />,
    title: 'User Roles',
    desc: 'Admin, Manager, Developer views',
  },
  {
    icon: <FolderCopyIcon fontSize="large" color="primary" />,
    title: 'Project Management',
    desc: 'Create and manage multiple projects',
  },
  {
    icon: <ViewColumnIcon fontSize="large" color="primary" />,
    title: 'Task Boards',
    desc: 'Kanban style task tracking',
  },
];

const ServiceSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f9fafb' }}>
      <Container maxWidth="md">
        <Grid container spacing={5} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ height: '100%' }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    height: '100%', // Makes all cards equal height
                    boxSizing: 'border-box',
                    width:"400px",
                  }}
                >
                  {feature.icon}
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
