import React from 'react';
import { EstiloBotao } from './estilo';
import { useGlobal } from '../../AcessoGlobal';

function Botao({ pos, fClick, children }) {
  const [global] = useGlobal();

  return (
      <EstiloBotao pos={pos} onClick={fClick} taBranco={global.taBranco}>
        {children}
      </EstiloBotao>
  );
}

export default Botao;