import React from 'react'
import {
    Logo0,
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7
} from '../../imagens/logos'
import { Conteiner, Linha, Coluna, Imagens, Labels } from './estilo'
import MediaQuery from 'react-responsive'

const Logos = () => {
    return (
        <Conteiner>
            <Linha className="lei">
                <img className="logo-lei" src={Logo0} alt="Lei de incentivo à cultura" />
            </Linha>
            <Linha className="logos">
                <Coluna>
                    <Labels>
                        <p>APOIO</p>
                        <p>SUPPORT</p>
                    </Labels>
                    <Imagens>
                        <img className="logo-rona" src={Logo1} alt="Rona Editora" />
                    </Imagens>
                </Coluna>
                <Coluna>
                    <Labels>
                        <p>COORDENAÇÃO EDITORIAL</p>
                        <p>EDITORIAL COORDINATION</p>
                    </Labels>
                    <Imagens>
                        <img src={Logo2} alt="O Fora" />
                        <img src={Logo3} alt="Genesys" />
                    </Imagens>
                </Coluna>
                <MediaQuery minWidth={800}>
                    <Coluna>
                        <Labels>
                            <p>PATROCÍNIO</p>
                            <p>SPONSOR</p>
                        </Labels>
                        <Imagens>
                            <img className="agropeu" src={Logo4} alt="Agropeu" />
                            <img src={Logo5} alt="Nova Catalão - Volkswagen" />
                            <img src={Logo6} alt="Tecar - Fiat" />
                        </Imagens>
                    </Coluna>
                </MediaQuery>
            </Linha>
            <MediaQuery maxWidth={799}>
                <Linha className="logos">
                    <Coluna>
                        <Labels>
                            <p>PATROCÍNIO</p>
                            <p>SPONSOR</p>
                        </Labels>
                        <Imagens>
                            <img className="agropeu" src={Logo4} alt="Agropeu" />
                            <img src={Logo5} alt="Nova Catalão - Volkswagen" />
                            <img src={Logo6} alt="Tecar - Fiat" />
                        </Imagens>
                    </Coluna>
                </Linha>
            </MediaQuery>
            <Linha>
                <Coluna className="secretaria" >
                    <Labels>
                        <p>REALIZAÇÃO</p>
                        <p>PRODUCTION</p>
                    </Labels>
                    <Imagens>
                        <img className="logo-secretaria" src={Logo7} alt="Secretaria Especial da Cultura - Ministério do Turismo - Governo Federal" />
                    </Imagens>
                </Coluna>
            </Linha>
        </Conteiner>
    )
}

export default Logos