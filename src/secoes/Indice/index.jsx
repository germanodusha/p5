import React from 'react';
import { Epigrafe, SecaoIndice, ItemIndice, Conteiner } from './estilo';
import { useGlobal } from '../../AcessoGlobal'

function Indice() {
  const [global, mudarGlobal] = useGlobal();
  const { principal } = global.db;
  const { ensaios, exposicoes, titulo } = global.db.index;
  
  return (
    <Conteiner>
      <Epigrafe dangerouslySetInnerHTML={{__html:principal.epigrafe}}>
      </Epigrafe>
      <SecaoIndice>
        <div>
          {titulo}
        </div>
        <div></div>
      </SecaoIndice>
      <SecaoIndice>
        <div>
          {ensaios.titulo}
        </div>
        <div>
          {ensaios.itens.map((ensaio) => (
            <ItemIndice key={ensaio.titulo.replace(' ','-')}>
              <p className="underline">{ensaio.titulo}</p>
              <p>{ensaio.autoria}</p>
            </ItemIndice>
        ))}
        </div>
      </SecaoIndice>
      <SecaoIndice>
        <div>
        {exposicoes.titulo}
        </div>
        <div>
          {exposicoes.itens.map((exposicao) => (
            <ItemIndice key={exposicao.titulo.replace(' ', '-')}>
              <p className="underline">{exposicao.titulo}</p>
              <p>{exposicao.autoria}</p>
            </ItemIndice>
        ))}
          
          </div>
      </SecaoIndice>
    </Conteiner>
  );
}

export default Indice;
