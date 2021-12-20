import React from 'react';
import Botao from '../../componentes/Botao';

function Menu() {
  
  return (
    <>
    <Botao>
      Download Livro
    </Botao>

    <Botao>
      Galeria Periscópio
    </Botao>

    <div>
      <Botao>
        Livro
      </Botao> 
      <Botao>
        Artigos
      </Botao> 
      <Botao>
        Info
      </Botao>
    </div>
    <Botao>
      EN/PT
    </Botao>

    <Botao>
      Audiodescrição
    </Botao>
    </>
  );
}

export default Menu;
