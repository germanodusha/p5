import React, { useState } from "react";
import {
  Conteiner,
  Content,
  CaixaTexto,
  Info,
  Ancora,
  Bolinha,
  Fechar,
} from "./estilo";

import fechar from "../../imagens/icones/x_preto.svg";

import { useGlobal } from '../../AcessoGlobal';

function PopUpCreditos({ fClick }) {

  const [global, mudarGlobal] = useGlobal();

  const { fichaTecnica, artistasECuradores, sobrePeriscopio, botoes } = global.db.info; 
  const [estado, setEstado] = useState(true);

  return (
    <Conteiner>
      <Content className="startRow">
        {estado ? (
          <>
          <CaixaTexto className="startRow">
            <Info className="artistasECuradores">
<<<<<<< Updated upstream
              <h3>{sobrePeriscopio.titulo}</h3>
              <p>{sobrePeriscopio.texto}</p>
=======
              <p>{db.titulo}</p>
              <p>{db.texto}</p>
>>>>>>> Stashed changes
            </Info>
              <Info className="artistasECuradores">
                <p>{artistasECuradores}</p>
              </Info>
            </CaixaTexto>
          </>
        ) : (
          <>
            <CaixaTexto className="startRow">
              <Info className="equipeTecnica">
                {fichaTecnica.parte1.map((item) => (
                  <>
                    <span>{item.titulo}</span>
                    <span>{item.autoria}</span>
                  </>
                ))}
              </Info>

              <Info className="equipeTecnica">
                {fichaTecnica.parte2.slice(0, 7).map((item) => (
                  <>
                    {" "}
                    <span>{item.titulo}</span>
                    <span>{item.autoria}</span>
                  </>
                ))}
              </Info>
            

            <Info id="agradecimentos" >
              <p>{fichaTecnica.parte2[7].titulo}</p>
              <p>{fichaTecnica.parte2[7].autoria}</p>
              <span>{fichaTecnica.parte2[8].titulo}</span>
              <p>{fichaTecnica.parte2[8].autoria}</p>
              <p>{fichaTecnica.notaFinal}</p>
            </Info>
            </CaixaTexto>
          </>
        )}
        <div className="navegacao">
          <Ancora
            onClick={() => {
              setEstado(true);
            }}
            ativo={estado}
          >
<<<<<<< Updated upstream
            {botoes.sobre}
=======
            Sobre/Agentes
>>>>>>> Stashed changes
          </Ancora>
          <Ancora
            onClick={() => {
              setEstado(false);
            }}
            ativo={!estado}
          >
            {botoes.fichaTecnica}
          </Ancora>
        </div>
        <Bolinha className="bola1" />
        <Bolinha className="bola2" />
        <Fechar onClick={fClick}>
          <img src={fechar} alt="fechar" />
        </Fechar>
      </Content>
    </Conteiner>
  );
}

export default PopUpCreditos;
