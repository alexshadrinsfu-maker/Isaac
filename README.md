# ABYSSAL — The Drowned Beneath

A portrait-first, one-thumb action roguelike. Move through the drowned ruins, let your living relic choose a target, and weave strange upgrades into a build before facing each floor's guardian.

## Play

Serve this folder with any static HTTP server and open `/` on desktop or a phone. No package install or game asset downloads are required; Google Fonts are optional. On desktop: WASD / arrow keys to move, space toggles auto-fire, E uses a relic, and Escape pauses. On touch: drag the lower thumbstick to move; hold **AIM** and drag to aim manually, or tap it to switch auto-fire off/on; tap the relic button to activate. The pause menu provides hand, stick size, sensitivity, and sound settings.

A small local server is enough, for example `python3 -m http.server 3002`, then open `http://localhost:3002`.

## Build status

This workspace did not contain a game or Godot project at the start. The current deliverable is a playable browser build with original canvas-rendered art, room progression, enemies, boss encounters, deterministic seeds, relic synergies, local persistent unlocks, and touch controls. In Chromium, movement, auto-targeted combat, relic pickup, door transitions, and settings persistence were exercised; three seeded runs were simulated through victory. This is a functional check, not a comprehensive balance or device-compatibility test. It is not an Android APK; Godot and its export templates were unavailable in the environment. See [ARCHITECTURE.md](ARCHITECTURE.md).

## Controls

- **Move:** thumbstick / WASD / arrows
- **Attack:** smart auto-fire (target scoring considers distance, threat, approach, and clear line of sight)
- **Manual aim:** hold AIM and drag in a direction
- **Active relic:** tap button / E
- **Pause/settings:** top-right / Escape
- **Doors:** walk into a lit doorway after the room is clear
