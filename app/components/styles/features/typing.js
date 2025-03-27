import React from 'react';
import {ReactTyped} from 'react-typed'; // Updated import statement

const TypingEffect = () => {
  return (
    <ReactTyped
      strings={[
        'MERN Stack Developer',
        'Python Developer', // Corrected typo
        'Freelancer',
        'PHP Developer',    // Added 'Developer' for consistency
        'Creative Thinker'
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
};

export default TypingEffect;
