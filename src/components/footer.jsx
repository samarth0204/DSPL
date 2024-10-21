import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#B8001F', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              DSPL
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Dhameja Spices Pvt Ltd
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We deliver spices at their best form in flavour and nutrients!
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to our newsletter
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="email@example.com"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" color="primary">
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="body2" sx={{ mb: 2 }}>
              Asquare Food & Beverages Pvt Ltd Urla Industrial Area, Ring Rd Number 2, Gondwara, Raipur, Chhattisgarh 493221.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              95848 22000 | hello@zofffoods.com
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
            {['Shop All', 'Veg Spices', 'Non Veg Spices', 'Pure Spices', 'Whole Spices', 'Dry fruits', 'Seasonings', 'Immunity Booster', 'Combo Packs'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Links
            </Typography>
            {['Know Our Company', 'Meet Our Founders', 'Become a partner', 'Recipes'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Other
            </Typography>
            {['Reviews', 'Blog', 'Zoff TV', 'Track your order'].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1 }}>
                <Link href="#" color="inherit" underline="hover">
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
              {['Amazon', 'Flipkart', 'Jio Mart', 'CRED', 'Big Basket', 'Zepto'].map((platform) => (
                <img
                  key={platform}
                  src={`/placeholder.svg?height=30&width=80&text=${platform}`}
                  alt={platform}
                  style={{ height: 30, width: 80, objectFit: 'contain' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            © Zoff Foods Pvt. Ltd. &nbsp;&nbsp; Privacy Policy | Returns and Refund | Quality Assurance &nbsp;&nbsp; Designed & Developed by Droot
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}