import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { Switch, Route, Redirect } from 'react-router-dom';
import Console from './pages/Console';

const App = () => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Redirect from="/" to="/console" />
      <Switch>
        <Route
          exact
          path="/console"
          render={() => <Console theme={theme} toggleTheme={toggleTheme} />}
        />
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
    </ThemeProvider>
  );
};

export default App;
