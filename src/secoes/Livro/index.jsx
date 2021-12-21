import React from 'react';
import { Foto, ConteinerFoto } from './estilo';
import { Foto1 } from '../../imagens/livro'
import { AcessoPopUps, usePopUps } from '../../AcessoPopUps';

  function Livro({ fClick }) {
  const [abrirPopUps, setAbrirPopUps] = usePopUps();
  
  return (
    <ConteinerFoto>
      <Foto src={Foto1} onClick={fClick}/>
    </ConteinerFoto>
  );
}

export default Livro;
