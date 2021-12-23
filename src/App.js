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
import { AcessoPopUps } from './AcessoPopUps';
import HashLinkObserver from 'react-hash-link';

function App() {
  return (
    <>
      <EstiloGlobal />
      <HashLinkObserver smoothScroll={true} />
      <AcessoGlobal>
        <AcessoPopUps>

          <Menu />
          <Capa />
          <Chamada />
          <Livro />
          <Indice />
          <Artigos />
        </AcessoPopUps>
      </AcessoGlobal>
    </>
  );
}

export default App;
