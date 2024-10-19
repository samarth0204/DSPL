import React from 'react';
import { Box } from '@mui/material';
import ImageSlider from './imageslider';

function VerticalSlider() {
  return (
    <>
      {/* Content Box */}
      <Box
        sx={{
          position: 'relative',
          top:0,
           // Ensure content is above any other elements
          
          width: '100%', // Full width
          height: '100vh', // 90% of viewport height
          background: "grey"
        }}
      >
        {/* Add your main content here */}
         <ImageSlider />
      </Box>
    </>
  );
}

export default VerticalSlider;
