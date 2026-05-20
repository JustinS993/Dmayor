# TRL — Guía paso a paso para sitios estático y dinámico

Este repositorio contiene dos versiones de la misma guía TRL:

- `site/` — versión estática, que funciona directamente desde el archivo.
- `dynamic/` — versión dinámica, que carga cada sección desde un servidor.

El objetivo es comparar estas dos arquitecturas mientras se ofrece una experiencia clara, moderna y accesible.

## Qué hace este proyecto

Este proyecto construye dos variantes de la guía TRL:

- versión estática con `site/index.html` que muestra todo el contenido integrado en una sola página y usa navegación por fragmentos.
- versión dinámica con `dynamic/index.html` que obtiene el contenido de cada sección desde el servidor usando JavaScript y rutas de API.
- en la versión estática, el contenido está pre-renderizado y puede abrirse con `file://`.
- en la versión dinámica, el contenido se descarga bajo demanda, lo que simula una aplicación web más moderna.

## Paso a paso: cómo usar el sitio

### 1. Abrir la versión estática sin servidor

1. Ve a la carpeta `site/`.
2. Abre el archivo `index.html` en tu navegador.
3. El sitio cargará inmediatamente y mostrará la sección de `Resumen`.
4. Haz clic en cualquiera de los enlaces del menú superior para ir a esa sección.
5. Usa los botones `Anterior` y `Siguiente` para recorrer el contenido de forma lineal.

> La versión estática está diseñada para funcionar con la ruta `file://`, por lo que no requiere servidor web.

### 2. Usar la versión dinámica

1. Abre el terminal en la raíz del proyecto.
2. Ejecuta `npm run serve:dynamic`.
3. Abre `http://localhost:3000` en tu navegador.
4. La versión dinámica carga cada sección desde el servidor usando la ruta `/api/sections/<slug>`.

> La versión dinámica requiere JavaScript porque carga el contenido bajo demanda desde el servidor.

### 3. Navegación interna

- El menú superior es sticky, lo que significa que permanece visible mientras te desplazas.
- Cada sección tiene un identificador único (`id`) que permite enlazar directamente a esa parte del contenido.
- Al hacer clic en un enlace de navegación, la sección correspondiente aparece y el navegador actualiza la URL con el fragmento `#...`.

### 3. Sin JavaScript

Si el navegador no tiene JavaScript habilitado:

- la versión estática (`site/index.html`) sigue funcionando con todo el contenido visible,
- la versión dinámica muestra un aviso `noscript` y requiere JavaScript para cargar los fragmentos desde el servidor.

### 4. Servidor local opcional

Si prefieres probarlo en un servidor local, haz lo siguiente:

```bash
npm install
npm run serve
```

Luego abre `http://localhost:8000`.

## ¿Qué significan estos términos?

- **Sitio estático**: un sitio web formado por archivos HTML, CSS y JavaScript estáticos, sin backend o base de datos. El contenido se entrega directamente tal como está escrito.
- **file://**: es el protocolo usado por el navegador para abrir archivos locales. Significa que el sitio se abre directamente desde el sistema de archivos.
- **HTML**: lenguaje de marcado que estructura el contenido de la página.
- **CSS**: lenguaje de estilos que define colores, tipografía, espaciado y diseño.
- **JavaScript**: lenguaje que agrega comportamiento dinámico a la página, como mostrar y ocultar secciones sin recargar.
- **Responsive**: diseño que adapta la apariencia al tamaño de pantalla, para que se vea bien en móvil, tablet y escritorio.
- **Accesibilidad (a11y)**: prácticas que hacen el sitio usable para personas con discapacidades o que navegan con teclado o lectores de pantalla.
- **ARIA**: atributos especiales (`aria-live`, `aria-hidden`, `aria-current`) que ayudan a las tecnologías asistivas a entender mejor la página.
- **Sticky**: un elemento que se queda fijo en la pantalla mientras se hace scroll.
- **Fragmento de URL**: la parte que va después del símbolo `#`, por ejemplo `#niveles`; permite saltar a una sección específica.
- **prefers-reduced-motion**: una preferencia del usuario que indica que desea menos animaciones o movimientos.

## SEO y metadatos

El proyecto incluye etiquetas de metadatos en `site/index.html` para mejorar cómo se presenta la página al compartirse o indexarse:

- `meta description`: describe el contenido de la página para buscadores.
- `meta keywords`: lista de palabras clave relacionadas con el contenido.
- `meta author`: identifica al creador del contenido.
- `og:title` y `og:description`: etiquetas Open Graph que optimizan cómo se muestra la página en redes sociales.
- `twitter:card`, `twitter:title` y `twitter:description`: etiquetas de Twitter para mejorar el enlace compartido.

Estos metadatos no cambian la apariencia del sitio, pero ayudan a que el contenido sea más fácil de encontrar y compartir.

## Qué hace cada parte del proyecto

- `site/index.html`
  - contiene todo el contenido de la guía en seis secciones.
  - incluye la navegación principal y los botones de paginación.
  - define la estructura semántica con `main`, `section`, `h2`, `ul`, `ol`.
  - usa `aria-hidden` para ocultar secciones inactivas.
  - utiliza `aria-live` para anunciar qué sección está activa.

- `site/css/styles.css`
  - da estilo a la versión estática con colores suaves y un diseño moderno.
  - hace que los botones, tarjetas y tablas sean legibles y accesibles.
  - agrega soporte responsive y mejoras visuales.
  - mantiene el contraste apropiado para una lectura cómoda.

- `dynamic/index.html`
  - define la estructura de la página dinámica.
  - carga el título y el contenedor que será rellenado por JavaScript.
  - ofrece navegación acorde a la versión dinámica.

- `dynamic/css/styles.css`
  - da estilo a la versión dinámica y mantiene consistencia con el resto del proyecto.
  - usa un diseño limpio y legible para el contenido cargado al vuelo.

- `dynamic/js/app.js`
  - solicita las secciones dinámicamente a través de la API.
  - actualiza el contenido, el título de sección y la navegación activa.
  - maneja errores de carga y actualiza la URL con fragmentos limpios.

- `dynamic/server.js`
  - servidor Node básico que entrega los archivos estáticos del sitio dinámico.
  - responde a las peticiones `/api/sections/<slug>` con el HTML de cada sección.

- `package.json`
  - contiene scripts para iniciar la versión estática y la versión dinámica.

## Estructura del proyecto

- `site/`
  - `index.html` — versión estática con todo el contenido integrado.
  - `css/styles.css` — estilos para la versión estática.
  - `sections/` — fragmentos por sección, usados por la versión estática.
- `dynamic/`
  - `index.html` — versión dinámica que carga secciones desde el servidor.
  - `css/styles.css` — estilos dedicados para la versión dinámica.
  - `js/app.js` — lógica que solicita secciones al servidor y actualiza el contenido.
  - `server.js` — servidor Node que entrega la aplicación dinámica y sirve los fragmentos.
  - `sections/` — archivos HTML de cada sección cargados dinámicamente.
- `README.md` — documentación del proyecto.
- `package.json` — scripts de ejecución y configuración.

## Diferencia entre página estática y dinámica

- Página estática (`site/`):
  - el contenido ya está escrito en el mismo HTML.
  - funciona directamente desde el archivo con `file://`.
  - no depende de un backend para mostrar el contenido.
  - ideal para sitios simples, rápidos y fáciles de distribuir.

- Página dinámica (`dynamic/`):
  - la estructura de la página se carga primero y el contenido llega después desde el servidor.
  - requiere JavaScript y un servidor para funcionar.
  - permite cargar secciones bajo demanda y separar el contenido en archivos independientes.
  - es más parecida a una aplicación web moderna y puede ser útil si el contenido cambia con frecuencia.

## Recomendaciones para usar este repositorio

1. Abre el sitio desde `site/index.html` para ver la guía rápidamente.
2. Usa la barra de navegación para acceder a cualquier sección.
3. Si necesitas compartir el acceso directo a un tema, copia la URL con el fragmento de sección.
4. Si quieres ver el comportamiento dinámico, asegúrate de que JavaScript esté habilitado.
5. Para probar cambios en estilo o contenido, edita `site/css/styles.css` o `site/index.html` y vuelve a cargar la página.

## Contribuir

1. Haz un fork del repositorio.
2. Crea una rama con un nombre descriptivo.
3. Aplica los cambios en el contenido o la presentación.
4. Verifica que `site/index.html` aún funcione con `file://` y que la navegación sea clara.
5. Envía un pull request describiendo qué mejoras has hecho.

## Notas finales

Este proyecto busca ser una guía clara y práctica, tanto para entender los niveles TRL como para mostrar cómo construir un sitio estático accesible y usable.

