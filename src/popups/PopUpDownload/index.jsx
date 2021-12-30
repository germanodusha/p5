import React from 'react';

import { Conteiner, Content, Download, Text, ConteudoMobile, FecharMobile, TextoMobile, DownloadMobile } from "./estilo";
import { BotaoFechar } from '../PopUpLivro/estilo';
import fechar from "../../imagens/icones/x_preto.svg";
import fecharCinza from "../../imagens/icones/x_transp.svg";

import pdf from '../../download/P5.pdf'
import { useGlobal } from '../../AcessoGlobal';
import MediaQuery from 'react-responsive';

function PopUpDownload({fClick}) {
  const [global] = useGlobal();
  const { popups, botoes } = global.db;

  return (
    <Conteiner style={{position: 'fixed', top: '40vh', left:'12vw',zIndex:800}}>
      <MediaQuery maxWidth={799}>
        <ConteudoMobile>
          <FecharMobile onClick={ fClick }>
            <img src={fechar} alt="fechar" />
          </FecharMobile>
          <TextoMobile>{popups.download}</TextoMobile>
          <DownloadMobile><a href={pdf} download>{botoes.pdf}</a></DownloadMobile>
        </ConteudoMobile>
      </MediaQuery>
      
      <MediaQuery minWidth={800}>
      <Content className="centerColumn">
        <Text>{popups.download}</Text>
        <div>
          <Download><a href={pdf} download>{botoes.pdf}</a></Download>  
          <BotaoFechar onClick={ fClick }>
            <img src={fechar} alt="fechar" className="x preto"/>
            <img src={fecharCinza} alt="fechar" className="x transp"/>
          </BotaoFechar>   
        </div>
      </Content>
      </MediaQuery>
    </Conteiner>

  );
}

export default PopUpDownload;
