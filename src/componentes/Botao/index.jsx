import React from 'react';
import { EstiloBotao } from './estilo';


function Botao({pos, children}) {
  
  return (
    <EstiloBotao pos={pos}>
      {children}
    </EstiloBotao>
  );
}

export default Botao;