(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/tim" ], {
    "52c8": function c8(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            r(n("66fd"));
            var e = r(n("644c"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    5969: function _(t, e, n) {},
    "644c": function c(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("6722"), o = n("8235");
        for (var u in o) {
            "default" !== u && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(u);
        }
        n("d5da");
        var i, c = n("f0c5"), a = Object(c["a"])(o["default"], r["b"], r["c"], !1, null, "e1aa9f84", null, !1, r["a"], i);
        e["default"] = a.exports;
    },
    6722: function _(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return r;
        });
        var o = function o() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, u = [];
    },
    8235: function _(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("963e"), o = n.n(r);
        for (var u in r) {
            "default" !== u && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(u);
        }
        e["default"] = o.a;
    },
    "963e": function e(t, _e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(_e, "__esModule", {
                value: !0
            }), _e.default = void 0;
            var r = u(n("99ef")), o = n("2f62");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        a(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var s = {
                data: function data() {
                    return {
                        user: "",
                        data: null,
                        pwd: "",
                        userList: ""
                    };
                },
                computed: c({}, (0, o.mapState)({
                    isLogin: function isLogin(t) {
                        return t.isLogin;
                    },
                    isSDKReady: function isSDKReady(t) {
                        return t.isSDKReady;
                    }
                })),
                onShow: function onShow() {
                    this.$store.commit("reset");
                },
                onLoad: function onLoad() {
                    this.userList = r.default, console.log(r.default);
                },
                methods: {
                    loginBtn: function loginBtn() {
                        var e = this;
                        if (this.user && this.pwd) {
                            var n = null;
                            if (r.default.forEach(function(t) {
                                t.user == e.user && (n = t);
                            }), n) {
                                var o = this.tim.login({
                                    userID: n.userId,
                                    userSig: n.userSig
                                });
                                o.then(function(r) {
                                    e.$store.commit("toggleIsLogin", !0), t.setStorageSync("userInfo", JSON.stringify(n)), 
                                    t.setStorageSync("userTIMInfo", JSON.stringify(r.data)), t.reLaunch({
                                        url: "../tim/record"
                                    });
                                }).catch(function(t) {
                                    console.warn("login error:", t);
                                });
                            } else t.showToast({
                                icon: "none",
                                title: "用户不存在",
                                duration: 1500
                            });
                        } else t.showToast({
                            icon: "none",
                            title: "请将账户密码输入完整",
                            duration: 1500
                        });
                    }
                }
            };
            _e.default = s;
        }).call(this, n("543d")["default"]);
    },
    d5da: function d5da(t, e, n) {
        "use strict";
        var r = n("5969"), o = n.n(r);
        o.a;
    }
}, [ [ "52c8", "common/runtime", "common/vendor" ] ] ]);