# HxHdle MVP V2.5

MVP fan-made estilo LoLdle para Hunter × Hunter, hecho con HTML + CSS + JavaScript vanilla y un CSV local.

## Cambios V2.5
- El buscador ahora busca solo por `name`, no por arco, Nen, especie, alias, kana ni otros campos.
- El autocomplete usa coincidencia por inicio de nombre o apellido: `M` puede mostrar `Meruem` y `Hisoka Morow`, pero no personajes que solo tengan una M en otro campo.
- El intento manual con botón exige el nombre completo del personaje para evitar matches ambiguos.

- Paleta visual ajustada para acercarse más al logo clásico de Hunter × Hunter: blanco, rojo/magenta, naranjo/amarillo y verde del “X”.
- Look general más cercano al animé: fondo tipo mapa/pergamino, acentos rojos y verdes, botones más parecidos a colores del logo.
- En el historial, los intentos ahora se muestran invertidos: el intento más reciente queda arriba y el primer intento queda abajo.
- Se mantiene la revelación completa del retrato en el modo Splash al acertar.

## Cómo correrlo localmente

```bash
python -m http.server 8080
```

Luego abre:

```txt
http://localhost:8080
```

## GitHub Pages

Sube estos archivos a la raíz del repo:

```txt
index.html
styles.css
app.js
characters_v2.csv
README.md
.nojekyll
```

Luego activa Pages desde `Settings → Pages → Deploy from branch → main / root`.

## Disclaimer

Proyecto fan-made inspirado en Hunter × Hunter. Dataset local basado en Hunterpedia/Fandom. No afiliado a Yoshihiro Togashi, Shueisha, Nippon Animation, Madhouse ni Viz.
# HxHdle expanded character dataset V3

Dataset ampliado para el MVP HTML/JS vanilla.

## Archivos

- `characters_v3_expanded.csv`: nombre explícito de la nueva versión.
- `characters_v2.csv`: mismo contenido, pero con el nombre que ya espera el MVP actual.
- `assets/portraits/*.svg`: retratos placeholder locales para personajes nuevos sin URL estática verificada de Fandom.

## Resumen

- Personajes base: 21
- Personajes agregados: 69
- Total: 90

## Distribución aproximada

- Other / Main / Support: 24
- Chimera Ant: 18
- Zodiacs / Hunter Association: 15
- Phantom Troupe / Spider: 15
- Kakin / Succession: 11
- Greed Island: 7

## Notas de uso

Para probar rápido en la V2.5, copia `characters_v2.csv` y la carpeta `assets/` al mismo nivel que `index.html`.

Los personajes nuevos usan `splash_url` local tipo `assets/portraits/hxh_x.svg`, porque todavía no están todos los retratos estáticos de Hunterpedia validados. El campo `source_url` sí apunta a la página de Hunterpedia/Fandom correspondiente para futura limpieza.

Las pistas de quote son paráfrasis originales, no citas largas textuales.


## V2.6.1 - Fix carga CSV

Esta versión incluye el dataset expandido completo también embebido en `app.js`. Si abres `index.html` directo con `file://`, el navegador puede bloquear `fetch('characters_v2.csv')`; en ese caso la app usa el fallback completo de 90 personajes. En GitHub Pages o con `python -m http.server`, la app carga `characters_v2.csv` normalmente.


## V2.6.2

- Reemplaza el retrato placeholder de Ikalgo por imagen verificada desde Hunterpedia/Fandom ES.
- Actualiza también el CSV embebido de fallback para que el cambio funcione incluso si falla el fetch del CSV.


## V2.6.3 - Corrección masiva de imágenes

- Reemplazados placeholders locales por retratos/imágenes de Hunterpedia/Fandom para 68 personajes adicionales.
- Actualizado `characters_v2.csv`.
- Actualizado también el fallback CSV embebido en `app.js`, para que funcione aunque falle `fetch`.
- Los retratos siguen funcionando como sustituto de splash art para el MVP.
