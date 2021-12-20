import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

:root{
  --laranja: #ff6000;
  --preto: #000;
  --branco: #FFF;
}

body {
  background-color: var(--laranja);
  box-sizing: border-box;
  font-family: 'Noto Sans';
  margin: 0;
  padding: 0;
}

`;

export default EstiloGlobal;