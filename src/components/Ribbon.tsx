import React from "react";
import { Button } from "semantic-ui-react";

interface RibbonProps {
  toggleTheme: (theme: string) => void;
  theme: string;
}

const Ribbon: React.FC<RibbonProps> = ribbonProps => {
  const toggleTheme = () => {
    if (ribbonProps.theme === "light") {
      ribbonProps.toggleTheme("dark");
    } else {
      ribbonProps.toggleTheme("light");
    }
  };

  return (
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div>journey to dev</div>
      <div>
        <Button
          onClick={() => toggleTheme()}
          color={ribbonProps.theme === "light" ? "black" : "grey"}
        >
          {ribbonProps.theme === "light" ? "Dark Mode 🌚" : "Light Mode 🌞"}
        </Button>
      </div>
    </div>
  );
};

export default Ribbon;
