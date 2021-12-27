import React from 'react';
import { Texto, Conteiner } from './estilo';
import { useGlobal } from '../../AcessoGlobal';

function Chamada() {
  const [global, mudarGlobal] = useGlobal();
  const { fraseChamada } = global.db.principal;
  
  return (
    <Conteiner>
    <Texto>
      {fraseChamada}
    </Texto>
    </Conteiner>
  );
}

export default Chamada;
