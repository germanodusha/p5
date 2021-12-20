import React from 'react';
import { Foto, ConteinerFoto } from './estilo';
import FotoFundo from '../../imagens/placeholder.jpg'


function Livro() {
  
  return (
    <ConteinerFoto>
      <p>Entre os anos de 2015 e 2020, a Galeria Periscópio ocupou uma casa tombada na Av. Álvares Cabral no 534, em Belo Horizonte, onde realizou 28 exposições. Este livro configura um arquivo das atividades que ocorreram nesse período.</p>
      <Foto src={FotoFundo}/>
    </ConteinerFoto>
  );
}

export default Livro;
