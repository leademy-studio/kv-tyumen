/* Точка входа: подключает модули секций. */

import * as header from "./sections/header.js";
import * as services from "./sections/services.js";
import * as allInOne from "./sections/all-in-one.js";
import * as animated from "./sections/animated.js";
import * as cases from "./sections/cases.js";
import * as aboutUs from "./sections/about-us.js";

document.documentElement.classList.remove("no-js");

for (const section of [header, services, allInOne, animated, cases, aboutUs]) {
    section.init();
}
