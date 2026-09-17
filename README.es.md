# Site KauaArtx

[English](README.md) · [Português](README.pt-BR.md) · **Español**

La plataforma pública del canal [@KauaArtx](https://www.youtube.com/@KauaArtx): vídeos, historias de viaje, guías prácticas y el trabajo continuo de construir una vida nueva en Oxford — en portugués e inglés.

[Visitar kauaartx.vercel.app](https://kauaartx.vercel.app)

---

## Por qué existe

Un canal de YouTube no da dirección propia: el algoritmo decide quién ve qué, y el contenido escrito no tiene dónde vivir. Este sitio es el lugar donde las historias quedan enteras, localizables por búsqueda, y donde alguien que llegó por un vídeo puede entender el recorrido completo.

## Qué tiene

- **Contenido editorial** — artículos sobre Oxford, el ETA del Reino Unido, el sistema EES/ETIAS y el trabajo remoto, con un glosario y una página del capítulo actual.
- **Mapa de viajes interactivo**, construido con D3 y TopoJSON, con los datos cargados bajo demanda para no lastrar la primera visita.
- **Bilingüe de verdad** — portugués e inglés con 253 claves traducidas cada uno, no traducción automática superpuesta.
- **Feed RSS, sitemap e imágenes de Open Graph generadas por artículo**, para que los textos circulen fuera del sitio.
- **Formulario de contacto** con validación, campo trampa contra robots, límite de envíos y verificación de origen.

## Decisiones técnicas que merecen mención

- **Datos estructurados de persona** (JSON-LD) y vista previa social por página, para que el sitio se presente bien al compartirse.
- **El idioma se declara correctamente.** El atributo `lang` acompaña la ruta: `/` responde `pt` y `/en` responde `en`, lo que importa para lectores de pantalla y para la búsqueda.
- **Un 404 que existe de verdad.** Una dirección desconocida llega a un 404 propio, en ambos idiomas y con el estado HTTP correcto.
- **Cabeceras de seguridad** con CSP y HSTS configuradas en el origen.
- **Accesibilidad como requisito:** indicador de foco visible, `prefers-reduced-motion` respetado y objetivos táctiles adecuados en el móvil.
- **CI que verifica de verdad:** tipado, lint, pruebas y compilación en cada envío — la verificación más completa de los seis repositorios.

## Tecnologías

Next.js 15, React 19, TypeScript, next-intl, Supabase, D3/TopoJSON, Framer Motion, Vitest y Vercel.

## Desarrollo local

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

El sitio público funciona sin credenciales privadas. Supabase, el correo y el boletín necesitan las variables correspondientes de `.env.example`.

> **Nota sobre `package-lock.json`:** CI usa Node 22 (npm 10), que rechaza un lock escrito por npm 11. Si necesitas regenerarlo, usa `npx npm@10 install --package-lock-only`.

## Verificación

```powershell
npm.cmd run lint
npm.cmd run test
npm.cmd run build
npm.cmd audit --omit=dev
```

## Mapa del repositorio

```text
messages/         Textos de la interfaz en portugués e inglés
public/           Medios de marca y de viaje
scripts/          Preparación de los datos del mapa
src/app/          Páginas públicas, área de administración, feeds y metadatos
src/components/   Componentes editoriales, de viaje, mapa y navegación
src/data/         Viajes publicados y contenido curado
src/lib/          Integraciones con Supabase, lectura, mapa y YouTube
supabase/         Configuración de base de datos para publicación
testes/           Pruebas de contenido y del mapa
```

## Estado

Publicado y mantenido activamente en Vercel. El foco editorial actual es el canal @KauaArtx, los viajes, Oxford y el desarrollo personal.

Creado y mantenido por [Kauã Diniz Souza](https://github.com/Kauadsouza).
