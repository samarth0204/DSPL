import React, { useEffect, useState } from "react";
import img1 from "../images/blackBg.jpg";
import img2 from "../images/starBg.jpg";
import img3 from "../images/blackBg.jpg";
import img4 from "../images/starBg.jpg";
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
          style={{ transform: `translateY(${scrollY * 0.1}px)` }} // Slight down
        />
        <img
          src={img2}
          alt="image2"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }} // Slight up
        />
        <img
          src={img3}
          alt="image3"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }} // Slight down
        />
        <img
          src={img4}
          alt="image4"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }} // Slight up
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
        <button className="learn-more-btn">
          <span>Learn More</span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
