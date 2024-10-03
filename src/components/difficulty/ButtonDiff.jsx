import React from 'react';

const ButtonDiff = ({ difficulty, onClick }) => {
  let color = '';
  if (difficulty === 'Facile') {
    color = 'green';
  } else if (difficulty === 'Moyen') {
    color = 'orange';
  } else if (difficulty === 'Difficile') {
    color = 'red';
  }

  return (
    <button style={{ backgroundColor: color, borderRadius:'10px', border:'none' }} onClick={onClick}>
      {difficulty}
    </button>
  );
};

export default ButtonDiff;
