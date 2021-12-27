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
  const [rolagemLivro, setRolagemLivro] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const livro = document.getElementById('livro')
      const posLivro = livro.offsetTop;
      const alturaLivro = livro.offsetHeight;

      /* 
        se a roalagem passar da metade do conteiner do livro,
        a variável global taBranco é verdadeira
      */
      if ((window.scrollY + alturaLivro / 2) > posLivro) {
        mudarGlobal({ taBranco: true });
      } else {
        mudarGlobal({ taBranco: false });
      }

      if (global.taBranco) {
        const posScroll = window.scrollY - posLivro;
        const rol = (100 * posScroll) / alturaLivro;
        setRolagemLivro(rol);
      }
    });

  }, [])

  useEffect(() => console.log('taBranco: ' + global.taBranco), [global.taBranco]);
  useEffect(() => console.log('rolagem: ' + rolagemLivro), [rolagemLivro])

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
