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
  const [abrirAudiodescricao, setAbrirAudiodescricao] = useState(false);
  const [abrirCreditos, setAbrirCreditos] = useState(false);
  const [abrirDownload, setAbrirDownload] = useState(false);
  const [abrirLivro, setAbrirLivro] = useState(false);

  const toggle = (item) => {
    eval(`setAbrir${item}(!abrir${item})`);
    if (item !== 'Livro' && abrirLivro) setAbrirLivro(false);
    if (item !== 'Creditos' && abrirCreditos) setAbrirCreditos(false);
    if (item !== 'Audiodesc' && abrirAudiodescricao) setAbrirAudiodescricao(false);
    if (item !== 'Download' && abrirDownload) setAbrirDownload(false);
  }
  
  return (
    <Conteiner>
      <p>Entre os anos de 2015 e 2020, a Galeria Periscópio ocupou uma casa tombada na Av. Álvares Cabral no 534, em Belo Horizonte, onde realizou 28 exposições. Este livro configura um arquivo das atividades que ocorreram nesse período.</p>

      <Botao pos={{ x: 'esquerda', y: 'superior' }} fClick={(e) => {e.preventDefault(); toggle('Download');}}>
        Download Livro
      </Botao>

      <Botao pos={{x: 'esquerda', y: 'inferior'}} >
        Galeria Periscópio
      </Botao>

      <NavCentral>
        <Botao fClick={(e) => { e.preventDefault(); toggle('Livro');}}>
          Livro
        </Botao> 
        <Botao>
          Artigos
        </Botao> 
        <Botao fClick={(e) => { e.preventDefault(); toggle('Creditos');}}>
          Info
        </Botao>
      </NavCentral>

      <Botao pos={{x: 'direita', y: 'inferior'}} >
        EN/PT
      </Botao>

      <Botao pos={{x: 'direita', y: 'superior'}} fClick={(e) => { e.preventDefault(); toggle('Audiodescricao');}}>
        Audiodescrição
      </Botao>

      {abrirLivro && <PopUpLivro fClick={() => {toggle('Livro')}} />}
      {abrirCreditos && <PopUpCreditos />}
      {abrirAudiodescricao && <PopUpAudiodescricao />}
      {abrirDownload && <PopUpDownload />}
     
    </Conteiner>
  );
}

export default Menu;
