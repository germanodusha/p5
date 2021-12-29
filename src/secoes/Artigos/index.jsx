import React, { useState } from 'react';
import { Conteiner, MenuIndice, ItemMenuIndice, Artigo, MenuIndiceMobile, ItemMenuIndiceMobile, ArtigoMobile } from './estilo';
import { Marcador } from '../../imagens/icones'; 
import { useGlobal } from '../../AcessoGlobal';
import MediaQuery from 'react-responsive';

function Artigos() {
  const [indice, setIndice] = useState(0);
  const [global, mudarGlobal] = useGlobal();
  const { itens } = global.db.index.ensaios;

  return (
    <Conteiner id="ensaios">
      <MediaQuery maxWidth={799}>
        <div>
        <MenuIndiceMobile>
          {itens.map((artigo, i) => (
            <ItemMenuIndiceMobile ativo={indice === i} onClick={
              () => {
                setIndice(i);
                window.location.replace("#ensaios");
              }}
              key={artigo.titulo.replaceAll(" ", "-").slice(-10)}
            >
            <p className="underline">{artigo.titulo}</p>
              <p>{artigo.autoria}</p>
            <ArtigoMobile dangerouslySetInnerHTML={{__html:itens[indice].texto}} />
            </ItemMenuIndiceMobile>))}
          </MenuIndiceMobile>
          </div>
      </MediaQuery>



      <MediaQuery minWidth={800}>
      <div>
      <MenuIndice>
        {itens.map((artigo, i) => (
          <ItemMenuIndice ativo={indice === i} onClick={
            () => {
              setIndice(i);
              window.location.replace("#ensaios");
            }}
            key={artigo.titulo.replaceAll(" ", "-").slice(-10)}
          >
          <p className="underline">{artigo.titulo}</p>
            <p>{artigo.autoria}</p>
            <div className={`marcador ${i === 3 && 'semPadding'}`}>
            <img src={Marcador} alt="" />
            </div>
          </ItemMenuIndice>))}
        </MenuIndice>
        </div>
      <Artigo dangerouslySetInnerHTML={{__html:itens[indice].texto}} />
      </MediaQuery>
    </Conteiner>
  );
}

export default Artigos;
