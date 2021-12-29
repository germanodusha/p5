import React, { useState } from 'react';
import { Foto, ConteinerFoto, BotaoFechar, ConteinerDireita, ConteinerEsquerda } from './estilo';
import { SetaEsq, SetaDir, XPreto, SetaEsqTransp, SetaDirTransp, XTransp } from '../../imagens/icones';
import { Foto1, Foto2,Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10,Foto11,Foto12,Foto13,Foto14,Foto15,Foto16,Foto17,Foto18,Foto19,Foto20,Foto21,Foto22,Foto23,Foto0 } from '../../imagens/livro';
import { useSwipeable } from 'react-swipeable';

function PopUpLivro({ fClick }) {

  const [indice, setIndice] = useState(0);
  const fotos = [
    Foto0, Foto1, Foto2,Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10,Foto11,Foto12,Foto13,Foto14,Foto15,Foto16,Foto17,Foto18,Foto19,Foto20,Foto21,Foto22,Foto23,];

  const mudarFoto = (dir) => {
    let novoIndice = indice + dir;
    if (novoIndice <= 0) novoIndice = fotos.length - 1;
    if (novoIndice > fotos.length - 1) novoIndice = 0;
    setIndice(novoIndice)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => mudarFoto(-1),
    onSwipedRight: () => mudarFoto(1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <ConteinerFoto {...handlers}>
      <ConteinerEsquerda>
      <img className="seta esquerda" src={SetaEsq} alt="foto anterior" onClick={() => {
        mudarFoto(-1);
      }} />
      <img className="seta esquerda hover" src={SetaEsqTransp} alt="foto anterior" onClick={() => {
        mudarFoto(-1);
      }} />
      </ConteinerEsquerda>
      <ConteinerDireita>
      <img className="seta direita" src={SetaDir} alt="próxima foto" onClick={() => {
        mudarFoto(1);
      }} />
      <img className="seta direita hover" src={SetaDirTransp} alt="próxima foto" onClick={() => {
        mudarFoto(1);
      }} />
      </ConteinerDireita>
      <Foto src={fotos[indice]} />
      <BotaoFechar onClick={() => { fClick(); console.log('foi aqui') }} >
        <img src={XPreto} className="x preto" alt="fechar"/>
        <img src={XTransp}className="x transp" alt="fechar"/>
        </BotaoFechar>
    </ConteinerFoto>
  );
}

export default PopUpLivro;
