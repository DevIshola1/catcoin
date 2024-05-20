"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83814], {
        45429: function(e, t, r) {
            r.r(t), r.d(t, {
                Account: function() {
                    return K
                },
                AddressLookupTableAccount: function() {
                    return eD
                },
                AddressLookupTableInstruction: function() {
                    return rI
                },
                AddressLookupTableProgram: function() {
                    return rA
                },
                Authorized: function() {
                    return rW
                },
                BLOCKHASH_CACHE_TIMEOUT_MS: function() {
                    return eY
                },
                BPF_LOADER_DEPRECATED_PROGRAM_ID: function() {
                    return N
                },
                BPF_LOADER_PROGRAM_ID: function() {
                    return eL
                },
                BpfLoader: function() {
                    return eW
                },
                COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: function() {
                    return rx
                },
                ComputeBudgetInstruction: function() {
                    return rR
                },
                ComputeBudgetProgram: function() {
                    return rP
                },
                Connection: function() {
                    return rS
                },
                Ed25519Program: function() {
                    return rE
                },
                Enum: function() {
                    return B
                },
                EpochSchedule: function() {
                    return eq
                },
                FeeCalculatorLayout: function() {
                    return eI
                },
                Keypair: function() {
                    return rw
                },
                LAMPORTS_PER_SOL: function() {
                    return r2
                },
                LOOKUP_TABLE_INSTRUCTION_LAYOUTS: function() {
                    return r_
                },
                Loader: function() {
                    return eO
                },
                Lockup: function() {
                    return rK
                },
                MAX_SEED_LENGTH: function() {
                    return C
                },
                Message: function() {
                    return et
                },
                MessageAccountKeys: function() {
                    return V
                },
                MessageV0: function() {
                    return er
                },
                NONCE_ACCOUNT_LENGTH: function() {
                    return eR
                },
                NonceAccount: function() {
                    return ex
                },
                PACKET_DATA_SIZE: function() {
                    return z
                },
                PUBLIC_KEY_LENGTH: function() {
                    return O
                },
                PublicKey: function() {
                    return W
                },
                SIGNATURE_LENGTH_IN_BYTES: function() {
                    return q
                },
                SOLANA_SCHEMA: function() {
                    return T
                },
                STAKE_CONFIG_ID: function() {
                    return rL
                },
                STAKE_INSTRUCTION_LAYOUTS: function() {
                    return rz
                },
                SYSTEM_INSTRUCTION_LAYOUTS: function() {
                    return eB
                },
                SYSVAR_CLOCK_PUBKEY: function() {
                    return el
                },
                SYSVAR_EPOCH_SCHEDULE_PUBKEY: function() {
                    return ed
                },
                SYSVAR_INSTRUCTIONS_PUBKEY: function() {
                    return eh
                },
                SYSVAR_RECENT_BLOCKHASHES_PUBKEY: function() {
                    return eg
                },
                SYSVAR_RENT_PUBKEY: function() {
                    return ep
                },
                SYSVAR_REWARDS_PUBKEY: function() {
                    return ey
                },
                SYSVAR_SLOT_HASHES_PUBKEY: function() {
                    return em
                },
                SYSVAR_SLOT_HISTORY_PUBKEY: function() {
                    return ef
                },
                SYSVAR_STAKE_HISTORY_PUBKEY: function() {
                    return eb
                },
                Secp256k1Program: function() {
                    return rO
                },
                SendTransactionError: function() {
                    return eG
                },
                SolanaJSONRPCError: function() {
                    return ej
                },
                SolanaJSONRPCErrorCode: function() {
                    return eM
                },
                StakeAuthorizationLayout: function() {
                    return rU
                },
                StakeInstruction: function() {
                    return rN
                },
                StakeProgram: function() {
                    return rq
                },
                Struct: function() {
                    return E
                },
                SystemInstruction: function() {
                    return eE
                },
                SystemProgram: function() {
                    return eT
                },
                Transaction: function() {
                    return ea
                },
                TransactionExpiredBlockheightExceededError: function() {
                    return G
                },
                TransactionExpiredNonceInvalidError: function() {
                    return j
                },
                TransactionExpiredTimeoutError: function() {
                    return M
                },
                TransactionInstruction: function() {
                    return eo
                },
                TransactionMessage: function() {
                    return ec
                },
                TransactionStatus: function() {
                    return en
                },
                VALIDATOR_INFO_KEY: function() {
                    return rD
                },
                VERSION_PREFIX_MASK: function() {
                    return U
                },
                VOTE_PROGRAM_ID: function() {
                    return rF
                },
                ValidatorInfo: function() {
                    return r$
                },
                VersionedMessage: function() {
                    return ei
                },
                VersionedTransaction: function() {
                    return eu
                },
                VoteAccount: function() {
                    return rX
                },
                VoteAuthorizationLayout: function() {
                    return rV
                },
                VoteInit: function() {
                    return rG
                },
                VoteInstruction: function() {
                    return rM
                },
                VoteProgram: function() {
                    return rJ
                },
                clusterApiUrl: function() {
                    return r1
                },
                sendAndConfirmRawTransaction: function() {
                    return r8
                },
                sendAndConfirmTransaction: function() {
                    return ek
                }
            });
            var i, n, s = r(9109),
                o = r(58267),
                a = r(66400),
                c = r.n(a),
                u = r(46124),
                l = r.n(u),
                d = r(23159),
                h = r(5810),
                g = r(24459),
                p = r(12653),
                y = r(51845),
                m = r(4531),
                f = r.n(m),
                b = r(97393),
                k = r(27418),
                S = r(14671),
                w = r(90845);
            let _ = o.UN.utils.randomPrivateKey,
                I = () => {
                    let e = o.UN.utils.randomPrivateKey(),
                        t = A(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), {
                        publicKey: t,
                        secretKey: r
                    }
                },
                A = o.UN.getPublicKey;

            function R(e) {
                try {
                    return o.UN.ExtendedPoint.fromHex(e), !0
                } catch {
                    return !1
                }
            }
            let x = (e, t) => o.UN.sign(e, t.slice(0, 32)),
                P = o.UN.verify,
                v = e => s.Buffer.isBuffer(e) ? e : e instanceof Uint8Array ? s.Buffer.from(e.buffer, e.byteOffset, e.byteLength) : s.Buffer.from(e);
            class E {
                constructor(e) {
                    Object.assign(this, e)
                }
                encode() {
                    return s.Buffer.from((0, h.serialize)(T, this))
                }
                static decode(e) {
                    return (0, h.deserialize)(T, this, e)
                }
                static decodeUnchecked(e) {
                    return (0, h.deserializeUnchecked)(T, this, e)
                }
            }
            class B extends E {
                constructor(e) {
                    if (super(e), this.enum = "", 1 !== Object.keys(e).length) throw Error("Enum can only take single value");
                    Object.keys(e).map(e => {
                        this.enum = e
                    })
                }
            }
            let T = new Map,
                C = 32,
                O = 32,
                L = 1;
            class W extends E {
                constructor(e) {
                    if (super({}), this._bn = void 0, void 0 !== e._bn) this._bn = e._bn;
                    else {
                        if ("string" == typeof e) {
                            let t = l().decode(e);
                            if (t.length != O) throw Error("Invalid public key input");
                            this._bn = new(c())(t)
                        } else this._bn = new(c())(e);
                        if (this._bn.byteLength() > O) throw Error("Invalid public key input")
                    }
                }
                static unique() {
                    let e = new W(L);
                    return L += 1, new W(e.toBuffer())
                }
                equals(e) {
                    return this._bn.eq(e._bn)
                }
                toBase58() {
                    return l().encode(this.toBytes())
                }
                toJSON() {
                    return this.toBase58()
                }
                toBytes() {
                    let e = this.toBuffer();
                    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                }
                toBuffer() {
                    let e = this._bn.toArrayLike(s.Buffer);
                    if (e.length === O) return e;
                    let t = s.Buffer.alloc(32);
                    return e.copy(t, 32 - e.length), t
                }
                get[Symbol.toStringTag]() {
                    return `PublicKey(${this.toString()})`
                }
                toString() {
                    return this.toBase58()
                }
                static async createWithSeed(e, t, r) {
                    let i = s.Buffer.concat([e.toBuffer(), s.Buffer.from(t), r.toBuffer()]);
                    return new W((0, d.J)(i))
                }
                static createProgramAddressSync(e, t) {
                    let r = s.Buffer.alloc(0);
                    e.forEach(function(e) {
                        if (e.length > C) throw TypeError("Max seed length exceeded");
                        r = s.Buffer.concat([r, v(e)])
                    }), r = s.Buffer.concat([r, t.toBuffer(), s.Buffer.from("ProgramDerivedAddress")]);
                    let i = (0, d.J)(r);
                    if (R(i)) throw Error("Invalid seeds, address must fall off the curve");
                    return new W(i)
                }
                static async createProgramAddress(e, t) {
                    return this.createProgramAddressSync(e, t)
                }
                static findProgramAddressSync(e, t) {
                    let r, i = 255;
                    for (; 0 != i;) {
                        try {
                            let n = e.concat(s.Buffer.from([i]));
                            r = this.createProgramAddressSync(n, t)
                        } catch (e) {
                            if (e instanceof TypeError) throw e;
                            i--;
                            continue
                        }
                        return [r, i]
                    }
                    throw Error("Unable to find a viable program address nonce")
                }
                static async findProgramAddress(e, t) {
                    return this.findProgramAddressSync(e, t)
                }
                static isOnCurve(e) {
                    return R(new W(e).toBytes())
                }
            }
            W.default = new W("11111111111111111111111111111111"), T.set(W, {
                kind: "struct",
                fields: [
                    ["_bn", "u256"]
                ]
            });
            class K {
                constructor(e) {
                    if (this._publicKey = void 0, this._secretKey = void 0, e) {
                        let t = v(e);
                        if (64 !== e.length) throw Error("bad secret key size");
                        this._publicKey = t.slice(32, 64), this._secretKey = t.slice(0, 32)
                    } else this._secretKey = v(_()), this._publicKey = v(A(this._secretKey))
                }
                get publicKey() {
                    return new W(this._publicKey)
                }
                get secretKey() {
                    return s.Buffer.concat([this._secretKey, this._publicKey], 64)
                }
            }
            let N = new W("BPFLoader1111111111111111111111111111111111"),
                z = 1232,
                U = 127,
                q = 64;
            class G extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: block height exceeded.`), this.signature = void 0, this.signature = e
                }
            }
            Object.defineProperty(G.prototype, "name", {
                value: "TransactionExpiredBlockheightExceededError"
            });
            class M extends Error {
                constructor(e, t) {
                    super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = e
                }
            }
            Object.defineProperty(M.prototype, "name", {
                value: "TransactionExpiredTimeoutError"
            });
            class j extends Error {
                constructor(e) {
                    super(`Signature ${e} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = e
                }
            }
            Object.defineProperty(j.prototype, "name", {
                value: "TransactionExpiredNonceInvalidError"
            });
            class V {
                constructor(e, t) {
                    this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = e, this.accountKeysFromLookups = t
                }
                keySegments() {
                    let e = [this.staticAccountKeys];
                    return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable), e.push(this.accountKeysFromLookups.readonly)), e
                }
                get(e) {
                    for (let t of this.keySegments()) {
                        if (e < t.length) return t[e];
                        e -= t.length
                    }
                }
                get length() {
                    return this.keySegments().flat().length
                }
                compileInstructions(e) {
                    if (this.length > 256) throw Error("Account index overflow encountered during compilation");
                    let t = new Map;
                    this.keySegments().flat().forEach((e, r) => {
                        t.set(e.toBase58(), r)
                    });
                    let r = e => {
                        let r = t.get(e.toBase58());
                        if (void 0 === r) throw Error("Encountered an unknown instruction account key during compilation");
                        return r
                    };
                    return e.map(e => ({
                        programIdIndex: r(e.programId),
                        accountKeyIndexes: e.keys.map(e => r(e.pubkey)),
                        data: e.data
                    }))
                }
            }
            let J = (e = "publicKey") => g.Ik(32, e),
                D = (e = "signature") => g.Ik(64, e),
                H = (e = "string") => {
                    let t = g.n_([g.Jq("length"), g.Jq("lengthPadding"), g.Ik(g.cv(g.Jq(), -8), "chars")], e),
                        r = t.decode.bind(t),
                        i = t.encode.bind(t);
                    return t.decode = (e, t) => r(e, t).chars.toString(), t.encode = (e, t, r) => i({
                        chars: s.Buffer.from(e, "utf8")
                    }, t, r), t.alloc = e => g.Jq().span + g.Jq().span + s.Buffer.from(e, "utf8").length, t
                };

            function $(e) {
                let t = 0,
                    r = 0;
                for (;;) {
                    let i = e.shift();
                    if (t |= (127 & i) << 7 * r, r += 1, (128 & i) == 0) break
                }
                return t
            }

            function F(e, t) {
                let r = t;
                for (;;) {
                    let t = 127 & r;
                    if (0 == (r >>= 7)) {
                        e.push(t);
                        break
                    }
                    t |= 128, e.push(t)
                }
            }

            function Z(e, t) {
                if (!e) throw Error(t || "Assertion failed")
            }
            class X {
                constructor(e, t) {
                    this.payer = void 0, this.keyMetaMap = void 0, this.payer = e, this.keyMetaMap = t
                }
                static compile(e, t) {
                    let r = new Map,
                        i = e => {
                            let t = e.toBase58(),
                                i = r.get(t);
                            return void 0 === i && (i = {
                                isSigner: !1,
                                isWritable: !1,
                                isInvoked: !1
                            }, r.set(t, i)), i
                        },
                        n = i(t);
                    for (let t of (n.isSigner = !0, n.isWritable = !0, e))
                        for (let e of (i(t.programId).isInvoked = !0, t.keys)) {
                            let t = i(e.pubkey);
                            t.isSigner || = e.isSigner, t.isWritable || = e.isWritable
                        }
                    return new X(t, r)
                }
                getMessageComponents() {
                    let e = [...this.keyMetaMap.entries()];
                    Z(e.length <= 256, "Max static account keys length exceeded");
                    let t = e.filter(([, e]) => e.isSigner && e.isWritable),
                        r = e.filter(([, e]) => e.isSigner && !e.isWritable),
                        i = e.filter(([, e]) => !e.isSigner && e.isWritable),
                        n = e.filter(([, e]) => !e.isSigner && !e.isWritable),
                        s = {
                            numRequiredSignatures: t.length + r.length,
                            numReadonlySignedAccounts: r.length,
                            numReadonlyUnsignedAccounts: n.length
                        }; {
                        Z(t.length > 0, "Expected at least one writable signer key");
                        let [e] = t[0];
                        Z(e === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
                    }
                    return [s, [...t.map(([e]) => new W(e)), ...r.map(([e]) => new W(e)), ...i.map(([e]) => new W(e)), ...n.map(([e]) => new W(e))]]
                }
                extractTableLookup(e) {
                    let [t, r] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && e.isWritable), [i, n] = this.drainKeysFoundInLookupTable(e.state.addresses, e => !e.isSigner && !e.isInvoked && !e.isWritable);
                    if (0 !== t.length || 0 !== i.length) return [{
                        accountKey: e.key,
                        writableIndexes: t,
                        readonlyIndexes: i
                    }, {
                        writable: r,
                        readonly: n
                    }]
                }
                drainKeysFoundInLookupTable(e, t) {
                    let r = [],
                        i = [];
                    for (let [n, s] of this.keyMetaMap.entries())
                        if (t(s)) {
                            let t = new W(n),
                                s = e.findIndex(e => e.equals(t));
                            s >= 0 && (Z(s < 256, "Max lookup table index exceeded"), r.push(s), i.push(t), this.keyMetaMap.delete(n))
                        }
                    return [r, i]
                }
            }
            let Y = "Reached end of buffer unexpectedly";

            function Q(e) {
                if (0 === e.length) throw Error(Y);
                return e.shift()
            }

            function ee(e, ...t) {
                let [r] = t;
                if (2 === t.length ? r + (t[1] ? ? 0) > e.length : r >= e.length) throw Error(Y);
                return e.splice(...t)
            }
            class et {
                constructor(e) {
                    this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = e.header, this.accountKeys = e.accountKeys.map(e => new W(e)), this.recentBlockhash = e.recentBlockhash, this.instructions = e.instructions, this.instructions.forEach(e => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]))
                }
                get version() {
                    return "legacy"
                }
                get staticAccountKeys() {
                    return this.accountKeys
                }
                get compiledInstructions() {
                    return this.instructions.map(e => ({
                        programIdIndex: e.programIdIndex,
                        accountKeyIndexes: e.accounts,
                        data: l().decode(e.data)
                    }))
                }
                get addressTableLookups() {
                    return []
                }
                getAccountKeys() {
                    return new V(this.staticAccountKeys)
                }
                static compile(e) {
                    let [t, r] = X.compile(e.instructions, e.payerKey).getMessageComponents(), i = new V(r).compileInstructions(e.instructions).map(e => ({
                        programIdIndex: e.programIdIndex,
                        accounts: e.accountKeyIndexes,
                        data: l().encode(e.data)
                    }));
                    return new et({
                        header: t,
                        accountKeys: r,
                        recentBlockhash: e.recentBlockhash,
                        instructions: i
                    })
                }
                isAccountSigner(e) {
                    return e < this.header.numRequiredSignatures
                }
                isAccountWritable(e) {
                    let t = this.header.numRequiredSignatures;
                    if (!(e >= this.header.numRequiredSignatures)) return e < t - this.header.numReadonlySignedAccounts; {
                        let r = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
                        return e - t < r
                    }
                }
                isProgramId(e) {
                    return this.indexToProgramIds.has(e)
                }
                programIds() {
                    return [...this.indexToProgramIds.values()]
                }
                nonProgramIds() {
                    return this.accountKeys.filter((e, t) => !this.isProgramId(t))
                }
                serialize() {
                    let e = this.accountKeys.length,
                        t = [];
                    F(t, e);
                    let r = this.instructions.map(e => {
                            let {
                                accounts: t,
                                programIdIndex: r
                            } = e, i = Array.from(l().decode(e.data)), n = [];
                            F(n, t.length);
                            let o = [];
                            return F(o, i.length), {
                                programIdIndex: r,
                                keyIndicesCount: s.Buffer.from(n),
                                keyIndices: t,
                                dataLength: s.Buffer.from(o),
                                data: i
                            }
                        }),
                        i = [];
                    F(i, r.length);
                    let n = s.Buffer.alloc(z);
                    s.Buffer.from(i).copy(n);
                    let o = i.length;
                    r.forEach(e => {
                        let t = g.n_([g.u8("programIdIndex"), g.Ik(e.keyIndicesCount.length, "keyIndicesCount"), g.A9(g.u8("keyIndex"), e.keyIndices.length, "keyIndices"), g.Ik(e.dataLength.length, "dataLength"), g.A9(g.u8("userdatum"), e.data.length, "data")]).encode(e, n, o);
                        o += t
                    }), n = n.slice(0, o);
                    let a = g.n_([g.Ik(1, "numRequiredSignatures"), g.Ik(1, "numReadonlySignedAccounts"), g.Ik(1, "numReadonlyUnsignedAccounts"), g.Ik(t.length, "keyCount"), g.A9(J("key"), e, "keys"), J("recentBlockhash")]),
                        c = {
                            numRequiredSignatures: s.Buffer.from([this.header.numRequiredSignatures]),
                            numReadonlySignedAccounts: s.Buffer.from([this.header.numReadonlySignedAccounts]),
                            numReadonlyUnsignedAccounts: s.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                            keyCount: s.Buffer.from(t),
                            keys: this.accountKeys.map(e => v(e.toBytes())),
                            recentBlockhash: l().decode(this.recentBlockhash)
                        },
                        u = s.Buffer.alloc(2048),
                        d = a.encode(c, u);
                    return n.copy(u, d), u.slice(0, d + n.length)
                }
                static from(e) {
                    let t = [...e],
                        r = Q(t);
                    if (r !== (r & U)) throw Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
                    let i = Q(t),
                        n = Q(t),
                        o = $(t),
                        a = [];
                    for (let e = 0; e < o; e++) {
                        let e = ee(t, 0, O);
                        a.push(new W(s.Buffer.from(e)))
                    }
                    let c = ee(t, 0, O),
                        u = $(t),
                        d = [];
                    for (let e = 0; e < u; e++) {
                        let e = Q(t),
                            r = $(t),
                            i = ee(t, 0, r),
                            n = $(t),
                            o = ee(t, 0, n),
                            a = l().encode(s.Buffer.from(o));
                        d.push({
                            programIdIndex: e,
                            accounts: i,
                            data: a
                        })
                    }
                    return new et({
                        header: {
                            numRequiredSignatures: r,
                            numReadonlySignedAccounts: i,
                            numReadonlyUnsignedAccounts: n
                        },
                        recentBlockhash: l().encode(s.Buffer.from(c)),
                        accountKeys: a,
                        instructions: d
                    })
                }
            }
            class er {
                constructor(e) {
                    this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = e.header, this.staticAccountKeys = e.staticAccountKeys, this.recentBlockhash = e.recentBlockhash, this.compiledInstructions = e.compiledInstructions, this.addressTableLookups = e.addressTableLookups
                }
                get version() {
                    return 0
                }
                get numAccountKeysFromLookups() {
                    let e = 0;
                    for (let t of this.addressTableLookups) e += t.readonlyIndexes.length + t.writableIndexes.length;
                    return e
                }
                getAccountKeys(e) {
                    let t;
                    if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
                        if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length) throw Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                        t = e.accountKeysFromLookups
                    } else if (e && "addressLookupTableAccounts" in e && e.addressLookupTableAccounts) t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
                    else if (this.addressTableLookups.length > 0) throw Error("Failed to get account keys because address table lookups were not resolved");
                    return new V(this.staticAccountKeys, t)
                }
                isAccountSigner(e) {
                    return e < this.header.numRequiredSignatures
                }
                isAccountWritable(e) {
                    let t = this.header.numRequiredSignatures,
                        r = this.staticAccountKeys.length;
                    if (e >= r) return e - r < this.addressTableLookups.reduce((e, t) => e + t.writableIndexes.length, 0);
                    if (!(e >= this.header.numRequiredSignatures)) return e < t - this.header.numReadonlySignedAccounts; {
                        let i = r - t - this.header.numReadonlyUnsignedAccounts;
                        return e - t < i
                    }
                }
                resolveAddressTableLookups(e) {
                    let t = {
                        writable: [],
                        readonly: []
                    };
                    for (let r of this.addressTableLookups) {
                        let i = e.find(e => e.key.equals(r.accountKey));
                        if (!i) throw Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
                        for (let e of r.writableIndexes)
                            if (e < i.state.addresses.length) t.writable.push(i.state.addresses[e]);
                            else throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`);
                        for (let e of r.readonlyIndexes)
                            if (e < i.state.addresses.length) t.readonly.push(i.state.addresses[e]);
                            else throw Error(`Failed to find address for index ${e} in address lookup table ${r.accountKey.toBase58()}`)
                    }
                    return t
                }
                static compile(e) {
                    let t = X.compile(e.instructions, e.payerKey),
                        r = [],
                        i = {
                            writable: [],
                            readonly: []
                        };
                    for (let n of e.addressLookupTableAccounts || []) {
                        let e = t.extractTableLookup(n);
                        if (void 0 !== e) {
                            let [t, {
                                writable: n,
                                readonly: s
                            }] = e;
                            r.push(t), i.writable.push(...n), i.readonly.push(...s)
                        }
                    }
                    let [n, s] = t.getMessageComponents(), o = new V(s, i).compileInstructions(e.instructions);
                    return new er({
                        header: n,
                        staticAccountKeys: s,
                        recentBlockhash: e.recentBlockhash,
                        compiledInstructions: o,
                        addressTableLookups: r
                    })
                }
                serialize() {
                    let e = [];
                    F(e, this.staticAccountKeys.length);
                    let t = this.serializeInstructions(),
                        r = [];
                    F(r, this.compiledInstructions.length);
                    let i = this.serializeAddressTableLookups(),
                        n = [];
                    F(n, this.addressTableLookups.length);
                    let s = g.n_([g.u8("prefix"), g.n_([g.u8("numRequiredSignatures"), g.u8("numReadonlySignedAccounts"), g.u8("numReadonlyUnsignedAccounts")], "header"), g.Ik(e.length, "staticAccountKeysLength"), g.A9(J(), this.staticAccountKeys.length, "staticAccountKeys"), J("recentBlockhash"), g.Ik(r.length, "instructionsLength"), g.Ik(t.length, "serializedInstructions"), g.Ik(n.length, "addressTableLookupsLength"), g.Ik(i.length, "serializedAddressTableLookups")]),
                        o = new Uint8Array(z),
                        a = s.encode({
                            prefix: 128,
                            header: this.header,
                            staticAccountKeysLength: new Uint8Array(e),
                            staticAccountKeys: this.staticAccountKeys.map(e => e.toBytes()),
                            recentBlockhash: l().decode(this.recentBlockhash),
                            instructionsLength: new Uint8Array(r),
                            serializedInstructions: t,
                            addressTableLookupsLength: new Uint8Array(n),
                            serializedAddressTableLookups: i
                        }, o);
                    return o.slice(0, a)
                }
                serializeInstructions() {
                    let e = 0,
                        t = new Uint8Array(z);
                    for (let r of this.compiledInstructions) {
                        let i = [];
                        F(i, r.accountKeyIndexes.length);
                        let n = [];
                        F(n, r.data.length);
                        let s = g.n_([g.u8("programIdIndex"), g.Ik(i.length, "encodedAccountKeyIndexesLength"), g.A9(g.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"), g.Ik(n.length, "encodedDataLength"), g.Ik(r.data.length, "data")]);
                        e += s.encode({
                            programIdIndex: r.programIdIndex,
                            encodedAccountKeyIndexesLength: new Uint8Array(i),
                            accountKeyIndexes: r.accountKeyIndexes,
                            encodedDataLength: new Uint8Array(n),
                            data: r.data
                        }, t, e)
                    }
                    return t.slice(0, e)
                }
                serializeAddressTableLookups() {
                    let e = 0,
                        t = new Uint8Array(z);
                    for (let r of this.addressTableLookups) {
                        let i = [];
                        F(i, r.writableIndexes.length);
                        let n = [];
                        F(n, r.readonlyIndexes.length);
                        let s = g.n_([J("accountKey"), g.Ik(i.length, "encodedWritableIndexesLength"), g.A9(g.u8(), r.writableIndexes.length, "writableIndexes"), g.Ik(n.length, "encodedReadonlyIndexesLength"), g.A9(g.u8(), r.readonlyIndexes.length, "readonlyIndexes")]);
                        e += s.encode({
                            accountKey: r.accountKey.toBytes(),
                            encodedWritableIndexesLength: new Uint8Array(i),
                            writableIndexes: r.writableIndexes,
                            encodedReadonlyIndexesLength: new Uint8Array(n),
                            readonlyIndexes: r.readonlyIndexes
                        }, t, e)
                    }
                    return t.slice(0, e)
                }
                static deserialize(e) {
                    let t = [...e],
                        r = Q(t),
                        i = r & U;
                    Z(r !== i, "Expected versioned message but received legacy message"), Z(0 === i, `Expected versioned message with version 0 but found version ${i}`);
                    let n = {
                            numRequiredSignatures: Q(t),
                            numReadonlySignedAccounts: Q(t),
                            numReadonlyUnsignedAccounts: Q(t)
                        },
                        s = [],
                        o = $(t);
                    for (let e = 0; e < o; e++) s.push(new W(ee(t, 0, O)));
                    let a = l().encode(ee(t, 0, O)),
                        c = $(t),
                        u = [];
                    for (let e = 0; e < c; e++) {
                        let e = Q(t),
                            r = $(t),
                            i = ee(t, 0, r),
                            n = $(t),
                            s = new Uint8Array(ee(t, 0, n));
                        u.push({
                            programIdIndex: e,
                            accountKeyIndexes: i,
                            data: s
                        })
                    }
                    let d = $(t),
                        h = [];
                    for (let e = 0; e < d; e++) {
                        let e = new W(ee(t, 0, O)),
                            r = $(t),
                            i = ee(t, 0, r),
                            n = $(t),
                            s = ee(t, 0, n);
                        h.push({
                            accountKey: e,
                            writableIndexes: i,
                            readonlyIndexes: s
                        })
                    }
                    return new er({
                        header: n,
                        staticAccountKeys: s,
                        recentBlockhash: a,
                        compiledInstructions: u,
                        addressTableLookups: h
                    })
                }
            }
            let ei = {
                    deserializeMessageVersion(e) {
                        let t = e[0],
                            r = t & U;
                        return r === t ? "legacy" : r
                    },
                    deserialize: e => {
                        let t = ei.deserializeMessageVersion(e);
                        if ("legacy" === t) return et.from(e);
                        if (0 === t) return er.deserialize(e);
                        throw Error(`Transaction message version ${t} deserialization is not supported`)
                    }
                },
                en = ((i = {})[i.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", i[i.PROCESSED = 1] = "PROCESSED", i[i.TIMED_OUT = 2] = "TIMED_OUT", i[i.NONCE_INVALID = 3] = "NONCE_INVALID", i),
                es = s.Buffer.alloc(q).fill(0);
            class eo {
                constructor(e) {
                    this.keys = void 0, this.programId = void 0, this.data = s.Buffer.alloc(0), this.programId = e.programId, this.keys = e.keys, e.data && (this.data = e.data)
                }
                toJSON() {
                    return {
                        keys: this.keys.map(({
                            pubkey: e,
                            isSigner: t,
                            isWritable: r
                        }) => ({
                            pubkey: e.toJSON(),
                            isSigner: t,
                            isWritable: r
                        })),
                        programId: this.programId.toJSON(),
                        data: [...this.data]
                    }
                }
            }
            class ea {
                get signature() {
                    return this.signatures.length > 0 ? this.signatures[0].signature : null
                }
                constructor(e) {
                    if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !e) return;
                    if (e.feePayer && (this.feePayer = e.feePayer), e.signatures && (this.signatures = e.signatures), Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                        let {
                            minContextSlot: t,
                            nonceInfo: r
                        } = e;
                        this.minNonceContextSlot = t, this.nonceInfo = r
                    } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                        let {
                            blockhash: t,
                            lastValidBlockHeight: r
                        } = e;
                        this.recentBlockhash = t, this.lastValidBlockHeight = r
                    } else {
                        let {
                            recentBlockhash: t,
                            nonceInfo: r
                        } = e;
                        r && (this.nonceInfo = r), this.recentBlockhash = t
                    }
                }
                toJSON() {
                    return {
                        recentBlockhash: this.recentBlockhash || null,
                        feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                        nonceInfo: this.nonceInfo ? {
                            nonce: this.nonceInfo.nonce,
                            nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                        } : null,
                        instructions: this.instructions.map(e => e.toJSON()),
                        signers: this.signatures.map(({
                            publicKey: e
                        }) => e.toJSON())
                    }
                }
                add(...e) {
                    if (0 === e.length) throw Error("No instructions");
                    return e.forEach(e => {
                        "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new eo(e))
                    }), this
                }
                compileMessage() {
                    let e, t, r;
                    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
                    if (this.nonceInfo ? (e = this.nonceInfo.nonce, t = this.instructions[0] != this.nonceInfo.nonceInstruction ? [this.nonceInfo.nonceInstruction, ...this.instructions] : this.instructions) : (e = this.recentBlockhash, t = this.instructions), !e) throw Error("Transaction recentBlockhash required");
                    if (t.length < 1 && console.warn("No instructions provided"), this.feePayer) r = this.feePayer;
                    else if (this.signatures.length > 0 && this.signatures[0].publicKey) r = this.signatures[0].publicKey;
                    else throw Error("Transaction fee payer required");
                    for (let e = 0; e < t.length; e++)
                        if (void 0 === t[e].programId) throw Error(`Transaction instruction index ${e} has undefined program id`);
                    let i = [],
                        n = [];
                    t.forEach(e => {
                        e.keys.forEach(e => {
                            n.push({ ...e
                            })
                        });
                        let t = e.programId.toString();
                        i.includes(t) || i.push(t)
                    }), i.forEach(e => {
                        n.push({
                            pubkey: new W(e),
                            isSigner: !1,
                            isWritable: !1
                        })
                    });
                    let s = [];
                    n.forEach(e => {
                        let t = e.pubkey.toString(),
                            r = s.findIndex(e => e.pubkey.toString() === t);
                        r > -1 ? (s[r].isWritable = s[r].isWritable || e.isWritable, s[r].isSigner = s[r].isSigner || e.isSigner) : s.push(e)
                    }), s.sort(function(e, t) {
                        return e.isSigner !== t.isSigner ? e.isSigner ? -1 : 1 : e.isWritable !== t.isWritable ? e.isWritable ? -1 : 1 : e.pubkey.toBase58().localeCompare(t.pubkey.toBase58(), "en", {
                            localeMatcher: "best fit",
                            usage: "sort",
                            sensitivity: "variant",
                            ignorePunctuation: !1,
                            numeric: !1,
                            caseFirst: "lower"
                        })
                    });
                    let o = s.findIndex(e => e.pubkey.equals(r));
                    if (o > -1) {
                        let [e] = s.splice(o, 1);
                        e.isSigner = !0, e.isWritable = !0, s.unshift(e)
                    } else s.unshift({
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !0
                    });
                    for (let e of this.signatures) {
                        let t = s.findIndex(t => t.pubkey.equals(e.publicKey));
                        if (t > -1) s[t].isSigner || (s[t].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                        else throw Error(`unknown signer: ${e.publicKey.toString()}`)
                    }
                    let a = 0,
                        c = 0,
                        u = 0,
                        d = [],
                        h = [];
                    s.forEach(({
                        pubkey: e,
                        isSigner: t,
                        isWritable: r
                    }) => {
                        t ? (d.push(e.toString()), a += 1, r || (c += 1)) : (h.push(e.toString()), r || (u += 1))
                    });
                    let g = d.concat(h),
                        p = t.map(e => {
                            let {
                                data: t,
                                programId: r
                            } = e;
                            return {
                                programIdIndex: g.indexOf(r.toString()),
                                accounts: e.keys.map(e => g.indexOf(e.pubkey.toString())),
                                data: l().encode(t)
                            }
                        });
                    return p.forEach(e => {
                        Z(e.programIdIndex >= 0), e.accounts.forEach(e => Z(e >= 0))
                    }), new et({
                        header: {
                            numRequiredSignatures: a,
                            numReadonlySignedAccounts: c,
                            numReadonlyUnsignedAccounts: u
                        },
                        accountKeys: g,
                        recentBlockhash: e,
                        instructions: p
                    })
                }
                _compile() {
                    let e = this.compileMessage(),
                        t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
                    return this.signatures.length === t.length && this.signatures.every((e, r) => t[r].equals(e.publicKey)) || (this.signatures = t.map(e => ({
                        signature: null,
                        publicKey: e
                    }))), e
                }
                serializeMessage() {
                    return this._compile().serialize()
                }
                async getEstimatedFee(e) {
                    return (await e.getFeeForMessage(this.compileMessage())).value
                }
                setSigners(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set;
                    this.signatures = e.filter(e => {
                        let r = e.toString();
                        return !t.has(r) && (t.add(r), !0)
                    }).map(e => ({
                        signature: null,
                        publicKey: e
                    }))
                }
                sign(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set,
                        r = [];
                    for (let i of e) {
                        let e = i.publicKey.toString();
                        t.has(e) || (t.add(e), r.push(i))
                    }
                    this.signatures = r.map(e => ({
                        signature: null,
                        publicKey: e.publicKey
                    }));
                    let i = this._compile();
                    this._partialSign(i, ...r)
                }
                partialSign(...e) {
                    if (0 === e.length) throw Error("No signers");
                    let t = new Set,
                        r = [];
                    for (let i of e) {
                        let e = i.publicKey.toString();
                        t.has(e) || (t.add(e), r.push(i))
                    }
                    let i = this._compile();
                    this._partialSign(i, ...r)
                }
                _partialSign(e, ...t) {
                    let r = e.serialize();
                    t.forEach(e => {
                        let t = x(r, e.secretKey);
                        this._addSignature(e.publicKey, v(t))
                    })
                }
                addSignature(e, t) {
                    this._compile(), this._addSignature(e, t)
                }
                _addSignature(e, t) {
                    Z(64 === t.length);
                    let r = this.signatures.findIndex(t => e.equals(t.publicKey));
                    if (r < 0) throw Error(`unknown signer: ${e.toString()}`);
                    this.signatures[r].signature = s.Buffer.from(t)
                }
                verifySignatures(e = !0) {
                    return !this._getMessageSignednessErrors(this.serializeMessage(), e)
                }
                _getMessageSignednessErrors(e, t) {
                    let r = {};
                    for (let {
                            signature: i,
                            publicKey: n
                        } of this.signatures) null === i ? t && (r.missing || = []).push(n) : P(i, e, n.toBytes()) || (r.invalid || = []).push(n);
                    return r.invalid || r.missing ? r : void 0
                }
                serialize(e) {
                    let {
                        requireAllSignatures: t,
                        verifySignatures: r
                    } = Object.assign({
                        requireAllSignatures: !0,
                        verifySignatures: !0
                    }, e), i = this.serializeMessage();
                    if (r) {
                        let e = this._getMessageSignednessErrors(i, t);
                        if (e) {
                            let t = "Signature verification failed.";
                            throw e.invalid && (t += `
Invalid signature for public key${1===e.invalid.length?"":"(s)"} [\`${e.invalid.map(e=>e.toBase58()).join("`, `")}\`].`), e.missing && (t += `
Missing signature for public key${1===e.missing.length?"":"(s)"} [\`${e.missing.map(e=>e.toBase58()).join("`, `")}\`].`), Error(t)
                        }
                    }
                    return this._serialize(i)
                }
                _serialize(e) {
                    let {
                        signatures: t
                    } = this, r = [];
                    F(r, t.length);
                    let i = r.length + 64 * t.length + e.length,
                        n = s.Buffer.alloc(i);
                    return Z(t.length < 256), s.Buffer.from(r).copy(n, 0), t.forEach(({
                        signature: e
                    }, t) => {
                        null !== e && (Z(64 === e.length, "signature has invalid length"), s.Buffer.from(e).copy(n, r.length + 64 * t))
                    }), e.copy(n, r.length + 64 * t.length), Z(n.length <= z, `Transaction too large: ${n.length} > ${z}`), n
                }
                get keys() {
                    return Z(1 === this.instructions.length), this.instructions[0].keys.map(e => e.pubkey)
                }
                get programId() {
                    return Z(1 === this.instructions.length), this.instructions[0].programId
                }
                get data() {
                    return Z(1 === this.instructions.length), this.instructions[0].data
                }
                static from(e) {
                    let t = [...e],
                        r = $(t),
                        i = [];
                    for (let e = 0; e < r; e++) {
                        let e = ee(t, 0, q);
                        i.push(l().encode(s.Buffer.from(e)))
                    }
                    return ea.populate(et.from(t), i)
                }
                static populate(e, t = []) {
                    let r = new ea;
                    return r.recentBlockhash = e.recentBlockhash, e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]), t.forEach((t, i) => {
                        let n = {
                            signature: t == l().encode(es) ? null : l().decode(t),
                            publicKey: e.accountKeys[i]
                        };
                        r.signatures.push(n)
                    }), e.instructions.forEach(t => {
                        let i = t.accounts.map(t => {
                            let i = e.accountKeys[t];
                            return {
                                pubkey: i,
                                isSigner: r.signatures.some(e => e.publicKey.toString() === i.toString()) || e.isAccountSigner(t),
                                isWritable: e.isAccountWritable(t)
                            }
                        });
                        r.instructions.push(new eo({
                            keys: i,
                            programId: e.accountKeys[t.programIdIndex],
                            data: l().decode(t.data)
                        }))
                    }), r._message = e, r._json = r.toJSON(), r
                }
            }
            class ec {
                constructor(e) {
                    this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = e.payerKey, this.instructions = e.instructions, this.recentBlockhash = e.recentBlockhash
                }
                static decompile(e, t) {
                    let {
                        header: r,
                        compiledInstructions: i,
                        recentBlockhash: n
                    } = e, {
                        numRequiredSignatures: s,
                        numReadonlySignedAccounts: o,
                        numReadonlyUnsignedAccounts: a
                    } = r, c = s - o;
                    Z(c > 0, "Message header is invalid");
                    let u = e.staticAccountKeys.length - s - a;
                    Z(u >= 0, "Message header is invalid");
                    let l = e.getAccountKeys(t),
                        d = l.get(0);
                    if (void 0 === d) throw Error("Failed to decompile message because no account keys were found");
                    let h = [];
                    for (let e of i) {
                        let t = [];
                        for (let i of e.accountKeyIndexes) {
                            let e;
                            let n = l.get(i);
                            if (void 0 === n) throw Error(`Failed to find key for account key index ${i}`);
                            e = i < s ? i < c : i < l.staticAccountKeys.length ? i - s < u : i - l.staticAccountKeys.length < l.accountKeysFromLookups.writable.length, t.push({
                                pubkey: n,
                                isSigner: i < r.numRequiredSignatures,
                                isWritable: e
                            })
                        }
                        let i = l.get(e.programIdIndex);
                        if (void 0 === i) throw Error(`Failed to find program id for program id index ${e.programIdIndex}`);
                        h.push(new eo({
                            programId: i,
                            data: v(e.data),
                            keys: t
                        }))
                    }
                    return new ec({
                        payerKey: d,
                        instructions: h,
                        recentBlockhash: n
                    })
                }
                compileToLegacyMessage() {
                    return et.compile({
                        payerKey: this.payerKey,
                        recentBlockhash: this.recentBlockhash,
                        instructions: this.instructions
                    })
                }
                compileToV0Message(e) {
                    return er.compile({
                        payerKey: this.payerKey,
                        recentBlockhash: this.recentBlockhash,
                        instructions: this.instructions,
                        addressLookupTableAccounts: e
                    })
                }
            }
            class eu {
                get version() {
                    return this.message.version
                }
                constructor(e, t) {
                    if (this.signatures = void 0, this.message = void 0, void 0 !== t) Z(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = t;
                    else {
                        let t = [];
                        for (let r = 0; r < e.header.numRequiredSignatures; r++) t.push(new Uint8Array(q));
                        this.signatures = t
                    }
                    this.message = e
                }
                serialize() {
                    let e = this.message.serialize(),
                        t = [];
                    F(t, this.signatures.length);
                    let r = g.n_([g.Ik(t.length, "encodedSignaturesLength"), g.A9(D(), this.signatures.length, "signatures"), g.Ik(e.length, "serializedMessage")]),
                        i = new Uint8Array(2048),
                        n = r.encode({
                            encodedSignaturesLength: new Uint8Array(t),
                            signatures: this.signatures,
                            serializedMessage: e
                        }, i);
                    return i.slice(0, n)
                }
                static deserialize(e) {
                    let t = [...e],
                        r = [],
                        i = $(t);
                    for (let e = 0; e < i; e++) r.push(new Uint8Array(ee(t, 0, q)));
                    return new eu(ei.deserialize(new Uint8Array(t)), r)
                }
                sign(e) {
                    let t = this.message.serialize(),
                        r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
                    for (let i of e) {
                        let e = r.findIndex(e => e.equals(i.publicKey));
                        Z(e >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`), this.signatures[e] = x(t, i.secretKey)
                    }
                }
                addSignature(e, t) {
                    Z(64 === t.byteLength, "Signature must be 64 bytes long");
                    let r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(t => t.equals(e));
                    Z(r >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`), this.signatures[r] = t
                }
            }
            let el = new W("SysvarC1ock11111111111111111111111111111111"),
                ed = new W("SysvarEpochSchedu1e111111111111111111111111"),
                eh = new W("Sysvar1nstructions1111111111111111111111111"),
                eg = new W("SysvarRecentB1ockHashes11111111111111111111"),
                ep = new W("SysvarRent111111111111111111111111111111111"),
                ey = new W("SysvarRewards111111111111111111111111111111"),
                em = new W("SysvarS1otHashes111111111111111111111111111"),
                ef = new W("SysvarS1otHistory11111111111111111111111111"),
                eb = new W("SysvarStakeHistory1111111111111111111111111");
            async function ek(e, t, r, i) {
                let n;
                let s = i && {
                        skipPreflight: i.skipPreflight,
                        preflightCommitment: i.preflightCommitment || i.commitment,
                        maxRetries: i.maxRetries,
                        minContextSlot: i.minContextSlot
                    },
                    o = await e.sendTransaction(t, r, s);
                if (null != t.recentBlockhash && null != t.lastValidBlockHeight) n = (await e.confirmTransaction({
                    abortSignal: i ? .abortSignal,
                    signature: o,
                    blockhash: t.recentBlockhash,
                    lastValidBlockHeight: t.lastValidBlockHeight
                }, i && i.commitment)).value;
                else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
                    let {
                        nonceInstruction: r
                    } = t.nonceInfo, s = r.keys[0].pubkey;
                    n = (await e.confirmTransaction({
                        abortSignal: i ? .abortSignal,
                        minContextSlot: t.minNonceContextSlot,
                        nonceAccountPubkey: s,
                        nonceValue: t.nonceInfo.nonce,
                        signature: o
                    }, i && i.commitment)).value
                } else i ? .abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), n = (await e.confirmTransaction(o, i && i.commitment)).value;
                if (n.err) throw Error(`Transaction ${o} failed (${JSON.stringify(n)})`);
                return o
            }

            function eS(e) {
                return new Promise(t => setTimeout(t, e))
            }

            function ew(e, t) {
                let r = e.layout.span >= 0 ? e.layout.span : function e(t, r) {
                        let i = t => {
                                if (t.span >= 0) return t.span;
                                if ("function" == typeof t.alloc) return t.alloc(r[t.property]);
                                if ("count" in t && "elementLayout" in t) {
                                    let e = r[t.property];
                                    if (Array.isArray(e)) return e.length * i(t.elementLayout)
                                } else if ("fields" in t) return e({
                                    layout: t
                                }, r[t.property]);
                                return 0
                            },
                            n = 0;
                        return t.layout.fields.forEach(e => {
                            n += i(e)
                        }), n
                    }(e, t),
                    i = s.Buffer.alloc(r),
                    n = Object.assign({
                        instruction: e.index
                    }, t);
                return e.layout.encode(n, i), i
            }

            function e_(e, t) {
                let r;
                try {
                    r = e.layout.decode(t)
                } catch (e) {
                    throw Error("invalid instruction; " + e)
                }
                if (r.instruction !== e.index) throw Error(`invalid instruction; instruction index mismatch ${r.instruction} != ${e.index}`);
                return r
            }
            let eI = g._O("lamportsPerSignature"),
                eA = g.n_([g.Jq("version"), g.Jq("state"), J("authorizedPubkey"), J("nonce"), g.n_([eI], "feeCalculator")]),
                eR = eA.span;
            class ex {
                constructor(e) {
                    this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = e.authorizedPubkey, this.nonce = e.nonce, this.feeCalculator = e.feeCalculator
                }
                static fromAccountData(e) {
                    let t = eA.decode(v(e), 0);
                    return new ex({
                        authorizedPubkey: new W(t.authorizedPubkey),
                        nonce: new W(t.nonce).toString(),
                        feeCalculator: t.feeCalculator
                    })
                }
            }
            let eP = e => ({
                    decode: e.decode.bind(e),
                    encode: e.encode.bind(e)
                }),
                ev = e => {
                    let t = (0, g.Ik)(8, e),
                        {
                            encode: r,
                            decode: i
                        } = eP(t);
                    return t.decode = (e, t) => {
                        let r = i(e, t);
                        return (0, p.oU)(s.Buffer.from(r))
                    }, t.encode = (e, t, i) => r((0, p.k$)(e, 8), t, i), t
                };
            class eE {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = g.Jq("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(eB))
                        if (i.index == r) {
                            t = e;
                            break
                        }
                    if (!t) throw Error("Instruction type incorrect; not a SystemInstruction");
                    return t
                }
                static decodeCreateAccount(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        lamports: t,
                        space: r,
                        programId: i
                    } = e_(eB.Create, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        newAccountPubkey: e.keys[1].pubkey,
                        lamports: t,
                        space: r,
                        programId: new W(i)
                    }
                }
                static decodeTransfer(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        lamports: t
                    } = e_(eB.Transfer, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        toPubkey: e.keys[1].pubkey,
                        lamports: t
                    }
                }
                static decodeTransferWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        lamports: t,
                        seed: r,
                        programId: i
                    } = e_(eB.TransferWithSeed, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        basePubkey: e.keys[1].pubkey,
                        toPubkey: e.keys[2].pubkey,
                        lamports: t,
                        seed: r,
                        programId: new W(i)
                    }
                }
                static decodeAllocate(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        space: t
                    } = e_(eB.Allocate, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        space: t
                    }
                }
                static decodeAllocateWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        base: t,
                        seed: r,
                        space: i,
                        programId: n
                    } = e_(eB.AllocateWithSeed, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        basePubkey: new W(t),
                        seed: r,
                        space: i,
                        programId: new W(n)
                    }
                }
                static decodeAssign(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        programId: t
                    } = e_(eB.Assign, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        programId: new W(t)
                    }
                }
                static decodeAssignWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
                    let {
                        base: t,
                        seed: r,
                        programId: i
                    } = e_(eB.AssignWithSeed, e.data);
                    return {
                        accountPubkey: e.keys[0].pubkey,
                        basePubkey: new W(t),
                        seed: r,
                        programId: new W(i)
                    }
                }
                static decodeCreateWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        base: t,
                        seed: r,
                        lamports: i,
                        space: n,
                        programId: s
                    } = e_(eB.CreateWithSeed, e.data);
                    return {
                        fromPubkey: e.keys[0].pubkey,
                        newAccountPubkey: e.keys[1].pubkey,
                        basePubkey: new W(t),
                        seed: r,
                        lamports: i,
                        space: n,
                        programId: new W(s)
                    }
                }
                static decodeNonceInitialize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        authorized: t
                    } = e_(eB.InitializeNonceAccount, e.data);
                    return {
                        noncePubkey: e.keys[0].pubkey,
                        authorizedPubkey: new W(t)
                    }
                }
                static decodeNonceAdvance(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), e_(eB.AdvanceNonceAccount, e.data), {
                        noncePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey
                    }
                }
                static decodeNonceWithdraw(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
                    let {
                        lamports: t
                    } = e_(eB.WithdrawNonceAccount, e.data);
                    return {
                        noncePubkey: e.keys[0].pubkey,
                        toPubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[4].pubkey,
                        lamports: t
                    }
                }
                static decodeNonceAuthorize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        authorized: t
                    } = e_(eB.AuthorizeNonceAccount, e.data);
                    return {
                        noncePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[1].pubkey,
                        newAuthorizedPubkey: new W(t)
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(eT.programId)) throw Error("invalid instruction; programId is not SystemProgram")
                }
                static checkKeyLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            let eB = Object.freeze({
                Create: {
                    index: 0,
                    layout: g.n_([g.Jq("instruction"), g.gM("lamports"), g.gM("space"), J("programId")])
                },
                Assign: {
                    index: 1,
                    layout: g.n_([g.Jq("instruction"), J("programId")])
                },
                Transfer: {
                    index: 2,
                    layout: g.n_([g.Jq("instruction"), ev("lamports")])
                },
                CreateWithSeed: {
                    index: 3,
                    layout: g.n_([g.Jq("instruction"), J("base"), H("seed"), g.gM("lamports"), g.gM("space"), J("programId")])
                },
                AdvanceNonceAccount: {
                    index: 4,
                    layout: g.n_([g.Jq("instruction")])
                },
                WithdrawNonceAccount: {
                    index: 5,
                    layout: g.n_([g.Jq("instruction"), g.gM("lamports")])
                },
                InitializeNonceAccount: {
                    index: 6,
                    layout: g.n_([g.Jq("instruction"), J("authorized")])
                },
                AuthorizeNonceAccount: {
                    index: 7,
                    layout: g.n_([g.Jq("instruction"), J("authorized")])
                },
                Allocate: {
                    index: 8,
                    layout: g.n_([g.Jq("instruction"), g.gM("space")])
                },
                AllocateWithSeed: {
                    index: 9,
                    layout: g.n_([g.Jq("instruction"), J("base"), H("seed"), g.gM("space"), J("programId")])
                },
                AssignWithSeed: {
                    index: 10,
                    layout: g.n_([g.Jq("instruction"), J("base"), H("seed"), J("programId")])
                },
                TransferWithSeed: {
                    index: 11,
                    layout: g.n_([g.Jq("instruction"), ev("lamports"), H("seed"), J("programId")])
                },
                UpgradeNonceAccount: {
                    index: 12,
                    layout: g.n_([g.Jq("instruction")])
                }
            });
            class eT {
                constructor() {}
                static createAccount(e) {
                    let t = ew(eB.Create, {
                        lamports: e.lamports,
                        space: e.space,
                        programId: v(e.programId.toBuffer())
                    });
                    return new eo({
                        keys: [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.newAccountPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static transfer(e) {
                    let t, r;
                    return "basePubkey" in e ? (t = ew(eB.TransferWithSeed, {
                        lamports: BigInt(e.lamports),
                        seed: e.seed,
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.fromPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: e.toPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }]) : (t = ew(eB.Transfer, {
                        lamports: BigInt(e.lamports)
                    }), r = [{
                        pubkey: e.fromPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: e.toPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }]), new eo({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static assign(e) {
                    let t, r;
                    return "basePubkey" in e ? (t = ew(eB.AssignWithSeed, {
                        base: v(e.basePubkey.toBuffer()),
                        seed: e.seed,
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }]) : (t = ew(eB.Assign, {
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }]), new eo({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static createAccountWithSeed(e) {
                    let t = ew(eB.CreateWithSeed, {
                            base: v(e.basePubkey.toBuffer()),
                            seed: e.seed,
                            lamports: e.lamports,
                            space: e.space,
                            programId: v(e.programId.toBuffer())
                        }),
                        r = [{
                            pubkey: e.fromPubkey,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: e.newAccountPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }];
                    return e.basePubkey != e.fromPubkey && r.push({
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }), new eo({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
                static createNonceAccount(e) {
                    let t = new ea;
                    "basePubkey" in e && "seed" in e ? t.add(eT.createAccountWithSeed({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        basePubkey: e.basePubkey,
                        seed: e.seed,
                        lamports: e.lamports,
                        space: eR,
                        programId: this.programId
                    })) : t.add(eT.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.noncePubkey,
                        lamports: e.lamports,
                        space: eR,
                        programId: this.programId
                    }));
                    let r = {
                        noncePubkey: e.noncePubkey,
                        authorizedPubkey: e.authorizedPubkey
                    };
                    return t.add(this.nonceInitialize(r)), t
                }
                static nonceInitialize(e) {
                    let t = ew(eB.InitializeNonceAccount, {
                        authorized: v(e.authorizedPubkey.toBuffer())
                    });
                    return new eo({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: eg,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: ep,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static nonceAdvance(e) {
                    let t = ew(eB.AdvanceNonceAccount);
                    return new eo({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: eg,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static nonceWithdraw(e) {
                    let t = ew(eB.WithdrawNonceAccount, {
                        lamports: e.lamports
                    });
                    return new eo({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.toPubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: eg,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: ep,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static nonceAuthorize(e) {
                    let t = ew(eB.AuthorizeNonceAccount, {
                        authorized: v(e.newAuthorizedPubkey.toBuffer())
                    });
                    return new eo({
                        keys: [{
                            pubkey: e.noncePubkey,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authorizedPubkey,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: t
                    })
                }
                static allocate(e) {
                    let t, r;
                    return "basePubkey" in e ? (t = ew(eB.AllocateWithSeed, {
                        base: v(e.basePubkey.toBuffer()),
                        seed: e.seed,
                        space: e.space,
                        programId: v(e.programId.toBuffer())
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.basePubkey,
                        isSigner: !0,
                        isWritable: !1
                    }]) : (t = ew(eB.Allocate, {
                        space: e.space
                    }), r = [{
                        pubkey: e.accountPubkey,
                        isSigner: !0,
                        isWritable: !0
                    }]), new eo({
                        keys: r,
                        programId: this.programId,
                        data: t
                    })
                }
            }
            eT.programId = new W("11111111111111111111111111111111");
            let eC = z - 300;
            class eO {
                constructor() {}
                static getMinNumSignatures(e) {
                    return 2 * (Math.ceil(e / eO.chunkSize) + 1 + 1)
                }
                static async load(e, t, r, i, n) {
                    {
                        let s = await e.getMinimumBalanceForRentExemption(n.length),
                            o = await e.getAccountInfo(r.publicKey, "confirmed"),
                            a = null;
                        if (null !== o) {
                            if (o.executable) return console.error("Program load failed, account is already executable"), !1;
                            o.data.length !== n.length && (a = a || new ea).add(eT.allocate({
                                accountPubkey: r.publicKey,
                                space: n.length
                            })), o.owner.equals(i) || (a = a || new ea).add(eT.assign({
                                accountPubkey: r.publicKey,
                                programId: i
                            })), o.lamports < s && (a = a || new ea).add(eT.transfer({
                                fromPubkey: t.publicKey,
                                toPubkey: r.publicKey,
                                lamports: s - o.lamports
                            }))
                        } else a = new ea().add(eT.createAccount({
                            fromPubkey: t.publicKey,
                            newAccountPubkey: r.publicKey,
                            lamports: s > 0 ? s : 1,
                            space: n.length,
                            programId: i
                        }));
                        null !== a && await ek(e, a, [t, r], {
                            commitment: "confirmed"
                        })
                    }
                    let o = g.n_([g.Jq("instruction"), g.Jq("offset"), g.Jq("bytesLength"), g.Jq("bytesLengthPadding"), g.A9(g.u8("byte"), g.cv(g.Jq(), -8), "bytes")]),
                        a = eO.chunkSize,
                        c = 0,
                        u = n,
                        l = [];
                    for (; u.length > 0;) {
                        let n = u.slice(0, a),
                            d = s.Buffer.alloc(a + 16);
                        o.encode({
                            instruction: 0,
                            offset: c,
                            bytes: n,
                            bytesLength: 0,
                            bytesLengthPadding: 0
                        }, d);
                        let h = new ea().add({
                            keys: [{
                                pubkey: r.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: i,
                            data: d
                        });
                        l.push(ek(e, h, [t, r], {
                            commitment: "confirmed"
                        })), e._rpcEndpoint.includes("solana.com") && await eS(250), c += a, u = u.slice(a)
                    }
                    await Promise.all(l); {
                        let n = g.n_([g.Jq("instruction")]),
                            o = s.Buffer.alloc(n.span);
                        n.encode({
                            instruction: 1
                        }, o);
                        let a = new ea().add({
                                keys: [{
                                    pubkey: r.publicKey,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: ep,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                programId: i,
                                data: o
                            }),
                            c = "processed",
                            u = await e.sendTransaction(a, [t, r], {
                                preflightCommitment: c
                            }),
                            {
                                context: l,
                                value: d
                            } = await e.confirmTransaction({
                                signature: u,
                                lastValidBlockHeight: a.lastValidBlockHeight,
                                blockhash: a.recentBlockhash
                            }, c);
                        if (d.err) throw Error(`Transaction ${u} failed (${JSON.stringify(d)})`);
                        for (;;) {
                            try {
                                if (await e.getSlot({
                                        commitment: c
                                    }) > l.slot) break
                            } catch {}
                            await new Promise(e => setTimeout(e, Math.round(200)))
                        }
                    }
                    return !0
                }
            }
            eO.chunkSize = eC;
            let eL = new W("BPFLoader2111111111111111111111111111111111");
            class eW {
                static getMinNumSignatures(e) {
                    return eO.getMinNumSignatures(e)
                }
                static load(e, t, r, i, n) {
                    return eO.load(e, t, r, n, i)
                }
            }
            var eK = Object.prototype.toString,
                eN = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                },
                ez = (n = function(e) {
                    var t = function e(t, r) {
                        var i, n, s, o, a, c, u;
                        if (!0 === t) return "true";
                        if (!1 === t) return "false";
                        switch (typeof t) {
                            case "object":
                                if (null === t) return null;
                                if (t.toJSON && "function" == typeof t.toJSON) return e(t.toJSON(), r);
                                if ("[object Array]" === (u = eK.call(t))) {
                                    for (i = 0, s = "[", n = t.length - 1; i < n; i++) s += e(t[i], !0) + ",";
                                    return n > -1 && (s += e(t[i], !0)), s + "]"
                                }
                                if ("[object Object]" !== u) return JSON.stringify(t);
                                for (n = (o = eN(t).sort()).length, s = "", i = 0; i < n;) void 0 !== (c = e(t[a = o[i]], !1)) && (s && (s += ","), s += JSON.stringify(a) + ":" + c), i++;
                                return "{" + s + "}";
                            case "function":
                            case "undefined":
                                return r ? null : void 0;
                            case "string":
                                return JSON.stringify(t);
                            default:
                                return isFinite(t) ? t : null
                        }
                    }(e, !1);
                    if (void 0 !== t) return "" + t
                }).__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;

            function eU(e) {
                let t = 0;
                for (; e > 1;) e /= 2, t++;
                return t
            }
            class eq {
                constructor(e, t, r, i, n) {
                    this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = e, this.leaderScheduleSlotOffset = t, this.warmup = r, this.firstNormalEpoch = i, this.firstNormalSlot = n
                }
                getEpoch(e) {
                    return this.getEpochAndSlotIndex(e)[0]
                }
                getEpochAndSlotIndex(e) {
                    if (e < this.firstNormalSlot) {
                        var t;
                        let r = eU(0 === (t = e + 32 + 1) ? 1 : (t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, (t |= t >> 32) + 1)) - eU(32) - 1,
                            i = this.getSlotsInEpoch(r);
                        return [r, e - (i - 32)]
                    } {
                        let t = e - this.firstNormalSlot,
                            r = Math.floor(t / this.slotsPerEpoch);
                        return [this.firstNormalEpoch + r, t % this.slotsPerEpoch]
                    }
                }
                getFirstSlotInEpoch(e) {
                    return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * 32 : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
                }
                getLastSlotInEpoch(e) {
                    return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
                }
                getSlotsInEpoch(e) {
                    return e < this.firstNormalEpoch ? Math.pow(2, e + eU(32)) : this.slotsPerEpoch
                }
            }
            class eG extends Error {
                constructor(e, t) {
                    super(e), this.logs = void 0, this.logs = t
                }
            }
            let eM = {
                JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
                JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
                JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
                JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
                JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
                JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
                JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
                JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
                JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
                JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
                JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
                JSON_RPC_SCAN_ERROR: -32012,
                JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
                JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
                JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
                JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
            };
            class ej extends Error {
                constructor({
                    code: e,
                    message: t,
                    data: r
                }, i) {
                    super(null != i ? `${i}: ${t}` : t), this.code = void 0, this.data = void 0, this.code = e, this.data = r, this.name = "SolanaJSONRPCError"
                }
            }
            var eV = globalThis.fetch;
            class eJ extends b.Z {
                constructor(e, t, r) {
                    super(e => {
                        let r = (0, k.Z)(e, {
                            autoconnect: !0,
                            max_reconnects: 5,
                            reconnect: !0,
                            reconnect_interval: 1e3,
                            ...t
                        });
                        return "socket" in r ? this.underlyingSocket = r.socket : this.underlyingSocket = r, r
                    }, e, t, r), this.underlyingSocket = void 0
                }
                call(...e) {
                    let t = this.underlyingSocket ? .readyState;
                    return 1 === t ? super.call(...e) : Promise.reject(Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
                }
                notify(...e) {
                    let t = this.underlyingSocket ? .readyState;
                    return 1 === t ? super.notify(...e) : Promise.reject(Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
                }
            }
            class eD {
                constructor(e) {
                    this.key = void 0, this.state = void 0, this.key = e.key, this.state = e.state
                }
                isActive() {
                    let e = BigInt("0xffffffffffffffff");
                    return this.state.deactivationSlot === e
                }
                static deserialize(e) {
                    let t = function(e, t) {
                            let r;
                            try {
                                r = e.layout.decode(t)
                            } catch (e) {
                                throw Error("invalid instruction; " + e)
                            }
                            if (r.typeIndex !== e.index) throw Error(`invalid account data; account type mismatch ${r.typeIndex} != ${e.index}`);
                            return r
                        }(eH, e),
                        r = e.length - 56;
                    Z(r >= 0, "lookup table is invalid"), Z(r % 32 == 0, "lookup table is invalid");
                    let {
                        addresses: i
                    } = g.n_([g.A9(J(), r / 32, "addresses")]).decode(e.slice(56));
                    return {
                        deactivationSlot: t.deactivationSlot,
                        lastExtendedSlot: t.lastExtendedSlot,
                        lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
                        authority: 0 !== t.authority.length ? new W(t.authority[0]) : void 0,
                        addresses: i.map(e => new W(e))
                    }
                }
            }
            let eH = {
                    index: 1,
                    layout: g.n_([g.Jq("typeIndex"), ev("deactivationSlot"), g._O("lastExtendedSlot"), g.u8("lastExtendedStartIndex"), g.u8(), g.A9(J(), g.cv(g.u8(), -1), "authority")])
                },
                e$ = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
                eF = (0, y.oQ)((0, y.eE)(W), (0, y.Z_)(), e => new W(e)),
                eZ = (0, y.bc)([(0, y.Z_)(), (0, y.i0)("base64")]),
                eX = (0, y.oQ)((0, y.eE)(s.Buffer), eZ, e => s.Buffer.from(e[0], "base64")),
                eY = 3e4;

            function eQ(e) {
                let t, r;
                if ("string" == typeof e) t = e;
                else if (e) {
                    let {
                        commitment: i,
                        ...n
                    } = e;
                    t = i, r = n
                }
                return {
                    commitment: t,
                    config: r
                }
            }

            function e0(e) {
                return (0, y.G0)([(0, y.dt)({
                    jsonrpc: (0, y.i0)("2.0"),
                    id: (0, y.Z_)(),
                    result: e
                }), (0, y.dt)({
                    jsonrpc: (0, y.i0)("2.0"),
                    id: (0, y.Z_)(),
                    error: (0, y.dt)({
                        code: (0, y._4)(),
                        message: (0, y.Z_)(),
                        data: (0, y.jt)((0, y.Yj)())
                    })
                })])
            }
            let e1 = e0((0, y._4)());

            function e8(e) {
                return (0, y.oQ)(e0(e), e1, t => "error" in t ? t : { ...t,
                    result: (0, y.Ue)(t.result, e)
                })
            }

            function e2(e) {
                return e8((0, y.dt)({
                    context: (0, y.dt)({
                        slot: (0, y.Rx)()
                    }),
                    value: e
                }))
            }

            function e5(e) {
                return (0, y.dt)({
                    context: (0, y.dt)({
                        slot: (0, y.Rx)()
                    }),
                    value: e
                })
            }

            function e3(e, t) {
                return 0 === e ? new er({
                    header: t.header,
                    staticAccountKeys: t.accountKeys.map(e => new W(e)),
                    recentBlockhash: t.recentBlockhash,
                    compiledInstructions: t.instructions.map(e => ({
                        programIdIndex: e.programIdIndex,
                        accountKeyIndexes: e.accounts,
                        data: l().decode(e.data)
                    })),
                    addressTableLookups: t.addressTableLookups
                }) : new et(t)
            }
            let e4 = (0, y.dt)({
                    foundation: (0, y.Rx)(),
                    foundationTerm: (0, y.Rx)(),
                    initial: (0, y.Rx)(),
                    taper: (0, y.Rx)(),
                    terminal: (0, y.Rx)()
                }),
                e6 = e8((0, y.IX)((0, y.AG)((0, y.dt)({
                    epoch: (0, y.Rx)(),
                    effectiveSlot: (0, y.Rx)(),
                    amount: (0, y.Rx)(),
                    postBalance: (0, y.Rx)(),
                    commission: (0, y.jt)((0, y.AG)((0, y.Rx)()))
                })))),
                e9 = (0, y.IX)((0, y.dt)({
                    slot: (0, y.Rx)(),
                    prioritizationFee: (0, y.Rx)()
                })),
                e7 = (0, y.dt)({
                    total: (0, y.Rx)(),
                    validator: (0, y.Rx)(),
                    foundation: (0, y.Rx)(),
                    epoch: (0, y.Rx)()
                }),
                te = (0, y.dt)({
                    epoch: (0, y.Rx)(),
                    slotIndex: (0, y.Rx)(),
                    slotsInEpoch: (0, y.Rx)(),
                    absoluteSlot: (0, y.Rx)(),
                    blockHeight: (0, y.jt)((0, y.Rx)()),
                    transactionCount: (0, y.jt)((0, y.Rx)())
                }),
                tt = (0, y.dt)({
                    slotsPerEpoch: (0, y.Rx)(),
                    leaderScheduleSlotOffset: (0, y.Rx)(),
                    warmup: (0, y.O7)(),
                    firstNormalEpoch: (0, y.Rx)(),
                    firstNormalSlot: (0, y.Rx)()
                }),
                tr = (0, y.IM)((0, y.Z_)(), (0, y.IX)((0, y.Rx)())),
                ti = (0, y.AG)((0, y.G0)([(0, y.dt)({}), (0, y.Z_)()])),
                tn = (0, y.dt)({
                    err: ti
                }),
                ts = (0, y.i0)("receivedSignature"),
                to = (0, y.dt)({
                    "solana-core": (0, y.Z_)(),
                    "feature-set": (0, y.jt)((0, y.Rx)())
                }),
                ta = e2((0, y.dt)({
                    err: (0, y.AG)((0, y.G0)([(0, y.dt)({}), (0, y.Z_)()])),
                    logs: (0, y.AG)((0, y.IX)((0, y.Z_)())),
                    accounts: (0, y.jt)((0, y.AG)((0, y.IX)((0, y.AG)((0, y.dt)({
                        executable: (0, y.O7)(),
                        owner: (0, y.Z_)(),
                        lamports: (0, y.Rx)(),
                        data: (0, y.IX)((0, y.Z_)()),
                        rentEpoch: (0, y.jt)((0, y.Rx)())
                    }))))),
                    unitsConsumed: (0, y.jt)((0, y.Rx)()),
                    returnData: (0, y.jt)((0, y.AG)((0, y.dt)({
                        programId: (0, y.Z_)(),
                        data: (0, y.bc)([(0, y.Z_)(), (0, y.i0)("base64")])
                    })))
                })),
                tc = e2((0, y.dt)({
                    byIdentity: (0, y.IM)((0, y.Z_)(), (0, y.IX)((0, y.Rx)())),
                    range: (0, y.dt)({
                        firstSlot: (0, y.Rx)(),
                        lastSlot: (0, y.Rx)()
                    })
                })),
                tu = e8(e4),
                tl = e8(e7),
                td = e8(e9),
                th = e8(te),
                tg = e8(tt),
                tp = e8(tr),
                ty = e8((0, y.Rx)()),
                tm = e2((0, y.dt)({
                    total: (0, y.Rx)(),
                    circulating: (0, y.Rx)(),
                    nonCirculating: (0, y.Rx)(),
                    nonCirculatingAccounts: (0, y.IX)(eF)
                })),
                tf = (0, y.dt)({
                    amount: (0, y.Z_)(),
                    uiAmount: (0, y.AG)((0, y.Rx)()),
                    decimals: (0, y.Rx)(),
                    uiAmountString: (0, y.jt)((0, y.Z_)())
                }),
                tb = e2((0, y.IX)((0, y.dt)({
                    address: eF,
                    amount: (0, y.Z_)(),
                    uiAmount: (0, y.AG)((0, y.Rx)()),
                    decimals: (0, y.Rx)(),
                    uiAmountString: (0, y.jt)((0, y.Z_)())
                }))),
                tk = e2((0, y.IX)((0, y.dt)({
                    pubkey: eF,
                    account: (0, y.dt)({
                        executable: (0, y.O7)(),
                        owner: eF,
                        lamports: (0, y.Rx)(),
                        data: eX,
                        rentEpoch: (0, y.Rx)()
                    })
                }))),
                tS = (0, y.dt)({
                    program: (0, y.Z_)(),
                    parsed: (0, y._4)(),
                    space: (0, y.Rx)()
                }),
                tw = e2((0, y.IX)((0, y.dt)({
                    pubkey: eF,
                    account: (0, y.dt)({
                        executable: (0, y.O7)(),
                        owner: eF,
                        lamports: (0, y.Rx)(),
                        data: tS,
                        rentEpoch: (0, y.Rx)()
                    })
                }))),
                t_ = e2((0, y.IX)((0, y.dt)({
                    lamports: (0, y.Rx)(),
                    address: eF
                }))),
                tI = (0, y.dt)({
                    executable: (0, y.O7)(),
                    owner: eF,
                    lamports: (0, y.Rx)(),
                    data: eX,
                    rentEpoch: (0, y.Rx)()
                }),
                tA = (0, y.dt)({
                    pubkey: eF,
                    account: tI
                }),
                tR = (0, y.oQ)((0, y.G0)([(0, y.eE)(s.Buffer), tS]), (0, y.G0)([eZ, tS]), e => Array.isArray(e) ? (0, y.Ue)(e, eX) : e),
                tx = (0, y.dt)({
                    executable: (0, y.O7)(),
                    owner: eF,
                    lamports: (0, y.Rx)(),
                    data: tR,
                    rentEpoch: (0, y.Rx)()
                }),
                tP = (0, y.dt)({
                    pubkey: eF,
                    account: tx
                }),
                tv = (0, y.dt)({
                    state: (0, y.G0)([(0, y.i0)("active"), (0, y.i0)("inactive"), (0, y.i0)("activating"), (0, y.i0)("deactivating")]),
                    active: (0, y.Rx)(),
                    inactive: (0, y.Rx)()
                }),
                tE = e8((0, y.IX)((0, y.dt)({
                    signature: (0, y.Z_)(),
                    slot: (0, y.Rx)(),
                    err: ti,
                    memo: (0, y.AG)((0, y.Z_)()),
                    blockTime: (0, y.jt)((0, y.AG)((0, y.Rx)()))
                }))),
                tB = e8((0, y.IX)((0, y.dt)({
                    signature: (0, y.Z_)(),
                    slot: (0, y.Rx)(),
                    err: ti,
                    memo: (0, y.AG)((0, y.Z_)()),
                    blockTime: (0, y.jt)((0, y.AG)((0, y.Rx)()))
                }))),
                tT = (0, y.dt)({
                    subscription: (0, y.Rx)(),
                    result: e5(tI)
                }),
                tC = (0, y.dt)({
                    pubkey: eF,
                    account: tI
                }),
                tO = (0, y.dt)({
                    subscription: (0, y.Rx)(),
                    result: e5(tC)
                }),
                tL = (0, y.dt)({
                    parent: (0, y.Rx)(),
                    slot: (0, y.Rx)(),
                    root: (0, y.Rx)()
                }),
                tW = (0, y.dt)({
                    subscription: (0, y.Rx)(),
                    result: tL
                }),
                tK = (0, y.G0)([(0, y.dt)({
                    type: (0, y.G0)([(0, y.i0)("firstShredReceived"), (0, y.i0)("completed"), (0, y.i0)("optimisticConfirmation"), (0, y.i0)("root")]),
                    slot: (0, y.Rx)(),
                    timestamp: (0, y.Rx)()
                }), (0, y.dt)({
                    type: (0, y.i0)("createdBank"),
                    parent: (0, y.Rx)(),
                    slot: (0, y.Rx)(),
                    timestamp: (0, y.Rx)()
                }), (0, y.dt)({
                    type: (0, y.i0)("frozen"),
                    slot: (0, y.Rx)(),
                    timestamp: (0, y.Rx)(),
                    stats: (0, y.dt)({
                        numTransactionEntries: (0, y.Rx)(),
                        numSuccessfulTransactions: (0, y.Rx)(),
                        numFailedTransactions: (0, y.Rx)(),
                        maxTransactionsPerEntry: (0, y.Rx)()
                    })
                }), (0, y.dt)({
                    type: (0, y.i0)("dead"),
                    slot: (0, y.Rx)(),
                    timestamp: (0, y.Rx)(),
                    err: (0, y.Z_)()
                })]),
                tN = (0, y.dt)({
                    subscription: (0, y.Rx)(),
                    result: tK
                }),
                tz = (0, y.dt)({
                    subscription: (0, y.Rx)(),
                    result: e5((0, y.G0)([tn, ts]))
                }),
                tU = (0, y.dt)({
                    subscription: (0, y.Rx)(),
                    result: (0, y.Rx)()
                }),
                tq = (0, y.dt)({
                    pubkey: (0, y.Z_)(),
                    gossip: (0, y.AG)((0, y.Z_)()),
                    tpu: (0, y.AG)((0, y.Z_)()),
                    rpc: (0, y.AG)((0, y.Z_)()),
                    version: (0, y.AG)((0, y.Z_)())
                }),
                tG = (0, y.dt)({
                    votePubkey: (0, y.Z_)(),
                    nodePubkey: (0, y.Z_)(),
                    activatedStake: (0, y.Rx)(),
                    epochVoteAccount: (0, y.O7)(),
                    epochCredits: (0, y.IX)((0, y.bc)([(0, y.Rx)(), (0, y.Rx)(), (0, y.Rx)()])),
                    commission: (0, y.Rx)(),
                    lastVote: (0, y.Rx)(),
                    rootSlot: (0, y.AG)((0, y.Rx)())
                }),
                tM = e8((0, y.dt)({
                    current: (0, y.IX)(tG),
                    delinquent: (0, y.IX)(tG)
                })),
                tj = (0, y.G0)([(0, y.i0)("processed"), (0, y.i0)("confirmed"), (0, y.i0)("finalized")]),
                tV = (0, y.dt)({
                    slot: (0, y.Rx)(),
                    confirmations: (0, y.AG)((0, y.Rx)()),
                    err: ti,
                    confirmationStatus: (0, y.jt)(tj)
                }),
                tJ = e2((0, y.IX)((0, y.AG)(tV))),
                tD = e8((0, y.Rx)()),
                tH = (0, y.dt)({
                    accountKey: eF,
                    writableIndexes: (0, y.IX)((0, y.Rx)()),
                    readonlyIndexes: (0, y.IX)((0, y.Rx)())
                }),
                t$ = (0, y.dt)({
                    signatures: (0, y.IX)((0, y.Z_)()),
                    message: (0, y.dt)({
                        accountKeys: (0, y.IX)((0, y.Z_)()),
                        header: (0, y.dt)({
                            numRequiredSignatures: (0, y.Rx)(),
                            numReadonlySignedAccounts: (0, y.Rx)(),
                            numReadonlyUnsignedAccounts: (0, y.Rx)()
                        }),
                        instructions: (0, y.IX)((0, y.dt)({
                            accounts: (0, y.IX)((0, y.Rx)()),
                            data: (0, y.Z_)(),
                            programIdIndex: (0, y.Rx)()
                        })),
                        recentBlockhash: (0, y.Z_)(),
                        addressTableLookups: (0, y.jt)((0, y.IX)(tH))
                    })
                }),
                tF = (0, y.dt)({
                    pubkey: eF,
                    signer: (0, y.O7)(),
                    writable: (0, y.O7)(),
                    source: (0, y.jt)((0, y.G0)([(0, y.i0)("transaction"), (0, y.i0)("lookupTable")]))
                }),
                tZ = (0, y.dt)({
                    accountKeys: (0, y.IX)(tF),
                    signatures: (0, y.IX)((0, y.Z_)())
                }),
                tX = (0, y.dt)({
                    parsed: (0, y._4)(),
                    program: (0, y.Z_)(),
                    programId: eF
                }),
                tY = (0, y.dt)({
                    accounts: (0, y.IX)(eF),
                    data: (0, y.Z_)(),
                    programId: eF
                }),
                tQ = (0, y.G0)([tY, tX]),
                t0 = (0, y.G0)([(0, y.dt)({
                    parsed: (0, y._4)(),
                    program: (0, y.Z_)(),
                    programId: (0, y.Z_)()
                }), (0, y.dt)({
                    accounts: (0, y.IX)((0, y.Z_)()),
                    data: (0, y.Z_)(),
                    programId: (0, y.Z_)()
                })]),
                t1 = (0, y.oQ)(tQ, t0, e => "accounts" in e ? (0, y.Ue)(e, tY) : (0, y.Ue)(e, tX)),
                t8 = (0, y.dt)({
                    signatures: (0, y.IX)((0, y.Z_)()),
                    message: (0, y.dt)({
                        accountKeys: (0, y.IX)(tF),
                        instructions: (0, y.IX)(t1),
                        recentBlockhash: (0, y.Z_)(),
                        addressTableLookups: (0, y.jt)((0, y.AG)((0, y.IX)(tH)))
                    })
                }),
                t2 = (0, y.dt)({
                    accountIndex: (0, y.Rx)(),
                    mint: (0, y.Z_)(),
                    owner: (0, y.jt)((0, y.Z_)()),
                    uiTokenAmount: tf
                }),
                t5 = (0, y.dt)({
                    writable: (0, y.IX)(eF),
                    readonly: (0, y.IX)(eF)
                }),
                t3 = (0, y.dt)({
                    err: ti,
                    fee: (0, y.Rx)(),
                    innerInstructions: (0, y.jt)((0, y.AG)((0, y.IX)((0, y.dt)({
                        index: (0, y.Rx)(),
                        instructions: (0, y.IX)((0, y.dt)({
                            accounts: (0, y.IX)((0, y.Rx)()),
                            data: (0, y.Z_)(),
                            programIdIndex: (0, y.Rx)()
                        }))
                    })))),
                    preBalances: (0, y.IX)((0, y.Rx)()),
                    postBalances: (0, y.IX)((0, y.Rx)()),
                    logMessages: (0, y.jt)((0, y.AG)((0, y.IX)((0, y.Z_)()))),
                    preTokenBalances: (0, y.jt)((0, y.AG)((0, y.IX)(t2))),
                    postTokenBalances: (0, y.jt)((0, y.AG)((0, y.IX)(t2))),
                    loadedAddresses: (0, y.jt)(t5),
                    computeUnitsConsumed: (0, y.jt)((0, y.Rx)())
                }),
                t4 = (0, y.dt)({
                    err: ti,
                    fee: (0, y.Rx)(),
                    innerInstructions: (0, y.jt)((0, y.AG)((0, y.IX)((0, y.dt)({
                        index: (0, y.Rx)(),
                        instructions: (0, y.IX)(t1)
                    })))),
                    preBalances: (0, y.IX)((0, y.Rx)()),
                    postBalances: (0, y.IX)((0, y.Rx)()),
                    logMessages: (0, y.jt)((0, y.AG)((0, y.IX)((0, y.Z_)()))),
                    preTokenBalances: (0, y.jt)((0, y.AG)((0, y.IX)(t2))),
                    postTokenBalances: (0, y.jt)((0, y.AG)((0, y.IX)(t2))),
                    loadedAddresses: (0, y.jt)(t5),
                    computeUnitsConsumed: (0, y.jt)((0, y.Rx)())
                }),
                t6 = (0, y.G0)([(0, y.i0)(0), (0, y.i0)("legacy")]),
                t9 = (0, y.dt)({
                    pubkey: (0, y.Z_)(),
                    lamports: (0, y.Rx)(),
                    postBalance: (0, y.AG)((0, y.Rx)()),
                    rewardType: (0, y.AG)((0, y.Z_)()),
                    commission: (0, y.jt)((0, y.AG)((0, y.Rx)()))
                }),
                t7 = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    transactions: (0, y.IX)((0, y.dt)({
                        transaction: t$,
                        meta: (0, y.AG)(t3),
                        version: (0, y.jt)(t6)
                    })),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)()),
                    blockHeight: (0, y.AG)((0, y.Rx)())
                }))),
                re = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)()),
                    blockHeight: (0, y.AG)((0, y.Rx)())
                }))),
                rt = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    transactions: (0, y.IX)((0, y.dt)({
                        transaction: tZ,
                        meta: (0, y.AG)(t3),
                        version: (0, y.jt)(t6)
                    })),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)()),
                    blockHeight: (0, y.AG)((0, y.Rx)())
                }))),
                rr = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    transactions: (0, y.IX)((0, y.dt)({
                        transaction: t8,
                        meta: (0, y.AG)(t4),
                        version: (0, y.jt)(t6)
                    })),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)()),
                    blockHeight: (0, y.AG)((0, y.Rx)())
                }))),
                ri = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    transactions: (0, y.IX)((0, y.dt)({
                        transaction: tZ,
                        meta: (0, y.AG)(t4),
                        version: (0, y.jt)(t6)
                    })),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)()),
                    blockHeight: (0, y.AG)((0, y.Rx)())
                }))),
                rn = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)()),
                    blockHeight: (0, y.AG)((0, y.Rx)())
                }))),
                rs = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    transactions: (0, y.IX)((0, y.dt)({
                        transaction: t$,
                        meta: (0, y.AG)(t3)
                    })),
                    rewards: (0, y.jt)((0, y.IX)(t9)),
                    blockTime: (0, y.AG)((0, y.Rx)())
                }))),
                ro = e8((0, y.AG)((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    previousBlockhash: (0, y.Z_)(),
                    parentSlot: (0, y.Rx)(),
                    signatures: (0, y.IX)((0, y.Z_)()),
                    blockTime: (0, y.AG)((0, y.Rx)())
                }))),
                ra = e8((0, y.AG)((0, y.dt)({
                    slot: (0, y.Rx)(),
                    meta: (0, y.AG)(t3),
                    blockTime: (0, y.jt)((0, y.AG)((0, y.Rx)())),
                    transaction: t$,
                    version: (0, y.jt)(t6)
                }))),
                rc = e8((0, y.AG)((0, y.dt)({
                    slot: (0, y.Rx)(),
                    transaction: t8,
                    meta: (0, y.AG)(t4),
                    blockTime: (0, y.jt)((0, y.AG)((0, y.Rx)())),
                    version: (0, y.jt)(t6)
                }))),
                ru = e2((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    feeCalculator: (0, y.dt)({
                        lamportsPerSignature: (0, y.Rx)()
                    })
                })),
                rl = e2((0, y.dt)({
                    blockhash: (0, y.Z_)(),
                    lastValidBlockHeight: (0, y.Rx)()
                })),
                rd = e2((0, y.O7)()),
                rh = (0, y.dt)({
                    slot: (0, y.Rx)(),
                    numTransactions: (0, y.Rx)(),
                    numSlots: (0, y.Rx)(),
                    samplePeriodSecs: (0, y.Rx)()
                }),
                rg = e8((0, y.IX)(rh)),
                rp = e2((0, y.AG)((0, y.dt)({
                    feeCalculator: (0, y.dt)({
                        lamportsPerSignature: (0, y.Rx)()
                    })
                }))),
                ry = e8((0, y.Z_)()),
                rm = e8((0, y.Z_)()),
                rf = (0, y.dt)({
                    err: ti,
                    logs: (0, y.IX)((0, y.Z_)()),
                    signature: (0, y.Z_)()
                }),
                rb = (0, y.dt)({
                    result: e5(rf),
                    subscription: (0, y.Rx)()
                }),
                rk = {
                    "solana-client": "js/0.0.0-development"
                };
            class rS {
                constructor(e, t) {
                    var r, i;
                    let n, s, o, a, c, u;
                    this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
                        latestBlockhash: null,
                        lastFetch: 0,
                        transactionSignatures: [],
                        simulatedSignatures: []
                    }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, this.getBlockHeight = (() => {
                        let e = {};
                        return async t => {
                            let {
                                commitment: r,
                                config: i
                            } = eQ(t), n = this._buildArgs([], r, void 0, i), s = ez(n);
                            return e[s] = e[s] ? ? (async () => {
                                try {
                                    let e = await this._rpcRequest("getBlockHeight", n),
                                        t = (0, y.Ue)(e, e8((0, y.Rx)()));
                                    if ("error" in t) throw new ej(t.error, "failed to get block height information");
                                    return t.result
                                } finally {
                                    delete e[s]
                                }
                            })(), await e[s]
                        }
                    })(), t && "string" == typeof t ? this._commitment = t : t && (this._commitment = t.commitment, this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout, n = t.wsEndpoint, s = t.httpHeaders, o = t.fetch, a = t.fetchMiddleware, c = t.disableRetryOnRateLimit, u = t.httpAgent), this._rpcEndpoint = function(e) {
                        if (!1 === /^https?:/.test(e)) throw TypeError("Endpoint URL must start with `http:` or `https:`.");
                        return e
                    }(e), this._rpcWsEndpoint = n || function(e) {
                        let t = e.match(e$);
                        if (null == t) throw TypeError(`Failed to validate endpoint URL \`${e}\``);
                        let [r, i, n, s] = t, o = e.startsWith("https:") ? "wss:" : "ws:", a = null == n ? null : parseInt(n.slice(1), 10), c = null == a ? "" : `:${a+1}`;
                        return `${o}//${i}${c}${s}`
                    }(e), this._rpcClient = function(e, t, r, i, n, s) {
                        let o, a;
                        let c = r || eV;
                        return null != s && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."), i && (a = async (e, t) => {
                            let r = await new Promise((r, n) => {
                                try {
                                    i(e, t, (e, t) => r([e, t]))
                                } catch (e) {
                                    n(e)
                                }
                            });
                            return await c(...r)
                        }), new(f())(async (r, i) => {
                            let s = {
                                method: "POST",
                                body: r,
                                agent: o,
                                headers: Object.assign({
                                    "Content-Type": "application/json"
                                }, t || {}, rk)
                            };
                            try {
                                let t, r = 5,
                                    o = 500;
                                for (; t = a ? await a(e, s) : await c(e, s), 429 === t.status && !0 !== n && (r -= 1, 0 !== r);) console.error(`Server responded with ${t.status} ${t.statusText}.  Retrying after ${o}ms delay...`), await eS(o), o *= 2;
                                let u = await t.text();
                                t.ok ? i(null, u) : i(Error(`${t.status} ${t.statusText}: ${u}`))
                            } catch (e) {
                                e instanceof Error && i(e)
                            }
                        }, {})
                    }(e, s, o, a, c, u), this._rpcRequest = (r = this._rpcClient, (e, t) => new Promise((i, n) => {
                        r.request(e, t, (e, t) => {
                            if (e) {
                                n(e);
                                return
                            }
                            i(t)
                        })
                    })), this._rpcBatchRequest = (i = this._rpcClient, e => new Promise((t, r) => {
                        0 === e.length && t([]);
                        let n = e.map(e => i.request(e.methodName, e.args));
                        i.request(n, (e, i) => {
                            if (e) {
                                r(e);
                                return
                            }
                            t(i)
                        })
                    })), this._rpcWebSocket = new eJ(this._rpcWsEndpoint, {
                        autoconnect: !1,
                        max_reconnects: 1 / 0
                    }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
                }
                get commitment() {
                    return this._commitment
                }
                get rpcEndpoint() {
                    return this._rpcEndpoint
                }
                async getBalanceAndContext(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgs([e.toBase58()], r, void 0, i), s = await this._rpcRequest("getBalance", n), o = (0, y.Ue)(s, e2((0, y.Rx)()));
                    if ("error" in o) throw new ej(o.error, `failed to get balance for ${e.toBase58()}`);
                    return o.result
                }
                async getBalance(e, t) {
                    return await this.getBalanceAndContext(e, t).then(e => e.value).catch(t => {
                        throw Error("failed to get balance of account " + e.toBase58() + ": " + t)
                    })
                }
                async getBlockTime(e) {
                    let t = await this._rpcRequest("getBlockTime", [e]),
                        r = (0, y.Ue)(t, e8((0, y.AG)((0, y.Rx)())));
                    if ("error" in r) throw new ej(r.error, `failed to get block time for slot ${e}`);
                    return r.result
                }
                async getMinimumLedgerSlot() {
                    let e = await this._rpcRequest("minimumLedgerSlot", []),
                        t = (0, y.Ue)(e, e8((0, y.Rx)()));
                    if ("error" in t) throw new ej(t.error, "failed to get minimum ledger slot");
                    return t.result
                }
                async getFirstAvailableBlock() {
                    let e = await this._rpcRequest("getFirstAvailableBlock", []),
                        t = (0, y.Ue)(e, ty);
                    if ("error" in t) throw new ej(t.error, "failed to get first available block");
                    return t.result
                }
                async getSupply(e) {
                    let t = {};
                    t = "string" == typeof e ? {
                        commitment: e
                    } : e ? { ...e,
                        commitment: e && e.commitment || this.commitment
                    } : {
                        commitment: this.commitment
                    };
                    let r = await this._rpcRequest("getSupply", [t]),
                        i = (0, y.Ue)(r, tm);
                    if ("error" in i) throw new ej(i.error, "failed to get supply");
                    return i.result
                }
                async getTokenSupply(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        i = await this._rpcRequest("getTokenSupply", r),
                        n = (0, y.Ue)(i, e2(tf));
                    if ("error" in n) throw new ej(n.error, "failed to get token supply");
                    return n.result
                }
                async getTokenAccountBalance(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        i = await this._rpcRequest("getTokenAccountBalance", r),
                        n = (0, y.Ue)(i, e2(tf));
                    if ("error" in n) throw new ej(n.error, "failed to get token account balance");
                    return n.result
                }
                async getTokenAccountsByOwner(e, t, r) {
                    let {
                        commitment: i,
                        config: n
                    } = eQ(r), s = [e.toBase58()];
                    "mint" in t ? s.push({
                        mint: t.mint.toBase58()
                    }) : s.push({
                        programId: t.programId.toBase58()
                    });
                    let o = this._buildArgs(s, i, "base64", n),
                        a = await this._rpcRequest("getTokenAccountsByOwner", o),
                        c = (0, y.Ue)(a, tk);
                    if ("error" in c) throw new ej(c.error, `failed to get token accounts owned by account ${e.toBase58()}`);
                    return c.result
                }
                async getParsedTokenAccountsByOwner(e, t, r) {
                    let i = [e.toBase58()];
                    "mint" in t ? i.push({
                        mint: t.mint.toBase58()
                    }) : i.push({
                        programId: t.programId.toBase58()
                    });
                    let n = this._buildArgs(i, r, "jsonParsed"),
                        s = await this._rpcRequest("getTokenAccountsByOwner", n),
                        o = (0, y.Ue)(s, tw);
                    if ("error" in o) throw new ej(o.error, `failed to get token accounts owned by account ${e.toBase58()}`);
                    return o.result
                }
                async getLargestAccounts(e) {
                    let t = { ...e,
                            commitment: e && e.commitment || this.commitment
                        },
                        r = t.filter || t.commitment ? [t] : [],
                        i = await this._rpcRequest("getLargestAccounts", r),
                        n = (0, y.Ue)(i, t_);
                    if ("error" in n) throw new ej(n.error, "failed to get largest accounts");
                    return n.result
                }
                async getTokenLargestAccounts(e, t) {
                    let r = this._buildArgs([e.toBase58()], t),
                        i = await this._rpcRequest("getTokenLargestAccounts", r),
                        n = (0, y.Ue)(i, tb);
                    if ("error" in n) throw new ej(n.error, "failed to get token largest accounts");
                    return n.result
                }
                async getAccountInfoAndContext(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgs([e.toBase58()], r, "base64", i), s = await this._rpcRequest("getAccountInfo", n), o = (0, y.Ue)(s, e2((0, y.AG)(tI)));
                    if ("error" in o) throw new ej(o.error, `failed to get info about account ${e.toBase58()}`);
                    return o.result
                }
                async getParsedAccountInfo(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgs([e.toBase58()], r, "jsonParsed", i), s = await this._rpcRequest("getAccountInfo", n), o = (0, y.Ue)(s, e2((0, y.AG)(tx)));
                    if ("error" in o) throw new ej(o.error, `failed to get info about account ${e.toBase58()}`);
                    return o.result
                }
                async getAccountInfo(e, t) {
                    try {
                        return (await this.getAccountInfoAndContext(e, t)).value
                    } catch (t) {
                        throw Error("failed to get info about account " + e.toBase58() + ": " + t)
                    }
                }
                async getMultipleParsedAccounts(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = e.map(e => e.toBase58()), s = this._buildArgs([n], r, "jsonParsed", i), o = await this._rpcRequest("getMultipleAccounts", s), a = (0, y.Ue)(o, e2((0, y.IX)((0, y.AG)(tx))));
                    if ("error" in a) throw new ej(a.error, `failed to get info for accounts ${n}`);
                    return a.result
                }
                async getMultipleAccountsInfoAndContext(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = e.map(e => e.toBase58()), s = this._buildArgs([n], r, "base64", i), o = await this._rpcRequest("getMultipleAccounts", s), a = (0, y.Ue)(o, e2((0, y.IX)((0, y.AG)(tI))));
                    if ("error" in a) throw new ej(a.error, `failed to get info for accounts ${n}`);
                    return a.result
                }
                async getMultipleAccountsInfo(e, t) {
                    return (await this.getMultipleAccountsInfoAndContext(e, t)).value
                }
                async getStakeActivation(e, t, r) {
                    let {
                        commitment: i,
                        config: n
                    } = eQ(t), s = this._buildArgs([e.toBase58()], i, void 0, { ...n,
                        epoch: null != r ? r : n ? .epoch
                    }), o = await this._rpcRequest("getStakeActivation", s), a = (0, y.Ue)(o, e8(tv));
                    if ("error" in a) throw new ej(a.error, `failed to get Stake Activation ${e.toBase58()}`);
                    return a.result
                }
                async getProgramAccounts(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), {
                        encoding: n,
                        ...s
                    } = i || {}, o = this._buildArgs([e.toBase58()], r, n || "base64", s), a = await this._rpcRequest("getProgramAccounts", o), c = (0, y.IX)(tA), u = !0 === s.withContext ? (0, y.Ue)(a, e2(c)) : (0, y.Ue)(a, e8(c));
                    if ("error" in u) throw new ej(u.error, `failed to get accounts owned by program ${e.toBase58()}`);
                    return u.result
                }
                async getParsedProgramAccounts(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgs([e.toBase58()], r, "jsonParsed", i), s = await this._rpcRequest("getProgramAccounts", n), o = (0, y.Ue)(s, e8((0, y.IX)(tP)));
                    if ("error" in o) throw new ej(o.error, `failed to get accounts owned by program ${e.toBase58()}`);
                    return o.result
                }
                async confirmTransaction(e, t) {
                    let r, i;
                    if ("string" == typeof e) r = e;
                    else {
                        if (e.abortSignal ? .aborted) return Promise.reject(e.abortSignal.reason);
                        r = e.signature
                    }
                    try {
                        i = l().decode(r)
                    } catch (e) {
                        throw Error("signature must be base58 encoded: " + r)
                    }
                    return (Z(64 === i.length, "signature has invalid length"), "string" == typeof e) ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                        commitment: t || this.commitment,
                        signature: r
                    }) : "lastValidBlockHeight" in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                        commitment: t || this.commitment,
                        strategy: e
                    }) : await this.confirmTransactionUsingDurableNonceStrategy({
                        commitment: t || this.commitment,
                        strategy: e
                    })
                }
                getCancellationPromise(e) {
                    return new Promise((t, r) => {
                        null != e && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
                            r(e.reason)
                        }))
                    })
                }
                getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t
                }) {
                    let r, i;
                    let n = !1;
                    return {
                        abortConfirmation: () => {
                            i && (i(), i = void 0), null != r && (this.removeSignatureListener(r), r = void 0)
                        },
                        confirmationPromise: new Promise((s, o) => {
                            try {
                                r = this.onSignature(t, (e, t) => {
                                    r = void 0, s({
                                        __type: en.PROCESSED,
                                        response: {
                                            context: t,
                                            value: e
                                        }
                                    })
                                }, e);
                                let a = new Promise(e => {
                                    null == r ? e() : i = this._onSubscriptionStateChange(r, t => {
                                        "subscribed" === t && e()
                                    })
                                });
                                (async () => {
                                    if (await a, n) return;
                                    let r = await this.getSignatureStatus(t);
                                    if (n || null == r) return;
                                    let {
                                        context: i,
                                        value: c
                                    } = r;
                                    if (null != c) {
                                        if (c ? .err) o(c.err);
                                        else {
                                            switch (e) {
                                                case "confirmed":
                                                case "single":
                                                case "singleGossip":
                                                    if ("processed" === c.confirmationStatus) return;
                                                    break;
                                                case "finalized":
                                                case "max":
                                                case "root":
                                                    if ("processed" === c.confirmationStatus || "confirmed" === c.confirmationStatus) return
                                            }
                                            n = !0, s({
                                                __type: en.PROCESSED,
                                                response: {
                                                    context: i,
                                                    value: c
                                                }
                                            })
                                        }
                                    }
                                })()
                            } catch (e) {
                                o(e)
                            }
                        })
                    }
                }
                async confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: e,
                    strategy: {
                        abortSignal: t,
                        lastValidBlockHeight: r,
                        signature: i
                    }
                }) {
                    let n, s = !1,
                        o = new Promise(t => {
                            let i = async () => {
                                try {
                                    return await this.getBlockHeight(e)
                                } catch (e) {
                                    return -1
                                }
                            };
                            (async () => {
                                let e = await i();
                                if (!s) {
                                    for (; e <= r;)
                                        if (await eS(1e3), s || (e = await i(), s)) return;
                                    t({
                                        __type: en.BLOCKHEIGHT_EXCEEDED
                                    })
                                }
                            })()
                        }),
                        {
                            abortConfirmation: a,
                            confirmationPromise: c
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: i
                        }),
                        u = this.getCancellationPromise(t);
                    try {
                        let e = await Promise.race([u, c, o]);
                        if (e.__type === en.PROCESSED) n = e.response;
                        else throw new G(i)
                    } finally {
                        s = !0, a()
                    }
                    return n
                }
                async confirmTransactionUsingDurableNonceStrategy({
                    commitment: e,
                    strategy: {
                        abortSignal: t,
                        minContextSlot: r,
                        nonceAccountPubkey: i,
                        nonceValue: n,
                        signature: s
                    }
                }) {
                    let o, a = !1,
                        c = new Promise(t => {
                            let s = n,
                                o = null,
                                c = async () => {
                                    try {
                                        let {
                                            context: t,
                                            value: n
                                        } = await this.getNonceAndContext(i, {
                                            commitment: e,
                                            minContextSlot: r
                                        });
                                        return o = t.slot, n ? .nonce
                                    } catch (e) {
                                        return s
                                    }
                                };
                            (async () => {
                                if (s = await c(), !a)
                                    for (;;) {
                                        if (n !== s) {
                                            t({
                                                __type: en.NONCE_INVALID,
                                                slotInWhichNonceDidAdvance: o
                                            });
                                            return
                                        }
                                        if (await eS(2e3), a || (s = await c(), a)) return
                                    }
                            })()
                        }),
                        {
                            abortConfirmation: u,
                            confirmationPromise: l
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: s
                        }),
                        d = this.getCancellationPromise(t);
                    try {
                        let t = await Promise.race([d, l, c]);
                        if (t.__type === en.PROCESSED) o = t.response;
                        else {
                            let i;
                            for (;;) {
                                let e = await this.getSignatureStatus(s);
                                if (null == e) break;
                                if (e.context.slot < (t.slotInWhichNonceDidAdvance ? ? r)) {
                                    await eS(400);
                                    continue
                                }
                                i = e;
                                break
                            }
                            if (i ? .value) {
                                let t = e || "finalized",
                                    {
                                        confirmationStatus: r
                                    } = i.value;
                                switch (t) {
                                    case "processed":
                                    case "recent":
                                        if ("processed" !== r && "confirmed" !== r && "finalized" !== r) throw new j(s);
                                        break;
                                    case "confirmed":
                                    case "single":
                                    case "singleGossip":
                                        if ("confirmed" !== r && "finalized" !== r) throw new j(s);
                                        break;
                                    case "finalized":
                                    case "max":
                                    case "root":
                                        if ("finalized" !== r) throw new j(s)
                                }
                                o = {
                                    context: i.context,
                                    value: {
                                        err: i.value.err
                                    }
                                }
                            } else throw new j(s)
                        }
                    } finally {
                        a = !0, u()
                    }
                    return o
                }
                async confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: e,
                    signature: t
                }) {
                    let r, i;
                    let n = new Promise(t => {
                            let i = this._confirmTransactionInitialTimeout || 6e4;
                            switch (e) {
                                case "processed":
                                case "recent":
                                case "single":
                                case "confirmed":
                                case "singleGossip":
                                    i = this._confirmTransactionInitialTimeout || 3e4
                            }
                            r = setTimeout(() => t({
                                __type: en.TIMED_OUT,
                                timeoutMs: i
                            }), i)
                        }),
                        {
                            abortConfirmation: s,
                            confirmationPromise: o
                        } = this.getTransactionConfirmationPromise({
                            commitment: e,
                            signature: t
                        });
                    try {
                        let e = await Promise.race([o, n]);
                        if (e.__type === en.PROCESSED) i = e.response;
                        else throw new M(t, e.timeoutMs / 1e3)
                    } finally {
                        clearTimeout(r), s()
                    }
                    return i
                }
                async getClusterNodes() {
                    let e = await this._rpcRequest("getClusterNodes", []),
                        t = (0, y.Ue)(e, e8((0, y.IX)(tq)));
                    if ("error" in t) throw new ej(t.error, "failed to get cluster nodes");
                    return t.result
                }
                async getVoteAccounts(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getVoteAccounts", t),
                        i = (0, y.Ue)(r, tM);
                    if ("error" in i) throw new ej(i.error, "failed to get vote accounts");
                    return i.result
                }
                async getSlot(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eQ(e), i = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getSlot", i), s = (0, y.Ue)(n, e8((0, y.Rx)()));
                    if ("error" in s) throw new ej(s.error, "failed to get slot");
                    return s.result
                }
                async getSlotLeader(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eQ(e), i = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getSlotLeader", i), s = (0, y.Ue)(n, e8((0, y.Z_)()));
                    if ("error" in s) throw new ej(s.error, "failed to get slot leader");
                    return s.result
                }
                async getSlotLeaders(e, t) {
                    let r = await this._rpcRequest("getSlotLeaders", [e, t]),
                        i = (0, y.Ue)(r, e8((0, y.IX)(eF)));
                    if ("error" in i) throw new ej(i.error, "failed to get slot leaders");
                    return i.result
                }
                async getSignatureStatus(e, t) {
                    let {
                        context: r,
                        value: i
                    } = await this.getSignatureStatuses([e], t);
                    return Z(1 === i.length), {
                        context: r,
                        value: i[0]
                    }
                }
                async getSignatureStatuses(e, t) {
                    let r = [e];
                    t && r.push(t);
                    let i = await this._rpcRequest("getSignatureStatuses", r),
                        n = (0, y.Ue)(i, tJ);
                    if ("error" in n) throw new ej(n.error, "failed to get signature status");
                    return n.result
                }
                async getTransactionCount(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eQ(e), i = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getTransactionCount", i), s = (0, y.Ue)(n, e8((0, y.Rx)()));
                    if ("error" in s) throw new ej(s.error, "failed to get transaction count");
                    return s.result
                }
                async getTotalSupply(e) {
                    return (await this.getSupply({
                        commitment: e,
                        excludeNonCirculatingAccountsList: !0
                    })).value.total
                }
                async getInflationGovernor(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getInflationGovernor", t),
                        i = (0, y.Ue)(r, tu);
                    if ("error" in i) throw new ej(i.error, "failed to get inflation");
                    return i.result
                }
                async getInflationReward(e, t, r) {
                    let {
                        commitment: i,
                        config: n
                    } = eQ(r), s = this._buildArgs([e.map(e => e.toBase58())], i, void 0, { ...n,
                        epoch: null != t ? t : n ? .epoch
                    }), o = await this._rpcRequest("getInflationReward", s), a = (0, y.Ue)(o, e6);
                    if ("error" in a) throw new ej(a.error, "failed to get inflation reward");
                    return a.result
                }
                async getInflationRate() {
                    let e = await this._rpcRequest("getInflationRate", []),
                        t = (0, y.Ue)(e, tl);
                    if ("error" in t) throw new ej(t.error, "failed to get inflation rate");
                    return t.result
                }
                async getEpochInfo(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eQ(e), i = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getEpochInfo", i), s = (0, y.Ue)(n, th);
                    if ("error" in s) throw new ej(s.error, "failed to get epoch info");
                    return s.result
                }
                async getEpochSchedule() {
                    let e = await this._rpcRequest("getEpochSchedule", []),
                        t = (0, y.Ue)(e, tg);
                    if ("error" in t) throw new ej(t.error, "failed to get epoch schedule");
                    let r = t.result;
                    return new eq(r.slotsPerEpoch, r.leaderScheduleSlotOffset, r.warmup, r.firstNormalEpoch, r.firstNormalSlot)
                }
                async getLeaderSchedule() {
                    let e = await this._rpcRequest("getLeaderSchedule", []),
                        t = (0, y.Ue)(e, tp);
                    if ("error" in t) throw new ej(t.error, "failed to get leader schedule");
                    return t.result
                }
                async getMinimumBalanceForRentExemption(e, t) {
                    let r = this._buildArgs([e], t),
                        i = await this._rpcRequest("getMinimumBalanceForRentExemption", r),
                        n = (0, y.Ue)(i, tD);
                    return "error" in n ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : n.result
                }
                async getRecentBlockhashAndContext(e) {
                    let t = this._buildArgs([], e),
                        r = await this._rpcRequest("getRecentBlockhash", t),
                        i = (0, y.Ue)(r, ru);
                    if ("error" in i) throw new ej(i.error, "failed to get recent blockhash");
                    return i.result
                }
                async getRecentPerformanceSamples(e) {
                    let t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
                        r = (0, y.Ue)(t, rg);
                    if ("error" in r) throw new ej(r.error, "failed to get recent performance samples");
                    return r.result
                }
                async getFeeCalculatorForBlockhash(e, t) {
                    let r = this._buildArgs([e], t),
                        i = await this._rpcRequest("getFeeCalculatorForBlockhash", r),
                        n = (0, y.Ue)(i, rp);
                    if ("error" in n) throw new ej(n.error, "failed to get fee calculator");
                    let {
                        context: s,
                        value: o
                    } = n.result;
                    return {
                        context: s,
                        value: null !== o ? o.feeCalculator : null
                    }
                }
                async getFeeForMessage(e, t) {
                    let r = v(e.serialize()).toString("base64"),
                        i = this._buildArgs([r], t),
                        n = await this._rpcRequest("getFeeForMessage", i),
                        s = (0, y.Ue)(n, e2((0, y.AG)((0, y.Rx)())));
                    if ("error" in s) throw new ej(s.error, "failed to get fee for message");
                    if (null === s.result) throw Error("invalid blockhash");
                    return s.result
                }
                async getRecentPrioritizationFees(e) {
                    let t = e ? .lockedWritableAccounts ? .map(e => e.toBase58()),
                        r = t ? .length ? [t] : [],
                        i = await this._rpcRequest("getRecentPrioritizationFees", r),
                        n = (0, y.Ue)(i, td);
                    if ("error" in n) throw new ej(n.error, "failed to get recent prioritization fees");
                    return n.result
                }
                async getRecentBlockhash(e) {
                    try {
                        return (await this.getRecentBlockhashAndContext(e)).value
                    } catch (e) {
                        throw Error("failed to get recent blockhash: " + e)
                    }
                }
                async getLatestBlockhash(e) {
                    try {
                        return (await this.getLatestBlockhashAndContext(e)).value
                    } catch (e) {
                        throw Error("failed to get recent blockhash: " + e)
                    }
                }
                async getLatestBlockhashAndContext(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eQ(e), i = this._buildArgs([], t, void 0, r), n = await this._rpcRequest("getLatestBlockhash", i), s = (0, y.Ue)(n, rl);
                    if ("error" in s) throw new ej(s.error, "failed to get latest blockhash");
                    return s.result
                }
                async isBlockhashValid(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgs([e], r, void 0, i), s = await this._rpcRequest("isBlockhashValid", n), o = (0, y.Ue)(s, rd);
                    if ("error" in o) throw new ej(o.error, "failed to determine if the blockhash `" + e + "`is valid");
                    return o.result
                }
                async getVersion() {
                    let e = await this._rpcRequest("getVersion", []),
                        t = (0, y.Ue)(e, e8(to));
                    if ("error" in t) throw new ej(t.error, "failed to get version");
                    return t.result
                }
                async getGenesisHash() {
                    let e = await this._rpcRequest("getGenesisHash", []),
                        t = (0, y.Ue)(e, e8((0, y.Z_)()));
                    if ("error" in t) throw new ej(t.error, "failed to get genesis hash");
                    return t.result
                }
                async getBlock(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgsAtLeastConfirmed([e], r, void 0, i), s = await this._rpcRequest("getBlock", n);
                    try {
                        switch (i ? .transactionDetails) {
                            case "accounts":
                                {
                                    let e = (0, y.Ue)(s, rt);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            case "none":
                                {
                                    let e = (0, y.Ue)(s, re);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            default:
                                {
                                    let e = (0, y.Ue)(s, t7);
                                    if ("error" in e) throw e.error;
                                    let {
                                        result: t
                                    } = e;
                                    return t ? { ...t,
                                        transactions: t.transactions.map(({
                                            transaction: e,
                                            meta: t,
                                            version: r
                                        }) => ({
                                            meta: t,
                                            transaction: { ...e,
                                                message: e3(r, e.message)
                                            },
                                            version: r
                                        }))
                                    } : null
                                }
                        }
                    } catch (e) {
                        throw new ej(e, "failed to get confirmed block")
                    }
                }
                async getParsedBlock(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), s = await this._rpcRequest("getBlock", n);
                    try {
                        switch (i ? .transactionDetails) {
                            case "accounts":
                                {
                                    let e = (0, y.Ue)(s, ri);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            case "none":
                                {
                                    let e = (0, y.Ue)(s, rn);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                            default:
                                {
                                    let e = (0, y.Ue)(s, rr);
                                    if ("error" in e) throw e.error;
                                    return e.result
                                }
                        }
                    } catch (e) {
                        throw new ej(e, "failed to get block")
                    }
                }
                async getBlockProduction(e) {
                    let t, r;
                    if ("string" == typeof e) r = e;
                    else if (e) {
                        let {
                            commitment: i,
                            ...n
                        } = e;
                        r = i, t = n
                    }
                    let i = this._buildArgs([], r, "base64", t),
                        n = await this._rpcRequest("getBlockProduction", i),
                        s = (0, y.Ue)(n, tc);
                    if ("error" in s) throw new ej(s.error, "failed to get block production information");
                    return s.result
                }
                async getTransaction(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgsAtLeastConfirmed([e], r, void 0, i), s = await this._rpcRequest("getTransaction", n), o = (0, y.Ue)(s, ra);
                    if ("error" in o) throw new ej(o.error, "failed to get transaction");
                    let a = o.result;
                    return a ? { ...a,
                        transaction: { ...a.transaction,
                            message: e3(a.version, a.transaction.message)
                        }
                    } : a
                }
                async getParsedTransaction(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i), s = await this._rpcRequest("getTransaction", n), o = (0, y.Ue)(s, rc);
                    if ("error" in o) throw new ej(o.error, "failed to get transaction");
                    return o.result
                }
                async getParsedTransactions(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = e.map(e => ({
                        methodName: "getTransaction",
                        args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", i)
                    }));
                    return (await this._rpcBatchRequest(n)).map(e => {
                        let t = (0, y.Ue)(e, rc);
                        if ("error" in t) throw new ej(t.error, "failed to get transactions");
                        return t.result
                    })
                }
                async getTransactions(e, t) {
                    let {
                        commitment: r,
                        config: i
                    } = eQ(t), n = e.map(e => ({
                        methodName: "getTransaction",
                        args: this._buildArgsAtLeastConfirmed([e], r, void 0, i)
                    }));
                    return (await this._rpcBatchRequest(n)).map(e => {
                        let t = (0, y.Ue)(e, ra);
                        if ("error" in t) throw new ej(t.error, "failed to get transactions");
                        let r = t.result;
                        return r ? { ...r,
                            transaction: { ...r.transaction,
                                message: e3(r.version, r.transaction.message)
                            }
                        } : r
                    })
                }
                async getConfirmedBlock(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t),
                        i = await this._rpcRequest("getConfirmedBlock", r),
                        n = (0, y.Ue)(i, rs);
                    if ("error" in n) throw new ej(n.error, "failed to get confirmed block");
                    let s = n.result;
                    if (!s) throw Error("Confirmed block " + e + " not found");
                    let o = { ...s,
                        transactions: s.transactions.map(({
                            transaction: e,
                            meta: t
                        }) => {
                            let r = new et(e.message);
                            return {
                                meta: t,
                                transaction: { ...e,
                                    message: r
                                }
                            }
                        })
                    };
                    return { ...o,
                        transactions: o.transactions.map(({
                            transaction: e,
                            meta: t
                        }) => ({
                            meta: t,
                            transaction: ea.populate(e.message, e.signatures)
                        }))
                    }
                }
                async getBlocks(e, t, r) {
                    let i = this._buildArgsAtLeastConfirmed(void 0 !== t ? [e, t] : [e], r),
                        n = await this._rpcRequest("getBlocks", i),
                        s = (0, y.Ue)(n, e8((0, y.IX)((0, y.Rx)())));
                    if ("error" in s) throw new ej(s.error, "failed to get blocks");
                    return s.result
                }
                async getBlockSignatures(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                            transactionDetails: "signatures",
                            rewards: !1
                        }),
                        i = await this._rpcRequest("getBlock", r),
                        n = (0, y.Ue)(i, ro);
                    if ("error" in n) throw new ej(n.error, "failed to get block");
                    let s = n.result;
                    if (!s) throw Error("Block " + e + " not found");
                    return s
                }
                async getConfirmedBlockSignatures(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                            transactionDetails: "signatures",
                            rewards: !1
                        }),
                        i = await this._rpcRequest("getConfirmedBlock", r),
                        n = (0, y.Ue)(i, ro);
                    if ("error" in n) throw new ej(n.error, "failed to get confirmed block");
                    let s = n.result;
                    if (!s) throw Error("Confirmed block " + e + " not found");
                    return s
                }
                async getConfirmedTransaction(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t),
                        i = await this._rpcRequest("getConfirmedTransaction", r),
                        n = (0, y.Ue)(i, ra);
                    if ("error" in n) throw new ej(n.error, "failed to get transaction");
                    let s = n.result;
                    if (!s) return s;
                    let o = new et(s.transaction.message),
                        a = s.transaction.signatures;
                    return { ...s,
                        transaction: ea.populate(o, a)
                    }
                }
                async getParsedConfirmedTransaction(e, t) {
                    let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
                        i = await this._rpcRequest("getConfirmedTransaction", r),
                        n = (0, y.Ue)(i, rc);
                    if ("error" in n) throw new ej(n.error, "failed to get confirmed transaction");
                    return n.result
                }
                async getParsedConfirmedTransactions(e, t) {
                    let r = e.map(e => ({
                        methodName: "getConfirmedTransaction",
                        args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
                    }));
                    return (await this._rpcBatchRequest(r)).map(e => {
                        let t = (0, y.Ue)(e, rc);
                        if ("error" in t) throw new ej(t.error, "failed to get confirmed transactions");
                        return t.result
                    })
                }
                async getConfirmedSignaturesForAddress(e, t, r) {
                    let i = {},
                        n = await this.getFirstAvailableBlock();
                    for (; !("until" in i) && !(--t <= 0) && !(t < n);) try {
                        let e = await this.getConfirmedBlockSignatures(t, "finalized");
                        e.signatures.length > 0 && (i.until = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped")) continue;
                        throw e
                    }
                    let s = await this.getSlot("finalized");
                    for (; !("before" in i) && !(++r > s);) try {
                        let e = await this.getConfirmedBlockSignatures(r);
                        e.signatures.length > 0 && (i.before = e.signatures[e.signatures.length - 1].toString())
                    } catch (e) {
                        if (e instanceof Error && e.message.includes("skipped")) continue;
                        throw e
                    }
                    return (await this.getConfirmedSignaturesForAddress2(e, i)).map(e => e.signature)
                }
                async getConfirmedSignaturesForAddress2(e, t, r) {
                    let i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
                        n = await this._rpcRequest("getConfirmedSignaturesForAddress2", i),
                        s = (0, y.Ue)(n, tE);
                    if ("error" in s) throw new ej(s.error, "failed to get confirmed signatures for address");
                    return s.result
                }
                async getSignaturesForAddress(e, t, r) {
                    let i = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
                        n = await this._rpcRequest("getSignaturesForAddress", i),
                        s = (0, y.Ue)(n, tB);
                    if ("error" in s) throw new ej(s.error, "failed to get signatures for address");
                    return s.result
                }
                async getAddressLookupTable(e, t) {
                    let {
                        context: r,
                        value: i
                    } = await this.getAccountInfoAndContext(e, t), n = null;
                    return null !== i && (n = new eD({
                        key: e,
                        state: eD.deserialize(i.data)
                    })), {
                        context: r,
                        value: n
                    }
                }
                async getNonceAndContext(e, t) {
                    let {
                        context: r,
                        value: i
                    } = await this.getAccountInfoAndContext(e, t), n = null;
                    return null !== i && (n = ex.fromAccountData(i.data)), {
                        context: r,
                        value: n
                    }
                }
                async getNonce(e, t) {
                    return await this.getNonceAndContext(e, t).then(e => e.value).catch(t => {
                        throw Error("failed to get nonce for account " + e.toBase58() + ": " + t)
                    })
                }
                async requestAirdrop(e, t) {
                    let r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
                        i = (0, y.Ue)(r, ry);
                    if ("error" in i) throw new ej(i.error, `airdrop to ${e.toBase58()} failed`);
                    return i.result
                }
                async _blockhashWithExpiryBlockHeight(e) {
                    if (!e) {
                        for (; this._pollingBlockhash;) await eS(100);
                        let e = Date.now() - this._blockhashInfo.lastFetch;
                        if (null !== this._blockhashInfo.latestBlockhash && !(e >= eY)) return this._blockhashInfo.latestBlockhash
                    }
                    return await this._pollNewBlockhash()
                }
                async _pollNewBlockhash() {
                    this._pollingBlockhash = !0;
                    try {
                        let e = Date.now(),
                            t = this._blockhashInfo.latestBlockhash,
                            r = t ? t.blockhash : null;
                        for (let e = 0; e < 50; e++) {
                            let e = await this.getLatestBlockhash("finalized");
                            if (r !== e.blockhash) return this._blockhashInfo = {
                                latestBlockhash: e,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            }, e;
                            await eS(200)
                        }
                        throw Error(`Unable to obtain a new blockhash after ${Date.now()-e}ms`)
                    } finally {
                        this._pollingBlockhash = !1
                    }
                }
                async getStakeMinimumDelegation(e) {
                    let {
                        commitment: t,
                        config: r
                    } = eQ(e), i = this._buildArgs([], t, "base64", r), n = await this._rpcRequest("getStakeMinimumDelegation", i), s = (0, y.Ue)(n, e2((0, y.Rx)()));
                    if ("error" in s) throw new ej(s.error, "failed to get stake minimum delegation");
                    return s.result
                }
                async simulateTransaction(e, t, r) {
                    let i;
                    if ("message" in e) {
                        let i = e.serialize(),
                            n = s.Buffer.from(i).toString("base64");
                        if (Array.isArray(t) || void 0 !== r) throw Error("Invalid arguments");
                        let o = t || {};
                        o.encoding = "base64", "commitment" in o || (o.commitment = this.commitment);
                        let a = await this._rpcRequest("simulateTransaction", [n, o]),
                            c = (0, y.Ue)(a, ta);
                        if ("error" in c) throw Error("failed to simulate transaction: " + c.error.message);
                        return c.result
                    }
                    if (e instanceof ea ? ((i = new ea).feePayer = e.feePayer, i.instructions = e.instructions, i.nonceInfo = e.nonceInfo, i.signatures = e.signatures) : (i = ea.populate(e))._message = i._json = void 0, void 0 !== t && !Array.isArray(t)) throw Error("Invalid arguments");
                    if (i.nonceInfo && t) i.sign(...t);
                    else {
                        let e = this._disableBlockhashCaching;
                        for (;;) {
                            let r = await this._blockhashWithExpiryBlockHeight(e);
                            if (i.lastValidBlockHeight = r.lastValidBlockHeight, i.recentBlockhash = r.blockhash, !t) break;
                            if (i.sign(...t), !i.signature) throw Error("!signature");
                            let n = i.signature.toString("base64");
                            if (this._blockhashInfo.simulatedSignatures.includes(n) || this._blockhashInfo.transactionSignatures.includes(n)) e = !0;
                            else {
                                this._blockhashInfo.simulatedSignatures.push(n);
                                break
                            }
                        }
                    }
                    let n = i._compile(),
                        o = n.serialize(),
                        a = i._serialize(o).toString("base64"),
                        c = {
                            encoding: "base64",
                            commitment: this.commitment
                        };
                    if (r) {
                        let e = (Array.isArray(r) ? r : n.nonProgramIds()).map(e => e.toBase58());
                        c.accounts = {
                            encoding: "base64",
                            addresses: e
                        }
                    }
                    t && (c.sigVerify = !0);
                    let u = await this._rpcRequest("simulateTransaction", [a, c]),
                        l = (0, y.Ue)(u, ta);
                    if ("error" in l) {
                        let e;
                        if ("data" in l.error && (e = l.error.data.logs) && Array.isArray(e)) {
                            let t = "\n    ",
                                r = t + e.join(t);
                            console.error(l.error.message, r)
                        }
                        throw new eG("failed to simulate transaction: " + l.error.message, e)
                    }
                    return l.result
                }
                async sendTransaction(e, t, r) {
                    if ("version" in e) {
                        if (t && Array.isArray(t)) throw Error("Invalid arguments");
                        let r = e.serialize();
                        return await this.sendRawTransaction(r, t)
                    }
                    if (void 0 === t || !Array.isArray(t)) throw Error("Invalid arguments");
                    if (e.nonceInfo) e.sign(...t);
                    else {
                        let r = this._disableBlockhashCaching;
                        for (;;) {
                            let i = await this._blockhashWithExpiryBlockHeight(r);
                            if (e.lastValidBlockHeight = i.lastValidBlockHeight, e.recentBlockhash = i.blockhash, e.sign(...t), !e.signature) throw Error("!signature");
                            let n = e.signature.toString("base64");
                            if (this._blockhashInfo.transactionSignatures.includes(n)) r = !0;
                            else {
                                this._blockhashInfo.transactionSignatures.push(n);
                                break
                            }
                        }
                    }
                    let i = e.serialize();
                    return await this.sendRawTransaction(i, r)
                }
                async sendRawTransaction(e, t) {
                    let r = v(e).toString("base64");
                    return await this.sendEncodedTransaction(r, t)
                }
                async sendEncodedTransaction(e, t) {
                    let r = {
                            encoding: "base64"
                        },
                        i = t && t.skipPreflight,
                        n = !0 === i ? "processed" : t && t.preflightCommitment || this.commitment;
                    t && null != t.maxRetries && (r.maxRetries = t.maxRetries), t && null != t.minContextSlot && (r.minContextSlot = t.minContextSlot), i && (r.skipPreflight = i), n && (r.preflightCommitment = n);
                    let s = await this._rpcRequest("sendTransaction", [e, r]),
                        o = (0, y.Ue)(s, rm);
                    if ("error" in o) {
                        let e;
                        throw "data" in o.error && (e = o.error.data.logs), new eG("failed to send transaction: " + o.error.message, e)
                    }
                    return o.result
                }
                _wsOnOpen() {
                    this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
                        (async () => {
                            try {
                                await this._rpcWebSocket.notify("ping")
                            } catch {}
                        })()
                    }, 5e3), this._updateSubscriptions()
                }
                _wsOnError(e) {
                    this._rpcWebSocketConnected = !1, console.error("ws error:", e.message)
                }
                _wsOnClose(e) {
                    if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), 1e3 === e) {
                        this._updateSubscriptions();
                        return
                    }
                    this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, t]) => {
                        this._setSubscription(e, { ...t,
                            state: "pending"
                        })
                    })
                }
                _setSubscription(e, t) {
                    let r = this._subscriptionsByHash[e] ? .state;
                    if (this._subscriptionsByHash[e] = t, r !== t.state) {
                        let r = this._subscriptionStateChangeCallbacksByHash[e];
                        r && r.forEach(e => {
                            try {
                                e(t.state)
                            } catch {}
                        })
                    }
                }
                _onSubscriptionStateChange(e, t) {
                    let r = this._subscriptionHashByClientSubscriptionId[e];
                    if (null == r) return () => {};
                    let i = this._subscriptionStateChangeCallbacksByHash[r] || = new Set;
                    return i.add(t), () => {
                        i.delete(t), 0 === i.size && delete this._subscriptionStateChangeCallbacksByHash[r]
                    }
                }
                async _updateSubscriptions() {
                    if (0 === Object.keys(this._subscriptionsByHash).length) {
                        this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                            this._rpcWebSocketIdleTimeout = null;
                            try {
                                this._rpcWebSocket.close()
                            } catch (e) {
                                e instanceof Error && console.log(`Error when closing socket connection: ${e.message}`)
                            }
                        }, 500));
                        return
                    }
                    if (null !== this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
                        this._rpcWebSocket.connect();
                        return
                    }
                    let e = this._rpcWebSocketGeneration,
                        t = () => e === this._rpcWebSocketGeneration;
                    await Promise.all(Object.keys(this._subscriptionsByHash).map(async e => {
                        let r = this._subscriptionsByHash[e];
                        if (void 0 !== r) switch (r.state) {
                            case "pending":
                            case "unsubscribed":
                                if (0 === r.callbacks.size) {
                                    delete this._subscriptionsByHash[e], "unsubscribed" === r.state && delete this._subscriptionCallbacksByServerSubscriptionId[r.serverSubscriptionId], await this._updateSubscriptions();
                                    return
                                }
                                await (async () => {
                                    let {
                                        args: i,
                                        method: n
                                    } = r;
                                    try {
                                        this._setSubscription(e, { ...r,
                                            state: "subscribing"
                                        });
                                        let t = await this._rpcWebSocket.call(n, i);
                                        this._setSubscription(e, { ...r,
                                            serverSubscriptionId: t,
                                            state: "subscribed"
                                        }), this._subscriptionCallbacksByServerSubscriptionId[t] = r.callbacks, await this._updateSubscriptions()
                                    } catch (s) {
                                        if (s instanceof Error && console.error(`${n} error for argument`, i, s.message), !t()) return;
                                        this._setSubscription(e, { ...r,
                                            state: "pending"
                                        }), await this._updateSubscriptions()
                                    }
                                })();
                                break;
                            case "subscribed":
                                0 === r.callbacks.size && await (async () => {
                                    let {
                                        serverSubscriptionId: i,
                                        unsubscribeMethod: n
                                    } = r;
                                    if (this._subscriptionsAutoDisposedByRpc.has(i)) this._subscriptionsAutoDisposedByRpc.delete(i);
                                    else {
                                        this._setSubscription(e, { ...r,
                                            state: "unsubscribing"
                                        }), this._setSubscription(e, { ...r,
                                            state: "unsubscribing"
                                        });
                                        try {
                                            await this._rpcWebSocket.call(n, [i])
                                        } catch (i) {
                                            if (i instanceof Error && console.error(`${n} error:`, i.message), !t()) return;
                                            this._setSubscription(e, { ...r,
                                                state: "subscribed"
                                            }), await this._updateSubscriptions();
                                            return
                                        }
                                    }
                                    this._setSubscription(e, { ...r,
                                        state: "unsubscribed"
                                    }), await this._updateSubscriptions()
                                })()
                        }
                    }))
                }
                _handleServerNotification(e, t) {
                    let r = this._subscriptionCallbacksByServerSubscriptionId[e];
                    void 0 !== r && r.forEach(e => {
                        try {
                            e(...t)
                        } catch (e) {
                            console.error(e)
                        }
                    })
                }
                _wsOnAccountNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, tT);
                    this._handleServerNotification(r, [t.value, t.context])
                }
                _makeSubscription(e, t) {
                    let r = this._nextClientSubscriptionId++,
                        i = ez([e.method, t]),
                        n = this._subscriptionsByHash[i];
                    return void 0 === n ? this._subscriptionsByHash[i] = { ...e,
                        args: t,
                        callbacks: new Set([e.callback]),
                        state: "pending"
                    } : n.callbacks.add(e.callback), this._subscriptionHashByClientSubscriptionId[r] = i, this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
                        delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r], delete this._subscriptionHashByClientSubscriptionId[r];
                        let t = this._subscriptionsByHash[i];
                        Z(void 0 !== t, `Could not find a \`Subscription\` when tearing down client subscription #${r}`), t.callbacks.delete(e.callback), await this._updateSubscriptions()
                    }, this._updateSubscriptions(), r
                }
                onAccountChange(e, t, r) {
                    let i = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64");
                    return this._makeSubscription({
                        callback: t,
                        method: "accountSubscribe",
                        unsubscribeMethod: "accountUnsubscribe"
                    }, i)
                }
                async removeAccountChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "account change")
                }
                _wsOnProgramAccountNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, tO);
                    this._handleServerNotification(r, [{
                        accountId: t.value.pubkey,
                        accountInfo: t.value.account
                    }, t.context])
                }
                onProgramAccountChange(e, t, r, i) {
                    let n = this._buildArgs([e.toBase58()], r || this._commitment || "finalized", "base64", i ? {
                        filters: i
                    } : void 0);
                    return this._makeSubscription({
                        callback: t,
                        method: "programSubscribe",
                        unsubscribeMethod: "programUnsubscribe"
                    }, n)
                }
                async removeProgramAccountChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "program account change")
                }
                onLogs(e, t, r) {
                    let i = this._buildArgs(["object" == typeof e ? {
                        mentions: [e.toString()]
                    } : e], r || this._commitment || "finalized");
                    return this._makeSubscription({
                        callback: t,
                        method: "logsSubscribe",
                        unsubscribeMethod: "logsUnsubscribe"
                    }, i)
                }
                async removeOnLogsListener(e) {
                    await this._unsubscribeClientSubscription(e, "logs")
                }
                _wsOnLogsNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, rb);
                    this._handleServerNotification(r, [t.value, t.context])
                }
                _wsOnSlotNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, tW);
                    this._handleServerNotification(r, [t])
                }
                onSlotChange(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "slotSubscribe",
                        unsubscribeMethod: "slotUnsubscribe"
                    }, [])
                }
                async removeSlotChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "slot change")
                }
                _wsOnSlotUpdatesNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, tN);
                    this._handleServerNotification(r, [t])
                }
                onSlotUpdate(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "slotsUpdatesSubscribe",
                        unsubscribeMethod: "slotsUpdatesUnsubscribe"
                    }, [])
                }
                async removeSlotUpdateListener(e) {
                    await this._unsubscribeClientSubscription(e, "slot update")
                }
                async _unsubscribeClientSubscription(e, t) {
                    let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
                    r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
                }
                _buildArgs(e, t, r, i) {
                    let n = t || this._commitment;
                    if (n || r || i) {
                        let t = {};
                        r && (t.encoding = r), n && (t.commitment = n), i && (t = Object.assign(t, i)), e.push(t)
                    }
                    return e
                }
                _buildArgsAtLeastConfirmed(e, t, r, i) {
                    let n = t || this._commitment;
                    if (n && !["confirmed", "finalized"].includes(n)) throw Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
                    return this._buildArgs(e, t, r, i)
                }
                _wsOnSignatureNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, tz);
                    "receivedSignature" !== t.value && this._subscriptionsAutoDisposedByRpc.add(r), this._handleServerNotification(r, "receivedSignature" === t.value ? [{
                        type: "received"
                    }, t.context] : [{
                        type: "status",
                        result: t.value
                    }, t.context])
                }
                onSignature(e, t, r) {
                    let i = this._buildArgs([e], r || this._commitment || "finalized"),
                        n = this._makeSubscription({
                            callback: (e, r) => {
                                if ("status" === e.type) {
                                    t(e.result, r);
                                    try {
                                        this.removeSignatureListener(n)
                                    } catch (e) {}
                                }
                            },
                            method: "signatureSubscribe",
                            unsubscribeMethod: "signatureUnsubscribe"
                        }, i);
                    return n
                }
                onSignatureWithOptions(e, t, r) {
                    let {
                        commitment: i,
                        ...n
                    } = { ...r,
                        commitment: r && r.commitment || this._commitment || "finalized"
                    }, s = this._buildArgs([e], i, void 0, n), o = this._makeSubscription({
                        callback: (e, r) => {
                            t(e, r);
                            try {
                                this.removeSignatureListener(o)
                            } catch (e) {}
                        },
                        method: "signatureSubscribe",
                        unsubscribeMethod: "signatureUnsubscribe"
                    }, s);
                    return o
                }
                async removeSignatureListener(e) {
                    await this._unsubscribeClientSubscription(e, "signature result")
                }
                _wsOnRootNotification(e) {
                    let {
                        result: t,
                        subscription: r
                    } = (0, y.Ue)(e, tU);
                    this._handleServerNotification(r, [t])
                }
                onRootChange(e) {
                    return this._makeSubscription({
                        callback: e,
                        method: "rootSubscribe",
                        unsubscribeMethod: "rootUnsubscribe"
                    }, [])
                }
                async removeRootChangeListener(e) {
                    await this._unsubscribeClientSubscription(e, "root change")
                }
            }
            class rw {
                constructor(e) {
                    this._keypair = void 0, this._keypair = e ? ? I()
                }
                static generate() {
                    return new rw(I())
                }
                static fromSecretKey(e, t) {
                    if (64 !== e.byteLength) throw Error("bad secret key size");
                    let r = e.slice(32, 64);
                    if (!t || !t.skipValidation) {
                        let t = A(e.slice(0, 32));
                        for (let e = 0; e < 32; e++)
                            if (r[e] !== t[e]) throw Error("provided secretKey is invalid")
                    }
                    return new rw({
                        publicKey: r,
                        secretKey: e
                    })
                }
                static fromSeed(e) {
                    let t = A(e),
                        r = new Uint8Array(64);
                    return r.set(e), r.set(t, 32), new rw({
                        publicKey: t,
                        secretKey: r
                    })
                }
                get publicKey() {
                    return new W(this._keypair.publicKey)
                }
                get secretKey() {
                    return new Uint8Array(this._keypair.secretKey)
                }
            }
            let r_ = Object.freeze({
                CreateLookupTable: {
                    index: 0,
                    layout: g.n_([g.Jq("instruction"), ev("recentSlot"), g.u8("bumpSeed")])
                },
                FreezeLookupTable: {
                    index: 1,
                    layout: g.n_([g.Jq("instruction")])
                },
                ExtendLookupTable: {
                    index: 2,
                    layout: g.n_([g.Jq("instruction"), ev(), g.A9(J(), g.cv(g.Jq(), -8), "addresses")])
                },
                DeactivateLookupTable: {
                    index: 3,
                    layout: g.n_([g.Jq("instruction")])
                },
                CloseLookupTable: {
                    index: 4,
                    layout: g.n_([g.Jq("instruction")])
                }
            });
            class rI {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = g.Jq("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(r_))
                        if (i.index == r) {
                            t = e;
                            break
                        }
                    if (!t) throw Error("Invalid Instruction. Should be a LookupTable Instruction");
                    return t
                }
                static decodeCreateLookupTable(e) {
                    this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
                    let {
                        recentSlot: t
                    } = e_(r_.CreateLookupTable, e.data);
                    return {
                        authority: e.keys[1].pubkey,
                        payer: e.keys[2].pubkey,
                        recentSlot: Number(t)
                    }
                }
                static decodeExtendLookupTable(e) {
                    if (this.checkProgramId(e.programId), e.keys.length < 2) throw Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
                    let {
                        addresses: t
                    } = e_(r_.ExtendLookupTable, e.data);
                    return {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey,
                        payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
                        addresses: t.map(e => new W(e))
                    }
                }
                static decodeCloseLookupTable(e) {
                    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 3), {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey,
                        recipient: e.keys[2].pubkey
                    }
                }
                static decodeFreezeLookupTable(e) {
                    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey
                    }
                }
                static decodeDeactivateLookupTable(e) {
                    return this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 2), {
                        lookupTable: e.keys[0].pubkey,
                        authority: e.keys[1].pubkey
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rA.programId)) throw Error("invalid instruction; programId is not AddressLookupTable Program")
                }
                static checkKeysLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            class rA {
                constructor() {}
                static createLookupTable(e) {
                    let [t, r] = W.findProgramAddressSync([e.authority.toBuffer(), (0, p.k$)(BigInt(e.recentSlot), 8)], this.programId), i = ew(r_.CreateLookupTable, {
                        recentSlot: BigInt(e.recentSlot),
                        bumpSeed: r
                    }), n = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: e.authority,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: e.payer,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: eT.programId,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return [new eo({
                        programId: this.programId,
                        keys: n,
                        data: i
                    }), t]
                }
                static freezeLookupTable(e) {
                    let t = ew(r_.FreezeLookupTable),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }];
                    return new eo({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
                static extendLookupTable(e) {
                    let t = ew(r_.ExtendLookupTable, {
                            addresses: e.addresses.map(e => e.toBytes())
                        }),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }];
                    return e.payer && r.push({
                        pubkey: e.payer,
                        isSigner: !0,
                        isWritable: !0
                    }, {
                        pubkey: eT.programId,
                        isSigner: !1,
                        isWritable: !1
                    }), new eo({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
                static deactivateLookupTable(e) {
                    let t = ew(r_.DeactivateLookupTable),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }];
                    return new eo({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
                static closeLookupTable(e) {
                    let t = ew(r_.CloseLookupTable),
                        r = [{
                            pubkey: e.lookupTable,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: e.authority,
                            isSigner: !0,
                            isWritable: !1
                        }, {
                            pubkey: e.recipient,
                            isSigner: !1,
                            isWritable: !0
                        }];
                    return new eo({
                        programId: this.programId,
                        keys: r,
                        data: t
                    })
                }
            }
            rA.programId = new W("AddressLookupTab1e1111111111111111111111111");
            class rR {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = g.u8("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rx))
                        if (i.index == r) {
                            t = e;
                            break
                        }
                    if (!t) throw Error("Instruction type incorrect; not a ComputeBudgetInstruction");
                    return t
                }
                static decodeRequestUnits(e) {
                    this.checkProgramId(e.programId);
                    let {
                        units: t,
                        additionalFee: r
                    } = e_(rx.RequestUnits, e.data);
                    return {
                        units: t,
                        additionalFee: r
                    }
                }
                static decodeRequestHeapFrame(e) {
                    this.checkProgramId(e.programId);
                    let {
                        bytes: t
                    } = e_(rx.RequestHeapFrame, e.data);
                    return {
                        bytes: t
                    }
                }
                static decodeSetComputeUnitLimit(e) {
                    this.checkProgramId(e.programId);
                    let {
                        units: t
                    } = e_(rx.SetComputeUnitLimit, e.data);
                    return {
                        units: t
                    }
                }
                static decodeSetComputeUnitPrice(e) {
                    this.checkProgramId(e.programId);
                    let {
                        microLamports: t
                    } = e_(rx.SetComputeUnitPrice, e.data);
                    return {
                        microLamports: t
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rP.programId)) throw Error("invalid instruction; programId is not ComputeBudgetProgram")
                }
            }
            let rx = Object.freeze({
                RequestUnits: {
                    index: 0,
                    layout: g.n_([g.u8("instruction"), g.Jq("units"), g.Jq("additionalFee")])
                },
                RequestHeapFrame: {
                    index: 1,
                    layout: g.n_([g.u8("instruction"), g.Jq("bytes")])
                },
                SetComputeUnitLimit: {
                    index: 2,
                    layout: g.n_([g.u8("instruction"), g.Jq("units")])
                },
                SetComputeUnitPrice: {
                    index: 3,
                    layout: g.n_([g.u8("instruction"), ev("microLamports")])
                }
            });
            class rP {
                constructor() {}
                static requestUnits(e) {
                    let t = ew(rx.RequestUnits, e);
                    return new eo({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
                static requestHeapFrame(e) {
                    let t = ew(rx.RequestHeapFrame, e);
                    return new eo({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
                static setComputeUnitLimit(e) {
                    let t = ew(rx.SetComputeUnitLimit, e);
                    return new eo({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
                static setComputeUnitPrice(e) {
                    let t = ew(rx.SetComputeUnitPrice, {
                        microLamports: BigInt(e.microLamports)
                    });
                    return new eo({
                        keys: [],
                        programId: this.programId,
                        data: t
                    })
                }
            }
            rP.programId = new W("ComputeBudget111111111111111111111111111111");
            let rv = g.n_([g.u8("numSignatures"), g.u8("padding"), g.KB("signatureOffset"), g.KB("signatureInstructionIndex"), g.KB("publicKeyOffset"), g.KB("publicKeyInstructionIndex"), g.KB("messageDataOffset"), g.KB("messageDataSize"), g.KB("messageInstructionIndex")]);
            class rE {
                constructor() {}
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: i,
                        instructionIndex: n
                    } = e;
                    Z(32 === t.length, `Public Key must be 32 bytes but received ${t.length} bytes`), Z(64 === i.length, `Signature must be 64 bytes but received ${i.length} bytes`);
                    let o = rv.span,
                        a = o + t.length,
                        c = a + i.length,
                        u = s.Buffer.alloc(c + r.length),
                        l = null == n ? 65535 : n;
                    return rv.encode({
                        numSignatures: 1,
                        padding: 0,
                        signatureOffset: a,
                        signatureInstructionIndex: l,
                        publicKeyOffset: o,
                        publicKeyInstructionIndex: l,
                        messageDataOffset: c,
                        messageDataSize: r.length,
                        messageInstructionIndex: l
                    }, u), u.fill(t, o), u.fill(i, a), u.fill(r, c), new eo({
                        keys: [],
                        programId: rE.programId,
                        data: u
                    })
                }
                static createInstructionWithPrivateKey(e) {
                    let {
                        privateKey: t,
                        message: r,
                        instructionIndex: i
                    } = e;
                    Z(64 === t.length, `Private key must be 64 bytes but received ${t.length} bytes`);
                    try {
                        let e = rw.fromSecretKey(t),
                            n = e.publicKey.toBytes(),
                            s = x(r, e.secretKey);
                        return this.createInstructionWithPublicKey({
                            publicKey: n,
                            message: r,
                            signature: s,
                            instructionIndex: i
                        })
                    } catch (e) {
                        throw Error(`Error creating instruction; ${e}`)
                    }
                }
            }
            rE.programId = new W("Ed25519SigVerify111111111111111111111111111");
            let rB = (e, t) => {
                let r = w.kA.sign(e, t);
                return [r.toCompactRawBytes(), r.recovery]
            };
            w.kA.utils.isValidPrivateKey;
            let rT = w.kA.getPublicKey,
                rC = g.n_([g.u8("numSignatures"), g.KB("signatureOffset"), g.u8("signatureInstructionIndex"), g.KB("ethAddressOffset"), g.u8("ethAddressInstructionIndex"), g.KB("messageDataOffset"), g.KB("messageDataSize"), g.u8("messageInstructionIndex"), g.Ik(20, "ethAddress"), g.Ik(64, "signature"), g.u8("recoveryId")]);
            class rO {
                constructor() {}
                static publicKeyToEthAddress(e) {
                    Z(64 === e.length, `Public key must be 64 bytes but received ${e.length} bytes`);
                    try {
                        return s.Buffer.from((0, S.fr)(v(e))).slice(-20)
                    } catch (e) {
                        throw Error(`Error constructing Ethereum address: ${e}`)
                    }
                }
                static createInstructionWithPublicKey(e) {
                    let {
                        publicKey: t,
                        message: r,
                        signature: i,
                        recoveryId: n,
                        instructionIndex: s
                    } = e;
                    return rO.createInstructionWithEthAddress({
                        ethAddress: rO.publicKeyToEthAddress(t),
                        message: r,
                        signature: i,
                        recoveryId: n,
                        instructionIndex: s
                    })
                }
                static createInstructionWithEthAddress(e) {
                    let t;
                    let {
                        ethAddress: r,
                        message: i,
                        signature: n,
                        recoveryId: o,
                        instructionIndex: a = 0
                    } = e;
                    Z(20 === (t = "string" == typeof r ? r.startsWith("0x") ? s.Buffer.from(r.substr(2), "hex") : s.Buffer.from(r, "hex") : r).length, `Address must be 20 bytes but received ${t.length} bytes`);
                    let c = 12 + t.length,
                        u = c + n.length + 1,
                        l = s.Buffer.alloc(rC.span + i.length);
                    return rC.encode({
                        numSignatures: 1,
                        signatureOffset: c,
                        signatureInstructionIndex: a,
                        ethAddressOffset: 12,
                        ethAddressInstructionIndex: a,
                        messageDataOffset: u,
                        messageDataSize: i.length,
                        messageInstructionIndex: a,
                        signature: v(n),
                        ethAddress: v(t),
                        recoveryId: o
                    }, l), l.fill(v(i), rC.span), new eo({
                        keys: [],
                        programId: rO.programId,
                        data: l
                    })
                }
                static createInstructionWithPrivateKey(e) {
                    let {
                        privateKey: t,
                        message: r,
                        instructionIndex: i
                    } = e;
                    Z(32 === t.length, `Private key must be 32 bytes but received ${t.length} bytes`);
                    try {
                        let e = v(t),
                            n = rT(e, !1).slice(1),
                            o = s.Buffer.from((0, S.fr)(v(r))),
                            [a, c] = rB(o, e);
                        return this.createInstructionWithPublicKey({
                            publicKey: n,
                            message: r,
                            signature: a,
                            recoveryId: c,
                            instructionIndex: i
                        })
                    } catch (e) {
                        throw Error(`Error creating instruction; ${e}`)
                    }
                }
            }
            rO.programId = new W("KeccakSecp256k11111111111111111111111111111");
            let rL = new W("StakeConfig11111111111111111111111111111111");
            class rW {
                constructor(e, t) {
                    this.staker = void 0, this.withdrawer = void 0, this.staker = e, this.withdrawer = t
                }
            }
            class rK {
                constructor(e, t, r) {
                    this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = e, this.epoch = t, this.custodian = r
                }
            }
            rK.default = new rK(0, 0, W.default);
            class rN {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = g.Jq("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rz))
                        if (i.index == r) {
                            t = e;
                            break
                        }
                    if (!t) throw Error("Instruction type incorrect; not a StakeInstruction");
                    return t
                }
                static decodeInitialize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        authorized: t,
                        lockup: r
                    } = e_(rz.Initialize, e.data);
                    return {
                        stakePubkey: e.keys[0].pubkey,
                        authorized: new rW(new W(t.staker), new W(t.withdrawer)),
                        lockup: new rK(r.unixTimestamp, r.epoch, new W(r.custodian))
                    }
                }
                static decodeDelegate(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 6), e_(rz.Delegate, e.data), {
                        stakePubkey: e.keys[0].pubkey,
                        votePubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[5].pubkey
                    }
                }
                static decodeAuthorize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        newAuthorized: t,
                        stakeAuthorizationType: r
                    } = e_(rz.Authorize, e.data), i = {
                        stakePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey,
                        newAuthorizedPubkey: new W(t),
                        stakeAuthorizationType: {
                            index: r
                        }
                    };
                    return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey), i
                }
                static decodeAuthorizeWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
                    let {
                        newAuthorized: t,
                        stakeAuthorizationType: r,
                        authoritySeed: i,
                        authorityOwner: n
                    } = e_(rz.AuthorizeWithSeed, e.data), s = {
                        stakePubkey: e.keys[0].pubkey,
                        authorityBase: e.keys[1].pubkey,
                        authoritySeed: i,
                        authorityOwner: new W(n),
                        newAuthorizedPubkey: new W(t),
                        stakeAuthorizationType: {
                            index: r
                        }
                    };
                    return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s
                }
                static decodeSplit(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        lamports: t
                    } = e_(rz.Split, e.data);
                    return {
                        stakePubkey: e.keys[0].pubkey,
                        splitStakePubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[2].pubkey,
                        lamports: t
                    }
                }
                static decodeMerge(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), e_(rz.Merge, e.data), {
                        stakePubkey: e.keys[0].pubkey,
                        sourceStakePubKey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[4].pubkey
                    }
                }
                static decodeWithdraw(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
                    let {
                        lamports: t
                    } = e_(rz.Withdraw, e.data), r = {
                        stakePubkey: e.keys[0].pubkey,
                        toPubkey: e.keys[1].pubkey,
                        authorizedPubkey: e.keys[4].pubkey,
                        lamports: t
                    };
                    return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r
                }
                static decodeDeactivate(e) {
                    return this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3), e_(rz.Deactivate, e.data), {
                        stakePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rq.programId)) throw Error("invalid instruction; programId is not StakeProgram")
                }
                static checkKeyLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            let rz = Object.freeze({
                    Initialize: {
                        index: 0,
                        layout: g.n_([g.Jq("instruction"), ((e = "authorized") => g.n_([J("staker"), J("withdrawer")], e))(), ((e = "lockup") => g.n_([g.gM("unixTimestamp"), g.gM("epoch"), J("custodian")], e))()])
                    },
                    Authorize: {
                        index: 1,
                        layout: g.n_([g.Jq("instruction"), J("newAuthorized"), g.Jq("stakeAuthorizationType")])
                    },
                    Delegate: {
                        index: 2,
                        layout: g.n_([g.Jq("instruction")])
                    },
                    Split: {
                        index: 3,
                        layout: g.n_([g.Jq("instruction"), g.gM("lamports")])
                    },
                    Withdraw: {
                        index: 4,
                        layout: g.n_([g.Jq("instruction"), g.gM("lamports")])
                    },
                    Deactivate: {
                        index: 5,
                        layout: g.n_([g.Jq("instruction")])
                    },
                    Merge: {
                        index: 7,
                        layout: g.n_([g.Jq("instruction")])
                    },
                    AuthorizeWithSeed: {
                        index: 8,
                        layout: g.n_([g.Jq("instruction"), J("newAuthorized"), g.Jq("stakeAuthorizationType"), H("authoritySeed"), J("authorityOwner")])
                    }
                }),
                rU = Object.freeze({
                    Staker: {
                        index: 0
                    },
                    Withdrawer: {
                        index: 1
                    }
                });
            class rq {
                constructor() {}
                static initialize(e) {
                    let {
                        stakePubkey: t,
                        authorized: r,
                        lockup: i
                    } = e, n = i || rK.default, s = ew(rz.Initialize, {
                        authorized: {
                            staker: v(r.staker.toBuffer()),
                            withdrawer: v(r.withdrawer.toBuffer())
                        },
                        lockup: {
                            unixTimestamp: n.unixTimestamp,
                            epoch: n.epoch,
                            custodian: v(n.custodian.toBuffer())
                        }
                    });
                    return new eo({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ep,
                            isSigner: !1,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static createAccountWithSeed(e) {
                    let t = new ea;
                    t.add(eT.createAccountWithSeed({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.stakePubkey,
                        basePubkey: e.basePubkey,
                        seed: e.seed,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    }));
                    let {
                        stakePubkey: r,
                        authorized: i,
                        lockup: n
                    } = e;
                    return t.add(this.initialize({
                        stakePubkey: r,
                        authorized: i,
                        lockup: n
                    }))
                }
                static createAccount(e) {
                    let t = new ea;
                    t.add(eT.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.stakePubkey,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    }));
                    let {
                        stakePubkey: r,
                        authorized: i,
                        lockup: n
                    } = e;
                    return t.add(this.initialize({
                        stakePubkey: r,
                        authorized: i,
                        lockup: n
                    }))
                }
                static delegate(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        votePubkey: i
                    } = e, n = ew(rz.Delegate);
                    return new ea().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: el,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: eb,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: rL,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static authorize(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: i,
                        stakeAuthorizationType: n,
                        custodianPubkey: s
                    } = e, o = ew(rz.Authorize, {
                        newAuthorized: v(i.toBuffer()),
                        stakeAuthorizationType: n.index
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: el,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return s && a.push({
                        pubkey: s,
                        isSigner: !0,
                        isWritable: !1
                    }), new ea().add({
                        keys: a,
                        programId: this.programId,
                        data: o
                    })
                }
                static authorizeWithSeed(e) {
                    let {
                        stakePubkey: t,
                        authorityBase: r,
                        authoritySeed: i,
                        authorityOwner: n,
                        newAuthorizedPubkey: s,
                        stakeAuthorizationType: o,
                        custodianPubkey: a
                    } = e, c = ew(rz.AuthorizeWithSeed, {
                        newAuthorized: v(s.toBuffer()),
                        stakeAuthorizationType: o.index,
                        authoritySeed: i,
                        authorityOwner: v(n.toBuffer())
                    }), u = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }, {
                        pubkey: el,
                        isSigner: !1,
                        isWritable: !1
                    }];
                    return a && u.push({
                        pubkey: a,
                        isSigner: !0,
                        isWritable: !1
                    }), new ea().add({
                        keys: u,
                        programId: this.programId,
                        data: c
                    })
                }
                static splitInstruction(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        splitStakePubkey: i,
                        lamports: n
                    } = e, s = ew(rz.Split, {
                        lamports: n
                    });
                    return new eo({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: i,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static split(e, t) {
                    let r = new ea;
                    return r.add(eT.createAccount({
                        fromPubkey: e.authorizedPubkey,
                        newAccountPubkey: e.splitStakePubkey,
                        lamports: t,
                        space: this.space,
                        programId: this.programId
                    })), r.add(this.splitInstruction(e))
                }
                static splitWithSeed(e, t) {
                    let {
                        stakePubkey: r,
                        authorizedPubkey: i,
                        splitStakePubkey: n,
                        basePubkey: s,
                        seed: o,
                        lamports: a
                    } = e, c = new ea;
                    return c.add(eT.allocate({
                        accountPubkey: n,
                        basePubkey: s,
                        seed: o,
                        space: this.space,
                        programId: this.programId
                    })), t && t > 0 && c.add(eT.transfer({
                        fromPubkey: e.authorizedPubkey,
                        toPubkey: n,
                        lamports: t
                    })), c.add(this.splitInstruction({
                        stakePubkey: r,
                        authorizedPubkey: i,
                        splitStakePubkey: n,
                        lamports: a
                    }))
                }
                static merge(e) {
                    let {
                        stakePubkey: t,
                        sourceStakePubKey: r,
                        authorizedPubkey: i
                    } = e, n = ew(rz.Merge);
                    return new ea().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: el,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: eb,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: i,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static withdraw(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r,
                        toPubkey: i,
                        lamports: n,
                        custodianPubkey: s
                    } = e, o = ew(rz.Withdraw, {
                        lamports: n
                    }), a = [{
                        pubkey: t,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: i,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: el,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: eb,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: r,
                        isSigner: !0,
                        isWritable: !1
                    }];
                    return s && a.push({
                        pubkey: s,
                        isSigner: !0,
                        isWritable: !1
                    }), new ea().add({
                        keys: a,
                        programId: this.programId,
                        data: o
                    })
                }
                static deactivate(e) {
                    let {
                        stakePubkey: t,
                        authorizedPubkey: r
                    } = e, i = ew(rz.Deactivate);
                    return new ea().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: el,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: i
                    })
                }
            }
            rq.programId = new W("Stake11111111111111111111111111111111111111"), rq.space = 200;
            class rG {
                constructor(e, t, r, i) {
                    this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = e, this.authorizedVoter = t, this.authorizedWithdrawer = r, this.commission = i
                }
            }
            class rM {
                constructor() {}
                static decodeInstructionType(e) {
                    let t;
                    this.checkProgramId(e.programId);
                    let r = g.Jq("instruction").decode(e.data);
                    for (let [e, i] of Object.entries(rj))
                        if (i.index == r) {
                            t = e;
                            break
                        }
                    if (!t) throw Error("Instruction type incorrect; not a VoteInstruction");
                    return t
                }
                static decodeInitializeAccount(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
                    let {
                        voteInit: t
                    } = e_(rj.InitializeAccount, e.data);
                    return {
                        votePubkey: e.keys[0].pubkey,
                        nodePubkey: e.keys[3].pubkey,
                        voteInit: new rG(new W(t.nodePubkey), new W(t.authorizedVoter), new W(t.authorizedWithdrawer), t.commission)
                    }
                }
                static decodeAuthorize(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        newAuthorized: t,
                        voteAuthorizationType: r
                    } = e_(rj.Authorize, e.data);
                    return {
                        votePubkey: e.keys[0].pubkey,
                        authorizedPubkey: e.keys[2].pubkey,
                        newAuthorizedPubkey: new W(t),
                        voteAuthorizationType: {
                            index: r
                        }
                    }
                }
                static decodeAuthorizeWithSeed(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        voteAuthorizeWithSeedArgs: {
                            currentAuthorityDerivedKeyOwnerPubkey: t,
                            currentAuthorityDerivedKeySeed: r,
                            newAuthorized: i,
                            voteAuthorizationType: n
                        }
                    } = e_(rj.AuthorizeWithSeed, e.data);
                    return {
                        currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
                        currentAuthorityDerivedKeyOwnerPubkey: new W(t),
                        currentAuthorityDerivedKeySeed: r,
                        newAuthorizedPubkey: new W(i),
                        voteAuthorizationType: {
                            index: n
                        },
                        votePubkey: e.keys[0].pubkey
                    }
                }
                static decodeWithdraw(e) {
                    this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
                    let {
                        lamports: t
                    } = e_(rj.Withdraw, e.data);
                    return {
                        votePubkey: e.keys[0].pubkey,
                        authorizedWithdrawerPubkey: e.keys[2].pubkey,
                        lamports: t,
                        toPubkey: e.keys[1].pubkey
                    }
                }
                static checkProgramId(e) {
                    if (!e.equals(rJ.programId)) throw Error("invalid instruction; programId is not VoteProgram")
                }
                static checkKeyLength(e, t) {
                    if (e.length < t) throw Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
                }
            }
            let rj = Object.freeze({
                    InitializeAccount: {
                        index: 0,
                        layout: g.n_([g.Jq("instruction"), ((e = "voteInit") => g.n_([J("nodePubkey"), J("authorizedVoter"), J("authorizedWithdrawer"), g.u8("commission")], e))()])
                    },
                    Authorize: {
                        index: 1,
                        layout: g.n_([g.Jq("instruction"), J("newAuthorized"), g.Jq("voteAuthorizationType")])
                    },
                    Withdraw: {
                        index: 3,
                        layout: g.n_([g.Jq("instruction"), g.gM("lamports")])
                    },
                    UpdateValidatorIdentity: {
                        index: 4,
                        layout: g.n_([g.Jq("instruction")])
                    },
                    AuthorizeWithSeed: {
                        index: 10,
                        layout: g.n_([g.Jq("instruction"), ((e = "voteAuthorizeWithSeedArgs") => g.n_([g.Jq("voteAuthorizationType"), J("currentAuthorityDerivedKeyOwnerPubkey"), H("currentAuthorityDerivedKeySeed"), J("newAuthorized")], e))()])
                    }
                }),
                rV = Object.freeze({
                    Voter: {
                        index: 0
                    },
                    Withdrawer: {
                        index: 1
                    }
                });
            class rJ {
                constructor() {}
                static initializeAccount(e) {
                    let {
                        votePubkey: t,
                        nodePubkey: r,
                        voteInit: i
                    } = e, n = ew(rj.InitializeAccount, {
                        voteInit: {
                            nodePubkey: v(i.nodePubkey.toBuffer()),
                            authorizedVoter: v(i.authorizedVoter.toBuffer()),
                            authorizedWithdrawer: v(i.authorizedWithdrawer.toBuffer()),
                            commission: i.commission
                        }
                    });
                    return new eo({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: ep,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: el,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
                static createAccount(e) {
                    let t = new ea;
                    return t.add(eT.createAccount({
                        fromPubkey: e.fromPubkey,
                        newAccountPubkey: e.votePubkey,
                        lamports: e.lamports,
                        space: this.space,
                        programId: this.programId
                    })), t.add(this.initializeAccount({
                        votePubkey: e.votePubkey,
                        nodePubkey: e.voteInit.nodePubkey,
                        voteInit: e.voteInit
                    }))
                }
                static authorize(e) {
                    let {
                        votePubkey: t,
                        authorizedPubkey: r,
                        newAuthorizedPubkey: i,
                        voteAuthorizationType: n
                    } = e, s = ew(rj.Authorize, {
                        newAuthorized: v(i.toBuffer()),
                        voteAuthorizationType: n.index
                    });
                    return new ea().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: el,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static authorizeWithSeed(e) {
                    let {
                        currentAuthorityDerivedKeyBasePubkey: t,
                        currentAuthorityDerivedKeyOwnerPubkey: r,
                        currentAuthorityDerivedKeySeed: i,
                        newAuthorizedPubkey: n,
                        voteAuthorizationType: s,
                        votePubkey: o
                    } = e, a = ew(rj.AuthorizeWithSeed, {
                        voteAuthorizeWithSeedArgs: {
                            currentAuthorityDerivedKeyOwnerPubkey: v(r.toBuffer()),
                            currentAuthorityDerivedKeySeed: i,
                            newAuthorized: v(n.toBuffer()),
                            voteAuthorizationType: s.index
                        }
                    });
                    return new ea().add({
                        keys: [{
                            pubkey: o,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: el,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: t,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: a
                    })
                }
                static withdraw(e) {
                    let {
                        votePubkey: t,
                        authorizedWithdrawerPubkey: r,
                        lamports: i,
                        toPubkey: n
                    } = e, s = ew(rj.Withdraw, {
                        lamports: i
                    });
                    return new ea().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: s
                    })
                }
                static safeWithdraw(e, t, r) {
                    if (e.lamports > t - r) throw Error("Withdraw will leave vote account with insufficient funds.");
                    return rJ.withdraw(e)
                }
                static updateValidatorIdentity(e) {
                    let {
                        votePubkey: t,
                        authorizedWithdrawerPubkey: r,
                        nodePubkey: i
                    } = e, n = ew(rj.UpdateValidatorIdentity);
                    return new ea().add({
                        keys: [{
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: i,
                            isSigner: !0,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !0,
                            isWritable: !1
                        }],
                        programId: this.programId,
                        data: n
                    })
                }
            }
            rJ.programId = new W("Vote111111111111111111111111111111111111111"), rJ.space = 3762;
            let rD = new W("Va1idator1nfo111111111111111111111111111111"),
                rH = (0, y.dt)({
                    name: (0, y.Z_)(),
                    website: (0, y.jt)((0, y.Z_)()),
                    details: (0, y.jt)((0, y.Z_)()),
                    keybaseUsername: (0, y.jt)((0, y.Z_)())
                });
            class r$ {
                constructor(e, t) {
                    this.key = void 0, this.info = void 0, this.key = e, this.info = t
                }
                static fromConfigData(e) {
                    let t = [...e];
                    if (2 !== $(t)) return null;
                    let r = [];
                    for (let e = 0; e < 2; e++) {
                        let e = new W(ee(t, 0, O)),
                            i = 1 === Q(t);
                        r.push({
                            publicKey: e,
                            isSigner: i
                        })
                    }
                    if (r[0].publicKey.equals(rD) && r[1].isSigner) {
                        let e = JSON.parse(H().decode(s.Buffer.from(t)));
                        return (0, y.hu)(e, rH), new r$(r[1].publicKey, e)
                    }
                    return null
                }
            }
            let rF = new W("Vote111111111111111111111111111111111111111"),
                rZ = g.n_([J("nodePubkey"), J("authorizedWithdrawer"), g.u8("commission"), g._O(), g.A9(g.n_([g._O("slot"), g.Jq("confirmationCount")]), g.cv(g.Jq(), -8), "votes"), g.u8("rootSlotValid"), g._O("rootSlot"), g._O(), g.A9(g.n_([g._O("epoch"), J("authorizedVoter")]), g.cv(g.Jq(), -8), "authorizedVoters"), g.n_([g.A9(g.n_([J("authorizedPubkey"), g._O("epochOfLastAuthorizedSwitch"), g._O("targetEpoch")]), 32, "buf"), g._O("idx"), g.u8("isEmpty")], "priorVoters"), g._O(), g.A9(g.n_([g._O("epoch"), g._O("credits"), g._O("prevCredits")]), g.cv(g.Jq(), -8), "epochCredits"), g.n_([g._O("slot"), g._O("timestamp")], "lastTimestamp")]);
            class rX {
                constructor(e) {
                    this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = e.nodePubkey, this.authorizedWithdrawer = e.authorizedWithdrawer, this.commission = e.commission, this.rootSlot = e.rootSlot, this.votes = e.votes, this.authorizedVoters = e.authorizedVoters, this.priorVoters = e.priorVoters, this.epochCredits = e.epochCredits, this.lastTimestamp = e.lastTimestamp
                }
                static fromAccountData(e) {
                    let t = rZ.decode(v(e), 4),
                        r = t.rootSlot;
                    return t.rootSlotValid || (r = null), new rX({
                        nodePubkey: new W(t.nodePubkey),
                        authorizedWithdrawer: new W(t.authorizedWithdrawer),
                        commission: t.commission,
                        votes: t.votes,
                        rootSlot: r,
                        authorizedVoters: t.authorizedVoters.map(rY),
                        priorVoters: function({
                            buf: e,
                            idx: t,
                            isEmpty: r
                        }) {
                            return r ? [] : [...e.slice(t + 1).map(rQ), ...e.slice(0, t).map(rQ)]
                        }(t.priorVoters),
                        epochCredits: t.epochCredits,
                        lastTimestamp: t.lastTimestamp
                    })
                }
            }

            function rY({
                authorizedVoter: e,
                epoch: t
            }) {
                return {
                    epoch: t,
                    authorizedVoter: new W(e)
                }
            }

            function rQ({
                authorizedPubkey: e,
                epochOfLastAuthorizedSwitch: t,
                targetEpoch: r
            }) {
                return {
                    authorizedPubkey: new W(e),
                    epochOfLastAuthorizedSwitch: t,
                    targetEpoch: r
                }
            }
            let r0 = {
                http: {
                    devnet: "http://api.devnet.solana.com",
                    testnet: "http://api.testnet.solana.com",
                    "mainnet-beta": "http://api.mainnet-beta.solana.com/"
                },
                https: {
                    devnet: "https://api.devnet.solana.com",
                    testnet: "https://api.testnet.solana.com",
                    "mainnet-beta": "https://api.mainnet-beta.solana.com/"
                }
            };

            function r1(e, t) {
                let r = !1 === t ? "http" : "https";
                if (!e) return r0[r].devnet;
                let i = r0[r][e];
                if (!i) throw Error(`Unknown ${r} cluster: ${e}`);
                return i
            }
            async function r8(e, t, r, i) {
                let n, s;
                r && Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight") ? (n = r, s = i) : r && Object.prototype.hasOwnProperty.call(r, "nonceValue") ? (n = r, s = i) : s = r;
                let o = s && {
                        skipPreflight: s.skipPreflight,
                        preflightCommitment: s.preflightCommitment || s.commitment,
                        minContextSlot: s.minContextSlot
                    },
                    a = await e.sendRawTransaction(t, o),
                    c = s && s.commitment,
                    u = n ? e.confirmTransaction(n, c) : e.confirmTransaction(a, c),
                    l = (await u).value;
                if (l.err) throw Error(`Raw transaction ${a} failed (${JSON.stringify(l)})`);
                return a
            }
            let r2 = 1e9
        }
    }
]);