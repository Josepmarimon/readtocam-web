/* El teleprompter de la portada funciona de veritat: el text es desplaça a
   velocitat constant i el que ja ha passat per la línia de lectura queda
   tenyit, igual que a l'app. Ensenyar-ho val més que explicar-ho. */

(function () {
  const track = document.querySelector('.prompter-track');
  const panel = document.querySelector('.prompter');
  if (!track || !panel) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lime = getComputedStyle(document.documentElement).getPropertyValue('--lime').trim();
  const SPEED = 26;          // punts per segon; a l'app es tria, aquí és calmat
  const LINE = 0.38;         // on cau la línia de lectura dins del panell

  let offset = 0;
  let last = null;

  /* Cada línia es tenyeix segons on és respecte de la línia de lectura. A la
     pàgina n'hi ha quatre, així que fer-ho per element surt més barat que
     muntar-hi un degradat amb barreja. */
  function paint() {
    const line = panel.clientHeight * LINE;
    const panelTop = panel.getBoundingClientRect().top;
    track.querySelectorAll('p').forEach(p => {
      const box = p.getBoundingClientRect();
      const centre = box.top - panelTop + box.height / 2;
      p.style.color = centre < line ? lime : '#ffffff';
      p.style.opacity = centre < 0 ? '0.3' : '1';
    });
  }

  function loop(now) {
    if (last === null) last = now;
    offset += SPEED * (now - last) / 1000;
    last = now;

    // En arribar al final torna a començar una mica per sobre de la línia.
    if (track.scrollHeight > 0 && offset > track.scrollHeight) offset = 0;

    track.style.transform = `translateY(${panel.clientHeight * LINE - offset}px)`;
    paint();
    requestAnimationFrame(loop);
  }

  let running = false;
  function start() {
    offset = 0;
    last = null;
    track.style.transform = `translateY(${panel.clientHeight * LINE}px)`;
    paint();
    if (!reduced && !running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }

  // En canviar d'idioma els textos canvien de llargada: es recomença per no
  // deixar el guió a mig aire.
  document.addEventListener('languagechange', () => requestAnimationFrame(start));
  window.addEventListener('resize', paint);

  start();
})();
