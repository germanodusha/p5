import React from 'react';

import { Conteiner, Content, Download, Text, Fechar } from "./estilo";
import fechar from "../../imagens/icones/x_preto.svg"
import database from '../../database'

function PopUpDownload({fClick}) {
  
  return (
    <Conteiner style={{position: 'fixed', top: '40vh', left:'12vw',zIndex:1000}}>
      <Content className="centerColumn">
        <Text>{database.ptbr.popups.download}</Text>
        <div>
<<<<<<< HEAD
          <Download>{database.ptbr.index.botoes.pdf}</Download>  
          <Fechar onClick={ fClick }><img src={fechar} alt="fechar" /></Fechar>    
=======
          <Download>{database.ptbr.botoes.pdf}</Download>
          <Download>{database.ptbr.botoes.epub}</Download>
>>>>>>> cb7417baa2c4f7947f1d5f44cfd6a4f1760705fe
        </div>
      </Content>
    </Conteiner>

  );
}

export default PopUpDownload;
