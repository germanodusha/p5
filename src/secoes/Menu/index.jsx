import React from 'react';
import Botao from '../../componentes/Botao';
import { Conteiner, NavCentral } from './estilo';

function Menu() {
  
  return (
    <Conteiner>
    <Botao pos={{x: 'esquerda', y: 'superior'}}>
      Download Livro
    </Botao>

    <Botao pos={{x: 'esquerda', y: 'inferior'}}>
      Galeria Periscópio
    </Botao>

    <NavCentral>
      <Botao>
        Livro
      </Botao> 
      <Botao>
        Artigos
      </Botao> 
      <Botao>
        Info
      </Botao>
    </NavCentral>

    <Botao pos={{x: 'direita', y: 'inferior'}}>
      EN/PT
    </Botao>

    <Botao pos={{x: 'direita', y: 'superior'}}>
      Audiodescrição
    </Botao>
    </Conteiner>
  );
}

export default Menu;
