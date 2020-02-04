import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import Ribbon from './components/Ribbon';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '65vw'
        }}
      >
        <Ribbon toggleTheme={toggleTheme} theme={theme} />
        <div
          style={{
            height: '80vh'
          }}
        >
          <Home theme={theme} />
          <Switch>
            <Route
              exact
              path="/linkedin"
              component={() => {
                window.location.replace(
                  'https://www.linkedin.com/in/thomas-bauer-a02988116/'
                );
                return null;
              }}
            />
            <Route
              exact
              path="/github"
              component={() => {
                window.location.replace(
                  'https://github.com/tbauer428/personal-site'
                );
                return null;
              }}
            />
          </Switch>
        </div>

        <Footer theme={theme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
