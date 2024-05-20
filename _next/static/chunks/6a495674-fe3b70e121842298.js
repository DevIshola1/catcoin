"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15790], {
        80742: function(e, t, n) {
            let r;
            n.d(t, {
                a: function() {
                    return es
                },
                b: function() {
                    return N
                },
                bA: function() {
                    return em
                },
                bC: function() {
                    return eC
                },
                bD: function() {
                    return el
                },
                bH: function() {
                    return ey
                },
                bJ: function() {
                    return et
                },
                bK: function() {
                    return en
                },
                bO: function() {
                    return eb
                },
                bQ: function() {
                    return eI
                },
                bi: function() {
                    return eg
                },
                bj: function() {
                    return H
                },
                bk: function() {
                    return ev
                },
                by: function() {
                    return ep
                },
                c: function() {
                    return F
                },
                d: function() {
                    return R
                },
                e: function() {
                    return _
                },
                f: function() {
                    return q
                },
                g: function() {
                    return U
                },
                h: function() {
                    return $
                },
                l: function() {
                    return E
                },
                o: function() {
                    return ed
                },
                q: function() {
                    return eh
                },
                s: function() {
                    return ef
                },
                u: function() {
                    return O
                },
                v: function() {
                    return ew
                },
                y: function() {
                    return b
                }
            }), n(57159);
            var i = n(2265),
                a = n(27079),
                o = n(89565),
                c = n(48116),
                s = n(63939),
                u = n(59811),
                l = n(57437),
                d = n(42321),
                h = n(75898),
                f = n(95346),
                w = n(34190),
                g = n(76227),
                v = n(85149),
                p = (n(12045), n(92030)),
                m = n(89005),
                C = n(36242);
            n(75185);
            let y = (0, i.createContext)(void 0),
                I = (0, i.createContext)(void 0);

            function b() {
                return (0, i.useContext)(I)
            }
            let P = e => {
                    let t = e ? .getOptions();
                    return t && "walletConnectReceiver" in t && t.walletConnectReceiver
                },
                S = "lastConnectedWallet",
                T = new Map,
                W = new Map,
                k = (0, i.createContext)(void 0);

            function x(e, t) {
                let {
                    chains: n,
                    chainToConnect: a,
                    dAppMeta: o,
                    clientId: c,
                    activeChain: s
                } = e, [u, l] = (0, i.useState)(void 0), [d, h] = (0, i.useState)(t.connectionStatus), [f, g] = (0, i.useState)(), [v, p] = (0, i.useState)(), [m, C] = (0, i.useState)(), [y, I] = (0, i.useState)(void 0), [b, P] = (0, i.useState)(void 0), k = (0, i.useMemo)(() => ({
                    chains: n,
                    dappMetadata: o,
                    chain: s || n[0],
                    clientId: c
                }), [n, o, s, c]), x = (0, i.useCallback)(e => {
                    let t = e.create(k);
                    return t.walletId === w.w.magicLink && p(t), T.set(t, e), t
                }, [k]), j = (0, i.useCallback)(async function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    g(e);
                    let r = T.get(e);
                    if (!r) throw Error("Wallet config not found for given wallet instance. Do not create a wallet instance manually - use the useCreateWalletInstance() hook instead");
                    C(r), h("connected"), l(await e.getSigner());
                    let i = e.getPersonalWallet();
                    if (W.set(i, e), n) return;
                    let a = {
                            walletId: r.id,
                            connectParams: t || e.getConnectParams()
                        },
                        o = T.get(i);
                    i && o && (a.connectParams = { ...a.connectParams,
                        personalWallet: {
                            walletId: o.id,
                            connectParams: i.getConnectParams()
                        }
                    }), A(a)
                }, []), E = (0, i.useCallback)(async e => {
                    let t = await r.getItem(S);
                    if (t) try {
                        let n = JSON.parse(t);
                        n.connectParams ? n.connectParams.chainId = e : n.connectParams = {
                            chainId: e
                        }, await r.setItem(S, JSON.stringify(n))
                    } catch (e) {
                        console.error(`Error saving the last active chain: ${e}`)
                    }
                }, []), L = (0, i.useCallback)(async e => {
                    if (!f) throw Error("No active wallet");
                    await f.switchChain(e);
                    let t = await f.getSigner();
                    await E(e), l(t)
                }, [f, E]), Z = (0, i.useCallback)(async function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    let [r, i] = t, o = {
                        chainId: a ? .chainId,
                        ...i || {}
                    }, c = x(r);
                    h("connecting");
                    try {
                        r.id === w.w.magicLink && A({
                            walletId: r.id,
                            connectParams: o
                        }), await c.connect(o), j(c, o)
                    } catch (e) {
                        throw console.error(`Error connecting to wallet: ${e}`), h("disconnected"), e
                    }
                    return c
                }, [x, j, a]), M = (0, i.useCallback)(async () => {
                    await r.removeItem(S), h("disconnected"), l(void 0), g(void 0), C(void 0), I(void 0), P(void 0)
                }, []), O = (0, i.useCallback)(async () => {
                    if (!f) {
                        M();
                        return
                    }
                    let e = f.getPersonalWallet();
                    await f.disconnect(), e && await e ? .disconnect(), M()
                }, [f, M]);
                return (0, i.useEffect)(() => {
                    if (!f) {
                        l(void 0), I(void 0), P(void 0);
                        return
                    }
                    let e = async () => {
                        f.getSigner().then(l), f.getChainId().then(I), f.getAddress().then(P)
                    };
                    return e(), f.addListener("change", e), f.addListener("disconnect", M), () => {
                        f.removeListener("change", e), f.removeListener("disconnect", M)
                    }
                }, [f, M]), (0, i.useEffect)(() => {
                    f && f.updateChains(n)
                }, [f, n]), {
                    signer: u,
                    connectionStatus: d,
                    setConnectionStatus: h,
                    activeWallet: f,
                    createdWalletInstance: v,
                    activeWalletConfig: m,
                    createWalletInstance: x,
                    setConnectedWallet: j,
                    switchChain: L,
                    connectWallet: Z,
                    disconnectWallet: O,
                    chainId: y,
                    address: b
                }
            }

            function j(e) {
                let t = e.autoSwitch ? e.activeChain : void 0,
                    n = e.autoConnectTimeout || 15e3,
                    a = {
                        chains: e.chains,
                        dAppMeta: e.dAppMeta,
                        activeChain: e.activeChain,
                        clientId: e.clientId,
                        chainToConnect: t
                    },
                    {
                        signer: o,
                        connectionStatus: c,
                        setConnectionStatus: s,
                        activeWallet: u,
                        createdWalletInstance: d,
                        activeWalletConfig: h,
                        createWalletInstance: f,
                        setConnectedWallet: v,
                        switchChain: p,
                        connectWallet: m,
                        disconnectWallet: C
                    } = x(a, {
                        connectionStatus: "unknown"
                    }),
                    y = x(a, {
                        connectionStatus: "disconnected"
                    }),
                    [I, b] = (0, i.useState)(!1),
                    [j, E] = (0, i.useState)();
                r || (r = e.createWalletStorage("coordinatorStorage")), (0, i.useEffect)(() => {
                    if (!u) return;
                    let e = async () => {
                        let e = u ? .getOptions(),
                            t = new g.Wj({
                                walletConnectReceiver: { ...e ? .walletConnectReceiver === !0 ? {} : e ? .walletConnectReceiver
                                }
                            }, u);
                        await t.init(), E(t)
                    };
                    P(u) && e()
                }, [u]);
                let A = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    if (!A.current && (A.current = !0, !e.signerWallet && !u && "unknown" === c)) {
                        if (!1 === e.shouldAutoConnect) {
                            s("disconnected");
                            return
                        }!async function() {
                            let t;
                            let i = await L();
                            if (!i) {
                                s("disconnected");
                                return
                            }
                            let a = e.supportedWallets.find(e => e.id === i.walletId);
                            if (!a) {
                                s("disconnected");
                                return
                            }
                            let o = i.connectParams ? .personalWallet,
                                c = !1;
                            a.personalWallets && !o && (c = i.walletId !== w.w.magicLink || !i.connectParams || !("oauthProvider" in i.connectParams), o = {
                                walletId: i.walletId,
                                connectParams: i.connectParams
                            });
                            let u = o;
                            if (u) {
                                let e = (a.personalWallets || []).find(e => e.id === u.walletId);
                                if (e) {
                                    t = f(e);
                                    try {
                                        await Z(t.autoConnect(u.connectParams), {
                                            ms: n,
                                            message: M
                                        }), c && v(t, u.connectParams, !0)
                                    } catch (e) {
                                        console.error("Failed to auto connect personal wallet"), console.error(e), s("disconnected");
                                        return
                                    }
                                    i.connectParams = { ...i.connectParams,
                                        personalWallet: t
                                    }
                                } else {
                                    s("disconnected");
                                    return
                                }
                            }
                            let l = f(a);
                            try {
                                b(!0), s("connecting"), t && W.set(t, l), await Z(l.autoConnect(i.connectParams), {
                                    ms: n,
                                    message: M
                                }), c || v(l, i.connectParams, !0)
                            } catch (e) {
                                console.error("Failed to auto connect wallet"), console.error(e), e instanceof Error && e.message === M && r.removeItem(S), s("disconnected")
                            }
                            b(!1)
                        }()
                    }
                }, [f, e.supportedWallets, v, e.shouldAutoConnect, u, c, e.signerWallet, s, n]);
                let O = (0, i.useRef)();
                return (0, i.useEffect)(() => {
                    if (!e.signerWallet) {
                        O.current && (C(), O.current = void 0);
                        return
                    }
                    O.current !== e.signerWallet && (v(f(e.signerWallet)), O.current = e.signerWallet)
                }, [f, e.supportedWallets, v, e.signerWallet, C]), (0, l.jsx)(k.Provider, {
                    value: {
                        disconnect: C,
                        wallets: e.supportedWallets,
                        connect: m,
                        signer: o,
                        activeWallet: u,
                        activeWalletConfig: h,
                        connectionStatus: c,
                        setConnectionStatus: s,
                        createWalletInstance: f,
                        createdWalletInstance: d,
                        createWalletStorage: e.createWalletStorage,
                        switchChain: p,
                        setConnectedWallet: v,
                        activeChain: e.activeChain,
                        chainToConnect: t,
                        getWalletConfig: e => T.get(e),
                        getWrapperWallet: e => W.get(e),
                        activeChainSetExplicitly: e.activeChainSetExplicitly,
                        clientId: e.clientId,
                        walletConnectHandler: j,
                        personalWalletConnection: y,
                        isAutoConnecting: I
                    },
                    children: e.children
                })
            }

            function E() {
                let e = (0, i.useContext)(k);
                if (!e) throw Error("useWalletContext() can only be used inside <ThirdwebProvider />");
                return e
            }
            async function L() {
                let e = await r.getItem(S);
                if (!e) return null;
                try {
                    return JSON.parse(e)
                } catch {
                    return await r.removeItem(S), null
                }
            }
            async function A(e) {
                try {
                    await r.setItem(S, JSON.stringify(e))
                } catch (e) {
                    console.error("Error saving the last connected wallet info", e)
                }
            }

            function Z(e, t) {
                return new Promise((n, r) => {
                    let i = setTimeout(() => {
                        r(Error(t.message))
                    }, t.ms);
                    e.then(e => {
                        clearTimeout(i), n(e)
                    }, e => {
                        clearTimeout(i), r(e)
                    })
                })
            }
            let M = "Failed to Auto connect. Auto connect timed out. You can increase the timeout duration using the autoConnectTimeout prop on <ThirdwebProvider />";

            function O(e) {
                let t = E();
                (0, u.Z)(t, "useWallet() hook must be used within a <ThirdwebProvider/>");
                let n = t.activeWallet;
                if (n && (!e || n.walletId === e)) return n
            }

            function $() {
                let e = E();
                return (0, u.Z)(e, "useWallet() hook must be used within a <ThirdwebProvider/>"), e.activeWalletConfig
            }

            function U() {
                let e = E();
                return (0, u.Z)(e, "useWallets() hook must be used within a <ThirdwebProvider/>"), e.wallets
            }

            function N() {
                let e = E();
                return (0, u.Z)(e, "useConnect() hook must be used within a <ThirdwebProvider/>"), e.connect
            }

            function _() {
                let e = E();
                return (0, u.Z)(e, "useDisconnect() hook must be used within a <ThirdwebProvider/>"), e.disconnect
            }

            function F() {
                let e = E();
                return (0, u.Z)(e, "useConnectionStatus() must be used within a <ThirdwebProvider/>"), e.connectionStatus
            }

            function R() {
                let e = E();
                return (0, u.Z)(e, "useCreateWalletInstance() must be used within a <ThirdwebProvider/>"), e.createWalletInstance
            }

            function q() {
                let e = E();
                return (0, u.Z)(e, "useSwitchChain() must be used within a <ThirdwebProvider/>"), e.switchChain
            }
            let D = "auth_token_storage_key",
                J = "tw-cache";

            function K(e) {
                return [J, ...e.filter(e => "string" != typeof e || e !== J)]
            }
            let Q = {
                auth: {
                    user: () => K(["user"])
                },
                network: {
                    active: e => K(["chainId", e])
                },
                wallet: {
                    balance: (e, t, n) => {
                        var r;
                        return K((r = K(["balance", {
                            walletAddress: t,
                            tokenAddress: n
                        }]), K(Q.network.active(e).concat(r))))
                    }
                }
            };

            function H() {
                let e = (0, a.NL)(),
                    t = b(),
                    n = (0, o.D)({
                        mutationFn: async () => {
                            (0, u.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(t.authUrl, "Please specify an authUrl in the authConfig."), await fetch(`${t.authUrl}/logout`, {
                                method: "POST",
                                credentials: "include"
                            }), t.secureStorage ? .removeItem(D), e.invalidateQueries(Q.auth.user())
                        }
                    });
                return {
                    logout: n.mutateAsync,
                    isLoading: n.isLoading
                }
            }
            let Y = e => {
                let {
                    value: t,
                    children: n
                } = e, r = (0, i.useMemo)(() => {
                    if (t) return { ...t,
                        authUrl: t.authUrl ? .replace(/\/$/, "")
                    }
                }, [t]);
                return (0, l.jsxs)(I.Provider, {
                    value: r,
                    children: [n, (0, l.jsx)(z, {})]
                })
            };

            function z() {
                let e = O(),
                    {
                        logout: t
                    } = H(),
                    {
                        switchAccount: n
                    } = function() {
                        let e = (0, a.NL)(),
                            t = b(),
                            n = (0, o.D)({
                                mutationFn: async n => {
                                    (0, u.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(t.authUrl, "Please specify an authUrl in the authConfig."), await fetch(`${t.authUrl}/switch-account`, {
                                        method: "POST",
                                        credentials: "include",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            address: n
                                        })
                                    }), e.invalidateQueries(Q.auth.user())
                                }
                            });
                        return {
                            switchAccount: n.mutateAsync,
                            isLoading: n.isLoading
                        }
                    }(),
                    r = b(),
                    c = (0, a.NL)();
                return (0, i.useEffect)(() => {
                    let i = async e => {
                            if (e.address) try {
                                await n(e.address)
                            } catch (t) {
                                console.debug(`[Auth] Failed to switch account to ${e.address} with error:
`, t)
                            }
                        },
                        a = async () => {
                            try {
                                await t()
                            } catch (e) {
                                console.debug(`[Auth] Failed to logout with error:
`, e)
                            }
                        },
                        o = !!e && r && r.authUrl;
                    return o && (e.addListener("connect", i), e.addListener("change", i), e.addListener("disconnect", a)), () => {
                        o && (e.removeListener("connect", i), e.removeListener("change", i), e.removeListener("disconnect", a))
                    }
                }, [e, c, r, t, n]), null
            }

            function B(e, t, n) {
                return [(0, i.useMemo)(() => e.map(e => (0, d.nRj)(e, n)), [e, n]), (0, i.useMemo)(() => t && "string" != typeof t && "number" != typeof t ? (0, d.nRj)(t, n) : t, [t, n])]
            }
            let V = e => {
                    let {
                        queryClient: t,
                        children: n
                    } = e, r = (0, i.useMemo)(() => t || new c.S, [t]);
                    return (0, l.jsx)(a.aH, {
                        client: r,
                        children: n
                    })
                },
                G = (0, i.createContext)(void 0),
                X = e => {
                    let {
                        value: t,
                        children: n
                    } = e;
                    return (0, l.jsx)(G.Provider, {
                        value: t,
                        children: n
                    })
                },
                ee = (0, i.createContext)({});

            function et() {
                let {
                    sdk: e
                } = function() {
                    let e = (0, i.useContext)(ee);
                    return (0, u.Z)(e._inProvider, "useSDK must be called from within a ThirdwebProvider, did you forget to wrap your app in a <ThirdwebProvider />?"), e
                }();
                return e
            }

            function en() {
                let e = et();
                return e ? ._chainId
            }
            let er = {
                    wallet: void 0,
                    address: void 0,
                    chainId: void 0,
                    signer: void 0
                },
                ei = (0, i.createContext)(void 0),
                ea = e => {
                    let {
                        signer: t,
                        children: n
                    } = e, {
                        chains: r,
                        clientId: a
                    } = function() {
                        let e = (0, i.useContext)(G);
                        return (0, u.Z)(e, "useThirdwebConfigContext() hook must be used within a <ThirdwebProvider/>"), e
                    }(), o = et() ? .storage, [c, s] = (0, i.useState)({ ...er,
                        signer: t || void 0
                    });
                    return (0, i.useEffect)(() => {
                        s(e => ({ ...e,
                            signer: t || void 0
                        }))
                    }, [t]), (0, i.useEffect)(() => {
                        if (!o) return;
                        let e = t;
                        return t ? Promise.all([t.getAddress(), t.getChainId()]).then(n => {
                            let i, [c, u] = n,
                                l = r.find(e => e.chainId === u);
                            if (l) try {
                                i = (0, d.OZ$)(l, a)[0]
                            } catch (e) {
                                console.error(e)
                            }
                            t === e && s({
                                wallet: new f.U(t, {
                                    readonlySettings: i ? {
                                        rpcUrl: i,
                                        chainId: u
                                    } : void 0
                                }, o),
                                address: c,
                                chainId: u,
                                signer: t
                            })
                        }).catch(e => {}) : s(er), () => {
                            e = void 0
                        }
                    }, [t, a]), (0, l.jsx)(ei.Provider, {
                        value: c,
                        children: n
                    })
                },
                eo = e => {
                    let {
                        sdkOptions: t = {},
                        storageInterface: n,
                        supportedChains: r,
                        activeChain: a,
                        signer: o,
                        children: c,
                        clientId: s,
                        secretKey: u
                    } = e, f = (0, i.useMemo)(() => a ? "number" == typeof a ? a : "string" == typeof a ? r.find(e => e.slug === a) ? .chainId : a.chainId : r[0] ? .chainId, [a, r]), w = (0, i.useMemo)(() => {
                        let e, i, a = f,
                            o = r.find(e => e.chainId === a);
                        if (o || void 0 === a || (console.warn(`The chainId ${a} is not in the configured chains, please add it to the ThirdwebProvider`), a = void 0), o && o.rpc.length > 0) try {
                            let t = (0, d.OZ$)(o, s)[0];
                            e = {
                                chainId: o.chainId,
                                rpcUrl: t
                            }
                        } catch (e) {}
                        let c = {
                            readonlySettings: e,
                            ...t,
                            supportedChains: r
                        };
                        if (a && (i = new h.x9T(a, { ...c,
                                clientId: s,
                                secretKey: u
                            }, n)), !i) {
                            if (r.length > 0) a = r[0].chainId, i = new h.x9T(a, c, n);
                            else {
                                console.error("No chains configured, please pass a chain or chains to the ThirdwebProvider");
                                return
                            }
                        }
                        return i._chainId = a, i
                    }, [f, r, t, n, s, u]);
                    (0, i.useEffect)(() => {
                        w && w._chainId === f && (o ? w.updateSignerOrProvider(o) : f && w.updateSignerOrProvider(f))
                    }, [w, w ? ._chainId, o, f]);
                    let g = (0, i.useMemo)(() => ({
                        sdk: w && w._chainId === f ? w : void 0,
                        _inProvider: !0
                    }), [f, w]);
                    return (0, l.jsx)(ee.Provider, {
                        value: g,
                        children: c
                    })
                },
                ec = e => {
                    let {
                        signer: t,
                        children: n,
                        queryClient: r,
                        supportedChains: a,
                        activeChain: o,
                        clientId: c,
                        ...s
                    } = e;
                    c || (0, f.c)("No API key. Please provide a clientId. It is required to access thirdweb's services. You can create a key at https://thirdweb.com/create-api-key", c, void 0);
                    let u = a || d.gL9,
                        h = (0, i.useMemo)(() => "object" == typeof o && null !== o ? u.find(e => e.chainId === o.chainId) ? u.map(e => e.chainId === o.chainId ? o : e) : [...u, o] : u, [u, o]),
                        [w, g] = B(h, o || h[0], c),
                        v = (0, i.useMemo)(() => g && "string" != typeof g && "number" != typeof g ? [...w.filter(e => e.chainId !== g.chainId), g].filter((e, t, n) => t === n.findIndex(t => t.chainId === e.chainId)) : w, [w, g]);
                    return (0, l.jsx)(X, {
                        value: {
                            chains: v,
                            clientId: c
                        },
                        children: (0, l.jsx)(V, {
                            queryClient: r,
                            children: (0, l.jsx)(eo, {
                                signer: t,
                                supportedChains: v,
                                clientId: c,
                                activeChain: g,
                                ...s,
                                children: (0, l.jsx)(ea, {
                                    signer: t,
                                    children: n
                                })
                            })
                        })
                    })
                },
                es = e => {
                    let {
                        activeChain: t,
                        createWalletStorage: n = v.c
                    } = e, r = e.supportedChains || d.gL9, a = (0, i.useMemo)(() => "object" == typeof t && null !== t ? r.find(e => e.chainId === t.chainId) ? r.map(e => e.chainId === t.chainId ? t : e) : [...r, t] : r, [r, t]), [o, c] = B(a, e.activeChain || a[0], e.clientId), s = (0, i.useMemo)(() => {
                        if ("number" == typeof c) {
                            let e = o.find(e => e.chainId === c);
                            if (!e) throw Error(`Invalid chainId: ${c}. It is not one of supportedChains`);
                            return e
                        }
                        if ("string" == typeof c) {
                            let e = o.find(e => e.slug === c);
                            if (!e) throw Error(`Invalid chain: "${c}". It is not one of supportedChains`);
                            return e
                        }
                        return c
                    }, [c, o]), u = e.dAppMeta;
                    return (0, l.jsx)(y.Provider, {
                        value: e.theme,
                        children: (0, l.jsx)(j, {
                            chains: o,
                            supportedWallets: e.supportedWallets,
                            shouldAutoConnect: e.autoConnect,
                            createWalletStorage: n,
                            dAppMeta: u,
                            activeChain: s,
                            autoSwitch: e.autoSwitch,
                            autoConnectTimeout: e.autoConnectTimeout,
                            clientId: e.clientId,
                            activeChainSetExplicitly: !!e.activeChain,
                            signerWallet: e.signerWallet,
                            children: (0, l.jsx)(eu, {
                                queryClient: e.queryClient,
                                sdkOptions: e.sdkOptions,
                                supportedChains: o,
                                activeChain: s,
                                storageInterface: e.storageInterface,
                                authConfig: e.authConfig,
                                clientId: e.clientId,
                                secretKey: e.secretKey,
                                children: (0, l.jsx)(Y, {
                                    value: e.authConfig,
                                    children: e.children
                                })
                            })
                        })
                    })
                },
                eu = e => {
                    let {
                        children: t,
                        ...n
                    } = e, r = E() ? .signer;
                    return (0, l.jsx)(ec, {
                        signer: r,
                        ...n,
                        children: t
                    })
                };

            function el() {
                let e = (0, i.useContext)(G);
                return (0, u.Z)(e, "useSupportedChains() hook must be used within a <ThirdwebProvider/>"), e.chains
            }

            function ed(e) {
                let t = eh(),
                    {
                        wallet: n,
                        address: r,
                        chainId: a
                    } = function() {
                        let e = (0, i.useContext)(ei);
                        return (0, u.Z)(e, "useThirdwebConnectedWalletContext() hook must be used within a <ThirdwebProvider/>"), e
                    }(),
                    o = (0, i.useMemo)(() => Q.wallet.balance(a || -1, r, e), [a, e, r]);
                return (0, s.a)(o, () => n ? .balance(e), {
                    enabled: !!n && !!t && !!a,
                    retry: !0,
                    keepPreviousData: !1
                })
            }

            function eh() {
                let e = (0, i.useContext)(ei);
                return (0, u.Z)(e, "useAddress() hook must be used within a <ThirdwebProvider/>"), e.address
            }

            function ef() {
                let e = (0, i.useContext)(ei);
                return (0, u.Z)(e, "useChainId() hook must be used within a <ThirdwebProvider/>"), e.chainId
            }

            function ew() {
                let e = ef(),
                    t = el(),
                    n = (0, i.useMemo)(() => t.find(t => t.chainId === e), [e, t]),
                    r = (0, i.useMemo)(() => {
                        if (!n) return d.gL9.find(t => t.chainId === e)
                    }, [e, n]);
                return n || r
            }

            function eg() {
                let e = (0, a.NL)(),
                    t = b(),
                    n = O(),
                    r = (0, o.D)({
                        mutationFn: async () => {
                            let r;
                            (0, u.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(n, "You need a connected wallet to login."), (0, u.Z)(t.authUrl, "Please specify an authUrl in the authConfig.");
                            let i = await n.getAddress(),
                                a = await n.getChainId(),
                                o = await fetch(`${t.authUrl}/payload`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        address: i,
                                        chainId: a.toString()
                                    })
                                });
                            if (!o.ok) throw Error(`Failed to get payload with status code ${o.status}`);
                            try {
                                ({
                                    payload: r
                                } = await o.json())
                            } catch {
                                throw Error("Failed to get payload")
                            }
                            let c = await (0, C.s)({
                                wallet: n,
                                payload: r
                            });
                            if (!(o = await fetch(`${t.authUrl}/login`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        payload: c
                                    }),
                                    credentials: "include"
                                })).ok) {
                                let e = await o.json();
                                if (e.error) throw Error(e.error);
                                throw Error(`Login request failed with status code ${o.status}`)
                            }
                            let {
                                token: s
                            } = await o.json();
                            return await t.secureStorage ? .setItem(D, s), e.invalidateQueries(Q.auth.user()), s
                        }
                    });
                return {
                    login: () => r.mutateAsync(),
                    isLoading: r.isLoading
                }
            }

            function ev() {
                let e = b(),
                    {
                        data: t,
                        isLoading: n
                    } = (0, s.a)(Q.auth.user(), async () => {
                        (0, u.Z)(e, "Please specify an authConfig in the ThirdwebProvider"), (0, u.Z)(e.authUrl, "Please specify an authUrl in the authConfig.");
                        let t = await e.secureStorage ? .getItem(D),
                            n = {
                                credentials: "include",
                                ...t ? {
                                    headers: {
                                        Authorization: `Bearer ${t}`
                                    }
                                } : {}
                            },
                            r = await fetch(`${e.authUrl}/user`, n);
                        return await r.json()
                    }, {
                        enabled: !!e
                    });
                return {
                    user: t,
                    isLoggedIn: !!t,
                    isLoading: n
                }
            }

            function ep() {
                let e = et();
                return e ? .storage
            }

            function em() {
                let e = ef(),
                    t = en();
                return !!t && -1 !== t && !!e && t !== e
            }

            function eC() {
                let e = (0, i.useContext)(ei);
                return (0, u.Z)(e, "useSigner() hook must be used within a <ThirdwebProvider/>"), e.signer
            }

            function ey() {
                let e = eh(),
                    t = el(),
                    {
                        clientId: n
                    } = E(),
                    r = t.find(e => 1 === e.chainId);
                return (0, s.a)({
                    queryKey: ["ens", e, r ? .rpc],
                    cacheTime: 864e5,
                    staleTime: 36e5,
                    retry: !1,
                    enabled: !!e,
                    queryFn: async () => {
                        if (!e) return null;
                        let t = (0, h.rV4)(1, {
                            clientId: n,
                            supportedChains: r ? [{
                                chainId: 1,
                                rpc: [...r.rpc],
                                nativeCurrency: r.nativeCurrency,
                                slug: r.slug
                            }] : void 0
                        });
                        if (t instanceof p.r) {
                            let [n, r] = await Promise.all([t.lookupAddress(e), t.getAvatar(e)]);
                            return {
                                ens: n,
                                avatarUrl: r
                            }
                        }
                        return {
                            ens: await t.lookupAddress(e),
                            avatarUrl: null
                        }
                    }
                })
            }

            function eI(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return `${e.substring(0,t?4:6)}...${e.substring(e.length-(t?3:4))}`
            }

            function eb(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!e) return "";
                try {
                    let n = m.getAddress(e);
                    return eI(n, t)
                } catch {
                    return e
                }
            }
        }
    }
]);