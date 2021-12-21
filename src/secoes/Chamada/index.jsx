import React from 'react';
import { Texto } from './estilo';
import database from '../../database'

function Chamada() {
  console.log(database)
  const fraseChamada = database.ptbr.principal.fraseChamada;
  return (
    <Texto>
      {fraseChamada}
      
    </Texto>
  );
}

export default Chamada;
