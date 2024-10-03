import React from 'react';
import ButtonDiff from './ButtonDiff';

const Choice = () => {
  return (
    <>
        <ButtonDiff
          difficulty="easy"
        />
        <ButtonDiff
          difficulty="medium"
        />
        <ButtonDiff
          difficulty="hard"
        />
    </>
  );
};

export default Choice;