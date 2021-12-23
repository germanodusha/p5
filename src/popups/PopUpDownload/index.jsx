import React from 'react';
import { Conteiner, Content, Download, Text } from "./estilo";
import database from '../../database'

function PopUpDownload() {
  
  return (
    <Conteiner style={{position: 'fixed', top: '40vh', left:'12vw',zIndex:1000}}>
      <Content className="centerColumn">
        <Text>{database.ptbr.popups.download}</Text>
        <div>
          <Download>{database.ptbr.botoes.pdf}</Download>
          <Download>{database.ptbr.botoes.epub}</Download>
        </div>
      </Content>
    </Conteiner>

  );
}

export default PopUpDownload;
