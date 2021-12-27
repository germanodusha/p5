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
  margin-top:2%;
  margin-left:2%;
  gap:2%;
}
#agradecimentos{
  flex-direction:column;
  max-width:40%;
  h3{
    margin:0;
  }
  p{
    width:100%;
    padding-bottom: 2px;
  }
}
.artistasECuradores{
  max-width:70%;
  margin-right:5%;
  span,p{
    font-size:0.9em;
    line-height: 20px;
    @media (min-width:1720px){
      font-size:1em;
      line-height: 32px;
    }
  }
}

`

export const Content = styled.div`
width:100%;
height:100%;
.navegacao{
  width:30%;
  display:flex;
  position:fixed;
  gap:10%;
  bottom:6%;
  right:25%;
}
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
.equipeTecnica{
  width:40%;
}

`
export const CaixaTexto = styled.div`
width:80%;
max-height:50vh;
text-align:justify;
`

export const Info = styled.div`
max-width:40%;
height:auto;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-flow:column nowrap;
text-align:justify;
font-family: 'Inter';
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
font-family: 'Interval';
text-decoration:${(props) => props.ativo ? 'underline' :'none' };
text-underline-position: under;
&:hover,&:focus{
  text-decoration:underline;
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
`