import React from 'react';
import { ScrollContainer, ScrollPage, Animator, batch,  FadeIn, MoveIn, StickyIn, ZoomIn } from "react-scroll-motion";
import Navbar from '../components/navbar';
import VerticalSlider from '../components/slider';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';
import MUICoolTextSlider from '../components/products';

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Home() {
  return (
    <>
      <Navbar />
      <ScrollContainer>
        {/* Vertical Slider Section */}
        <VerticalSlider />

        {/* About Us Section */}
        <ScrollPage page={2} >
          <Animator
            animation={ZoomInScrollOut}
            style={{
              height: '100%', 
              width: '100%',
              marginTop: { xs: '10%', sm: '20%', md: '30%', lg: '5%' }, // Responsive margins
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AboutUs 
              style={{
                width: '100%', 
                maxWidth: '100%', 
                padding: { xs: '20px', sm: '30px', md: '40px' }, 
                height: { xs: 'auto', md: 'auto' }, // Increase height for larger screens
                marginBottom:'50%'
              }} 
            />
          </Animator>
        </ScrollPage>

        {/* Product Slider Section */}
        <ScrollPage page={3} >
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
        <ScrollPage page={4}>
          <Footer 
            style={{ 
              width: '100%', 
              maxWidth: '1200px', 
              padding: { xs: '10%', sm: '5%', md: '3%' }, // Responsive padding
              textAlign: 'center', // Ensure content centers on small screens
            }} 
          />
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default Home;
