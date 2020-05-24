import React from 'react';
import GitHubDark from '../assets/GitHubDark.png';
import GitHubLight from '../assets/GitHubLight.png';

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = FooterProps => {
  return (
    <footer>
      <div>
        <a href="http://bit.ly/2ugGcBG">
          <img
            src={FooterProps.theme === 'light' ? GitHubDark : GitHubLight}
            height="16px"
            width="16px"
            alt="GitHub Logo"
          ></img>{' '}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
