// Erzeugt public/og-image.png (Social-Media-Vorschaubild) aus SVG
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#0B1220"/>
<g transform="translate(90,90) scale(2.2)"><rect width="48" height="48" rx="11" fill="#162033"/><path d="M11 13h16l-4.5 11v11h-7V24z" fill="#fff"/><rect x="30" y="13" width="8" height="8" rx="2" fill="#2DD4BF"/><rect x="30" y="27" width="8" height="8" rx="2" fill="#fff" fill-opacity=".28"/></g>
<text x="90" y="340" font-family="Segoe UI,Arial,sans-serif" font-size="78" font-weight="800" fill="#fff" letter-spacing="-2">Wirksamkeit</text>
<text x="90" y="430" font-family="Segoe UI,Arial,sans-serif" font-size="78" font-weight="800" fill="#fff" letter-spacing="-2">durch <tspan fill="#2DD4BF">Klarheit.</tspan></text>
<text x="90" y="530" font-family="Segoe UI,Arial,sans-serif" font-size="30" fill="#94A3B8">digital-schreiner.ch · Schreinerhandwerk Schweiz</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('og-image.png erstellt');
