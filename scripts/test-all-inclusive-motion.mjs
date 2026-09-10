// Run: node scripts/test-all-inclusive-motion.mjs
import assert from 'node:assert/strict';
import { sampleCards, CARD_WIDTH, CARD_HEIGHT, BASE_Y } from '../october/themes/kv-vopros/assets/repairs/js/sections/all-inclusive-motion.js';
import { createScene } from '../october/themes/kv-vopros/assets/repairs/js/scroll-scene.js';

const close = (actual, expected, tolerance = 0.0001) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} != ${expected}`);
function topLeft([x, y, rotation]) {
    const angle = rotation * Math.PI / 180;
    const ox = CARD_WIDTH / 2;
    return [x + ox - Math.cos(angle) * ox + Math.sin(angle) * CARD_HEIGHT,
        BASE_Y + y + CARD_HEIGHT - Math.sin(angle) * ox - Math.cos(angle) * CARD_HEIGHT];
}

// Independent Figma fixtures for card 1 in each variant (87:3280–87:3284).
const firstCard = [
    [0, 192, 0], [-37.74597, 246.32678, -8.277102],
    [-67.97144, 307.21338, -16.781900], [-91.28613, 382.45447, -26.641004],
    [-101.54919, 465.32947, -37.093827],
];
for (let state = 0; state < 5; state++) {
    const cards = sampleCards(state / 4);
    const xy = topLeft(cards[0]);
    close(xy[0], firstCard[state][0]);
    close(xy[1], firstCard[state][1]);
    close(cards[0][2], firstCard[state][2]);
    // The newly arrived card must always land flat at the same base position.
    const newest = topLeft(cards[state]);
    close(newest[0], 0);
    close(newest[1], 192);
    close(cards[state][2], 0);
    close(cards[state][3], 1);
}
close(sampleCards(0.375)[2][3], 0.5); // ease-in-out halfway through card 3's entry
close(sampleCards(0.125)[0][2] / -8.277102, 0.684643, 0.00001); // CSS ease-out
for (const boundary of [0.25, 0.5, 0.75]) {
    const before = sampleCards(boundary - 1e-8);
    const after = sampleCards(boundary + 1e-8);
    before.forEach((card, i) => card.forEach((value, j) => close(value, after[i][j], 0.001)));
}
const forward = Array.from({ length: 101 }, (_, i) => sampleCards(i / 100));
for (let i = 100; i >= 0; i--) {
    assert.deepEqual(sampleCards(i / 100), forward[i]);
    forward[i].forEach(card => {
        assert(card.every(Number.isFinite));
        assert(card[3] >= 0 && card[3] <= 1);
    });
}
assert.deepEqual(sampleCards(-1), sampleCards(0));
assert.deepEqual(sampleCards(2), sampleCards(1));

// Exercise scroll progress and cancellation when reduced motion/mobile interrupts a frame.
const events = new Map();
const frames = new Map();
const queries = new Map();
let frameId = 0;
globalThis.window = {
    innerHeight: 1000,
    addEventListener: (name, fn) => events.set(name, fn),
    removeEventListener: name => events.delete(name),
    requestAnimationFrame: fn => { frames.set(++frameId, fn); return frameId; },
    cancelAnimationFrame: id => frames.delete(id),
    matchMedia: name => {
        const query = { matches: false, addEventListener: (_, fn) => { query.change = fn; }, removeEventListener: () => { query.change = null; } };
        queries.set(name, query);
        return query;
    },
};
// isSceneDisabled reads the same MediaQueryList instances as the change listeners.
const makeQuery = window.matchMedia;
window.matchMedia = name => queries.get(name) ?? makeQuery(name);
globalThis.getComputedStyle = () => ({ getPropertyValue: () => '4' });
let top = 0;
const classes = new Set();
const pin = { getBoundingClientRect: () => ({ top, height: 2000 }), classList: { add: x => classes.add(x), remove: x => classes.delete(x) } };
const seen = [];
const scene = createScene(pin, progress => seen.push(progress));
const flush = () => { const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn()); };
flush();
top = -500;
events.get('scroll')();
flush();
close(seen.at(-1), 0.5); // 100vh travel, not four viewports
for (const query of queries.values()) {
    events.get('scroll')();
    query.matches = true;
    query.change();
    assert(classes.has('is-static'));
    close(seen.at(-1), 1);
    const count = seen.length;
    flush();
    assert.equal(seen.length, count);
    query.matches = false;
    query.change();
    flush();
    assert(!classes.has('is-static'));
    close(seen.at(-1), 0.5);
}
events.get('scroll')();
scene.destroy();
assert.equal(frames.size, 0);
assert.equal(events.size, 0);
console.log('PASS: Figma endpoints, easing, continuity, reverse scroll, 100vh travel, mobile/reduced-motion cancellation');
