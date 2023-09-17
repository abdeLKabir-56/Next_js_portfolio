import React from 'react';
import Particles from 'react-particles-js';
import { Enums } from 'tsparticles/Enums';

const ParticleBackground = () => {
  const particleParams = {
    particles: {
      number: {
        value: 100, // Adjust the number of particles
      },
      size: {
        value: 3, // Adjust the size of particles
      },
    },
  };

  return (
    <Particles
      params={particleParams}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default ParticleBackground;
