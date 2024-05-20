"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7849], {
        71759: function(t, e, a) {
            a.d(e, {
                IsU: function() {
                    return o
                },
                Lll: function() {
                    return c
                },
                M8s: function() {
                    return p
                },
                Nj4: function() {
                    return h
                },
                OZ$: function() {
                    return g
                },
                WNf: function() {
                    return n
                },
                XYF: function() {
                    return i
                },
                ZfX: function() {
                    return u
                },
                _dw: function() {
                    return m
                },
                eEd: function() {
                    return l
                },
                gL9: function() {
                    return b
                },
                mgq: function() {
                    return r
                },
                qry: function() {
                    return s
                },
                rBG: function() {
                    return d
                }
            });
            var s = {
                    chain: "ETH",
                    chainId: 10,
                    explorers: [{
                        name: "etherscan",
                        url: "https://optimistic.etherscan.io",
                        standard: "EIP3091"
                    }, {
                        name: "blockscout",
                        url: "https://optimism.blockscout.com",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                            width: 551,
                            height: 540,
                            format: "png"
                        }
                    }, {
                        name: "dexguru",
                        url: "https://optimism.dex.guru",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                            width: 83,
                            height: 82,
                            format: "svg"
                        }
                    }],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://optimism.io",
                    name: "OP Mainnet",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 10,
                    redFlags: [],
                    rpc: ["https://10.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://mainnet.optimism.io", "https://optimism.publicnode.com", "wss://optimism.publicnode.com", "https://optimism.gateway.tenderly.co", "wss://optimism.gateway.tenderly.co", "https://optimism-rpc.publicnode.com", "wss://optimism-rpc.publicnode.com", "https://optimism.drpc.org", "wss://optimism.drpc.org"],
                    shortName: "oeth",
                    slug: "optimism",
                    testnet: !1
                },
                r = {
                    chain: "Polygon",
                    chainId: 137,
                    explorers: [{
                        name: "polygonscan",
                        url: "https://polygonscan.com",
                        standard: "EIP3091"
                    }, {
                        name: "dexguru",
                        url: "https://polygon.dex.guru",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                            width: 83,
                            height: 82,
                            format: "svg"
                        }
                    }],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://polygon.technology/",
                    name: "Polygon Mainnet",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    networkId: 137,
                    redFlags: [],
                    rpc: ["https://137.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor-rpc.publicnode.com", "wss://polygon-bor-rpc.publicnode.com", "https://polygon.gateway.tenderly.co", "wss://polygon.gateway.tenderly.co", "https://polygon.drpc.org", "wss://polygon.drpc.org"],
                    shortName: "matic",
                    slip44: 966,
                    slug: "polygon",
                    testnet: !1
                },
                n = {
                    chain: "Flag",
                    chainId: 220,
                    explorers: [{
                        name: "flagscan",
                        url: "https://scan.flagscan.io",
                        standard: "EIP3091"
                    }],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmXo2p1i4zsbTNEu41EjjrhdmbKFDGHEHeADXZ3x2fgNKE/1682003789585.jpeg",
                        width: 200,
                        height: 200,
                        format: "jpeg"
                    },
                    infoURL: "https://flagblockchain.com/",
                    name: "Flag Mainnet",
                    nativeCurrency: {
                        name: "Flag",
                        symbol: "Flag",
                        decimals: 18
                    },
                    networkId: 220,
                    redFlags: [],
                    rpc: ["https://220.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.flagscan.io/"],
                    shortName: "Flag",
                    slug: "flag",
                    testnet: !1
                },
                o = {
                    chain: "1220",
                    chainId: 1220,
                    explorers: [],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmXo2p1i4zsbTNEu41EjjrhdmbKFDGHEHeADXZ3x2fgNKE/1682003789585.jpeg",
                        width: 3600,
                        height: 3600,
                        format: "jpeg"
                    },
                    infoURL: "https://flagblockchain.com/",
                    name: "Flag Testnet",
                    nativeCurrency: {
                        name: "FLAG",
                        symbol: "FLAG",
                        decimals: 18
                    },
                    networkId: 1220,
                    redFlags: [],
                    rpc: ["https://1220.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.flagscan.io"],
                    shortName: "Flag",
                    slug: "flag-testnet",
                    testnet: !0
                },
                i = {
                    chain: "ETH",
                    chainId: 8453,
                    explorers: [{
                        name: "basescan",
                        url: "https://basescan.org",
                        standard: "none"
                    }, {
                        name: "basescout",
                        url: "https://base.blockscout.com",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                            width: 551,
                            height: 540,
                            format: "png"
                        }
                    }, {
                        name: "dexguru",
                        url: "https://base.dex.guru",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                            width: 83,
                            height: 82,
                            format: "svg"
                        }
                    }],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://base.org",
                    name: "Base",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 8453,
                    redFlags: [],
                    rpc: ["https://8453.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.base.org/", "https://developer-access-mainnet.base.org/", "https://base.gateway.tenderly.co", "wss://base.gateway.tenderly.co", "https://base-rpc.publicnode.com", "wss://base-rpc.publicnode.com"],
                    shortName: "base",
                    slug: "base",
                    status: "active",
                    testnet: !1
                },
                c = {
                    chain: "CELO",
                    chainId: 42220,
                    explorers: [{
                        name: "blockscout",
                        url: "https://explorer.celo.org",
                        standard: "none"
                    }, {
                        name: "Celoscan",
                        url: "https://celoscan.io",
                        standard: "EIP3091"
                    }],
                    faucets: [],
                    infoURL: "https://docs.celo.org/",
                    name: "Celo Mainnet",
                    nativeCurrency: {
                        name: "CELO",
                        symbol: "CELO",
                        decimals: 18
                    },
                    networkId: 42220,
                    rpc: ["https://42220.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://forno.celo.org", "wss://forno.celo.org/ws"],
                    shortName: "celo",
                    slug: "celo",
                    testnet: !1
                },
                p = {
                    chain: "CELO",
                    chainId: 44787,
                    explorers: [{
                        name: "Alfajoresscan",
                        url: "https://alfajores.celoscan.io",
                        standard: "EIP3091"
                    }],
                    faucets: ["https://celo.org/developers/faucet", "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],
                    features: [],
                    infoURL: "https://docs.celo.org/",
                    name: "Celo Alfajores Testnet",
                    nativeCurrency: {
                        name: "CELO",
                        symbol: "CELO",
                        decimals: 18
                    },
                    networkId: 44787,
                    redFlags: [],
                    rpc: ["https://44787.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://alfajores-forno.celo-testnet.org", "wss://alfajores-forno.celo-testnet.org/ws"],
                    shortName: "ALFA",
                    slip44: 1,
                    slug: "celo-alfajores-testnet",
                    testnet: !0
                },
                h = {
                    chain: "Polygon",
                    chainId: 80001,
                    explorers: [{
                        name: "polygonscan",
                        url: "https://mumbai.polygonscan.com",
                        standard: "EIP3091"
                    }],
                    faucets: ["https://faucet.polygon.technology/"],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://polygon.technology/",
                    name: "Mumbai",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    networkId: 80001,
                    redFlags: [],
                    rpc: ["https://80001.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mumbai.maticvigil.com", "https://polygon-mumbai-bor-rpc.publicnode.com", "wss://polygon-mumbai-bor-rpc.publicnode.com", "https://polygon-mumbai.gateway.tenderly.co", "wss://polygon-mumbai.gateway.tenderly.co"],
                    shortName: "maticmum",
                    slip44: 1,
                    slug: "mumbai",
                    status: "deprecated",
                    testnet: !0,
                    title: "Polygon Testnet Mumbai"
                },
                m = {
                    chain: "ETH",
                    chainId: 84532,
                    explorers: [{
                        name: "basescout",
                        url: "https://base-sepolia.blockscout.com",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                            width: 551,
                            height: 540,
                            format: "png"
                        }
                    }],
                    faucets: [],
                    icon: {
                        url: "ipfs://QmaxRoHpxZd8PqccAynherrMznMufG6sdmHZLihkECXmZv",
                        width: 1200,
                        height: 1200,
                        format: "png"
                    },
                    infoURL: "https://base.org",
                    name: "Base Sepolia Testnet",
                    nativeCurrency: {
                        name: "Sepolia Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 84532,
                    rpc: ["https://84532.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sepolia.base.org", "https://base-sepolia-rpc.publicnode.com", "wss://base-sepolia-rpc.publicnode.com"],
                    shortName: "basesep",
                    slip44: 1,
                    slug: "base-sepolia-testnet",
                    testnet: !0
                },
                l = {
                    chain: "ETH",
                    chainId: 7777777,
                    explorers: [{
                        name: "Zora Network Explorer",
                        url: "https://explorer.zora.energy",
                        standard: "EIP3091"
                    }],
                    faucets: [],
                    features: [],
                    icon: {
                        url: "ipfs://QmZ6qaRwTPFEZUspwMUjaxC6KhmzcELdRQcQzS3P72Dzts/Vector.svg",
                        width: 512,
                        height: 512,
                        format: "svg"
                    },
                    infoURL: "https://zora.energy",
                    name: "Zora",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 7777777,
                    redFlags: [],
                    rpc: ["https://7777777.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.zora.energy/"],
                    shortName: "zora",
                    slug: "zora",
                    testnet: !1
                },
                u = {
                    chain: "ETH",
                    chainId: 11155420,
                    explorers: [{
                        name: "opscout",
                        url: "https://optimism-sepolia.blockscout.com",
                        standard: "EIP3091",
                        icon: {
                            url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                            width: 551,
                            height: 540,
                            format: "png"
                        }
                    }],
                    faucets: ["https://app.optimism.io/faucet"],
                    features: [],
                    icon: {
                        url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
                        width: 512,
                        height: 512,
                        format: "png"
                    },
                    infoURL: "https://optimism.io",
                    name: "OP Sepolia Testnet",
                    nativeCurrency: {
                        name: "Sepolia Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 11155420,
                    redFlags: [],
                    rpc: ["https://11155420.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sepolia.optimism.io", "https://optimism-sepolia.drpc.org", "wss://optimism-sepolia.drpc.org"],
                    shortName: "opsep",
                    slip44: 1,
                    slug: "op-sepolia-testnet",
                    testnet: !0
                },
                d = {
                    chain: "ETH",
                    chainId: 999999999,
                    explorers: [{
                        name: "Zora Sepolia Testnet Network Explorer",
                        url: "https://sepolia.explorer.zora.energy",
                        standard: "EIP3091"
                    }],
                    faucets: [],
                    icon: {
                        url: "ipfs://bafkreifvrly5tgd34xqeo67s4etmiu52bkroml7uy7eosizf57htf5nrzq",
                        width: 250,
                        height: 250,
                        format: "png"
                    },
                    infoURL: "https://zora.energy",
                    name: "Zora Sepolia Testnet",
                    nativeCurrency: {
                        name: "Sepolia Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    networkId: 999999999,
                    rpc: ["https://999999999.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sepolia.rpc.zora.energy"],
                    shortName: "zsep",
                    slip44: 1,
                    slug: "zora-sepolia-testnet",
                    testnet: !0
                };

            function g(t, e) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "http",
                    s = [];
                if (t.rpc.forEach(t => {
                        if (("http" !== a || t.startsWith("http")) && ("ws" !== a || t.startsWith("ws"))) {
                            if (t.includes("${THIRDWEB_API_KEY}")) e ? s.push(t.replace("${THIRDWEB_API_KEY}", e) + ("undefined" != typeof globalThis && "APP_BUNDLE_ID" in globalThis && globalThis.APP_BUNDLE_ID ? `/?bundleId=${globalThis.APP_BUNDLE_ID}` : "")) : s.push(t.replace("${THIRDWEB_API_KEY}", ""));
                            else {
                                if (t.includes("${")) return;
                                s.push(t)
                            }
                        }
                    }), 0 === s.length) throw Error(`No RPC available for chainId "${t.chainId}" with mode ${a}`);
                return s
            }
            let b = [{
                chain: "ETH",
                chainId: 1,
                ens: {
                    registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                },
                explorers: [{
                    name: "etherscan",
                    url: "https://etherscan.io",
                    standard: "EIP3091"
                }, {
                    name: "blockscout",
                    url: "https://eth.blockscout.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM",
                        width: 551,
                        height: 540,
                        format: "png"
                    }
                }, {
                    name: "dexguru",
                    url: "https://ethereum.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [{
                    name: "EIP155"
                }, {
                    name: "EIP1559"
                }],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://ethereum.org",
                name: "Ethereum Mainnet",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 1,
                redFlags: [],
                rpc: ["https://1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum-rpc.publicnode.com", "wss://ethereum-rpc.publicnode.com", "https://mainnet.gateway.tenderly.co", "wss://mainnet.gateway.tenderly.co", "https://rpc.blocknative.com/boost", "https://rpc.flashbots.net", "https://rpc.flashbots.net/fast", "https://rpc.mevblocker.io", "https://rpc.mevblocker.io/fast", "https://rpc.mevblocker.io/noreverts", "https://rpc.mevblocker.io/fullprivacy", "https://eth.drpc.org", "wss://eth.drpc.org"],
                shortName: "eth",
                slip44: 60,
                slug: "ethereum",
                testnet: !1
            }, {
                chain: "ETH",
                chainId: 11155111,
                explorers: [{
                    name: "etherscan-sepolia",
                    url: "https://sepolia.etherscan.io",
                    standard: "EIP3091"
                }, {
                    name: "otterscan-sepolia",
                    url: "https://sepolia.otterscan.io",
                    standard: "EIP3091"
                }],
                faucets: ["http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://sepolia.otterscan.io",
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 11155111,
                redFlags: [],
                rpc: ["https://11155111.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sepolia.infura.io/v3/${INFURA_API_KEY}", "wss://sepolia.infura.io/v3/${INFURA_API_KEY}", "https://rpc.sepolia.org", "https://rpc2.sepolia.org", "https://rpc-sepolia.rockx.com", "https://rpc.sepolia.ethpandaops.io", "https://sepolia.gateway.tenderly.co", "wss://sepolia.gateway.tenderly.co", "https://ethereum-sepolia-rpc.publicnode.com", "wss://ethereum-sepolia-rpc.publicnode.com", "https://sepolia.drpc.org", "wss://sepolia.drpc.org"],
                shortName: "sep",
                slip44: 1,
                slug: "sepolia",
                testnet: !0,
                title: "Ethereum Testnet Sepolia"
            }, i, m, r, h, {
                chain: "ETH",
                chainId: 42161,
                explorers: [{
                    name: "Arbiscan",
                    url: "https://arbiscan.io",
                    standard: "EIP3091"
                }, {
                    name: "Arbitrum Explorer",
                    url: "https://explorer.arbitrum.io",
                    standard: "EIP3091"
                }, {
                    name: "dexguru",
                    url: "https://arbitrum.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://arbitrum.io",
                name: "Arbitrum One",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 42161,
                parent: {
                    type: "L2",
                    chain: "eip155-1",
                    bridges: [{
                        url: "https://bridge.arbitrum.io"
                    }]
                },
                redFlags: [],
                rpc: ["https://42161.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc", "https://arbitrum-one.publicnode.com", "wss://arbitrum-one.publicnode.com"],
                shortName: "arb1",
                slug: "arbitrum",
                testnet: !1
            }, {
                chain: "ETH",
                chainId: 421614,
                explorers: [{
                    name: "Arbitrum Sepolia Rollup Testnet Explorer",
                    url: "https://sepolia-explorer.arbitrum.io",
                    standard: "EIP3091"
                }],
                faucets: [],
                infoURL: "https://arbitrum.io",
                name: "Arbitrum Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 421614,
                parent: {
                    type: "L2",
                    chain: "eip155-11155111",
                    bridges: [{
                        url: "https://bridge.arbitrum.io"
                    }]
                },
                rpc: ["https://421614.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sepolia-rollup.arbitrum.io/rpc", "https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}"],
                shortName: "arb-sep",
                slip44: 1,
                slug: "arbitrum-sepolia",
                testnet: !0,
                title: "Arbitrum Sepolia Rollup Testnet"
            }, s, u, {
                chain: "BSC",
                chainId: 56,
                explorers: [{
                    name: "bscscan",
                    url: "https://bscscan.com",
                    standard: "EIP3091"
                }, {
                    name: "dexguru",
                    url: "https://bnb.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://www.bnbchain.org/en",
                name: "BNB Smart Chain Mainnet",
                nativeCurrency: {
                    name: "BNB Chain Native Token",
                    symbol: "BNB",
                    decimals: 18
                },
                networkId: 56,
                redFlags: [],
                rpc: ["https://56.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bsc-dataseed1.bnbchain.org", "https://bsc-dataseed2.bnbchain.org", "https://bsc-dataseed3.bnbchain.org", "https://bsc-dataseed4.bnbchain.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "https://bsc-rpc.publicnode.com", "wss://bsc-rpc.publicnode.com", "wss://bsc-ws-node.nariox.org"],
                shortName: "bnb",
                slip44: 714,
                slug: "binance",
                testnet: !1
            }, {
                chain: "BSC",
                chainId: 97,
                explorers: [{
                    name: "bscscan-testnet",
                    url: "https://testnet.bscscan.com",
                    standard: "EIP3091"
                }],
                faucets: ["https://testnet.bnbchain.org/faucet-smart"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://www.bnbchain.org/en",
                name: "BNB Smart Chain Testnet",
                nativeCurrency: {
                    name: "BNB Chain Native Token",
                    symbol: "tBNB",
                    decimals: 18
                },
                networkId: 97,
                redFlags: [],
                rpc: ["https://97.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://data-seed-prebsc-1-s1.bnbchain.org:8545", "https://data-seed-prebsc-2-s1.bnbchain.org:8545", "https://data-seed-prebsc-1-s2.bnbchain.org:8545", "https://data-seed-prebsc-2-s2.bnbchain.org:8545", "https://data-seed-prebsc-1-s3.bnbchain.org:8545", "https://data-seed-prebsc-2-s3.bnbchain.org:8545", "https://bsc-testnet-rpc.publicnode.com", "wss://bsc-testnet-rpc.publicnode.com"],
                shortName: "bnbt",
                slip44: 1,
                slug: "binance-testnet",
                testnet: !0
            }, {
                chain: "FTM",
                chainId: 250,
                explorers: [{
                    name: "ftmscan",
                    url: "https://ftmscan.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf",
                        width: 73,
                        height: 73,
                        format: "png"
                    }
                }, {
                    name: "dexguru",
                    url: "https://fantom.dex.guru",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne",
                        width: 83,
                        height: 82,
                        format: "svg"
                    }
                }],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://fantom.foundation",
                name: "Fantom Opera",
                nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18
                },
                networkId: 250,
                redFlags: [],
                rpc: ["https://250.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ftm.tools", "https://fantom-rpc.publicnode.com", "wss://fantom-rpc.publicnode.com", "https://fantom.drpc.org", "wss://fantom.drpc.org"],
                shortName: "ftm",
                slug: "fantom",
                testnet: !1
            }, {
                chain: "FTM",
                chainId: 4002,
                explorers: [{
                    name: "ftmscan",
                    url: "https://testnet.ftmscan.com",
                    standard: "EIP3091",
                    icon: {
                        url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf",
                        width: 73,
                        height: 73,
                        format: "png"
                    }
                }],
                faucets: ["https://faucet.fantom.network"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
                name: "Fantom Testnet",
                nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18
                },
                networkId: 4002,
                redFlags: [],
                rpc: ["https://4002.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.fantom.network", "https://fantom-testnet-rpc.publicnode.com", "wss://fantom-testnet-rpc.publicnode.com", "https://fantom-testnet.drpc.org", "wss://fantom-testnet.drpc.org"],
                shortName: "tftm",
                slip44: 1,
                slug: "fantom-testnet",
                testnet: !0
            }, {
                chain: "AVAX",
                chainId: 43114,
                explorers: [{
                    name: "snowtrace",
                    url: "https://snowtrace.io",
                    standard: "EIP3091"
                }],
                faucets: [],
                features: [{
                    name: "EIP1559"
                }],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://www.avax.network/",
                name: "Avalanche C-Chain",
                nativeCurrency: {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18
                },
                networkId: 43114,
                redFlags: [],
                rpc: ["https://43114.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain-rpc.publicnode.com", "wss://avalanche-c-chain-rpc.publicnode.com"],
                shortName: "avax",
                slip44: 9005,
                slug: "avalanche",
                testnet: !1
            }, {
                chain: "AVAX",
                chainId: 43113,
                explorers: [{
                    name: "snowtrace",
                    url: "https://testnet.snowtrace.io",
                    standard: "EIP3091"
                }],
                faucets: ["https://faucet.avax-test.network/"],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                infoURL: "https://cchain.explorer.avax-test.network",
                name: "Avalanche Fuji Testnet",
                nativeCurrency: {
                    name: "Avalanche",
                    symbol: "AVAX",
                    decimals: 18
                },
                networkId: 43113,
                redFlags: [],
                rpc: ["https://43113.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc", "https://avalanche-fuji-c-chain-rpc.publicnode.com", "wss://avalanche-fuji-c-chain-rpc.publicnode.com"],
                shortName: "Fuji",
                slip44: 1,
                slug: "avalanche-fuji",
                testnet: !0
            }, {
                chain: "ETH",
                chainId: 1337,
                explorers: [],
                faucets: [],
                features: [],
                icon: {
                    url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
                    width: 512,
                    height: 512,
                    format: "png"
                },
                name: "Localhost",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                networkId: 1337,
                redFlags: [],
                rpc: ["http://localhost:8545"],
                shortName: "local",
                slug: "localhost",
                testnet: !0
            }]
        }
    }
]);