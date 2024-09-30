import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Keep existing CSS for layout or custom styling
import { addBaseUrl } from '../../utils/imageUrl';
import restroData from '../../data/restro.json';

interface ImageSliderProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const images = restroData.imageList;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, autoSlide, autoSlideInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="home" className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-slide">
            <img
              src={addBaseUrl(image.src)}
              alt={image.alt}
              sizes={image.sizes}
            />
            <div className="slider-text text-white text-center italic bg-black bg-opacity-50 p-4 rounded-md max-w-[80%] mx-auto text-3xl md:text-4xl lg:text-5xl">
              {image.tag}
            </div>{' '}
            {/* Responsive text overlay */}
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
