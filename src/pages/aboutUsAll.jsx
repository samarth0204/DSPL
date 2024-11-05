import React from 'react';
import { motion } from 'framer-motion';
import { 
  Container, Typography, Grid, Card, CardContent, CardMedia, 
  Box, ListItemIcon, Button,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NatureIcon from '@mui/icons-material/Nature';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Divider } from '@mui/material';
import aboutspice from "../images/aboutSpicesImage - Copy.png";
import NavBar from '../components/navbar';
import {Link} from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff1744',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: `0 4px 20px ${theme.palette.primary.main}`,
  },
}));

const features = [
  { 
    icon: <EmojiEventsIcon />,
    title: "Heritage of Excellence",
    description: "Over half a century of expertise and dedication to crafting premium spices."
  },
  {
    icon: <NatureIcon />,
    title: "Commitment to Authenticity",
    description: "We preserve the natural essence, color, and aroma of each spice."
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Quality You Can Trust",
    description: "Sourced from the finest origins, meticulously processed, and quality-checked at every step."
  },
  {
    icon: <BoltIcon />,
    title: "Innovation in Tradition",
    description: "Combining age-old methods with modern standards to meet diverse culinary needs."
  }
];

const timeline = [
  { year: 2014, event: "Dhameja Spices founded" },
  { year: 2021, event: "Expanded product line" },
  { year: 2022, event: "Modernized production facilities" },
  { year: 2023, event: "Achieved international quality certifications" },
  { year: 2024, event: "Celebrating 10 years of excellence" }
];



function AboutUs() {
 

  return (
    <>
    <NavBar />
    <ThemeProvider theme={theme}>
    
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              About Dhameja Spices Pvt. Ltd.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typography variant="h6" align="center" paragraph>
              Welcome to Dhameja Spices Pvt. Ltd., where tradition meets excellence in the art of spice manufacturing. Established as a trusted name in the spice industry, we bring to you a rich legacy of authentic, high-quality spices that has been nurtured through 58 years of family expertise.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ my: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`${aboutspice}`}
                    alt="Dhameja Spices Heritage"
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Our Heritage
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Typography variant="h4" gutterBottom>
                  Our Commitment to Quality
                </Typography>
                <Typography variant="body1">
                  At Dhameja Spices, quality is more than just a promise—it is our tradition. Every spice we produce is carefully sourced, crafted, and inspected to ensure that it meets the highest standards. Our commitment to authenticity means that our spices retain their natural color and aroma, preserving the unique essence that has defined our family's legacy in spice manufacturing for decades.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Typography variant="h4" align="center" gutterBottom sx={{ mt: 8 }}>
              Why Choose Dhameja Spices?
            </Typography>
          </motion.div>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                >
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <ListItemIcon sx={{ color: 'primary.main' }}>
                        {feature.icon}
                      </ListItemIcon>
                      <Typography variant="h6">{feature.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{feature.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Typography variant="h4" align="center" gutterBottom sx={{ mt: 8 }}>
              Our Journey Through Time
            </Typography>
          </motion.div>
  
         
          <Box sx={{ position: 'relative', my: 8 }}>
            {/* Central Divider Line */}
            <Divider
  sx={{
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    border: '2px solid',
    borderColor: {
      xs: 'transparent', // For extra small screens
      sm: 'black',      // For small screens
      md: 'black',      // For medium screens
      lg: 'primary.main' // For large screens and above
    },
    transform: 'translateX(-50%)', // Center the line
    zIndex: 0,
  }}
/>

            {timeline.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2 + index * 0.2, duration: 0.8 }}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    zIndex: 1, // Keep text above the divider
                    alignItems: 'flex-start', // Ensure text aligns to the start
                    paddingLeft: index % 2 === 0 ? 2 : 0,
                    paddingRight: index % 2 === 0 ? 0 : 2,
                    marginTop: { xs: 2, md: 0 }, // Add margin top for better spacing on mobile
                    marginBottom: { xs: 2, md: 0 }, // Add margin bottom for better spacing on mobile
                  }}
                >
                  {/* Adjusted Icon and Text Container */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                      flex: '0 0 auto', // Prevent flex growth
                      width: '100%', // Ensure it uses full width for alignment
                    }}
                  >
                    {index % 2 === 0 && ( // Show icon on the left side of the text for left entries
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          marginRight: 1,
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        px: 2,
                        textAlign: index % 2 === 0 ? 'left' : 'right',
                        maxWidth: '90%', // Prevent text from getting too close to the center line
                      }}
                    >
                      <Typography variant="h6">{item.year}</Typography>
                      <Typography>{item.event}</Typography>
                    </Box>
                    {index % 2 !== 0 && ( // Show icon on the right side of the text only for right entries
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          marginLeft: 1,
                        }}
                      />
                    )}
                  </Box>
                </motion.div>
              </Box>
            ))}
          </Box>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.8 }}
          >
            <Box textAlign="center" sx={{ my: 8 }}>
              <Typography variant="h5" gutterBottom>
                At Dhameja Spices, we don't just make spices;
              </Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                We create experiences that bring people together, adding richness and depth to every meal.
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.8 }}
          >
          <Box textAlign="center">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#contact"
              >
              Contact Us
            </Button>
            </Link>
          </Box>
          </motion.div>
        </Container>
      </Box>
    </ThemeProvider>
  </>
  );
}

export default AboutUs;