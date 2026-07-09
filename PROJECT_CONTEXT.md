# Super+ FM 104,9 — Contexto

> Site institucional/estático da rádio Super+ FM 104,9 com player de áudio ao vivo (streaming).

## Propósito

Disponibilizar uma página web onde ouvintes possam ouvir a transmissão ao vivo da
Super+ FM 104,9 diretamente do navegador, com identidade visual da rádio.

## Problema

A rádio precisava de uma presença web mínima e funcional para transmitir seu áudio
online enquanto o site definitivo ainda estava em planejamento.

## Solução

Página única (`index.html`) em HTML/CSS/JS puro, sem build, sem backend. O player
usa a tag `<audio>` apontando para um endpoint de stream Icecast externo
(`stream3.svrdedicado.org:8242/stream`). Controles Play/Pause via funções JS.

## Domínios

| Domínio | Descrição |
|---------|-----------|
| **Rádio (Player)** | Reprodução do stream ao vivo no navegador |
| **Identidade visual** | Logo, frases promocionais e rodapé da rádio |

## Stack

- **Frontend:** HTML5 + CSS3 (inline) + JavaScript vanilla
- **Hospedagem de áudio:** Stream Icecast externo (SVR Dedicado)
- **Sem:** framework, bundler, backend, testes automatizados, CI

## Métricas de Sucesso

- Ouvinte consegue iniciar/pausar o áudio em 1 clique
- Página carrega em qualquer dispositivo (mobile/desktop)
- Disponibilidade do stream externo refletida no player
