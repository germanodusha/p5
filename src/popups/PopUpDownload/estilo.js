import styled from 'styled-components';

export const Conteiner = styled.div`
width:70vw;
height:70vh;
background-color: var(--laranja);
margin:0 auto;

`
export const Content = styled.div`
width:100%;
height:100%;
border-radius:3rem;
border:1px solid var(--preto);

div{
  display:flex;
  width:100%;
  justify-content: space-around;
  align-items: center;
}
`
export const Text = styled.p`
text-align:center;
font-size:2.5em;
font-weight:200;
width:70%;
height:50%;
padding-bottom:10%;
`
export const Download = styled.a`
font-size:2em;
&:hover,&:focus{
  text-decoration:underline;
  text-underline-position: under;
}
`

