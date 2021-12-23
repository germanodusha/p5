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

import database from "../../database";

function PopUpCreditos({ fClick }) {
  const fichaTecnica = database.ptbr.info.fichaTecnica;
  const artistasECuradores = database.ptbr.info.artistasECuradores;
  const db = database.ptbr.info.sobrePeriscopio;
  const [estado, setEstado] = useState(true);

  return (
    <Conteiner>
      <Content className="startRow">
        {estado ? (
          <>
          <CaixaTexto className="startRow">
            <Info className="artistasECuradores">
              <h3>{db.titulo}</h3>
              <p>{db.texto}</p>
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
                {fichaTecnica.parte1.map((e) => (
                  <>
                    <span>{e.titulo}</span>
                    <span>{e.autoria}</span>
                  </>
                ))}
              </Info>

              <Info className="equipeTecnica">
                {fichaTecnica.parte2.slice(0, 7).map((e) => (
                  <>
                    {" "}
                    <span>{e.titulo}</span>
                    <span>{e.autoria}</span>
                  </>
                ))}
              </Info>
            

            <Info id="agradecimentos" >
              <h3>{fichaTecnica.parte2[7].titulo}</h3>
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
            Sobre/Artistas
          </Ancora>
          <Ancora
            onClick={() => {
              setEstado(false);
            }}
            ativo={!estado}
          >
            Ficha Técnica
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
