
import React, { useState } from 'react';


export  function Testimonial() {
  const testimonials = [
    {
      image: 'https://placehold.co/100x100/ADD8E6/000000?text=Profile',
      text: "As a factory owner, high electricity costs were eating into our profits. After installing a solar power system, we’ve saved lakhs in utility bills.",
      name: "Manoj Verma",
      title: "Industrialist, Noida"
    },
    {
      image: 'https://placehold.co/100x100/98fb98/000000?text=Profile',
      text: "",
      name: "",
      title: ""
    },
    {
      image: 'https://placehold.co/100x100/ADD8E6/000000?text=Profile',
      text: "",
      name: "",
      title: ""
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

   return (

     <>
      
        <div className='heading'>
          <h1 className="testimonialhead">Testimonial</h1>
        </div>
     
      <div className="testimonial-container">

       

       <div className="testimonial-wrapper">
        <div className="testimonial-box">
          <div className="profile-image-container">
            <img 
              src={testimonials[currentTestimonialIndex].image} 
              alt="Profile" 
              className="profile-image" 
            />
          </div>
          <p className="testimonial-content">
            "{testimonials[currentTestimonialIndex].text}"
          </p>
          <p className="testimonial-signature">
            — {testimonials[currentTestimonialIndex].name},<br />
            {testimonials[currentTestimonialIndex].title}
          </p>
        </div>
        <button className="slider-btn prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="slider-btn next" onClick={handleNext}>
          &#10095;
        </button>
      </div>


    </div>
     
     
     
     
     </>
        
       
   
  );
}

export default Testimonial

    
