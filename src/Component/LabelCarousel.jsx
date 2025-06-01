import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function LabelCarousel() {
  const slides = [
    { text: 'NEW IN : MADAGASCAR', bg: '#febf04', color:'black' },
    { text: 'WORLDWIDE SHIPPING AVAILABLE', bg: '#294a70',color:'white' },
    { text: 'TRENDING', bg: '#ccccff',color:'black' },
  ];

  return (
    <div style={{ height: '2rem', overflow: 'hidden' }}>
      <Carousel
        controls={false}
        indicators={false}
        interval={1000}
        pause={false}
        fade={false}
        ride="carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                backgroundColor: slide.bg,
                color:slide.color,
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'normal',
                fontSize: '0.8rem',
              }}
            >
              {slide.text}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
   
    </div>
  );
}

export default LabelCarousel;
