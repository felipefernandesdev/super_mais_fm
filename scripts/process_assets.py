#!/usr/bin/env python3
"""Processa os assets da Super+ FM 104,9.

Gera a partir de assets/images/logo_site.png:
  - logo_transparent.png : fundo cinza-claro removido (transparente)
  - logo_organized.png   : cópia normalizada (re-encode, sem perdas de metadados)
  - favicon.ico          : multi-resolução (16..256) em quadrado com fundo navy
  - icon-192.png         : ícone Android/PWA 192x192
  - icon-512.png         : ícone Android/PWA 512x512
  - apple-touch-icon.png : 180x180 (iOS)

O fundo navy usado nos ícones vem da paleta da marca (0,32,64).
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageColor

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "images" / "logo_site.png"
OUT = ROOT / "assets" / "images"
BG = ImageColor.getrgb("#0d1b2a")  # navy da paleta (gradiente do site)
WHITE_BG = (255, 255, 255)         # fundo branco original da logo
TOLERANCE = 6                      # tolerância para remover o branco (249..255)


def key_background(im: Image.Image) -> Image.Image:
    """Torna transparente tudo que está próximo do fundo cinza-claro."""
    im = im.convert("RGBA")
    pix = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pix[x, y]
            if (
                abs(r - WHITE_BG[0]) <= TOLERANCE
                and abs(g - WHITE_BG[1]) <= TOLERANCE
                and abs(b - WHITE_BG[2]) <= TOLERANCE
            ):
                pix[x, y] = (r, g, b, 0)
    return im


def fit_in_square(im: Image.Image, size: int, background) -> Image.Image:
    """Centraliza a logo (mantendo proporção) num canvas quadrado de `background`."""
    canvas = Image.new("RGBA", (size, size), background)
    im = im.convert("RGBA")
    # cobre a maior parte do quadrado, deixando margem de 12%
    target = int(size * 0.76)
    ratio = target / max(im.size)
    new = im.resize((max(1, int(im.width * ratio)), max(1, int(im.height * ratio))), Image.LANCZOS)
    canvas.alpha_composite(new, ((size - new.width) // 2, (size - new.height) // 2))
    return canvas


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    base = Image.open(SRC).convert("RGBA")

    transparent = key_background(base)
    transparent.save(OUT / "logo_transparent.png", "PNG")
    print("gerado:", OUT / "logo_transparent.png")

    base.convert("RGBA").save(OUT / "logo_organized.png", "PNG")
    print("gerado:", OUT / "logo_organized.png")

    # favicon multi-resolução (quadrado, fundo navy)
    fav = Image.new("RGBA", (256, 256))
    for size in (16, 32, 48, 64, 128, 256):
        fav = fit_in_square(base, size, (*BG, 255))
        fav.save(
            ROOT / "favicon.ico",
            sizes=[(s, s) for s in (16, 32, 48, 64, 128, 256)],
            append=True if size != 16 else False,
        )
    print("gerado:", ROOT / "favicon.ico")

    for name, size in (("icon-192.png", 192), ("icon-512.png", 512), ("apple-touch-icon.png", 180)):
        fit_in_square(base, size, (*BG, 255)).save(OUT / name, "PNG")
        print("gerado:", OUT / name)


if __name__ == "__main__":
    main()
