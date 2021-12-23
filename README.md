# PERISCÓPIO 5 ANOS

## Cronograma:
### 17/12
- Planejamento
- Cronograma
- Estruturação do projeto
- Upload do repositório para o Github

### 22/12

- Subir repo para o Github do Germano
- Esqueleto do site
  - [x] Organizar seções e componentes seguindo o layout
  - [x] Estruturar base de dados dos textos em duas línguas
  - [x] Adicionar conteúdo de cada seção
      - [x] Capa
      - [x] Chamada
      - [x] Livro
      - [x] Indice
      - [x] Artigos
      - [x] PopUpAudiodescrição
      - [x] PopUpCreditos
      - [x] PopUpDownload
      - [x] PopUpLivro
  - [ ] Estruturar base de cada seção
      - [x] Menu
      - [x] Capa
      - [x] Chamada
      - [x] Livro
      - [x] Indice - Mar
      - [x] Artigos
      - [x] PopUpAudiodescrição
      - [x] PopUpCreditos - Grego
      - [x] PopUpDownload
      - [x] PopUpLivro
- [x] Desenvolver interações básicas das pop ups

- [x] Estilização inicial (cores, fontes, posicionamento)
  - [x] Importar fontes
  - [x] Declarar cores
  - [x] Aplicar fontes nos lugares correspondentes
  - [x] Aplicar cores
  - [x] Posicionar elementos

### 24/12
#### Aguardando: 
- fotos do livro para o carrossel
- objeto 3D do livro
- textos em inglês
- textos das pop ups de download + audiodescrição
- pdf para download
- epub para download
- audiodescrição para download

#### Tarefas
- [ ] **Finalização de conteúdo - Jai**
  - [ ] Adicionar conteúdo da `PopUpDownload`
  - [ ] Adicionar textos da `PopUpAudiodescricao`
  - [x] Adicionar textos em inglês à `database`
  - [ ] Trocar texto do botão "Artigos" por "Ensaios"
  - [ ] Trocar botão "Créditos" por "Ficha Técnica"
  - [ ] Atualizar imagens do `Livro`

- [ ] Aprofundamento da estilização
  - [ ] Remover hover do texto de `Chamada`
  - [ ] Adicionar botão de fechar (X) às pop ups que não tem
    - [ ] `PopUpDownload`
    - [ ] `PopUpAudiodescricao`
  - [ ] Adicionar box-shadow às pop ups
    - [ ] `PopUpDownload`
    - [ ] `PopUpAudiodescrição`
  - [ ] Alterar fonte para 'Inter'
    - [ ] `PopUpDownload`
    - [ ] `PopUpAudiodescrição`
  - [ ] Retirar link "EPUB" e centralizar "PDF" na `PopUpDownload`
  - [ ] Colocar 'cursor: pointer' em todos os elementos clicáveis
    - [ ] Botões
    - [ ] Âncoras
    - [ ] Imagem `Livro`
  - [ ] `PopUpCreditos`
    - [ ] Aumentar padding do botão de fechar seguindo layout
    - [ ] Alinhar colunas das duas páginas (quando clica de um botão a outro ela muda de posição)
    - [ ] Diminuir padding lateral e gaps para caber todo o texto na página, e se preciso, diminuir um pouquinho a letra -- está dando overflow e sobrepondo os botões
  - [ ] Corrigir posição do título "Periscópio" na `Capa` para que fique sempre fixo no fim da primeira tela
  - [ ] Manter botões do `Menu` ativos quando as pop ups estão abertas
    - [ ] `PopUpDownload`
    - [ ] `PopUpAudiodescricao`
  - [ ] Resolver cor dos botões do `Menu` com base na rolagem
  - [ ] Adicionar transição da imagem do `Livro` durante a rolagem da página
  - [ ] Remover barra laranja ao fim da página
  - [ ] Aplicar animação de letreiro de LED ao banner da frase de chamada no `Menu`
  - [ ] Adicionar objeto 3D / gif à `Capa`
  - [ ] Trocar a cor de seleção do texto por laranja (`Global`)
  - [x] Inverter coluna "Sobre a Periscópio" e a lista de pessoas nos `PopUpCreditos`
  - [x] `Artigos`
    - [x] Aumentar espaçamento entre as linhas no menu
    - [x] Alinhar marcador à esquerda dos itens do menu
    - [x] Centralizar mais o conteúdo (sobrepõe com o botão em algumas telas)

- [ ] Desenvolvimento das interações
  - [ ] Adicionar arquivos para download - Mar
    - [ ] `PopUpDownload`: .pdf
    - [ ] `PopUpAudiodescricao`: audiodescrição
  - [ ] **`Global`: Aplicar lógica de línguas - Mar**
  - [ ] Abrir `PopUpLivro` ao clicar na imagem do `Livro`
  - [x] Adicionar link Periscópio ao `Menu` (https://periscopio.art.br/)
  - [x] Adicionar lógica de scrollTo aos botão `Artigo` do `Menu` ([react-hash-link](https://www.npmjs.com/package/react-hash-link))

### 27/12
- Subir para o servidor

### 29/12
- Ajustes finais

### 30/12
- Lançamento