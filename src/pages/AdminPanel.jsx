import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';

const dummyGroups = [
  { id: '1', title: 'React Learners', status: 'approved' },
  { id: '2', title: 'Python Devs', status: 'pending' },
  { id: '3', title: 'Cyber Ninjas', status: 'approved' },
];

const AdminPanel = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(dummyGroups); // Simulate fetch
  }, []);

  const handleApprove = (id) => {
    setGroups(prev =>
      prev.map(g => (g.id === id ? { ...g, status: 'approved' } : g))
    );
  };

  const handleReject = (id) => {
    setGroups(prev => prev.filter(g => g.id !== id));
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#fff8f0', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom color="secondary">
        🛠 Admin Panel
      </Typography>

      <Grid container spacing={3}>
        {groups.map(group => (
          <Grid item xs={12} sm={6} md={4} key={group.id}>
            <Card sx={{ bgcolor: group.status === 'pending' ? '#fff3cd' : '#e0f7fa' }}>
              <CardContent>
                <Typography variant="h6">{group.title}</Typography>
                <Typography>Status: {group.status}</Typography>

                {group.status === 'pending' && (
                  <Box mt={2}>
                    <Button onClick={() => handleApprove(group.id)} color="success" variant="contained" size="small" sx={{ mr: 1 }}>
                      Approve
                    </Button>
                    <Button onClick={() => handleReject(group.id)} color="error" variant="outlined" size="small">
                      Reject
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminPanel;
