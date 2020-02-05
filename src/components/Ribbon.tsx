import React from 'react';
import styled from 'styled-components';
import getGravatarURL from '../utils/getGravatarURL';
import { Redirect } from 'react-router';

interface RibbonProps {
  toggleTheme: (theme: string) => void;
  theme: string;
}

const Ribbon: React.FC<RibbonProps> = ribbonProps => {
  const toggleTheme = () => {
    if (ribbonProps.theme === 'light') {
      ribbonProps.toggleTheme('dark');
    } else {
      ribbonProps.toggleTheme('light');
    }
  };

  let photoURL = getGravatarURL({
    email: 'tom.bauer95@gmail.com',
    size: 1024
  });

  const Img = styled.img`
    border-radius: 50%;
    height: 7.5rem;
    width: 7.5rem
    margin-bottom: 0;
    vertical-align: center;
   ;
  `;

  const Button = styled.span`
    cursor: pointer;
    font-size: 3rem;
  `;

  return (
    <div
      style={{
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          width: '33.33%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={() => <Redirect push to="/console" />}
      >
        journey to dev
      </div>

      <div
        style={{
          width: '33.33%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Img src={photoURL} alt="Me" />
      </div>
      <div
        style={{
          width: '33.33%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button onClick={() => toggleTheme()}>
          {ribbonProps.theme === 'light' ? '🌚' : '🌞'}
        </Button>
      </div>
    </div>
  );
};

export default Ribbon;
