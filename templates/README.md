# Super+ FM 104,9 — Templates de Site

Três templates de site de rádio **modernos, responsivos**, com **player fixo no topo**
e seção **Top 10**, todos usando a logo da marca (`assets/images/logo_transparent.png`)
no player e no hero. Prontos para servir como página estática ou base do site v1.0.0.

## Estilos

| Pasta | Estilo | Paleta | Ideal para |
|-------|--------|--------|-----------|
| `templates/radio-glass/` | Glassmorphism dark, equalizer animado | navy + teal/roxo | Visual premium, nocturno |
| `templates/radio-minimal/` | Editorial clean, light | branco + laranja | Elegante, leve, legível |
| `templates/radio-vibrant/` | Gradiente vibrante, bold | laranja/rosa/azul/teal (marca) | Jovem, energético |

## Estrutura de cada template

```
templates/radio-<estilo>/
├── index.html   # player sticky no topo + hero (logo) + Top 10
├── styles.css   # CSS responsivo (mobile-first, breakpoints em 560px)
└── app.js       # player (play/pause/volume) + Top 10 clicável
```

## Recursos comuns

- **Player fixo no topo** (`position: sticky`) com botão play/pause, indicador "AO VIVO",
  now-playing e controle de volume. No glass há equalizer animado.
- **Logo da marca** nos dois lugares: barra do player (sempre visível) e hero grande.
- **Top 10 ao vivo** via `app.js`: busca o ranking público do **ConnectMix**
  (`POST .../api_ranking/public/index.php/radios`, CORS `*`) e renderiza as 10 músicas
  mais tocadas (sertanejo / rádios nacionais). Clicar num item atualiza o "now playing"
  e dá play. Se a API falhar, cai no array `FALLBACK` embutido.
- **Responsivo**: layout adapta em telas pequenas (esconde equalizer/volume reduzido).
- **Stream**: `https://stream3.svrdedicado.org:8242/stream` (edite em `index.html`/`app.js`).

### Sobre a fonte do Top 10 (ConnectMix)

O ranking vem de um endpoint público do ConnectMix. O `app.js` envia um JWT de uso
público (id=1, tipo R, embutido no próprio app deles) — não é segredo, pois já vai no
cliente. O corpo da requisição usa a data de hoje e filtros padrão
(`periodoString: "diario"`, `abrangenciaString: "nacional"`, `tipo_ranking: "M"`,
`tipos_radio: [1,2]`). Para mudar o período/gênero, edite `rankingBody()` em `app.js`.

> Campos retornados por item: `ranking`, `musica`, `artista`, `genero`, `total`,
> `youtube`, `spotify`. Hoje o template usa `musica`/`artista`/`genero`.

## Como usar

Abra direto no navegador ou sirva a pasta:

```bash
# exemplo: template vibrante
python3 -m http.server 8080 --directory templates/radio-vibrant
# acesse http://localhost:8080
```

## Sobre a logo

Os templates referenciam `../../assets/images/logo_transparent.png` (gerada em
`scripts/process_assets.py`, fundo branco removido). Como a logo é 16:9, ela aparece
com `height` fixa e `object-fit: contain` para não distorcer. Os ícones quadrados
(`icon-*.png`, `favicon.ico`) também vêm de `assets/images/`.

## Próximos passos sugeridos

- Criar `manifest.webmanifest` PWA (já temos `icon-192/512`).
- Tornar o Top 10 dinâmico (API/CMS) em vez de array estático.
- Escolher um template e promovê-lo para a raiz (`index.html`) no site v1.0.0.
