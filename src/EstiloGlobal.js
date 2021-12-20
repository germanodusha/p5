import { createGlobalStyle } from 'styled-components'
import { esBuild, inter, interval, intervalSlanted, intervalBold, intervalBoldSlanted } from './fontes';

const EstiloGlobal = createGlobalStyle`
@font-face {
    font-family: 'ES Build';
    src: url(${esBuild}) format('truetype');
}
    @font-face {
      font-family: 'Inter';
      src: url(${inter}) format('truetype');
    }
    @font-face {
      font-family: 'Interval';
      src: url(${interval});
    }
    @font-face {
      font-family: 'Interval Bold';
      src: url(${intervalBold});
    }
    @font-face {
      font-family: 'Interval Slanted';
      src: url(${intervalSlanted});
    }
    @font-face {
      font-family: 'Interval Bold Slanted';
      src: url(${intervalBoldSlanted});
    }

:root{
  --laranja: #ff6c00;
  --preto: #000;
  --branco: #FFF;
}

body {
  background-color: var(--laranja);
  box-sizing: border-box;
  font-family: monospace;
  margin: 0;
  padding: 0;
}

`;

export default EstiloGlobal;