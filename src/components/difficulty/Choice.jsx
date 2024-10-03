import React from 'react';
import ButtonDiff from './ButtonDiff';

const Choice = ({ setDifficulty }) => {
  return (
    <>
      <ButtonDiff difficulty="Facile" onClick={() => setDifficulty('easy')} />
      <ButtonDiff difficulty="Moyen" onClick={() => setDifficulty('medium')} />
      <ButtonDiff difficulty="Difficile" onClick={() => setDifficulty('hard')} />
    </>
  );
};

export default Choice;
