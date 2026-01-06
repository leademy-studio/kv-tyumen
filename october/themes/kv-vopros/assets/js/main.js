

/* === Скрипты, перенесенные из index.html === */

function t_onReady(func) {
                if (document.readyState != "loading") {
                    func();
                } else {
                    document.addEventListener("DOMContentLoaded", func);
                }
            }
            function t_onFuncLoad(funcName, okFunc, time) {
                if (typeof window[funcName] === "function") {
                    okFunc();
                } else {
                    setTimeout(function () {
                        t_onFuncLoad(funcName, okFunc, time);
                    }, time || 100);
                }
            }
            function t396_initialScale(t) {
                var e = document.getElementById("rec" + t);
                if (e) {
                    var i = e.querySelector(".t396__artboard");
                    if (i) {
                        window.tn_scale_initial_window_width ||
                            (window.tn_scale_initial_window_width = document.documentElement.clientWidth);
                        var a = window.tn_scale_initial_window_width,
                            r = [],
                            n,
                            l = i.getAttribute("data-artboard-screens");
                        if (l) {
                            l = l.split(",");
                            for (var o = 0; o < l.length; o++) r[o] = parseInt(l[o], 10);
                        } else r = [320, 480, 640, 960, 1200];
                        for (var o = 0; o < r.length; o++) {
                            var d = r[o];
                            a >= d && (n = d);
                        }
                        var _ = "edit" === window.allrecords.getAttribute("data-tilda-mode"),
                            c = "center" === t396_getFieldValue(i, "valign", n, r),
                            s = "grid" === t396_getFieldValue(i, "upscale", n, r),
                            w = t396_getFieldValue(i, "height_vh", n, r),
                            g = t396_getFieldValue(i, "height", n, r),
                            u =
                                (!!window.opr && !!window.opr.addons) ||
                                !!window.opera ||
                                -1 !== navigator.userAgent.indexOf(" OPR/");
                        if (!_ && c && !s && !w && g && !u) {
                            var h = parseFloat((a / n).toFixed(3)),
                                f = [i, i.querySelector(".t396__carrier"), i.querySelector(".t396__filter")],
                                v = Math.floor(parseInt(g, 10) * h) + "px",
                                p;
                            i.style.setProperty("--initial-scale-height", v);
                            for (var o = 0; o < f.length; o++)
                                f[o].style.setProperty("height", "var(--initial-scale-height)");
                            t396_scaleInitial__getElementsToScale(i).forEach(function (t) {
                                t.style.zoom = h;
                            });
                        }
                    }
                }
            }
            function t396_scaleInitial__getElementsToScale(t) {
                return t
                    ? Array.prototype.slice.call(t.children).filter(function (t) {
                          return t && (t.classList.contains("t396__elem") || t.classList.contains("t396__group"));
                      })
                    : [];
            }
            function t396_getFieldValue(t, e, i, a) {
                var r,
                    n = a[a.length - 1];
                if (
                    !(r =
                        i === n
                            ? t.getAttribute("data-artboard-" + e)
                            : t.getAttribute("data-artboard-" + e + "-res-" + i))
                )
                    for (var l = 0; l < a.length; l++) {
                        var o = a[l];
                        if (
                            !(o <= i) &&
                            (r =
                                o === n
                                    ? t.getAttribute("data-artboard-" + e)
                                    : t.getAttribute("data-artboard-" + e + "-res-" + o))
                        )
                            break;
                    }
                return r;
            }
            (window.TN_SCALE_INITIAL_VER = "1.0"), (window.tn_scale_initial_window_width = null);;

!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "448420000255317");
            fbq("track", "PageView");;

!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "448420000255317");
            fbq("track", "PageView");;

(function (m, e, t, r, i, k, a) {
                m[i] =
                    m[i] ||
                    function () {
                        (m[i].a = m[i].a || []).push(arguments);
                    };
                m[i].l = 1 * new Date();
                (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(87142160, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            });;

window.dataLayer = window.dataLayer || [];;

(function () {
                if (
                    /bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(
                        navigator.userAgent
                    ) === false &&
                    typeof sessionStorage != "undefined" &&
                    sessionStorage.getItem("visited") !== "y" &&
                    document.visibilityState
                ) {
                    var style = document.createElement("style");
                    style.type = "text/css";
                    style.innerHTML =
                        "@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}";
                    document.getElementsByTagName("head")[0].appendChild(style);
                    function t_setvisRecs() {
                        var alr = document.querySelectorAll(".t-records");
                        Array.prototype.forEach.call(alr, function (el) {
                            el.classList.add("t-records_animated");
                        });
                        setTimeout(function () {
                            Array.prototype.forEach.call(alr, function (el) {
                                el.classList.add("t-records_visible");
                            });
                            sessionStorage.setItem("visited", "y");
                        }, 400);
                    }
                    document.addEventListener("DOMContentLoaded", t_setvisRecs);
                }
            })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1531676791");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1531676791");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1531686931");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1531686931");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1524903941");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1524903941");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1520460341");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1520460341");
                        });
                    });;

(function () {
                                    function annexxAddStyle(numberMod, codestyle, idblock) {
                                        let styleBlock = document.querySelector(
                                            "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                        );
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' +
                                                        numberMod +
                                                        (idblock ? idblock : "") +
                                                        '"></style>'
                                                );
                                            styleBlock = document.querySelector(
                                                "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                            );
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    function annexxRemoveStyle(numberMod, idblock) {
                                        let block = document.querySelector(
                                            "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                        );
                                        if (block) block.remove();
                                    }
                                    let arrWidth = "0-479,480-639,640-959,960-1199,1200-20000"
                                            .split(/,\s|,/g)
                                            .map((e) => e.split("-").map((e) => +e)),
                                        windowWidth =
                                            /Mobi/i.test(window.navigator.userAgent) && navigator.maxTouchPoints
                                                ? window.outerWidth
                                                : window.innerWidth,
                                        shadow =
                                            "0px 0px 0px 0px rgba(255, 255, 255, 1)" !==
                                            "0px 0px 0px 0px rgba(255, 255, 255, 1)"
                                                ? "0px 0px 0px 0px rgba(255, 255, 255, 1)"
                                                : false,
                                        d = Math.floor(Math.random() * 1e15),
                                        isSafari = (function () {
                                            let ua = navigator.userAgent;
                                            if (/safari/gi.test(ua) && !/chrome/gi.test(ua)) return true;
                                            else return false;
                                        })(),
                                        noUrlShow = "" ? "".replace(/\s+/g, "").split(",") : false,
                                        hr = "href",
                                        hs = "hash",
                                        hp = "pathname",
                                        ho = "origin",
                                        hh = "host";
                                    if (
                                        !(
                                            noUrlShow &&
                                            (noUrlShow.some((e) => e === location[hr]) ||
                                                noUrlShow
                                                    .map((e) => e.replace(/http\w*\:\/+|#.+/gi, ""))
                                                    .some((e) => e === location[hh] + location[hp]))
                                        ) &&
                                        "#rec1520460341" &&
                                        arrWidth.some((e) =>
                                            e[0] <= windowWidth && windowWidth <= e[1] ? true : false
                                        )
                                    ) {
                                        annexxAddStyle("016", ` #t-header { position: relative; } `);
                                        if ("fixed" === "fixed") {
                                            annexxAddStyle("016", ` #rec1520460341 { display: none; } `, d + "hide");
                                        }
                                        annexxAddStyle(
                                            "016",
                                            ` #rec1520460341 { -webkit-transition: -webkit-transform 0s linear 0s !important; transition: transform 0s linear 0s !important; } `,
                                            d + "notrans"
                                        );
                                        if (0) {
                                            if (false) {
                                                annexxAddStyle(
                                                    "016",
                                                    ` #rec1520460341 { padding-bottom: 0px !important; } `
                                                );
                                            } else {
                                                annexxAddStyle(
                                                    "016",
                                                    ` #rec1520460341 { padding-top: 0px !important; } `
                                                );
                                            }
                                        }
                                        setTimeout(function () {
                                            annexxRemoveStyle("016", d + "notrans");
                                        }, 200);
                                        if ("fixed" === "fixed" && (0 || "")) {
                                            annexxAddStyle(
                                                "016",
                                                ` #rec1520460341 { background-color: transparent !important; } ${(function () {
                                                    return "#rec1520460341"
                                                        .split(/,\s|,/g)
                                                        .map((e) => e + " .t396__artboard")
                                                        .join(",");
                                                })()} { background-color: transparent !important; } `,
                                                d + "bg"
                                            );
                                        }
                                        document.addEventListener("DOMContentLoaded", function () {
                                            let block = document.querySelectorAll("#rec1520460341");
                                            block.forEach((block) => {
                                                let zero = block.querySelector(".t396__artboard") ? true : false,
                                                    pn;
                                                if (zero) block.style.pointerEvents = "none";
                                                if (
                                                    (block.querySelector(".t396__artboard") &&
                                                        getComputedStyle(block.querySelector(".t396__artboard"))
                                                            .backgroundColor === "rgba(0, 0, 0, 0)") ||
                                                    ("fixed" === "fixed" && (0 || ""))
                                                ) {
                                                    let int = setInterval(function () {
                                                        if (document.body.style.pointerEvents !== "none") {
                                                            clearInterval(int);
                                                            setTimeout(() => {
                                                                if (zero) block.style.pointerEvents = "";
                                                                let t = [];
                                                                block.querySelectorAll(".t396__elem").forEach((e) => {
                                                                    if (getComputedStyle(e).pointerEvents !== "none")
                                                                        t.push(
                                                                            `#${block.id} .${Array.from(e.classList).find((el) => /tn\-elem__/.test(el))}`
                                                                        );
                                                                });
                                                                if (t.length)
                                                                    annexxAddStyle(
                                                                        "016",
                                                                        `${t.join(",")} {pointer-events: all;}`,
                                                                        "pe" + d
                                                                    );
                                                                if (zero) block.style.pointerEvents = "none";
                                                                pn = true;
                                                            }, 1e3);
                                                        }
                                                    }, 500);
                                                } else if (zero) block.style.pointerEvents = "";
                                                switch ("fixed") {
                                                    case "overlay":
                                                        annexxAddStyle(
                                                            "016",
                                                            ` #${block.id} { position: absolute !important; width: 100%; z-index: 9999 !important; ${(function () {
                                                                if (shadow)
                                                                    return "box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);";
                                                                else return "";
                                                            })()} } .t-body_popupshowed #${block.id} { z-index: -1 !important; } `
                                                        );
                                                        break;
                                                    case "fixed":
                                                        function addStyle() {
                                                            let top = false ? 100 : -100;
                                                            annexxAddStyle(
                                                                "016",
                                                                ` #${block.id}.fixed-zero${d} { -webkit-transform: translateY(${top}%); transform: translateY(${top}%); -webkit-transition: -webkit-transform 200ms linear 0s ${(function () {
                                                                    if (shadow) {
                                                                        return ", box-shadow 200ms linear 0s";
                                                                    } else return "";
                                                                })()} ${(function () {
                                                                    if (0 || "") {
                                                                        return ", background-color calc(200ms - 100ms) linear";
                                                                    } else return "";
                                                                })()}; transition: transform 200ms linear 0s ${(function () {
                                                                    if (shadow) {
                                                                        return ", box-shadow 200ms linear 0s";
                                                                    } else return "";
                                                                })()} ${(function () {
                                                                    if (0 || "") {
                                                                        return ", background-color calc(200ms - 100ms) linear";
                                                                    } else return "";
                                                                })()}; ${(function () {
                                                                    if (shadow) {
                                                                        return "box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);";
                                                                    } else return "";
                                                                })()} } #${block.id}.fixed-zero${d} .t396__artboard { -webkit-transition: background-color 200ms linear; transition: background-color 200ms linear; } #${block.id}.fixed-zero${d}.show-fixed-zero { -webkit-transform: translateY(0); transform: translateY(0); ${(function () {
                                                                    if (shadow) {
                                                                        return "box-shadow: " + shadow + ";";
                                                                    } else return "";
                                                                })()} } #${block.id} .tmenu-mobile_positionfixed { position: unset !important; } `
                                                            );
                                                            if (block) block.classList.add(`fixed-zero${d}`);
                                                        }
                                                        annexxAddStyle(
                                                            "016",
                                                            ` #${block.id} { position: fixed !important; ${(function () {
                                                                return false
                                                                    ? `bottom: 0px !important;`
                                                                    : "top: 0 !important;";
                                                            })()} width: 100%; height: fit-content; z-index: 9999 !important; } .t-body_popupshowed #${block.id} { z-index: -1 !important; } `
                                                        );
                                                        if (0 || "") {
                                                            annexxRemoveStyle("016", d + "bg");
                                                            setTimeout(() => {
                                                                let bgScrollThreshold = 0,
                                                                    bgBlockSelector = "";
                                                                if (bgBlockSelector) {
                                                                    let bgTriggerBlock =
                                                                        document.querySelector(bgBlockSelector);
                                                                    if (bgTriggerBlock) {
                                                                        bgScrollThreshold = bgTriggerBlock.offsetTop;
                                                                    }
                                                                }
                                                                let artboard = zero
                                                                        ? block.querySelector(".t396__artboard")
                                                                        : block,
                                                                    elem = block.querySelectorAll(".t396__elem"),
                                                                    bgcolor =
                                                                        getComputedStyle(artboard).backgroundColor;
                                                                if (block.querySelector(".t396__artboard"))
                                                                    block.style = "rgba(0, 0, 0, 0)";
                                                                function showBG() {
                                                                    if (pageYOffset >= bgScrollThreshold) {
                                                                        if (zero) block.style.pointerEvents = "";
                                                                        artboard.style.backgroundColor = bgcolor;
                                                                    } else {
                                                                        if (zero && pn)
                                                                            block.style.pointerEvents = "none";
                                                                        artboard.style.backgroundColor = "transparent";
                                                                    }
                                                                }
                                                                showBG();
                                                                window.addEventListener("scroll", showBG);
                                                            }, 100);
                                                        }
                                                        let inEnd = false;
                                                        if ((0 || "") && !true) {
                                                            let int = setInterval(function () {
                                                                if (window.tn_scale_factor) {
                                                                    clearInterval(int);
                                                                    addStyle();
                                                                    let opacityready = false;
                                                                    inEnd = true;
                                                                    let scrollThreshold =
                                                                            0 && false ? 0 * window.tn_scale_factor : 0,
                                                                        scrollBlockSelector = "";
                                                                    if (scrollBlockSelector) {
                                                                        let triggerBlock =
                                                                            document.querySelector(scrollBlockSelector);
                                                                        if (triggerBlock) {
                                                                            scrollThreshold = triggerBlock.offsetTop;
                                                                        }
                                                                    }
                                                                    let hideScrollThreshold =
                                                                            0 && false ? 0 * window.tn_scale_factor : 0,
                                                                        hideScrollBlockSelector = "";
                                                                    if (hideScrollBlockSelector) {
                                                                        let hideTriggerBlock =
                                                                            document.querySelector(
                                                                                hideScrollBlockSelector
                                                                            );
                                                                        if (hideTriggerBlock) {
                                                                            setTimeout(() => {
                                                                                hideScrollThreshold =
                                                                                    hideTriggerBlock.offsetTop;
                                                                            }, 1e3);
                                                                        }
                                                                    }
                                                                    window.addEventListener("scroll", function (e) {
                                                                        if (
                                                                            false &&
                                                                            window.innerHeight +
                                                                                window.pageYOffset +
                                                                                30 >=
                                                                                Math.max(
                                                                                    document.documentElement
                                                                                        .scrollHeight,
                                                                                    document.documentElement
                                                                                        .offsetHeight,
                                                                                    document.documentElement
                                                                                        .clientHeight
                                                                                )
                                                                        )
                                                                            block.classList.remove("show-fixed-zero");
                                                                        else if (
                                                                            window.pageYOffset >= scrollThreshold &&
                                                                            (hideScrollThreshold
                                                                                ? window.pageYOffset <=
                                                                                  hideScrollThreshold
                                                                                : true)
                                                                        ) {
                                                                            if (!opacityready) {
                                                                                opacityready = true;
                                                                            }
                                                                            block.classList.add("show-fixed-zero");
                                                                        } else
                                                                            block.classList.remove("show-fixed-zero");
                                                                    });
                                                                }
                                                            }, 200);
                                                        } else if (true) {
                                                            let int = setInterval(function () {
                                                                if (window.tn_scale_factor) {
                                                                    clearInterval(int);
                                                                    let scrF = function (e) {
                                                                        if (
                                                                            window.pageYOffset >=
                                                                            (function () {
                                                                                let scrollThreshold =
                                                                                        0 && false
                                                                                            ? 0 * window.tn_scale_factor
                                                                                            : 0,
                                                                                    scrollBlockSelector = "";
                                                                                if (scrollBlockSelector) {
                                                                                    let triggerBlock =
                                                                                        document.querySelector(
                                                                                            scrollBlockSelector
                                                                                        );
                                                                                    if (triggerBlock) {
                                                                                        setTimeout(() => {
                                                                                            scrollThreshold =
                                                                                                triggerBlock.offsetTop;
                                                                                        }, 1e3);
                                                                                    }
                                                                                }
                                                                                return scrollThreshold;
                                                                            })()
                                                                        ) {
                                                                            window.removeEventListener("scroll", scrF);
                                                                        }
                                                                    };
                                                                    window.addEventListener("scroll", scrF);
                                                                }
                                                            }, 200);
                                                        } else if (shadow) {
                                                            annexxAddStyle(
                                                                "016",
                                                                ` #${block.id} { box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1); } `
                                                            );
                                                        }
                                                        if (true) {
                                                            block.style.transitionDuration = "0ms";
                                                            setTimeout(() => {
                                                                block.style.transitionDuration = "";
                                                            }, 400);
                                                            addStyle();
                                                            let opacityready = false,
                                                                pos = window.scrollY > 0 ? window.scrollY : 0;
                                                            if (!opacityready) {
                                                                opacityready = true;
                                                            }
                                                            let reverseScrollThreshold = 1200,
                                                                reverseBlockSelector = "";
                                                            if (reverseBlockSelector) {
                                                                let reverseTriggerBlock =
                                                                    document.querySelector(reverseBlockSelector);
                                                                if (reverseTriggerBlock) {
                                                                    setTimeout(() => {
                                                                        reverseScrollThreshold =
                                                                            reverseTriggerBlock.offsetTop;
                                                                    }, 1e3);
                                                                }
                                                            }
                                                            if (!pos && !reverseScrollThreshold)
                                                                block.classList.add("show-fixed-zero");
                                                            window.addEventListener("scroll", function (e) {
                                                                let posnew = window.scrollY > 0 ? window.scrollY : 0,
                                                                    isScrollingUp = posnew <= pos;
                                                                if (isScrollingUp && posnew >= reverseScrollThreshold) {
                                                                    block.classList.add("show-fixed-zero");
                                                                } else {
                                                                    block.classList.remove("show-fixed-zero");
                                                                }
                                                                pos = posnew;
                                                            });
                                                        }
                                                        if (!inEnd && false && !true) {
                                                            addStyle();
                                                            window.addEventListener("scroll", function (e) {
                                                                let s = window.innerHeight + window.pageYOffset;
                                                                if (isSafari && s - 10 === document.body.offsetHeight)
                                                                    block.classList.add("show-fixed-zero");
                                                                else if (s + 30 >= document.body.offsetHeight)
                                                                    block.classList.remove("show-fixed-zero");
                                                                else block.classList.add("show-fixed-zero");
                                                            });
                                                            if (!(0 || "") && !window.pageYOffset)
                                                                block.classList.add("show-fixed-zero");
                                                        }
                                                        break;
                                                }
                                                if ("") {
                                                    document.querySelectorAll("").forEach((e) => {
                                                        e.addEventListener("click", () => {
                                                            block.classList.remove("show-fixed-zero");
                                                            setTimeout(() => {
                                                                block.remove();
                                                            }, 400);
                                                        });
                                                    });
                                                    annexxAddStyle("016", ` { cursor: pointer; } `);
                                                }
                                            });
                                            annexxRemoveStyle("016", d + "hide");
                                            if (0 || "") {
                                                let shape = ""
                                                        ? document.querySelectorAll(
                                                              ""
                                                                  .split(/,\s|,/g)
                                                                  .map((e) => e + " .tn-atom")
                                                                  .join(",")
                                                          )
                                                        : false,
                                                    text = ""
                                                        ? document.querySelectorAll(
                                                              ""
                                                                  .split(/,\s|,/g)
                                                                  .map((e) => e + " .tn-atom")
                                                                  .join(",")
                                                          )
                                                        : false;
                                                if (shape) {
                                                    annexxAddStyle(
                                                        "016",
                                                        ` ${""
                                                            .split(/,\s|,/g)
                                                            .map((e) => e + " .tn-atom")
                                                            .join(",")} { transition: background-color 300ms linear; } `
                                                    );
                                                }
                                                if (text) {
                                                    annexxAddStyle(
                                                        "016",
                                                        ` ${""
                                                            .split(/,\s|,/g)
                                                            .map((e) => e + " .tn-atom")
                                                            .join(",")} { transition: color 300ms linear; } `
                                                    );
                                                }
                                                let triggerPosition,
                                                    triggerBlock = "" ? document.querySelector("") : null;
                                                if (triggerBlock) {
                                                    triggerPosition = triggerBlock.offsetTop;
                                                } else {
                                                    triggerPosition = 0;
                                                }
                                                if (triggerPosition > 0) {
                                                    window.addEventListener("scroll", function (e) {
                                                        let posnew = window.pageYOffset,
                                                            pos = 0;
                                                        if (triggerPosition <= posnew) {
                                                            if (shape) {
                                                                shape.forEach(
                                                                    (e) =>
                                                                        (e.style.backgroundColor = "rgba(0, 0, 0, 1)")
                                                                );
                                                            }
                                                            if (text) {
                                                                text.forEach(
                                                                    (e) => (e.style.color = "rgba(0, 0, 0, 1)")
                                                                );
                                                            }
                                                        } else {
                                                            if (shape) {
                                                                shape.forEach((e) => (e.style.backgroundColor = ""));
                                                            }
                                                            if (text) {
                                                                text.forEach((e) => (e.style.color = ""));
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    if (!window.nlm068obj) {
                                        window.nlm068obj = { openSide: "" };
                                    }
                                    if (!window.nlmFixedZeroBlocksObj068) {
                                        window.nlmFixedZeroBlocksObj068 = { top: "", bottom: "", list: [] };
                                    }
                                    function t_ready(t) {
                                        "loading" != document.readyState
                                            ? t()
                                            : document.addEventListener
                                              ? document.addEventListener("DOMContentLoaded", t)
                                              : document.attachEvent("onreadystatechange", function () {
                                                    "loading" != document.readyState && t();
                                                });
                                    }
                                    t_ready(function () {
                                        let backgroundElem = document.querySelector(".nlm_dark-background486829256");
                                        if (backgroundElem) {
                                            backgroundElem.style.display = "none";
                                        }
                                        let nlm068ForDeleteStyleTag = document.querySelector("#nlm068fordelete");
                                        if (nlm068ForDeleteStyleTag) {
                                            nlm068ForDeleteStyleTag.remove();
                                        }
                                        let menuState = "static";
                                        if (
                                            window.nlm009obj &&
                                            window.nlm009obj.list.includes(
                                                "#" + document.querySelector(".menuNolim068").closest(".t-rec").id
                                            )
                                        ) {
                                            menuState = "nolimFixMenu";
                                        }
                                        let block = $(".menuNolim068").parents(".t-rec");
                                        let blockStyle = window.getComputedStyle(block[0]);
                                        const blockWithMenu = document.querySelector("#rec1531676791 .t396__artboard");
                                        if (
                                            !block[0].classList.contains("nlm009fixmenu") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .hasAttribute("data-artboard-pos") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .getAttribute("data-artboard-pos") == "fixed"
                                        ) {
                                            menuState = "zeroFixMenu";
                                            window.nlmFixedZeroBlocksObj068.list.push("#" + block[0].id);
                                            if (
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .hasAttribute("data-artboard-fixed-pos") &&
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .getAttribute("data-artboard-fixed-pos") == "bottom"
                                            ) {
                                                window.nlmFixedZeroBlocksObj068.bottom = block[0].id;
                                            } else {
                                                window.nlmFixedZeroBlocksObj068.top = block[0].id;
                                            }
                                        } else {
                                            if (getComputedStyle(blockWithMenu).position == "absolute") {
                                                block[0].querySelector(".t396__artboard").style.position = "absolute";
                                            } else {
                                                block[0].querySelector(".t396__artboard").style.position = "relative";
                                            }
                                            if ("999") {
                                                block[0].querySelector(".t396__artboard").style.zIndex = "999";
                                            }
                                        }
                                        let ii;
                                        let mynewstyle = "<style>";
                                        let menus = "";
                                        blockWithMenu.style.zIndex = 999 + 1;
                                        var itemsWoRec = [];
                                        let mainTarget;
                                        let count = 0;
                                        $(".menuNolim068").each(function (i, item) {
                                            let hr = $(item).find("[href]").attr("href");
                                            if (
                                                typeof hr != "undefined" &&
                                                (hr.startsWith("#rec") || hr.startsWith("/#rec"))
                                            ) {
                                                if (hr.startsWith("/#rec")) {
                                                    hr = hr.substring(1);
                                                }
                                                if ($(hr).length > 0) {
                                                    $(hr).addClass("nlm068secondMenu486829256");
                                                    $(hr).css("zIndex", "999");
                                                    if (false) {
                                                        $(hr).css("opacity", "0");
                                                    }
                                                    $(hr).addClass("nolim_forMenu");
                                                    $(hr).addClass("nolimAutoScaleFix");
                                                    $(item).find("[href]").attr("nolim-data-menuid", hr);
                                                    $(item).find("[href]").attr("href", "#");
                                                    menus += `${hr},`;
                                                    mynewstyle += `${hr},`;
                                                } else {
                                                    $(item).removeClass("menuNolim068");
                                                }
                                            } else if (typeof hr != "undefined") {
                                                itemsWoRec.push($(item));
                                            }
                                        });
                                        var secondLevelId = [];
                                        document.querySelectorAll("[nolim-data-menuid]").forEach(function (item) {
                                            secondLevelId.push(item.getAttribute("nolim-data-menuid").replace("#", ""));
                                        });
                                        menus = menus.substring(0, menus.length - 1);
                                        mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1);
                                        mynewstyle += ` { width: 100%; }`;
                                        mynewstyle += `</style>`;
                                        $("body").after(mynewstyle);
                                        let sI = setInterval(function () {
                                            if ($(".menuNolim068 .tn-atom").length > 0) {
                                                clearInterval(sI);
                                                let menu2 = menus;
                                                let href = $(".menuNolim068 a[nolim-data-menuid]");
                                                let idM = $(".menuNolim068 .tn-atom").parents(".t-rec");
                                                let idPos = $(".menuNolim068 .tn-atom")
                                                    .parents(".t-rec")
                                                    .css("position");
                                                if (menuState == "zeroFixMenu") {
                                                    idPos = $(".menuNolim068 .tn-atom")
                                                        .parents(".t396__artboard")
                                                        .css("position");
                                                }
                                                function checkHeight(target) {
                                                    let extraMargin;
                                                    function setExtraMargin() {
                                                        let windowWidth = document.documentElement.clientWidth;
                                                        if (windowWidth > 1200) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 960 && windowWidth < 1201) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 640 && windowWidth < 961) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 480 && windowWidth < 641) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth < 481) {
                                                            extraMargin = 0;
                                                        }
                                                    }
                                                    setExtraMargin();
                                                    let idH;
                                                    if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.top &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.top &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH = target
                                                                .closest(".t396__artboard")
                                                                .getBoundingClientRect().bottom;
                                                        }
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    } else if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.bottom &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.bottom &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("top", "");
                                                        idH =
                                                            window.innerHeight -
                                                            target.closest(".t-rec").getBoundingClientRect().top;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH =
                                                                window.innerHeight -
                                                                target
                                                                    .closest(".t396__artboard")
                                                                    .getBoundingClientRect().top;
                                                        }
                                                        ii = "bottom";
                                                        window.nlm068obj.openSide = "bottom";
                                                    } else {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    }
                                                    if (idPos == "fixed") {
                                                        $(menu2).css("position", "fixed");
                                                        $(menu2).css(ii, idH + extraMargin + "px");
                                                    } else if (idPos == "static" || idPos == "absolute") {
                                                        $(menu2).css("position", "absolute");
                                                        $(menu2).css(ii, window.pageYOffset + idH + extraMargin + "px");
                                                    }
                                                }
                                                function forAutoscaleMode(blockId, block) {
                                                    typeof t_slds_updateSlider != "undefined" &&
                                                        t_slds_updateSlider(blockId);
                                                    if (block && block.querySelector(".t396")) {
                                                        t396_doResize(blockId);
                                                    }
                                                    if (
                                                        window.CustomEvent &&
                                                        typeof window.CustomEvent === "function"
                                                    ) {
                                                        var myCustomEvent = new CustomEvent("displayChanged");
                                                    } else {
                                                        var myCustomEvent = document.createEvent("CustomEvent");
                                                        myCustomEvent.initCustomEvent("displayChanged", true, true);
                                                    }
                                                    block.dispatchEvent(myCustomEvent);
                                                    if ("y" === window.lazy) {
                                                        t_lazyload_update();
                                                    }
                                                }
                                                function firstBlocksCall() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "block");
                                                        forAutoscaleMode(idRep, x);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "none");
                                                        $(x).css("opacity", "1");
                                                    });
                                                }
                                                function resizeFunction() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        if (window.innerWidth > 640) {
                                                            forAutoscaleMode(idRep, x);
                                                        }
                                                    });
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background486829256"
                                                    );
                                                    backgroundElem.style.display = "none";
                                                }
                                                setTimeout(function () {
                                                    $(".nolimSearch .tn-atom").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).fadeOut(300);
                                                    });
                                                    firstBlocksCall();
                                                    let blocksFromSecondMenu =
                                                        document.querySelectorAll("#rec1531686931");
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background486829256"
                                                    );
                                                    function setNlmDarkBackgroundDisplay(value) {
                                                        backgroundElem.style.display = value;
                                                    }
                                                    const observer = new MutationObserver(function (mutationsList) {
                                                        for (let mutation of mutationsList) {
                                                            if (
                                                                mutation.type === "attributes" &&
                                                                mutation.attributeName === "style"
                                                            ) {
                                                                let displayValue = mutation.target.style.display;
                                                                if (displayValue === "none" || !displayValue) {
                                                                    setNlmDarkBackgroundDisplay("none");
                                                                } else {
                                                                    setNlmDarkBackgroundDisplay("block");
                                                                }
                                                            }
                                                        }
                                                    });
                                                    blocksFromSecondMenu.forEach((elem) => {
                                                        observer.observe(elem, {
                                                            attributes: true,
                                                            attributeFilter: ["style"],
                                                        });
                                                    });
                                                    if (1) {
                                                        const hideMenuOnScroll = () => {
                                                            $(menu2).fadeOut(300);
                                                        };
                                                        window.removeEventListener("scroll", hideMenuOnScroll);
                                                        window.addEventListener("scroll", hideMenuOnScroll);
                                                    }
                                                    href.off("click").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).removeClass("nolimAutoScaleFix");
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).fadeOut(300);
                                                            firstBlocksCall();
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                                $(id).css("display", "block");
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu486829256")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            if (true) {
                                                                filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                    value.style.display = "none";
                                                                });
                                                            }
                                                        } else {
                                                            $(id).fadeOut(300, function () {
                                                                $(id).css("overflow", "hidden");
                                                            });
                                                        }
                                                    });
                                                    $(".nlm_dark-background486829256")
                                                        .off("click")
                                                        .on("click", function (e) {
                                                            e.preventDefault();
                                                            $(".nlm068secondMenu486829256").css("display", "none");
                                                        });
                                                }, 300);
                                                href.mouseover(function (e) {
                                                    e.preventDefault();
                                                    let windowWidth = document.documentElement.clientWidth;
                                                    if (windowWidth > 1200) {
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).removeClass("nolimAutoScaleFix");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu486829256")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                value.style.display = "none";
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            $(menu2).fadeOut(300);
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).css("overflow", "visible");
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                            });
                                                            $(id).css("display", "block");
                                                        }
                                                    }
                                                });
                                                itemsWoRec.forEach(function (item) {
                                                    item.mouseover(function (e) {
                                                        e.preventDefault();
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    });
                                                });
                                                window.addEventListener("click", function (e) {
                                                    if (
                                                        e.target.closest(".r") &&
                                                        secondLevelId.includes(
                                                            e.target.closest(".r").getAttribute("id")
                                                        ) &&
                                                        e.target.hasAttribute("href") &&
                                                        e.target.getAttribute("href").startsWith("#")
                                                    ) {
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    }
                                                });
                                                window.addEventListener("resize", function () {
                                                    resizeFunction();
                                                });
                                                function isSecondMenuOnHover(e) {
                                                    $(document).off("pointermove mousemove", isSecondMenuOnHover);
                                                    $(document).off("pointermove mousemove", closeMenu);
                                                    $(document).on("pointermove mousemove", closeMenu);
                                                }
                                                function closeMenu(e) {
                                                    if (
                                                        ($(menu2).has(e.target).length === 0 &&
                                                            $(idM).has(e.target).length === 0 &&
                                                            !$(menu2).is(e.target)) ||
                                                        $(".menuNolimClose068:hover").length > 0
                                                    ) {
                                                        $(menu2).fadeOut(300);
                                                        window.nlm068obj.openSide = "";
                                                        $(document).off("pointermove mousemove", closeMenu);
                                                        $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                    }
                                                }
                                                if (true) {
                                                    let hideMenuButtons = document.querySelectorAll(".hideMenuButton");
                                                    if (hideMenuButtons.length > 0) {
                                                        function forHideMenuButtonEventListener(e) {
                                                            $(menu2).fadeOut(300);
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        hideMenuButtons.forEach((button) => {
                                                            button.removeEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                            button.addEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                        });
                                                    }
                                                }
                                                $(document).on("pointerup mouseup", closeMenu);
                                                $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                function t650t959fix() {
                                                    document
                                                        .querySelectorAll(".nlm068secondMenu486829256")
                                                        .forEach(function (item) {
                                                            if (window.t650_unifyHeights != undefined) {
                                                                t650_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                            if (window.t959_unifyHeights != undefined) {
                                                                t959_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                        });
                                                }
                                                let int1 = setInterval(function () {
                                                    if (window.t650_unifyHeights != undefined) {
                                                        clearInterval(int1);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                let int2 = setInterval(function () {
                                                    if (window.t959_unifyHeights != undefined) {
                                                        clearInterval(int2);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                setTimeout(function () {
                                                    clearInterval(int1);
                                                    clearInterval(int2);
                                                }, 2000);
                                                let int3 = setInterval(function () {
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "none";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-active")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-active")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "auto";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                        let targetNodes = document.querySelectorAll(".nlm068secondMenu486829256");
                                        let config = {
                                            attributes: true,
                                            attributeOldValue: true,
                                            attributeFilter: ["style"],
                                        };
                                        let callback = function (mutationsList) {
                                            let background = document.querySelector(".nlm_dark-background486829256");
                                            if (!background) return;
                                            for (let targetNode of targetNodes) {
                                                if (targetNode.style.display !== "none" && targetNode.style.display) {
                                                    background.style.display = "block";
                                                    background.classList.remove("nolimAutoScaleFix");
                                                    return;
                                                }
                                            }
                                            background.style.display = "none";
                                        };
                                        targetNodes.forEach((targetNode) => {
                                            let observer = new MutationObserver(callback);
                                            observer.observe(targetNode, config);
                                        });
                                    });
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1452374721, #rec1531676791" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1452374721, #rec1531676791") {
                                                document
                                                    .querySelectorAll("#rec1452374721, #rec1531676791")
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 20} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 20} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 20} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (
                                        "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471" ||
                                        ""
                                    ) {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if (
                                                "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471"
                                            ) {
                                                document
                                                    .querySelectorAll(
                                                        "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471"
                                                    )
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 400} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    if (!window.nlm068obj) {
                                        window.nlm068obj = { openSide: "" };
                                    }
                                    if (!window.nlmFixedZeroBlocksObj068) {
                                        window.nlmFixedZeroBlocksObj068 = { top: "", bottom: "", list: [] };
                                    }
                                    function t_ready(t) {
                                        "loading" != document.readyState
                                            ? t()
                                            : document.addEventListener
                                              ? document.addEventListener("DOMContentLoaded", t)
                                              : document.attachEvent("onreadystatechange", function () {
                                                    "loading" != document.readyState && t();
                                                });
                                    }
                                    t_ready(function () {
                                        let backgroundElem = document.querySelector(".nlm_dark-background804255781");
                                        if (backgroundElem) {
                                            backgroundElem.style.display = "none";
                                        }
                                        let nlm068ForDeleteStyleTag = document.querySelector("#nlm068fordelete");
                                        if (nlm068ForDeleteStyleTag) {
                                            nlm068ForDeleteStyleTag.remove();
                                        }
                                        let menuState = "static";
                                        if (
                                            window.nlm009obj &&
                                            window.nlm009obj.list.includes(
                                                "#" + document.querySelector(".menuNolim068").closest(".t-rec").id
                                            )
                                        ) {
                                            menuState = "nolimFixMenu";
                                        }
                                        let block = $(".menuNolim068").parents(".t-rec");
                                        let blockStyle = window.getComputedStyle(block[0]);
                                        const blockWithMenu = document.querySelector("#rec1520460341 .t396__artboard");
                                        if (
                                            !block[0].classList.contains("nlm009fixmenu") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .hasAttribute("data-artboard-pos") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .getAttribute("data-artboard-pos") == "fixed"
                                        ) {
                                            menuState = "zeroFixMenu";
                                            window.nlmFixedZeroBlocksObj068.list.push("#" + block[0].id);
                                            if (
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .hasAttribute("data-artboard-fixed-pos") &&
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .getAttribute("data-artboard-fixed-pos") == "bottom"
                                            ) {
                                                window.nlmFixedZeroBlocksObj068.bottom = block[0].id;
                                            } else {
                                                window.nlmFixedZeroBlocksObj068.top = block[0].id;
                                            }
                                        } else {
                                            if (getComputedStyle(blockWithMenu).position == "absolute") {
                                                block[0].querySelector(".t396__artboard").style.position = "absolute";
                                            } else {
                                                block[0].querySelector(".t396__artboard").style.position = "relative";
                                            }
                                            if ("999999") {
                                                block[0].querySelector(".t396__artboard").style.zIndex = "999999";
                                            }
                                        }
                                        let ii;
                                        let mynewstyle = "<style>";
                                        let menus = "";
                                        blockWithMenu.style.zIndex = 999999 + 1;
                                        var itemsWoRec = [];
                                        let mainTarget;
                                        let count = 0;
                                        $(".menuNolim068").each(function (i, item) {
                                            let hr = $(item).find("[href]").attr("href");
                                            if (
                                                typeof hr != "undefined" &&
                                                (hr.startsWith("#rec") || hr.startsWith("/#rec"))
                                            ) {
                                                if (hr.startsWith("/#rec")) {
                                                    hr = hr.substring(1);
                                                }
                                                if ($(hr).length > 0) {
                                                    $(hr).addClass("nlm068secondMenu804255781");
                                                    $(hr).css("zIndex", "999999");
                                                    if (false) {
                                                        $(hr).css("opacity", "0");
                                                    }
                                                    $(hr).addClass("nolim_forMenu");
                                                    $(hr).addClass("nolimAutoScaleFix");
                                                    $(item).find("[href]").attr("nolim-data-menuid", hr);
                                                    $(item).find("[href]").attr("href", "#");
                                                    menus += `${hr},`;
                                                    mynewstyle += `${hr},`;
                                                } else {
                                                    $(item).removeClass("menuNolim068");
                                                }
                                            } else if (typeof hr != "undefined") {
                                                itemsWoRec.push($(item));
                                            }
                                        });
                                        var secondLevelId = [];
                                        document.querySelectorAll("[nolim-data-menuid]").forEach(function (item) {
                                            secondLevelId.push(item.getAttribute("nolim-data-menuid").replace("#", ""));
                                        });
                                        menus = menus.substring(0, menus.length - 1);
                                        mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1);
                                        mynewstyle += ` { width: 100%; }`;
                                        mynewstyle += `</style>`;
                                        $("body").after(mynewstyle);
                                        let sI = setInterval(function () {
                                            if ($(".menuNolim068 .tn-atom").length > 0) {
                                                clearInterval(sI);
                                                let menu2 = menus;
                                                let href = $(".menuNolim068 a[nolim-data-menuid]");
                                                let idM = $(".menuNolim068 .tn-atom").parents(".t-rec");
                                                let idPos = $(".menuNolim068 .tn-atom")
                                                    .parents(".t-rec")
                                                    .css("position");
                                                if (menuState == "zeroFixMenu") {
                                                    idPos = $(".menuNolim068 .tn-atom")
                                                        .parents(".t396__artboard")
                                                        .css("position");
                                                }
                                                function checkHeight(target) {
                                                    let extraMargin;
                                                    function setExtraMargin() {
                                                        let windowWidth = document.documentElement.clientWidth;
                                                        if (windowWidth > 1200) {
                                                            extraMargin = -150;
                                                        } else if (windowWidth > 960 && windowWidth < 1201) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 640 && windowWidth < 961) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 480 && windowWidth < 641) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth < 481) {
                                                            extraMargin = 0;
                                                        }
                                                    }
                                                    setExtraMargin();
                                                    let idH;
                                                    if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.top &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.top &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH = target
                                                                .closest(".t396__artboard")
                                                                .getBoundingClientRect().bottom;
                                                        }
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    } else if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.bottom &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.bottom &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("top", "");
                                                        idH =
                                                            window.innerHeight -
                                                            target.closest(".t-rec").getBoundingClientRect().top;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH =
                                                                window.innerHeight -
                                                                target
                                                                    .closest(".t396__artboard")
                                                                    .getBoundingClientRect().top;
                                                        }
                                                        ii = "bottom";
                                                        window.nlm068obj.openSide = "bottom";
                                                    } else {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    }
                                                    if (idPos == "fixed") {
                                                        $(menu2).css("position", "fixed");
                                                        $(menu2).css(ii, idH + extraMargin + "px");
                                                    } else if (idPos == "static" || idPos == "absolute") {
                                                        $(menu2).css("position", "absolute");
                                                        $(menu2).css(ii, window.pageYOffset + idH + extraMargin + "px");
                                                    }
                                                }
                                                function forAutoscaleMode(blockId, block) {
                                                    typeof t_slds_updateSlider != "undefined" &&
                                                        t_slds_updateSlider(blockId);
                                                    if (block && block.querySelector(".t396")) {
                                                        t396_doResize(blockId);
                                                    }
                                                    if (
                                                        window.CustomEvent &&
                                                        typeof window.CustomEvent === "function"
                                                    ) {
                                                        var myCustomEvent = new CustomEvent("displayChanged");
                                                    } else {
                                                        var myCustomEvent = document.createEvent("CustomEvent");
                                                        myCustomEvent.initCustomEvent("displayChanged", true, true);
                                                    }
                                                    block.dispatchEvent(myCustomEvent);
                                                    if ("y" === window.lazy) {
                                                        t_lazyload_update();
                                                    }
                                                }
                                                function firstBlocksCall() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "block");
                                                        forAutoscaleMode(idRep, x);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "none");
                                                        $(x).css("opacity", "1");
                                                    });
                                                }
                                                function resizeFunction() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        if (window.innerWidth > 640) {
                                                            forAutoscaleMode(idRep, x);
                                                        }
                                                    });
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background804255781"
                                                    );
                                                    backgroundElem.style.display = "none";
                                                }
                                                setTimeout(function () {
                                                    $(".nolimSearch .tn-atom").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).fadeOut(300);
                                                    });
                                                    firstBlocksCall();
                                                    let blocksFromSecondMenu =
                                                        document.querySelectorAll("#rec1524903941");
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background804255781"
                                                    );
                                                    function setNlmDarkBackgroundDisplay(value) {
                                                        backgroundElem.style.display = value;
                                                    }
                                                    const observer = new MutationObserver(function (mutationsList) {
                                                        for (let mutation of mutationsList) {
                                                            if (
                                                                mutation.type === "attributes" &&
                                                                mutation.attributeName === "style"
                                                            ) {
                                                                let displayValue = mutation.target.style.display;
                                                                if (displayValue === "none" || !displayValue) {
                                                                    setNlmDarkBackgroundDisplay("none");
                                                                } else {
                                                                    setNlmDarkBackgroundDisplay("block");
                                                                }
                                                            }
                                                        }
                                                    });
                                                    blocksFromSecondMenu.forEach((elem) => {
                                                        observer.observe(elem, {
                                                            attributes: true,
                                                            attributeFilter: ["style"],
                                                        });
                                                    });
                                                    if (1) {
                                                        const hideMenuOnScroll = () => {
                                                            $(menu2).fadeOut(300);
                                                        };
                                                        window.removeEventListener("scroll", hideMenuOnScroll);
                                                        window.addEventListener("scroll", hideMenuOnScroll);
                                                    }
                                                    href.off("click").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).removeClass("nolimAutoScaleFix");
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).fadeOut(300);
                                                            firstBlocksCall();
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                                $(id).css("display", "block");
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu804255781")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            if (true) {
                                                                filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                    value.style.display = "none";
                                                                });
                                                            }
                                                        } else {
                                                            $(id).fadeOut(300, function () {
                                                                $(id).css("overflow", "hidden");
                                                            });
                                                        }
                                                    });
                                                    $(".nlm_dark-background804255781")
                                                        .off("click")
                                                        .on("click", function (e) {
                                                            e.preventDefault();
                                                            $(".nlm068secondMenu804255781").css("display", "none");
                                                        });
                                                }, 300);
                                                href.mouseover(function (e) {
                                                    e.preventDefault();
                                                    let windowWidth = document.documentElement.clientWidth;
                                                    if (windowWidth > 1200) {
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).removeClass("nolimAutoScaleFix");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu804255781")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                value.style.display = "none";
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            $(menu2).fadeOut(300);
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).css("overflow", "visible");
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                            });
                                                            $(id).css("display", "block");
                                                        }
                                                    }
                                                });
                                                itemsWoRec.forEach(function (item) {
                                                    item.mouseover(function (e) {
                                                        e.preventDefault();
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    });
                                                });
                                                window.addEventListener("click", function (e) {
                                                    if (
                                                        e.target.closest(".r") &&
                                                        secondLevelId.includes(
                                                            e.target.closest(".r").getAttribute("id")
                                                        ) &&
                                                        e.target.hasAttribute("href") &&
                                                        e.target.getAttribute("href").startsWith("#")
                                                    ) {
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    }
                                                });
                                                window.addEventListener("resize", function () {
                                                    resizeFunction();
                                                });
                                                function isSecondMenuOnHover(e) {
                                                    $(document).off("pointermove mousemove", isSecondMenuOnHover);
                                                    $(document).off("pointermove mousemove", closeMenu);
                                                    $(document).on("pointermove mousemove", closeMenu);
                                                }
                                                function closeMenu(e) {
                                                    if (
                                                        ($(menu2).has(e.target).length === 0 &&
                                                            $(idM).has(e.target).length === 0 &&
                                                            !$(menu2).is(e.target)) ||
                                                        $(".menuNolimClose068:hover").length > 0
                                                    ) {
                                                        $(menu2).fadeOut(300);
                                                        window.nlm068obj.openSide = "";
                                                        $(document).off("pointermove mousemove", closeMenu);
                                                        $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                    }
                                                }
                                                if (true) {
                                                    let hideMenuButtons = document.querySelectorAll(".hideMenuButton");
                                                    if (hideMenuButtons.length > 0) {
                                                        function forHideMenuButtonEventListener(e) {
                                                            $(menu2).fadeOut(300);
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        hideMenuButtons.forEach((button) => {
                                                            button.removeEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                            button.addEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                        });
                                                    }
                                                }
                                                $(document).on("pointerup mouseup", closeMenu);
                                                $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                function t650t959fix() {
                                                    document
                                                        .querySelectorAll(".nlm068secondMenu804255781")
                                                        .forEach(function (item) {
                                                            if (window.t650_unifyHeights != undefined) {
                                                                t650_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                            if (window.t959_unifyHeights != undefined) {
                                                                t959_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                        });
                                                }
                                                let int1 = setInterval(function () {
                                                    if (window.t650_unifyHeights != undefined) {
                                                        clearInterval(int1);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                let int2 = setInterval(function () {
                                                    if (window.t959_unifyHeights != undefined) {
                                                        clearInterval(int2);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                setTimeout(function () {
                                                    clearInterval(int1);
                                                    clearInterval(int2);
                                                }, 2000);
                                                let int3 = setInterval(function () {
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "none";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-active")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-active")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "auto";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                        let targetNodes = document.querySelectorAll(".nlm068secondMenu804255781");
                                        let config = {
                                            attributes: true,
                                            attributeOldValue: true,
                                            attributeFilter: ["style"],
                                        };
                                        let callback = function (mutationsList) {
                                            let background = document.querySelector(".nlm_dark-background804255781");
                                            if (!background) return;
                                            for (let targetNode of targetNodes) {
                                                if (targetNode.style.display !== "none" && targetNode.style.display) {
                                                    background.style.display = "block";
                                                    background.classList.remove("nolimAutoScaleFix");
                                                    return;
                                                }
                                            }
                                            background.style.display = "none";
                                        };
                                        targetNodes.forEach((targetNode) => {
                                            let observer = new MutationObserver(callback);
                                            observer.observe(targetNode, config);
                                        });
                                    });
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1520460341" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1520460341") {
                                                document.querySelectorAll("#rec1520460341").forEach((e) => {
                                                    e.classList.add("zindex-annexx");
                                                    if (getComputedStyle(e).position === "static") {
                                                        if (e.dataset.recordType === "121") {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 6000} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                            );
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 6000} !important; } `
                                                            );
                                                        }
                                                    } else {
                                                        annexxAddStyle(
                                                            "819",
                                                            ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 6000} !important; } `
                                                        );
                                                    }
                                                });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1531686931, #rec1524903941, #rec1559022031" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1531686931, #rec1524903941, #rec1559022031") {
                                                document
                                                    .querySelectorAll("#rec1531686931, #rec1524903941, #rec1559022031")
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 99999} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 99999} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 99999} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

document.addEventListener("DOMContentLoaded", (e) => {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.insertAdjacentHTML("beforeend", codestyle);
                                    }
                                    ".tn-elem__14523747211760943941674 .tn-atom a, .tn-elem__1452374721176232367535416880 .tn-atom a, .tn-elem__1452374721176232363208669570 .tn-atom a, .tn-elem__1452374721176232364795290710 .tn-atom a, .tn-elem__15204603411760943941674 .tn-atom a, .tn-elem__1520460341176232367535416880 .tn-atom a, .tn-elem__1520460341176232363208669570 .tn-atom a, .tn-elem__1520460341176232364795290710 .tn-atom a"
                                        .replace(/,\s+$/, "")
                                        .split(/,\s+|,/g)
                                        .map((e) =>
                                            /\.tn-atom$/i.test(e) && !document.querySelector(e).getAttribute("href")
                                                ? e + " a"
                                                : e
                                        )
                                        .forEach((e) => {
                                            if (!e) return false;
                                            setTimeout(function () {
                                                document.querySelectorAll(e).forEach((e) => {
                                                    let elem = e.closest(".t396__elem"),
                                                        sbselem = elem
                                                            ? elem.querySelector(".tn-atom__sbs-anim-wrapper")
                                                            : false,
                                                        displayNone =
                                                            elem && getComputedStyle(elem).display === "none"
                                                                ? true
                                                                : false;
                                                    if (elem) {
                                                        elem.classList.add("anx001-effect-link");
                                                        int = setInterval(() => {
                                                            elem.style.height = "";
                                                        }, 500);
                                                        if (0 && elem) {
                                                            elem = elem.querySelector("a")
                                                                ? elem.querySelector("a")
                                                                : elem.querySelector(".tn-atom");
                                                            window.addEventListener("scroll", function () {
                                                                let posnew = window.scrollY > 0 ? window.scrollY : 0;
                                                                if (0 <= posnew) elem.classList.add("color-scroll");
                                                                else elem.classList.remove("color-scroll");
                                                                pos = posnew;
                                                            });
                                                        }
                                                    }
                                                    setTimeout(() => {
                                                        clearInterval(int);
                                                    }, 5e3);
                                                    if (elem && sbselem) {
                                                        annexxAddStyle(
                                                            "001",
                                                            ` ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join(
                                                                    ""
                                                                )} .tn-atom__sbs-anim-wrapper { display: flex${displayNone ? "" : " !important"}; ${(function () {
                                                                let align = getComputedStyle(elem).textAlign;
                                                                switch (align) {
                                                                    case "left":
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                    case "center":
                                                                        return "justify-content: center;";
                                                                        break;
                                                                    case "right":
                                                                        return "justify-content: flex-end;";
                                                                        break;
                                                                    default:
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                }
                                                            })()} align-items: center; width: 100%; height: auto; } ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join("")} { overflow: visible; } `
                                                        );
                                                    } else if (elem && !elem.classList.contains("t-animate")) {
                                                        annexxAddStyle(
                                                            "001",
                                                            ` ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join(
                                                                    ""
                                                                )} { display: flex${displayNone ? "" : " !important"} ${(function () {
                                                                let align = getComputedStyle(elem).textAlign;
                                                                switch (align) {
                                                                    case "left":
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                    case "center":
                                                                        return "justify-content: center;";
                                                                        break;
                                                                    case "right":
                                                                        return "justify-content: flex-end;";
                                                                        break;
                                                                    default:
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                }
                                                            })()} align-items: center; width: 100%; height: auto; overflow: visible; } `
                                                        );
                                                    }
                                                });
                                            }, 200);
                                            annexxAddStyle(
                                                "001",
                                                ` .js-product > a { display: inline !important; } .t898__icon { positon: absolute !important; } ${e}:not(.t396__elem) { position: relative; transition: color 200ms ease, font-weight 200ms ease !important; display: inline-block; width: ${false ? "100%" : "fit-content"}; width: ${false ? "100%" : "fit-content"}; ${/a$/i.test(e) ? "" : "bottom: 2px;"} } ${(function () {
                                                    if ("#") {
                                                        if (/rgb/.test("#")) {
                                                            return ` ${e}:hover { color: # !important; } `;
                                                        } else {
                                                            return ` ${e}:hover { color: #${(function () {
                                                                return "#".replaceAll("#", "");
                                                            })()} !important; } `;
                                                        }
                                                    } else return "";
                                                })()} ${(function () {
                                                    if (0 && "rgba(0, 0, 0, 1)") {
                                                        if (/rgb/.test("rgba(0, 0, 0, 1)")) {
                                                            return ` ${e}.color-scroll:hover { color: rgba(0, 0, 0, 1) !important; } `;
                                                        } else {
                                                            return ` ${e}.color-scroll:hover { color: #${(function () {
                                                                return "rgba(0, 0, 0, 1)".replaceAll("#", "");
                                                            })()} !important; } `;
                                                        }
                                                    } else return "";
                                                })()} ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}::before { transform-origin: 100% 50%; transform: scale3d(0, 1, 1); transition: transform 0.3s; transition: transform 200ms !important; position: absolute; width: 100%; height: 1px; background: currentColor; top: 100%; left: 0; pointer-events: none; content: ''; color: #; } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}.color-scroll::before { color: rgba(0, 0, 0, 1); } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}:hover::before { transform-origin: 0% 50%; transform: scale3d(1, 1, 1); color: #; } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}.color-scroll:hover::before { color: rgba(0, 0, 0, 1); } .t282__menu__item { width: fit-content; width: -moz-fit-content; margin-left: auto; margin-right: auto; } .t280__menu__item { width: fit-content; width: -moz-fit-content; } `
                                            );
                                            if (false) {
                                                annexxAddStyle("001", ` ${e}:hover { font-weight: 400 !important; } `);
                                            }
                                        });
                                });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1524072111");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1524072111");
                        });
                    });;

t_onReady(function () {
                        t_onFuncLoad("t1093__init", function () {
                            t1093__init("1524093261");
                        });
                        t_onFuncLoad("t1093__initPopup", function () {
                            t1093__initPopup("1524093261");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1521078181");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1521078181");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1493454791");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1493454791");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1454143191");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1454143191");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1530772001");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1530772001");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1457990821");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1457990821");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458368161");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458368161");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458705411");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458705411");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1457990821",
                                                stopId: "#rec1492612611",
                                                top1200: 50,
                                                top640_1200: 50,
                                                top640: 40,
                                            },
                                            {
                                                stickyId: "#rec1458368161",
                                                stopId: "#rec1492612611",
                                                top1200: 40,
                                                top640_1200: 100,
                                                top640: 80,
                                            },
                                            {
                                                stickyId: "#rec1458705411",
                                                stopId: "#rec1492612611",
                                                top1200: 20,
                                                top640_1200: 150,
                                                top640: 120,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1492612611");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1492612611");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458725141");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458725141");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498383661");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498383661");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498817301");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498817301");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1503311301");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1503311301");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1503390711");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1503390711");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498759561");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498759561");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1498383661",
                                                stopId: "#rec1499216181",
                                                top1200: 40,
                                                top640_1200: 0,
                                                top640: 40,
                                            },
                                            {
                                                stickyId: "#rec1498817301",
                                                stopId: "#rec1499216181",
                                                top1200: 80,
                                                top640_1200: 0,
                                                top640: 60,
                                            },
                                            {
                                                stickyId: "#rec1503311301",
                                                stopId: "#rec1499216181",
                                                top1200: 120,
                                                top640_1200: 0,
                                                top640: 80,
                                            },
                                            {
                                                stickyId: "#rec1503390711",
                                                stopId: "#rec1499216181",
                                                top1200: 70,
                                                top640_1200: 0,
                                                top640: 100,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499216181");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499216181");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499765491");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499765491");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499768471");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499768471");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1499216181",
                                                stopId: "#rec1499768471",
                                                top1200: 50,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                            {
                                                stickyId: "#rec1458368161",
                                                stopId: "#rec1492612611",
                                                top1200: 40,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                            {
                                                stickyId: "#rec1458705411",
                                                stopId: "#rec1492612611",
                                                top1200: 20,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1559022031");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1559022031");
                        });
                    });;

t_onReady(function () {
                        t_onFuncLoad("t1093__init", function () {
                            t1093__init("1559022331");
                        });
                        t_onFuncLoad("t1093__initPopup", function () {
                            t1093__initPopup("1559022331");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996111");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996111");
                            });
                        });;

(function () {
                                        function annexxAddStyle(numberMod, codestyle) {
                                            let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                            if (!styleBlock) {
                                                document
                                                    .querySelector("head")
                                                    .insertAdjacentHTML(
                                                        "beforeend",
                                                        '<style id="annexxStyle' + numberMod + '"></style>'
                                                    );
                                                styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                            }
                                            let t = (function () {
                                                return !Array.from(styleBlock.childNodes).some(function (e) {
                                                    if (e.textContent === codestyle) {
                                                        return true;
                                                    }
                                                });
                                            })();
                                            if (t) styleBlock.textContent += codestyle;
                                        }
                                        if (0) {
                                            let b = document.querySelector("#t-header");
                                            if (b) b.classList.add("zindex-annexx");
                                            annexxAddStyle(
                                                "819",
                                                ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                            );
                                        }
                                        if (0) {
                                            let b = document.querySelector("#t-footer");
                                            if (b) b.classList.add("zindex-annexx");
                                            annexxAddStyle(
                                                "819",
                                                ` #t-footer { position: relative; z-index: 0 !important; } `
                                            );
                                        }
                                        if ("#rec1502996131" || "") {
                                            document.addEventListener("DOMContentLoaded", function () {
                                                if ("#rec1502996131") {
                                                    document.querySelectorAll("#rec1502996131").forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 400} !important; } `
                                                            );
                                                        }
                                                    });
                                                }
                                                if ("") {
                                                    annexxAddStyle(
                                                        "819",
                                                        ` { z-index: ${false ? "auto" : 1} !important; } `
                                                    );
                                                }
                                                if ("" && false) {
                                                    "".split(/,\s|,/g).forEach((e) => {
                                                        annexxAddStyle(
                                                            "819",
                                                            ` ${e}:hover { z-index: 0 !important; } `
                                                        );
                                                    });
                                                }
                                                if ("" && "") {
                                                    let anElem = document.querySelectorAll("");
                                                    document.querySelectorAll("").forEach((el) => {
                                                        el.addEventListener("mouseenter", (e) => {
                                                            anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                        });
                                                        el.addEventListener("mouseleave", (e) => {
                                                            anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    })();;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996131");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996131");
                            });
                        });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996151");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996151");
                            });
                        });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1503023271");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1503023271");
                            });
                        });;

t_onReady(function () {
                            t_onFuncLoad("t886_init", function () {
                                t886_init("1580320901");
                            });
                        });;

setTimeout(
                                        function () {
                                            function getScript(url) {
                                                return new Promise(function (resolve, reject) {
                                                    if (window.jQuery && /jquery@/.test(url)) resolve();
                                                    else {
                                                        var script = document.createElement("script");
                                                        script.src = url;
                                                        script.async = true;
                                                        script.onload = resolve;
                                                        script.onerror = reject;
                                                        document.head.appendChild(script);
                                                    }
                                                });
                                            }
                                            getScript(
                                                "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/2.2.0/browser/overlayscrollbars.browser.es6.min.js"
                                            ).then(function () {
                                                function annexxAddStyle(numberMod, codestyle) {
                                                    let styleBlock = document.querySelector(
                                                        "head > #annexxStyle" + numberMod
                                                    );
                                                    if (!styleBlock) {
                                                        document
                                                            .querySelector("head")
                                                            .insertAdjacentHTML(
                                                                "beforeend",
                                                                '<style id="annexxStyle' + numberMod + '"></style>'
                                                            );
                                                        styleBlock = document.querySelector(
                                                            "head > #annexxStyle" + numberMod
                                                        );
                                                    }
                                                    let t = (function () {
                                                        return !Array.from(styleBlock.childNodes).some(function (e) {
                                                            if (e.textContent === codestyle) {
                                                                return true;
                                                            }
                                                        });
                                                    })();
                                                    if (t) styleBlock.textContent += codestyle;
                                                }
                                                let isMobile = (function () {
                                                    let ua = navigator.userAgent;
                                                    if (
                                                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                            ua
                                                        ) ||
                                                        (!/windows/i.test(ua) &&
                                                            /safari/i.test(ua) &&
                                                            navigator.maxTouchPoints > 1)
                                                    )
                                                        return true;
                                                    else return false;
                                                })();
                                                if (!isMobile) {
                                                    let {
                                                        OverlayScrollbars,
                                                        ScrollbarsHidingPlugin,
                                                        SizeObserverPlugin,
                                                        ClickScrollPlugin,
                                                    } = OverlayScrollbarsGlobal;
                                                    OverlayScrollbars.plugin(ClickScrollPlugin);
                                                    window.sb = OverlayScrollbars(document.body, {
                                                        scrollbars: {
                                                            autoHide: false ? "scroll" : "never",
                                                            clickScroll: true,
                                                        },
                                                    });
                                                    if (!document.querySelector('.r[data-record-type="270"]')) {
                                                        let hash = window.location.hash.slice(1);
                                                        if (!hash) return;
                                                        let target = document.querySelector(`a[name="${hash}"]`);
                                                        if (!target) return;
                                                        let y = target.getBoundingClientRect().top + window.pageYOffset;
                                                        window.scrollTo({ top: y, behavior: "auto" });
                                                    }
                                                    let imageWidth = 40;
                                                    annexxAddStyle(
                                                        "805-1",
                                                        ` .os-scrollbar.os-theme-dark { --os-size: 12px; --os-handle-min-size: 45px; --os-handle-border-radius: 8px; --os-track-bg: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-track-bg-hover: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-track-bg-active: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-handle-bg: linear-gradient(#3b3935 46%, #3b3935 46%); --os-handle-bg-hover: linear-gradient(#b9dd46 100%, #b9dd46 100%); --os-handle-bg-active: linear-gradient(#b9dd46 100%, #b9dd46 100%); ${(function () {
                                                            return false ? "mix-blend-mode: difference;" : "";
                                                        })()} } .os-scrollbar.os-theme-dark .os-scrollbar-handle { -webkit-box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 1) !important; } .os-scrollbar .os-scrollbar-track { transition: opacity .15s,background-color .15s,border-color .15s, left .2s linear !important; } .os-scrollbar-track { left: 0px; } .os-scrollbar-handle::before { padding-right: ${Math.abs(0) * 2.5}px; } .os-scrollbar-track::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding-right: ${Math.abs(0) * 2.5}px; pointer-events: all; } ${"" ? ` .os-scrollbar-handle { position: relative; } .os-scrollbar-handle::after { content: ''; pointer-events: none; position: fixed; left: calc(var(--os-size) - 40px); top: 0; width: 40px; height: 100%; background-image: url(''); background-size: contain; background-repeat: no-repeat; background-position: center; transform: translateY(calc(var(--os-handle-position) * (100% - 40px * (1 / var(--image-aspect-ratio))))); } ` : ""} .os-scrollbar-track:hover { left: 0px; } html[data-overlayscrollbars]>body.t-body_popupshowed, html[data-overlayscrollbars]>body.t-zoomer__show { overflow: visible !important; } .t-popup { scrollbar-width: none; -ms-overflow-style: none; } .t-popup::-webkit-scrollbar { display: none; } `
                                                    );
                                                    if (false) window.dispatchEvent(new CustomEvent("resize"));
                                                    document.addEventListener("click", function () {
                                                        setTimeout(function () {
                                                            if (document.body.classList.contains("t-body_popupshowed"))
                                                                document.documentElement.style.overflowY = "hidden";
                                                            else document.documentElement.style.overflowY = "";
                                                        }, 200);
                                                    });
                                                }
                                            });
                                        },
                                        false ? 1000 : 0
                                    );;

setTimeout(function () {
                (function (m, e, t, r, i, k, a) {
                    m[i] =
                        m[i] ||
                        function () {
                            (m[i].a = m[i].a || []).push(arguments);
                        };
                    m[i].l = 1 * new Date();
                    (k = e.createElement(t)),
                        (a = e.getElementsByTagName(t)[0]),
                        (k.async = 1),
                        (k.src = r),
                        a.parentNode.insertBefore(k, a);
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                window.mainMetrikaId = "95716206";
                ym(window.mainMetrikaId, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    params: { __ym: { ymCms: { cms: "tilda", cmsVersion: "1.0", cmsCatalog: "1" } } },
                    ecommerce: "dataLayer",
                });
            }, 2000);;

if (!window.mainTracker) {
                window.mainTracker = "tilda";
            }
            setTimeout(function () {
                (function (d, w, k, o, g) {
                    var n = d.getElementsByTagName(o)[0],
                        s = d.createElement(o),
                        f = function () {
                            n.parentNode.insertBefore(s, n);
                        };
                    s.type = "text/javascript";
                    s.async = true;
                    s.key = k;
                    s.id = "tildastatscript";
                    s.src = g;
                    if (w.opera == "[object Opera]") {
                        d.addEventListener("DOMContentLoaded", f, false);
                    } else {
                        f();
                    }
                })(document, window, "300936b189a779d11644737d40c5c9ab", "script", "js/tilda-stat-1.0.min.js");
            }, 2000);;


/* === Скрипты, перенесенные из index.html === */

function t_onReady(func) {
                if (document.readyState != "loading") {
                    func();
                } else {
                    document.addEventListener("DOMContentLoaded", func);
                }
            }
            function t_onFuncLoad(funcName, okFunc, time) {
                if (typeof window[funcName] === "function") {
                    okFunc();
                } else {
                    setTimeout(function () {
                        t_onFuncLoad(funcName, okFunc, time);
                    }, time || 100);
                }
            }
            function t396_initialScale(t) {
                var e = document.getElementById("rec" + t);
                if (e) {
                    var i = e.querySelector(".t396__artboard");
                    if (i) {
                        window.tn_scale_initial_window_width ||
                            (window.tn_scale_initial_window_width = document.documentElement.clientWidth);
                        var a = window.tn_scale_initial_window_width,
                            r = [],
                            n,
                            l = i.getAttribute("data-artboard-screens");
                        if (l) {
                            l = l.split(",");
                            for (var o = 0; o < l.length; o++) r[o] = parseInt(l[o], 10);
                        } else r = [320, 480, 640, 960, 1200];
                        for (var o = 0; o < r.length; o++) {
                            var d = r[o];
                            a >= d && (n = d);
                        }
                        var _ = "edit" === window.allrecords.getAttribute("data-tilda-mode"),
                            c = "center" === t396_getFieldValue(i, "valign", n, r),
                            s = "grid" === t396_getFieldValue(i, "upscale", n, r),
                            w = t396_getFieldValue(i, "height_vh", n, r),
                            g = t396_getFieldValue(i, "height", n, r),
                            u =
                                (!!window.opr && !!window.opr.addons) ||
                                !!window.opera ||
                                -1 !== navigator.userAgent.indexOf(" OPR/");
                        if (!_ && c && !s && !w && g && !u) {
                            var h = parseFloat((a / n).toFixed(3)),
                                f = [i, i.querySelector(".t396__carrier"), i.querySelector(".t396__filter")],
                                v = Math.floor(parseInt(g, 10) * h) + "px",
                                p;
                            i.style.setProperty("--initial-scale-height", v);
                            for (var o = 0; o < f.length; o++)
                                f[o].style.setProperty("height", "var(--initial-scale-height)");
                            t396_scaleInitial__getElementsToScale(i).forEach(function (t) {
                                t.style.zoom = h;
                            });
                        }
                    }
                }
            }
            function t396_scaleInitial__getElementsToScale(t) {
                return t
                    ? Array.prototype.slice.call(t.children).filter(function (t) {
                          return t && (t.classList.contains("t396__elem") || t.classList.contains("t396__group"));
                      })
                    : [];
            }
            function t396_getFieldValue(t, e, i, a) {
                var r,
                    n = a[a.length - 1];
                if (
                    !(r =
                        i === n
                            ? t.getAttribute("data-artboard-" + e)
                            : t.getAttribute("data-artboard-" + e + "-res-" + i))
                )
                    for (var l = 0; l < a.length; l++) {
                        var o = a[l];
                        if (
                            !(o <= i) &&
                            (r =
                                o === n
                                    ? t.getAttribute("data-artboard-" + e)
                                    : t.getAttribute("data-artboard-" + e + "-res-" + o))
                        )
                            break;
                    }
                return r;
            }
            (window.TN_SCALE_INITIAL_VER = "1.0"), (window.tn_scale_initial_window_width = null);;

!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "448420000255317");
            fbq("track", "PageView");;

!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "448420000255317");
            fbq("track", "PageView");;

(function (m, e, t, r, i, k, a) {
                m[i] =
                    m[i] ||
                    function () {
                        (m[i].a = m[i].a || []).push(arguments);
                    };
                m[i].l = 1 * new Date();
                (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(87142160, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            });;

window.dataLayer = window.dataLayer || [];;

(function () {
                if (
                    /bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(
                        navigator.userAgent
                    ) === false &&
                    typeof sessionStorage != "undefined" &&
                    sessionStorage.getItem("visited") !== "y" &&
                    document.visibilityState
                ) {
                    var style = document.createElement("style");
                    style.type = "text/css";
                    style.innerHTML =
                        "@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}";
                    document.getElementsByTagName("head")[0].appendChild(style);
                    function t_setvisRecs() {
                        var alr = document.querySelectorAll(".t-records");
                        Array.prototype.forEach.call(alr, function (el) {
                            el.classList.add("t-records_animated");
                        });
                        setTimeout(function () {
                            Array.prototype.forEach.call(alr, function (el) {
                                el.classList.add("t-records_visible");
                            });
                            sessionStorage.setItem("visited", "y");
                        }, 400);
                    }
                    document.addEventListener("DOMContentLoaded", t_setvisRecs);
                }
            })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1531676791");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1531676791");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1531686931");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1531686931");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1524903941");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1524903941");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1520460341");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1520460341");
                        });
                    });;

(function () {
                                    function annexxAddStyle(numberMod, codestyle, idblock) {
                                        let styleBlock = document.querySelector(
                                            "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                        );
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' +
                                                        numberMod +
                                                        (idblock ? idblock : "") +
                                                        '"></style>'
                                                );
                                            styleBlock = document.querySelector(
                                                "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                            );
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    function annexxRemoveStyle(numberMod, idblock) {
                                        let block = document.querySelector(
                                            "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                        );
                                        if (block) block.remove();
                                    }
                                    let arrWidth = "0-479,480-639,640-959,960-1199,1200-20000"
                                            .split(/,\s|,/g)
                                            .map((e) => e.split("-").map((e) => +e)),
                                        windowWidth =
                                            /Mobi/i.test(window.navigator.userAgent) && navigator.maxTouchPoints
                                                ? window.outerWidth
                                                : window.innerWidth,
                                        shadow =
                                            "0px 0px 0px 0px rgba(255, 255, 255, 1)" !==
                                            "0px 0px 0px 0px rgba(255, 255, 255, 1)"
                                                ? "0px 0px 0px 0px rgba(255, 255, 255, 1)"
                                                : false,
                                        d = Math.floor(Math.random() * 1e15),
                                        isSafari = (function () {
                                            let ua = navigator.userAgent;
                                            if (/safari/gi.test(ua) && !/chrome/gi.test(ua)) return true;
                                            else return false;
                                        })(),
                                        noUrlShow = "" ? "".replace(/\s+/g, "").split(",") : false,
                                        hr = "href",
                                        hs = "hash",
                                        hp = "pathname",
                                        ho = "origin",
                                        hh = "host";
                                    if (
                                        !(
                                            noUrlShow &&
                                            (noUrlShow.some((e) => e === location[hr]) ||
                                                noUrlShow
                                                    .map((e) => e.replace(/http\w*\:\/+|#.+/gi, ""))
                                                    .some((e) => e === location[hh] + location[hp]))
                                        ) &&
                                        "#rec1520460341" &&
                                        arrWidth.some((e) =>
                                            e[0] <= windowWidth && windowWidth <= e[1] ? true : false
                                        )
                                    ) {
                                        annexxAddStyle("016", ` #t-header { position: relative; } `);
                                        if ("fixed" === "fixed") {
                                            annexxAddStyle("016", ` #rec1520460341 { display: none; } `, d + "hide");
                                        }
                                        annexxAddStyle(
                                            "016",
                                            ` #rec1520460341 { -webkit-transition: -webkit-transform 0s linear 0s !important; transition: transform 0s linear 0s !important; } `,
                                            d + "notrans"
                                        );
                                        if (0) {
                                            if (false) {
                                                annexxAddStyle(
                                                    "016",
                                                    ` #rec1520460341 { padding-bottom: 0px !important; } `
                                                );
                                            } else {
                                                annexxAddStyle(
                                                    "016",
                                                    ` #rec1520460341 { padding-top: 0px !important; } `
                                                );
                                            }
                                        }
                                        setTimeout(function () {
                                            annexxRemoveStyle("016", d + "notrans");
                                        }, 200);
                                        if ("fixed" === "fixed" && (0 || "")) {
                                            annexxAddStyle(
                                                "016",
                                                ` #rec1520460341 { background-color: transparent !important; } ${(function () {
                                                    return "#rec1520460341"
                                                        .split(/,\s|,/g)
                                                        .map((e) => e + " .t396__artboard")
                                                        .join(",");
                                                })()} { background-color: transparent !important; } `,
                                                d + "bg"
                                            );
                                        }
                                        document.addEventListener("DOMContentLoaded", function () {
                                            let block = document.querySelectorAll("#rec1520460341");
                                            block.forEach((block) => {
                                                let zero = block.querySelector(".t396__artboard") ? true : false,
                                                    pn;
                                                if (zero) block.style.pointerEvents = "none";
                                                if (
                                                    (block.querySelector(".t396__artboard") &&
                                                        getComputedStyle(block.querySelector(".t396__artboard"))
                                                            .backgroundColor === "rgba(0, 0, 0, 0)") ||
                                                    ("fixed" === "fixed" && (0 || ""))
                                                ) {
                                                    let int = setInterval(function () {
                                                        if (document.body.style.pointerEvents !== "none") {
                                                            clearInterval(int);
                                                            setTimeout(() => {
                                                                if (zero) block.style.pointerEvents = "";
                                                                let t = [];
                                                                block.querySelectorAll(".t396__elem").forEach((e) => {
                                                                    if (getComputedStyle(e).pointerEvents !== "none")
                                                                        t.push(
                                                                            `#${block.id} .${Array.from(e.classList).find((el) => /tn\-elem__/.test(el))}`
                                                                        );
                                                                });
                                                                if (t.length)
                                                                    annexxAddStyle(
                                                                        "016",
                                                                        `${t.join(",")} {pointer-events: all;}`,
                                                                        "pe" + d
                                                                    );
                                                                if (zero) block.style.pointerEvents = "none";
                                                                pn = true;
                                                            }, 1e3);
                                                        }
                                                    }, 500);
                                                } else if (zero) block.style.pointerEvents = "";
                                                switch ("fixed") {
                                                    case "overlay":
                                                        annexxAddStyle(
                                                            "016",
                                                            ` #${block.id} { position: absolute !important; width: 100%; z-index: 9999 !important; ${(function () {
                                                                if (shadow)
                                                                    return "box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);";
                                                                else return "";
                                                            })()} } .t-body_popupshowed #${block.id} { z-index: -1 !important; } `
                                                        );
                                                        break;
                                                    case "fixed":
                                                        function addStyle() {
                                                            let top = false ? 100 : -100;
                                                            annexxAddStyle(
                                                                "016",
                                                                ` #${block.id}.fixed-zero${d} { -webkit-transform: translateY(${top}%); transform: translateY(${top}%); -webkit-transition: -webkit-transform 200ms linear 0s ${(function () {
                                                                    if (shadow) {
                                                                        return ", box-shadow 200ms linear 0s";
                                                                    } else return "";
                                                                })()} ${(function () {
                                                                    if (0 || "") {
                                                                        return ", background-color calc(200ms - 100ms) linear";
                                                                    } else return "";
                                                                })()}; transition: transform 200ms linear 0s ${(function () {
                                                                    if (shadow) {
                                                                        return ", box-shadow 200ms linear 0s";
                                                                    } else return "";
                                                                })()} ${(function () {
                                                                    if (0 || "") {
                                                                        return ", background-color calc(200ms - 100ms) linear";
                                                                    } else return "";
                                                                })()}; ${(function () {
                                                                    if (shadow) {
                                                                        return "box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);";
                                                                    } else return "";
                                                                })()} } #${block.id}.fixed-zero${d} .t396__artboard { -webkit-transition: background-color 200ms linear; transition: background-color 200ms linear; } #${block.id}.fixed-zero${d}.show-fixed-zero { -webkit-transform: translateY(0); transform: translateY(0); ${(function () {
                                                                    if (shadow) {
                                                                        return "box-shadow: " + shadow + ";";
                                                                    } else return "";
                                                                })()} } #${block.id} .tmenu-mobile_positionfixed { position: unset !important; } `
                                                            );
                                                            if (block) block.classList.add(`fixed-zero${d}`);
                                                        }
                                                        annexxAddStyle(
                                                            "016",
                                                            ` #${block.id} { position: fixed !important; ${(function () {
                                                                return false
                                                                    ? `bottom: 0px !important;`
                                                                    : "top: 0 !important;";
                                                            })()} width: 100%; height: fit-content; z-index: 9999 !important; } .t-body_popupshowed #${block.id} { z-index: -1 !important; } `
                                                        );
                                                        if (0 || "") {
                                                            annexxRemoveStyle("016", d + "bg");
                                                            setTimeout(() => {
                                                                let bgScrollThreshold = 0,
                                                                    bgBlockSelector = "";
                                                                if (bgBlockSelector) {
                                                                    let bgTriggerBlock =
                                                                        document.querySelector(bgBlockSelector);
                                                                    if (bgTriggerBlock) {
                                                                        bgScrollThreshold = bgTriggerBlock.offsetTop;
                                                                    }
                                                                }
                                                                let artboard = zero
                                                                        ? block.querySelector(".t396__artboard")
                                                                        : block,
                                                                    elem = block.querySelectorAll(".t396__elem"),
                                                                    bgcolor =
                                                                        getComputedStyle(artboard).backgroundColor;
                                                                if (block.querySelector(".t396__artboard"))
                                                                    block.style = "rgba(0, 0, 0, 0)";
                                                                function showBG() {
                                                                    if (pageYOffset >= bgScrollThreshold) {
                                                                        if (zero) block.style.pointerEvents = "";
                                                                        artboard.style.backgroundColor = bgcolor;
                                                                    } else {
                                                                        if (zero && pn)
                                                                            block.style.pointerEvents = "none";
                                                                        artboard.style.backgroundColor = "transparent";
                                                                    }
                                                                }
                                                                showBG();
                                                                window.addEventListener("scroll", showBG);
                                                            }, 100);
                                                        }
                                                        let inEnd = false;
                                                        if ((0 || "") && !true) {
                                                            let int = setInterval(function () {
                                                                if (window.tn_scale_factor) {
                                                                    clearInterval(int);
                                                                    addStyle();
                                                                    let opacityready = false;
                                                                    inEnd = true;
                                                                    let scrollThreshold =
                                                                            0 && false ? 0 * window.tn_scale_factor : 0,
                                                                        scrollBlockSelector = "";
                                                                    if (scrollBlockSelector) {
                                                                        let triggerBlock =
                                                                            document.querySelector(scrollBlockSelector);
                                                                        if (triggerBlock) {
                                                                            scrollThreshold = triggerBlock.offsetTop;
                                                                        }
                                                                    }
                                                                    let hideScrollThreshold =
                                                                            0 && false ? 0 * window.tn_scale_factor : 0,
                                                                        hideScrollBlockSelector = "";
                                                                    if (hideScrollBlockSelector) {
                                                                        let hideTriggerBlock =
                                                                            document.querySelector(
                                                                                hideScrollBlockSelector
                                                                            );
                                                                        if (hideTriggerBlock) {
                                                                            setTimeout(() => {
                                                                                hideScrollThreshold =
                                                                                    hideTriggerBlock.offsetTop;
                                                                            }, 1e3);
                                                                        }
                                                                    }
                                                                    window.addEventListener("scroll", function (e) {
                                                                        if (
                                                                            false &&
                                                                            window.innerHeight +
                                                                                window.pageYOffset +
                                                                                30 >=
                                                                                Math.max(
                                                                                    document.documentElement
                                                                                        .scrollHeight,
                                                                                    document.documentElement
                                                                                        .offsetHeight,
                                                                                    document.documentElement
                                                                                        .clientHeight
                                                                                )
                                                                        )
                                                                            block.classList.remove("show-fixed-zero");
                                                                        else if (
                                                                            window.pageYOffset >= scrollThreshold &&
                                                                            (hideScrollThreshold
                                                                                ? window.pageYOffset <=
                                                                                  hideScrollThreshold
                                                                                : true)
                                                                        ) {
                                                                            if (!opacityready) {
                                                                                opacityready = true;
                                                                            }
                                                                            block.classList.add("show-fixed-zero");
                                                                        } else
                                                                            block.classList.remove("show-fixed-zero");
                                                                    });
                                                                }
                                                            }, 200);
                                                        } else if (true) {
                                                            let int = setInterval(function () {
                                                                if (window.tn_scale_factor) {
                                                                    clearInterval(int);
                                                                    let scrF = function (e) {
                                                                        if (
                                                                            window.pageYOffset >=
                                                                            (function () {
                                                                                let scrollThreshold =
                                                                                        0 && false
                                                                                            ? 0 * window.tn_scale_factor
                                                                                            : 0,
                                                                                    scrollBlockSelector = "";
                                                                                if (scrollBlockSelector) {
                                                                                    let triggerBlock =
                                                                                        document.querySelector(
                                                                                            scrollBlockSelector
                                                                                        );
                                                                                    if (triggerBlock) {
                                                                                        setTimeout(() => {
                                                                                            scrollThreshold =
                                                                                                triggerBlock.offsetTop;
                                                                                        }, 1e3);
                                                                                    }
                                                                                }
                                                                                return scrollThreshold;
                                                                            })()
                                                                        ) {
                                                                            window.removeEventListener("scroll", scrF);
                                                                        }
                                                                    };
                                                                    window.addEventListener("scroll", scrF);
                                                                }
                                                            }, 200);
                                                        } else if (shadow) {
                                                            annexxAddStyle(
                                                                "016",
                                                                ` #${block.id} { box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1); } `
                                                            );
                                                        }
                                                        if (true) {
                                                            block.style.transitionDuration = "0ms";
                                                            setTimeout(() => {
                                                                block.style.transitionDuration = "";
                                                            }, 400);
                                                            addStyle();
                                                            let opacityready = false,
                                                                pos = window.scrollY > 0 ? window.scrollY : 0;
                                                            if (!opacityready) {
                                                                opacityready = true;
                                                            }
                                                            let reverseScrollThreshold = 1200,
                                                                reverseBlockSelector = "";
                                                            if (reverseBlockSelector) {
                                                                let reverseTriggerBlock =
                                                                    document.querySelector(reverseBlockSelector);
                                                                if (reverseTriggerBlock) {
                                                                    setTimeout(() => {
                                                                        reverseScrollThreshold =
                                                                            reverseTriggerBlock.offsetTop;
                                                                    }, 1e3);
                                                                }
                                                            }
                                                            if (!pos && !reverseScrollThreshold)
                                                                block.classList.add("show-fixed-zero");
                                                            window.addEventListener("scroll", function (e) {
                                                                let posnew = window.scrollY > 0 ? window.scrollY : 0,
                                                                    isScrollingUp = posnew <= pos;
                                                                if (isScrollingUp && posnew >= reverseScrollThreshold) {
                                                                    block.classList.add("show-fixed-zero");
                                                                } else {
                                                                    block.classList.remove("show-fixed-zero");
                                                                }
                                                                pos = posnew;
                                                            });
                                                        }
                                                        if (!inEnd && false && !true) {
                                                            addStyle();
                                                            window.addEventListener("scroll", function (e) {
                                                                let s = window.innerHeight + window.pageYOffset;
                                                                if (isSafari && s - 10 === document.body.offsetHeight)
                                                                    block.classList.add("show-fixed-zero");
                                                                else if (s + 30 >= document.body.offsetHeight)
                                                                    block.classList.remove("show-fixed-zero");
                                                                else block.classList.add("show-fixed-zero");
                                                            });
                                                            if (!(0 || "") && !window.pageYOffset)
                                                                block.classList.add("show-fixed-zero");
                                                        }
                                                        break;
                                                }
                                                if ("") {
                                                    document.querySelectorAll("").forEach((e) => {
                                                        e.addEventListener("click", () => {
                                                            block.classList.remove("show-fixed-zero");
                                                            setTimeout(() => {
                                                                block.remove();
                                                            }, 400);
                                                        });
                                                    });
                                                    annexxAddStyle("016", ` { cursor: pointer; } `);
                                                }
                                            });
                                            annexxRemoveStyle("016", d + "hide");
                                            if (0 || "") {
                                                let shape = ""
                                                        ? document.querySelectorAll(
                                                              ""
                                                                  .split(/,\s|,/g)
                                                                  .map((e) => e + " .tn-atom")
                                                                  .join(",")
                                                          )
                                                        : false,
                                                    text = ""
                                                        ? document.querySelectorAll(
                                                              ""
                                                                  .split(/,\s|,/g)
                                                                  .map((e) => e + " .tn-atom")
                                                                  .join(",")
                                                          )
                                                        : false;
                                                if (shape) {
                                                    annexxAddStyle(
                                                        "016",
                                                        ` ${""
                                                            .split(/,\s|,/g)
                                                            .map((e) => e + " .tn-atom")
                                                            .join(",")} { transition: background-color 300ms linear; } `
                                                    );
                                                }
                                                if (text) {
                                                    annexxAddStyle(
                                                        "016",
                                                        ` ${""
                                                            .split(/,\s|,/g)
                                                            .map((e) => e + " .tn-atom")
                                                            .join(",")} { transition: color 300ms linear; } `
                                                    );
                                                }
                                                let triggerPosition,
                                                    triggerBlock = "" ? document.querySelector("") : null;
                                                if (triggerBlock) {
                                                    triggerPosition = triggerBlock.offsetTop;
                                                } else {
                                                    triggerPosition = 0;
                                                }
                                                if (triggerPosition > 0) {
                                                    window.addEventListener("scroll", function (e) {
                                                        let posnew = window.pageYOffset,
                                                            pos = 0;
                                                        if (triggerPosition <= posnew) {
                                                            if (shape) {
                                                                shape.forEach(
                                                                    (e) =>
                                                                        (e.style.backgroundColor = "rgba(0, 0, 0, 1)")
                                                                );
                                                            }
                                                            if (text) {
                                                                text.forEach(
                                                                    (e) => (e.style.color = "rgba(0, 0, 0, 1)")
                                                                );
                                                            }
                                                        } else {
                                                            if (shape) {
                                                                shape.forEach((e) => (e.style.backgroundColor = ""));
                                                            }
                                                            if (text) {
                                                                text.forEach((e) => (e.style.color = ""));
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    if (!window.nlm068obj) {
                                        window.nlm068obj = { openSide: "" };
                                    }
                                    if (!window.nlmFixedZeroBlocksObj068) {
                                        window.nlmFixedZeroBlocksObj068 = { top: "", bottom: "", list: [] };
                                    }
                                    function t_ready(t) {
                                        "loading" != document.readyState
                                            ? t()
                                            : document.addEventListener
                                              ? document.addEventListener("DOMContentLoaded", t)
                                              : document.attachEvent("onreadystatechange", function () {
                                                    "loading" != document.readyState && t();
                                                });
                                    }
                                    t_ready(function () {
                                        let backgroundElem = document.querySelector(".nlm_dark-background486829256");
                                        if (backgroundElem) {
                                            backgroundElem.style.display = "none";
                                        }
                                        let nlm068ForDeleteStyleTag = document.querySelector("#nlm068fordelete");
                                        if (nlm068ForDeleteStyleTag) {
                                            nlm068ForDeleteStyleTag.remove();
                                        }
                                        let menuState = "static";
                                        if (
                                            window.nlm009obj &&
                                            window.nlm009obj.list.includes(
                                                "#" + document.querySelector(".menuNolim068").closest(".t-rec").id
                                            )
                                        ) {
                                            menuState = "nolimFixMenu";
                                        }
                                        let block = $(".menuNolim068").parents(".t-rec");
                                        let blockStyle = window.getComputedStyle(block[0]);
                                        const blockWithMenu = document.querySelector("#rec1531676791 .t396__artboard");
                                        if (
                                            !block[0].classList.contains("nlm009fixmenu") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .hasAttribute("data-artboard-pos") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .getAttribute("data-artboard-pos") == "fixed"
                                        ) {
                                            menuState = "zeroFixMenu";
                                            window.nlmFixedZeroBlocksObj068.list.push("#" + block[0].id);
                                            if (
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .hasAttribute("data-artboard-fixed-pos") &&
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .getAttribute("data-artboard-fixed-pos") == "bottom"
                                            ) {
                                                window.nlmFixedZeroBlocksObj068.bottom = block[0].id;
                                            } else {
                                                window.nlmFixedZeroBlocksObj068.top = block[0].id;
                                            }
                                        } else {
                                            if (getComputedStyle(blockWithMenu).position == "absolute") {
                                                block[0].querySelector(".t396__artboard").style.position = "absolute";
                                            } else {
                                                block[0].querySelector(".t396__artboard").style.position = "relative";
                                            }
                                            if ("999") {
                                                block[0].querySelector(".t396__artboard").style.zIndex = "999";
                                            }
                                        }
                                        let ii;
                                        let mynewstyle = "<style>";
                                        let menus = "";
                                        blockWithMenu.style.zIndex = 999 + 1;
                                        var itemsWoRec = [];
                                        let mainTarget;
                                        let count = 0;
                                        $(".menuNolim068").each(function (i, item) {
                                            let hr = $(item).find("[href]").attr("href");
                                            if (
                                                typeof hr != "undefined" &&
                                                (hr.startsWith("#rec") || hr.startsWith("/#rec"))
                                            ) {
                                                if (hr.startsWith("/#rec")) {
                                                    hr = hr.substring(1);
                                                }
                                                if ($(hr).length > 0) {
                                                    $(hr).addClass("nlm068secondMenu486829256");
                                                    $(hr).css("zIndex", "999");
                                                    if (false) {
                                                        $(hr).css("opacity", "0");
                                                    }
                                                    $(hr).addClass("nolim_forMenu");
                                                    $(hr).addClass("nolimAutoScaleFix");
                                                    $(item).find("[href]").attr("nolim-data-menuid", hr);
                                                    $(item).find("[href]").attr("href", "#");
                                                    menus += `${hr},`;
                                                    mynewstyle += `${hr},`;
                                                } else {
                                                    $(item).removeClass("menuNolim068");
                                                }
                                            } else if (typeof hr != "undefined") {
                                                itemsWoRec.push($(item));
                                            }
                                        });
                                        var secondLevelId = [];
                                        document.querySelectorAll("[nolim-data-menuid]").forEach(function (item) {
                                            secondLevelId.push(item.getAttribute("nolim-data-menuid").replace("#", ""));
                                        });
                                        menus = menus.substring(0, menus.length - 1);
                                        mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1);
                                        mynewstyle += ` { width: 100%; }`;
                                        mynewstyle += `</style>`;
                                        $("body").after(mynewstyle);
                                        let sI = setInterval(function () {
                                            if ($(".menuNolim068 .tn-atom").length > 0) {
                                                clearInterval(sI);
                                                let menu2 = menus;
                                                let href = $(".menuNolim068 a[nolim-data-menuid]");
                                                let idM = $(".menuNolim068 .tn-atom").parents(".t-rec");
                                                let idPos = $(".menuNolim068 .tn-atom")
                                                    .parents(".t-rec")
                                                    .css("position");
                                                if (menuState == "zeroFixMenu") {
                                                    idPos = $(".menuNolim068 .tn-atom")
                                                        .parents(".t396__artboard")
                                                        .css("position");
                                                }
                                                function checkHeight(target) {
                                                    let extraMargin;
                                                    function setExtraMargin() {
                                                        let windowWidth = document.documentElement.clientWidth;
                                                        if (windowWidth > 1200) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 960 && windowWidth < 1201) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 640 && windowWidth < 961) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 480 && windowWidth < 641) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth < 481) {
                                                            extraMargin = 0;
                                                        }
                                                    }
                                                    setExtraMargin();
                                                    let idH;
                                                    if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.top &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.top &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH = target
                                                                .closest(".t396__artboard")
                                                                .getBoundingClientRect().bottom;
                                                        }
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    } else if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.bottom &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.bottom &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("top", "");
                                                        idH =
                                                            window.innerHeight -
                                                            target.closest(".t-rec").getBoundingClientRect().top;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH =
                                                                window.innerHeight -
                                                                target
                                                                    .closest(".t396__artboard")
                                                                    .getBoundingClientRect().top;
                                                        }
                                                        ii = "bottom";
                                                        window.nlm068obj.openSide = "bottom";
                                                    } else {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    }
                                                    if (idPos == "fixed") {
                                                        $(menu2).css("position", "fixed");
                                                        $(menu2).css(ii, idH + extraMargin + "px");
                                                    } else if (idPos == "static" || idPos == "absolute") {
                                                        $(menu2).css("position", "absolute");
                                                        $(menu2).css(ii, window.pageYOffset + idH + extraMargin + "px");
                                                    }
                                                }
                                                function forAutoscaleMode(blockId, block) {
                                                    typeof t_slds_updateSlider != "undefined" &&
                                                        t_slds_updateSlider(blockId);
                                                    if (block && block.querySelector(".t396")) {
                                                        t396_doResize(blockId);
                                                    }
                                                    if (
                                                        window.CustomEvent &&
                                                        typeof window.CustomEvent === "function"
                                                    ) {
                                                        var myCustomEvent = new CustomEvent("displayChanged");
                                                    } else {
                                                        var myCustomEvent = document.createEvent("CustomEvent");
                                                        myCustomEvent.initCustomEvent("displayChanged", true, true);
                                                    }
                                                    block.dispatchEvent(myCustomEvent);
                                                    if ("y" === window.lazy) {
                                                        t_lazyload_update();
                                                    }
                                                }
                                                function firstBlocksCall() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "block");
                                                        forAutoscaleMode(idRep, x);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "none");
                                                        $(x).css("opacity", "1");
                                                    });
                                                }
                                                function resizeFunction() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        if (window.innerWidth > 640) {
                                                            forAutoscaleMode(idRep, x);
                                                        }
                                                    });
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background486829256"
                                                    );
                                                    backgroundElem.style.display = "none";
                                                }
                                                setTimeout(function () {
                                                    $(".nolimSearch .tn-atom").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).fadeOut(300);
                                                    });
                                                    firstBlocksCall();
                                                    let blocksFromSecondMenu =
                                                        document.querySelectorAll("#rec1531686931");
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background486829256"
                                                    );
                                                    function setNlmDarkBackgroundDisplay(value) {
                                                        backgroundElem.style.display = value;
                                                    }
                                                    const observer = new MutationObserver(function (mutationsList) {
                                                        for (let mutation of mutationsList) {
                                                            if (
                                                                mutation.type === "attributes" &&
                                                                mutation.attributeName === "style"
                                                            ) {
                                                                let displayValue = mutation.target.style.display;
                                                                if (displayValue === "none" || !displayValue) {
                                                                    setNlmDarkBackgroundDisplay("none");
                                                                } else {
                                                                    setNlmDarkBackgroundDisplay("block");
                                                                }
                                                            }
                                                        }
                                                    });
                                                    blocksFromSecondMenu.forEach((elem) => {
                                                        observer.observe(elem, {
                                                            attributes: true,
                                                            attributeFilter: ["style"],
                                                        });
                                                    });
                                                    if (1) {
                                                        const hideMenuOnScroll = () => {
                                                            $(menu2).fadeOut(300);
                                                        };
                                                        window.removeEventListener("scroll", hideMenuOnScroll);
                                                        window.addEventListener("scroll", hideMenuOnScroll);
                                                    }
                                                    href.off("click").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).removeClass("nolimAutoScaleFix");
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).fadeOut(300);
                                                            firstBlocksCall();
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                                $(id).css("display", "block");
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu486829256")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            if (true) {
                                                                filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                    value.style.display = "none";
                                                                });
                                                            }
                                                        } else {
                                                            $(id).fadeOut(300, function () {
                                                                $(id).css("overflow", "hidden");
                                                            });
                                                        }
                                                    });
                                                    $(".nlm_dark-background486829256")
                                                        .off("click")
                                                        .on("click", function (e) {
                                                            e.preventDefault();
                                                            $(".nlm068secondMenu486829256").css("display", "none");
                                                        });
                                                }, 300);
                                                href.mouseover(function (e) {
                                                    e.preventDefault();
                                                    let windowWidth = document.documentElement.clientWidth;
                                                    if (windowWidth > 1200) {
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).removeClass("nolimAutoScaleFix");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu486829256")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                value.style.display = "none";
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            $(menu2).fadeOut(300);
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).css("overflow", "visible");
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                            });
                                                            $(id).css("display", "block");
                                                        }
                                                    }
                                                });
                                                itemsWoRec.forEach(function (item) {
                                                    item.mouseover(function (e) {
                                                        e.preventDefault();
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    });
                                                });
                                                window.addEventListener("click", function (e) {
                                                    if (
                                                        e.target.closest(".r") &&
                                                        secondLevelId.includes(
                                                            e.target.closest(".r").getAttribute("id")
                                                        ) &&
                                                        e.target.hasAttribute("href") &&
                                                        e.target.getAttribute("href").startsWith("#")
                                                    ) {
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    }
                                                });
                                                window.addEventListener("resize", function () {
                                                    resizeFunction();
                                                });
                                                function isSecondMenuOnHover(e) {
                                                    $(document).off("pointermove mousemove", isSecondMenuOnHover);
                                                    $(document).off("pointermove mousemove", closeMenu);
                                                    $(document).on("pointermove mousemove", closeMenu);
                                                }
                                                function closeMenu(e) {
                                                    if (
                                                        ($(menu2).has(e.target).length === 0 &&
                                                            $(idM).has(e.target).length === 0 &&
                                                            !$(menu2).is(e.target)) ||
                                                        $(".menuNolimClose068:hover").length > 0
                                                    ) {
                                                        $(menu2).fadeOut(300);
                                                        window.nlm068obj.openSide = "";
                                                        $(document).off("pointermove mousemove", closeMenu);
                                                        $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                    }
                                                }
                                                if (true) {
                                                    let hideMenuButtons = document.querySelectorAll(".hideMenuButton");
                                                    if (hideMenuButtons.length > 0) {
                                                        function forHideMenuButtonEventListener(e) {
                                                            $(menu2).fadeOut(300);
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        hideMenuButtons.forEach((button) => {
                                                            button.removeEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                            button.addEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                        });
                                                    }
                                                }
                                                $(document).on("pointerup mouseup", closeMenu);
                                                $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                function t650t959fix() {
                                                    document
                                                        .querySelectorAll(".nlm068secondMenu486829256")
                                                        .forEach(function (item) {
                                                            if (window.t650_unifyHeights != undefined) {
                                                                t650_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                            if (window.t959_unifyHeights != undefined) {
                                                                t959_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                        });
                                                }
                                                let int1 = setInterval(function () {
                                                    if (window.t650_unifyHeights != undefined) {
                                                        clearInterval(int1);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                let int2 = setInterval(function () {
                                                    if (window.t959_unifyHeights != undefined) {
                                                        clearInterval(int2);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                setTimeout(function () {
                                                    clearInterval(int1);
                                                    clearInterval(int2);
                                                }, 2000);
                                                let int3 = setInterval(function () {
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "none";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-active")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-active")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "auto";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                        let targetNodes = document.querySelectorAll(".nlm068secondMenu486829256");
                                        let config = {
                                            attributes: true,
                                            attributeOldValue: true,
                                            attributeFilter: ["style"],
                                        };
                                        let callback = function (mutationsList) {
                                            let background = document.querySelector(".nlm_dark-background486829256");
                                            if (!background) return;
                                            for (let targetNode of targetNodes) {
                                                if (targetNode.style.display !== "none" && targetNode.style.display) {
                                                    background.style.display = "block";
                                                    background.classList.remove("nolimAutoScaleFix");
                                                    return;
                                                }
                                            }
                                            background.style.display = "none";
                                        };
                                        targetNodes.forEach((targetNode) => {
                                            let observer = new MutationObserver(callback);
                                            observer.observe(targetNode, config);
                                        });
                                    });
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1452374721, #rec1531676791" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1452374721, #rec1531676791") {
                                                document
                                                    .querySelectorAll("#rec1452374721, #rec1531676791")
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 20} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 20} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 20} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (
                                        "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471" ||
                                        ""
                                    ) {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if (
                                                "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471"
                                            ) {
                                                document
                                                    .querySelectorAll(
                                                        "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471"
                                                    )
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 400} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    if (!window.nlm068obj) {
                                        window.nlm068obj = { openSide: "" };
                                    }
                                    if (!window.nlmFixedZeroBlocksObj068) {
                                        window.nlmFixedZeroBlocksObj068 = { top: "", bottom: "", list: [] };
                                    }
                                    function t_ready(t) {
                                        "loading" != document.readyState
                                            ? t()
                                            : document.addEventListener
                                              ? document.addEventListener("DOMContentLoaded", t)
                                              : document.attachEvent("onreadystatechange", function () {
                                                    "loading" != document.readyState && t();
                                                });
                                    }
                                    t_ready(function () {
                                        let backgroundElem = document.querySelector(".nlm_dark-background804255781");
                                        if (backgroundElem) {
                                            backgroundElem.style.display = "none";
                                        }
                                        let nlm068ForDeleteStyleTag = document.querySelector("#nlm068fordelete");
                                        if (nlm068ForDeleteStyleTag) {
                                            nlm068ForDeleteStyleTag.remove();
                                        }
                                        let menuState = "static";
                                        if (
                                            window.nlm009obj &&
                                            window.nlm009obj.list.includes(
                                                "#" + document.querySelector(".menuNolim068").closest(".t-rec").id
                                            )
                                        ) {
                                            menuState = "nolimFixMenu";
                                        }
                                        let block = $(".menuNolim068").parents(".t-rec");
                                        let blockStyle = window.getComputedStyle(block[0]);
                                        const blockWithMenu = document.querySelector("#rec1520460341 .t396__artboard");
                                        if (
                                            !block[0].classList.contains("nlm009fixmenu") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .hasAttribute("data-artboard-pos") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .getAttribute("data-artboard-pos") == "fixed"
                                        ) {
                                            menuState = "zeroFixMenu";
                                            window.nlmFixedZeroBlocksObj068.list.push("#" + block[0].id);
                                            if (
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .hasAttribute("data-artboard-fixed-pos") &&
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .getAttribute("data-artboard-fixed-pos") == "bottom"
                                            ) {
                                                window.nlmFixedZeroBlocksObj068.bottom = block[0].id;
                                            } else {
                                                window.nlmFixedZeroBlocksObj068.top = block[0].id;
                                            }
                                        } else {
                                            if (getComputedStyle(blockWithMenu).position == "absolute") {
                                                block[0].querySelector(".t396__artboard").style.position = "absolute";
                                            } else {
                                                block[0].querySelector(".t396__artboard").style.position = "relative";
                                            }
                                            if ("999999") {
                                                block[0].querySelector(".t396__artboard").style.zIndex = "999999";
                                            }
                                        }
                                        let ii;
                                        let mynewstyle = "<style>";
                                        let menus = "";
                                        blockWithMenu.style.zIndex = 999999 + 1;
                                        var itemsWoRec = [];
                                        let mainTarget;
                                        let count = 0;
                                        $(".menuNolim068").each(function (i, item) {
                                            let hr = $(item).find("[href]").attr("href");
                                            if (
                                                typeof hr != "undefined" &&
                                                (hr.startsWith("#rec") || hr.startsWith("/#rec"))
                                            ) {
                                                if (hr.startsWith("/#rec")) {
                                                    hr = hr.substring(1);
                                                }
                                                if ($(hr).length > 0) {
                                                    $(hr).addClass("nlm068secondMenu804255781");
                                                    $(hr).css("zIndex", "999999");
                                                    if (false) {
                                                        $(hr).css("opacity", "0");
                                                    }
                                                    $(hr).addClass("nolim_forMenu");
                                                    $(hr).addClass("nolimAutoScaleFix");
                                                    $(item).find("[href]").attr("nolim-data-menuid", hr);
                                                    $(item).find("[href]").attr("href", "#");
                                                    menus += `${hr},`;
                                                    mynewstyle += `${hr},`;
                                                } else {
                                                    $(item).removeClass("menuNolim068");
                                                }
                                            } else if (typeof hr != "undefined") {
                                                itemsWoRec.push($(item));
                                            }
                                        });
                                        var secondLevelId = [];
                                        document.querySelectorAll("[nolim-data-menuid]").forEach(function (item) {
                                            secondLevelId.push(item.getAttribute("nolim-data-menuid").replace("#", ""));
                                        });
                                        menus = menus.substring(0, menus.length - 1);
                                        mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1);
                                        mynewstyle += ` { width: 100%; }`;
                                        mynewstyle += `</style>`;
                                        $("body").after(mynewstyle);
                                        let sI = setInterval(function () {
                                            if ($(".menuNolim068 .tn-atom").length > 0) {
                                                clearInterval(sI);
                                                let menu2 = menus;
                                                let href = $(".menuNolim068 a[nolim-data-menuid]");
                                                let idM = $(".menuNolim068 .tn-atom").parents(".t-rec");
                                                let idPos = $(".menuNolim068 .tn-atom")
                                                    .parents(".t-rec")
                                                    .css("position");
                                                if (menuState == "zeroFixMenu") {
                                                    idPos = $(".menuNolim068 .tn-atom")
                                                        .parents(".t396__artboard")
                                                        .css("position");
                                                }
                                                function checkHeight(target) {
                                                    let extraMargin;
                                                    function setExtraMargin() {
                                                        let windowWidth = document.documentElement.clientWidth;
                                                        if (windowWidth > 1200) {
                                                            extraMargin = -150;
                                                        } else if (windowWidth > 960 && windowWidth < 1201) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 640 && windowWidth < 961) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 480 && windowWidth < 641) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth < 481) {
                                                            extraMargin = 0;
                                                        }
                                                    }
                                                    setExtraMargin();
                                                    let idH;
                                                    if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.top &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.top &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH = target
                                                                .closest(".t396__artboard")
                                                                .getBoundingClientRect().bottom;
                                                        }
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    } else if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.bottom &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.bottom &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("top", "");
                                                        idH =
                                                            window.innerHeight -
                                                            target.closest(".t-rec").getBoundingClientRect().top;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH =
                                                                window.innerHeight -
                                                                target
                                                                    .closest(".t396__artboard")
                                                                    .getBoundingClientRect().top;
                                                        }
                                                        ii = "bottom";
                                                        window.nlm068obj.openSide = "bottom";
                                                    } else {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    }
                                                    if (idPos == "fixed") {
                                                        $(menu2).css("position", "fixed");
                                                        $(menu2).css(ii, idH + extraMargin + "px");
                                                    } else if (idPos == "static" || idPos == "absolute") {
                                                        $(menu2).css("position", "absolute");
                                                        $(menu2).css(ii, window.pageYOffset + idH + extraMargin + "px");
                                                    }
                                                }
                                                function forAutoscaleMode(blockId, block) {
                                                    typeof t_slds_updateSlider != "undefined" &&
                                                        t_slds_updateSlider(blockId);
                                                    if (block && block.querySelector(".t396")) {
                                                        t396_doResize(blockId);
                                                    }
                                                    if (
                                                        window.CustomEvent &&
                                                        typeof window.CustomEvent === "function"
                                                    ) {
                                                        var myCustomEvent = new CustomEvent("displayChanged");
                                                    } else {
                                                        var myCustomEvent = document.createEvent("CustomEvent");
                                                        myCustomEvent.initCustomEvent("displayChanged", true, true);
                                                    }
                                                    block.dispatchEvent(myCustomEvent);
                                                    if ("y" === window.lazy) {
                                                        t_lazyload_update();
                                                    }
                                                }
                                                function firstBlocksCall() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "block");
                                                        forAutoscaleMode(idRep, x);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "none");
                                                        $(x).css("opacity", "1");
                                                    });
                                                }
                                                function resizeFunction() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        if (window.innerWidth > 640) {
                                                            forAutoscaleMode(idRep, x);
                                                        }
                                                    });
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background804255781"
                                                    );
                                                    backgroundElem.style.display = "none";
                                                }
                                                setTimeout(function () {
                                                    $(".nolimSearch .tn-atom").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).fadeOut(300);
                                                    });
                                                    firstBlocksCall();
                                                    let blocksFromSecondMenu =
                                                        document.querySelectorAll("#rec1524903941");
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background804255781"
                                                    );
                                                    function setNlmDarkBackgroundDisplay(value) {
                                                        backgroundElem.style.display = value;
                                                    }
                                                    const observer = new MutationObserver(function (mutationsList) {
                                                        for (let mutation of mutationsList) {
                                                            if (
                                                                mutation.type === "attributes" &&
                                                                mutation.attributeName === "style"
                                                            ) {
                                                                let displayValue = mutation.target.style.display;
                                                                if (displayValue === "none" || !displayValue) {
                                                                    setNlmDarkBackgroundDisplay("none");
                                                                } else {
                                                                    setNlmDarkBackgroundDisplay("block");
                                                                }
                                                            }
                                                        }
                                                    });
                                                    blocksFromSecondMenu.forEach((elem) => {
                                                        observer.observe(elem, {
                                                            attributes: true,
                                                            attributeFilter: ["style"],
                                                        });
                                                    });
                                                    if (1) {
                                                        const hideMenuOnScroll = () => {
                                                            $(menu2).fadeOut(300);
                                                        };
                                                        window.removeEventListener("scroll", hideMenuOnScroll);
                                                        window.addEventListener("scroll", hideMenuOnScroll);
                                                    }
                                                    href.off("click").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).removeClass("nolimAutoScaleFix");
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).fadeOut(300);
                                                            firstBlocksCall();
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                                $(id).css("display", "block");
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu804255781")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            if (true) {
                                                                filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                    value.style.display = "none";
                                                                });
                                                            }
                                                        } else {
                                                            $(id).fadeOut(300, function () {
                                                                $(id).css("overflow", "hidden");
                                                            });
                                                        }
                                                    });
                                                    $(".nlm_dark-background804255781")
                                                        .off("click")
                                                        .on("click", function (e) {
                                                            e.preventDefault();
                                                            $(".nlm068secondMenu804255781").css("display", "none");
                                                        });
                                                }, 300);
                                                href.mouseover(function (e) {
                                                    e.preventDefault();
                                                    let windowWidth = document.documentElement.clientWidth;
                                                    if (windowWidth > 1200) {
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).removeClass("nolimAutoScaleFix");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu804255781")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                value.style.display = "none";
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            $(menu2).fadeOut(300);
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).css("overflow", "visible");
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                            });
                                                            $(id).css("display", "block");
                                                        }
                                                    }
                                                });
                                                itemsWoRec.forEach(function (item) {
                                                    item.mouseover(function (e) {
                                                        e.preventDefault();
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    });
                                                });
                                                window.addEventListener("click", function (e) {
                                                    if (
                                                        e.target.closest(".r") &&
                                                        secondLevelId.includes(
                                                            e.target.closest(".r").getAttribute("id")
                                                        ) &&
                                                        e.target.hasAttribute("href") &&
                                                        e.target.getAttribute("href").startsWith("#")
                                                    ) {
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    }
                                                });
                                                window.addEventListener("resize", function () {
                                                    resizeFunction();
                                                });
                                                function isSecondMenuOnHover(e) {
                                                    $(document).off("pointermove mousemove", isSecondMenuOnHover);
                                                    $(document).off("pointermove mousemove", closeMenu);
                                                    $(document).on("pointermove mousemove", closeMenu);
                                                }
                                                function closeMenu(e) {
                                                    if (
                                                        ($(menu2).has(e.target).length === 0 &&
                                                            $(idM).has(e.target).length === 0 &&
                                                            !$(menu2).is(e.target)) ||
                                                        $(".menuNolimClose068:hover").length > 0
                                                    ) {
                                                        $(menu2).fadeOut(300);
                                                        window.nlm068obj.openSide = "";
                                                        $(document).off("pointermove mousemove", closeMenu);
                                                        $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                    }
                                                }
                                                if (true) {
                                                    let hideMenuButtons = document.querySelectorAll(".hideMenuButton");
                                                    if (hideMenuButtons.length > 0) {
                                                        function forHideMenuButtonEventListener(e) {
                                                            $(menu2).fadeOut(300);
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        hideMenuButtons.forEach((button) => {
                                                            button.removeEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                            button.addEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                        });
                                                    }
                                                }
                                                $(document).on("pointerup mouseup", closeMenu);
                                                $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                function t650t959fix() {
                                                    document
                                                        .querySelectorAll(".nlm068secondMenu804255781")
                                                        .forEach(function (item) {
                                                            if (window.t650_unifyHeights != undefined) {
                                                                t650_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                            if (window.t959_unifyHeights != undefined) {
                                                                t959_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                        });
                                                }
                                                let int1 = setInterval(function () {
                                                    if (window.t650_unifyHeights != undefined) {
                                                        clearInterval(int1);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                let int2 = setInterval(function () {
                                                    if (window.t959_unifyHeights != undefined) {
                                                        clearInterval(int2);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                setTimeout(function () {
                                                    clearInterval(int1);
                                                    clearInterval(int2);
                                                }, 2000);
                                                let int3 = setInterval(function () {
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "none";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-active")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-active")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "auto";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                        let targetNodes = document.querySelectorAll(".nlm068secondMenu804255781");
                                        let config = {
                                            attributes: true,
                                            attributeOldValue: true,
                                            attributeFilter: ["style"],
                                        };
                                        let callback = function (mutationsList) {
                                            let background = document.querySelector(".nlm_dark-background804255781");
                                            if (!background) return;
                                            for (let targetNode of targetNodes) {
                                                if (targetNode.style.display !== "none" && targetNode.style.display) {
                                                    background.style.display = "block";
                                                    background.classList.remove("nolimAutoScaleFix");
                                                    return;
                                                }
                                            }
                                            background.style.display = "none";
                                        };
                                        targetNodes.forEach((targetNode) => {
                                            let observer = new MutationObserver(callback);
                                            observer.observe(targetNode, config);
                                        });
                                    });
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1520460341" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1520460341") {
                                                document.querySelectorAll("#rec1520460341").forEach((e) => {
                                                    e.classList.add("zindex-annexx");
                                                    if (getComputedStyle(e).position === "static") {
                                                        if (e.dataset.recordType === "121") {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 6000} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                            );
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 6000} !important; } `
                                                            );
                                                        }
                                                    } else {
                                                        annexxAddStyle(
                                                            "819",
                                                            ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 6000} !important; } `
                                                        );
                                                    }
                                                });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1531686931, #rec1524903941, #rec1559022031" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1531686931, #rec1524903941, #rec1559022031") {
                                                document
                                                    .querySelectorAll("#rec1531686931, #rec1524903941, #rec1559022031")
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 99999} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 99999} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 99999} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

document.addEventListener("DOMContentLoaded", (e) => {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.insertAdjacentHTML("beforeend", codestyle);
                                    }
                                    ".tn-elem__14523747211760943941674 .tn-atom a, .tn-elem__1452374721176232367535416880 .tn-atom a, .tn-elem__1452374721176232363208669570 .tn-atom a, .tn-elem__1452374721176232364795290710 .tn-atom a, .tn-elem__15204603411760943941674 .tn-atom a, .tn-elem__1520460341176232367535416880 .tn-atom a, .tn-elem__1520460341176232363208669570 .tn-atom a, .tn-elem__1520460341176232364795290710 .tn-atom a"
                                        .replace(/,\s+$/, "")
                                        .split(/,\s+|,/g)
                                        .map((e) =>
                                            /\.tn-atom$/i.test(e) && !document.querySelector(e).getAttribute("href")
                                                ? e + " a"
                                                : e
                                        )
                                        .forEach((e) => {
                                            if (!e) return false;
                                            setTimeout(function () {
                                                document.querySelectorAll(e).forEach((e) => {
                                                    let elem = e.closest(".t396__elem"),
                                                        sbselem = elem
                                                            ? elem.querySelector(".tn-atom__sbs-anim-wrapper")
                                                            : false,
                                                        displayNone =
                                                            elem && getComputedStyle(elem).display === "none"
                                                                ? true
                                                                : false;
                                                    if (elem) {
                                                        elem.classList.add("anx001-effect-link");
                                                        int = setInterval(() => {
                                                            elem.style.height = "";
                                                        }, 500);
                                                        if (0 && elem) {
                                                            elem = elem.querySelector("a")
                                                                ? elem.querySelector("a")
                                                                : elem.querySelector(".tn-atom");
                                                            window.addEventListener("scroll", function () {
                                                                let posnew = window.scrollY > 0 ? window.scrollY : 0;
                                                                if (0 <= posnew) elem.classList.add("color-scroll");
                                                                else elem.classList.remove("color-scroll");
                                                                pos = posnew;
                                                            });
                                                        }
                                                    }
                                                    setTimeout(() => {
                                                        clearInterval(int);
                                                    }, 5e3);
                                                    if (elem && sbselem) {
                                                        annexxAddStyle(
                                                            "001",
                                                            ` ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join(
                                                                    ""
                                                                )} .tn-atom__sbs-anim-wrapper { display: flex${displayNone ? "" : " !important"}; ${(function () {
                                                                let align = getComputedStyle(elem).textAlign;
                                                                switch (align) {
                                                                    case "left":
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                    case "center":
                                                                        return "justify-content: center;";
                                                                        break;
                                                                    case "right":
                                                                        return "justify-content: flex-end;";
                                                                        break;
                                                                    default:
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                }
                                                            })()} align-items: center; width: 100%; height: auto; } ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join("")} { overflow: visible; } `
                                                        );
                                                    } else if (elem && !elem.classList.contains("t-animate")) {
                                                        annexxAddStyle(
                                                            "001",
                                                            ` ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join(
                                                                    ""
                                                                )} { display: flex${displayNone ? "" : " !important"} ${(function () {
                                                                let align = getComputedStyle(elem).textAlign;
                                                                switch (align) {
                                                                    case "left":
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                    case "center":
                                                                        return "justify-content: center;";
                                                                        break;
                                                                    case "right":
                                                                        return "justify-content: flex-end;";
                                                                        break;
                                                                    default:
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                }
                                                            })()} align-items: center; width: 100%; height: auto; overflow: visible; } `
                                                        );
                                                    }
                                                });
                                            }, 200);
                                            annexxAddStyle(
                                                "001",
                                                ` .js-product > a { display: inline !important; } .t898__icon { positon: absolute !important; } ${e}:not(.t396__elem) { position: relative; transition: color 200ms ease, font-weight 200ms ease !important; display: inline-block; width: ${false ? "100%" : "fit-content"}; width: ${false ? "100%" : "fit-content"}; ${/a$/i.test(e) ? "" : "bottom: 2px;"} } ${(function () {
                                                    if ("#") {
                                                        if (/rgb/.test("#")) {
                                                            return ` ${e}:hover { color: # !important; } `;
                                                        } else {
                                                            return ` ${e}:hover { color: #${(function () {
                                                                return "#".replaceAll("#", "");
                                                            })()} !important; } `;
                                                        }
                                                    } else return "";
                                                })()} ${(function () {
                                                    if (0 && "rgba(0, 0, 0, 1)") {
                                                        if (/rgb/.test("rgba(0, 0, 0, 1)")) {
                                                            return ` ${e}.color-scroll:hover { color: rgba(0, 0, 0, 1) !important; } `;
                                                        } else {
                                                            return ` ${e}.color-scroll:hover { color: #${(function () {
                                                                return "rgba(0, 0, 0, 1)".replaceAll("#", "");
                                                            })()} !important; } `;
                                                        }
                                                    } else return "";
                                                })()} ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}::before { transform-origin: 100% 50%; transform: scale3d(0, 1, 1); transition: transform 0.3s; transition: transform 200ms !important; position: absolute; width: 100%; height: 1px; background: currentColor; top: 100%; left: 0; pointer-events: none; content: ''; color: #; } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}.color-scroll::before { color: rgba(0, 0, 0, 1); } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}:hover::before { transform-origin: 0% 50%; transform: scale3d(1, 1, 1); color: #; } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}.color-scroll:hover::before { color: rgba(0, 0, 0, 1); } .t282__menu__item { width: fit-content; width: -moz-fit-content; margin-left: auto; margin-right: auto; } .t280__menu__item { width: fit-content; width: -moz-fit-content; } `
                                            );
                                            if (false) {
                                                annexxAddStyle("001", ` ${e}:hover { font-weight: 400 !important; } `);
                                            }
                                        });
                                });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1524072111");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1524072111");
                        });
                    });;

t_onReady(function () {
                        t_onFuncLoad("t1093__init", function () {
                            t1093__init("1524093261");
                        });
                        t_onFuncLoad("t1093__initPopup", function () {
                            t1093__initPopup("1524093261");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1521078181");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1521078181");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1493454791");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1493454791");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1454143191");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1454143191");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1530772001");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1530772001");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1457990821");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1457990821");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458368161");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458368161");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458705411");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458705411");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1457990821",
                                                stopId: "#rec1492612611",
                                                top1200: 50,
                                                top640_1200: 50,
                                                top640: 40,
                                            },
                                            {
                                                stickyId: "#rec1458368161",
                                                stopId: "#rec1492612611",
                                                top1200: 40,
                                                top640_1200: 100,
                                                top640: 80,
                                            },
                                            {
                                                stickyId: "#rec1458705411",
                                                stopId: "#rec1492612611",
                                                top1200: 20,
                                                top640_1200: 150,
                                                top640: 120,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1492612611");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1492612611");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458725141");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458725141");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498383661");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498383661");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498817301");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498817301");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1503311301");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1503311301");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1503390711");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1503390711");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498759561");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498759561");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1498383661",
                                                stopId: "#rec1499216181",
                                                top1200: 40,
                                                top640_1200: 0,
                                                top640: 40,
                                            },
                                            {
                                                stickyId: "#rec1498817301",
                                                stopId: "#rec1499216181",
                                                top1200: 80,
                                                top640_1200: 0,
                                                top640: 60,
                                            },
                                            {
                                                stickyId: "#rec1503311301",
                                                stopId: "#rec1499216181",
                                                top1200: 120,
                                                top640_1200: 0,
                                                top640: 80,
                                            },
                                            {
                                                stickyId: "#rec1503390711",
                                                stopId: "#rec1499216181",
                                                top1200: 70,
                                                top640_1200: 0,
                                                top640: 100,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499216181");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499216181");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499765491");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499765491");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499768471");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499768471");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1499216181",
                                                stopId: "#rec1499768471",
                                                top1200: 50,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                            {
                                                stickyId: "#rec1458368161",
                                                stopId: "#rec1492612611",
                                                top1200: 40,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                            {
                                                stickyId: "#rec1458705411",
                                                stopId: "#rec1492612611",
                                                top1200: 20,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1559022031");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1559022031");
                        });
                    });;

t_onReady(function () {
                        t_onFuncLoad("t1093__init", function () {
                            t1093__init("1559022331");
                        });
                        t_onFuncLoad("t1093__initPopup", function () {
                            t1093__initPopup("1559022331");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996111");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996111");
                            });
                        });;

(function () {
                                        function annexxAddStyle(numberMod, codestyle) {
                                            let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                            if (!styleBlock) {
                                                document
                                                    .querySelector("head")
                                                    .insertAdjacentHTML(
                                                        "beforeend",
                                                        '<style id="annexxStyle' + numberMod + '"></style>'
                                                    );
                                                styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                            }
                                            let t = (function () {
                                                return !Array.from(styleBlock.childNodes).some(function (e) {
                                                    if (e.textContent === codestyle) {
                                                        return true;
                                                    }
                                                });
                                            })();
                                            if (t) styleBlock.textContent += codestyle;
                                        }
                                        if (0) {
                                            let b = document.querySelector("#t-header");
                                            if (b) b.classList.add("zindex-annexx");
                                            annexxAddStyle(
                                                "819",
                                                ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                            );
                                        }
                                        if (0) {
                                            let b = document.querySelector("#t-footer");
                                            if (b) b.classList.add("zindex-annexx");
                                            annexxAddStyle(
                                                "819",
                                                ` #t-footer { position: relative; z-index: 0 !important; } `
                                            );
                                        }
                                        if ("#rec1502996131" || "") {
                                            document.addEventListener("DOMContentLoaded", function () {
                                                if ("#rec1502996131") {
                                                    document.querySelectorAll("#rec1502996131").forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 400} !important; } `
                                                            );
                                                        }
                                                    });
                                                }
                                                if ("") {
                                                    annexxAddStyle(
                                                        "819",
                                                        ` { z-index: ${false ? "auto" : 1} !important; } `
                                                    );
                                                }
                                                if ("" && false) {
                                                    "".split(/,\s|,/g).forEach((e) => {
                                                        annexxAddStyle(
                                                            "819",
                                                            ` ${e}:hover { z-index: 0 !important; } `
                                                        );
                                                    });
                                                }
                                                if ("" && "") {
                                                    let anElem = document.querySelectorAll("");
                                                    document.querySelectorAll("").forEach((el) => {
                                                        el.addEventListener("mouseenter", (e) => {
                                                            anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                        });
                                                        el.addEventListener("mouseleave", (e) => {
                                                            anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    })();;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996131");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996131");
                            });
                        });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996151");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996151");
                            });
                        });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1503023271");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1503023271");
                            });
                        });;

t_onReady(function () {
                            t_onFuncLoad("t886_init", function () {
                                t886_init("1580320901");
                            });
                        });;

setTimeout(
                                        function () {
                                            function getScript(url) {
                                                return new Promise(function (resolve, reject) {
                                                    if (window.jQuery && /jquery@/.test(url)) resolve();
                                                    else {
                                                        var script = document.createElement("script");
                                                        script.src = url;
                                                        script.async = true;
                                                        script.onload = resolve;
                                                        script.onerror = reject;
                                                        document.head.appendChild(script);
                                                    }
                                                });
                                            }
                                            getScript(
                                                "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/2.2.0/browser/overlayscrollbars.browser.es6.min.js"
                                            ).then(function () {
                                                function annexxAddStyle(numberMod, codestyle) {
                                                    let styleBlock = document.querySelector(
                                                        "head > #annexxStyle" + numberMod
                                                    );
                                                    if (!styleBlock) {
                                                        document
                                                            .querySelector("head")
                                                            .insertAdjacentHTML(
                                                                "beforeend",
                                                                '<style id="annexxStyle' + numberMod + '"></style>'
                                                            );
                                                        styleBlock = document.querySelector(
                                                            "head > #annexxStyle" + numberMod
                                                        );
                                                    }
                                                    let t = (function () {
                                                        return !Array.from(styleBlock.childNodes).some(function (e) {
                                                            if (e.textContent === codestyle) {
                                                                return true;
                                                            }
                                                        });
                                                    })();
                                                    if (t) styleBlock.textContent += codestyle;
                                                }
                                                let isMobile = (function () {
                                                    let ua = navigator.userAgent;
                                                    if (
                                                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                            ua
                                                        ) ||
                                                        (!/windows/i.test(ua) &&
                                                            /safari/i.test(ua) &&
                                                            navigator.maxTouchPoints > 1)
                                                    )
                                                        return true;
                                                    else return false;
                                                })();
                                                if (!isMobile) {
                                                    let {
                                                        OverlayScrollbars,
                                                        ScrollbarsHidingPlugin,
                                                        SizeObserverPlugin,
                                                        ClickScrollPlugin,
                                                    } = OverlayScrollbarsGlobal;
                                                    OverlayScrollbars.plugin(ClickScrollPlugin);
                                                    window.sb = OverlayScrollbars(document.body, {
                                                        scrollbars: {
                                                            autoHide: false ? "scroll" : "never",
                                                            clickScroll: true,
                                                        },
                                                    });
                                                    if (!document.querySelector('.r[data-record-type="270"]')) {
                                                        let hash = window.location.hash.slice(1);
                                                        if (!hash) return;
                                                        let target = document.querySelector(`a[name="${hash}"]`);
                                                        if (!target) return;
                                                        let y = target.getBoundingClientRect().top + window.pageYOffset;
                                                        window.scrollTo({ top: y, behavior: "auto" });
                                                    }
                                                    let imageWidth = 40;
                                                    annexxAddStyle(
                                                        "805-1",
                                                        ` .os-scrollbar.os-theme-dark { --os-size: 12px; --os-handle-min-size: 45px; --os-handle-border-radius: 8px; --os-track-bg: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-track-bg-hover: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-track-bg-active: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-handle-bg: linear-gradient(#3b3935 46%, #3b3935 46%); --os-handle-bg-hover: linear-gradient(#b9dd46 100%, #b9dd46 100%); --os-handle-bg-active: linear-gradient(#b9dd46 100%, #b9dd46 100%); ${(function () {
                                                            return false ? "mix-blend-mode: difference;" : "";
                                                        })()} } .os-scrollbar.os-theme-dark .os-scrollbar-handle { -webkit-box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 1) !important; } .os-scrollbar .os-scrollbar-track { transition: opacity .15s,background-color .15s,border-color .15s, left .2s linear !important; } .os-scrollbar-track { left: 0px; } .os-scrollbar-handle::before { padding-right: ${Math.abs(0) * 2.5}px; } .os-scrollbar-track::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding-right: ${Math.abs(0) * 2.5}px; pointer-events: all; } ${"" ? ` .os-scrollbar-handle { position: relative; } .os-scrollbar-handle::after { content: ''; pointer-events: none; position: fixed; left: calc(var(--os-size) - 40px); top: 0; width: 40px; height: 100%; background-image: url(''); background-size: contain; background-repeat: no-repeat; background-position: center; transform: translateY(calc(var(--os-handle-position) * (100% - 40px * (1 / var(--image-aspect-ratio))))); } ` : ""} .os-scrollbar-track:hover { left: 0px; } html[data-overlayscrollbars]>body.t-body_popupshowed, html[data-overlayscrollbars]>body.t-zoomer__show { overflow: visible !important; } .t-popup { scrollbar-width: none; -ms-overflow-style: none; } .t-popup::-webkit-scrollbar { display: none; } `
                                                    );
                                                    if (false) window.dispatchEvent(new CustomEvent("resize"));
                                                    document.addEventListener("click", function () {
                                                        setTimeout(function () {
                                                            if (document.body.classList.contains("t-body_popupshowed"))
                                                                document.documentElement.style.overflowY = "hidden";
                                                            else document.documentElement.style.overflowY = "";
                                                        }, 200);
                                                    });
                                                }
                                            });
                                        },
                                        false ? 1000 : 0
                                    );;

setTimeout(function () {
                (function (m, e, t, r, i, k, a) {
                    m[i] =
                        m[i] ||
                        function () {
                            (m[i].a = m[i].a || []).push(arguments);
                        };
                    m[i].l = 1 * new Date();
                    (k = e.createElement(t)),
                        (a = e.getElementsByTagName(t)[0]),
                        (k.async = 1),
                        (k.src = r),
                        a.parentNode.insertBefore(k, a);
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                window.mainMetrikaId = "95716206";
                ym(window.mainMetrikaId, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    params: { __ym: { ymCms: { cms: "tilda", cmsVersion: "1.0", cmsCatalog: "1" } } },
                    ecommerce: "dataLayer",
                });
            }, 2000);;

if (!window.mainTracker) {
                window.mainTracker = "tilda";
            }
            setTimeout(function () {
                (function (d, w, k, o, g) {
                    var n = d.getElementsByTagName(o)[0],
                        s = d.createElement(o),
                        f = function () {
                            n.parentNode.insertBefore(s, n);
                        };
                    s.type = "text/javascript";
                    s.async = true;
                    s.key = k;
                    s.id = "tildastatscript";
                    s.src = g;
                    if (w.opera == "[object Opera]") {
                        d.addEventListener("DOMContentLoaded", f, false);
                    } else {
                        f();
                    }
                })(document, window, "300936b189a779d11644737d40c5c9ab", "script", "js/tilda-stat-1.0.min.js");
            }, 2000);;


/* === Скрипты, перенесенные из index.html === */

function t_onReady(func) {
                if (document.readyState != "loading") {
                    func();
                } else {
                    document.addEventListener("DOMContentLoaded", func);
                }
            }
            function t_onFuncLoad(funcName, okFunc, time) {
                if (typeof window[funcName] === "function") {
                    okFunc();
                } else {
                    setTimeout(function () {
                        t_onFuncLoad(funcName, okFunc, time);
                    }, time || 100);
                }
            }
            function t396_initialScale(t) {
                var e = document.getElementById("rec" + t);
                if (e) {
                    var i = e.querySelector(".t396__artboard");
                    if (i) {
                        window.tn_scale_initial_window_width ||
                            (window.tn_scale_initial_window_width = document.documentElement.clientWidth);
                        var a = window.tn_scale_initial_window_width,
                            r = [],
                            n,
                            l = i.getAttribute("data-artboard-screens");
                        if (l) {
                            l = l.split(",");
                            for (var o = 0; o < l.length; o++) r[o] = parseInt(l[o], 10);
                        } else r = [320, 480, 640, 960, 1200];
                        for (var o = 0; o < r.length; o++) {
                            var d = r[o];
                            a >= d && (n = d);
                        }
                        var _ = "edit" === window.allrecords.getAttribute("data-tilda-mode"),
                            c = "center" === t396_getFieldValue(i, "valign", n, r),
                            s = "grid" === t396_getFieldValue(i, "upscale", n, r),
                            w = t396_getFieldValue(i, "height_vh", n, r),
                            g = t396_getFieldValue(i, "height", n, r),
                            u =
                                (!!window.opr && !!window.opr.addons) ||
                                !!window.opera ||
                                -1 !== navigator.userAgent.indexOf(" OPR/");
                        if (!_ && c && !s && !w && g && !u) {
                            var h = parseFloat((a / n).toFixed(3)),
                                f = [i, i.querySelector(".t396__carrier"), i.querySelector(".t396__filter")],
                                v = Math.floor(parseInt(g, 10) * h) + "px",
                                p;
                            i.style.setProperty("--initial-scale-height", v);
                            for (var o = 0; o < f.length; o++)
                                f[o].style.setProperty("height", "var(--initial-scale-height)");
                            t396_scaleInitial__getElementsToScale(i).forEach(function (t) {
                                t.style.zoom = h;
                            });
                        }
                    }
                }
            }
            function t396_scaleInitial__getElementsToScale(t) {
                return t
                    ? Array.prototype.slice.call(t.children).filter(function (t) {
                          return t && (t.classList.contains("t396__elem") || t.classList.contains("t396__group"));
                      })
                    : [];
            }
            function t396_getFieldValue(t, e, i, a) {
                var r,
                    n = a[a.length - 1];
                if (
                    !(r =
                        i === n
                            ? t.getAttribute("data-artboard-" + e)
                            : t.getAttribute("data-artboard-" + e + "-res-" + i))
                )
                    for (var l = 0; l < a.length; l++) {
                        var o = a[l];
                        if (
                            !(o <= i) &&
                            (r =
                                o === n
                                    ? t.getAttribute("data-artboard-" + e)
                                    : t.getAttribute("data-artboard-" + e + "-res-" + o))
                        )
                            break;
                    }
                return r;
            }
            (window.TN_SCALE_INITIAL_VER = "1.0"), (window.tn_scale_initial_window_width = null);;

!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "448420000255317");
            fbq("track", "PageView");;

!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
            fbq("init", "448420000255317");
            fbq("track", "PageView");;

(function (m, e, t, r, i, k, a) {
                m[i] =
                    m[i] ||
                    function () {
                        (m[i].a = m[i].a || []).push(arguments);
                    };
                m[i].l = 1 * new Date();
                (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(87142160, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
            });;

window.dataLayer = window.dataLayer || [];;

(function () {
                if (
                    /bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(
                        navigator.userAgent
                    ) === false &&
                    typeof sessionStorage != "undefined" &&
                    sessionStorage.getItem("visited") !== "y" &&
                    document.visibilityState
                ) {
                    var style = document.createElement("style");
                    style.type = "text/css";
                    style.innerHTML =
                        "@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}";
                    document.getElementsByTagName("head")[0].appendChild(style);
                    function t_setvisRecs() {
                        var alr = document.querySelectorAll(".t-records");
                        Array.prototype.forEach.call(alr, function (el) {
                            el.classList.add("t-records_animated");
                        });
                        setTimeout(function () {
                            Array.prototype.forEach.call(alr, function (el) {
                                el.classList.add("t-records_visible");
                            });
                            sessionStorage.setItem("visited", "y");
                        }, 400);
                    }
                    document.addEventListener("DOMContentLoaded", t_setvisRecs);
                }
            })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1531676791");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1531676791");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1531686931");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1531686931");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1524903941");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1524903941");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1520460341");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1520460341");
                        });
                    });;

(function () {
                                    function annexxAddStyle(numberMod, codestyle, idblock) {
                                        let styleBlock = document.querySelector(
                                            "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                        );
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' +
                                                        numberMod +
                                                        (idblock ? idblock : "") +
                                                        '"></style>'
                                                );
                                            styleBlock = document.querySelector(
                                                "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                            );
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    function annexxRemoveStyle(numberMod, idblock) {
                                        let block = document.querySelector(
                                            "head > #annexxStyle" + numberMod + (idblock ? idblock : "")
                                        );
                                        if (block) block.remove();
                                    }
                                    let arrWidth = "0-479,480-639,640-959,960-1199,1200-20000"
                                            .split(/,\s|,/g)
                                            .map((e) => e.split("-").map((e) => +e)),
                                        windowWidth =
                                            /Mobi/i.test(window.navigator.userAgent) && navigator.maxTouchPoints
                                                ? window.outerWidth
                                                : window.innerWidth,
                                        shadow =
                                            "0px 0px 0px 0px rgba(255, 255, 255, 1)" !==
                                            "0px 0px 0px 0px rgba(255, 255, 255, 1)"
                                                ? "0px 0px 0px 0px rgba(255, 255, 255, 1)"
                                                : false,
                                        d = Math.floor(Math.random() * 1e15),
                                        isSafari = (function () {
                                            let ua = navigator.userAgent;
                                            if (/safari/gi.test(ua) && !/chrome/gi.test(ua)) return true;
                                            else return false;
                                        })(),
                                        noUrlShow = "" ? "".replace(/\s+/g, "").split(",") : false,
                                        hr = "href",
                                        hs = "hash",
                                        hp = "pathname",
                                        ho = "origin",
                                        hh = "host";
                                    if (
                                        !(
                                            noUrlShow &&
                                            (noUrlShow.some((e) => e === location[hr]) ||
                                                noUrlShow
                                                    .map((e) => e.replace(/http\w*\:\/+|#.+/gi, ""))
                                                    .some((e) => e === location[hh] + location[hp]))
                                        ) &&
                                        "#rec1520460341" &&
                                        arrWidth.some((e) =>
                                            e[0] <= windowWidth && windowWidth <= e[1] ? true : false
                                        )
                                    ) {
                                        annexxAddStyle("016", ` #t-header { position: relative; } `);
                                        if ("fixed" === "fixed") {
                                            annexxAddStyle("016", ` #rec1520460341 { display: none; } `, d + "hide");
                                        }
                                        annexxAddStyle(
                                            "016",
                                            ` #rec1520460341 { -webkit-transition: -webkit-transform 0s linear 0s !important; transition: transform 0s linear 0s !important; } `,
                                            d + "notrans"
                                        );
                                        if (0) {
                                            if (false) {
                                                annexxAddStyle(
                                                    "016",
                                                    ` #rec1520460341 { padding-bottom: 0px !important; } `
                                                );
                                            } else {
                                                annexxAddStyle(
                                                    "016",
                                                    ` #rec1520460341 { padding-top: 0px !important; } `
                                                );
                                            }
                                        }
                                        setTimeout(function () {
                                            annexxRemoveStyle("016", d + "notrans");
                                        }, 200);
                                        if ("fixed" === "fixed" && (0 || "")) {
                                            annexxAddStyle(
                                                "016",
                                                ` #rec1520460341 { background-color: transparent !important; } ${(function () {
                                                    return "#rec1520460341"
                                                        .split(/,\s|,/g)
                                                        .map((e) => e + " .t396__artboard")
                                                        .join(",");
                                                })()} { background-color: transparent !important; } `,
                                                d + "bg"
                                            );
                                        }
                                        document.addEventListener("DOMContentLoaded", function () {
                                            let block = document.querySelectorAll("#rec1520460341");
                                            block.forEach((block) => {
                                                let zero = block.querySelector(".t396__artboard") ? true : false,
                                                    pn;
                                                if (zero) block.style.pointerEvents = "none";
                                                if (
                                                    (block.querySelector(".t396__artboard") &&
                                                        getComputedStyle(block.querySelector(".t396__artboard"))
                                                            .backgroundColor === "rgba(0, 0, 0, 0)") ||
                                                    ("fixed" === "fixed" && (0 || ""))
                                                ) {
                                                    let int = setInterval(function () {
                                                        if (document.body.style.pointerEvents !== "none") {
                                                            clearInterval(int);
                                                            setTimeout(() => {
                                                                if (zero) block.style.pointerEvents = "";
                                                                let t = [];
                                                                block.querySelectorAll(".t396__elem").forEach((e) => {
                                                                    if (getComputedStyle(e).pointerEvents !== "none")
                                                                        t.push(
                                                                            `#${block.id} .${Array.from(e.classList).find((el) => /tn\-elem__/.test(el))}`
                                                                        );
                                                                });
                                                                if (t.length)
                                                                    annexxAddStyle(
                                                                        "016",
                                                                        `${t.join(",")} {pointer-events: all;}`,
                                                                        "pe" + d
                                                                    );
                                                                if (zero) block.style.pointerEvents = "none";
                                                                pn = true;
                                                            }, 1e3);
                                                        }
                                                    }, 500);
                                                } else if (zero) block.style.pointerEvents = "";
                                                switch ("fixed") {
                                                    case "overlay":
                                                        annexxAddStyle(
                                                            "016",
                                                            ` #${block.id} { position: absolute !important; width: 100%; z-index: 9999 !important; ${(function () {
                                                                if (shadow)
                                                                    return "box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);";
                                                                else return "";
                                                            })()} } .t-body_popupshowed #${block.id} { z-index: -1 !important; } `
                                                        );
                                                        break;
                                                    case "fixed":
                                                        function addStyle() {
                                                            let top = false ? 100 : -100;
                                                            annexxAddStyle(
                                                                "016",
                                                                ` #${block.id}.fixed-zero${d} { -webkit-transform: translateY(${top}%); transform: translateY(${top}%); -webkit-transition: -webkit-transform 200ms linear 0s ${(function () {
                                                                    if (shadow) {
                                                                        return ", box-shadow 200ms linear 0s";
                                                                    } else return "";
                                                                })()} ${(function () {
                                                                    if (0 || "") {
                                                                        return ", background-color calc(200ms - 100ms) linear";
                                                                    } else return "";
                                                                })()}; transition: transform 200ms linear 0s ${(function () {
                                                                    if (shadow) {
                                                                        return ", box-shadow 200ms linear 0s";
                                                                    } else return "";
                                                                })()} ${(function () {
                                                                    if (0 || "") {
                                                                        return ", background-color calc(200ms - 100ms) linear";
                                                                    } else return "";
                                                                })()}; ${(function () {
                                                                    if (shadow) {
                                                                        return "box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);";
                                                                    } else return "";
                                                                })()} } #${block.id}.fixed-zero${d} .t396__artboard { -webkit-transition: background-color 200ms linear; transition: background-color 200ms linear; } #${block.id}.fixed-zero${d}.show-fixed-zero { -webkit-transform: translateY(0); transform: translateY(0); ${(function () {
                                                                    if (shadow) {
                                                                        return "box-shadow: " + shadow + ";";
                                                                    } else return "";
                                                                })()} } #${block.id} .tmenu-mobile_positionfixed { position: unset !important; } `
                                                            );
                                                            if (block) block.classList.add(`fixed-zero${d}`);
                                                        }
                                                        annexxAddStyle(
                                                            "016",
                                                            ` #${block.id} { position: fixed !important; ${(function () {
                                                                return false
                                                                    ? `bottom: 0px !important;`
                                                                    : "top: 0 !important;";
                                                            })()} width: 100%; height: fit-content; z-index: 9999 !important; } .t-body_popupshowed #${block.id} { z-index: -1 !important; } `
                                                        );
                                                        if (0 || "") {
                                                            annexxRemoveStyle("016", d + "bg");
                                                            setTimeout(() => {
                                                                let bgScrollThreshold = 0,
                                                                    bgBlockSelector = "";
                                                                if (bgBlockSelector) {
                                                                    let bgTriggerBlock =
                                                                        document.querySelector(bgBlockSelector);
                                                                    if (bgTriggerBlock) {
                                                                        bgScrollThreshold = bgTriggerBlock.offsetTop;
                                                                    }
                                                                }
                                                                let artboard = zero
                                                                        ? block.querySelector(".t396__artboard")
                                                                        : block,
                                                                    elem = block.querySelectorAll(".t396__elem"),
                                                                    bgcolor =
                                                                        getComputedStyle(artboard).backgroundColor;
                                                                if (block.querySelector(".t396__artboard"))
                                                                    block.style = "rgba(0, 0, 0, 0)";
                                                                function showBG() {
                                                                    if (pageYOffset >= bgScrollThreshold) {
                                                                        if (zero) block.style.pointerEvents = "";
                                                                        artboard.style.backgroundColor = bgcolor;
                                                                    } else {
                                                                        if (zero && pn)
                                                                            block.style.pointerEvents = "none";
                                                                        artboard.style.backgroundColor = "transparent";
                                                                    }
                                                                }
                                                                showBG();
                                                                window.addEventListener("scroll", showBG);
                                                            }, 100);
                                                        }
                                                        let inEnd = false;
                                                        if ((0 || "") && !true) {
                                                            let int = setInterval(function () {
                                                                if (window.tn_scale_factor) {
                                                                    clearInterval(int);
                                                                    addStyle();
                                                                    let opacityready = false;
                                                                    inEnd = true;
                                                                    let scrollThreshold =
                                                                            0 && false ? 0 * window.tn_scale_factor : 0,
                                                                        scrollBlockSelector = "";
                                                                    if (scrollBlockSelector) {
                                                                        let triggerBlock =
                                                                            document.querySelector(scrollBlockSelector);
                                                                        if (triggerBlock) {
                                                                            scrollThreshold = triggerBlock.offsetTop;
                                                                        }
                                                                    }
                                                                    let hideScrollThreshold =
                                                                            0 && false ? 0 * window.tn_scale_factor : 0,
                                                                        hideScrollBlockSelector = "";
                                                                    if (hideScrollBlockSelector) {
                                                                        let hideTriggerBlock =
                                                                            document.querySelector(
                                                                                hideScrollBlockSelector
                                                                            );
                                                                        if (hideTriggerBlock) {
                                                                            setTimeout(() => {
                                                                                hideScrollThreshold =
                                                                                    hideTriggerBlock.offsetTop;
                                                                            }, 1e3);
                                                                        }
                                                                    }
                                                                    window.addEventListener("scroll", function (e) {
                                                                        if (
                                                                            false &&
                                                                            window.innerHeight +
                                                                                window.pageYOffset +
                                                                                30 >=
                                                                                Math.max(
                                                                                    document.documentElement
                                                                                        .scrollHeight,
                                                                                    document.documentElement
                                                                                        .offsetHeight,
                                                                                    document.documentElement
                                                                                        .clientHeight
                                                                                )
                                                                        )
                                                                            block.classList.remove("show-fixed-zero");
                                                                        else if (
                                                                            window.pageYOffset >= scrollThreshold &&
                                                                            (hideScrollThreshold
                                                                                ? window.pageYOffset <=
                                                                                  hideScrollThreshold
                                                                                : true)
                                                                        ) {
                                                                            if (!opacityready) {
                                                                                opacityready = true;
                                                                            }
                                                                            block.classList.add("show-fixed-zero");
                                                                        } else
                                                                            block.classList.remove("show-fixed-zero");
                                                                    });
                                                                }
                                                            }, 200);
                                                        } else if (true) {
                                                            let int = setInterval(function () {
                                                                if (window.tn_scale_factor) {
                                                                    clearInterval(int);
                                                                    let scrF = function (e) {
                                                                        if (
                                                                            window.pageYOffset >=
                                                                            (function () {
                                                                                let scrollThreshold =
                                                                                        0 && false
                                                                                            ? 0 * window.tn_scale_factor
                                                                                            : 0,
                                                                                    scrollBlockSelector = "";
                                                                                if (scrollBlockSelector) {
                                                                                    let triggerBlock =
                                                                                        document.querySelector(
                                                                                            scrollBlockSelector
                                                                                        );
                                                                                    if (triggerBlock) {
                                                                                        setTimeout(() => {
                                                                                            scrollThreshold =
                                                                                                triggerBlock.offsetTop;
                                                                                        }, 1e3);
                                                                                    }
                                                                                }
                                                                                return scrollThreshold;
                                                                            })()
                                                                        ) {
                                                                            window.removeEventListener("scroll", scrF);
                                                                        }
                                                                    };
                                                                    window.addEventListener("scroll", scrF);
                                                                }
                                                            }, 200);
                                                        } else if (shadow) {
                                                            annexxAddStyle(
                                                                "016",
                                                                ` #${block.id} { box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1); } `
                                                            );
                                                        }
                                                        if (true) {
                                                            block.style.transitionDuration = "0ms";
                                                            setTimeout(() => {
                                                                block.style.transitionDuration = "";
                                                            }, 400);
                                                            addStyle();
                                                            let opacityready = false,
                                                                pos = window.scrollY > 0 ? window.scrollY : 0;
                                                            if (!opacityready) {
                                                                opacityready = true;
                                                            }
                                                            let reverseScrollThreshold = 1200,
                                                                reverseBlockSelector = "";
                                                            if (reverseBlockSelector) {
                                                                let reverseTriggerBlock =
                                                                    document.querySelector(reverseBlockSelector);
                                                                if (reverseTriggerBlock) {
                                                                    setTimeout(() => {
                                                                        reverseScrollThreshold =
                                                                            reverseTriggerBlock.offsetTop;
                                                                    }, 1e3);
                                                                }
                                                            }
                                                            if (!pos && !reverseScrollThreshold)
                                                                block.classList.add("show-fixed-zero");
                                                            window.addEventListener("scroll", function (e) {
                                                                let posnew = window.scrollY > 0 ? window.scrollY : 0,
                                                                    isScrollingUp = posnew <= pos;
                                                                if (isScrollingUp && posnew >= reverseScrollThreshold) {
                                                                    block.classList.add("show-fixed-zero");
                                                                } else {
                                                                    block.classList.remove("show-fixed-zero");
                                                                }
                                                                pos = posnew;
                                                            });
                                                        }
                                                        if (!inEnd && false && !true) {
                                                            addStyle();
                                                            window.addEventListener("scroll", function (e) {
                                                                let s = window.innerHeight + window.pageYOffset;
                                                                if (isSafari && s - 10 === document.body.offsetHeight)
                                                                    block.classList.add("show-fixed-zero");
                                                                else if (s + 30 >= document.body.offsetHeight)
                                                                    block.classList.remove("show-fixed-zero");
                                                                else block.classList.add("show-fixed-zero");
                                                            });
                                                            if (!(0 || "") && !window.pageYOffset)
                                                                block.classList.add("show-fixed-zero");
                                                        }
                                                        break;
                                                }
                                                if ("") {
                                                    document.querySelectorAll("").forEach((e) => {
                                                        e.addEventListener("click", () => {
                                                            block.classList.remove("show-fixed-zero");
                                                            setTimeout(() => {
                                                                block.remove();
                                                            }, 400);
                                                        });
                                                    });
                                                    annexxAddStyle("016", ` { cursor: pointer; } `);
                                                }
                                            });
                                            annexxRemoveStyle("016", d + "hide");
                                            if (0 || "") {
                                                let shape = ""
                                                        ? document.querySelectorAll(
                                                              ""
                                                                  .split(/,\s|,/g)
                                                                  .map((e) => e + " .tn-atom")
                                                                  .join(",")
                                                          )
                                                        : false,
                                                    text = ""
                                                        ? document.querySelectorAll(
                                                              ""
                                                                  .split(/,\s|,/g)
                                                                  .map((e) => e + " .tn-atom")
                                                                  .join(",")
                                                          )
                                                        : false;
                                                if (shape) {
                                                    annexxAddStyle(
                                                        "016",
                                                        ` ${""
                                                            .split(/,\s|,/g)
                                                            .map((e) => e + " .tn-atom")
                                                            .join(",")} { transition: background-color 300ms linear; } `
                                                    );
                                                }
                                                if (text) {
                                                    annexxAddStyle(
                                                        "016",
                                                        ` ${""
                                                            .split(/,\s|,/g)
                                                            .map((e) => e + " .tn-atom")
                                                            .join(",")} { transition: color 300ms linear; } `
                                                    );
                                                }
                                                let triggerPosition,
                                                    triggerBlock = "" ? document.querySelector("") : null;
                                                if (triggerBlock) {
                                                    triggerPosition = triggerBlock.offsetTop;
                                                } else {
                                                    triggerPosition = 0;
                                                }
                                                if (triggerPosition > 0) {
                                                    window.addEventListener("scroll", function (e) {
                                                        let posnew = window.pageYOffset,
                                                            pos = 0;
                                                        if (triggerPosition <= posnew) {
                                                            if (shape) {
                                                                shape.forEach(
                                                                    (e) =>
                                                                        (e.style.backgroundColor = "rgba(0, 0, 0, 1)")
                                                                );
                                                            }
                                                            if (text) {
                                                                text.forEach(
                                                                    (e) => (e.style.color = "rgba(0, 0, 0, 1)")
                                                                );
                                                            }
                                                        } else {
                                                            if (shape) {
                                                                shape.forEach((e) => (e.style.backgroundColor = ""));
                                                            }
                                                            if (text) {
                                                                text.forEach((e) => (e.style.color = ""));
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    if (!window.nlm068obj) {
                                        window.nlm068obj = { openSide: "" };
                                    }
                                    if (!window.nlmFixedZeroBlocksObj068) {
                                        window.nlmFixedZeroBlocksObj068 = { top: "", bottom: "", list: [] };
                                    }
                                    function t_ready(t) {
                                        "loading" != document.readyState
                                            ? t()
                                            : document.addEventListener
                                              ? document.addEventListener("DOMContentLoaded", t)
                                              : document.attachEvent("onreadystatechange", function () {
                                                    "loading" != document.readyState && t();
                                                });
                                    }
                                    t_ready(function () {
                                        let backgroundElem = document.querySelector(".nlm_dark-background486829256");
                                        if (backgroundElem) {
                                            backgroundElem.style.display = "none";
                                        }
                                        let nlm068ForDeleteStyleTag = document.querySelector("#nlm068fordelete");
                                        if (nlm068ForDeleteStyleTag) {
                                            nlm068ForDeleteStyleTag.remove();
                                        }
                                        let menuState = "static";
                                        if (
                                            window.nlm009obj &&
                                            window.nlm009obj.list.includes(
                                                "#" + document.querySelector(".menuNolim068").closest(".t-rec").id
                                            )
                                        ) {
                                            menuState = "nolimFixMenu";
                                        }
                                        let block = $(".menuNolim068").parents(".t-rec");
                                        let blockStyle = window.getComputedStyle(block[0]);
                                        const blockWithMenu = document.querySelector("#rec1531676791 .t396__artboard");
                                        if (
                                            !block[0].classList.contains("nlm009fixmenu") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .hasAttribute("data-artboard-pos") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .getAttribute("data-artboard-pos") == "fixed"
                                        ) {
                                            menuState = "zeroFixMenu";
                                            window.nlmFixedZeroBlocksObj068.list.push("#" + block[0].id);
                                            if (
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .hasAttribute("data-artboard-fixed-pos") &&
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .getAttribute("data-artboard-fixed-pos") == "bottom"
                                            ) {
                                                window.nlmFixedZeroBlocksObj068.bottom = block[0].id;
                                            } else {
                                                window.nlmFixedZeroBlocksObj068.top = block[0].id;
                                            }
                                        } else {
                                            if (getComputedStyle(blockWithMenu).position == "absolute") {
                                                block[0].querySelector(".t396__artboard").style.position = "absolute";
                                            } else {
                                                block[0].querySelector(".t396__artboard").style.position = "relative";
                                            }
                                            if ("999") {
                                                block[0].querySelector(".t396__artboard").style.zIndex = "999";
                                            }
                                        }
                                        let ii;
                                        let mynewstyle = "<style>";
                                        let menus = "";
                                        blockWithMenu.style.zIndex = 999 + 1;
                                        var itemsWoRec = [];
                                        let mainTarget;
                                        let count = 0;
                                        $(".menuNolim068").each(function (i, item) {
                                            let hr = $(item).find("[href]").attr("href");
                                            if (
                                                typeof hr != "undefined" &&
                                                (hr.startsWith("#rec") || hr.startsWith("/#rec"))
                                            ) {
                                                if (hr.startsWith("/#rec")) {
                                                    hr = hr.substring(1);
                                                }
                                                if ($(hr).length > 0) {
                                                    $(hr).addClass("nlm068secondMenu486829256");
                                                    $(hr).css("zIndex", "999");
                                                    if (false) {
                                                        $(hr).css("opacity", "0");
                                                    }
                                                    $(hr).addClass("nolim_forMenu");
                                                    $(hr).addClass("nolimAutoScaleFix");
                                                    $(item).find("[href]").attr("nolim-data-menuid", hr);
                                                    $(item).find("[href]").attr("href", "#");
                                                    menus += `${hr},`;
                                                    mynewstyle += `${hr},`;
                                                } else {
                                                    $(item).removeClass("menuNolim068");
                                                }
                                            } else if (typeof hr != "undefined") {
                                                itemsWoRec.push($(item));
                                            }
                                        });
                                        var secondLevelId = [];
                                        document.querySelectorAll("[nolim-data-menuid]").forEach(function (item) {
                                            secondLevelId.push(item.getAttribute("nolim-data-menuid").replace("#", ""));
                                        });
                                        menus = menus.substring(0, menus.length - 1);
                                        mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1);
                                        mynewstyle += ` { width: 100%; }`;
                                        mynewstyle += `</style>`;
                                        $("body").after(mynewstyle);
                                        let sI = setInterval(function () {
                                            if ($(".menuNolim068 .tn-atom").length > 0) {
                                                clearInterval(sI);
                                                let menu2 = menus;
                                                let href = $(".menuNolim068 a[nolim-data-menuid]");
                                                let idM = $(".menuNolim068 .tn-atom").parents(".t-rec");
                                                let idPos = $(".menuNolim068 .tn-atom")
                                                    .parents(".t-rec")
                                                    .css("position");
                                                if (menuState == "zeroFixMenu") {
                                                    idPos = $(".menuNolim068 .tn-atom")
                                                        .parents(".t396__artboard")
                                                        .css("position");
                                                }
                                                function checkHeight(target) {
                                                    let extraMargin;
                                                    function setExtraMargin() {
                                                        let windowWidth = document.documentElement.clientWidth;
                                                        if (windowWidth > 1200) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 960 && windowWidth < 1201) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 640 && windowWidth < 961) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 480 && windowWidth < 641) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth < 481) {
                                                            extraMargin = 0;
                                                        }
                                                    }
                                                    setExtraMargin();
                                                    let idH;
                                                    if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.top &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.top &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH = target
                                                                .closest(".t396__artboard")
                                                                .getBoundingClientRect().bottom;
                                                        }
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    } else if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.bottom &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.bottom &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("top", "");
                                                        idH =
                                                            window.innerHeight -
                                                            target.closest(".t-rec").getBoundingClientRect().top;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH =
                                                                window.innerHeight -
                                                                target
                                                                    .closest(".t396__artboard")
                                                                    .getBoundingClientRect().top;
                                                        }
                                                        ii = "bottom";
                                                        window.nlm068obj.openSide = "bottom";
                                                    } else {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    }
                                                    if (idPos == "fixed") {
                                                        $(menu2).css("position", "fixed");
                                                        $(menu2).css(ii, idH + extraMargin + "px");
                                                    } else if (idPos == "static" || idPos == "absolute") {
                                                        $(menu2).css("position", "absolute");
                                                        $(menu2).css(ii, window.pageYOffset + idH + extraMargin + "px");
                                                    }
                                                }
                                                function forAutoscaleMode(blockId, block) {
                                                    typeof t_slds_updateSlider != "undefined" &&
                                                        t_slds_updateSlider(blockId);
                                                    if (block && block.querySelector(".t396")) {
                                                        t396_doResize(blockId);
                                                    }
                                                    if (
                                                        window.CustomEvent &&
                                                        typeof window.CustomEvent === "function"
                                                    ) {
                                                        var myCustomEvent = new CustomEvent("displayChanged");
                                                    } else {
                                                        var myCustomEvent = document.createEvent("CustomEvent");
                                                        myCustomEvent.initCustomEvent("displayChanged", true, true);
                                                    }
                                                    block.dispatchEvent(myCustomEvent);
                                                    if ("y" === window.lazy) {
                                                        t_lazyload_update();
                                                    }
                                                }
                                                function firstBlocksCall() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "block");
                                                        forAutoscaleMode(idRep, x);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "none");
                                                        $(x).css("opacity", "1");
                                                    });
                                                }
                                                function resizeFunction() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        if (window.innerWidth > 640) {
                                                            forAutoscaleMode(idRep, x);
                                                        }
                                                    });
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background486829256"
                                                    );
                                                    backgroundElem.style.display = "none";
                                                }
                                                setTimeout(function () {
                                                    $(".nolimSearch .tn-atom").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).fadeOut(300);
                                                    });
                                                    firstBlocksCall();
                                                    let blocksFromSecondMenu =
                                                        document.querySelectorAll("#rec1531686931");
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background486829256"
                                                    );
                                                    function setNlmDarkBackgroundDisplay(value) {
                                                        backgroundElem.style.display = value;
                                                    }
                                                    const observer = new MutationObserver(function (mutationsList) {
                                                        for (let mutation of mutationsList) {
                                                            if (
                                                                mutation.type === "attributes" &&
                                                                mutation.attributeName === "style"
                                                            ) {
                                                                let displayValue = mutation.target.style.display;
                                                                if (displayValue === "none" || !displayValue) {
                                                                    setNlmDarkBackgroundDisplay("none");
                                                                } else {
                                                                    setNlmDarkBackgroundDisplay("block");
                                                                }
                                                            }
                                                        }
                                                    });
                                                    blocksFromSecondMenu.forEach((elem) => {
                                                        observer.observe(elem, {
                                                            attributes: true,
                                                            attributeFilter: ["style"],
                                                        });
                                                    });
                                                    if (1) {
                                                        const hideMenuOnScroll = () => {
                                                            $(menu2).fadeOut(300);
                                                        };
                                                        window.removeEventListener("scroll", hideMenuOnScroll);
                                                        window.addEventListener("scroll", hideMenuOnScroll);
                                                    }
                                                    href.off("click").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).removeClass("nolimAutoScaleFix");
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).fadeOut(300);
                                                            firstBlocksCall();
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                                $(id).css("display", "block");
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu486829256")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            if (true) {
                                                                filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                    value.style.display = "none";
                                                                });
                                                            }
                                                        } else {
                                                            $(id).fadeOut(300, function () {
                                                                $(id).css("overflow", "hidden");
                                                            });
                                                        }
                                                    });
                                                    $(".nlm_dark-background486829256")
                                                        .off("click")
                                                        .on("click", function (e) {
                                                            e.preventDefault();
                                                            $(".nlm068secondMenu486829256").css("display", "none");
                                                        });
                                                }, 300);
                                                href.mouseover(function (e) {
                                                    e.preventDefault();
                                                    let windowWidth = document.documentElement.clientWidth;
                                                    if (windowWidth > 1200) {
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).removeClass("nolimAutoScaleFix");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu486829256")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                value.style.display = "none";
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            $(menu2).fadeOut(300);
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).css("overflow", "visible");
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                            });
                                                            $(id).css("display", "block");
                                                        }
                                                    }
                                                });
                                                itemsWoRec.forEach(function (item) {
                                                    item.mouseover(function (e) {
                                                        e.preventDefault();
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    });
                                                });
                                                window.addEventListener("click", function (e) {
                                                    if (
                                                        e.target.closest(".r") &&
                                                        secondLevelId.includes(
                                                            e.target.closest(".r").getAttribute("id")
                                                        ) &&
                                                        e.target.hasAttribute("href") &&
                                                        e.target.getAttribute("href").startsWith("#")
                                                    ) {
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    }
                                                });
                                                window.addEventListener("resize", function () {
                                                    resizeFunction();
                                                });
                                                function isSecondMenuOnHover(e) {
                                                    $(document).off("pointermove mousemove", isSecondMenuOnHover);
                                                    $(document).off("pointermove mousemove", closeMenu);
                                                    $(document).on("pointermove mousemove", closeMenu);
                                                }
                                                function closeMenu(e) {
                                                    if (
                                                        ($(menu2).has(e.target).length === 0 &&
                                                            $(idM).has(e.target).length === 0 &&
                                                            !$(menu2).is(e.target)) ||
                                                        $(".menuNolimClose068:hover").length > 0
                                                    ) {
                                                        $(menu2).fadeOut(300);
                                                        window.nlm068obj.openSide = "";
                                                        $(document).off("pointermove mousemove", closeMenu);
                                                        $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                    }
                                                }
                                                if (true) {
                                                    let hideMenuButtons = document.querySelectorAll(".hideMenuButton");
                                                    if (hideMenuButtons.length > 0) {
                                                        function forHideMenuButtonEventListener(e) {
                                                            $(menu2).fadeOut(300);
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        hideMenuButtons.forEach((button) => {
                                                            button.removeEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                            button.addEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                        });
                                                    }
                                                }
                                                $(document).on("pointerup mouseup", closeMenu);
                                                $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                function t650t959fix() {
                                                    document
                                                        .querySelectorAll(".nlm068secondMenu486829256")
                                                        .forEach(function (item) {
                                                            if (window.t650_unifyHeights != undefined) {
                                                                t650_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                            if (window.t959_unifyHeights != undefined) {
                                                                t959_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                        });
                                                }
                                                let int1 = setInterval(function () {
                                                    if (window.t650_unifyHeights != undefined) {
                                                        clearInterval(int1);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                let int2 = setInterval(function () {
                                                    if (window.t959_unifyHeights != undefined) {
                                                        clearInterval(int2);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                setTimeout(function () {
                                                    clearInterval(int1);
                                                    clearInterval(int2);
                                                }, 2000);
                                                let int3 = setInterval(function () {
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "none";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-active")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-active")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "auto";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                        let targetNodes = document.querySelectorAll(".nlm068secondMenu486829256");
                                        let config = {
                                            attributes: true,
                                            attributeOldValue: true,
                                            attributeFilter: ["style"],
                                        };
                                        let callback = function (mutationsList) {
                                            let background = document.querySelector(".nlm_dark-background486829256");
                                            if (!background) return;
                                            for (let targetNode of targetNodes) {
                                                if (targetNode.style.display !== "none" && targetNode.style.display) {
                                                    background.style.display = "block";
                                                    background.classList.remove("nolimAutoScaleFix");
                                                    return;
                                                }
                                            }
                                            background.style.display = "none";
                                        };
                                        targetNodes.forEach((targetNode) => {
                                            let observer = new MutationObserver(callback);
                                            observer.observe(targetNode, config);
                                        });
                                    });
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1452374721, #rec1531676791" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1452374721, #rec1531676791") {
                                                document
                                                    .querySelectorAll("#rec1452374721, #rec1531676791")
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 20} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 20} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 20} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (
                                        "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471" ||
                                        ""
                                    ) {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if (
                                                "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471"
                                            ) {
                                                document
                                                    .querySelectorAll(
                                                        "#rec1521078181, #rec1493454791, #rec1454143191, #rec1530772001, #rec1457990821, #rec1498383661, #rec1498817301, #rec1503311301, #rec1503390711, #rec1498759561, #rec1499216181, #rec1499843141, #rec1499765491, #rec1499768471"
                                                    )
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 400} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    if (!window.nlm068obj) {
                                        window.nlm068obj = { openSide: "" };
                                    }
                                    if (!window.nlmFixedZeroBlocksObj068) {
                                        window.nlmFixedZeroBlocksObj068 = { top: "", bottom: "", list: [] };
                                    }
                                    function t_ready(t) {
                                        "loading" != document.readyState
                                            ? t()
                                            : document.addEventListener
                                              ? document.addEventListener("DOMContentLoaded", t)
                                              : document.attachEvent("onreadystatechange", function () {
                                                    "loading" != document.readyState && t();
                                                });
                                    }
                                    t_ready(function () {
                                        let backgroundElem = document.querySelector(".nlm_dark-background804255781");
                                        if (backgroundElem) {
                                            backgroundElem.style.display = "none";
                                        }
                                        let nlm068ForDeleteStyleTag = document.querySelector("#nlm068fordelete");
                                        if (nlm068ForDeleteStyleTag) {
                                            nlm068ForDeleteStyleTag.remove();
                                        }
                                        let menuState = "static";
                                        if (
                                            window.nlm009obj &&
                                            window.nlm009obj.list.includes(
                                                "#" + document.querySelector(".menuNolim068").closest(".t-rec").id
                                            )
                                        ) {
                                            menuState = "nolimFixMenu";
                                        }
                                        let block = $(".menuNolim068").parents(".t-rec");
                                        let blockStyle = window.getComputedStyle(block[0]);
                                        const blockWithMenu = document.querySelector("#rec1520460341 .t396__artboard");
                                        if (
                                            !block[0].classList.contains("nlm009fixmenu") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .hasAttribute("data-artboard-pos") &&
                                            block[0]
                                                .querySelector(".t396__artboard")
                                                .getAttribute("data-artboard-pos") == "fixed"
                                        ) {
                                            menuState = "zeroFixMenu";
                                            window.nlmFixedZeroBlocksObj068.list.push("#" + block[0].id);
                                            if (
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .hasAttribute("data-artboard-fixed-pos") &&
                                                block[0]
                                                    .querySelector(".t396__artboard")
                                                    .getAttribute("data-artboard-fixed-pos") == "bottom"
                                            ) {
                                                window.nlmFixedZeroBlocksObj068.bottom = block[0].id;
                                            } else {
                                                window.nlmFixedZeroBlocksObj068.top = block[0].id;
                                            }
                                        } else {
                                            if (getComputedStyle(blockWithMenu).position == "absolute") {
                                                block[0].querySelector(".t396__artboard").style.position = "absolute";
                                            } else {
                                                block[0].querySelector(".t396__artboard").style.position = "relative";
                                            }
                                            if ("999999") {
                                                block[0].querySelector(".t396__artboard").style.zIndex = "999999";
                                            }
                                        }
                                        let ii;
                                        let mynewstyle = "<style>";
                                        let menus = "";
                                        blockWithMenu.style.zIndex = 999999 + 1;
                                        var itemsWoRec = [];
                                        let mainTarget;
                                        let count = 0;
                                        $(".menuNolim068").each(function (i, item) {
                                            let hr = $(item).find("[href]").attr("href");
                                            if (
                                                typeof hr != "undefined" &&
                                                (hr.startsWith("#rec") || hr.startsWith("/#rec"))
                                            ) {
                                                if (hr.startsWith("/#rec")) {
                                                    hr = hr.substring(1);
                                                }
                                                if ($(hr).length > 0) {
                                                    $(hr).addClass("nlm068secondMenu804255781");
                                                    $(hr).css("zIndex", "999999");
                                                    if (false) {
                                                        $(hr).css("opacity", "0");
                                                    }
                                                    $(hr).addClass("nolim_forMenu");
                                                    $(hr).addClass("nolimAutoScaleFix");
                                                    $(item).find("[href]").attr("nolim-data-menuid", hr);
                                                    $(item).find("[href]").attr("href", "#");
                                                    menus += `${hr},`;
                                                    mynewstyle += `${hr},`;
                                                } else {
                                                    $(item).removeClass("menuNolim068");
                                                }
                                            } else if (typeof hr != "undefined") {
                                                itemsWoRec.push($(item));
                                            }
                                        });
                                        var secondLevelId = [];
                                        document.querySelectorAll("[nolim-data-menuid]").forEach(function (item) {
                                            secondLevelId.push(item.getAttribute("nolim-data-menuid").replace("#", ""));
                                        });
                                        menus = menus.substring(0, menus.length - 1);
                                        mynewstyle = mynewstyle.substring(0, mynewstyle.length - 1);
                                        mynewstyle += ` { width: 100%; }`;
                                        mynewstyle += `</style>`;
                                        $("body").after(mynewstyle);
                                        let sI = setInterval(function () {
                                            if ($(".menuNolim068 .tn-atom").length > 0) {
                                                clearInterval(sI);
                                                let menu2 = menus;
                                                let href = $(".menuNolim068 a[nolim-data-menuid]");
                                                let idM = $(".menuNolim068 .tn-atom").parents(".t-rec");
                                                let idPos = $(".menuNolim068 .tn-atom")
                                                    .parents(".t-rec")
                                                    .css("position");
                                                if (menuState == "zeroFixMenu") {
                                                    idPos = $(".menuNolim068 .tn-atom")
                                                        .parents(".t396__artboard")
                                                        .css("position");
                                                }
                                                function checkHeight(target) {
                                                    let extraMargin;
                                                    function setExtraMargin() {
                                                        let windowWidth = document.documentElement.clientWidth;
                                                        if (windowWidth > 1200) {
                                                            extraMargin = -150;
                                                        } else if (windowWidth > 960 && windowWidth < 1201) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 640 && windowWidth < 961) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth > 480 && windowWidth < 641) {
                                                            extraMargin = 0;
                                                        } else if (windowWidth < 481) {
                                                            extraMargin = 0;
                                                        }
                                                    }
                                                    setExtraMargin();
                                                    let idH;
                                                    if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.top &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.top &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH = target
                                                                .closest(".t396__artboard")
                                                                .getBoundingClientRect().bottom;
                                                        }
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    } else if (
                                                        (window.nlm009obj &&
                                                            target.closest(".t-rec").id == window.nlm009obj.bottom &&
                                                            menuState == "nolimFixMenu") ||
                                                        (window.nlmFixedZeroBlocksObj068 &&
                                                            target.closest(".t-rec").id ==
                                                                window.nlmFixedZeroBlocksObj068.bottom &&
                                                            menuState == "zeroFixMenu")
                                                    ) {
                                                        $(menu2).css("top", "");
                                                        idH =
                                                            window.innerHeight -
                                                            target.closest(".t-rec").getBoundingClientRect().top;
                                                        if (menuState == "zeroFixMenu") {
                                                            idH =
                                                                window.innerHeight -
                                                                target
                                                                    .closest(".t396__artboard")
                                                                    .getBoundingClientRect().top;
                                                        }
                                                        ii = "bottom";
                                                        window.nlm068obj.openSide = "bottom";
                                                    } else {
                                                        $(menu2).css("bottom", "");
                                                        idH = target.closest(".t-rec").getBoundingClientRect().bottom;
                                                        ii = "top";
                                                        window.nlm068obj.openSide = "top";
                                                    }
                                                    if (idPos == "fixed") {
                                                        $(menu2).css("position", "fixed");
                                                        $(menu2).css(ii, idH + extraMargin + "px");
                                                    } else if (idPos == "static" || idPos == "absolute") {
                                                        $(menu2).css("position", "absolute");
                                                        $(menu2).css(ii, window.pageYOffset + idH + extraMargin + "px");
                                                    }
                                                }
                                                function forAutoscaleMode(blockId, block) {
                                                    typeof t_slds_updateSlider != "undefined" &&
                                                        t_slds_updateSlider(blockId);
                                                    if (block && block.querySelector(".t396")) {
                                                        t396_doResize(blockId);
                                                    }
                                                    if (
                                                        window.CustomEvent &&
                                                        typeof window.CustomEvent === "function"
                                                    ) {
                                                        var myCustomEvent = new CustomEvent("displayChanged");
                                                    } else {
                                                        var myCustomEvent = document.createEvent("CustomEvent");
                                                        myCustomEvent.initCustomEvent("displayChanged", true, true);
                                                    }
                                                    block.dispatchEvent(myCustomEvent);
                                                    if ("y" === window.lazy) {
                                                        t_lazyload_update();
                                                    }
                                                }
                                                function firstBlocksCall() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "block");
                                                        forAutoscaleMode(idRep, x);
                                                        $(x).css("overflow", "visible");
                                                        $(x).css("display", "none");
                                                        $(x).css("opacity", "1");
                                                    });
                                                }
                                                function resizeFunction() {
                                                    Array.prototype.forEach.call(href, (element) => {
                                                        let id = $(element).attr("nolim-data-menuid");
                                                        let idRep = id.replace("#rec", "");
                                                        let x = document.querySelector(id);
                                                        if (window.innerWidth > 640) {
                                                            forAutoscaleMode(idRep, x);
                                                        }
                                                    });
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background804255781"
                                                    );
                                                    backgroundElem.style.display = "none";
                                                }
                                                setTimeout(function () {
                                                    $(".nolimSearch .tn-atom").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).fadeOut(300);
                                                    });
                                                    firstBlocksCall();
                                                    let blocksFromSecondMenu =
                                                        document.querySelectorAll("#rec1524903941");
                                                    let backgroundElem = document.querySelector(
                                                        ".nlm_dark-background804255781"
                                                    );
                                                    function setNlmDarkBackgroundDisplay(value) {
                                                        backgroundElem.style.display = value;
                                                    }
                                                    const observer = new MutationObserver(function (mutationsList) {
                                                        for (let mutation of mutationsList) {
                                                            if (
                                                                mutation.type === "attributes" &&
                                                                mutation.attributeName === "style"
                                                            ) {
                                                                let displayValue = mutation.target.style.display;
                                                                if (displayValue === "none" || !displayValue) {
                                                                    setNlmDarkBackgroundDisplay("none");
                                                                } else {
                                                                    setNlmDarkBackgroundDisplay("block");
                                                                }
                                                            }
                                                        }
                                                    });
                                                    blocksFromSecondMenu.forEach((elem) => {
                                                        observer.observe(elem, {
                                                            attributes: true,
                                                            attributeFilter: ["style"],
                                                        });
                                                    });
                                                    if (1) {
                                                        const hideMenuOnScroll = () => {
                                                            $(menu2).fadeOut(300);
                                                        };
                                                        window.removeEventListener("scroll", hideMenuOnScroll);
                                                        window.addEventListener("scroll", hideMenuOnScroll);
                                                    }
                                                    href.off("click").on("click", function (e) {
                                                        e.preventDefault();
                                                        $(menu2).removeClass("nolimAutoScaleFix");
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).fadeOut(300);
                                                            firstBlocksCall();
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                                $(id).css("display", "block");
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu804255781")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            if (true) {
                                                                filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                    value.style.display = "none";
                                                                });
                                                            }
                                                        } else {
                                                            $(id).fadeOut(300, function () {
                                                                $(id).css("overflow", "hidden");
                                                            });
                                                        }
                                                    });
                                                    $(".nlm_dark-background804255781")
                                                        .off("click")
                                                        .on("click", function (e) {
                                                            e.preventDefault();
                                                            $(".nlm068secondMenu804255781").css("display", "none");
                                                        });
                                                }, 300);
                                                href.mouseover(function (e) {
                                                    e.preventDefault();
                                                    let windowWidth = document.documentElement.clientWidth;
                                                    if (windowWidth > 1200) {
                                                        let id = $(e.currentTarget).attr("nolim-data-menuid");
                                                        if (!id.includes("#rec")) {
                                                            $(menu2).fadeOut(300);
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        if ($(id).css("display") == "none") {
                                                            $(menu2).removeClass("nolimAutoScaleFix");
                                                            const nlm068secondMenuBlocks = Array.from(
                                                                document.querySelectorAll(".nlm068secondMenu804255781")
                                                            );
                                                            const filteredNlm068secondMenuBlocks =
                                                                nlm068secondMenuBlocks.filter(
                                                                    (block) => block.id !== id.slice(1)
                                                                );
                                                            filteredNlm068secondMenuBlocks.forEach((value) => {
                                                                value.style.display = "none";
                                                            });
                                                            $(".nolim_forSearch .t838").css("display", "none");
                                                            $(menu2).fadeOut(300);
                                                            checkHeight(e.target);
                                                            mainTarget = e.target;
                                                            $(id).css("overflow", "visible");
                                                            $(id).fadeIn(300, function () {
                                                                $(id).css("overflow", "visible");
                                                            });
                                                            $(id).css("display", "block");
                                                        }
                                                    }
                                                });
                                                itemsWoRec.forEach(function (item) {
                                                    item.mouseover(function (e) {
                                                        e.preventDefault();
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    });
                                                });
                                                window.addEventListener("click", function (e) {
                                                    if (
                                                        e.target.closest(".r") &&
                                                        secondLevelId.includes(
                                                            e.target.closest(".r").getAttribute("id")
                                                        ) &&
                                                        e.target.hasAttribute("href") &&
                                                        e.target.getAttribute("href").startsWith("#")
                                                    ) {
                                                        $(menu2).slideUp(300);
                                                        $(".nolim_forSearch .t838").css("display", "none");
                                                        window.nlm068obj.openSide = "";
                                                    }
                                                });
                                                window.addEventListener("resize", function () {
                                                    resizeFunction();
                                                });
                                                function isSecondMenuOnHover(e) {
                                                    $(document).off("pointermove mousemove", isSecondMenuOnHover);
                                                    $(document).off("pointermove mousemove", closeMenu);
                                                    $(document).on("pointermove mousemove", closeMenu);
                                                }
                                                function closeMenu(e) {
                                                    if (
                                                        ($(menu2).has(e.target).length === 0 &&
                                                            $(idM).has(e.target).length === 0 &&
                                                            !$(menu2).is(e.target)) ||
                                                        $(".menuNolimClose068:hover").length > 0
                                                    ) {
                                                        $(menu2).fadeOut(300);
                                                        window.nlm068obj.openSide = "";
                                                        $(document).off("pointermove mousemove", closeMenu);
                                                        $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                    }
                                                }
                                                if (true) {
                                                    let hideMenuButtons = document.querySelectorAll(".hideMenuButton");
                                                    if (hideMenuButtons.length > 0) {
                                                        function forHideMenuButtonEventListener(e) {
                                                            $(menu2).fadeOut(300);
                                                            window.nlm068obj.openSide = "";
                                                        }
                                                        hideMenuButtons.forEach((button) => {
                                                            button.removeEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                            button.addEventListener(
                                                                "mouseover",
                                                                forHideMenuButtonEventListener
                                                            );
                                                        });
                                                    }
                                                }
                                                $(document).on("pointerup mouseup", closeMenu);
                                                $(document).on("pointermove mousemove", isSecondMenuOnHover);
                                                function t650t959fix() {
                                                    document
                                                        .querySelectorAll(".nlm068secondMenu804255781")
                                                        .forEach(function (item) {
                                                            if (window.t650_unifyHeights != undefined) {
                                                                t650_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                            if (window.t959_unifyHeights != undefined) {
                                                                t959_unifyHeights(item.id.replace("rec", ""));
                                                            }
                                                        });
                                                }
                                                let int1 = setInterval(function () {
                                                    if (window.t650_unifyHeights != undefined) {
                                                        clearInterval(int1);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                let int2 = setInterval(function () {
                                                    if (window.t959_unifyHeights != undefined) {
                                                        clearInterval(int2);
                                                        setTimeout(function () {
                                                            t650t959fix();
                                                        }, 500);
                                                    }
                                                }, 50);
                                                setTimeout(function () {
                                                    clearInterval(int1);
                                                    clearInterval(int2);
                                                }, 2000);
                                                let int3 = setInterval(function () {
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-innactive")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "none";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                    if (
                                                        document.querySelectorAll(".t396__artboard-fixed-active")
                                                            .length > 0
                                                    ) {
                                                        document
                                                            .querySelectorAll(".t396__artboard-fixed-active")
                                                            .forEach(function (item) {
                                                                item.querySelectorAll(".menuNolim068").forEach(
                                                                    function (el) {
                                                                        el.querySelector(
                                                                            ".tn-atom"
                                                                        ).style.pointerEvents = "auto";
                                                                    }
                                                                );
                                                            });
                                                    }
                                                }, 50);
                                            }
                                        }, 50);
                                        let targetNodes = document.querySelectorAll(".nlm068secondMenu804255781");
                                        let config = {
                                            attributes: true,
                                            attributeOldValue: true,
                                            attributeFilter: ["style"],
                                        };
                                        let callback = function (mutationsList) {
                                            let background = document.querySelector(".nlm_dark-background804255781");
                                            if (!background) return;
                                            for (let targetNode of targetNodes) {
                                                if (targetNode.style.display !== "none" && targetNode.style.display) {
                                                    background.style.display = "block";
                                                    background.classList.remove("nolimAutoScaleFix");
                                                    return;
                                                }
                                            }
                                            background.style.display = "none";
                                        };
                                        targetNodes.forEach((targetNode) => {
                                            let observer = new MutationObserver(callback);
                                            observer.observe(targetNode, config);
                                        });
                                    });
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1520460341" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1520460341") {
                                                document.querySelectorAll("#rec1520460341").forEach((e) => {
                                                    e.classList.add("zindex-annexx");
                                                    if (getComputedStyle(e).position === "static") {
                                                        if (e.dataset.recordType === "121") {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 6000} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                            );
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 6000} !important; } `
                                                            );
                                                        }
                                                    } else {
                                                        annexxAddStyle(
                                                            "819",
                                                            ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 6000} !important; } `
                                                        );
                                                    }
                                                });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

(function () {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.textContent += codestyle;
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-header");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if (0) {
                                        let b = document.querySelector("#t-footer");
                                        if (b) b.classList.add("zindex-annexx");
                                        annexxAddStyle(
                                            "819",
                                            ` #t-footer { position: relative; z-index: 0 !important; } `
                                        );
                                    }
                                    if ("#rec1531686931, #rec1524903941, #rec1559022031" || "") {
                                        document.addEventListener("DOMContentLoaded", function () {
                                            if ("#rec1531686931, #rec1524903941, #rec1559022031") {
                                                document
                                                    .querySelectorAll("#rec1531686931, #rec1524903941, #rec1559022031")
                                                    .forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 99999} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 99999} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 99999} !important; } `
                                                            );
                                                        }
                                                    });
                                            }
                                            if ("") {
                                                annexxAddStyle(
                                                    "819",
                                                    ` { z-index: ${false ? "auto" : 1} !important; } `
                                                );
                                            }
                                            if ("" && false) {
                                                "".split(/,\s|,/g).forEach((e) => {
                                                    annexxAddStyle("819", ` ${e}:hover { z-index: 0 !important; } `);
                                                });
                                            }
                                            if ("" && "") {
                                                let anElem = document.querySelectorAll("");
                                                document.querySelectorAll("").forEach((el) => {
                                                    el.addEventListener("mouseenter", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                    });
                                                    el.addEventListener("mouseleave", (e) => {
                                                        anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                    });
                                                });
                                            }
                                        });
                                    }
                                })();;

document.addEventListener("DOMContentLoaded", (e) => {
                                    function annexxAddStyle(numberMod, codestyle) {
                                        let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        if (!styleBlock) {
                                            document
                                                .querySelector("head")
                                                .insertAdjacentHTML(
                                                    "beforeend",
                                                    '<style id="annexxStyle' + numberMod + '"></style>'
                                                );
                                            styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                        }
                                        let t = (function () {
                                            return !Array.from(styleBlock.childNodes).some(function (e) {
                                                if (e.textContent === codestyle) {
                                                    return true;
                                                }
                                            });
                                        })();
                                        if (t) styleBlock.insertAdjacentHTML("beforeend", codestyle);
                                    }
                                    ".tn-elem__14523747211760943941674 .tn-atom a, .tn-elem__1452374721176232367535416880 .tn-atom a, .tn-elem__1452374721176232363208669570 .tn-atom a, .tn-elem__1452374721176232364795290710 .tn-atom a, .tn-elem__15204603411760943941674 .tn-atom a, .tn-elem__1520460341176232367535416880 .tn-atom a, .tn-elem__1520460341176232363208669570 .tn-atom a, .tn-elem__1520460341176232364795290710 .tn-atom a"
                                        .replace(/,\s+$/, "")
                                        .split(/,\s+|,/g)
                                        .map((e) =>
                                            /\.tn-atom$/i.test(e) && !document.querySelector(e).getAttribute("href")
                                                ? e + " a"
                                                : e
                                        )
                                        .forEach((e) => {
                                            if (!e) return false;
                                            setTimeout(function () {
                                                document.querySelectorAll(e).forEach((e) => {
                                                    let elem = e.closest(".t396__elem"),
                                                        sbselem = elem
                                                            ? elem.querySelector(".tn-atom__sbs-anim-wrapper")
                                                            : false,
                                                        displayNone =
                                                            elem && getComputedStyle(elem).display === "none"
                                                                ? true
                                                                : false;
                                                    if (elem) {
                                                        elem.classList.add("anx001-effect-link");
                                                        int = setInterval(() => {
                                                            elem.style.height = "";
                                                        }, 500);
                                                        if (0 && elem) {
                                                            elem = elem.querySelector("a")
                                                                ? elem.querySelector("a")
                                                                : elem.querySelector(".tn-atom");
                                                            window.addEventListener("scroll", function () {
                                                                let posnew = window.scrollY > 0 ? window.scrollY : 0;
                                                                if (0 <= posnew) elem.classList.add("color-scroll");
                                                                else elem.classList.remove("color-scroll");
                                                                pos = posnew;
                                                            });
                                                        }
                                                    }
                                                    setTimeout(() => {
                                                        clearInterval(int);
                                                    }, 5e3);
                                                    if (elem && sbselem) {
                                                        annexxAddStyle(
                                                            "001",
                                                            ` ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join(
                                                                    ""
                                                                )} .tn-atom__sbs-anim-wrapper { display: flex${displayNone ? "" : " !important"}; ${(function () {
                                                                let align = getComputedStyle(elem).textAlign;
                                                                switch (align) {
                                                                    case "left":
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                    case "center":
                                                                        return "justify-content: center;";
                                                                        break;
                                                                    case "right":
                                                                        return "justify-content: flex-end;";
                                                                        break;
                                                                    default:
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                }
                                                            })()} align-items: center; width: 100%; height: auto; } ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join("")} { overflow: visible; } `
                                                        );
                                                    } else if (elem && !elem.classList.contains("t-animate")) {
                                                        annexxAddStyle(
                                                            "001",
                                                            ` ${elem.classList.value
                                                                .split(" ")
                                                                .map((e) => "." + e)
                                                                .join(
                                                                    ""
                                                                )} { display: flex${displayNone ? "" : " !important"} ${(function () {
                                                                let align = getComputedStyle(elem).textAlign;
                                                                switch (align) {
                                                                    case "left":
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                    case "center":
                                                                        return "justify-content: center;";
                                                                        break;
                                                                    case "right":
                                                                        return "justify-content: flex-end;";
                                                                        break;
                                                                    default:
                                                                        return "justify-content: flex-start;";
                                                                        break;
                                                                }
                                                            })()} align-items: center; width: 100%; height: auto; overflow: visible; } `
                                                        );
                                                    }
                                                });
                                            }, 200);
                                            annexxAddStyle(
                                                "001",
                                                ` .js-product > a { display: inline !important; } .t898__icon { positon: absolute !important; } ${e}:not(.t396__elem) { position: relative; transition: color 200ms ease, font-weight 200ms ease !important; display: inline-block; width: ${false ? "100%" : "fit-content"}; width: ${false ? "100%" : "fit-content"}; ${/a$/i.test(e) ? "" : "bottom: 2px;"} } ${(function () {
                                                    if ("#") {
                                                        if (/rgb/.test("#")) {
                                                            return ` ${e}:hover { color: # !important; } `;
                                                        } else {
                                                            return ` ${e}:hover { color: #${(function () {
                                                                return "#".replaceAll("#", "");
                                                            })()} !important; } `;
                                                        }
                                                    } else return "";
                                                })()} ${(function () {
                                                    if (0 && "rgba(0, 0, 0, 1)") {
                                                        if (/rgb/.test("rgba(0, 0, 0, 1)")) {
                                                            return ` ${e}.color-scroll:hover { color: rgba(0, 0, 0, 1) !important; } `;
                                                        } else {
                                                            return ` ${e}.color-scroll:hover { color: #${(function () {
                                                                return "rgba(0, 0, 0, 1)".replaceAll("#", "");
                                                            })()} !important; } `;
                                                        }
                                                    } else return "";
                                                })()} ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}::before { transform-origin: 100% 50%; transform: scale3d(0, 1, 1); transition: transform 0.3s; transition: transform 200ms !important; position: absolute; width: 100%; height: 1px; background: currentColor; top: 100%; left: 0; pointer-events: none; content: ''; color: #; } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}.color-scroll::before { color: rgba(0, 0, 0, 1); } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}:hover::before { transform-origin: 0% 50%; transform: scale3d(1, 1, 1); color: #; } ${e}${document.querySelector(e).querySelector(".tn-atom__sticky-wrapper") ? " .tn-atom__sticky-wrapper" : ""}.color-scroll:hover::before { color: rgba(0, 0, 0, 1); } .t282__menu__item { width: fit-content; width: -moz-fit-content; margin-left: auto; margin-right: auto; } .t280__menu__item { width: fit-content; width: -moz-fit-content; } `
                                            );
                                            if (false) {
                                                annexxAddStyle("001", ` ${e}:hover { font-weight: 400 !important; } `);
                                            }
                                        });
                                });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1524072111");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1524072111");
                        });
                    });;

t_onReady(function () {
                        t_onFuncLoad("t1093__init", function () {
                            t1093__init("1524093261");
                        });
                        t_onFuncLoad("t1093__initPopup", function () {
                            t1093__initPopup("1524093261");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1521078181");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1521078181");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1493454791");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1493454791");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1454143191");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1454143191");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1530772001");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1530772001");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1457990821");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1457990821");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458368161");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458368161");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458705411");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458705411");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1457990821",
                                                stopId: "#rec1492612611",
                                                top1200: 50,
                                                top640_1200: 50,
                                                top640: 40,
                                            },
                                            {
                                                stickyId: "#rec1458368161",
                                                stopId: "#rec1492612611",
                                                top1200: 40,
                                                top640_1200: 100,
                                                top640: 80,
                                            },
                                            {
                                                stickyId: "#rec1458705411",
                                                stopId: "#rec1492612611",
                                                top1200: 20,
                                                top640_1200: 150,
                                                top640: 120,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1492612611");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1492612611");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1458725141");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1458725141");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498383661");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498383661");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498817301");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498817301");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1503311301");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1503311301");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1503390711");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1503390711");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1498759561");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1498759561");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1498383661",
                                                stopId: "#rec1499216181",
                                                top1200: 40,
                                                top640_1200: 0,
                                                top640: 40,
                                            },
                                            {
                                                stickyId: "#rec1498817301",
                                                stopId: "#rec1499216181",
                                                top1200: 80,
                                                top640_1200: 0,
                                                top640: 60,
                                            },
                                            {
                                                stickyId: "#rec1503311301",
                                                stopId: "#rec1499216181",
                                                top1200: 120,
                                                top640_1200: 0,
                                                top640: 80,
                                            },
                                            {
                                                stickyId: "#rec1503390711",
                                                stopId: "#rec1499216181",
                                                top1200: 70,
                                                top640_1200: 0,
                                                top640: 100,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499216181");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499216181");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499765491");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499765491");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1499768471");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1499768471");
                        });
                    });;

(function () {
                                    function n_ready(callback) {
                                        if (document.readyState !== "loading") {
                                            callback();
                                        } else if (document.addEventListener) {
                                            document.addEventListener("DOMContentLoaded", callback);
                                        } else {
                                            document.attachEvent("onreadystatechange", function () {
                                                if (document.readyState !== "loading") {
                                                    callback();
                                                }
                                            });
                                        }
                                    }
                                    function throttle(func, wait, context) {
                                        var timeout, previous;
                                        wait = wait || 50;
                                        return function () {
                                            var now = +new Date(),
                                                args = arguments;
                                            if (previous && now < previous + wait) {
                                                clearTimeout(timeout);
                                                timeout = setTimeout(function () {
                                                    previous = now;
                                                    func.apply(context || this, args);
                                                }, wait);
                                            } else {
                                                previous = now;
                                                func.apply(context || this, args);
                                            }
                                        };
                                    }
                                    function modExecution() {
                                        const stickyBlocks = [
                                            {
                                                stickyId: "#rec1499216181",
                                                stopId: "#rec1499768471",
                                                top1200: 50,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                            {
                                                stickyId: "#rec1458368161",
                                                stopId: "#rec1492612611",
                                                top1200: 40,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                            {
                                                stickyId: "#rec1458705411",
                                                stopId: "#rec1492612611",
                                                top1200: 20,
                                                top640_1200: 0,
                                                top640: 0,
                                            },
                                        ];
                                        const firstStickyBlock = document.querySelector(stickyBlocks[0].stickyId);
                                        if (firstStickyBlock && firstStickyBlock.classList.contains("t395__off")) {
                                            const observer = new MutationObserver((mutationsList, observer) => {
                                                for (const mutation of mutationsList) {
                                                    if (
                                                        mutation.type === "attributes" &&
                                                        mutation.attributeName === "class"
                                                    ) {
                                                        if (!firstStickyBlock.classList.contains("t395__off")) {
                                                            window.dispatchEvent(new Event("resize"));
                                                            observer.disconnect();
                                                            break;
                                                        }
                                                    }
                                                }
                                            });
                                            observer.observe(firstStickyBlock, { attributes: true });
                                        }
                                        function setTop(obj) {
                                            let top;
                                            if (window.innerWidth > 1200) {
                                                top = obj.top1200;
                                            } else if (window.innerWidth > 640 && window.innerWidth < 1201) {
                                                top = obj.top640_1200;
                                            } else if (window.innerWidth < 641) {
                                                top = obj.top640;
                                            }
                                            return top;
                                        }
                                        function setStickyBlock() {
                                            stickyBlocks.forEach((blockPair) => {
                                                let stickyBlock = document.querySelector(blockPair.stickyId);
                                                let stopBlock = document.querySelector(blockPair.stopId);
                                                if (!stickyBlock) {
                                                    return;
                                                }
                                                let stickyBlockHeight = stickyBlock.offsetHeight;
                                                let stickyBlockInitialOffsetTop =
                                                    stickyBlock.offsetTop - setTop(blockPair);
                                                let stickyBlockDiv;
                                                if (
                                                    stickyBlock.querySelector(".t-container") &&
                                                    stickyBlock.querySelector(".t-container").parentElement
                                                ) {
                                                    stickyBlockDiv =
                                                        stickyBlock.querySelector(".t-container").parentElement;
                                                } else {
                                                    stickyBlockDiv = stickyBlock.querySelector("div");
                                                }
                                                stickyBlock.style.height = stickyBlockHeight + "px";
                                                if (
                                                    stickyBlock.hasAttribute("data-record-type") &&
                                                    stickyBlock.getAttribute("data-record-type") != "396"
                                                ) {
                                                    let stickyBlockStyle = window.getComputedStyle(stickyBlock);
                                                    stickyBlockDiv.style.paddingTop = stickyBlockStyle.paddingTop;
                                                    stickyBlockDiv.style.paddingBottom = stickyBlockStyle.paddingBottom;
                                                    stickyBlockDiv.style.backgroundColor =
                                                        stickyBlockStyle.backgroundColor;
                                                    stickyBlockDiv.style.height = stickyBlockStyle.height;
                                                    stickyBlock.style.paddingTop = "0";
                                                    stickyBlock.style.paddingBottom = "0";
                                                    stickyBlock.style.backgroundColor = "";
                                                }
                                                function calculatePositionBlocks() {
                                                    stickyBlock = document.querySelector(blockPair.stickyId);
                                                    stopBlock = document.querySelector(blockPair.stopId);
                                                    stickyBlockHeight = stickyBlock.querySelector(".t396").offsetHeight;
                                                    if (!stickyBlockHeight) {
                                                        stickyBlockHeight = stickyBlock.offsetHeight;
                                                    }
                                                    stickyBlockInitialOffsetTop =
                                                        stickyBlock.offsetTop - setTop(blockPair);
                                                    if (
                                                        stickyBlock.querySelector(".t-container") &&
                                                        stickyBlock.querySelector(".t-container").parentElement
                                                    ) {
                                                        stickyBlockDiv =
                                                            stickyBlock.querySelector(".t-container").parentElement;
                                                    } else {
                                                        stickyBlockDiv = stickyBlock.querySelector("div");
                                                    }
                                                    stickyBlock.style.height = stickyBlockHeight + "px";
                                                    updateStickyBlockPosition();
                                                }
                                                const gridContainerList =
                                                    document.querySelectorAll(".js-store-grid-cont");
                                                console.log("gridContainerList", gridContainerList);
                                                if (gridContainerList.length > 0) {
                                                    gridContainerList.forEach((gridContainer) => {
                                                        gridContainer.removeEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                        gridContainer.addEventListener(
                                                            "tStoreRendered",
                                                            calculatePositionBlocks
                                                        );
                                                    });
                                                }
                                                window.removeEventListener("resize", calculatePositionBlocks);
                                                window.addEventListener("resize", calculatePositionBlocks);
                                                function updateStickyBlockPosition() {
                                                    let stopBlockPosition =
                                                        (stopBlock ? stopBlock.offsetTop : 0) -
                                                        setTop(blockPair) -
                                                        stickyBlockHeight;
                                                    let windowScrollTop =
                                                        window.pageYOffset || document.documentElement.scrollTop;
                                                    let isPastStart = windowScrollTop > stickyBlockInitialOffsetTop;
                                                    let isBeforeEnd =
                                                        windowScrollTop < stopBlockPosition - stickyBlockHeight;
                                                    let isPastEnd = !stopBlock || windowScrollTop >= stopBlockPosition;
                                                    let distanceToStopBlock = windowScrollTop - stopBlockPosition;
                                                    let slideAmount = Math.max(distanceToStopBlock, 0);
                                                    if (isPastStart) {
                                                        stickyBlock.classList.add("nlmsticky");
                                                    } else {
                                                        stickyBlock.classList.remove("nlmsticky");
                                                    }
                                                    if (stopBlock && isPastEnd) {
                                                        requestAnimationFrame(function () {
                                                            stickyBlock.classList.add("nlm129blocker");
                                                            stickyBlockDiv.style.top =
                                                                stopBlockPosition + setTop(blockPair) + "px";
                                                        });
                                                    } else {
                                                        requestAnimationFrame(function () {
                                                            stickyBlockDiv.style.top = "";
                                                            stickyBlock.classList.remove("nlm129blocker");
                                                        });
                                                    }
                                                }
                                                updateStickyBlockPosition();
                                                window.addEventListener("scroll", updateStickyBlockPosition);
                                            });
                                        }
                                        let sI = setInterval(function () {
                                            if (
                                                document.querySelectorAll(".t396__artboard").length ==
                                                document.querySelectorAll(".t396__artboard.rendered").length
                                            ) {
                                                clearInterval(sI);
                                                if (window.nlm014isDone != undefined) {
                                                    let int = setInterval(function () {
                                                        if (window.nlm014isDone) {
                                                            clearInterval(int);
                                                            setStickyBlock();
                                                        }
                                                    }, 10);
                                                } else {
                                                    setStickyBlock();
                                                }
                                            }
                                        }, 10);
                                    }
                                    n_ready(function () {
                                        const nlm087DivList = Array.from(
                                            document.querySelectorAll(".nlm-087mode-in-the-house")
                                        );
                                        const nlm080DivList = Array.from(
                                            document.querySelectorAll(".nlm-080mode-in-the-house")
                                        );
                                        if (nlm087DivList.length > 0) {
                                            let intFor087 = setInterval(() => {
                                                let countInit087Mods = 0;
                                                nlm087DivList.forEach((nlm087Div) => {
                                                    if (nlm087Div.hasAttribute("data-mode-ready")) {
                                                        countInit087Mods += 1;
                                                    }
                                                });
                                                if (nlm087DivList.length === countInit087Mods) {
                                                    console.log("087 complete");
                                                    clearInterval(intFor087);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else if (nlm080DivList.length > 0) {
                                            let intFor080 = setInterval(() => {
                                                let countInit080Mods = 0;
                                                nlm080DivList.forEach((nlm080Div) => {
                                                    if (nlm080Div.hasAttribute("data-mode-ready")) {
                                                        countInit080Mods += 1;
                                                    }
                                                });
                                                if (nlm080DivList.length === countInit080Mods) {
                                                    console.log("080 complete");
                                                    clearInterval(intFor080);
                                                    modExecution();
                                                }
                                            }, 500);
                                        } else {
                                            modExecution();
                                        }
                                    });
                                })();;

t_onFuncLoad("t396_initialScale", function () {
                        t396_initialScale("1559022031");
                    });
                    t_onReady(function () {
                        t_onFuncLoad("t396_init", function () {
                            t396_init("1559022031");
                        });
                    });;

t_onReady(function () {
                        t_onFuncLoad("t1093__init", function () {
                            t1093__init("1559022331");
                        });
                        t_onFuncLoad("t1093__initPopup", function () {
                            t1093__initPopup("1559022331");
                        });
                    });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996111");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996111");
                            });
                        });;

(function () {
                                        function annexxAddStyle(numberMod, codestyle) {
                                            let styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                            if (!styleBlock) {
                                                document
                                                    .querySelector("head")
                                                    .insertAdjacentHTML(
                                                        "beforeend",
                                                        '<style id="annexxStyle' + numberMod + '"></style>'
                                                    );
                                                styleBlock = document.querySelector("head > #annexxStyle" + numberMod);
                                            }
                                            let t = (function () {
                                                return !Array.from(styleBlock.childNodes).some(function (e) {
                                                    if (e.textContent === codestyle) {
                                                        return true;
                                                    }
                                                });
                                            })();
                                            if (t) styleBlock.textContent += codestyle;
                                        }
                                        if (0) {
                                            let b = document.querySelector("#t-header");
                                            if (b) b.classList.add("zindex-annexx");
                                            annexxAddStyle(
                                                "819",
                                                ` #t-header.zindex-annexx { position: relative; z-index: 0 !important; } `
                                            );
                                        }
                                        if (0) {
                                            let b = document.querySelector("#t-footer");
                                            if (b) b.classList.add("zindex-annexx");
                                            annexxAddStyle(
                                                "819",
                                                ` #t-footer { position: relative; z-index: 0 !important; } `
                                            );
                                        }
                                        if ("#rec1502996131" || "") {
                                            document.addEventListener("DOMContentLoaded", function () {
                                                if ("#rec1502996131") {
                                                    document.querySelectorAll("#rec1502996131").forEach((e) => {
                                                        e.classList.add("zindex-annexx");
                                                        if (getComputedStyle(e).position === "static") {
                                                            if (e.dataset.recordType === "121") {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } #${e.id} .t451m__overlay { position: relative !important; } `
                                                                );
                                                            } else {
                                                                annexxAddStyle(
                                                                    "819",
                                                                    ` #${e.id}.zindex-annexx { position: relative; z-index: ${false ? "auto" : 400} !important; } `
                                                                );
                                                            }
                                                        } else {
                                                            annexxAddStyle(
                                                                "819",
                                                                ` #${e.id}.zindex-annexx { z-index: ${false ? "auto" : 400} !important; } `
                                                            );
                                                        }
                                                    });
                                                }
                                                if ("") {
                                                    annexxAddStyle(
                                                        "819",
                                                        ` { z-index: ${false ? "auto" : 1} !important; } `
                                                    );
                                                }
                                                if ("" && false) {
                                                    "".split(/,\s|,/g).forEach((e) => {
                                                        annexxAddStyle(
                                                            "819",
                                                            ` ${e}:hover { z-index: 0 !important; } `
                                                        );
                                                    });
                                                }
                                                if ("" && "") {
                                                    let anElem = document.querySelectorAll("");
                                                    document.querySelectorAll("").forEach((el) => {
                                                        el.addEventListener("mouseenter", (e) => {
                                                            anElem.forEach((elem) => (elem.style.zIndex = 0));
                                                        });
                                                        el.addEventListener("mouseleave", (e) => {
                                                            anElem.forEach((elem) => (elem.style.zIndex = ""));
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    })();;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996131");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996131");
                            });
                        });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1502996151");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1502996151");
                            });
                        });;

t_onFuncLoad("t396_initialScale", function () {
                            t396_initialScale("1503023271");
                        });
                        t_onReady(function () {
                            t_onFuncLoad("t396_init", function () {
                                t396_init("1503023271");
                            });
                        });;

t_onReady(function () {
                            t_onFuncLoad("t886_init", function () {
                                t886_init("1580320901");
                            });
                        });;

setTimeout(
                                        function () {
                                            function getScript(url) {
                                                return new Promise(function (resolve, reject) {
                                                    if (window.jQuery && /jquery@/.test(url)) resolve();
                                                    else {
                                                        var script = document.createElement("script");
                                                        script.src = url;
                                                        script.async = true;
                                                        script.onload = resolve;
                                                        script.onerror = reject;
                                                        document.head.appendChild(script);
                                                    }
                                                });
                                            }
                                            getScript(
                                                "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/2.2.0/browser/overlayscrollbars.browser.es6.min.js"
                                            ).then(function () {
                                                function annexxAddStyle(numberMod, codestyle) {
                                                    let styleBlock = document.querySelector(
                                                        "head > #annexxStyle" + numberMod
                                                    );
                                                    if (!styleBlock) {
                                                        document
                                                            .querySelector("head")
                                                            .insertAdjacentHTML(
                                                                "beforeend",
                                                                '<style id="annexxStyle' + numberMod + '"></style>'
                                                            );
                                                        styleBlock = document.querySelector(
                                                            "head > #annexxStyle" + numberMod
                                                        );
                                                    }
                                                    let t = (function () {
                                                        return !Array.from(styleBlock.childNodes).some(function (e) {
                                                            if (e.textContent === codestyle) {
                                                                return true;
                                                            }
                                                        });
                                                    })();
                                                    if (t) styleBlock.textContent += codestyle;
                                                }
                                                let isMobile = (function () {
                                                    let ua = navigator.userAgent;
                                                    if (
                                                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                                            ua
                                                        ) ||
                                                        (!/windows/i.test(ua) &&
                                                            /safari/i.test(ua) &&
                                                            navigator.maxTouchPoints > 1)
                                                    )
                                                        return true;
                                                    else return false;
                                                })();
                                                if (!isMobile) {
                                                    let {
                                                        OverlayScrollbars,
                                                        ScrollbarsHidingPlugin,
                                                        SizeObserverPlugin,
                                                        ClickScrollPlugin,
                                                    } = OverlayScrollbarsGlobal;
                                                    OverlayScrollbars.plugin(ClickScrollPlugin);
                                                    window.sb = OverlayScrollbars(document.body, {
                                                        scrollbars: {
                                                            autoHide: false ? "scroll" : "never",
                                                            clickScroll: true,
                                                        },
                                                    });
                                                    if (!document.querySelector('.r[data-record-type="270"]')) {
                                                        let hash = window.location.hash.slice(1);
                                                        if (!hash) return;
                                                        let target = document.querySelector(`a[name="${hash}"]`);
                                                        if (!target) return;
                                                        let y = target.getBoundingClientRect().top + window.pageYOffset;
                                                        window.scrollTo({ top: y, behavior: "auto" });
                                                    }
                                                    let imageWidth = 40;
                                                    annexxAddStyle(
                                                        "805-1",
                                                        ` .os-scrollbar.os-theme-dark { --os-size: 12px; --os-handle-min-size: 45px; --os-handle-border-radius: 8px; --os-track-bg: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-track-bg-hover: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-track-bg-active: ${(function () {
                                                            return false || false
                                                                ? "none"
                                                                : "linear-gradient(#FFFFFF 0%, #FFFFFF 100%)";
                                                        })()}; --os-handle-bg: linear-gradient(#3b3935 46%, #3b3935 46%); --os-handle-bg-hover: linear-gradient(#b9dd46 100%, #b9dd46 100%); --os-handle-bg-active: linear-gradient(#b9dd46 100%, #b9dd46 100%); ${(function () {
                                                            return false ? "mix-blend-mode: difference;" : "";
                                                        })()} } .os-scrollbar.os-theme-dark .os-scrollbar-handle { -webkit-box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 1) !important; } .os-scrollbar .os-scrollbar-track { transition: opacity .15s,background-color .15s,border-color .15s, left .2s linear !important; } .os-scrollbar-track { left: 0px; } .os-scrollbar-handle::before { padding-right: ${Math.abs(0) * 2.5}px; } .os-scrollbar-track::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding-right: ${Math.abs(0) * 2.5}px; pointer-events: all; } ${"" ? ` .os-scrollbar-handle { position: relative; } .os-scrollbar-handle::after { content: ''; pointer-events: none; position: fixed; left: calc(var(--os-size) - 40px); top: 0; width: 40px; height: 100%; background-image: url(''); background-size: contain; background-repeat: no-repeat; background-position: center; transform: translateY(calc(var(--os-handle-position) * (100% - 40px * (1 / var(--image-aspect-ratio))))); } ` : ""} .os-scrollbar-track:hover { left: 0px; } html[data-overlayscrollbars]>body.t-body_popupshowed, html[data-overlayscrollbars]>body.t-zoomer__show { overflow: visible !important; } .t-popup { scrollbar-width: none; -ms-overflow-style: none; } .t-popup::-webkit-scrollbar { display: none; } `
                                                    );
                                                    if (false) window.dispatchEvent(new CustomEvent("resize"));
                                                    document.addEventListener("click", function () {
                                                        setTimeout(function () {
                                                            if (document.body.classList.contains("t-body_popupshowed"))
                                                                document.documentElement.style.overflowY = "hidden";
                                                            else document.documentElement.style.overflowY = "";
                                                        }, 200);
                                                    });
                                                }
                                            });
                                        },
                                        false ? 1000 : 0
                                    );;

setTimeout(function () {
                (function (m, e, t, r, i, k, a) {
                    m[i] =
                        m[i] ||
                        function () {
                            (m[i].a = m[i].a || []).push(arguments);
                        };
                    m[i].l = 1 * new Date();
                    (k = e.createElement(t)),
                        (a = e.getElementsByTagName(t)[0]),
                        (k.async = 1),
                        (k.src = r),
                        a.parentNode.insertBefore(k, a);
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                window.mainMetrikaId = "95716206";
                ym(window.mainMetrikaId, "init", {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    params: { __ym: { ymCms: { cms: "tilda", cmsVersion: "1.0", cmsCatalog: "1" } } },
                    ecommerce: "dataLayer",
                });
            }, 2000);;

if (!window.mainTracker) {
                window.mainTracker = "tilda";
            }
            setTimeout(function () {
                (function (d, w, k, o, g) {
                    var n = d.getElementsByTagName(o)[0],
                        s = d.createElement(o),
                        f = function () {
                            n.parentNode.insertBefore(s, n);
                        };
                    s.type = "text/javascript";
                    s.async = true;
                    s.key = k;
                    s.id = "tildastatscript";
                    s.src = g;
                    if (w.opera == "[object Opera]") {
                        d.addEventListener("DOMContentLoaded", f, false);
                    } else {
                        f();
                    }
                })(document, window, "300936b189a779d11644737d40c5c9ab", "script", "js/tilda-stat-1.0.min.js");
            }, 2000);;
