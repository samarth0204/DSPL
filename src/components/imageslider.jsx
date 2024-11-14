import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, Sticky } from "react-scroll-motion";
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../images/desktop_view_1.jpg';
import img2 from '../images/desktop_view_2.jpg';
import img3 from '../images/desktop_view_3.jpg';
import mobileImg1 from '../images/mobile_view_3.jpg';
import mobileImg2 from '../images/mobile_view_4.jpg';
import mobileImg3 from '../images/mobile_view_5.jpg';
import logo from "../images/logo(2).png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const TextOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  padding: 0 5%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TextContent = styled(motion.div)`
  color: white;
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-top: 3px solid #f00;
  border-radius: 50%;
`;

const ImageSlider = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating loading time

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
      </Box>
    ),
  };

  const images = isMobile
    ? [mobileImg1, mobileImg2, mobileImg3]
    : [img1, img2, img3];

  const FadeUp = batch(Fade(), Sticky(), MoveIn(0, -100));

  const pageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.2 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    in: { y: 0, opacity: 1 },
    out: { y: -50, opacity: 0 },
  };

  const textTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AnimatePresence>
        {loading && (
          <LoadingOverlay
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </LoadingOverlay>
        )}
      </AnimatePresence>
      <ScrollContainer>
        <ScrollPage page={0}>
          <SliderWrapper>
            <Slider {...settings}>
              {images.map((image, index) => (
                <Box key={index}>
                  <SlideImage 
                    src={image} 
                    alt={`slide-${index + 1}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </Box>
              ))}
            </Slider>
            <TextOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Animator animation={FadeUp}>
                <TextContent>
                  <motion.img 
                    src={logo}
                    alt='logo' 
                    style={{
                      width: isMobile ? '130px' : '220px', // slightly bigger size
                      height: 'auto',
                      marginBottom: '16px',
                      display: 'block',
                      maxWidth: '100%',
                      alignSelf: 'center',
                      marginLeft: 'auto', // Center horizontally
                      marginRight: 'auto' // Center horizontally
                    }} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
                  />
                  <motion.div variants={textVariants} transition={textTransition}>
                    <Typography 
                      variant="h1" 
                      sx={{ 
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' }, 
                        fontWeight: 'bold', 
                        marginBottom: { xs: 1, sm: 2 },
                        maxWidth: '100%'
                      }}
                    > 
                      DivyDamini <span style={{ color: 'red' }}>Masale</span>
                    </Typography>
                  </motion.div>
                  <motion.div variants={textVariants} transition={{ ...textTransition, delay: 0.1 }}>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.9rem', lg: '2.2rem' }, 
                        marginBottom: { xs: 1, sm: 2 },
                        maxWidth: '100%'
                      }}
                    >
                      The Real Taste of Spices
                    </Typography>
                  </motion.div>
                  <motion.div variants={textVariants} transition={{ ...textTransition, delay: 0.2 }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.8rem' },
                        maxWidth: '100%',
                        marginBottom: { xs: 1, sm: 2 },
                      }}
                    >
                      Quality products by <span style={{ color: 'red' }}>Dhameja Spices Pvt. Ltd.</span>
                    </Typography>
                  </motion.div>
                  <motion.div variants={textVariants} transition={{ ...textTransition, delay: 0.3 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem', lg: '1.8rem' },
                        maxWidth: '100%'
                      }}
                    >
                      Discover the unparalleled quality of our exquisite spice blends
                    </Typography>
                  </motion.div>
                </TextContent>
              </Animator>
            </TextOverlay>
          </SliderWrapper>
        </ScrollPage>
      </ScrollContainer>
    </motion.div>
  );
};

export default ImageSlider;