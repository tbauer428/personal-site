import React from 'react';
import { useSpring, animated } from 'react-spring';

const AboutMe: React.FC = () => {
  const props = useSpring({
    vector: [0, 10, 30],
    display: 'block',
    padding: 20,
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
    borderBottom: '10px solid #2D3747',
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <animated.div style={props}>
      Software Engineer focused on delivering solutions. Operating in a Agile
      environment. Continuous improvement of his development skills and staying
      informed on the bleeding edge of web development and micro-services.{' '}
    </animated.div>
  );
};

export default AboutMe;
