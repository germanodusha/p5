import React from 'react';
import { Epigrafe, SecaoIndice, ItemIndice, Conteiner, EpigrafeMobile, SecaoIndiceMobile, ItemIndiceMobile } from './estilo';
import { useGlobal } from '../../AcessoGlobal';
import MediaQuery from 'react-responsive';

function Indice() {
  const [global] = useGlobal();
  const { principal } = global.db;
  const { ensaios, exposicoes, titulo, index } = global.db.index;
  
  return (
    <Conteiner>
      <MediaQuery maxWidth={799}>
        <EpigrafeMobile dangerouslySetInnerHTML={{__html:principal.epigrafe}}>
        </EpigrafeMobile>
        <SecaoIndiceMobile>
          <div className="titulo">{index}</div>
          <div className="titulo">
            {titulo}
          </div>
          <div></div>
        </SecaoIndiceMobile>
        <SecaoIndiceMobile>
        <div className="titulo">
          {ensaios.titulo}
        </div>
        <div>
          {ensaios.itens.map((ensaio) => (
            <ItemIndiceMobile key={ensaio.titulo.replace(' ','-')}>
              <div><p className="underline">{ensaio.titulo}</p>
              <p>{ensaio.autoria}</p></div>
            </ItemIndiceMobile>
        ))}
        </div>
      </SecaoIndiceMobile>
      <SecaoIndiceMobile>
        <div className="titulo exposicoes">
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
          <div className="titulos-index">
            <p>{index}</p>
          <p>{titulo}</p>
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
