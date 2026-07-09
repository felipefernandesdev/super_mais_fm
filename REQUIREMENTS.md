# Super+ FM 104,9 — Requisitos

> Requisitos inferidos do código existente (`index.html`). Marque **[suposição]** o que
> precisa de validação com o dono do projeto.

## Requisitos Funcionais

### RF01 — Reproduzir áudio ao vivo
- A página deve conter um player que toca o stream `https://stream3.svrdedicado.org/8242/stream`
- Deve existir um botão "Play" que inicia a reprodução
- Deve existir um botão "Pause" que pausa a reprodução

### RF02 — Exibir identidade visual
- Exibir logo da rádio (`assets/images/logo_site.png`)
- Exibir título "Super+ FM 104,9"
- Exibir frase promocional/banner (`assets/images/300x100_frase1.webp`)
- Exibir rodapé com direitos autorais

### RF03 — Comunicar status "em breve" **[suposição]**
- Exibir aviso de que o site definitivo está em construção

## Requisitos Não Funcionais

### RNF01 — Responsividade
- Layout deve adaptar-se a telas mobile e desktop **[suposição — atual usa `height:100vh` fixo]**
- Logo limitada a `max-width: 300px`

### RNF02 — Sem build
- O site deve ser servido como arquivos estáticos, sem etapa de compilação

### RNF03 — Performance
- Carregamento leve (apenas HTML + 2 imagens + stream de áudio)
