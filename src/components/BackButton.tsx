import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackButton: React.FC = () => {
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
    margin-top: 4rem;
  `;

  return (
    <Link to="/console">
      <Button>Go Back</Button>
    </Link>
  );
};

export default BackButton;
