
// Import necessary components and styles
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Container, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

// Sample data for rewards
const rewardsData = [
  { id: 1, title: 'Reward 1', category: 'Category A' },
  { id: 2, title: 'Reward 2', category: 'Category B' },
  { id: 3, title: 'Reward 3', category: 'Category A' },
  // Add more rewards...
];

// List of unique categories
const categories = Array.from(new Set(rewardsData.map((reward) => reward.category)));

const OfferList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* You can add a menu icon or logo here */}
          </IconButton>
          <Typography variant="h6">Rewards</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ margin: '20px 0' }}>
        {/* Filter by category */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button onClick={() => handleCategoryChange('All')}>All</Button>
          {categories.map((category) => (
            <Button key={category} onClick={() => handleCategoryChange(category)}>
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Carousel for displaying rewards */}
      <Carousel>
        {rewardsData
          .filter((reward) => selectedCategory === 'All' || reward.category === selectedCategory)
          .map((reward) => (
            <Carousel.Item key={reward.id}>
              <Card style={{ width: '18rem' }}>
                <CardContent>
                  <Typography variant="h6">{reward.title}</Typography>
                  <Typography color="textSecondary">{reward.category}</Typography>
                </CardContent>
              </Card>
            </Carousel.Item>
          ))}
      </Carousel>

      {/* "Show More" section */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Button variant="outlined" color="primary">
          Show More
        </Button>
      </div>
    </Container>
  );
};

export default OfferList;

