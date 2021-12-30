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
            <Livro src={Livro3D} />
          </ConteinerLivro>
          <Titulo className="centerColumn" temSpan={true}>
            <span className="cabecalho">P5</span>
            <span className="cabecalho">2015-2020</span>
          </Titulo>
          <Titulo className="titulo-principal">{titulo} Periscópio</Titulo>
        </div>
        </ConteinerCapa>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <ConteinerCapa>
          <Titulo temSpan={true}>
          <span id="span1" className="cabecalho" >P5</span>
          <span id="span2" className="cabecalho" >2015-2020</span>
          </Titulo>
        <div className="centerRow">
          <TituloArquivo className="line typing-animation">{titulo}</TituloArquivo>
        </div>
        <ConteinerLivro>
          <Livro src={Livro3D} />
        </ConteinerLivro>
        <div className="centerRow">
          <TituloPrincipal className="line typing-animation" >Periscópio</TituloPrincipal>
        </div>
        </ConteinerCapa>
    </MediaQuery>
    </>
    
  );
}

export default Capa;
