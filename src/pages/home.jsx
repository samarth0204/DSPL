import React from 'react';
import { ScrollContainer, ScrollPage, Animator, batch, FadeIn, MoveIn, StickyIn, ZoomIn } from "react-scroll-motion";
import Navbar from '../components/navbar';
import VerticalSlider from '../components/slider';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';
import MUICoolTextSlider from '../components/products';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Home() {
  // Common margin styles for each ScrollPage
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%', // Bottom margin for all pages (adjust as needed)
  };

  return (
    <>
      <Navbar />
      <ScrollContainer>
        {/* Vertical Slider Section */}
        <ScrollPage>
          <div style={pageStyle}>
            <VerticalSlider />
          </div>
        </ScrollPage>

        {/* About Us Section */}
        <ScrollPage page={2}>
          
          <Animator
            animation={ZoomInScrollOut}
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AboutUs
              style={{
                width: '100%',
                maxWidth: '100%',
                margin: { xs: '60px', sm: '70px', md: '40px' }, // Adjust padding
                height: 'fit-content',
                
              }}
            />
          </Animator>
         
        </ScrollPage>

        {/* Product Slider Section */}
        <ScrollPage page={3}>
          <Animator animation={MoveIn(-1000, 0)}>
            <MUICoolTextSlider
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'fit-content',
                padding: { xs: '0', sm: '0', md: '3%' }, // Adjust padding for small screens
                
              }}
            />
          </Animator>
        </ScrollPage>

        {/* Footer Section */}
        
          <div
          style={{
            marginTop:'10%'
          }} >
            <Footer />
          </div>
       
      </ScrollContainer>
    </>
  );
}

export default Home;
