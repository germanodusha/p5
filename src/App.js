import React, { useState, useEffect } from 'react';
import {
  Menu,
  Capa,
  Chamada,
  Livro,
  Indice,
  Artigos
} from './secoes';

import EstiloGlobal from './EstiloGlobal';
import { useGlobal } from './AcessoGlobal';
import { AcessoPopUps } from './AcessoPopUps';
import HashLinkObserver from 'react-hash-link';

function App() {
  const [global, mudarGlobal] = useGlobal();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const posLivro = document.getElementById('livro').offsetTop;
      if ((window.scrollY + window.innerHeight / 2) > posLivro) {
        mudarGlobal({ taBranco: true });
      } else {
        mudarGlobal({ taBranco: false });
      }
    });

  }, [])

  useEffect(() => console.log('taBranco: ' + global.taBranco), [global.taBranco])

  return (
    <>
      <EstiloGlobal />
      <HashLinkObserver smoothScroll={true} />
      <AcessoPopUps>
        <Menu />
        <Capa />
        <Chamada />
        <Livro />
        <Indice />
        <Artigos />
      </AcessoPopUps>
    </>
  );
}

export default App;
