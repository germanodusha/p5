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
import AcessoGlobal from './AcessoGlobal';

function App() {
  return (
    <>
      <EstiloGlobal />
      <AcessoGlobal>
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
