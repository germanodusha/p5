import React from 'react';
import {
  Menu,
  Capa,
  Chamada,
  Livro,
  Indice,
  Artigos
} from './secoes';

import EstiloGlobal from './EstiloGlobal';
import { AcessoGlobal } from './AcessoGlobal';
import HashLinkObserver from 'react-hash-link';

function App() {
  return (
    <>
      <EstiloGlobal />
      <AcessoGlobal>
        <HashLinkObserver smoothScroll={true} />
        <Menu />
        <Capa />
        <Chamada />
        <Livro />
        <Indice />
        <Artigos />
      </AcessoGlobal>
    </>
  );
}

export default App;
