(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/login/login" ], {
    "00bf": function bf(e, t, n) {
        "use strict";
        var o = n("a08d"), r = n.n(o);
        r.a;
    },
    "22ac": function ac(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            o(n("66fd"));
            var t = o(n("68a2"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "39c8": function c8(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("99ef")), r = n("2f62");
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var c = {
                data: function data() {
                    return {
                        appid: "*************",
                        secret: "*************************",
                        code: "",
                        sessionKey: "",
                        openId: "",
                        token: "",
                        userType: "",
                        userInfo: {
                            avatarUrl: "",
                            city: "",
                            country: "",
                            gender: 1,
                            language: "",
                            nickName: ""
                        },
                        pageOption: {}
                    };
                },
                computed: s({}, (0, r.mapState)({
                    isLogin: function isLogin(e) {
                        return e.isLogin;
                    },
                    isSDKReady: function isSDKReady(e) {
                        return e.isSDKReady;
                    }
                })),
                onShow: function onShow() {
                    this.$store.commit("reset");
                },
                methods: {
                    wxGetUserInfo: function wxGetUserInfo() {
                        var t = this, n = this;
                        return e.getUserInfo({
                            provider: "weixin",
                            success: function success(o) {
                                console.log(o), n.userInfo = o.userInfo, e.request({
                                    url: n.apiServer + "wxLogin/dataSave",
                                    data: {
                                        openid: n.openId,
                                        avatarUrl: n.userInfo.avatarUrl,
                                        city: n.userInfo.city,
                                        country: n.userInfo.country,
                                        gender: n.userInfo.gender,
                                        language: n.userInfo.language,
                                        nickName: n.userInfo.nickName
                                    },
                                    header: {
                                        "x-token": n.token
                                    },
                                    method: "POST",
                                    success: function success(o) {
                                        if (console.log(o), 0 != o.data.code) return e.showToast({
                                            title: o.data.msg,
                                            icon: "none"
                                        }), !1;
                                        e.showToast({
                                            title: "登录成功"
                                        }), e.setStorageSync("user_tk", n.token), e.setStorageSync("user_nm", o.data.data.nickName), 
                                        e.setStorageSync("user_avt", o.data.data.avatarUrl), t.loginUser(), 1 == n.pageOption.backtype ? e.redirectTo({
                                            url: n.pageOption.backpage
                                        }) : e.switchTab({
                                            url: n.pageOption.backpage
                                        });
                                    },
                                    fail: function fail() {
                                        e.showToast({
                                            title: "用户信息操作失败",
                                            icon: "none"
                                        });
                                    }
                                });
                            },
                            fail: function fail() {
                                e.showToast({
                                    title: "获取用户信息失败",
                                    icon: "none"
                                });
                            }
                        }), !1;
                    },
                    login: function login() {
                        var t = this;
                        return e.showLoading({
                            title: "登录中..."
                        }), e.login({
                            provider: "weixin",
                            success: function success(n) {
                                t.code = n.code, e.request({
                                    url: t.apiServer + "wxLogin",
                                    data: {
                                        code: t.code,
                                        userType: 1
                                    },
                                    method: "POST",
                                    success: function success(n) {
                                        console.log(n), e.hideLoading(), t.token = n.data.data.token, t.openId = n.data.data.openId, 
                                        t.sessionKey = n.data.data.sessionKey, t.userType = n.data.data.userType;
                                    },
                                    fail: function fail() {
                                        return e.showToast({
                                            title: "获取 SesssionKey OpenId 失败",
                                            icon: "none"
                                        }), !1;
                                    }
                                });
                            },
                            fail: function fail() {
                                return e.showToast({
                                    title: "获取 code 失败",
                                    icon: "none"
                                }), !1;
                            }
                        }), !1;
                    },
                    loginBtn: function loginBtn() {
                        var t = this, n = null;
                        if (o.default.forEach(function(e) {
                            "yuge" == e.user && (n = e);
                        }), n) {
                            var r = this.tim.login({
                                userID: n.userId,
                                userSig: n.userSig
                            });
                            r.then(function(o) {
                                console.log("登录成功", o, n), t.$store.commit("toggleIsLogin", !0), e.setStorageSync("userInfo", JSON.stringify(n)), 
                                e.setStorageSync("userTIMInfo", JSON.stringify(o.data));
                            }).catch(function(e) {
                                console.warn("login error:", e);
                            });
                        } else e.showToast({
                            icon: "none",
                            title: "用户不存在",
                            duration: 1500
                        });
                    },
                    loginUser: function loginUser() {
                        var t = this;
                        this.$request("user/userSig", {}, "GET").then(function(n) {
                            if (0 == n.code && (e.setStorageSync("userTimId", JSON.stringify(n.data)), n.data)) {
                                var o = {}, r = n.data;
                                o.user = r.nickname || "im", o.userId = r.chatId, o.img = r.avatar, o.userSig = r.userSig;
                                var a = t.tim.login({
                                    userID: r.chatId,
                                    userSig: r.userSig
                                });
                                a.then(function(n) {
                                    console.log("登录成功----------", n, o), t.$store.commit("toggleIsLogin", !0), e.setStorageSync("userInfo", JSON.stringify(o)), 
                                    e.setStorageSync("userTIMInfo", JSON.stringify(n.data));
                                    var r = getCurrentPages(), a = r[r.length - 2].route;
                                    console.log("---", r, a), e.switchTab({
                                        url: "/" + a
                                    });
                                }).catch(function(e) {
                                    console.warn("login error:", e);
                                });
                            }
                        });
                    }
                },
                onLoad: function onLoad(e) {
                    this.userList = o.default, this.pageOption = e, this.login();
                }
            };
            t.default = c;
        }).call(this, n("543d")["default"]);
    },
    "68a2": function a2(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("9d2d"), r = n("d234");
        for (var a in r) {
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return r[e];
                });
            }(a);
        }
        n("00bf");
        var i, s = n("f0c5"), u = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        t["default"] = u.exports;
    },
    "9d2d": function d2d(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var r = function r() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, a = [];
    },
    a08d: function a08d(e, t, n) {},
    d234: function d234(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("39c8"), r = n.n(o);
        for (var a in o) {
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e];
                });
            }(a);
        }
        t["default"] = r.a;
    }
}, [ [ "22ac", "common/runtime", "common/vendor" ] ] ]);