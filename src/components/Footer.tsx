import React from "react";
import GitHubDark from "../GitHubDark.png";
import GitHubLight from "../GitHubLight.png";

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = FooterProps => {
  return (
    <footer>
      <div>
        <img
          src={FooterProps.theme === "light" ? GitHubDark : GitHubLight}
          height="32px"
          width="32px"
          alt="GitHub Logo"
        ></img>
        <a href="http://bit.ly/2ugGcBG">View this website on GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
