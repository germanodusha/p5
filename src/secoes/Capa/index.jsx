import React from "react";
import MediaQuery from "react-responsive";

import {
  Titulo,
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
          <Titulo>{titulo} Periscópio</Titulo>
        </div>
        </ConteinerCapa>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <ConteinerCapa>
          <Titulo temSpan={true}>
          <span className="cabecalho">P5</span>
          <span className="cabecalho">2015-2020</span>
        </Titulo>
        <Titulo>{titulo}</Titulo>
        <ConteinerLivro>
          <Livro src={Livro3D} />
        </ConteinerLivro>
        <TituloPrincipal>Periscópio</TituloPrincipal>
        </ConteinerCapa>
    </MediaQuery>
    </>
    
  );
}

export default Capa;
