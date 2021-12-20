import React from 'react';
import { EstiloBotao } from './estilo';


function Botao({children}) {
  
  return (
    <EstiloBotao>
      {children}
    </EstiloBotao>
  );
}

export default Botao;