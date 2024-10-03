import React, { useState } from 'react';

const Keyboard = () => {
  const letters = [
    'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N'
  ];
  const [word, setWord] = useState([]);

  const handleButtonClick = (letter) => {
    setWord([...word, letter]);
  };

  return (
    <div>
      {letters.map((letter, index) => (
        <React.Fragment key={index}>
          <button onClick={() => handleButtonClick(letter)}>{letter}</button>
          {(letter === 'P' || letter === 'M') && <br />}
        </React.Fragment>
      ))}
      <button>Effacer</button>
      <button>Entrer</button>
    </div>
  );
};

export default Keyboard;