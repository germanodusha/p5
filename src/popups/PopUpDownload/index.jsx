import React,{useState} from 'react';

import { Conteiner, Content, Download, Text, Fechar } from "./estilo";
import fechar from "../../imagens/icones/x_preto.svg"
  import { useGlobal } from '../../AcessoGlobal';

function PopUpDownload({fClick}) {
  const [global, mudarGlobal] = useGlobal();
  const { popups, botoes } = global.db;

  return (
    <Conteiner style={{position: 'fixed', top: '40vh', left:'12vw',zIndex:1000}}>
      <Content className="centerColumn">
        <Text>{popups.download}</Text>
        <div>
          <Download>{botoes.pdf}</Download>  
          <Fechar onClick={ fClick }><img src={fechar} alt="fechar" /></Fechar>    
        </div>
      </Content>
    </Conteiner>

  );
}

export default PopUpDownload;
