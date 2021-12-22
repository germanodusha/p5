import React from 'react';
import {  } from './estilo';
import database from '../../database'

function Artigos() {
  const artigos = database.ptbr.artigos;
  return (
    <>
    {artigos.map((artigo) =>(<>{artigo}</>))}
    </>
  );
}

export default Artigos;
