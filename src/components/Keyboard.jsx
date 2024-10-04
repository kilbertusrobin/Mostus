import React, { useState, useEffect } from 'react';

const Keyboard = (props) => {
  const { answer, currentWord, setWord, onCompleteWord, currentRow } = props;
  const answerLength = answer.length;
  const letters = [
    'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N'
  ];

  const [word, setWordState] = useState(currentWord);
  const [inactiveLetters, setInactiveLetters] = useState([]);

  useEffect(() => {
    setWordState(currentWord);
  }, [currentWord]);

  const handleButtonClick = (letter) => {
    if (word.length < answerLength) {
      const newWord = [...word, letter];
      setWordState(newWord);
      setWord(newWord);

      if (newWord.length === answerLength) {
        const newLetterStates = newWord.map((char, index) => {
          if (char === answer[index]) {
            return 'correct';
          } else if (answer.includes(char)) {
            return 'present';
          } else {
            return 'incorrect';
          }
        });

        const newInactiveLetters = newWord.filter((char) => !answer.includes(char));
        setInactiveLetters([...inactiveLetters, ...newInactiveLetters]);

        onCompleteWord(newWord, newLetterStates);
      }
    }
  };

  const handleDeleteClick = () => {
    if (word.length > 0) {
      const newWord = word.slice(0, -1);
      setWordState(newWord);
      setWord(newWord);
    }
  };

  return (
    <div>
      {letters.map((letter, index) => (
        <React.Fragment key={index}>
          <button
            onClick={() => handleButtonClick(letter)}
            style={{
              backgroundColor: inactiveLetters.includes(letter) ? '#303030' : 'initial'
            }}
          >
            {letter}
          </button>
          {(letter === 'P' || letter === 'M') && <br />}
        </React.Fragment>
      ))}
      <button onClick={handleDeleteClick}>Effacer</button>
    </div>
  );
};

export default Keyboard;
