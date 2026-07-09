# Super+ FM 104,9 — Architecture Decision Records

Formato: [ADR-NNN] Título (status: Proposed | Accepted | Deprecated | Superseded)

<!--
Template para ADR:

## ADR-NNN: Título
**Status:** Proposed | Accepted | Deprecated | Superseded
**Data:** YYYY-MM-DD

### Contexto
### Decisão
### Opções consideradas
### Consequências
-->

## ADR-001: Site estático sem framework (Status: Accepted)

**Status:** Accepted
**Data:** 2025 (inferido do código)

### Contexto
A rádio precisava de presença web rápida enquanto o site definitivo era planejado.

### Decisão
Usar HTML/CSS/JS puro, servido como arquivo estático, sem backend nem bundler.

### Opções consideradas
- **HTML puro (escolhida):** simples, sem build, fácil de hospedar em qualquer host estático.
- **Framework (Next.js/NestJS):** overkill para um player único no momento.

### Consequências
- Positivas: zero dependências, deploy trivial, manutenção mínima.
- Negativas: sem rotas, sem backend, difícil testar/escalar features futuras.

## ADR-002: Stream Icecast externo (Status: Accepted)

**Status:** Accepted
**Data:** 2025 (inferido do código)

### Contexto
O áudio ao vivo é servido por um provedor dedicado (SVR Dedicado).

### Decisão
Apontar a tag `<audio>` diretamente para `https://stream3.svrdedicado.org:8242/stream`.

### Consequências
- Positivas: rádio não mantém infra de áudio.
- Negativas: dependência externa; indisponibilidade do stream quebra o player sem aviso.
