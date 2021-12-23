import React, { useState } from 'react';
import { Conteiner, MenuIndice, ItemMenuIndice, Artigo } from './estilo';
import database from '../../database';
import { Marcador } from '../../imagens/icones'; 

function Artigos() {
  const [indice, setIndice] = useState(0);
  const artigos = database.ptbr.index.ensaios.itens;
  return (

    <Conteiner id="ensaios">
      <div>
      <MenuIndice>
        {artigos.map((artigo, i) => (
          <ItemMenuIndice ativo={indice === i} onClick={()=>{setIndice(i)}} key={artigo.titulo.replaceAll(" ","-").slice(-10)}>
          <p className="underline">{artigo.titulo}</p>
            <p>{artigo.autoria}</p>
            <div className="marcador">
            <img src={Marcador} alt="" />
            </div>
          </ItemMenuIndice>))}
        </MenuIndice>
        </div>
      <Artigo dangerouslySetInnerHTML={{__html:artigos[indice].texto}}>
      </Artigo>
    </Conteiner>
  );
}

export default Artigos;
