import React, { useState } from 'react';
import { Conteiner, MenuIndice, ItemMenuIndice, Artigo } from './estilo';
import { Marcador } from '../../imagens/icones'; 
import { useGlobal } from '../../AcessoGlobal';

function Artigos() {
  const [indice, setIndice] = useState(0);
  const [global, mudarGlobal] = useGlobal();
  const { itens } = global.db.index.ensaios;

  return (
    <Conteiner id="ensaios">
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
    </Conteiner>
  );
}

export default Artigos;
