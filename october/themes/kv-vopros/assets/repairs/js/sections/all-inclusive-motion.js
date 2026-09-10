// Figma 87:3280–87:3284: [x, y, Figma rotation, opacity], in a 1920 × 960 scene.
// Figma rotation has the opposite sign to CSS rotation.
export const CARD_WIDTH = 713.1428833007812;
export const CARD_HEIGHT = 576;
export const BASE_Y = 192;

const base = [0, BASE_Y, 0, 1];
const hidden = [944, BASE_Y, 0, 0];
export const FRAMES = [
    [base, [1043.83398, 237.63214, -5.206402, 1], hidden, hidden, hidden],
    [[-37.74597, 246.32678, 8.277102, 1], base, hidden, hidden, hidden],
    [[-67.97144, 307.21338, 16.781900, 1], [-38.67322, 247.90178, 8.504796, 1], base, hidden, hidden],
    [[-91.28613, 382.45447, 26.641004, 1], [-72.57367, 319.00983, 18.363902, 1], [-44.04688, 257.30624, 9.859105, 1], base, [1054.09253, 314.92499, -9.587389, 1]],
    [[-101.54919, 465.32947, 37.093827, 1], [-94.65991, 399.53571, 28.816724, 1], [-77.80103, 333.68036, 20.311927, 1], [-46.33313, 261.47144, 10.452822, 1], base],
];

// Convert Figma's top-left translation to CSS with a bottom-center pivot.
// This preserves each designed endpoint while using the annotated rotation origin.
function withBottomCenterOrigin([x, y, rotation, opacity]) {
    const angle = -rotation * Math.PI / 180;
    const ox = CARD_WIDTH / 2;
    const oy = CARD_HEIGHT;
    return [
        x - ox + Math.cos(angle) * ox - Math.sin(angle) * oy,
        y - BASE_Y - oy + Math.sin(angle) * ox + Math.cos(angle) * oy,
        -rotation,
        opacity,
    ];
}

const transforms = FRAMES.map(frame => frame.map(withBottomCenterOrigin));
const clamp = value => Math.max(0, Math.min(1, value));
const mix = (a, b, t) => a + (b - a) * t;

// Solve the CSS timing curve by x; a polynomial in scroll progress is not CSS easing.
function easing(progress, x1, x2) {
    if (progress <= 0 || progress >= 1) return clamp(progress);
    let low = 0;
    let high = 1;
    let t = progress;
    for (let i = 0; i < 24; i++) {
        const x = 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t ** 2 * x2 + t ** 3;
        if (x < progress) low = t;
        else high = t;
        t = (low + high) / 2;
    }
    return 3 * (1 - t) * t ** 2 + t ** 3;
}

export function sampleCards(progress) {
    const position = clamp(progress) * (FRAMES.length - 1);
    const index = Math.min(Math.floor(position), FRAMES.length - 2);
    const t = position - index;
    const movement = easing(t, 0, 0.58); // ease-out
    const opacity = easing(t, 0.42, 0.58); // ease-in-out
    return transforms[index].map((from, card) => {
        const to = transforms[index + 1][card];
        return from.map((value, property) => mix(value, to[property], property === 3 ? opacity : movement));
    });
}
