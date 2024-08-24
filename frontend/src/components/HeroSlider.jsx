import React from 'react';
import Slider from 'react-slick';

function HeroSlider() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 1200, // Delay between slides
    fade: true, // Fade transition between slides
  };

  const slides = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/564x/29/96/c3/2996c39f10cff59d15a03ee2e7c9eb8b.jpg', // Replace with your image URLs
      title: 'Welcome to CareerHive',
      subtitle: 'Your journey to a dream job starts here!',
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/564x/22/05/81/2205816ecd436c54b0549565f30084dd.jpg', // Replace with your image URLs
      title: 'Explore Opportunities',
      subtitle: 'Find the perfect job that suits your skills.',
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/564x/0d/22/52/0d225215efa73856cad903384ff2827e.jpg', // Replace with your image URLs
      title: 'Join Top Companies',
      subtitle: 'Connect with the best employers in the industry.',
    },
  ];

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} style={{ position: 'relative' }}>
            <div
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                textAlign: 'center',
                padding: '20px',
                
              }}
            >
              <div>
                <h1 style={{ fontSize: '68px', fontWeight: 'bold', marginBottom: '10px' }}>
                  {slide.title}
                </h1>
                <p style={{ fontSize: '44px', maxWidth: '600px', margin: '0 auto' }}>
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlider;
