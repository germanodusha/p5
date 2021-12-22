import React,{useState} from "react";
import {
  Conteiner,
  Content,
  CaixaTexto,
  Info,
  Ancora,
  Bolinha,
  Fechar,
} from "./estilo";

import fechar from "../../imagens/icones/x_preto.svg"

import database from "../../database";
import { dblClick } from "@testing-library/user-event/dist/click";

function PopUpCreditos({ fClick }) {
  const fichaTecnica = database.ptbr.index.fichaTecnica;
  const agradecimentos = database.ptbr.index.agradecimentos;
  const artistasECuradores = database.ptbr.principal.artistasECuradores;
  const db = database.ptbr.index.sobrePeriscopio;
  const [estado,setEstado] = useState(true);

  console.log(db);
  return (
    
    <Conteiner>
      <Content className="centerRow">
        {estado ? (<> <CaixaTexto className="startRow" >
          <Info id="artistasECuradores">
           <p>{artistasECuradores}</p>
          </Info>   
        </CaixaTexto>
        <Info id="agradecimentos" className="startRow">
          <h3>Sobre o Periscópio</h3>
          <p>{db}</p>
        </Info></>):(<><CaixaTexto className="startRow" >
          <Info>
            {fichaTecnica.parte1.map((e, i) => (
              <>
                <span>{e.titulo}</span>
                <span>{e.autoria}</span>
              </>
            ))}
          </Info>
          
          <Info>{fichaTecnica.parte2.map((e, i) => (
            
             <> <span>{e.titulo}</span>
              <span>{e.autoria}</span></>
            
          ))}</Info>
          
        </CaixaTexto>
        <Info id="agradecimentos" className="startRow">
          <h3>{agradecimentos.titulo}</h3>
          <p>{agradecimentos.autoria}</p>
        </Info></>)}
        <div className="navegacao">
          <Ancora onClick={()=>{setEstado(true)}} ativo={estado}>Sobre/Artistas</Ancora>
          <Ancora onClick={()=>{setEstado(false)}} ativo={!estado}>Créditos</Ancora>
        </div>
        <Bolinha className="bola1" />
        <Bolinha className="bola2" />
        <Fechar onClick={ fClick }><img src={fechar} alt="fechar" /></Fechar>
      </Content>
    </Conteiner>
  );
}

export default PopUpCreditos;
