import React from 'react';
import { Titulo, Livro, ConteinerCapa } from './estilo';
import Livro3D from '../../imagens/livro3D.png';
import database from '../../database';
function Capa() {
  
  return (
    <ConteinerCapa>
    <Titulo temSpan={true}><span>P5</span><span>2015-2020</span></Titulo>
    <Titulo>{database.ptbr.principal.titulo}</Titulo>
    <Livro src={Livro3D} />
    <Titulo>Periscópio</Titulo>
    </ConteinerCapa>
  );
}

export default Capa;
