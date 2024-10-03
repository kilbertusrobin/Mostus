import React from 'react';

const Grid = (props) => {
  const { word, difficulty, guessedWord, letterStates } = props;
  let nbRow = 0;

  if (difficulty === 'easy') {
    nbRow = 8;
  } else if (difficulty === 'medium') {
    nbRow = 6;
  } else if (difficulty === 'hard') {
    nbRow = 4;
  }

  const nbCol = word.length;

  const getBackgroundColor = (rowIndex, colIndex) => {
    if (guessedWord.length === nbCol && rowIndex === 0 && colIndex < guessedWord.length) {
      return letterStates[colIndex] === 'correct' ? 'green'
        : letterStates[colIndex] === 'present' ? '#BA8E23'
          : 'red';
    }
    return '';
  };

  return (
    <table>
      <tbody>
        {[...Array(nbRow)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(nbCol)].map((_, colIndex) => (
              <td
                key={colIndex}
                style={{ backgroundColor: getBackgroundColor(rowIndex, colIndex) }}
              >
                {rowIndex === 0 && colIndex < guessedWord.length ? guessedWord[colIndex] : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
