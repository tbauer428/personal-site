import React, { useEffect } from 'react';
import Terminal from 'terminal-in-react';
import { Redirect } from 'react-router';
import About from '../components/About';
import Ribbon from '../components/Ribbon';
import { Icon } from 'semantic-ui-react';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

interface ConsoleProps {
  toggleTheme: (theme: string) => void;
  theme: string;
}

const Console: React.FC<ConsoleProps> = (ConsoleProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const thingsYouCanDo = 'about-me\n\nlinkedin\n\ngithub\n\nclear';

  const betterHelpCommand = () => {
    return thingsYouCanDo;
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          // justifyContent: 'center',
          flexDirection: 'column',
          // alignItems: 'center',
          marginTop: '20rem',
          width: '60vw',
        }}
      >
        <div
          style={{
            width: '60vw',
            // marginBottom: '20rem',
          }}
        >
          <Element
            name="ribbon"
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              // alignItems: 'center',
            }}
          >
            <div>
              <Ribbon
                toggleTheme={() => console.log('void')}
                theme={ConsoleProps.theme}
              />
            </div>
            <div
              style={{
                position: 'fixed',
                left: '50%',
                bottom: '20px',
                transform: 'translate(-50%, -50%)',
                margin: '0 auto',
              }}
            >
              <Link to="terminal" smooth={true}>
                <Icon name="angle double down" size="huge" color="grey" />
              </Link>
            </div>
          </Element>
        </div>
        <Element name="terminal">
          <Terminal
            prompt={ConsoleProps.theme === 'light' ? 'black' : 'green'}
            color={ConsoleProps.theme === 'light' ? 'black' : 'green'}
            allowTabs={false}
            backgroundColor={ConsoleProps.theme === 'light' ? 'white' : 'black'}
            barColor={'gray'}
            style={{
              fontWeight: 'bold',
              fontSize: '1.5em',
              width: '100%',
              height: '60%',
            }}
            commands={{
              // trying something new with the aboutMe section
              // 'about-me': () => <Redirect push to="/aboutme" />,
              // 'About-me': () => <Redirect push to="/aboutme" />,
              github: () => <Redirect push to="/github" />,
              Github: () => <Redirect push to="/github" />,
              linkedin: () => <Redirect push to="/linkedin" />,
              Linkedin: () => <Redirect push to="/linkedin" />,
              help: betterHelpCommand,
              Help: betterHelpCommand,
              shutdown: () => 'what exactly do you think you are doing? 👀',
              Shutdown: () => 'what exactly do you think you are doing? 👀',
              sudo: () => (
                <img
                  src="https://i.imgur.com/fVDH5bN.gif"
                  width="100%"
                  alt="credit goes to u/BigMurph26 https://i.imgur.com/fVDH5bN.gif"
                />
              ),
              Sudo: () => (
                <img
                  src="https://i.imgur.com/fVDH5bN.gif"
                  width="100%"
                  alt="credit goes to u/BigMurph26 https://i.imgur.com/fVDH5bN.gif"
                />
              ),
            }}
            msg="Hello there! This is the personal website of Thomas Bauer. 
            For a list of commands type 'help' in the console and press Enter.
            Or keep scrolling for some more information "
          />
        </Element>
      </div>
    </>
  );
};

export default Console;
