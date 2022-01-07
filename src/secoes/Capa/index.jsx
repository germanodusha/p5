import React from "react";
import MediaQuery from "react-responsive";

import {
  Titulo,
  TituloArquivo,
  Livro,
  ConteinerCapa,
  TituloPrincipal,
  ConteinerLivro,
} from "./estilo";
import Livro3D from "../../imagens/livro3D.png";
import { useGlobal } from "../../AcessoGlobal";
function Capa() {
  const [global] = useGlobal();
  const { titulo } = global.db.principal;

  return (
    <>
      <MediaQuery maxWidth={799}>
        <ConteinerCapa className="centerColumn">
        <div className="centerColumn" style={{flexWrap:'nowrap'}}>
          <ConteinerLivro>
            <Livro src={Livro3D} width="641.9" height="1038.9" />
          </ConteinerLivro>
          <Titulo className="centerColumn fadein" temSpan={true}>
            <span className="cabecalho">P5</span>
            <span className="cabecalho">2015-2020</span>
          </Titulo>
          <Titulo className="titulo-principal fadein">{titulo} Periscópio</Titulo>
        </div>
        </ConteinerCapa>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <ConteinerCapa>
          <Titulo temSpan={true} className="fadein">
          <span id="span1" className="cabecalho" >P5</span>
          <span id="span2" className="cabecalho" >2015-2020</span>
          </Titulo>
        <div className="centerRow">
          <TituloArquivo className="fadein">{titulo}</TituloArquivo>
        </div>
        <ConteinerLivro>
          <Livro src={Livro3D} />
        </ConteinerLivro>
        <div className="centerRow">
          <TituloPrincipal className="fadein">Periscópio</TituloPrincipal>
        </div>
        </ConteinerCapa>
    </MediaQuery>
    </>
    
  );
}

export default Capa;
