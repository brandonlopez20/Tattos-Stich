import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import tatto1 from '../../public/images/tatto.jpg';
import tatto2 from '../../public/images/tatto2.jpg';
import Hueco from '../../public/images/Hueco.jpg';

const images = [tatto1, tatto2,tatto1, tatto2, Hueco];

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid carrusel pt-2">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={900}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 carousel-image"
              src={image}
              alt={`Slide ${idx}`}
              style={{ width: '500px', height: '300px', objectFit: 'contain' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

