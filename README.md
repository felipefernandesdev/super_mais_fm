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

Site mínimo no ar (v0.1.0). Próximos passos em `ROADMAP.md`.
