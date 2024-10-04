import React from 'react';
import ButtonDiff from './ButtonDiff';
import Restart from '/restart.svg';

const Choice = ({ setDifficulty }) => {
  const handleReload = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <ButtonDiff difficulty="Facile" onClick={() => setDifficulty('easy')} />
      <ButtonDiff difficulty="Moyen" onClick={() => setDifficulty('medium')} />
      <ButtonDiff difficulty="Difficile" onClick={() => setDifficulty('hard')} />
      <a href="#" style={{textDecoration:'none'}} onClick={handleReload}><img style={{width:'2vw', height:'auto'}} src={Restart}></img></a>
    </>
  );
};

export default Choice;