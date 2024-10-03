import React from 'react';

const ButtonDiff = (props) => {
  const { difficulty } = props;
  let color = '';
  if (difficulty === 'easy'){
    color = 'green';
  }
  else if (difficulty === 'medium'){
    color = 'orange';
  }
  else if (difficulty === 'hard'){
    color = 'red';
  }
  return (
    <button style={{backgroundColor:color}}>{difficulty}</button>
  );
};

export default ButtonDiff;