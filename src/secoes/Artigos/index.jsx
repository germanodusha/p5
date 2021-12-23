import React from 'react';
import {  } from './estilo';
import database from '../../database'

function Artigos() {
  const artigos = database.ptbr.index.ensaios.itens;
  return (
    <>
    {artigos.map((artigo) =>(<><h3>{artigo.titulo}</h3><h2>{artigo.autoria}</h2><article>{artigo.texto}</article></>))}
    </>
  );
}

export default Artigos;
