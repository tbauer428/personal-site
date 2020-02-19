import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import { Redirect } from 'react-router';

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
    from: { opacity: 0 },
    marginTop: '2rem'
  });

  const Button = styled.span`
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
    background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
    background-color: #768d87;
    border-radius: 5px;
    border: 1px solid #566963;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
    padding: 11px 23px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #2b665e;
    width: 12.5%;
    margin-top: 4rem;
  `;

  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    display-direction: column;
  `;

  return (
    <Div>
      <animated.div style={props}>
        Software Engineer focused on delivering solutions. Operating in a Agile
        environment. Continuous improvement of his development skills and
        staying informed on the bleeding edge of web development and
        micro-services.{' '}
      </animated.div>
      <BackButton />
    </Div>
  );
};

export default AboutMe;
