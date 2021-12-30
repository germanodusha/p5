import styled from 'styled-components';

export const Conteiner = styled.div`
animation-name:slideup;
animation: slideup 0.5s;

@keyframes slideup {
  from { height: 0; }
  to   { height: 90vh; }
}
width:100%;
height: 90vh;
bottom:0;
left:0;
border-top:3px solid var(--preto);
position:fixed;
z-index:1000;
background-color:var(--laranja);

.bola1{
  top:15%;
  left:3%;
  position:fixed;
  }
  .bola2{
    top:50%;
    left:3%;
    position:fixed;
  
  }

.startRow, .startColumn{
  display:flex;
  justify-content:center;
  align-items:flex-start;
  align-self:flex-start;
  margin-top:2%;
  margin-left:2%;

}
.startColumn{
  flex-direction:column;
}
#agradecimentos{
  flex-direction:column;
  margin-left:-4.8%;
  margin-right:5%;
  h3{
    margin:0;
  }
  p{
    width:100%;
    padding-bottom: 2px;
  }
}
.artistasECuradores{
  width:100%;
  margin-right:5%;
  .tab{
    text-indent: 2.5rem;
  }
  span,p{
    font-size:0.9em;
    line-height: 20px;
    @media (min-width:1720px){
      font-size:1em;
      line-height: 32px;
    }
  }
}



@media (max-width:800px){
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    background: var(--laranja);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--laranja);
  }
}
`

export const Content = styled.div`

}
overflow-y:scroll;
width:100%;
height:80%;
.navegacao{
  width:30%;
  display:flex;
  position:fixed;
  gap:10%;
  bottom:6%;
  right:17.5%;
}

.equipeTecnica{
  width:100%;

}

`
export const CaixaTexto = styled.div`
width:100%;
max-height:50vh;
text-align:left;
display:flex;
align-items:center;
justify-content:center;
justify-self:center;
`

export const Info = styled.div`
max-width:35%;
height:auto;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-flow:column nowrap;
text-align:left;
font-family: 'Inter', sans-serif;
gap:0.2rem;
span,p{
    font-size:0.9em;
    @media (min-width:1720px){
      font-size:1em;
      line-height:26px;
    }
  }

`
export const Ancora = styled.button`
background-color:transparent;
border:transparent;
font-size:1rem;
font-weight:100;
font-family: 'Interval', monospace;
text-decoration:${(props) => props.ativo ? 'underline' : 'none'};
text-underline-position: under;
&:hover,&:focus{
  text-decoration:underlaine;
}
`
export const Bolinha = styled.div`
width:1.6rem;
height:1.6rem;
border-radius:50%;
background-color: var(--preto);
`
export const Fechar = styled.button`
height:3rem;
width:3.5rem;
font-size: 1rem;
background-color:transparent;
border:none;
position:fixed;
top:12%;
right:2%;
img{
  width:100%;
  height: 100%;
}
display: flex;
.preto{
  visibility: visible;
  position: relative;
  width: 3vw;
  height: auto;
}
.transp{
  position: absolute;
  visibility: hidden;
  width: 3vw;
  height: auto;
}
&:hover,&:focus{
  .preto{
  visibility: hidden;
  }
  .transp{
      visibility: visible;
  }
  cursor: pointer;

}
`
export const ConteudoMobile = styled.section`
font-weight:100;
font-family: 'Interval', monospace;
display:flex;
justify-content: center;
`;

export const CaixaTextoMobile = styled.section`
padding: 5vh 0;
width: 70%;
height: 100%;

`;

export const InfoMobile = styled.section`
padding: 3vh 0;
`;

