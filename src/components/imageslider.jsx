import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import img1 from '../images/3.jpg'; // Desktop image
import img2 from '../images/starBg.jpg'; // Desktop image
import img3 from '../images/3.jpg'; // Desktop image
import mobileImg1 from '../images/mobile_view_3.jpg'; // Mobile image
import mobileImg2 from '../images/mobile_view_4.jpg'; // Mobile image
import mobileImg3 from '../images/mobile_view_5.jpg'; // Mobile image
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
  align-items: center;
  justify-content: flex-start;
  padding: 0 5%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const TextContent = styled(Box)`
  color: white;
  text-align: left;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    text-align: center;
  }
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

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <SlideImage src={image} alt={`slide-${index + 1}`} />
          </Box>
        ))}
      </Slider>
      <TextOverlay>
        <TextContent>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' }, 
              fontWeight: 'bold', 
              marginBottom: { xs: 1, sm: 2 },
              maxWidth: isMobile ? '100%' : '70%'
            }}
          >
            Divydamini Masale
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }, 
              marginBottom: { xs: 1, sm: 2 },
              maxWidth: isMobile ? '100%' : '80%'
            }}
          >
            The Real Taste of Spices
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem' },
              maxWidth: isMobile ? '100%' : '90%',
              marginBottom: { xs: 1, sm: 2 },
            }}
          >
            Quality products by Dhameja spices Pvt. Ltd.
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem' },
              maxWidth: isMobile ? '100%' : '90%'
            }}
          >
            Quality products by Dhameja spices Pvt. Ltd.
          </Typography>
        </TextContent>
      </TextOverlay>
    </SliderWrapper>
  );
};

export default ImageSlider;
