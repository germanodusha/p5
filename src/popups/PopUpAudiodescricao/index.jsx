import React from "react";
import { Conteiner, Content, Download, Text } from "../PopUpDownload/estilo.js";

function PopUpAudiodescricao() {
  return (
    <Conteiner
      style={{ position: "fixed", top: "40vh", left: "12vw", zIndex: 1000 }}
    >
      <Content className="centerColumn">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>

        <Download style={{marginTop:'-8%', marginBottom:'6%'}}>DOWNLOAD</Download>
      </Content>
    </Conteiner>
  );
}

export default PopUpAudiodescricao;
