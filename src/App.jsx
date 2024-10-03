import React, { useState } from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/title';
import Choice from './components/difficulty/Choice';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('medium');

  return (
    <>
      <div id='bodiv'>
        <Title />
        <div id='gridiv'>
          <Grid 
            word='CATAPULTE'
            difficulty={difficulty}
          />
          <div style={{display:'flex', flexDirection:'column', marginLeft:'5vw', height:'10vw', alignItems:'center', justifyContent:'space-around'}}>
            <Choice setDifficulty={setDifficulty} />
          </div>
        </div>
        <div id='keyboardiv'>
          <Keyboard />
        </div>
      </div>
    </>
  );
}

export default App;
