import React from 'react';
import Terminal from 'terminal-in-react';
import { Redirect } from 'react-router';

interface HomeProps {
  theme: string;
}

const Home: React.FC<HomeProps> = HomeProps => {
  const thingsYouCanDo = 'linkedin\n\ngithub';

  const betterHelpCommand = () => {
    return thingsYouCanDo;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem'
      }}
    >
      <Terminal
        prompt={HomeProps.theme === 'light' ? 'black' : 'green'}
        color={HomeProps.theme === 'light' ? 'black' : 'green'}
        allowTabs={false}
        backgroundColor={HomeProps.theme === 'light' ? 'silver' : 'black'}
        barColor={HomeProps.theme === 'light' ? 'white' : 'gray'}
        style={{ fontWeight: 'bold', fontSize: '1.5em', width: '100%' }}
        commands={{
          github: () => <Redirect push to="/github" />,
          linkedin: () => <Redirect push to="/linkedin" />,
          help: betterHelpCommand,
          shutdown: () => 'what exactly do you think you are doing? 👀'
        }}
        msg="Hello there! This is the personal website of Thomas Bauer. For a list of commands type 'help' in the console and press Enter."
      />
    </div>
  );
};

export default Home;
