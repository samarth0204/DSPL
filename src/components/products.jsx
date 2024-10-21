/*import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Typography, 
  IconButton, 
  Paper,
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const products = [
  {
    id: '1',
    name: 'Turmeric Powder',
    description: 'A fine-ground Turmeric Powder or Haldi Powder is made with Salem Turmeric, distinguished by its golden yellow (kesaria) color and curcumin (color property) value.',
    color: '#FFC300',
    packingSizes: ['100 gms', '200 gms', '500 gms', '1 kg']
  },
  {
    id: '2',
    name: 'Coriander Powder',
    description: 'Freshly ground coriander powder, known for its aromatic flavor and essential role in Indian cuisine.',
    color: '#2ECC71',
    packingSizes: ['100 gms', '200 gms', '500 gms', '1 kg']
  },
  {
    id: '3',
    name: 'Red Chilli Powder',
    description: 'Vibrant red chilli powder, perfect for adding heat and color to your dishes.',
    color: '#E74C3C',
    packingSizes: ['100 gms', '200 gms', '500 gms', '1 kg']
  }
];

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

function MUICoolTextSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentProduct = products[currentIndex];

  const nextProduct = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, []);

  const prevProduct = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextProduct();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextProduct]);

  const theme = useTheme();
  const customTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      primary: {
        main: currentProduct.color,
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ maxWidth: '800px', margin: 'auto', padding: 4, height: '80dvh' }}>
        <Box sx={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Paper 
            elevation={3}
            sx={{
              width: { xs: '280px', md: '350px' },
              height: { xs: '280px', md: '350px' },
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              position: 'relative',
              overflow: 'hidden',
              background: `radial-gradient(circle, ${currentProduct.color}33 0%, transparent 70%)`,
              boxShadow: `0 0 0 2px ${currentProduct.color}, 0 0 20px ${currentProduct.color}66`,
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
                style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: theme.spacing(2) }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
                    {currentProduct.name}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography variant="subtitle1" align="center" color="white" gutterBottom>
                    PACKING IN :
                  </Typography>
                  <Typography variant="body2" align="center" color="white">
                    {currentProduct.packingSizes.join(', ')}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Typography variant="body2" align="center" color="white" sx={{ mt: 2 }}>
                    {currentProduct.description}
                  </Typography>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
          <IconButton
            onClick={prevProduct}
            aria-label="Previous product"
            sx={{ border: '1px solid white', color: 'white', backgroundColor: 'transparent' }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextProduct}
            aria-label="Next product"
            sx={{ border: '1px solid white', color: 'white', backgroundColor: 'transparent' }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MUICoolTextSlider;
*/

import mirchi from "../images/mirchi.jpeg";
import dhaniya from "../images/dhaniya.jpeg";
import haldi from "../images/haldi.jpeg";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const products = [
  {
    id: '1',
    name: 'Turmeric Powder',
    description: 'A fine-ground Turmeric Powder or Haldi Powder is made with Salem Turmeric...',
    color: '#FFC300',
    packingSizes: ['100 gms', '200 gms', '500 gms', '1 kg'],
    image: `${haldi}`,
  },
  {
    id: '2',
    name: 'Coriander Powder',
    description: 'Freshly ground coriander powder...',
    color: '#2ECC71',
    packingSizes: ['100 gms', '200 gms', '500 gms', '1 kg'],
    image: `${dhaniya}`,
  },
  {
    id: '3',
    name: 'Red Chilli Powder',
    description: 'Vibrant red chilli powder...',
    color: '#E74C3C',
    packingSizes: ['100 gms', '200 gms', '500 gms', '1 kg'],
    image: `${mirchi}`,
  },
];

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

const removeWhiteBackground = (imageSrc) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageSrc;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // If the pixel is white (or close to it), set it to transparent
        if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL()); // Return the new image with a transparent background
    };
  });
};

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [processedImage, setProcessedImage] = useState('');

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

  useEffect(() => {
    removeWhiteBackground(currentProduct.image).then(setProcessedImage);
  }, [currentProduct.image]);

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
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', maxWidth: '500px', aspectRatio: '1 / 1' }}>
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
                }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom
                    sx={{ color: currentProduct.color }}
                  >
                    {currentProduct.name}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    PACKING IN :
                  </Typography>
                  <Typography variant="body2">
                    {currentProduct.packingSizes.join(', ')}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {currentProduct.description}
                  </Typography>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </Paper>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: '-15%', md: '-25%' },
              transform: 'translateY(-50%)',
              width: { xs: '70%', md: '80%' },
              height: { xs: '70%', md: '80%' },
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentProduct.id}
                src={processedImage || currentProduct.image} // Use processed image if available
                alt={currentProduct.name}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transform: 'rotate(15deg)',
                  filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3))',
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 15 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <IconButton
            onClick={prevProduct}
            aria-label="Previous product"
            sx={{ mr: 2, color: 'primary.main' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={nextProduct}
            aria-label="Next product"
            sx={{ color: 'primary.main' }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
