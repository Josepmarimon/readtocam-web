"""Dibuixa la interfície de ReadToCam fotograma a fotograma per superposar-la
al primer pla del vídeo de la portada: el panell del teleprompter a dalt, el
comptador de gravació i la barra de controls a baix.

Colors, opacitats, tipografia i proporcions són els de l'app. Mentre es grava
l'app amaga els botons de guions, play, girar i ajustos —es queden a opacitat
0— i el botó vermell passa de cercle a quadrat arrodonit, i això és el que es
dibuixa aquí.

El vídeo original té tres plans; el del mig (1,0 a 6,375 s) és el primer pla
parlant a càmera i és l'únic que porta interfície. Per refer-lo:

    mkdir -p /tmp/frames
    python3 tools/interficie-video.py /tmp/frames 5.375

    ffmpeg -i ORIGINAL.mp4 -framerate 24 -i /tmp/frames/%04d.png \
      -filter_complex "[1:v]setpts=PTS+1.0/TB[ov];\
        [0:v][ov]overlay=0:0:eof_action=pass:enable='between(t,1.0,6.375)'[v]" \
      -map "[v]" -map 0:a -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p \
      -movflags +faststart -c:a aac -b:a 96k -ac 1 assets/in-use.mp4

Sempre des de l'original, no des de l'assets/in-use.mp4 ja comprimit: si no,
es recomprimeix dues vegades.
"""
import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1280, 720
FPS = 24

ACCENT = (255, 199, 76)           # el groc de l'app: el que ja s'ha llegit
BLANC = (255, 255, 255)
VERMELL = (255, 59, 48)
FOSC = (0, 0, 0, 115)             # els fons dels controls, al 45%
OPACITAT_PANELL = 0.55
LINIA_LECTURA = 0.38
RADI = 16

# El panell acaba al 27% de l'alçada: els ulls li cauen al 31% i tapar-los
# se'n carregaria el pla, que va justament de mirar a càmera.
PANELL = (int(W * 0.27), 16, int(W * 0.73), int(H * 0.27))
COS = 34
INTERLINIA = 11

GUIO = ("Hi! Welcome to my channel! If you want to improve the way you create "
        "videos, you’ve come to the right place. I’ll show you how!")
DES_DE, FINS_A = "Welcome", "place"

SEGONS_INICIALS = 12              # el comptador ja porta una estona corrent
VELOCITAT = 43                    # punts per segon, com a la web


def tipografia(ruta, mida, pes=None):
    f = ImageFont.truetype(ruta, mida)
    if pes:
        try:
            f.set_variation_by_axes([pes])
        except Exception:
            pass
    return f


def partir(text, font, ample):
    linies, actual = [], ""
    for paraula in text.split():
        prova = f"{actual} {paraula}".strip()
        if font.getbbox(prova)[2] <= ample or not actual:
            actual = prova
        else:
            linies.append(actual)
            actual = paraula
    if actual:
        linies.append(actual)
    return linies


def cercle(d, cx, cy, r, farcit):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=farcit)


def icona_document(d, cx, cy, s):
    d.rounded_rectangle([cx - s*.42, cy - s*.55, cx + s*.42, cy + s*.55], s*.12, fill=BLANC)
    for i, y in enumerate((-.18, .04, .26)):
        ample = s*.24 if i == 2 else s*.28
        d.rectangle([cx - ample, cy + s*y, cx + ample, cy + s*y + s*.08], fill=(30, 30, 30))


def icona_play(d, cx, cy, s):
    d.polygon([(cx - s*.3, cy - s*.45), (cx + s*.42, cy), (cx - s*.3, cy + s*.45)], fill=BLANC)


def icona_camera(d, cx, cy, s):
    d.rounded_rectangle([cx - s*.55, cy - s*.34, cx + s*.55, cy + s*.42], s*.14, fill=BLANC)
    d.rectangle([cx - s*.2, cy - s*.5, cx + s*.2, cy - s*.3], fill=BLANC)
    cercle(d, cx, cy + s*.05, s*.24, (30, 30, 30))


def icona_ajustos(d, cx, cy, s):
    for i, y in enumerate((-.32, 0, .32)):
        yy = cy + s*y
        d.rectangle([cx - s*.5, yy - s*.05, cx + s*.5, yy + s*.05], fill=BLANC)
        knob = cx + s*(.18 if i % 2 == 0 else -.18)
        cercle(d, knob, yy, s*.15, BLANC)


def icona_tortuga(d, cx, cy, s):
    d.ellipse([cx - s*.5, cy - s*.22, cx + s*.28, cy + s*.28], fill=BLANC)
    cercle(d, cx + s*.36, cy + s*.02, s*.16, BLANC)


def icona_llebre(d, cx, cy, s):
    d.ellipse([cx - s*.45, cy - s*.1, cx + s*.3, cy + s*.32], fill=BLANC)
    cercle(d, cx + s*.36, cy, s*.15, BLANC)
    d.polygon([(cx + s*.24, cy - s*.14), (cx + s*.34, cy - s*.55), (cx + s*.44, cy - s*.12)], fill=BLANC)


def main(desti, durada):
    font = tipografia("/System/Library/Fonts/SFNSRounded.ttf", COS, 600)
    mono = tipografia("/System/Library/Fonts/SFNSMono.ttf", 22)
    petita = tipografia("/System/Library/Fonts/SFNSRounded.ttf", 20, 600)

    x0, y0, x1, y1 = PANELL
    ample_panell, alt_panell = x1 - x0, y1 - y0
    linies = partir(GUIO, font, ample_panell - 64)
    alt_linia = COS + INTERLINIA
    centres = [i * alt_linia + alt_linia / 2 for i in range(len(linies))]

    i_inici = next(i for i, l in enumerate(linies) if DES_DE in l)
    i_final = next(i for i, l in enumerate(linies) if FINS_A in l)
    print("línies:", *[f"  {i}: {l}" for i, l in enumerate(linies)], sep="\n")

    linia_y = alt_panell * LINIA_LECTURA
    inici, final = centres[i_inici], centres[i_final]
    total = int(round(durada * FPS))

    for n in range(total):
        avanc = n / max(1, total - 1)
        desplacament = inici + (final - inici) * avanc

        capa = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        d = ImageDraw.Draw(capa)

        # ---- panell del teleprompter ----
        d.rounded_rectangle(PANELL, RADI, fill=(0, 0, 0, int(255 * OPACITAT_PANELL)))

        text = Image.new("RGBA", (ample_panell, alt_panell), (0, 0, 0, 0))
        dt = ImageDraw.Draw(text)
        for i, linia in enumerate(linies):
            y = linia_y - desplacament + centres[i]
            if y < -alt_linia or y > alt_panell + alt_linia:
                continue
            color = ACCENT if centres[i] < desplacament - 1 else BLANC
            w = dt.textlength(linia, font=font)
            dt.text(((ample_panell - w) / 2, y - COS * 0.62), linia, font=font, fill=color)

        fos = Image.new("L", (1, alt_panell), 255)
        alcada_fos = int(COS * 1.6)
        for i in range(alcada_fos):
            v = int(255 * i / alcada_fos)
            fos.putpixel((0, i), v)
            fos.putpixel((0, alt_panell - 1 - i), v)
        mascara = fos.resize((ample_panell, alt_panell))
        text = Image.composite(text, Image.new("RGBA", text.size, (0, 0, 0, 0)), mascara)
        capa.alpha_composite(text, (x0, y0))

        ly = y0 + linia_y
        d.polygon([(x0 + 4, ly - 9), (x0 + 18, ly), (x0 + 4, ly + 9)], fill=ACCENT + (230,))
        d.polygon([(x1 - 4, ly - 9), (x1 - 18, ly), (x1 - 4, ly + 9)], fill=ACCENT + (230,))
        d.line([(x0 + 18, ly), (x1 - 18, ly)], fill=ACCENT + (60,), width=1)

        # ---- comptador de gravació ----
        segons = SEGONS_INICIALS + n / FPS
        rellotge = f"{int(segons)//60:02d}:{int(segons)%60:02d}"
        cx, cy = 54, 44
        d.rounded_rectangle([cx - 14, cy - 19, cx + 90, cy + 19], 19, fill=FOSC)
        cercle(d, cx, cy, 6, VERMELL)
        d.text((cx + 14, cy - 12), rellotge, font=mono, fill=BLANC)

        # ---- barra de velocitat ----
        pill_w, pill_h = 380, 40
        px, py = (W - pill_w) // 2, H - 128
        d.rounded_rectangle([px, py, px + pill_w, py + pill_h], pill_h // 2, fill=FOSC)
        icona_tortuga(d, px + 26, py + pill_h/2, 20)
        icona_llebre(d, px + pill_w - 64, py + pill_h/2, 20)
        rail_x0, rail_x1 = px + 52, px + pill_w - 88
        rail_y = py + pill_h / 2
        d.rounded_rectangle([rail_x0, rail_y - 2, rail_x1, rail_y + 2], 2, fill=(255, 255, 255, 70))
        fraccio = (VELOCITAT - 10) / (170 - 10)
        knob = rail_x0 + (rail_x1 - rail_x0) * fraccio
        d.rounded_rectangle([rail_x0, rail_y - 2, knob, rail_y + 2], 2, fill=ACCENT)
        cercle(d, knob, rail_y, 8, BLANC)
        d.text((px + pill_w - 40, py + 10), str(VELOCITAT), font=petita, fill=BLANC)

        # ---- botó de gravar ----
        # Mentre es grava, l'app deixa només aquest botó: els de guions, play,
        # girar i ajustos es queden a opacitat 0. I el vermell passa de cercle
        # a quadrat arrodonit, que és com es veu que està enregistrant.
        bx, by, r = W/2, H - 60, 34
        d.ellipse([bx - r, by - r, bx + r, by + r], outline=BLANC + (245,), width=5)
        q = 14
        d.rounded_rectangle([bx - q, by - q, bx + q, by + q], 7, fill=VERMELL + (255,))

        capa.save(f"{desti}/{n:04d}.png")

    print("fotogrames escrits:", total)


if __name__ == "__main__":
    main(sys.argv[1], float(sys.argv[2]))
