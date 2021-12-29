import React from "react";
import { Conteiner, Content, Download, Text, Fechar, ConteudoMobile,DownloadMobile,TextoMobile, FecharMobile } from "../PopUpDownload/estilo.js";
import fechar from "../../imagens/icones/x_preto.svg";
import MediaQuery from 'react-responsive';
import { useGlobal } from '../../AcessoGlobal';

import mp3 from '../../download/audiodesc.mp3';

function PopUpAudiodescricao({fClick}) {
  const [global, mudarGlobal] = useGlobal();
  const { popups, botoes } = global.db; 

  return (
    <Conteiner
      style={{ position: "fixed", top: "40vh", left: "12vw", zIndex: 1000 }}
    >
      <MediaQuery maxWidth={799}>
        <ConteudoMobile>
        <FecharMobile onClick={ fClick }><img src={fechar} alt="fechar" /></FecharMobile>  
        <TextoMobile>
          {popups.audioDescricao}
        </TextoMobile>

        <DownloadMobile  href={mp3} download >
          {botoes.download}
        </DownloadMobile>

      </ConteudoMobile>
      </MediaQuery>
      <MediaQuery minWidth={800}>
      <Content className="centerColumn">
        <Text>
          {popups.audioDescricao}
        </Text>

        <div><Download  href={mp3} download style={{ marginTop: '2%', marginBottom: '6%' }}>
          {botoes.download}
        </Download>
        <Fechar onClick={ fClick }><img src={fechar} alt="fechar" /></Fechar>  
        </div>
      </Content>
      </MediaQuery>
    </Conteiner>
  );
}

export default PopUpAudiodescricao;
