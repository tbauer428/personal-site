import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global";
import Ribbon from "./components/Ribbon";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "60vw"
        }}
      >
        <Ribbon toggleTheme={toggleTheme} theme={theme} />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/" component={Dashboard} />
          <Route path="/" component={<div>ya yeet</div>} /> */}
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
