import React from 'react';
import styled from 'styled-components';

const About: React.FC = () => {

  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    display-direction: column;
  `;

  return (
    <Div>
        Software Engineer focused on delivering solutions. Operating in a Agile
        environment. Continuous improvement of his development skills and
        staying informed on the bleeding edge of web development and
        micro-services.
    </Div>
  );
};

export default About;
