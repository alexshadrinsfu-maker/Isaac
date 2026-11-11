# ABYSSAL — playable build architecture

The checked-in workspace had no existing application framework, so this first build is a dependency-free browser game that can run from a static file server. It is designed as a portrait-first playable vertical slice, rather than pretending a Godot project or APK already exists.

- `index.html`, `style.css`: responsive portrait shell and accessible canvas host.
- `src/main.js`: browser lifecycle, canvas scaling, input and frame loop.
- `src/data.js`: character, enemy, item, biome and attack definitions.
- `src/generator.js`: deterministic seeded room graph and encounter/reward rolls.
- `src/game.js`: state machine, combat, movement, room traversal, save/progression.
- `src/render.js`: original procedural pixel-inspired art, arena, HUD and menus.

Core loop: select diver → seed a connected floor → clear a room with movement plus target-prioritized auto-fire → collect a mechanic-changing relic → choose a linked door → defeat the floor guardian → descend. All run randomness uses one seeded PRNG, so a displayed seed reproduces map and encounter rolls. Permanent unlocks/statistics and settings persist in localStorage. Browser touch input supports joystick plus an aim-drag/action control; keyboard supports desktop testing.

Future native Godot work can migrate these seams into Resources (content), a run/floor service (generation), independent combat actors, and presentation scenes. A native project/APK is **not** included because Godot is not installed in the current environment.
