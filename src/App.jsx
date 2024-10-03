import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import Title from './components/title';
import './App.css';

function App() {
  
  return (
    <>
      <div id='bodiv'>
        <Title />
        <div id='gridiv'>
          <Grid 
            word = 'CATAPULTE'
            difficulty = 'easy'
          />
        </div>
        <div id='keyboardiv'>
          <Keyboard />
        </div>
      </div>
    </>
  );
}

export default App;