import React, { useState } from "react";
import Botao from "../../componentes/Botao";
import MediaQuery from "react-responsive"
import {
  Conteiner,
  NavCentral,
  FraseBanner,
  Animacao,
  Animacao2,
  FundoBanner
} from "./estilo";
import {
  PopUpLivro,
  PopUpCreditos,
  PopUpAudiodescricao,
  PopUpDownload,
} from "../../popups";
import { usePopUps } from "../../AcessoPopUps";
import { useGlobal } from "../../AcessoGlobal";

function Menu() {
  const [popUps, setPopUps] = usePopUps();
  const [global, mudarGlobal] = useGlobal();

  const { botoes, principal } = global.db;

  const [abrirAudiodescricao, setAbrirAudiodescricao] = useState(false);
  const [abrirCreditos, setAbrirCreditos] = useState(false);
  const [abrirDownload, setAbrirDownload] = useState(false);

  const toggle = (item) => {
    item === "Livro"
      ? setPopUps({ livro: !popUps.livro })
      : eval(`setAbrir${item}(!abrir${item})`);
    if (item !== "Livro" && popUps.livro) setPopUps({ livro: false });
    if (item !== "Creditos" && abrirCreditos) setAbrirCreditos(false);
    if (item !== "Audiodesc" && abrirAudiodescricao)
      setAbrirAudiodescricao(false);
    if (item !== "Download" && abrirDownload) setAbrirDownload(false);
  };

  return (
    <>
      <MediaQuery maxWidth={799}>
      <Conteiner>
          <FundoBanner />
          <FraseBanner>
            <Animacao>
              <p>{principal.fraseChamada}</p>
            </Animacao>
            </FraseBanner>

          <Botao mobile="sumir"
            pos={{ x: "esquerda", y: "superior" }}
            fClick={(e) => {
              e.preventDefault();
              toggle("Download");
            }}
          >
            {botoes.downloadLivro}
          </Botao>

          <Botao mobile="sumir"
            pos={{ x: "esquerda", y: "inferior" }}>
            <a
              href="https://periscopio.art.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {botoes.galeriaPeriscopio}
            </a>
          </Botao>

          <NavCentral>                   
            <Botao
              id="info"
              className="info"
              fClick={(e) => {
                e.preventDefault();
                toggle("Creditos");
              }}
            >
              {botoes.info}
            </Botao>
          </NavCentral>

          <Botao mobile="sumir"
            pos={{ x: "direita", y: "inferior" }}
            fClick={() => mudarGlobal({ ptBr: !global.ptBr })}
          >
            {global.ptBr ? "EN" : "PT"}
          </Botao>

          <Botao mobile="sumir"
            pos={{ x: "direita", y: "superior" }}
            fClick={(e) => {
              e.preventDefault();
              toggle("Audiodescricao");
            }}
          >
            {botoes.audioDescricao}
          </Botao>

          {popUps.livro && (
            <PopUpLivro
              fClick={() => {
                toggle("Livro");
              }}
            />
          )}
          {abrirCreditos && (
            <PopUpCreditos
              fClick={() => {
                toggle("Creditos");
              }}
            />
          )}
          {abrirAudiodescricao && (
            <PopUpAudiodescricao
              fClick={() => {
                toggle("Audiodescricao");
              }}
            />
          )}
          {abrirDownload && (
            <PopUpDownload
              fClick={() => {
                toggle("Download");
              }}
            />
          )}
        </Conteiner>
        
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <Conteiner>
          <FundoBanner />
          <FraseBanner>
            <Animacao>
              <p>{principal.fraseChamada}</p>
            </Animacao>
          </FraseBanner>

          <Botao
            pos={{ x: "esquerda", y: "superior" }}
            fClick={(e) => {
              e.preventDefault();
              toggle("Download");
            }}
          >
            {botoes.downloadLivro}
          </Botao>

          <Botao pos={{ x: "esquerda", y: "inferior" }}>
            <a
              href="https://periscopio.art.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {botoes.galeriaPeriscopio}
            </a>
          </Botao>

          <NavCentral>
            <Botao
              className="livro"
              fClick={(e) => {
                e.preventDefault();
                document.getElementById("livro").scrollIntoView();
                toggle("Livro");
              }}
            >
              {botoes.livro}
            </Botao>
            <Botao className="ensaios">
              <a href="#ensaios">{botoes.artigos}</a>
            </Botao>
            <Botao
              className="info"
              fClick={(e) => {
                e.preventDefault();
                toggle("Creditos");
              }}
            >
              {botoes.info}
            </Botao>
          </NavCentral>

          <Botao
            pos={{ x: "direita", y: "inferior" }}
            fClick={() => mudarGlobal({ ptBr: !global.ptBr })}
          >
            {global.ptBr ? "EN" : "PT"}
          </Botao>

          <Botao
            pos={{ x: "direita", y: "superior" }}
            fClick={(e) => {
              e.preventDefault();
              toggle("Audiodescricao");
            }}
          >
            {botoes.audioDescricao}
          </Botao>

          {popUps.livro && (
            <PopUpLivro
              fClick={() => {
                toggle("Livro");
              }}
            />
          )}
          {abrirCreditos && (
            <PopUpCreditos
              fClick={() => {
                toggle("Creditos");
              }}
            />
          )}
          {abrirAudiodescricao && (
            <PopUpAudiodescricao
              fClick={() => {
                toggle("Audiodescricao");
              }}
            />
          )}
          {abrirDownload && (
            <PopUpDownload
              fClick={() => {
                toggle("Download");
              }}
            />
          )}
        </Conteiner>
      </MediaQuery>
    </>
  );
}

export default Menu;
