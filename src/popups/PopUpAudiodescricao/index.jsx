import React from "react";
import { Conteiner, Content, Download, Text } from "../PopUpDownload/estilo.js";
import database from '../../database'
function PopUpAudiodescricao() {
  return (
    <Conteiner
      style={{ position: "fixed", top: "40vh", left: "12vw", zIndex: 1000 }}
    >
      <Content className="centerColumn">
        <Text>
          {database.ptbr.index.popups.audioDescricao}
        </Text>

        <Download style={{marginTop:'-8%', marginBottom:'6%'}}>{database.ptbr.index.botoes.download}</Download>
      </Content>
    </Conteiner>
  );
}

export default PopUpAudiodescricao;
