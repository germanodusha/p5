import React from 'react';
import { Titulo, Livro, ConteinerCapa, TituloPrincipal, ConteinerLivro } from './estilo';
import Livro3D from '../../imagens/livro3D.png';
import { useGlobal } from '../../AcessoGlobal';
function Capa() {
  const [global, mudarGlobal] = useGlobal();
  const { titulo } = global.db.principal
  
  return (
    <ConteinerCapa>
    <Titulo temSpan={true}><span className="cabecalho">P5</span><span className="cabecalho">2015-2020</span></Titulo>
    <Titulo>{titulo}</Titulo>
    <ConteinerLivro>
      <Livro src={Livro3D} />
    </ConteinerLivro>
    <TituloPrincipal>Periscópio</TituloPrincipal>
    </ConteinerCapa>
  );
}

export default Capa;
