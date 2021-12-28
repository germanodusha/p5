import styled from 'styled-components';

export const Conteiner = styled.div`
width:70vw;
height:70vh;

vertical-align: middle;
margin:0 auto;
position: relative;
transform: translateY(-39%); 
margin-left:2%;

`
export const Content = styled.div`
overflow-y:scroll;
width:100%;
height:100%;
box-shadow: 0 0 20px 15px var(--preto);
border-radius:3rem;
background-color: var(--laranja);
border:1px solid var(--preto);
div{
  width:auto;
  height:auto;
  align-items: center;
}
`
export const Text = styled.p`
text-align:center;
font-size:2em;
font-weight:200;
max-width:70%;
height:auto;
padding-bottom:10%;
font-family:'Inter';
@media(min-width:1720px){
  font-size:2.5em;
  margin-bottom:5%;
}
`
export const Download = styled.a`
font-size:2em;
font-family:'Inter';
&:hover,&:focus{
  text-decoration:underline;
  text-underline-position: under;
}
`
export const Fechar = styled.button`
height:3rem;
width:3.5rem;
font-size: 1rem;
background-color:transparent;
border:none;
position:fixed;
top:6%;
right:5%;
img{
  width:100%;
  height: 100%;
}
`

