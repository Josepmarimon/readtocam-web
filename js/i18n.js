/* ReadToCam — textos en anglès, català i castellà.
   Cap text visible va escrit a l'HTML: tot passa per data-i18n. */

const T = {
  'nav.download':     { en: 'Download free',       ca: 'Descarrega gratis',   es: 'Descargar gratis' },

  'hero.title.1':     { en: 'Read your script.',    ca: 'Llegeix el guió.',    es: 'Lee tu guion.' },
  'hero.title.2':     { en: 'Record your video.',   ca: 'Grava el teu vídeo.', es: 'Graba tu vídeo.' },
  'hero.title.3':     { en: 'Publish it anywhere.', ca: 'Publica’l on vulguis.', es: 'Súbelo donde quieras.' },
  'hero.title2':      { en: 'Look at the camera while you read.',
                        ca: 'Mira a càmera mentre llegeixes.',
                        es: 'Mira a cámara mientras lees.' },
  'hero.lede':        { en: 'ReadToCam puts your script at the top of the screen, right next to the front lens, and it scrolls by itself. You don’t have to memorise anything, and you don’t have to start over every time you stumble.',
                        ca: 'ReadToCam et posa el guió a dalt de la pantalla, tocant a l’objectiu frontal, i es desplaça sol. No has de memoritzar res, ni tornar a començar cada cop que t’encalles.',
                        es: 'ReadToCam te pone el guion arriba de la pantalla, pegado al objetivo frontal, y se desplaza solo. No tienes que memorizar nada, ni volver a empezar cada vez que te atascas.' },
  'hero.alt':         { en: 'Someone recording herself at home, reading a script while looking at the camera',
                        ca: 'Algú gravant-se a casa, llegint un guió mentre mira a càmera',
                        es: 'Alguien grabándose en casa, leyendo un guion mientras mira a cámara' },
  'video.sound':      { en: 'Turn the sound on', ca: 'Activa el so', es: 'Activar el sonido' },
  'video.mute':       { en: 'Turn the sound off', ca: 'Desactiva el so', es: 'Desactivar el sonido' },
  'badge.alt':        { en: 'Download on the App Store',
                        ca: 'Descarregar a l’App Store',
                        es: 'Consíguelo en el App Store' },
  'hero.trial':       { en: '7 days free',          ca: '7 dies gratis',        es: '7 días gratis' },
  'hero.after':       { en: 'then €1.49 a month',   ca: 'i després 1,49 € al mes', es: 'y después 1,49 € al mes' },
  'hero.noaccount':   { en: 'No account',           ca: 'Sense compte',        es: 'Sin cuenta' },
  'hero.nothing':     { en: 'Nothing leaves your phone', ca: 'Res no surt del telèfon', es: 'Nada sale de tu teléfono' },

  'who.eyebrow':      { en: 'Who it’s for',        ca: 'Per a qui',           es: 'Para quién' },
  'who.title':        { en: 'You don’t always need a script for the same reason',
                        ca: 'No sempre necessites un guió pel mateix motiu',
                        es: 'No siempre necesitas un guion por el mismo motivo' },

  'who.1.role':       { en: 'Influencers',          ca: 'Influencers',         es: 'Influencers' },
  'who.1.title':      { en: 'Everything you need, in your pocket.',
                        ca: 'Tot el que necessites, dins la butxaca.',
                        es: 'Todo lo que necesitas, en el bolsillo.' },
  'who.1.body':       { en: 'No external teleprompter, no second screen, nobody holding cards off camera. Wherever you can hold up the phone, you can record a video that sounds natural, confident and well prepared.',
                        ca: 'No necessites un teleprompter extern, una segona pantalla ni ningú sostenint cartells fora de pla. Allà on puguis aixecar el telèfon, pots gravar un vídeo que soni natural, segur i ben preparat.',
                        es: 'No necesitas un teleprompter externo, una segunda pantalla ni a nadie sujetando carteles fuera de plano. Allí donde puedas levantar el teléfono, puedes grabar un vídeo que suene natural, seguro y bien preparado.' },

  'who.2.role':       { en: 'Journalists',          ca: 'Periodistes',         es: 'Periodistas' },
  'who.2.title':      { en: 'Names, dates and figures no longer depend on your memory.',
                        ca: 'Els noms, les dates i les xifres ja no depenen de la teva memòria.',
                        es: 'Los nombres, las fechas y las cifras ya no dependen de tu memoria.' },
  'who.2.body':       { en: 'A surname, a fact, the name of a street. What is hardest to remember is often exactly what you cannot get wrong. Now it is in front of you while you carry on looking at the camera.',
                        ca: 'Un cognom, una dada, el nom d’un carrer. Sovint, el que més et costa recordar és justament allò en què no et pots equivocar. Ara ho tens davant teu mentre continues mirant a càmera.',
                        es: 'Un apellido, un dato, el nombre de una calle. A menudo, lo que más te cuesta recordar es justo aquello en lo que no te puedes equivocar. Ahora lo tienes delante mientras sigues mirando a cámara.' },

  'who.3.role':       { en: 'Teachers',             ca: 'Docents',             es: 'Docentes' },
  'who.3.title':      { en: 'One take, not ten.',
                        ca: 'Una presa, no deu.',
                        es: 'Una toma, no diez.' },
  'who.3.body':       { en: 'Recording an explanation on a Tuesday afternoon should not cost you an hour repeating the same two minutes. You read, you record and you get on with the rest of your day.',
                        ca: 'Gravar una explicació un dimarts a la tarda no hauria de fer-te perdre una hora repetint els mateixos dos minuts. Llegeixes, graves i continues amb la resta del dia.',
                        es: 'Grabar una explicación un martes por la tarde no debería hacerte perder una hora repitiendo los mismos dos minutos. Lees, grabas y sigues con el resto del día.' },

  'who.4.role':       { en: 'Content creators',     ca: 'Creadors de contingut', es: 'Creadores de contenido' },
  'who.4.title':      { en: 'Concentrate on how you say it, not on remembering what to say.',
                        ca: 'Concentra’t en com ho dius, no en recordar què havies de dir.',
                        es: 'Concéntrate en cómo lo dices, no en recordar qué tenías que decir.' },
  'who.4.body':       { en: 'The pauses, the emphasis, the rhythm and the eye contact are what turn your text into a video that holds people. The script is already on the screen. You just have to bring it to life.',
                        ca: 'Les pauses, l’èmfasi, el ritme i la mirada són el que converteixen el teu text en un vídeo que atrapa. El guió ja és a la pantalla. Tu només has de donar-li vida.',
                        es: 'Las pausas, el énfasis, el ritmo y la mirada son lo que convierten tu texto en un vídeo que engancha. El guion ya está en la pantalla. Tú solo tienes que darle vida.' },

  'feat.eyebrow':     { en: 'What it does for you', ca: 'Què t’aporta',        es: 'Qué te aporta' },
  'feat.title':       { en: 'Four things that change how you shoot.',
                        ca: 'Quatre coses que et canvien la manera de gravar.',
                        es: 'Cuatro cosas que te cambian la manera de grabar.' },

  'feat.1.num':       { en: 'Eye contact',          ca: 'Contacte visual',     es: 'Contacto visual' },
  'feat.1.title':     { en: 'The script sits next to the lens.',
                        ca: 'El guió va tocant a l’objectiu.',
                        es: 'El guion va pegado al objetivo.' },
  'feat.1.body':      { en: 'The reading panel is at the top of the screen by default, a few millimetres from the front camera. That is the difference between “this person is talking to me” and “this person is reading something”.',
                        ca: 'El panell de lectura va a dalt de la pantalla, a pocs mil·límetres de la càmera frontal. És la diferència entre «aquesta persona em parla a mi» i «aquesta persona llegeix alguna cosa».',
                        es: 'El panel de lectura va arriba de la pantalla, a pocos milímetros de la cámara frontal. Es la diferencia entre «esta persona me habla a mí» y «esta persona está leyendo algo».' },

  'feat.2.num':       { en: 'Fewer takes',          ca: 'Menys preses',        es: 'Menos tomas' },
  'feat.2.title':     { en: 'Stumble, fix it, keep going.',
                        ca: 'Et traves, ho arregles i continues.',
                        es: 'Te trabas, lo arreglas y sigues.' },
  'feat.2.body':      { en: 'Change the speed mid-take, tap the panel to stop the text, drag anywhere on the screen to find your place again. The recording never stops, so you do not start over.',
                        ca: 'Canvia la velocitat enmig de la presa, toca el panell per aturar el text, arrossega des de qualsevol punt per tornar-te a situar. La gravació no s’atura, així que no tornes a començar.',
                        es: 'Cambia la velocidad en mitad de la toma, toca el panel para parar el texto, arrastra desde cualquier punto para volver a situarte. La grabación no se para, así que no vuelves a empezar.' },

  'feat.3.num':       { en: 'A clean camera roll',  ca: 'El carret net',       es: 'El carrete limpio' },
  'feat.3.title':     { en: 'Nothing gets saved by accident.',
                        ca: 'No es desa res sense voler.',
                        es: 'No se guarda nada sin querer.' },
  'feat.3.body':      { en: 'When a take ends you get Save or Discard. Until you choose, the video has not reached your photo library. The failed attempts never pile up.',
                        ca: 'En acabar la presa surt Desa o Descarta. Fins que no tries, el vídeo no ha arribat a la fototeca. Els intents fallits no s’hi acumulen mai.',
                        es: 'Al acabar la toma sale Guardar o Descartar. Hasta que no eliges, el vídeo no ha llegado a la fototeca. Los intentos fallidos no se acumulan.' },

  'feat.4.num':       { en: 'Your scripts',         ca: 'Els teus guions',     es: 'Tus guiones' },
  'feat.4.title':     { en: 'Write it, paste it or import it.',
                        ca: 'Escriu-lo, enganxa’l o importa’l.',
                        es: 'Escríbelo, pégalo o impórtalo.' },
  'feat.4.body':      { en: 'A library on your phone, with word count and an estimate of how long it takes to read out loud. TXT, Markdown and RTF files come straight in.',
                        ca: 'Una biblioteca al telèfon, amb recompte de paraules i estimació de quant es triga a llegir-lo en veu alta. Els fitxers TXT, Markdown i RTF entren directament.',
                        es: 'Una biblioteca en el teléfono, con recuento de palabras y estimación de cuánto se tarda en leerlo en voz alta. Los archivos TXT, Markdown y RTF entran directamente.' },

  'gallery.eyebrow':  { en: 'Inside the app',       ca: 'Dins de l’app',       es: 'Dentro de la app' },
  'gallery.title':    { en: 'Record in portrait or landscape. And set it up however you like.',
                        ca: 'Grava en vertical o horitzontal. I configura-ho com vulguis.',
                        es: 'Graba en vertical u horizontal. Y configúralo como quieras.' },
  'gallery.1':        { en: 'Landscape: the controls move to the right and the text stays in a band.',
                        ca: 'Apaïsat: els controls passen a la dreta i el text es queda en una franja.',
                        es: 'Horizontal: los controles pasan a la derecha y el texto se queda en una franja.' },
  'gallery.2':        { en: 'Your script library, with word count and reading time.',
                        ca: 'La teva biblioteca de guions, amb paraules i temps de lectura.',
                        es: 'Tu biblioteca de guiones, con palabras y tiempo de lectura.' },
  'gallery.3':        { en: 'Resolution up to 4K, countdown, and the app’s own language.',
                        ca: 'Resolució fins a 4K, compte enrere i idioma propi de l’app.',
                        es: 'Resolución hasta 4K, cuenta atrás e idioma propio de la app.' },

  'feed.eyebrow':     { en: 'No watermark', ca: 'Sense marca d’aigua', es: 'Sin marca de agua' },
  'feed.title':       { en: 'Your video. Nobody else’s logo.',
                        ca: 'El vídeo és teu. Sense el logo de ningú.',
                        es: 'El vídeo es tuyo. Sin el logo de nadie.' },
  'feed.lede':        { en: 'Record inside Instagram or TikTok and they hand the video back with their watermark on it. Then the next network sees a rival’s logo and shows it to fewer people. With ReadToCam the video is saved clean to your phone: you made it, it’s yours, and you publish it wherever you want.',
                        ca: 'Si el graves amb l’eina d’Instagram o de TikTok, te’l tornen amb la seva marca d’aigua a sobre. I la xarxa on el pengis després hi veu el logo d’una rival i el mostra a menys gent. Amb ReadToCam el vídeo es desa net al teu telèfon: el fas tu, és teu i el publiques on vulguis.',
                        es: 'Si lo grabas con la herramienta de Instagram o de TikTok, te lo devuelven con su marca de agua encima. Y la red donde lo subas después ve el logo de una rival y se lo enseña a menos gente. Con ReadToCam el vídeo se guarda limpio en tu teléfono: lo haces tú, es tuyo y lo publicas donde quieras.' },
  'feed.peu':         { en: 'One recording, clean, on your phone. The same file works everywhere, and nothing goes out until you send it.',
                        ca: 'Una gravació, neta, al teu telèfon. El mateix fitxer et serveix a tot arreu, i no surt res fins que ho envies tu.',
                        es: 'Una grabación, limpia, en tu teléfono. El mismo archivo te sirve en todas partes, y no sale nada hasta que lo envías tú.' },
  'privacy.eyebrow':  { en: 'Private by design',    ca: 'Privat per disseny',  es: 'Privado por diseño' },
  'privacy.title':    { en: 'Nothing leaves your phone.',
                        ca: 'Res no surt del teu telèfon.',
                        es: 'Nada sale de tu teléfono.' },
  'privacy.lede':     { en: 'ReadToCam has no accounts, no cloud and no tracking. Your scripts, your settings and your videos stay on the device.',
                        ca: 'ReadToCam no té comptes, ni núvol, ni seguiment. Els teus guions, els teus ajustos i els teus vídeos es queden al dispositiu.',
                        es: 'ReadToCam no tiene cuentas, ni nube, ni seguimiento. Tus guiones, tus ajustes y tus vídeos se quedan en el dispositivo.' },
  'privacy.1':        { en: 'No account',           ca: 'Sense compte',        es: 'Sin cuenta' },
  'privacy.1.desc':   { en: 'You open it and it works. There is nothing to sign up for.',
                        ca: 'L’obres i funciona. No hi ha res a registrar.',
                        es: 'La abres y funciona. No hay nada que registrar.' },
  'privacy.2':        { en: 'No cloud',             ca: 'Sense núvol',         es: 'Sin nube' },
  'privacy.2.desc':   { en: 'No server of ours ever sees your scripts or your video.',
                        ca: 'Cap servidor nostre no veu mai els teus guions ni el teu vídeo.',
                        es: 'Ningún servidor nuestro ve nunca tus guiones ni tu vídeo.' },
  'privacy.3':        { en: 'No tracking',          ca: 'Sense seguiment',     es: 'Sin seguimiento' },
  'privacy.3.desc':   { en: 'No ads, no analytics, no third-party code at all.',
                        ca: 'Ni anuncis, ni analítica, ni cap codi de tercers.',
                        es: 'Ni anuncios, ni analítica, ni ningún código de terceros.' },

  'close.title':      { en: 'Your next video already has a script.',
                        ca: 'El teu pròxim vídeo ja té guió.',
                        es: 'Tu próximo vídeo ya tiene guion.' },

  'foot.made':        { en: 'An app by Creàtica, Barcelona.',
                        ca: 'Una app de Creàtica, Barcelona.',
                        es: 'Una app de Creàtica, Barcelona.' },
  'foot.support':     { en: 'Support',              ca: 'Suport',              es: 'Soporte' },
  'foot.privacy':     { en: 'Privacy',              ca: 'Privadesa',           es: 'Privacidad' },
  'foot.home':        { en: 'Home',                 ca: 'Inici',               es: 'Inicio' },

  /* ---------- suport ---------- */

  'sup.eyebrow':      { en: 'Support',              ca: 'Suport',              es: 'Soporte' },
  'sup.title':        { en: 'How to use ReadToCam', ca: 'Com fer anar ReadToCam', es: 'Cómo usar ReadToCam' },
  'sup.lede':         { en: 'The questions that come up most, and how to reach us if yours is not here.',
                        ca: 'Les preguntes que surten més, i com escriure’ns si la teva no hi és.',
                        es: 'Las preguntas que salen más, y cómo escribirnos si la tuya no está.' },

  'sup.q1':           { en: 'Can I change the speed while recording?',
                        ca: 'Puc canviar la velocitat mentre gravo?',
                        es: '¿Puedo cambiar la velocidad mientras grabo?' },
  'sup.a1':           { en: 'Yes. The slider on the bottom bar works at any time, mid-take included. It is the only control that stays visible while recording, precisely because it is the one you use most.',
                        ca: 'Sí. El control lliscant de la barra inferior funciona en qualsevol moment, també enmig d’una presa. És l’únic control que es queda a la vista mentre graves, precisament perquè és el que més es fa servir.',
                        es: 'Sí. El control deslizante de la barra inferior funciona en cualquier momento, también en mitad de una toma. Es el único control que se queda a la vista mientras grabas, precisamente porque es el que más se usa.' },
  'sup.q2':           { en: 'How do I pause the text without stopping the recording?',
                        ca: 'Com aturo el text sense aturar la gravació?',
                        es: '¿Cómo paro el texto sin parar la grabación?' },
  'sup.a2':           { en: 'Tap the text panel. Tap it again to resume. The recording carries on.',
                        ca: 'Toca el panell del text. Torna a tocar-lo per reprendre’l. La gravació segueix el seu curs.',
                        es: 'Toca el panel del texto. Vuelve a tocarlo para reanudarlo. La grabación sigue su curso.' },
  'sup.q3':           { en: 'I lost my place. How do I get back to it?',
                        ca: 'M’he perdut al guió. Com em recol·loco?',
                        es: 'Me he perdido en el guion. ¿Cómo me recoloco?' },
  'sup.a3':           { en: 'Drag up or down from anywhere on the screen, including over the camera image. You do not need to reach the panel, which sits far from your thumb when the text is at the top. It works while recording too.',
                        ca: 'Arrossega amunt o avall des de qualsevol punt de la pantalla, també sobre la imatge de la càmera. No cal arribar al panell, que amb el text a dalt queda lluny del polze. Funciona igual mentre graves.',
                        es: 'Arrastra arriba o abajo desde cualquier punto de la pantalla, también sobre la imagen de la cámara. No hace falta llegar al panel, que con el texto arriba queda lejos del pulgar. Funciona igual mientras grabas.' },
  'sup.q4':           { en: 'Where do the videos go?',
                        ca: 'On van a parar els vídeos?',
                        es: '¿Dónde van a parar los vídeos?' },
  'sup.a4':           { en: 'To your photo library, but only when you say so. After each take a bar appears with Save and Discard: until you choose, the video has not left the app. That way failed attempts do not clutter Photos.',
                        ca: 'A la fototeca del teu iPhone, però només quan tu ho dius. En acabar cada presa surt una barra amb Desa i Descarta: fins que no tries, el vídeo no ha sortit de l’app. Així els intents fallits no t’omplen Fotos.',
                        es: 'A la fototeca de tu iPhone, pero solo cuando tú lo dices. Al acabar cada toma sale una barra con Guardar y Descartar: hasta que no eliges, el vídeo no ha salido de la app. Así los intentos fallidos no te llenan Fotos.' },
  'sup.q5':           { en: 'Why do I look mirrored on screen but the video isn’t?',
                        ca: 'Per què em veig en mirall però el vídeo no ho surt?',
                        es: '¿Por qué me veo en espejo pero el vídeo no sale así?' },
  'sup.a5':           { en: 'It is deliberate, and it is what Apple’s own camera does. On screen you see yourself mirrored so you recognise yourself. The file is saved the way other people see you, so any text in the shot reads the right way round. There is a setting if you prefer the opposite.',
                        ca: 'És a posta, i és el que fa també la càmera d’Apple. A la pantalla et veus en mirall perquè t’hi reconeguis. El fitxer es desa tal com et veu la gent, de manera que qualsevol text que surti en pla es llegeix bé. Hi ha un ajust si ho prefereixes a l’inrevés.',
                        es: 'Es a propósito, y es lo que hace también la cámara de Apple. En la pantalla te ves en espejo para que te reconozcas. El archivo se guarda tal como te ve la gente, de manera que cualquier texto que salga en plano se lee bien. Hay un ajuste si lo prefieres al revés.' },
  'sup.q6':           { en: 'What quality does it record at?',
                        ca: 'A quina qualitat grava?',
                        es: '¿En qué calidad graba?' },
  'sup.a6':           { en: '720p, 1080p or 4K, chosen in settings. The app only offers what your active camera supports: the front camera on some models tops out at 1080p. 4K takes about three times the space.',
                        ca: 'A 720p, 1080p o 4K, a triar als ajustos. L’app només ofereix el que admet la càmera activa: la frontal d’alguns models es queda a 1080p. El 4K ocupa unes tres vegades més.',
                        es: 'A 720p, 1080p o 4K, a elegir en los ajustes. La app solo ofrece lo que admite la cámara activa: la frontal de algunos modelos se queda en 1080p. El 4K ocupa unas tres veces más.' },
  'sup.q7':           { en: 'Can I use it in landscape?',
                        ca: 'Es pot fer servir en horitzontal?',
                        es: '¿Se puede usar en horizontal?' },
  'sup.a7':           { en: 'Yes. Turn the phone and the controls move to a column on the right, with the text in a band. The panel height is remembered separately for each orientation. While recording, the orientation is locked: the video is already being written the way it started.',
                        ca: 'Sí. Gira el telèfon i els controls passen a una columna a la dreta, amb el text en una franja. L’alçada del panell es recorda per separat per a cada orientació. Mentre graves, l’orientació queda fixada: el vídeo ja s’està escrivint tal com era en començar.',
                        es: 'Sí. Gira el teléfono y los controles pasan a una columna a la derecha, con el texto en una franja. La altura del panel se recuerda por separado para cada orientación. Mientras grabas, la orientación queda fijada: el vídeo ya se está escribiendo tal como era al empezar.' },
  'sup.q8':           { en: 'What do I need to use it?',
                        ca: 'Què necessito per fer-la anar?',
                        es: '¿Qué necesito para usarla?' },
  'sup.a8':           { en: 'An iPhone running iOS 17 or later. No account and no sign-up.',
                        ca: 'Un iPhone amb iOS 17 o superior. Cap compte ni cap registre.',
                        es: 'Un iPhone con iOS 17 o superior. Ninguna cuenta ni ningún registro.' },

  'sup.contact.title':{ en: 'Can’t find what you need?', ca: 'No hi trobes el que busques?', es: '¿No encuentras lo que buscas?' },
  'sup.contact.body': { en: 'Write to us and we will reply. Tell us your iPhone model and iOS version: it saves half the conversation.',
                        ca: 'Escriu-nos i et responem. Digue’ns quin model d’iPhone tens i quina versió d’iOS: ens estalvia mitja conversa.',
                        es: 'Escríbenos y te respondemos. Dinos qué modelo de iPhone tienes y qué versión de iOS: nos ahorra media conversación.' },
  'sup.contact.cta':  { en: 'Get in touch',         ca: 'Escriu-nos',          es: 'Escríbenos' },

  /* ---------- privadesa ---------- */

  'pri.eyebrow':      { en: 'ReadToCam',            ca: 'ReadToCam',           es: 'ReadToCam' },
  'pri.title':        { en: 'Privacy policy',       ca: 'Política de privadesa', es: 'Política de privacidad' },
  'pri.lede':         { en: 'ReadToCam collects no personal data. No accounts, no cloud, no tracking. Everything you do in the app stays on your iPhone.',
                        ca: 'ReadToCam no recull cap dada personal. No té comptes, ni núvol, ni seguiment. Tot el que fas amb l’app es queda al teu iPhone.',
                        es: 'ReadToCam no recoge ningún dato personal. No tiene cuentas, ni nube, ni seguimiento. Todo lo que haces con la app se queda en tu iPhone.' },
  'pri.updated':      { en: 'Last updated: August 2026', ca: 'Última actualització: agost de 2026', es: 'Última actualización: agosto de 2026' },
  'pri.s1.t':         { en: 'Data we collect',      ca: 'Dades que recollim',  es: 'Datos que recogemos' },
  'pri.s1.b':         { en: 'None. ReadToCam does not collect, store or transmit any personal information. It does not ask you to sign up, it has no user accounts and it sends nothing to any server, ours or anyone else’s.',
                        ca: 'Cap. ReadToCam no recull, emmagatzema ni transmet cap informació personal. No et demana que et registris, no té comptes d’usuari i no envia res a cap servidor, ni nostre ni de ningú altre.',
                        es: 'Ninguno. ReadToCam no recoge, almacena ni transmite ninguna información personal. No te pide que te registres, no tiene cuentas de usuario y no envía nada a ningún servidor, ni nuestro ni de nadie más.' },
  'pri.s2.t':         { en: 'Your scripts and settings', ca: 'Els teus guions i els teus ajustos', es: 'Tus guiones y tus ajustes' },
  'pri.s2.b':         { en: 'The scripts you write, paste or import are stored only in the app’s storage on your device, and so are your settings. We have no access to them. If you delete the app, they go with it.',
                        ca: 'Els guions que escrius, enganxes o importes es desen únicament a l’emmagatzematge de l’app dins del teu dispositiu, i els ajustos també. Nosaltres no hi tenim accés. Si esborres l’app, se n’esborren amb ella.',
                        es: 'Los guiones que escribes, pegas o importas se guardan únicamente en el almacenamiento de la app dentro de tu dispositivo, y los ajustes también. Nosotros no tenemos acceso. Si borras la app, se borran con ella.' },
  'pri.s3.t':         { en: 'The videos you record', ca: 'Els vídeos que graves', es: 'Los vídeos que grabas' },
  'pri.s3.b':         { en: 'Videos are recorded on your device and stay there. When you finish a take the app asks whether to save or discard it: saved takes go to your photo library, discarded ones are deleted. Either way they never leave the phone or pass through us.',
                        ca: 'Els vídeos es graven al teu dispositiu i s’hi queden. Quan acabes una presa, l’app et pregunta si la vols desar o descartar: si la deses, va a la teva fototeca; si la descartes, s’esborra. En cap cas surt del telèfon ni passa per nosaltres.',
                        es: 'Los vídeos se graban en tu dispositivo y se quedan ahí. Cuando acabas una toma, la app te pregunta si quieres guardarla o descartarla: si la guardas, va a tu fototeca; si la descartas, se borra. En ningún caso sale del teléfono ni pasa por nosotros.' },
  'pri.s4.t':         { en: 'Permissions the app asks for', ca: 'Permisos que demana l’app', es: 'Permisos que pide la app' },
  'pri.s4.b':         { en: 'Camera and microphone, to record video and its audio, and permission to add to your photo library, to save the takes you choose to keep. Nothing else. The app does not read your photo library, your contacts or your location.',
                        ca: 'Càmera i micròfon, per gravar el vídeo i el seu àudio, i permís per afegir a la fototeca, per desar-hi les preses que decideixis conservar. Res més. L’app no llegeix la teva fototeca, ni els teus contactes, ni la teva ubicació.',
                        es: 'Cámara y micrófono, para grabar el vídeo y su audio, y permiso para añadir a la fototeca, para guardar las tomas que decidas conservar. Nada más. La app no lee tu fototeca, ni tus contactos, ni tu ubicación.' },
  'pri.s5.t':         { en: 'Advertising, analytics and third parties', ca: 'Publicitat, analítica i tercers', es: 'Publicidad, analítica y terceros' },
  'pri.s5.b':         { en: 'There are none. ReadToCam includes no ads, no analytics tools, no third-party SDKs and no tracking identifiers. We share no information with anyone because we hold none.',
                        ca: 'No n’hi ha. ReadToCam no incorpora anuncis, ni eines d’analítica, ni SDK de tercers, ni identificadors de seguiment. No compartim informació amb ningú perquè no en tenim.',
                        es: 'No hay. ReadToCam no incorpora anuncios, ni herramientas de analítica, ni SDK de terceros, ni identificadores de seguimiento. No compartimos información con nadie porque no la tenemos.' },
  'pri.s6.t':         { en: 'Subscription', ca: 'Subscripció', es: 'Suscripción' },
  'pri.s6.b':         { en: 'The subscription is handled entirely by Apple through your App Store account. We never see your name, your email or your payment details.',
                        ca: 'La subscripció la gestiona íntegrament Apple a través del teu compte de l’App Store. Nosaltres no veiem mai el teu nom, el teu correu ni les teves dades de pagament.',
                        es: 'La suscripción la gestiona íntegramente Apple a través de tu cuenta del App Store. Nosotros no vemos nunca tu nombre, tu correo ni tus datos de pago.' },
  'pri.s7.t':         { en: 'Children',             ca: 'Menors',              es: 'Menores' },
  'pri.s7.b':         { en: 'Since the app collects no data from anyone, it collects none from children either.',
                        ca: 'Com que l’app no recull cap dada de ningú, tampoc no en recull de menors.',
                        es: 'Como la app no recoge ningún dato de nadie, tampoco recoge datos de menores.' },
  'pri.s8.t':         { en: 'Contact',              ca: 'Contacte',            es: 'Contacto' },
  'pri.s8.b':         { en: 'For any question about this policy, write to josep@estudicreatica.cat. ReadToCam is an app by Creàtica, a communication studio based in Barcelona.',
                        ca: 'Per a qualsevol dubte sobre aquesta política, escriu a josep@estudicreatica.cat. ReadToCam és una app de Creàtica, estudi de comunicació amb seu a Barcelona.',
                        es: 'Para cualquier duda sobre esta política, escribe a josep@estudicreatica.cat. ReadToCam es una app de Creàtica, estudio de comunicación con sede en Barcelona.' },

  /* ---------- el prompter de la portada ---------- */

  'demo.speed':       { en: 'Scrolling speed', ca: 'Velocitat del text', es: 'Velocidad del texto' },
  'demo.paused':      { en: 'Paused',          ca: 'Aturat',            es: 'Parado' },
  'demo.hint':        { en: 'Drag the speed control. Tap the text to stop it.',
                        ca: 'Arrossega el control de velocitat. Toca el text per aturar-lo.',
                        es: 'Arrastra el control de velocidad. Toca el texto para pararlo.' },

  'demo.1':           { en: 'I stopped memorising. I write it down, I read it, I look at the lens.',
                        ca: 'He deixat de memoritzar. Ho escric, ho llegeixo i miro l’objectiu.',
                        es: 'He dejado de memorizar. Lo escribo, lo leo y miro al objetivo.' },
  'demo.2':           { en: 'I record in one take now. If I stumble I slow the text down and keep going.',
                        ca: 'Ara ho gravo d’una tirada. Si em travo, baixo la velocitat i continuo.',
                        es: 'Ahora lo grabo de una tirada. Si me trabo, bajo la velocidad y sigo.' },
  'demo.3':           { en: 'And nothing gets thrown away, because nothing gets saved by accident.',
                        ca: 'I no llenço res, perquè no es desa res sense voler.',
                        es: 'Y no tiro nada, porque no se guarda nada sin querer.' },
  'demo.4':           { en: 'Three things changed how I shoot video this year.',
                        ca: 'Tres coses m’han canviat la manera de gravar aquest any.',
                        es: 'Tres cosas me han cambiado la manera de grabar este año.' }
};

const SUPPORTED = ['en', 'ca', 'es'];

function pick() {
  const saved = localStorage.getItem('readtocam-lang');
  if (SUPPORTED.includes(saved)) return saved;
  for (const l of navigator.languages || [navigator.language || 'en']) {
    const code = (l || '').slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(code)) return code;
  }
  return 'en';
}

window.readtocamStrings = T;

function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = 'en';
  document.documentElement.lang = lang;
  localStorage.setItem('readtocam-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = T[el.dataset.i18n];
    if (entry && entry[lang]) el.textContent = entry[lang];
  });
  /* El distintiu d'Apple és una imatge per idioma, i el text hi va dibuixat
     a dins. Canviar-ne el fitxer és l'única manera de traduir-lo: no es pot
     ni redibuixar ni superposar-hi res. */
  document.querySelectorAll('[data-i18n-alt]').forEach(img => {
    const entry = T[img.dataset.i18nAlt];
    if (entry && entry[lang]) img.alt = entry[lang];
  });
  document.querySelectorAll('[data-badge]').forEach(img => {
    img.src = `assets/badge-${lang}.svg`;
    img.alt = T['badge.alt'][lang];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const entry = T[el.dataset.i18nAria];
    if (entry && entry[lang]) el.setAttribute('aria-label', entry[lang]);
  });
  document.querySelectorAll('.lang').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  document.dispatchEvent(new CustomEvent('languagechange'));
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(pick());
  document.querySelectorAll('.lang').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
