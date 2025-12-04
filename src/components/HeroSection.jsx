import React from 'react'
import heroImg1 from "../assets/images/img1.jpg";
import heroImg2 from "../assets/images/img2.jpg";

const HeroSection = () => {
  return (
    
    <div>
      <div className='hero_section'>
        <div className='hero-left'>
            <div className='image_box'>
                 <img src={heroImg1} className="img img1" />
  <img src={heroImg2} className="img img2" />
            </div>
        </div>
        <div className='hero-right'>
             <h1>Welcome to My Blog</h1>
        <p>
          Explore interesting stories, guides, and tutorials.
        </p>
        <button className="hero_btn">Read More</button>
    
        </div>
      </div>
    </div>
  )
}

export default HeroSection
