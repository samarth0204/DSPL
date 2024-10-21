import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import img1 from "../images/blackBg.jpg";
import img2 from "../images/starBg.jpg";
import img3 from "../images/blackBg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/imageslider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,               // Show dots for navigation
    infinite: true,           // Infinite loop sliding
    speed: 500,               // Slide speed
    slidesToShow: 1,          // Show one slide at a time
    slidesToScroll: 1,        // Scroll one slide at a time
    autoplay: true,           // Enable auto sliding
    autoplaySpeed: 3000,      // Slide every 3 seconds
    arrows: false,            // No navigation arrows
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          color: 'white'
        }}
      >
        <ul style={{ margin: '0px', padding: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  const images = [img1, img2, img3];

  return (
    <Box sx={{ width: "100%", height: "100dvh", position: 'relative' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            sx={{
              width: "100vw",        // Full viewport width
              height: "100vh",       // Full viewport height
              objectFit: "cover",    // Ensure image fits properly within the slider
            }}
            alt={`slide-${index}`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
