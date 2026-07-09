# MEMORY — Super+ FM 104,9

> **Felipe AI Engineering — Memória de Sessão**
> Projeto submetido a engenharia reversa em 2026-07-09.

---

## Última sessão

- **Data:** 2026-07-09
- **O que foi feito:** Engenharia reversa + artefatos; processamento da logo via Pillow (transparente/organizada) + favicon/ícones; 3 templates (glass/minimal/vibrant) com player no topo e Top 10 ao vivo do ConnectMix; **template glass promovido para a raiz** como site principal; configurado `vercel.json` + `.gitignore`; **deploy realizado na Vercel** → https://supermais104fm.com.br (live).
- **Decisões tomadas:** Site estático (sem backend); glass como visual principal; Top 10 puxado da API pública do ConnectMix (CORS `*`, JWT público) com fallback local.
- **Próximos passos:** Criar `manifest.webmanifest` PWA (já há `icon-192/512`); considerar tratamento de erro/offline do stream; decidir backend no v1.0.0.

---

## Contexto acumulado

### Arquitetura

Site de página única (`index.html`) com CSS e JS inline. Sem camadas, sem módulos.
Player = tag `<audio>` + 2 funções JS (`playAudio`, `pauseAudio`). Reprodução de stream
Icecast externo. Sem build, sem bundler, sem backend.

### Stack e dependências críticas

- HTML5 + CSS3 + JS vanilla (sem dependências npm)
- Stream de áudio: `https://stream3.svrdedicado.org:8242/stream` (host externo)
- Imagens em `assets/images/` (logo PNG + frase WEBP)

### Decisões irrevogáveis

- Stream apontado diretamente para host externo (mudança exige editar `index.html`).

### Débitos técnicos conhecidos

- Nenhum teste automatizado
- `height: 100vh` fixo — layout quebra em mobile real
- Sem tratamento de erro/status do stream (offline não avisado)
- Sem acessibilidade (botões sem ARIA, sem foco)
- Sem CI/CD, sem `.gitignore`, sem `.env.example`
- Sem package.json / ferramenta de lint

---

## Sessões anteriores (log)

| Data       | Feito                                                | Artefatos                          |
|------------|------------------------------------------------------|------------------------------------|
| 2026-07-09 | Engenharia reversa + artefatos de contexto           | PROJECT_CONTEXT, REQUIREMENTS, ROADMAP, DECISIONS, FEATURES, MEMORY, CHANGELOG, README, specs/radio-player/*, registro-ia-card |
| 2026-07-09 | Logo (Pillow) + favicon/ícones + 3 templates + deploy | assets/*, scripts/process_assets.py, templates/*, index.html (glass), vercel.json, .gitignore |

---

## Registro de IA acumulado

| Sessão     | Nível | Agente     | Arquivos criados/modificados                          |
|------------|-------|------------|-------------------------------------------------------|
| 2026-07-09 | 2     | opencode   | artefatos de contexto + spec + registro (não tocou index.html) |
| 2026-07-09 | 2     | opencode   | logo/ícones, templates, glass na raiz, vercel.json, deploy Vercel |

---

*Template gerado automaticamente. Preencha os campos ao final de cada sessão.*
