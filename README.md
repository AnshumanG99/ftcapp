# FTC Game Planner

A browser-based match strategy board for FIRST Tech Challenge teams.

**Live app: [ftcgameplanner.org](https://www.ftcgameplanner.org/)**

Drag robots and game elements around a scaled field image, draw paths and zones on top of them, and plan a match visually — no talking required.

---

## Why this exists

Alliance strategy in FTC normally happens verbally, in a loud venue, in the two minutes before a match. That workflow excludes deaf and hard-of-hearing competitors, and it isn't great for anyone else either.

Game Planner replaces the spoken callout with a shared visual: point at the field, draw the path, everyone sees the same plan. It runs in any browser on any device a team already has at the venue — no install, no account, no network dependency after load.

Currently used by 10,000+ people across 30+ countries.

---

## Features

**Field setup**
- Add and remove up to two red and two blue robots, each starting at alliance-appropriate positions
- Add and remove game elements for the current season (Purple and Green Artifacts for DECODE)
- Drag any robot or element anywhere on the field with the mouse or a finger

**Drawing**
- Freehand path drawing on a canvas layer over the field
- Three path colors (white, blue, red) for distinguishing alliance plans
- Eraser to clear the drawing layer

**Usability**
- Full touch support — works on phones and tablets, not just laptops
- Portrait-mode detection prompts users to rotate to landscape
- In-app help and about panels
- Feedback form linked from the about panel

---

## How it's built

React 18 (Create React App), deployed on Vercel. No drawing or drag-and-drop libraries — the interaction layer is written from scratch in vanilla JavaScript.

| File | Responsibility |
| --- | --- |
| `src/App.js` | Layout, control panel, help/about state, orientation overlay |
| `src/moveable.js` | Drag-and-drop for robots and game elements |
| `src/draw.js` | Canvas overlay, freehand drawing, color switching, erase |
| `src/addRobot.js` | Show/hide robots per alliance with seeded positions |
| `src/addItems.js` | Dynamic creation and removal of game element sprites |

### Two problems worth calling out

**Unified pointer handling.** Every interaction had to work with both a mouse and a finger. Rather than maintaining two code paths, `moveable.js` and `draw.js` normalize `MouseEvent` and `TouchEvent` through a single position resolver, and register both listener sets against the same handlers. Touch listeners are bound with `{ passive: false }` so drawing on mobile doesn't scroll the page out from under the user.

```js
function getPointerPosition(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
        return { x: e.touches[0].clientX - rect.left,
                 y: e.touches[0].clientY - rect.top };
    }
    return { x: e.clientX - rect.left,
             y: e.clientY - rect.top };
}
```

**Position drift across devices.** Storing element positions in pixels meant a robot placed on a laptop landed somewhere else on a tablet, and moved again on window resize. Positions are instead committed as viewport percentages on drag end, clamped to `[0, 100]` so nothing can be dragged off-field:

```js
const leftPercentage = (divRect.left / viewportWidth) * 100;
div.style.left = Math.max(0, Math.min(100, leftPercentage)) + '%';
```

---

## Season support

The app is re-skinned each year for the current FTC game. Previous seasons' assets are kept in the repo.

| Season | Game | Assets |
| --- | --- | --- |
| 2025–26 | DECODE | `src/assets/` |
| 2024–25 | INTO THE DEEP | `src/assetsarchive2024IntoTheDeep/` |
| 2023–24 | CENTERSTAGE | `src/assetsarchive2023CenterStage/` |

---

## Running locally

```bash
git clone https://github.com/AnshumanG99/ftcapp.git
cd ftcapp
npm install
npm start
```

Opens at `http://localhost:3000`. Build for production with `npm run build`.

---

## Roadmap

- [ ] Save and share plans via URL
- [ ] Undo/redo on the drawing layer
- [ ] Keyboard controls for robot placement
- [ ] Replace the vestigial `src/server.js` counter with the Vercel Analytics figure

---

## Feedback

Bug reports and suggestions go through [this form](https://docs.google.com/forms/d/e/1FAIpQLSdp33OZ8TGAhM5JNLJoi-SYTjGm42ZYc6X7WOmrPG90YlEQKg/viewform?usp=sf_link), or open an issue.

---

Built and maintained by [Anshuman Garg](https://github.com/AnshumanG99).
