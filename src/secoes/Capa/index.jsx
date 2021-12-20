import React from 'react';
import { Titulo, Livro } from './estilo';
import Livro3D from '../../imagens/livro3D.png';

function Capa() {
  
  return (
    <>
    <Titulo temSpan={true}><span>P5</span><span>2015-2020</span></Titulo>
    <Titulo>Arquivo</Titulo>
    <Livro src={Livro3D} />
    <Titulo>Periscópio</Titulo>
    </>
  );
}

export default Capa;
