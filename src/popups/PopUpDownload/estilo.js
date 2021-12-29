import styled from 'styled-components';

export const Conteiner = styled.div`
width:70vw;
height:70vh;

vertical-align: middle;
margin:0 auto;
position: relative;
transform: translateY(-39%); 
margin-left:2%;
@media (max-width:800px){
  display: flex;
  justify-content: center;
}
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

`;

export const ConteudoMobile = styled.section`
overflow-y:scroll;
width:80%;
height:100%;
box-shadow: 0 0 20px 15px var(--preto);
border-radius:3rem;
background-color: var(--laranja);
border:1px solid var(--preto);
display: flex;
flex-direction: column;
font-size: 1.25em;
align-items: center;
font-family:'Inter';
font-weight:200;

`;

export const FecharMobile = styled.section`
height: auto;
margin: 3vh;
img{
  height: 5vw;
}
position: absolute;
right: 8vw;
`;

export const TextoMobile = styled.p`
text-align:center;
width: 80%;
height: auto;
padding-top: 10vh;
overflow-y: auto;
`;

export const DownloadMobile = styled.p`

&:hover,&:focus{
  text-decoration:underline;
  text-underline-position: under;
}
position: absolute;
bottom: 5vh;

`;

