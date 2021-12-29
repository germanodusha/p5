import React from 'react';
import { Foto, ConteinerFoto, ConteinerLivro } from './estilo';
import { Foto0 } from '../../imagens/livro'
import { usePopUps } from '../../AcessoPopUps';
import { useGlobal } from '../../AcessoGlobal';

  function Livro({rolagem}) {
    const [popUps, setPopUps] = usePopUps();
    const [global] = useGlobal();
  
    return (
    <ConteinerLivro id="livro">
    <ConteinerFoto>
      <Foto
        src={Foto0}
        onClick={
          () => {
            setPopUps({ livro: true });
          }
        }
        taBranco={global.taBranco}
        rolagem={rolagem}
        />
    </ConteinerFoto>
        </ConteinerLivro>
  );
}

export default Livro;
