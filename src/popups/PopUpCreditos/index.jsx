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
  const artistasECuradores = database.ptbr.principal.artistasECuradores;
  const db = database.ptbr.index.sobrePeriscopio;
  const [estado,setEstado] = useState(true);

  console.log(db);
  return (
    
    <Conteiner>
      <Content className="centerRow">
        {estado ? (<> 
        <Info id="agradecimentos" className="startRow">
          <h3>{database.ptbr.index.titulo}</h3>
          <p>{db}</p>
        </Info>
        <CaixaTexto className="startRow" >
          <Info id="artistasECuradores">
           <p>{artistasECuradores}</p>
          </Info>   
        </CaixaTexto></>):(<><CaixaTexto className="startRow" >
          <Info>
            {fichaTecnica.parte1.map((e) => (
              <>
                <span>{e.titulo}</span>
                <span>{e.autoria}</span>
              </>
            ))}
          </Info>
          
          <Info>{fichaTecnica.parte2.slice(0,7).map((e) => (
            
             <> <span>{e.titulo}</span>
              <span>{e.autoria}</span></>
            
          ))}</Info>
          
        </CaixaTexto>
        
          <Info id="agradecimentos" className="startRow">
          <h3>{fichaTecnica.parte2[7].titulo}</h3>
          <p>{fichaTecnica.parte2[7].autoria}</p>
          <span>{fichaTecnica.parte2[8].titulo}</span>
          <p>{fichaTecnica.parte2[8].autoria}</p>
          <p>{fichaTecnica.notaFinal}</p> 
        </Info>
        </>)}
        <div className="navegacao">
          <Ancora onClick={()=>{setEstado(true)}} ativo={estado}>Sobre/Artistas</Ancora>
          <Ancora onClick={()=>{setEstado(false)}} ativo={!estado}>Ficha Técnica</Ancora>
        </div>
        <Bolinha className="bola1" />
        <Bolinha className="bola2" />
        <Fechar onClick={ fClick }><img src={fechar} alt="fechar" /></Fechar>
      </Content>
    </Conteiner>
  );
}

export default PopUpCreditos;
