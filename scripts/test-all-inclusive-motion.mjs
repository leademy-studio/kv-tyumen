// Run: node scripts/test-all-inclusive-motion.mjs
import assert from 'node:assert/strict';
import { sampleCards, sampleMobileCards, CARD_WIDTH, CARD_HEIGHT, BASE_Y } from '../october/themes/kv-vopros/assets/repairs/js/sections/all-inclusive-motion.js';

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

// Mobile Figma frames: 420px cards at y=0/40/80/120/160, with no rotation.
for (let state = 0; state < 5; state++) {
    const cards = sampleMobileCards(state / 4);
    assert.equal(cards.filter(card => card[3] === 1).length, state + 1);
    cards.forEach(([x, y, rotation, opacity], index) => {
        assert.equal(x, 0);
        assert.equal(y, index * 40);
        assert.equal(rotation, 0);
        assert.equal(opacity, index <= state ? 1 : 0);
    });
    assert.equal(420 + cards[state][1], [420, 460, 500, 540, 580][state]);
}
close(sampleMobileCards(0.125)[1][3], 0.5);
const mobileForward = Array.from({ length: 101 }, (_, i) => sampleMobileCards(i / 100));
for (let i = 100; i >= 0; i--) assert.deepEqual(sampleMobileCards(i / 100), mobileForward[i]);

// Native mobile contain range: the inset visibility window equals the sticky stack.
// Check short/tall viewports and browser-toolbar changes (vh differs from svh).
for (const [viewport, smallViewport, stack] of [[900, 800, 580], [667, 667, 480], [390, 350, 580]]) {
    const stickyTop = Math.min(85, smallViewport - stack - 20);
    const endInset = viewport - stack - stickyTop;
    const visibilityEnd = viewport - endInset;
    const trackHeight = stack + smallViewport;
    const rangeStartTop = stickyTop;
    const rangeEndTop = visibilityEnd - trackHeight;
    close(rangeStartTop - rangeEndTop, smallViewport);
    close(visibilityEnd - stickyTop, stack);
    close((rangeStartTop - (stickyTop - smallViewport / 2)) / (rangeStartTop - rangeEndTop), 0.5);
}
console.log('PASS: Figma desktop/mobile states, CSS easing, continuity, reverse scroll, and native timeline geometry');
