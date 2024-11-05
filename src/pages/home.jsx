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
    marginTop: '10%', // Top margin for all pages (adjust as needed)
    marginBottom: '10%', // Bottom margin for all pages (adjust as needed)
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
                padding: { xs: '40px', sm: '30px', md: '40px' }, // Adjust padding
                height: 'auto',
                marginBottom: '60%', // Increased bottom margin to avoid clipping
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
                height: 'auto',
                padding: { xs: '10%', sm: '5%', md: '3%' }, // Adjust padding for small screens
              }}
            />
          </Animator>
        </ScrollPage>

        {/* Footer Section */}
        
          <div >
            <Footer />
          </div>
       
      </ScrollContainer>
    </>
  );
}

export default Home;
