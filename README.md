# ReadToCam — web comercial

Lloc estàtic de l'app ReadToCam. Sense build, sense dependències: HTML, CSS i
JavaScript planer. Es desplega sol a Vercel a cada `push`.

```
index.html      portada
support.html    suport i preguntes freqüents  → URL de suport per a l'App Store
privacy.html    política de privadesa         → URL de privadesa per a l'App Store
css/style.css
js/i18n.js      tots els textos, en anglès, català i castellà
js/main.js      el teleprompter animat de la portada
assets/         captures de l'app
```

## Idiomes

Cap text visible va escrit a l'HTML: tot passa per `data-i18n="clau"` i viu a
`js/i18n.js`, amb variants `en` / `ca` / `es`. L'idioma es detecta del navegador
i cau a l'anglès; la tria de l'usuari es recorda a `localStorage`.

Per afegir text: crea la clau amb els tres idiomes i posa `data-i18n` a l'element.

## Provar-ho en local

```bash
python3 -m http.server 8766
```

## Pendent

- Substituir les captures per les definitives, fetes amb l'app en anglès.
- El botó oficial de l'App Store, dels recursos de màrqueting d'Apple.
- L'enllaç de descàrrega apunta a `id6797649125`, que funcionarà quan l'app
  es publiqui.
