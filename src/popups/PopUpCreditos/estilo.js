import styled from 'styled-components';

export const Conteiner = styled.div`
width:100%;
height:90vh;
bottom:0;
left:0;
border-top:3px solid var(--preto);
position:fixed;
z-index:1000;
background-color:var(--laranja);

.startRow, startColumn{
  display:flex;
  justify-content:center;
  align-items:flex-start;
  align-self:flex-start;
  margin-top:3%;
  gap:10%;
}
#agradecimentos{
  flex-direction:column;
  gap:1%;
  h3{
    margin:0;
  }
}
#artistasECuradores{
  max-width:70%;
}

`

export const Content = styled.div`
width:100%;
height:100%;
.navegacao{
  display:flex;
  position:fixed;
  gap:10%;
  bottom:6%;
  right:33%;
}
.bola1{
top:15%;
left:6%;
position:fixed;
}
.bola2{
  top:50%;
  left:6%;
  position:fixed;
}

`
export const CaixaTexto = styled.div`
width:40%;
max-height:50vh;
text-align:justify
gap:10%;
`

export const Info = styled.div`
max-width:30%;
height:auto;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-flow:column nowrap;
text-align:justify;
font-family: 'Inter';
gap:0.5rem;

`
export const Ancora = styled.button`
background-color:transparent;
border:transparent;
font-size:1rem;
font-weight:100;
font-family: 'Interval';
text-decoration:${(props) => props.ativo ? 'underline' :'none' };
text-underline-position: under;
&:hover,&:focus{
  text-decoration:underline;
}
`
export const Bolinha = styled.div`
width:2rem;
height:2rem;
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
top:10%;
right:2%;
img{
  width:100%;
  height: 100%;
}
`