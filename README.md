# HxHdle MVP V2.1

Versión full frontend con HTML, CSS y JavaScript vanilla.

## Qué cambió en V2

- Separación real de modos:
  1. **Classic**: sin pistas; solo feedback por coincidencias, como LoLdle Classic.
  2. **Quote**: adivinar por frase/paráfrasis típica.
  3. **Ability**: adivinar por descripción de habilidad/Nen, sin imágenes.
  4. **Emoji**: primer emoji descubierto; cada intento revela otro.
  5. **Splash**: retrato cubierto por mosaicos; cada intento revela más.
- Los modos se desbloquean en secuencia diaria.
- El CSV se actualizó a `characters_v2.csv` con columnas nuevas:
  - `quote_clue`
  - `ability_clue`
  - `emoji_clue_steps`
  - `game_modes_ready`
- Sigue funcionando 100% frontend; el CSV local simula lo que después podría servir un backend.

## Cómo correr

```bash
cd hxhdle_mvp_v2
python -m http.server 8080
```

Luego abre:

```txt
http://localhost:8080
```

También puedes abrir `index.html` directo; si el navegador bloquea el CSV por `file://`, `app.js` tiene un fallback embebido.

## Archivos

- `index.html`: estructura de la app.
- `styles.css`: visual dark/minimalista con animaciones.
- `app.js`: lógica del juego, modos, comparación, autocomplete y progreso local.
- `characters_v2.csv`: dataset local para el MVP.

## Nota de datos

Las imágenes son retratos/portraits de Hunterpedia/Fandom usados como sustituto de splash art. Las frases están en forma de paráfrasis para no depender de citas largas.


## V2.1

- Corrige el z-index del autocomplete para que el dropdown quede por encima de la barra inferior/progress strip.
- Ajusta la altura del dropdown en pantallas pequeñas.
