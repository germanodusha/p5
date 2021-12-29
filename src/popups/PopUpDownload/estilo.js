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
width:100%;
height:100%;
box-shadow: 0 0 20px 15px var(--preto);
border-radius:3rem;
background-color: var(--laranja);
border:1px solid var(--preto);
div{
  display:flex;
  width:100%;
  height:10vh;
  align-items: center;
  justify-content: center;
}

`
export const Text = styled.p`
text-align:center;
font-size:2.3em;
font-weight:200;
width:80%;
height:auto;
font-family:'Inter';
@media(min-width:1720px){
  font-size:2.5em;
  margin-bottom:5%;
}
@media(max-width: 800px){
  width:80%;
  height: 65%;
  font-size: 1.25em;
  font-weight:300;
  padding: 0;
  overflow-y: auto;
  padding-top: 20%;
}
`
export const Download = styled.a`
font-size:2.3em;
font-family:'Inter';
font-weight:300;
position: fixed;
bottom: 15%;
&:hover,&:focus{
  text-decoration:underline;
  text-underline-position: under;
}
@media (max-width:800px){
font-size: 1.25em;
font-weight:300;
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

