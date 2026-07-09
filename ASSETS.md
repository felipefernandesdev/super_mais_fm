# Super+ FM 104,9 — Documentação de Assets

> Gerado em 2026-07-09 via engenharia reversa + processamento Python/Pillow
> (`scripts/process_assets.py`).

## Análise da logo original

| Atributo | Valor |
|----------|-------|
| Arquivo | `assets/images/logo_site.png` |
| Dimensões | 960 × 540 px (16:9) |
| Modo | RGBA (fundo opaco branco puro `255,255,255`) |
| Cobertura de fundo | ~69,9% da imagem é branco (removível) |
| Paleta de marca (inferida) | navy `#0d1b2a` `(0,32,64)`, laranja `(192,96,0)`, azul `(0,96,160)`, teal `(0,128,160)` |

> **Observação:** o modelo de IA não consegue visualizar a imagem; a análise é feita
> por pixels (bounding box, cores dominantes, histograma). A remoção de fundo foi
> calibrada para o branco real `(255,255,255)` com tolerância 6 (remove 249–255).

## Assets gerados

| Arquivo | Tamanho | Descrição | Uso |
|---------|---------|-----------|-----|
| `assets/images/logo_transparent.png` | 960×540 | Logo com fundo branco removido (transparente) | Usada no `index.html` (combina com o gradiente) |
| `assets/images/logo_organized.png` | 960×540 | Cópia normalizada/re-encode da original | Fallback opaco |
| `assets/images/logo_site.png` | 960×540 | **Original** (preservada, não alterada) | Referência |
| `favicon.ico` | 16/32/48/64/128/256 | Favicon multi-resolução, fundo navy | `<link rel="icon">` |
| `assets/images/icon-192.png` | 192×192 | Ícone PWA/Android | manifest / `<link rel="icon" sizes=192>` |
| `assets/images/icon-512.png` | 512×512 | Ícone PWA/Android | manifest / `<link rel="icon" sizes=512>` |
| `assets/images/apple-touch-icon.png` | 180×180 | Ícone iOS | `<link rel="apple-touch-icon">` |
| `assets/images/300x100_frase1.webp` | 300×100 | Frase promocional (inalterada) | Banner no `index.html` |

## Como os ícones são compostos

Os ícones quadrados (favicon, icon-*, apple-touch) centralizam a logo 16:9 dentro de
um canvas quadrado com **fundo navy `#0d1b2a`** (mesma cor do gradiente do site),
ocupando ~76% do quadrado (margem de 12%). A logo é redimensionada com `LANCZOS`.

## Reproduzir

```bash
python3 scripts/process_assets.py
```

Requer Pillow: `pip install pillow`. O script é idempotente (regera os arquivos).

## Integration no index.html

- `<link rel="icon" href="favicon.ico">`
- `<link rel="apple-touch-icon" href="./assets/images/apple-touch-icon.png">`
- `<link rel="icon" sizes="192x192" href="./assets/images/icon-192.png">`
- `<link rel="icon" sizes="512x512" href="./assets/images/icon-512.png">`
- `<img src="./assets/images/logo_transparent.png">` (logo agora transparente)

## Pendências / atenção humana

- **Próximo passo recomendado:** criar `manifest.webmanifest` PWA apontando para
  `icon-192.png`/`icon-512.png`.
- A remoção de fundo usa tolerância fixa; se a logo tiver elementos claros próximos
  do branco, podem ser cortados (revisar `logo_transparent.png` visualmente).
- Se a cor navy do ícone não agradar, ajustar `BG` no script.
