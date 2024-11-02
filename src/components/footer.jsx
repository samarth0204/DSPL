import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../images/DSPL.png";
import Coming_Soon from '../images/comingSoon.png';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#003161', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img 
                src={`${logo}`} // Replace with the actual path to your image
                alt="DSPL Logo" // Alt text for the image
                style={{ width: '100px', height: 'auto' }} // Adjust the width and height as needed
              />
            </Box>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Dhameja Spices Pvt. Ltd.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We deliver spices at their best form in flavour and nutrients!
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 2 }}>
              29/1, Saraswati Udhyog Nagar, Khasra No. 446/1/2, Gram Badiya Keema Nemawar Road, Indore - 452016 (M.P.)
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              88711 47664 | dhamejaspicespvtltd@gmail.com
            </Typography>
            <Box>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Middle Columns */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Shop Now
            </Typography>
            {['Shop All', 'Veg Spices', 'Non Veg Spices', 'Pure Spices', 'Blended spices'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                <Link href="/all-products" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Links
            </Typography>
            {['Know Our Company', 'Meet Our Founders'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                <Link href="about" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Other
            </Typography>
            {['Reviews'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                <Link href="/" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Also available on
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {/*'Amazon', 'Flipkart', 'Jio Mart', 'CRED', 'Big Basket', 'Zepto'*/}
              {['Coming_Soon'].map((platform) => (
                <img
                  key={platform}
                  src={`${Coming_Soon}`}
                  alt={platform}
                  style={{ height: 80, width: 120, objectFit: 'contain' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            © Dhameja Spices Pvt. Ltd. &nbsp;&nbsp; Privacy Policy | Returns and Refund | Quality Assurance &nbsp;&nbsp; Designed & Developed by Samarth Saini
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}