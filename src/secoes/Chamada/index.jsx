import React from 'react';
import { Texto } from './estilo';
import database from '../../database'

function Chamada() {
  const fraseChamada = database.ptbr.principal.fraseChamada;
  console.log(database.ptbr.principal)
  return (
    <Texto>
      {fraseChamada}
      
    </Texto>
  );
}

export default Chamada;
