import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, Sticky } from "react-scroll-motion";
import img1 from '../images/desktop_view_1.jpg'; // Desktop image
import img2 from '../images/desktop_view_2.jpg'; // Desktop image
import img3 from '../images/desktop_view_3.jpg'; // Desktop image
import mobileImg1 from '../images/mobile_view_3.jpg'; // Mobile image
import mobileImg2 from '../images/mobile_view_4.jpg'; // Mobile image
import mobileImg3 from '../images/mobile_view_5.jpg'; // Mobile image
import logo from "../images/logo(2).png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const SliderWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const TextOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: center; // Center the text vertically
  padding: 0 5%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: center; // Center the text horizontally on mobile
  }
`;

const TextContent = styled(Box)`
  color: white;
  text-align: center; // Center text for mobile view
  width: 100%;
  overflow: hidden;
`;

const ImageSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
       
          <SliderWrapper>
            <Slider {...settings}>
              {images.map((image, index) => (
                <Box key={index}>
                  <SlideImage src={image} alt={`slide-${index + 1}`} />
                </Box>
              ))}
            </Slider>
            <TextOverlay>
            <Animator animation={FadeUp}>
            
              <TextContent>
                <img 
                  src={logo} // Replace with the path to your logo or image
                  alt='logo' 
                  sx={{
                    width: { xs: '50px', sm: '60px', md: '80px', lg: '100px' }, // Set pixel sizes for responsiveness
                    height: 'auto', // Maintain aspect ratio
                    marginBottom: 2, // Adds space below the image
                    display: 'block', // Ensure it's displayed as a block element
                    maxWidth: '100%', // Ensure the image doesn't exceed its parent container
                  }} 
                />
                <Typography 
                
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' }, 
                    fontWeight: 'bold', 
                    marginBottom: { xs: 1, sm: 2 },
                    maxWidth: '100%' // Change maxWidth to 100% for better mobile view
                  }}
                > 
                  DivyDamini <span style={{ color: 'red' }}>Masale</span>
                </Typography>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.7rem', lg: '2.2rem' }, 
                    marginBottom: { xs: 1, sm: 2 },
                    maxWidth: '100%' // Change maxWidth to 100% for better mobile view
                  }}
                >
                  The Real Taste of Spices
                </Typography>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem', lg: '1.8rem' },
                    maxWidth: '100%', // Change maxWidth to 100% for better mobile view
                    marginBottom: { xs: 1, sm: 2 },
                  }}
                >
                  Quality products by <span style={{ color: 'red' }}>Dhameja Spices Pvt. Ltd.</span>
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem', lg: '1.8rem' },
                    maxWidth: '100%' // Change maxWidth to 100% for better mobile view
                  }}
                >
                  Discover the unparalleled quality of our exquisite spice blends
                </Typography>
              </TextContent>
              </Animator>
            </TextOverlay>
          </SliderWrapper>
       
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ImageSlider;