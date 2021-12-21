import React from "react";
import { Conteiner, Content, Download, Text } from "../PopUpDownload/estilo.js";

function PopUpAudiodescricao() {
  return (
    <Conteiner >
      <Content className="centerColumn">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <div>
          <Download>PDF</Download>
          <Download>EPUB</Download>
        </div>
      </Content>
    </Conteiner>
  );
}

export default PopUpAudiodescricao;
