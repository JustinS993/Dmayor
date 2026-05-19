# TRL — Sitio estático organizado

Estructura creada para mantener el contenido ordenado:

- `site/` — Archivos principales del sitio.
  - `index.html` — Punto de entrada que contiene todas las secciones integradas.
  - `css/styles.css` — Estilos del sitio.
  - `sections/` — Fragmentos HTML por sección (archivos opcionales que ya no se cargan por fetch).

Cómo abrir:

1. Abre `site/index.html` en tu navegador (doble clic o `Abrir con`).
2. Navega usando los enlaces de la cabecera; las secciones se muestran sin necesidad de servidor.

Notas de accesibilidad y mejoras realizadas:
- Se añadió un enlace "Saltar al contenido" (`skip-link`) visible al recibir foco para navegación con teclado.
- La navegación usa enlaces con fragmentos (`#01-resumen`, etc.) para permitir enlaces directos y soportar historial (back/forward).
- Todas las secciones están incrustadas en `index.html` y se muestran/ocultan sin `fetch`.
- Se añadió soporte para activar el enlace actual en la cabecera.

No se requiere servidor local; el contenido funciona directamente desde el archivo.

