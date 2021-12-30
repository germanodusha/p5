import React from "react";
import { Conteiner, Content, Download, Text, ConteudoMobile,DownloadMobile,TextoMobile, FecharMobile, FundoTransparente } from "../PopUpDownload/estilo.js";
import fecharCinza from "../../imagens/icones/x_transp.svg";
import fechar from "../../imagens/icones/x_preto.svg";
import MediaQuery from 'react-responsive';
import { useGlobal } from '../../AcessoGlobal';

import mp3 from '../../download/audiodesc.mp3';
import { BotaoFechar } from "../PopUpLivro/estilo.js";

function PopUpAudiodescricao({fClick}) {
  const [global] = useGlobal();
  const { popups, botoes } = global.db; 

  return (
    <FundoTransparente>
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

        <div><Download  href={mp3} download>
          {botoes.download}
        </Download>
        <BotaoFechar onClick={ fClick }>
            <img src={fechar} alt="fechar" className="x preto"/>
            <img src={fecharCinza} alt="fechar" className="x transp"/>
          </BotaoFechar>  
        </div>
      </Content>
      </MediaQuery>
    </Conteiner>
    </FundoTransparente>
  );
}

export default PopUpAudiodescricao;
