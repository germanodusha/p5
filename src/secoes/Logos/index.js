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

const Logos = () => {
    return (
        <Conteiner>
            <Linha className="lei">
                <img className="logo-lei" src={Logo0} alt="" />
            </Linha>
            <Linha className="logos">
                <Coluna>
                    <Labels>
                        <p>APOIO</p>
                        <p>SUPPORT</p>
                    </Labels>
                    <Imagens>
                        <img className="logo-rona" src={Logo1} alt="" />
                    </Imagens>
                </Coluna>
                <Coluna>
                    <Labels>
                        <p>COORDENAÇÃO EDITORIAL</p>
                        <p>EDITORIAL COORDINATION</p>
                    </Labels>
                    <Imagens>
                        <img className="fora" src={Logo2} alt="" />
                        <img className="genesys" src={Logo3} alt="" />
                    </Imagens>
                </Coluna>
                <Coluna>
                    <Labels>
                        <p>PATROCÍNIO</p>
                        <p>SPONSOR</p>
                    </Labels>
                    <Imagens>
                        <img className="agropeu" src={Logo4} alt="" />
                        <img src={Logo5} alt="" />
                        <img src={Logo6} alt="" />
                    </Imagens>
                </Coluna>
            </Linha>
            <Linha>
                <Coluna className="secretaria" >
                    <Labels>
                        <p>REALIZAÇÃO</p>
                        <p>PRODUCTION</p>
                    </Labels>
                    <Imagens>
                        <img className="logo-secretaria" src={Logo7} alt="" />
                    </Imagens>
                </Coluna>
            </Linha>
        </Conteiner>
    )
}

export default Logos
