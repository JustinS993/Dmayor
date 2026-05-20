# TRL — Guía paso a paso para un sitio estático accesible

Este repositorio contiene una guía práctica sobre los niveles de madurez tecnológica (TRL) presentada como un sitio estático. El objetivo es ofrecer una experiencia clara, rápida y accesible, con contenido integrado en una sola página y navegación intuitiva.

## Qué hace este sitio

Este proyecto construye una pequeña aplicación de contenido que:

- muestra la guía TRL en una sola página HTML (`site/index.html`),
- agrega navegación por secciones usando enlaces ancla (`#01-resumen`, `#02-definicion`, etc.),
- permite avanzar con botones `Anterior` y `Siguiente`,
- mantiene el contenido accesible incluso si JavaScript está desactivado,
- utiliza estilos modernos para lograr una apariencia limpia y legible.

## Paso a paso: cómo usar el sitio

### 1. Abrir el sitio sin servidor

1. Ve a la carpeta `site/`.
2. Abre el archivo `index.html` en tu navegador.
3. El sitio cargará inmediatamente y mostrará la sección de `Resumen`.
4. Haz clic en cualquiera de los enlaces del menú superior para ir a esa sección.
5. Usa los botones `Anterior` y `Siguiente` para recorrer el contenido de forma lineal.

> Este sitio está diseñado para funcionar con la ruta `file://`, por lo que no requiere servidor web para visualizarlo.

### 2. Navegación interna

- El menú superior es sticky, lo que significa que permanece visible mientras te desplazas.
- Cada sección tiene un identificador único (`id`) que permite enlazar directamente a esa parte del contenido.
- Al hacer clic en un enlace de navegación, la sección correspondiente aparece y el navegador actualiza la URL con el fragmento `#...`.

### 3. Sin JavaScript

Si el navegador no tiene JavaScript habilitado:

- el contenido completo permanece visible,
- el banner `noscript` muestra un aviso amigable,
- la navegación sigue funcionando con enlaces normales, aunque sin el avance suave.

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
- **Fragmento de URL**: la parte que va después del símbolo `#`, por ejemplo `#03-niveles`; permite saltar a una sección específica.

## Qué hace cada parte del proyecto

- `site/index.html`
  - contiene todo el contenido de la guía en seis secciones.
  - incluye la navegación principal y los botones de paginación.
  - define la estructura semántica con `main`, `section`, `h2`, `ul`, `ol`.
  - usa `aria-hidden` para ocultar secciones inactivas.
  - utiliza `aria-live` para anunciar qué sección está activa.

- `site/css/styles.css`
  - da estilo al sitio con colores suaves y un diseño moderno.
  - hace que los botones, tarjetas y tablas sean legibles y accesibles.
  - agrega soporte responsive y mejoras visuales.
  - mantiene el contraste apropiado para una lectura cómoda.

- `package.json`
  - contiene un script opcional `serve` para ejecutar un servidor local con `http-server`.

## Estructura del proyecto

- `site/`
  - `index.html` — la página principal con todo el contenido.
  - `css/styles.css` — estilos del sitio.
  - `sections/` — fragmentos HTML por sección, usados como referencia histórica.
- `README.md` — documentación del proyecto.
- `package.json` — configuración de scripts opcionales.

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

