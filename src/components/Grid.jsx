import React from 'react';

const Grid = (props) => {
  const { word, difficulty } = props;
  let nbRow = 0;
  if (difficulty === 'easy'){
    nbRow = 8;
  }
  else if (difficulty === 'medium'){
    nbRow = 6;
  }
  else if (difficulty === 'hard'){
    nbRow = 4;
  }
  const nbCol = word.length;

  return (
    <table>
      <tbody>
        {[...Array(nbRow)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(nbCol)].map((_, colIndex) => (
              <td key={colIndex}>
                {rowIndex === 0 && colIndex === 0 ? word[0] : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;