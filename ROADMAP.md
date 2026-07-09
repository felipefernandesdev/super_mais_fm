# Super+ FM 104,9 — Roadmap

> Roadmap reconstruído a partir do estado atual (site mínimo). Adapte conforme intenção do dono.

## Milestone 1: Site mínimo viável (v0.1.0) — FEITO
**Foco:** Player funcional no ar

- [x] Página única com player de stream
- [x] Logo e identidade visual
- [x] Controles Play/Pause

## Milestone 2: Usabilidade e robustez (v0.2.0)
**Foco:** Melhorar experiência do ouvinte

- [ ] Layout responsivo real (mobile/desktop) — corrigir `100vh` fixo
- [ ] Indicador de status do player (tocando/pausado/carregando)
- [ ] Tratamento de erro de stream (offline/indisponível)
- [ ] Acessibilidade (ARIA nos botões, foco)
- [ ] Fallback de áudio / múltiplas fontes

## Milestone 3: Site definitivo (v1.0.0)
**Foco:** Presença completa da rádio

- [ ] Páginas: programação, equipe, contato, anunciantes
- [ ] Backend leve (se necessário: notícias, pedidos musicais) — avaliar NestJS/Prisma
- [ ] CI/CD + deploy (GitHub Pages / host estático)
- [ ] Testes de caracterização do player (Playwright/Cypress)
