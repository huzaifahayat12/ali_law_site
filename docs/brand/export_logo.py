"""Export final Ali Law Associate logo: transparent PNGs + size set."""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\Hp\.cursor\projects\c-Users-Hp-Documents-a-projects-new-ali-law-website"
    r"\assets\c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"3b50bc5ebe675dd3a0f785030357bfab_images_image-25497b82-a299-4c97-83d0-42f5f2633deb.png"
)
ROOT = Path(__file__).resolve().parent / "logo"
MASTER = ROOT / "master"
LOCKUP = ROOT / "lockup"
MARK = ROOT / "mark"
FAVICON = ROOT / "favicon"


def is_background(r: int, g: int, b: int, a: int) -> bool:
    if a < 10:
        return True
    if r >= 245 and g >= 245 and b >= 245:
        return True
    # Soft white / light fringe (not gold — gold is ~#B1976B)
    if r >= 230 and g >= 230 and b >= 230 and abs(r - g) < 8 and abs(g - b) < 8:
        return True
    return False


def make_transparent(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out_px = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if is_background(r, g, b, a):
                out_px[x, y] = (0, 0, 0, 0)
            else:
                out_px[x, y] = (r, g, b, a)
    return out


def crop_with_padding(img: Image.Image, pad: int = 48) -> Image.Image:
    bbox = img.getbbox()
    if not bbox:
        raise RuntimeError("No content after transparency pass")
    w, h = img.size
    l, t, r, b = bbox
    return img.crop(
        (
            max(0, l - pad),
            max(0, t - pad),
            min(w, r + pad),
            min(h, b + pad),
        )
    )


def extract_mark(lockup: Image.Image) -> Image.Image:
    """Split left icon from wordmark using column alpha density gap."""
    cw, ch = lockup.size
    alpha = lockup.split()[-1]
    col_density: list[int] = []
    for x in range(cw):
        s = 0
        for y in range(ch):
            if alpha.getpixel((x, y)) > 20:
                s += 1
        col_density.append(s)

    start = next(i for i, d in enumerate(col_density) if d > 5)
    gap_start: int | None = None
    run = 0
    for i in range(start, cw):
        if col_density[i] < max(3, int(ch * 0.02)):
            run += 1
            if run > 20:
                gap_start = i - run + 1
                break
        else:
            run = 0

    if gap_start is None:
        gap_start = int(cw * 0.28)

    mark = lockup.crop((max(0, start - 16), 0, min(cw, gap_start + 8), ch))
    mb = mark.getbbox()
    if mb:
        mpad = 24
        ml, mt, mr, mb_ = mb
        mark = mark.crop(
            (
                max(0, ml - mpad),
                max(0, mt - mpad),
                min(mark.width, mr + mpad),
                min(mark.height, mb_ + mpad),
            )
        )
    return mark


def to_square(img: Image.Image) -> Image.Image:
    mw, mh = img.size
    side = max(mw, mh)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(img, ((side - mw) // 2, (side - mh) // 2), img)
    return square


def resize_width(im: Image.Image, width: int) -> Image.Image:
    w0, h0 = im.size
    height = max(1, round(h0 * (width / w0)))
    return im.resize((width, height), Image.Resampling.LANCZOS)


def main() -> None:
    if not SRC.exists():
        raise FileNotFoundError(f"Source logo not found: {SRC}")

    for d in (MASTER, LOCKUP, MARK, FAVICON):
        d.mkdir(parents=True, exist_ok=True)

    shutil.copy2(SRC, MASTER / "ali-law-associate-original.png")

    transparent = make_transparent(Image.open(SRC))
    lockup = crop_with_padding(transparent, pad=48)
    lockup.save(MASTER / "ali-law-associate-lockup.png", "PNG", optimize=True)
    print(f"Master lockup: {lockup.size}")

    white_bg = Image.new("RGBA", lockup.size, (255, 255, 255, 255))
    Image.alpha_composite(white_bg, lockup).convert("RGB").save(
        MASTER / "ali-law-associate-lockup-white.png", "PNG", optimize=True
    )

    mark = extract_mark(lockup)
    mark.save(MASTER / "ali-law-associate-mark.png", "PNG", optimize=True)
    print(f"Master mark: {mark.size}")

    square = to_square(mark)
    square.save(MASTER / "ali-law-associate-mark-square.png", "PNG", optimize=True)

    for tw in (2000, 1600, 1200, 800, 600, 400, 320, 240):
        resized = resize_width(lockup, tw)
        resized.save(LOCKUP / f"ali-law-associate-lockup-{tw}w.png", "PNG", optimize=True)
        print(f"lockup {tw}w -> {resized.size}")

    for s in (512, 256, 180, 128, 96, 64, 48, 32):
        square.resize((s, s), Image.Resampling.LANCZOS).save(
            MARK / f"ali-law-associate-mark-{s}.png", "PNG", optimize=True
        )
        print(f"mark {s}")

    for s in (16, 32, 48):
        square.resize((s, s), Image.Resampling.LANCZOS).save(
            FAVICON / f"favicon-{s}x{s}.png", "PNG", optimize=True
        )

    square.resize((180, 180), Image.Resampling.LANCZOS).save(
        FAVICON / "apple-touch-icon.png", "PNG", optimize=True
    )
    square.resize((192, 192), Image.Resampling.LANCZOS).save(
        FAVICON / "icon-192.png", "PNG", optimize=True
    )
    square.resize((512, 512), Image.Resampling.LANCZOS).save(
        FAVICON / "icon-512.png", "PNG", optimize=True
    )

    print("DONE ->", ROOT)


if __name__ == "__main__":
    main()
