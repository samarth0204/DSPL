import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { products } from '../constants/productInfo';

// Styled View All Button
const ViewAllButton = styled(Button)(({ theme }) => ({
  padding: '10px 30px',
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid white',
  fontSize: '1rem',
  cursor: 'pointer',
  position: 'relative',
  borderRadius: 0,
  overflow: 'hidden',
  transition: 'color 0.3s ease, border-color 0.3s ease',
  '&:hover': {
    color: 'white',
    borderColor: 'red',
    backgroundColor: 'transparent',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
    backgroundColor: 'red',
    zIndex: 0,
    transition: 'width 0.4s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
  '& span': {
    position: 'relative',
    zIndex: 1,
  },
}));

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8,
  }),
};

export default function MUICoolTextSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentProduct = products[currentIndex];

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: currentProduct.color,
      },
      background: {
        default: '#000000',
        paper: '#000000',
      },
    },
  });

  const nextProduct = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: 'background.default',
          p: 4,
          position: 'relative',
          width: {sx:'80%', sm:'80%', md:'100%', lg:'100%'},
          height:'fit-content',
          bottomMargin: {sx: '10%', sm:'10%', md:'100%', lg:'100%'}

        }}
      >
        {/* "Products" Heading */}
        <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'white', mb: 4 }}>
          Products
        </Typography>
        
        {/* Product showcase */}
        <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1000px',
    gap: { xs: 1, sm: 1, md: 1 },
  }}
>
  {/* Image slider (moved to left) */}
  <Box
    sx={{
      width: '100%',
      maxWidth: { xs: '200px', sm: '250px', md: '400px' },
      aspectRatio: '1',
      position: 'relative',
      order: { xs: 1, md: 1 }, // Set order to 1 for the left side
      marginTop: { xs: 0, md: 0 },
      marginRight: { xs: 0, md: -10 }, // Adjust margin if necessary
      zIndex: { xs: 0, md: 1 },
      bgcolor: 'transparent',
    }}
  >
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={currentProduct.id}
        src={currentProduct.image}
        alt={currentProduct.name}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          top: '0%',
          left: '0%',
          mixBlendMode: 'multiply',
          background: 'transparent',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 , rotate: {xs: 'none', md: 'none', lg: '-5' } }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  </Box>

  {/* Text slider (moved to right) */}
  <Box
    sx={{
      width: '100%',
      maxWidth: { xs: '300px', md: '500px' },
      aspectRatio: '1',
      position: 'relative',
      order: { xs: 2, md: 2 }, // Set order to 2 for the right side
      zIndex: 0,
      marginLeft: { xs: 0, md: 0 }, // Adjust margin if necessary
    }}
  >
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${currentProduct.color}33 0%, transparent 70%)`,
        boxShadow: `0 0 0 2px ${currentProduct.color}, 0 0 20px ${currentProduct.color}66`,
        overflow: 'hidden',
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentProduct.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(3),
            textAlign: 'center',
            transform: 'translateY(-20%)',
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: currentProduct.color }}>
              {currentProduct.name}
            </Typography>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <Typography variant="body1" sx={{ color: 'white' }}>
              {currentProduct.description}
            </Typography>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Paper>
  </Box>
</Box>


        {/* Navigation and ViewAll Button */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton onClick={prevProduct} sx={{ color: 'white' }}>
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
            {/* ViewAllButton positioned exactly below navigation buttons */}
          <Link to="/all-products" style={{ textDecoration: 'none' }}>
            <ViewAllButton variant="contained">
              <span>View All</span>
            </ViewAllButton>
          </Link>
            <IconButton onClick={nextProduct} sx={{ color: 'white' }}>
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </Box>
          
          
        </Box>
      </Box>
    </ThemeProvider>
  );
}