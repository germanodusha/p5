import React from 'react';
import { Foto, ConteinerFoto } from './estilo';
import FotoFundo from '../../imagens/placeholder.jpg'


function Livro() {
  
  return (
    <ConteinerFoto>
      <Foto src={FotoFundo}/>
    </ConteinerFoto>
  );
}

export default Livro;
