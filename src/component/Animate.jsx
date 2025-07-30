import React, { useState } from 'react';
import './AnimatedImage.css';

const AnimatedImage = ({ src, alt }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) / 40;
    const offsetY = (clientY - centerY) / 40;

    setTransform({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      className="image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className="animated-image"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default AnimatedImage;
