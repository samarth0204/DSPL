import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  ListItemIcon,
} from '@mui/material';
import { Public, People, Business } from '@mui/icons-material';
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import images from "../images/blackBg.jpg";

const AboutUsAll = () => {
  return (
    <>
    <NavBar />
    <Box sx={{ width: '100%', mt: 4, mb: 4, overflowY: 'auto', bgcolor: 'black', color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            About Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                HubSpot's company and culture are a lot like our product. They're 
                crafted, not cobbled, for a delightful experience.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img 
                src= {`${images}`}
                alt="Team" 
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img 
                src={`${images}`} 
                alt="Office" 
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Our Mission: Helping Millions of Organizations Grow Better
              </Typography>
              <Typography variant="body1">
                We believe that our long-term success lies in growing better, not just growing bigger. And 
                growing better means aligning the success of our business with the success of our customers and our community.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" paragraph>
                In 2004, three MIT graduate students Brian Halligan and Dharmesh 
                Shah noticed a shift in the way people shop and buy. Consumers were 
                no longer tolerating interruptive bids for their attention — they'd 
                gotten good at ignoring them.
              </Typography>
              <Typography variant="body1">
                From this shift, a company was born: HubSpot. It was founded on 
                "inbound", the notion that people don't want to be interrupted by 
                marketers or harassed by salespeople — they want to be helped.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img 
                src={`${images}`} 
                alt="Founder" 
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            HubSpot By the Numbers
          </Typography>
          <Grid container spacing={2}>
            {[
              { icon: <Public sx={{ color: 'white' }} />, title: '14 Global Offices', subtitle: 'Learn more' },
              { icon: <People sx={{ color: 'white' }} />, title: '8,000+ Employees', subtitle: 'Learn more' },
              { icon: <Business sx={{ color: 'white' }} />, title: '228,000+ Customers', subtitle: 'Learn more' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ display: 'flex', justifyContent: 'flex-start', bgcolor: 'transparent', border: '1px solid white' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemIcon sx={{ minWidth: '40px', color: 'white' }}>{item.icon}</ListItemIcon>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'white' }}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box>
          <Typography variant="h4" gutterBottom>
            Voted #1 in 571 Reports
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid item xs={4} sm={2} key={item}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/placeholder.svg?height=140&width=140&text=Award ${item}`}
                    alt={`Award ${item}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
    <Footer />
  </>
  );
};

export default AboutUsAll;
