import Image from 'Components/Image';
import React, { useEffect, useState } from 'react';

const images = [
  { id: 0, img: 'images/projects/clothingstore.png' },
  { id: 1, img: 'images/projects/dataninja.png' },
  { id: 2, img: 'images/projects/tourism.png' },
];

function Slider(props) {
  const { shouldDisplay } = props;

  return (
    <div
      className={`w-1/2 h-1/2 ml-100 relative glass-effect overflow-hidden rounded-xl ${
        shouldDisplay ? 'glass-effect-active' : ''
      } `}
    >
      <div
        style={{ width: `${images.length * 600}px` }}
        className="flex transition slider-auto h-full"
      >
        {images.map((image, index) => (
          <Image
            // style={{ transform: `translateX(100%)` }}
            className="w-full h-full "
            key={index}
            src={image.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
