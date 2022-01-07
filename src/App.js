import React, { useState, useEffect, lazy, Suspense } from 'react';
import EstiloGlobal from './EstiloGlobal';
import { useGlobal } from './AcessoGlobal';
import { AcessoPopUps } from './AcessoPopUps';
import HashLinkObserver from 'react-hash-link';
import { Menu, Capa } from './secoes'

const Artigos = lazy(() => import('./secoes/Artigos'));
const Logos = lazy(() => import('./secoes/Logos'));
const Chamada = lazy(() => import('./secoes/Chamada'));
const Livro = lazy(() => import('./secoes/Livro'));
const Indice = lazy(() => import('./secoes/Indice'));

function App() {
  const [global, mudarGlobal] = useGlobal();
  const [rolagemLivro, setRolagemLivro] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const livro = document.getElementById('livro')
      const posLivro = livro.offsetTop;
      const alturaLivro = livro.offsetHeight;

      /* 
        se a rolagem passar da metade do conteiner do livro,
        a variável global taBranco é verdadeira
      */
      if (window.scrollY > posLivro + (alturaLivro / 3)) {
        mudarGlobal({ taBranco: true });
      } else {
        mudarGlobal({ taBranco: false });
      }
      const posScroll = window.scrollY - posLivro;
      const rol = (100 * posScroll) / alturaLivro;
      setRolagemLivro(rol);

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
        <Suspense fallback={<></>}>
          <Chamada />
        </Suspense>
        <Suspense fallback={<></>}>
          <Livro rolagem={rolagemLivro} />
        </Suspense>
        <Suspense fallback={<></>}>
          <Indice />
        </Suspense>
        <Suspense fallback={<></>}>
          <Artigos />
        </Suspense>
        <Suspense fallback={<></>}>
          <Logos />
        </Suspense>
      </AcessoPopUps>
    </>
  );
}

export default App;
