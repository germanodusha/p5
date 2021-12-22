import React from 'react';
import { Epigrafe, SecaoIndice, ItemIndice, Conteiner } from './estilo';
import database from '../../database'

function Indice() {
const ensaios = database.ptbr.index.ensaios.itens;
  const exposicoes = database.ptbr.index.exposicoes.itens;
  
  return (
    <Conteiner>
      <Epigrafe dangerouslySetInnerHTML={{__html:database.ptbr.principal.epigrafe}}>
      </Epigrafe>
      <SecaoIndice>
        <div>
          Sobre a Periscópio
        </div>
        <div></div>
      </SecaoIndice>
      <SecaoIndice>
        <div>
        Ensaios
        </div>
        <div>
          {ensaios.map((ensaio) => (
            <ItemIndice key={ensaio.titulo.replace(' ','-')}>
              <p class="underline">{ensaio.titulo}</p>
              <p>{ensaio.autoria}</p>
            </ItemIndice>
        ))}
        </div>
      </SecaoIndice>
      <SecaoIndice>
        <div>
        Exposições
        </div>
        <div>
          {exposicoes.map((exposicao) => (
            <ItemIndice key={exposicao.titulo.replace(' ', '-')}>
              <p class="underline">{exposicao.titulo}</p>
              <p>{exposicao.autoria}</p>
            </ItemIndice>
        ))}
          
          </div>
      </SecaoIndice>
    </Conteiner>
  );
}

export default Indice;
