import React, { useState } from 'react';
import Botao from '../../componentes/Botao';
import { Conteiner, NavCentral } from './estilo';
import {
  PopUpLivro,
  PopUpCreditos,
  PopUpAudiodescricao,
  PopUpDownload
} from '../../popups';

function Menu() {
  const [abrirAudiodesc, setAbrirAudiodesc] = useState(false);
  const [abrirCreditos, setAbrirCreditos] = useState(false);
  const [abrirDownload, setAbrirDownload] = useState(false);
  const [abrirLivro, setAbrirLivro] = useState(false);
  
  return (
    <Conteiner>
      <p>Entre os anos de 2015 e 2020, a Galeria Periscópio ocupou uma casa tombada na Av. Álvares Cabral no 534, em Belo Horizonte, onde realizou 28 exposições. Este livro configura um arquivo das atividades que ocorreram nesse período.</p>

      <Botao pos={{x: 'esquerda', y: 'superior'}}>
        Download Livro
      </Botao>

      <Botao pos={{x: 'esquerda', y: 'inferior'}}>
        Galeria Periscópio
      </Botao>

      <NavCentral>
        <Botao>
          Livro
        </Botao> 
        <Botao>
          Artigos
        </Botao> 
        <Botao>
          Info
        </Botao>
      </NavCentral>

      <Botao pos={{x: 'direita', y: 'inferior'}}>
        EN/PT
      </Botao>

      <Botao pos={{x: 'direita', y: 'superior'}}>
        Audiodescrição
      </Botao>

      <PopUpLivro />
      <PopUpCreditos />
      <PopUpAudiodescricao />
      <PopUpDownload />  
    </Conteiner>
  );
}

export default Menu;
