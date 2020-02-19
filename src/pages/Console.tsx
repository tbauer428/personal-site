import React from 'react';
import Terminal from 'terminal-in-react';
import { Redirect } from 'react-router';

interface ConsoleProps {
  theme: string;
}

const Console: React.FC<ConsoleProps> = ConsoleProps => {
  const thingsYouCanDo = 'about-me\n\nlinkedin\n\ngithub\n\nclear';

  const betterHelpCommand = () => {
    return thingsYouCanDo;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem'
      }}
    >
      <Terminal
        prompt={ConsoleProps.theme === 'light' ? 'black' : 'green'}
        color={ConsoleProps.theme === 'light' ? 'black' : 'green'}
        allowTabs={false}
        backgroundColor={ConsoleProps.theme === 'light' ? 'white' : 'black'}
        barColor={'gray'}
        style={{ fontWeight: 'bold', fontSize: '1.5em', width: '100%' }}
        commands={{
          'about-me': () => <Redirect push to="/aboutme" />,
          github: () => <Redirect push to="/github" />,
          linkedin: () => <Redirect push to="/linkedin" />,
          help: betterHelpCommand,
          shutdown: () => 'what exactly do you think you are doing? 👀',
          sudo: () => (
            <img
              src="https://i.imgur.com/fVDH5bN.gif"
              width="100%"
              alt="credit goes to u/BigMurph26 https://i.imgur.com/fVDH5bN.gif"
            />
          )
        }}
        msg="Hello there! This is the personal website of Thomas Bauer. For a list of commands type 'help' in the console and press Enter. "
      />
    </div>
  );
};

export default Console;
