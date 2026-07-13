# Ali Law Associate — Final Logo

**Status:** Locked (stakeholder final)  
**Palette:** Near-black `#1A1A1A` · Gold `#B1976B` · Transparent PNG

## Lockup

Scales of justice (left) + `ALI LAW ASSOCIATE` wordmark + gold underline under **LAW**.

## Folder guide

| Folder | Use |
|--------|-----|
| `master/` | Source of truth (transparent lockup + mark + white-bg print) |
| `lockup/` | Full logo at common widths (nav, header, print) |
| `mark/` | Icon-only square mark (avatars, small UI) |
| `favicon/` | Browser / PWA icons |

## Primary files (use these)

- **Website header / footer:** `lockup/ali-law-associate-lockup-800w.png` or `1200w`
- **Transparent master:** `master/ali-law-associate-lockup.png`
- **Favicon:** `favicon/favicon-32x32.png`
- **PWA / app:** `favicon/icon-192.png`, `favicon/icon-512.png`
- **Apple touch:** `favicon/apple-touch-icon.png`

## Rules

- Prefer transparent PNGs on colored / photo backgrounds.
- Use `*-white.png` only for print on white paper.
- Do not recolor the gold accent away from `#B1976B`.
- Do not stretch; scale proportionally only.

## Regenerate sizes

```bash
python docs/brand/export_logo.py
```
