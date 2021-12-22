import React from 'react';
import {  } from './estilo';
import database from '../../database';

function PopUpCreditos() {
  
  return (
    <div style={{position: 'fixed', top: '50vh', left:'30vw', zIndex:1000, backgroundColor: 'red'}}>
      {database.ptbr.popups.creditos}</div>
  );
}

export default PopUpCreditos;
