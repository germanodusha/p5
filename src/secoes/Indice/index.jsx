import React from 'react';
import { Epigrafe, Ensaios, Exposicoes, Conteiner } from './estilo';
import database from '../../database'

function Indice() {
const ensaios = database.ptbr.index.ensaios.itens;
const exposicoes = database.ptbr.index.exposicoes.itens;
  return (
    <Conteiner>
    <Epigrafe>{database.ptbr.principal.epigrafe}
</Epigrafe>
<Ensaios>
{ensaios.map((ensaio) => ( <><p>{ensaio.titulo}</p>
<p>{ensaio.autoria}</p></>
))}

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
