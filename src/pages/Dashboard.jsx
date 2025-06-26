import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';

const allGroups = [
  { id: '1', title: 'React Learners', subject: 'Frontend' },
  { id: '2', title: 'Python Devs', subject: 'Backend' },
  { id: '3', title: 'Cyber Ninjas', subject: 'Security' },
];

const Dashboard = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [availableGroups, setAvailableGroups] = useState([]);

  useEffect(() => {
    setAvailableGroups(allGroups); // Initially show all groups
  }, []);

  const handleJoin = (group) => {
    setJoinedGroups(prev => [...prev, group]);
    setAvailableGroups(prev => prev.filter(g => g.id !== group.id));
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom color="primary">
        👤 User Dashboard
      </Typography>

      {/* Joined Groups Section */}
      <Typography variant="h6" sx={{ mt: 4 }}>✅ Your Groups</Typography>
      <Grid container spacing={2} mt={1}>
        {joinedGroups.length > 0 ? (
          joinedGroups.map(group => (
            <Grid item xs={12} sm={6} md={4} key={group.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{group.title}</Typography>
                  <Typography variant="body2">Subject: {group.subject}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography color="gray" sx={{ ml: 2 }}>You haven’t joined any groups yet.</Typography>
        )}
      </Grid>

      {/* Available Groups to Join */}
      <Typography variant="h6" sx={{ mt: 6 }}>📚 Available Groups</Typography>
      <Grid container spacing={2} mt={1}>
        {availableGroups.map(group => (
          <Grid item xs={12} sm={6} md={4} key={group.id}>
            <Card sx={{ bgcolor: '#fff' }}>
              <CardContent>
                <Typography variant="h6">{group.title}</Typography>
                <Typography variant="body2">Subject: {group.subject}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ mt: 1 }}
                  onClick={() => handleJoin(group)}
                >
                  Join Group
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
