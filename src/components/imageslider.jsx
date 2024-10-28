import React from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import img1 from '../images/blackBg.jpg';
import img2 from '../images/starBg.jpg';
import img3 from '../images/blackBg.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled(Box)`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const SlideImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const TextOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
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
  width: 100vw;

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
        <ul style={{ margin: '0px', padding: '0px' }}> {dots} </ul>
      </Box>
    ),
  };

  const images = [img1, img2, img3];

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
            Divydamini
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' }, 
              marginBottom: { xs: 1, sm: 2 },
              maxWidth: isMobile ? '100%' : '80%'
            }}
          >
            The real taste of spices
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem' },
              maxWidth: isMobile ? '100%' : '90%'
            }}
          >
            Quality product by DSPL
          </Typography>
        </TextContent>
      </TextOverlay>
    </SliderWrapper>
  );
};

export default ImageSlider;