// Erzeugt Logo-Dateien (SVG + PNG), Favicon und Social-Media-Bild.
// Schrift wird in Pfade umgewandelt -> Logos sehen auf jedem Gerät identisch aus.
// Ausführen: npm install --no-save opentype.js @fontsource/inter && node scripts/brand.mjs
import opentype from 'opentype.js';
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const load = (w) => {
  const b = readFileSync(`node_modules/@fontsource/inter/files/inter-latin-${w}-normal.woff`);
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
};
const F = { 400: load(400), 700: load(700), 800: load(800) };

const INK = '#0B1220';
const TEAL = '#0D9488';
const BRIGHT = '#2DD4BF';

function text(str, weight, x, y, size, fill, tracking = 0) {
  const font = F[weight];
  const glyphs = [...str].map((ch) => font.charToGlyph(ch));
  const scale = size / font.unitsPerEm;
  let cx = x;
  let d = '';
  glyphs.forEach((g, i) => {
    d += g.getPath(cx, y, size).toPathData(2);
    let adv = g.advanceWidth * scale;
    if (i < glyphs.length - 1) adv += font.getKerningValue(g, glyphs[i + 1]) * scale;
    cx += adv + tracking;
  });
  return { svg: `<path fill="${fill}" d="${d}"/>`, width: cx - x - tracking };
}

// Bildmarke: Schreinerwinkel (Präzision, Handwerk) + ausgerichteter Block (digital, Klarheit)
const mark = ({ bg = INK, fg = '#fff', accent = BRIGHT } = {}) =>
  `<rect width="48" height="48" rx="11" fill="${bg}"/>` +
  `<path d="M12 12h6v18h18v6H12z" fill="${fg}"/>` +
  `<rect x="21" y="17" width="10" height="10" rx="2" fill="${accent}"/>`;

function wordmarkLogo({ markOpts, c1, c2 }) {
  const size = 26, x = 62, y = 33.5, tr = -0.4;
  const a = text('digital', 700, x, y, size, c1, tr);
  const b = text('schreiner', 400, x + a.width + tr, y, size, c2, tr);
  const w = Math.ceil(x + a.width + b.width + 4);
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 48" width="${w * 4}" height="192">${mark(markOpts)}${a.svg}${b.svg}</svg>`, w };
}

mkdirSync('public/brand', { recursive: true });
const files = {
  'public/favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">${mark()}</svg>`,
  'public/brand/logo-mark.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512">${mark()}</svg>`,
  'public/brand/logo.svg': wordmarkLogo({ c1: INK, c2: TEAL }).svg,
  'public/brand/logo-white.svg': wordmarkLogo({ markOpts: { bg: '#fff', fg: INK, accent: TEAL }, c1: '#fff', c2: BRIGHT }).svg,
};
for (const [f, svg] of Object.entries(files)) writeFileSync(f, svg + '\n');
for (const n of ['logo', 'logo-white', 'logo-mark']) {
  await sharp(`public/brand/${n}.svg`).png().toFile(`public/brand/${n}.png`);
}

// Social-Media-Vorschaubild 1200x630
const h1 = text('Wirksamkeit', 800, 90, 340, 84, '#fff', -2.5);
const h2a = text('durch ', 800, 90, 440, 84, '#fff', -2.5);
const h2b = text('Klarheit.', 800, 90 + h2a.width, 440, 84, BRIGHT, -2.5);
const sub = text('digital-schreiner.ch  ·  Schreinerhandwerk Schweiz', 400, 90, 535, 30, '#94A3B8');
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${INK}"/>
<g transform="translate(90,90) scale(2.2)">${mark({ bg: '#162033' })}</g>
${h1.svg}${h2a.svg}${h2b.svg}${sub.svg}</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
console.log('Logos, Favicon und og-image.png erstellt');
