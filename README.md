# TRL — Sitio estático organizado

Guía práctica sobre los niveles de madurez tecnológica (TRL), construida como un sitio estático fácil de usar y accesible. El contenido está integrado en una sola página y funciona directamente desde el archivo sin necesidad de servidor.

## Qué incluye

- `site/index.html` — Página principal con toda la guía de TRL y navegación por secciones.
- `site/css/styles.css` — Estilos responsive, enfoque accesible y diseño visual moderno.
- `site/sections/` — Fragmentos HTML por sección, almacenados como referencia.
- `package.json` — Script opcional para servir el sitio con Node.js.

## Características principales

- Sitio estático que funciona con `file://` sin necesidad de servidor.
- Navegación superior sticky con enlaces a cada sección.
- Mini pager `Anterior / Siguiente` para avanzar entre temas.
- Estética y diseño:
  - estilo moderno con gradientes suaves y bordes redondeados.
  - paleta contrastada para mejorar legibilidad.
  - disposición clara y jerarquía visual en cada sección.
- Accesibilidad mejorada:
  - enlace de salto `Saltar al contenido`
  - foco visible y teclado soportado
  - `aria-live` para anunciar la sección activa
  - `aria-current` en el menú activo
  - soporte `noscript` para usuarios sin JavaScript
- Diseño responsive con tablas horizontales en pantallas pequeñas.

## Cómo usar

### Abrir el sitio sin servidor

1. Navega a `site/`.
2. Abre `index.html` con tu navegador.
3. Usa la navegación superior o los botones `Anterior / Siguiente`.

### Usar un servidor local (opcional)

Si quieres un servidor HTTP para pruebas, usa Node.js y ejecuta:

```bash
npm install
npm run serve
```

Luego abre `http://localhost:8000` en tu navegador.

## Accesibilidad y experiencia

- El sitio muestra todo el contenido cuando JavaScript está desactivado.
- Las secciones ocultan/mostrarán contenido usando `aria-hidden` de forma correcta.
- El contenido principal está marcado como `role="main"`.
- Las secciones en pantalla cambian el foco automáticamente para facilitar la navegación con teclado.
- Los enlaces de navegación reciben `aria-current="page"` cuando están activos.

## Estructura del proyecto

- `site/`
  - `index.html` — contenido completo del sitio.
  - `css/styles.css` — estilos globales y responsive.
  - `sections/` — secciones independientes usadas originalmente como fragmentos.
- `README.md` — documentación del repositorio.
- `package.json` — configuración de script opcional.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una rama con tu cambio: `git checkout -b mejora-docs`.
3. Realiza tus cambios y prueba la apertura de `site/index.html`.
4. Envía un pull request describiendo la mejora.

## Notas

- Los archivos dentro de `site/sections/` son opcionales y pueden conservarse como referencia.
- Este proyecto está pensado para ser ligero y fácil de compartir en repositorios estáticos como GitHub Pages.

