(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [63185], {
        79357: function(e) {
            function o(e) {
                return Promise.resolve().then(function() {
                    var o = Error("Cannot find module '" + e + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                })
            }
            o.keys = function() {
                return []
            }, o.resolve = o, o.id = 79357, e.exports = o
        },
        24719: function(e) {
            function o(e) {
                return Promise.resolve().then(function() {
                    var o = Error("Cannot find module '" + e + "'");
                    throw o.code = "MODULE_NOT_FOUND", o
                })
            }
            o.keys = function() {
                return []
            }, o.resolve = o, o.id = 24719, e.exports = o
        },
        88677: function() {},
        62808: function() {},
        35883: function() {},
        2243: function() {},
        98876: function() {},
        96546: function() {},
        71740: function(e, o, t) {
            Promise.resolve().then(t.bind(t, 59237)), Promise.resolve().then(t.bind(t, 44829)), Promise.resolve().then(t.bind(t, 57861)), Promise.resolve().then(t.t.bind(t, 5804, 23)), Promise.resolve().then(t.t.bind(t, 33551, 23)), Promise.resolve().then(t.bind(t, 8477)), Promise.resolve().then(t.bind(t, 28789)), Promise.resolve().then(t.bind(t, 29352))
        },
        59237: function(e, o, t) {
            "use strict";
            t.d(o, {
                default: function() {
                    return s
                }
            });
            var n = t(22988),
                r = t(2265),
                i = t(80412),
                l = t(66132),
                a = t(71169),
                d = t(57437);

            function s(e) {
                let {
                    options: o,
                    CacheProvider: t = l.C,
                    children: s
                } = e, [c] = r.useState(() => {
                    var e;
                    let t = (0, i.Z)((0, n.Z)({}, o, {
                        key: null != (e = null == o ? void 0 : o.key) ? e : "mui"
                    }));
                    t.compat = !0;
                    let r = t.insert,
                        l = [];
                    return t.insert = function() {
                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        null != o && o.enableCssLayer && (n[1].styles = "@layer mui {".concat(n[1].styles, "}"));
                        let [a, d] = n;
                        return void 0 === t.inserted[d.name] && l.push({
                            name: d.name,
                            isGlobal: !a
                        }), r(...n)
                    }, {
                        cache: t,
                        flush: () => {
                            let e = l;
                            return l = [], e
                        }
                    }
                });
                return (0, a.useServerInsertedHTML)(() => {
                    let e = c.flush();
                    if (0 === e.length) return null;
                    let t = "",
                        n = c.cache.key,
                        i = [];
                    return e.forEach(e => {
                        let {
                            name: o,
                            isGlobal: r
                        } = e, l = c.cache.inserted[o];
                        "boolean" != typeof l && (r ? i.push({
                            name: o,
                            style: l
                        }) : (t += l, n += " ".concat(o)))
                    }), (0, d.jsxs)(r.Fragment, {
                        children: [i.map(e => {
                            let {
                                name: t,
                                style: n
                            } = e;
                            return (0, d.jsx)("style", {
                                nonce: null == o ? void 0 : o.nonce,
                                "data-emotion": "".concat(c.cache.key, "-global ").concat(t),
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            }, t)
                        }), t && (0, d.jsx)("style", {
                            nonce: null == o ? void 0 : o.nonce,
                            "data-emotion": n,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })]
                    })
                }), (0, d.jsx)(t, {
                    value: c.cache,
                    children: s
                })
            }
        },
        44829: function(e, o, t) {
            "use strict";
            t.d(o, {
                default: function() {
                    return u
                }
            });
            var n = t(22988),
                r = t(2265),
                i = t(69281),
                l = t(2491),
                a = t(57437);
            let d = (e, o) => (0, n.Z)({
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    boxSizing: "border-box",
                    WebkitTextSizeAdjust: "100%"
                }, o && !e.vars && {
                    colorScheme: e.palette.mode
                }),
                s = e => (0, n.Z)({
                    color: (e.vars || e).palette.text.primary
                }, e.typography.body1, {
                    backgroundColor: (e.vars || e).palette.background.default,
                    "@media print": {
                        backgroundColor: (e.vars || e).palette.common.white
                    }
                }),
                c = function(e) {
                    var o;
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = {};
                    t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(o => {
                        var t;
                        let [n, i] = o;
                        r[e.getColorSchemeSelector(n).replace(/\s*&/, "")] = {
                            colorScheme: null == (t = i.palette) ? void 0 : t.mode
                        }
                    });
                    let i = (0, n.Z)({
                            html: d(e, t),
                            "*, *::before, *::after": {
                                boxSizing: "inherit"
                            },
                            "strong, b": {
                                fontWeight: e.typography.fontWeightBold
                            },
                            body: (0, n.Z)({
                                margin: 0
                            }, s(e), {
                                "&::backdrop": {
                                    backgroundColor: (e.vars || e).palette.background.default
                                }
                            })
                        }, r),
                        l = null == (o = e.components) || null == (o = o.MuiCssBaseline) ? void 0 : o.styleOverrides;
                    return l && (i = [i, l]), i
                };
            var u = function(e) {
                let {
                    children: o,
                    enableColorScheme: t = !1
                } = (0, i.Z)({
                    props: e,
                    name: "MuiCssBaseline"
                });
                return (0, a.jsxs)(r.Fragment, {
                    children: [(0, a.jsx)(l.Z, {
                        styles: e => c(e, t)
                    }), o]
                })
            }
        },
        57861: function(e, o, t) {
            "use strict";
            t.d(o, {
                ThemeProvider: function() {
                    return y
                }
            });
            var n = t(22988),
                r = t(23950),
                i = t(2265);
            let l = i.createContext(null);

            function a() {
                return i.useContext(l)
            }
            var d = "function" == typeof Symbol && Symbol.for ? Symbol.for("mui.nested") : "__THEME_NESTED__",
                s = t(57437),
                c = function(e) {
                    let {
                        children: o,
                        theme: t
                    } = e, r = a(), c = i.useMemo(() => {
                        let e = null === r ? t : "function" == typeof t ? t(r) : (0, n.Z)({}, r, t);
                        return null != e && (e[d] = null !== r), e
                    }, [t, r]);
                    return (0, s.jsx)(l.Provider, {
                        value: c,
                        children: o
                    })
                },
                u = t(66132),
                f = t(34828),
                m = t(55158);
            let p = {};

            function h(e, o, t) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return i.useMemo(() => {
                    let i = e && o[e] || o;
                    if ("function" == typeof t) {
                        let l = t(i),
                            a = e ? (0, n.Z)({}, o, {
                                [e]: l
                            }) : l;
                        return r ? () => a : a
                    }
                    return e ? (0, n.Z)({}, o, {
                        [e]: t
                    }) : (0, n.Z)({}, o, t)
                }, [e, o, t, r])
            }
            var x = function(e) {
                    let {
                        children: o,
                        theme: t,
                        themeId: n
                    } = e, r = (0, f.Z)(p), i = a() || p, l = h(n, r, t), d = h(n, i, t, !0), x = "rtl" === l.direction;
                    return (0, s.jsx)(c, {
                        theme: d,
                        children: (0, s.jsx)(u.T.Provider, {
                            value: l,
                            children: (0, s.jsx)(m.Z, {
                                value: x,
                                children: o
                            })
                        })
                    })
                },
                b = t(52737);
            let g = ["theme"];

            function y(e) {
                let {
                    theme: o
                } = e, t = (0, r.Z)(e, g), i = o[b.Z];
                return (0, s.jsx)(x, (0, n.Z)({}, t, {
                    themeId: i ? b.Z : void 0,
                    theme: i || o
                }))
            }
        },
        8477: function(e, o, t) {
            "use strict";
            t.d(o, {
                default: function() {
                    return l
                }
            });
            var n = t(57437),
                r = t(40468),
                i = t(56093);

            function l(e) {
                let {
                    children: o
                } = e;
                return (0, n.jsx)(i.wT, {
                    iconVariant: {
                        warning: (0, n.jsx)(r.Z, {
                            color: "inherit",
                            size: 20,
                            sx: {
                                mr: 2
                            }
                        })
                    },
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    children: o
                })
            }
            t(2265)
        },
        28789: function(e, o, t) {
            "use strict";
            t.d(o, {
                default: function() {
                    return l
                }
            });
            var n = t(57437);
            t(2265);
            var r = t(20552),
                i = t(42321);

            function l(e) {
                let {
                    children: o
                } = e;
                return (0, n.jsx)(r.wyl, {
                    supportedChains: [i.XYF],
                    activeChain: i.XYF,
                    clientId: "27357b6a8c5c16e4e0b09ecf63eb40a8",
                    dAppMeta: {
                        name: "CatonCatnip",
                        description: "nippy",
                        url: "https://catoncatnip.com",
                        logoUrl: "https://catoncatnip/icon.png"
                    },
                    supportedWallets: [(0, r.lMF)({
                        personalWallets: [(0, r.k9e)({
                            recommended: !0
                        }), (0, r.Dq5)(), (0, r.aFJ)({
                            recommended: !0
                        }), (0, r.pJV)(), (0, r.u4Y)()]
                    }), (0, r.u4Y)(), (0, r.Dq5)(), (0, r.k9e)(), (0, r.aFJ)(), (0, r.pJV)()],
                    children: o
                })
            }
        },
        29352: function(e, o, t) {
            "use strict";
            var n = t(25668),
                r = t.n(n),
                i = t(94444),
                l = t(35150);

            function a(e) {
                return "".concat(e / 16, "rem")
            }

            function d(e) {
                let {
                    sm: o,
                    md: t,
                    lg: n
                } = e;
                return {
                    "@media (min-width:600px)": {
                        fontSize: a(o)
                    },
                    "@media (min-width:900px)": {
                        fontSize: a(t)
                    },
                    "@media (min-width:1200px)": {
                        fontSize: a(n)
                    }
                }
            }
            let s = {
                    mode: "dark",
                    primary: {
                        main: "#00CEFF"
                    },
                    secondary: {
                        main: "#E0C2FF",
                        light: "#F5EBFF",
                        contrastText: "#47008F"
                    },
                    pink: {
                        main: "#EA33F0"
                    },
                    white: {
                        main: "#fff",
                        fontFamily: "KGMelonheadz,sans-serif",
                        contrastText: "#000"
                    }
                },
                c = (0, i.Z)({
                    palette: s,
                    typography: {
                        fontFamily: r().style.fontFamily,
                        color: "#fff",
                        navLogo: {
                            color: "#000",
                            fontFamily: "KGMelonheadz,sans-serif",
                            fontSize: a(25),
                            ...d({
                                sm: 20,
                                md: 35
                            })
                        },
                        catTitle: {
                            fontFamily: "KGMelonheadz,sans-serif",
                            fontSize: a(100),
                            ...d({
                                sm: 100,
                                md: 250
                            })
                        },
                        contractAddressTitle: {
                            backgroundColor: s.primary.main,
                            color: "#000",
                            border: "2px solid #000",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            padding: " 0.5rem 1rem",
                            borderRadius: "30px",
                            zIndex: 3,
                            fontSize: a(13),
                            ...d({
                                xs: 13,
                                sm: 16
                            })
                        },
                        contractAddress: {
                            backgroundColor: "#fff",
                            color: "#000",
                            border: "2px solid #000",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            padding: "1.2rem 1rem",
                            borderRadius: "30px",
                            borderTopLeftRadius: "0px",
                            position: "relative",
                            marginTop: "-20px",
                            alignItems: "center",
                            zIndex: 2,
                            fontSize: a(11),
                            ...d({
                                xs: 11,
                                sm: 16
                            })
                        },
                        introTitle: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            backgroundColor: s.primary.main,
                            padding: "5px 30px",
                            border: "2px solid #000",
                            borderRadius: "30px",
                            fontSize: a(30),
                            ...d({
                                sm: 20,
                                md: 30
                            })
                        },
                        introBody: {
                            fontFamily: r().style.fontFamily,
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.807843)",
                            fontWeight: "500",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 20
                            })
                        },
                        tokenomicsText: {
                            backgroundColor: "white",
                            color: "black",
                            minWidth: "20%",
                            textAlight: "center",
                            padding: "10px",
                            border: "2px solid #000",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 25
                            })
                        },
                        totalSupply: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            padding: "10px",
                            borderRadius: "30px",
                            fontSize: a(30),
                            ...d({
                                sm: 20,
                                md: 60
                            })
                        },
                        presaleLabel: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            fontSize: a(30),
                            ...d({
                                sm: 20,
                                md: 40
                            })
                        },
                        copyText: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            fontSize: a(30),
                            ...d({
                                sm: 20,
                                md: 40
                            })
                        },
                        LaunchDate: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            fontSize: a(50),
                            ...d({
                                sm: 50,
                                md: 100
                            })
                        },
                        sendText: {
                            color: s.primary.main,
                            minWidth: "20%",
                            textAlight: "center",
                            padding: "10px",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 25
                            })
                        },
                        sendAddress: {
                            backgroundColor: "white",
                            color: "black",
                            minWidth: "20%",
                            textAlight: "center",
                            padding: "10px",
                            border: "3px solid #000",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            display: "flex",
                            flexDirection: "row",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 25
                            })
                        },
                        robotoBold: {
                            fontWeight: "bold",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 25
                            })
                        },
                        roboto: {
                            fontWeight: "normal",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 25
                            })
                        },
                        robotoLight: {
                            fontWeight: "300",
                            fontSize: a(18),
                            ...d({
                                sm: 20,
                                md: 20
                            })
                        },
                        countDown: {
                            fontWeight: "bold",
                            fontSize: a(30),
                            ...d({
                                sm: 20,
                                md: 90
                            })
                        },
                        contactText: {
                            fontWeight: "bold",
                            fontSize: a(15),
                            ...d({
                                sm: 20,
                                md: 18
                            })
                        },
                        hero2: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            lineHeight: 1,
                            textAlign: "center",
                            fontSize: a(32),
                            ...d({
                                sm: 32,
                                md: 50
                            })
                        },
                        congrats: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            lineHeight: 1,
                            textAlign: "center",
                            fontSize: a(32),
                            ...d({
                                sm: 32,
                                md: 50
                            })
                        },
                        arrow: {
                            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.52549)",
                            fontFamily: "KGMelonheadz,sans-serif",
                            textAlign: "center",
                            fontSize: a(40),
                            ...d({
                                sm: 50,
                                md: 60
                            })
                        },
                        coinGroup: {
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: a(15),
                            ...d({
                                sm: 15,
                                md: 18
                            })
                        }
                    },
                    components: {
                        MuiStepConnector: {
                            styleOverrides: {
                                line: {
                                    borderWidth: 4,
                                    borderColor: s.primary.main
                                }
                            }
                        },
                        MuiButton: {
                            variants: [{
                                props: {
                                    variant: "cat"
                                },
                                style: {
                                    fontFamily: "KGMelonheadz,sans-serif",
                                    color: "black",
                                    backgroundColor: "#fff",
                                    textTransform: "none",
                                    fontSize: a(15),
                                    ...d({
                                        sm: 20,
                                        md: 15
                                    })
                                }
                            }, {
                                props: {
                                    variant: "bridgeBtn"
                                },
                                style: {
                                    fontFamily: "KGMelonheadz,sans-serif",
                                    color: "black",
                                    backgroundColor: "#EA33F0",
                                    textTransform: "none",
                                    fontSize: a(15),
                                    ...d({
                                        sm: 20,
                                        md: 15
                                    })
                                }
                            }, {
                                props: {
                                    variant: "copy"
                                },
                                style: {
                                    fontFamily: "KGMelonheadz,sans-serif",
                                    color: "black",
                                    backgroundColor: s.primary.main,
                                    color: "#000",
                                    border: "2px solid #000",
                                    borderRadius: "20px",
                                    padding: "5px 30px",
                                    textTransform: "none",
                                    fontSize: a(20),
                                    ...d({
                                        sm: 20,
                                        md: 20
                                    })
                                }
                            }, {
                                props: {
                                    variant: "connect"
                                },
                                style: {
                                    backgroundColor: "#212128",
                                    color: "#fff",
                                    ":hover": {
                                        backgroundColor: "#3C3C4A"
                                    },
                                    borderRadius: "20px",
                                    padding: "5px 30px",
                                    textTransform: "none",
                                    fontSize: a(20),
                                    ...d({
                                        sm: 20,
                                        md: 20
                                    })
                                }
                            }, {
                                props: {
                                    variant: "bridge"
                                },
                                style: {
                                    backgroundColor: "#EA33F0",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    borderRadius: "30px",
                                    padding: "5px 30px",
                                    textTransform: "none",
                                    fontSize: a(20),
                                    ...d({
                                        sm: 20,
                                        md: 20
                                    }),
                                    ":hover": {
                                        backgroundColor: "#F293F6"
                                    }
                                }
                            }]
                        },
                        MuiAlert: {
                            styleOverrides: {
                                root: e => {
                                    let {
                                        ownerState: o
                                    } = e;
                                    return { ..."info" === o.severity && {
                                            backgroundColor: "#60a5fa"
                                        }
                                    }
                                }
                            }
                        },
                        MuiTextField: {
                            styleOverrides: {
                                root: {
                                    "--TextField-brandBorderColor": "#212128",
                                    "--TextField-brandBorderHoverColor": "#212128",
                                    "--TextField-brandBorderFocusedColor": "#212128"
                                }
                            },
                            defaultProps: {
                                fullWidth: !0
                            }
                        },
                        MuiOutlinedInput: {
                            styleOverrides: {
                                notchedOutline: {
                                    borderColor: "#212128"
                                },
                                root: {
                                    backgroundColor: "#36373C",
                                    borderRadius: "35px",
                                    ["&:hover .".concat(l.Z.notchedOutline)]: {
                                        borderColor: "var(--TextField-brandBorderHoverColor)"
                                    },
                                    ["&.Mui-focused .".concat(l.Z.notchedOutline)]: {
                                        borderColor: "var(--TextField-brandBorderFocusedColor)"
                                    },
                                    ["&.Mui-error .".concat(l.Z.notchedOutline)]: {
                                        borderColor: "red"
                                    },
                                    ["&.Mui-disabled .".concat(l.Z.notchedOutline)]: {
                                        borderColor: "var(--TextField-brandBorderFocusedColor)"
                                    }
                                }
                            }
                        }
                    }
                });
            o.default = c
        },
        5804: function() {},
        33551: function() {}
    },
    function(e) {
        e.O(0, [79048, 7849, 61669, 8310, 15790, 24384, 51288, 53069, 44429, 16764, 2739, 28376, 92971, 47023, 1744], function() {
            return e(e.s = 71740)
        }), _N_E = e.O()
    }
]);