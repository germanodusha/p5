import styled from 'styled-components';

export const Conteiner = styled.nav`
/* 
* Estilo temporário para visualizar a construção inicial. Uma vez posicionados, não precisamos mais de um conteiner estilizado.
* Ainda assim, é bom usarmos a tag <nav> de conteiner por questões semânticas.
 */

 .sumir {
   z-index: 30;
 }
`;

export const NavCentral = styled.nav`
position: fixed;
bottom: 5vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;
gap: 1vw;
z-index: 10;
`;

export const FundoBanner = styled.div`
position:fixed;
top: 0;
left: 0;
z-index: 5;
width: 100%;
height: 13vh;

/* Solid color or jpg fallback */
background-color: var(--branco); 
/* For Chrome (v 10-25) and Safari(v 5.1-6)  */
background: -webkit-linear-gradient(180deg, var(--branco) 70%, var(--transp) 100%);
/* For Firefox(v 3.6-15)  */
background: -moz-linear-gradient(180deg, var(--branco) 70%, var(--transp) 100%);
/* For Opera(v 11.5) */
background: -o-linear-gradient(180deg, var(--branco) 70%, var(--transp) 100%);
/* For IE 10+ */
background: -ms-linear-gradient(180deg, var(--branco) 70%, var(--transp) 100%);
/* For Modern browsers */
background: linear-gradient(180deg, var(--branco) 70%, var(--transp) 100%);
`;

export const FraseBanner = styled.div`
position:fixed;
top: 0;
left: 0;
z-index: 7;
width: 100%;
height: 10vh;
overflow: hidden;
background: transparent;
display: flex;
align-items: center;
justify-content: center;

.delay{
  transform: translate(120%, 0);
  animation-delay: 15s;
}
`;

export const Animacao = styled.div`
  white-space: nowrap;
  animation: marquee 30s linear infinite;

 p {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 1.3em;
  z-index:11;
}

@keyframes marquee {
  0% {
    transform: translate(120%, 0);
  }
  100% {
    transform: translate(-120%, 0);
  }
}
`;