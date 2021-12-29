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
import MediaQuery from "react-responsive";
import { useGlobal } from '../../AcessoGlobal';

function PopUpCreditos({ fClick }) {

  const [global, mudarGlobal] = useGlobal();

  const { fichaTecnica, artistasECuradores, sobrePeriscopio, botoes } = global.db.info; 
  const [estado, setEstado] = useState(true);

  return (
    <Conteiner>
      <MediaQuery maxWidth={799}>

      </MediaQuery>
      <MediaQuery minWidth={800}>
      <Content className="startRow">
        {estado ? (
          <>
          <CaixaTexto className="startRow">
            <Info className="artistasECuradores">
              <p>{sobrePeriscopio.titulo}</p>
              {sobrePeriscopio.texto.map((paragrafo)=>(<p className="tab">{paragrafo}</p>))}
            </Info>
              <Info className="artistasECuradores">
                <p>{artistasECuradores}</p>
              </Info>
            </CaixaTexto>
          </>
        ) : (
          <>
            <CaixaTexto className="startRow">
              <div style={{maxWidth:'45%', display:'flex', gap:'2rem'}}>
                <Info className="equipeTecnica">
                {fichaTecnica.parte1.map((item) => (
                  <p className="startColumn">
                    <span>{item.titulo}</span>
                    <span >{item.autoria}</span>
                  </p>
                ))}
              </Info>

              <Info className="equipeTecnica">
                {fichaTecnica.parte2.slice(0, 7).map((item) => (
                  <p className="startColumn">
                    <span>{item.titulo}</span>
                    <span style={{borderBottom:'1rem'}}>{item.autoria}</span>
                  </p>
                ))}
              </Info>
              </div>

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
            {botoes.sobre}
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
      </MediaQuery>
    </Conteiner>
  );
}

export default PopUpCreditos;