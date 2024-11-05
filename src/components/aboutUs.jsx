import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../images/aboutUs_1.png";
import img3 from "../images/aboutUs_3.png";
import img2 from "../images/aboutUs_2.png";
import img4 from "../images/logo.png";
import "../stylesheets/aboutUs.css"; // Importing the CSS

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-us">
      <div className="about-images">
  <img
    src={img1}
    alt="image1"
    style={{
      transform: `translateY(${scrollY * 0.02}px) scale(${1 + scrollY * 0.0001})`,
      opacity: 1 - Math.max(0, (scrollY - 400) * 0.001), // Start fading after 300px of scrolling
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
    }} 
  />
  <img
    src={img2}
    alt="image2"
    style={{
      transform: `translateY(${scrollY * -0.03}px) scale(${1 + scrollY * 0.00015})`,
      opacity: 1 - Math.max(0, (scrollY - 600) * 0.0015), // Start fading after 300px of scrolling
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
    }} 
  />
  <img
    src={img3}
    alt="image3"
    style={{
      transform: `translateY(${scrollY * 0.05}px) scale(${1 + scrollY * 0.00012})`,
      opacity: 1 - Math.max(0, (scrollY - 400) * 0.0012), // Start fading after 300px of scrolling
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
    }} 
  />
  <img
    src={img4}
    alt="image4"
    style={{
      
      transform: `translateY(${scrollY * -0.04}px) scale(${1 - scrollY * 0.00008})`,
      opacity: 1 - Math.max(0, (scrollY - 900) * 0.0008), // Start fading after 300px of scrolling
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
    }} 
  />
</div>

      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At DSPL, 'spice' embodies more than just flavor – it's a celebration of traditions, taste,
          and togetherness. Our spices are crafted to enhance every dish with richness and aroma,
          creating moments that bring families closer. As pioneers in the spice industry,
          we are committed to delivering the finest quality, ensuring that every meal
          is a blend of passion and heritage. Whether it's a festive gathering or a simple
          home-cooked meal, DSPL spices are here to elevate your culinary experiences
          and enrich the memories shared around the table.
        </p>
        {/* Updated button to use Link for navigation */}
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button 
          className="learn-more-btn"
          href="#about"
          >
            <span>Learn More</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
