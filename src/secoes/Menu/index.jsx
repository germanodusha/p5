import React, { useState } from 'react';
import Botao from '../../componentes/Botao';
import { Conteiner, NavCentral } from './estilo';
import {
  PopUpLivro,
  PopUpCreditos,
  PopUpAudiodescricao,
  PopUpDownload
} from '../../popups';
import database from '../../database';

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
      <p>{database.ptbr.principal.fraseChamada}</p>

      <Botao pos={{ x: 'esquerda', y: 'superior' }} fClick={(e) => {e.preventDefault(); toggle('Download');}}>
        {database.ptbr.index.botoes.downloadLivro}
      </Botao>

      <Botao pos={{x: 'esquerda', y: 'inferior'}} >
        {database.ptbr.index.botoes.galeriaPeriscopio}
      </Botao>

      <NavCentral>
        <Botao fClick={(e) => { e.preventDefault(); toggle('Livro');}}>
          {database.ptbr.index.botoes.livro}
        </Botao> 
        <Botao>
          {database.ptbr.index.botoes.artigos}
        </Botao> 
        <Botao fClick={(e) => { e.preventDefault(); toggle('Creditos');}}>
          {database.ptbr.index.botoes.info}
        </Botao>
      </NavCentral>

      <Botao pos={{x: 'direita', y: 'inferior'}} >
        EN/PT
      </Botao>

      <Botao pos={{x: 'direita', y: 'superior'}} fClick={(e) => { e.preventDefault(); toggle('Audiodescricao');}}>
        {database.ptbr.index.botoes.audioDescricao}
      </Botao>

      {abrirLivro && <PopUpLivro fClick={() => {toggle('Livro')}} />}
      {abrirCreditos && <PopUpCreditos fClick={() => {toggle('Creditos')}}/> }
      {abrirAudiodescricao && <PopUpAudiodescricao />}
      {abrirDownload && <PopUpDownload />}
     
    </Conteiner>
  );
}

export default Menu;
