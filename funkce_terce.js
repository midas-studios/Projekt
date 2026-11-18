// Vývojová větev: Náhodné generování pozice terče na ploše
function generujPoziciTerce(sirkaPlochy, vyskaPlochy) {
  const x = Math.floor(Math.random() * (sirkaPlochy - 60));
  const y = Math.floor(Math.random() * (vyskaPlochy - 60));
  return { x, y };
}

module.exports = { generujPoziciTerce };
