/* El teleprompter de la portada funciona de veritat i es pot fer anar: el
   control de velocitat és el mateix que a l'app i tocar el text l'atura.
   Provar-ho val més que llegir què fa. */

(function () {
  const track = document.querySelector('.prompter-track');
  const panel = document.querySelector('.prompter');
  const slider = document.querySelector('.speed-rail');
  const readout = document.querySelector('.speed b');
  if (!track || !panel) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // El groc de l'app, no el lima de la pàgina: dins del telèfon manen els seus colors.
  const tint = getComputedStyle(document.querySelector('.phone'))
    .getPropertyValue('--app-accent').trim() || '#ffc74c';

  const LINE = 0.38;   // on cau la línia de lectura dins del panell
  const SCALE = 0.67;  // 270 px de maquetat per 402 pt de pantalla real

  let offset = 0;
  let last = null;
  let paused = reduced;
  let speed = 43 * SCALE;
  let cycle = 0;

  /* El guió es repeteix darrere seu tantes vegades com calgui per omplir el
     panell. Així el bucle es tanca restant una volta a l'avanç i no hi ha ni
     salt ni estona amb el panell buit esperant que el text hi torni a entrar. */
  const source = [...track.children];

  function fill() {
    track.querySelectorAll('[data-repeat]').forEach(n => n.remove());
    const first = source[0];
    let guard = 0;
    do {
      source.forEach(node => {
        const copy = node.cloneNode(true);
        copy.dataset.repeat = '1';
        copy.removeAttribute('data-i18n');   // el text ja ve traduït de l'original
        track.appendChild(copy);
      });
      // La volta és el que separa l'original de la seva primera còpia: inclou
      // l'espai entre paràgrafs sense haver-lo de calcular a part.
      cycle = track.querySelector('[data-repeat]').offsetTop - first.offsetTop;
    } while (cycle > 0 && track.scrollHeight < cycle + panel.clientHeight && ++guard < 4);
  }

  /* Cada línia es tenyeix segons on és respecte de la línia de lectura. Aquí
     n'hi ha quatre, així que fer-ho per element surt més barat que muntar-hi
     un degradat amb barreja com fa l'app. */
  function paint() {
    const line = panel.clientHeight * LINE;
    const panelTop = panel.getBoundingClientRect().top;
    track.querySelectorAll('p').forEach(p => {
      const box = p.getBoundingClientRect();
      const centre = box.top - panelTop + box.height / 2;
      p.style.color = centre < line ? tint : '#ffffff';
      p.style.opacity = centre < 0 ? '0.3' : '1';
    });
  }

  function draw() {
    track.style.transform = `translateY(${panel.clientHeight * LINE - offset}px)`;
    paint();
  }

  function loop(now) {
    if (last === null) last = now;
    const dt = (now - last) / 1000;
    last = now;

    if (!paused) {
      offset += speed * dt;
      // Una volta enrere i el text queda exactament on era: el bucle no es veu.
      while (cycle > 0 && offset >= cycle) offset -= cycle;
      draw();
    }
    requestAnimationFrame(loop);
  }

  // ---- velocitat, amb el mateix rang que l'app: 10 a 170 punts per segon ----

  function syncSpeed() {
    const value = Number(slider.value);
    const pct = (value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--pct', pct + '%');
    readout.textContent = String(value);
    speed = value * SCALE;
  }

  if (slider && readout) {
    slider.addEventListener('input', syncSpeed);
    // Arrossegar el control no ha d'aturar el text ni fer scroll a la pàgina.
    slider.addEventListener('pointerdown', e => e.stopPropagation());
    syncSpeed();
  }

  // ---- tocar el text l'atura i arrossegar-lo el recol·loca, com a l'app ----

  function togglePause() {
    paused = !paused;
    panel.dataset.paused = String(paused);
    last = null;
  }

  let dragFrom = null;   // { y, offset }
  let dragged = false;

  panel.addEventListener('pointerdown', e => {
    // Al mòbil el dit ha de poder fer scroll a la pàgina, així que allà el
    // panell només s'atura amb un toc.
    if (e.pointerType === 'touch') return;
    dragFrom = { y: e.clientY, offset };
    dragged = false;
    panel.setPointerCapture(e.pointerId);
  });

  panel.addEventListener('pointermove', e => {
    if (!dragFrom) return;
    const moved = e.clientY - dragFrom.y;
    if (!dragged && Math.abs(moved) < 4) return;   // encara pot ser un clic
    dragged = true;
    offset = dragFrom.offset - moved;
    if (cycle > 0) offset = ((offset % cycle) + cycle) % cycle;   // amunt o avall, sempre dins la volta
    draw();
  });

  function endDrag(e) {
    if (!dragFrom) return;
    if (panel.hasPointerCapture(e.pointerId)) panel.releasePointerCapture(e.pointerId);
    dragFrom = null;
    last = null;
  }
  panel.addEventListener('pointerup', endDrag);
  panel.addEventListener('pointercancel', endDrag);

  // Arrossegar recol·loca; un clic net atura o reprèn.
  panel.addEventListener('click', () => { if (!dragged) togglePause(); });

  function restart() {
    offset = 0;
    last = null;
    fill();
    draw();
  }

  // En canviar d'idioma els textos canvien de llargada: cal refer les còpies
  // i tornar a mesurar la volta.
  document.addEventListener('languagechange', () => requestAnimationFrame(restart));
  window.addEventListener('resize', () => requestAnimationFrame(restart));

  restart();
  panel.dataset.paused = String(paused);
  requestAnimationFrame(loop);
})();
