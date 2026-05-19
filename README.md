# TRL — Sitio estático organizado

Este proyecto es una guía práctica sobre los niveles de madurez tecnológica (TRL), con contenido estructurado y un sitio que funciona directamente desde el archivo.

## Estructura del proyecto

- `site/` — Archivos principales del sitio.
  - `index.html` — Página principal con todo el contenido integrado y navegación por secciones.
  - `css/styles.css` — Estilos responsivos y mejorados.
  - `sections/` — Fragmentos HTML por sección (archivos opcionales que ya no se cargan por `fetch`).
- `README.md` — Documentación del proyecto.
- `package.json` — Script opcional para servir con Node.js si se desea.

## Cómo abrir

1. Abre `site/index.html` en tu navegador (doble clic o `Abrir con`).
2. Usa la navegación superior para moverte entre secciones.
3. El sitio funciona sin servidor local y sin recarga de página.

## Mejora del sitio

- Navegación visible y sticky en el encabezado.
- Secciones integradas e indexadas con fragmentos (`#01-resumen`, `#02-definicion`, etc.).
- Navegación interna `Anterior / Siguiente` para avanzar fácilmente entre temas.
- Mejora visual en la cabecera, botones y tabla de niveles.
- Soporte accesible sin JavaScript: el contenido se muestra completo cuando JS está desactivado.
- Indicadores `aria-current`, `aria-live` y foco visible para una mejor experiencia con lectores de pantalla y teclado.
- Aviso `noscript` para usuarios sin JavaScript.
- Uso de `aria-hidden` y `section-hidden` para ocultar y mostrar secciones de forma accesible.
- Activación de enlace actual en el menú para indicar la sección seleccionada.

## Notas importantes

- No se necesita servidor local: el sitio está pensado para abrirse directamente desde el archivo.
- Los archivos dentro de `site/sections/` pueden mantenerse como referencia o eliminarse si prefieres una versión más limpia.

## Opcional

Si quieres mantener un servidor para pruebas, puedes usar `npm run serve` si tienes Node.js y `http-server` disponible, pero no es obligatorio.

