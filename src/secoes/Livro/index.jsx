import React from 'react';
import { Foto, ConteinerFoto } from './estilo';
import { Foto1 } from '../../imagens/livro'
import { usePopUps } from '../../AcessoPopUps';

  function Livro() {
  const [popUps, setPopUps] = usePopUps();
  
  return (
    <ConteinerFoto id="livro">
      <Foto src={Foto1} onClick={
      () => {
        console.log(popUps);
        setPopUps({ livro: true });
      }} />
    </ConteinerFoto>
  );
}

export default Livro;
