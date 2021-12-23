import React, { useState } from 'react';
import { Foto, ConteinerFoto, BotaoFechar } from './estilo';
import { SetaEsq, SetaDir, XPreto } from '../../imagens/icones';
import { Foto1, Foto2,Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10,Foto11,Foto12,Foto13,Foto14,Foto15,Foto16,Foto17,Foto18,Foto19,Foto20,Foto21,Foto22,Foto23,Foto24 } from '../../imagens/livro';

function PopUpLivro({ fClick }) {

  const [indice, setIndice] = useState(0);
  const fotos = [
    Foto1, Foto2,Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10,Foto11,Foto12,Foto13,Foto14,Foto15,Foto16,Foto17,Foto18,Foto19,Foto20,Foto21,Foto22,Foto23,Foto24];

  const mudarFoto = (dir) => {
    let novoIndice = indice + dir;
    if (novoIndice <= 0) novoIndice = fotos.length - 1;
    if (novoIndice > fotos.length - 1) novoIndice = 0;
    setIndice(novoIndice)
  }

  return (
    <ConteinerFoto>
      <img className="seta esquerda" src={SetaEsq} alt="foto anterior" onClick={() => {
        mudarFoto(-1);
      }} />
      <img className="seta direita" src={SetaDir} alt="próxima foto" onClick={() => {
        mudarFoto(1);
      }} />
      <Foto src={fotos[indice]} />
      <BotaoFechar src={XPreto} onClick={fClick} />
    </ConteinerFoto>
  );
}

export default PopUpLivro;
