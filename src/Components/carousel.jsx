// Carousel.js
import { useState, useEffect } from 'react';
import '../App.css';
import caro1 from '../assets/images/carousel/Frame 322.png'
import caro2 from '../assets/images/carousel/Frame 1222.png'
import caro3 from '../assets/images/carousel/Frame 122.png'
import logs from '../assets/images/carousel/Group.png'

const Carousel = () => {
  //contents in the carousel

  const slides = [
    {
        image: caro1,
        text: "The creative agency's attention to detail and their ability to bring our vision to life were truly impressive.",
        name: 'Mrs Adesanya Blessing',
        title: 'CEO @ Blessed Drip',
      },
      {
        image: caro2,
        text: "The creative agency's attention to detail and their ability to bring our vision to life were truly impressive.",
        name: 'Mrs Adesanya Blessing',
        title: 'CEO @ Blessed Drip',
      },
      {
        image: caro3,
        text: "The creative agency's attention to detail and their ability to bring our vision to life were truly impressive.",
        name: 'Mrs Adesanya Blessing',
        title: 'CEO @ Blessed Drip',
      },
    // Add more slides here
  ];

  //carousel functionality
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="carousel-container ">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <img className='p-5 w-40' src={logs}/>
          <div className="carousel-content">
            <p className='border-solid border-1 text-center text-sm items-center rounded-full py-2 w-44 mb-3'>Vendors on Swiphr</p>
            <p className=' horn text-2xl font-extrabold '>{slide.text}</p>
            <p className=' text-xs pt-3'><strong>{slide.name}</strong></p>
            <p className=' text-xs'>{slide.title}</p>
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;