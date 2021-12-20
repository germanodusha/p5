import React from 'react';
import {
  Menu,
  Capa,
  Chamada,
  Livro,
  Indice,
  Artigos
} from './secoes';
import {
  PopUpLivro,
  PopUpCreditos,
  PopUpAudiodescricao,
  PopUpDownload
} from './popups'
import EstiloGlobal from './EstiloGlobal';

function App() {
  return (
    <>
      <EstiloGlobal />

      <Menu />
      <Capa />
      <Chamada />
      <Livro />
      <Indice />
      <Artigos />

      <PopUpLivro />
      <PopUpCreditos />
      <PopUpAudiodescricao />
      <PopUpDownload />
    </>
  );
}

export default App;
