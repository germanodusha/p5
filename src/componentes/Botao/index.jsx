import React from 'react';
import { EstiloBotao } from './estilo';

function Botao({ pos, fClick, children }) {
  
  return (
      <EstiloBotao pos={pos} onClick={fClick}>
        {children}
      </EstiloBotao>
  );
}

export default Botao;