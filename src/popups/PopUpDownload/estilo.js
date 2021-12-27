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
  justify-content: space-around;
  align-items: center;
}

`
export const Text = styled.p`
text-align:center;
font-size:2em;
font-weight:200;
width:70%;
height:50%;
padding-bottom:10%;
font-family:'Inter';
@media(min-width:1720px){
  font-size:2.5em;
  margin-bottom:5%;
}
@media(max-width: 800px){
  width:80%;
  height: 70%;
  font-size: 1.25em;
  font-weight:300;
  padding: 0;
  overflow-y: auto;
}
`
export const Download = styled.a`
font-size:2.5em;
font-family:'Inter';
font-weight:200;
&:hover,&:focus{
  text-decoration:underline;
  text-underline-position: under;
}
@media (max-width:800px){
font-size: 1.5em;

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
@media (max-width:800px){
 display: none; 
}

`

