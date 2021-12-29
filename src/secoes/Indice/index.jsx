import React from 'react';
import { Epigrafe, SecaoIndice, ItemIndice, Conteiner, EpigrafeMobile, SecaoIndiceMobile, ItemIndiceMobile } from './estilo';
import { useGlobal } from '../../AcessoGlobal';
import MediaQuery from 'react-responsive';

function Indice() {
  const [global, mudarGlobal] = useGlobal();
  const { principal } = global.db;
  const { ensaios, exposicoes, titulo } = global.db.index;
  
  return (
    <Conteiner>
      <MediaQuery maxWidth={799}>
        <EpigrafeMobile dangerouslySetInnerHTML={{__html:principal.epigrafe}}>
        </EpigrafeMobile>
        <SecaoIndiceMobile>
        <div>
          {/* {titulo} */}
        </div>
        <div></div>
      </SecaoIndiceMobile>
      <SecaoIndiceMobile>
        <div>
        {exposicoes.titulo}
        </div>
        <div>
          {exposicoes.itens.map((exposicao) => (
            <ItemIndiceMobile key={exposicao.titulo.replace(' ', '-')}>
              <div><p className="underline">{exposicao.titulo}</p>
              <p>{exposicao.autoria}</p></div>
            </ItemIndiceMobile>
        ))}
          
          </div>
      </SecaoIndiceMobile>

      </MediaQuery>



      <MediaQuery minWidth={800}>
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
      </MediaQuery>
    </Conteiner>
  );
}

export default Indice;
