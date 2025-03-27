"use client";

import { useState } from "react";

const HoverImageEffect = ({ src, width = "400px", height = "300px", style = {} }) => {
  const [hoverPosition, setHoverPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <div
      className="image-container"
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        ...style,
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Grayscale Image */}
      <img
        src={src}
        alt="Hover Effect"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(100%)",
          transition: "filter 0.2s ease",
        }}
      />

      {/* Color Reveal Effect */}
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${src}) no-repeat center/cover`,
          maskImage: `radial-gradient(circle 200px at ${hoverPosition.x} ${hoverPosition.y}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${hoverPosition.x} ${hoverPosition.y}, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        }}
      ></div>
    </div>
  );
};

export default HoverImageEffect;
