# Super+ FM 104,9

Site estático da rádio **Super+ FM 104,9** com player de áudio ao vivo (streaming).

## Visão geral

Página única em HTML/CSS/JS puro que reproduz o stream ao vivo da rádio diretamente
no navegador. Sem backend, sem build — basta servir os arquivos.

## Como usar

Abra `index.html` no navegador (ou sirva a pasta com qualquer servidor estático):

```bash
python3 -m http.server 8080
# acesse http://localhost:8080
```

Clique em **Play** para ouvir. O áudio vem de um stream Icecast externo.

## Estrutura

```
super_mais_fm/
├── index.html              # Página única + player
├── assets/
│   └── images/             # logo_site.png, 300x100_frase1.webp
├── PROJECT_CONTEXT.md      # Contexto do projeto (eng. reversa)
├── REQUIREMENTS.md         # Requisitos funcionais/não funcionais
├── ROADMAP.md              # Milestones
├── DECISIONS.md            # ADRs
├── FEATURES.md             # Lista de features
├── MEMORY.md               # Memória de sessão da IA
├── CHANGELOG.md            # Histórico de versões
├── specs/
│   └── radio-player/       # Spec + cenários BDD do player
└── registro-ia-card.md     # Registro de uso de IA
```

## Artefatos do método (engenharia reversa)

Este repositório foi submetido a engenharia reversa em 2026-07-09. Os artefatos
`PROJECT_CONTEXT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `DECISIONS.md`, `FEATURES.md`,
`MEMORY.md` e `specs/` reconstroem o que o código já faz e planejam a evolução.

## Status

Site principal (template glass) na raiz, com Top 10 ao vivo do ConnectMix. Próximos passos em `ROADMAP.md`.

## Deploy (Vercel)

Site estático — não precisa de build. `vercel.json` já está configurado
(`outputDirectory: "."`, `cleanUrls`, cache de `assets/` e `favicon.ico`).

**Opção A — Dashboard:** importe o repositório `felipefernandesdev/super_mais_fm` no Vercel
(Framework Preset: *Other*). Ele serve o `index.html` da raiz.

**Opção B — CLI:**
```bash
npm i -g vercel
vercel            # preview
vercel --prod     # produção
```

Saída: `index.html` + `styles.css` + `app.js` + `assets/` + `favicon.ico`.
