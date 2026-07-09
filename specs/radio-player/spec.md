# Feature: Player de Rádio ao Vivo

- **Card:** super_mais_fm / FEATURES#1
- **Tier:** Rápido
- **Nível de validação:** P
- **Status:** aprovada (reconstruída por engenharia reversa)

## Contexto e objetivo
Ouvintes da Super+ FM 104,9 querem ouvir a transmissão ao vivo pelo navegador, com um
controle simples de Play/Pause, sem instalar nada. A feature já existe em `index.html`.

## Atores
- Ouvinte (usuário final do site)

## Regras de negócio
1. O player reproduz exclusivamente o stream `https://stream3.svrdedicado.org:8242/stream`
2. O botão Play inicia a reprodução do áudio
3. O botão Pause interrompe a reprodução
4. A página exibe logo, título, frase promocional e rodapé da rádio
5. Não há backend: o áudio vem de host externo (Icecast)

## Contrato de API (API-first)
Esta feature **não** expõe API própria. O único contrato externo é o consumo do stream:

- `GET https://stream3.svrdedicado.org:8242/stream` — stream de áudio Icecast
  - Sucesso: fluxo de áudio (`audio/mpeg` ou `audio/aac`)
  - Erro: indisponibilidade do host externo (sem tratamento no cliente hoje)

## Critérios de aceite (BDD)
Os cenários executáveis estão em [`radio-player.feature`](./radio-player.feature). Resumo:
- [x] Ouvinte inicia a reprodução (Play)
- [x] Ouvinte pausa a reprodução (Pause)
- [ ] Ouvinte recebe aviso quando o stream está indisponível (FORA DE ESCOPO atual)
- [ ] Layout adapta-se a mobile (FORA DE ESCOPO atual)

## Fora de escopo
- Backend, autenticação, páginas adicionais (programação/contato)
- Tratamento de erro/offline do stream
- Testes automatizados (ver gap em ROADMAP)

## Dependências
- Host de stream externo (`stream3.svrdedicado.org:8242`) — fora do controle do projeto

## Decisões / observações
- ADR-001 (site estático) e ADR-002 (stream externo) em `DECISIONS.md`
- Requisitos com **[suposição]** em `REQUIREMENTS.md` aguardam validação do dono
