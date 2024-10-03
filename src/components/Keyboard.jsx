import React, { useState, useEffect } from 'react';

const Keyboard = (props) => {
  const { answer, setWord } = props;
  const answerLength = answer.length;
  const letters = [
    'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N'
  ];

  const [word, setWordState] = useState([answer[0]]);

  const handleButtonClick = (letter) => {
    if (word.length < answerLength) {
      const newWord = [...word, letter];
      setWordState(newWord);
      setWord(newWord);

      if (newWord.length === answerLength) {
        newWord.forEach((char, index) => {
          if (char === answer[index]) {
            console.log(`Lettre ${index + 1} correcte: ${char}`);
          } else if (answer.includes(char)) {
            console.log(`Lettre ${index + 1} présente mais incorrecte: ${char}`);
          } else {
            console.log(`Lettre ${index + 1} incorrecte: ${char}`);
          }
        });
      }
    }
  };

  const handleDeleteClick = () => {
    if (word.length > 1) {
      const newWord = word.slice(0, -1);
      setWordState(newWord);
      setWord(newWord);
    }
  };

  useEffect(() => {
    console.log(word);
  }, [word]);

  return (
    <div>
      {letters.map((letter, index) => (
        <React.Fragment key={index}>
          <button onClick={() => handleButtonClick(letter)}>{letter}</button>
          {(letter === 'P' || letter === 'M') && <br />}
        </React.Fragment>
      ))}
      <button onClick={handleDeleteClick}>Effacer</button>
      <button>Entrer</button>
    </div>
  );
};


export default Keyboard;