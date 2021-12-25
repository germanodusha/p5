import React from 'react';
import { Texto } from './estilo';
import { useGlobal } from '../../AcessoGlobal';

function Chamada() {
  const [global, mudarGlobal] = useGlobal();
  const { fraseChamada } = global.db.principal;
  
  return (
    <Texto>
      {fraseChamada}
    </Texto>
  );
}

export default Chamada;
