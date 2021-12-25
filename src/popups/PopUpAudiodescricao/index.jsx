import React from "react";
import { Conteiner, Content, Download, Text, Fechar } from "../PopUpDownload/estilo.js";
import fechar from "../../imagens/icones/x_preto.svg"

import { useGlobal } from '../../AcessoGlobal';

function PopUpAudiodescricao({fClick}) {
  const [global, mudarGlobal] = useGlobal();
  const { popups, botoes } = global.db; 

  return (
    <Conteiner
      style={{ position: "fixed", top: "40vh", left: "12vw", zIndex: 1000 }}
    >
      <Content className="centerColumn">
        <Text>
          {popups.audioDescricao}
        </Text>

        <Download style={{marginTop:'-8%', marginBottom:'6%'}}>{botoes.download}</Download>
        <Fechar onClick={ fClick }><img src={fechar} alt="fechar" /></Fechar>  
        
      </Content>
    </Conteiner>
  );
}

export default PopUpAudiodescricao;
