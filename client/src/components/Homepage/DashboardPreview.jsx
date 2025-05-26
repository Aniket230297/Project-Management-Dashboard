// src/components/DashboardPreview.jsx
import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Pending', value: 20 },
  { name: 'In Progress', value: 50 },
  { name: 'Completed', value: 30 },
];

const COLORS = ['#8884d8', '#82ca9d', '#00C49F'];

const DashboardPreview = () => {
  return (
    <Paper elevation={3} sx={{ display: 'flex', borderRadius: 3, overflow: 'hidden' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 120,
          bgcolor: 'primary.main',
          color: 'white',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h6" fontSize="0.95rem">
          mentinacd
        </Typography>
        <Chip label="3 Projects" sx={{ bgcolor: 'primary.dark', color: 'white' }} />
        <Chip label="23 Tasks" sx={{ bgcolor: 'primary.dark', color: 'white' }} />
        <Chip label="5 Teams" sx={{ bgcolor: 'primary.dark', color: 'white' }} />
      </Box>

      {/* Main Panel */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Welcome Back!
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Task Status */}
        <Box sx={{ height: 200, width: '100%', mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>
            Task Status
          </Typography>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={60}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>

        {/* Recent Projects Table */}
        <Typography variant="subtitle1" gutterBottom>
          Recent Projects
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Website Redesign</TableCell>
              <TableCell>In Progress</TableCell>
              <TableCell>Aug 23, 2001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Marketing Campaign</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Jun 25, 2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile App Dev</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>Jun 30, 2022</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default DashboardPreview;
