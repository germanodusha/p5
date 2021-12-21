import React from 'react';
import { Epigrafe, Ensaios, Exposicoes, Conteiner } from './estilo';
import database from '../../database'

function Indice() {
const ensaio = database.ptbr.index.artigo;
const exposicoes = database.ptbr.index.ensaios.itens;

console.log(exposicoes)
  return (
    <Conteiner>
    <Epigrafe>{database.ptbr.principal.epigrafe}
</Epigrafe>
<Ensaios>
  {ensaio.ampliandoVisao}
  {ensaio.transcreverMundo}
  {ensaio.artePensamento}
  {ensaio.apenasComeco}
</Ensaios>
<Exposicoes>
{exposicoes.map((exposicao) => ( <><p>{exposicao.titulo}</p>
<p>{exposicao.autoria}</p></>
))}



</Exposicoes>
</Conteiner>
  );
}

export default Indice;
