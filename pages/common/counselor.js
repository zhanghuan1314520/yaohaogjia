(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/common/counselor" ], {
    "0a8a": function a8a(t, e, n) {},
    "4ed9": function ed9(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("cda9"), r = n.n(o);
        for (var a in o) {
            "default" !== a && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(a);
        }
        e["default"] = r.a;
    },
    "611d": function d(t, e, n) {
        "use strict";
        var o = n("0a8a"), r = n.n(o);
        r.a;
    },
    6773: function _(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            o(n("66fd"));
            var e = o(n("7291"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    7291: function _(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("cf0a2"), r = n("4ed9");
        for (var a in r) {
            "default" !== a && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(a);
        }
        n("611d");
        var c, u = n("f0c5"), i = Object(u["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], c);
        e["default"] = i.exports;
    },
    cda9: function cda9(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("a34a")), r = n("2f62");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, o, r, a, c) {
                try {
                    var u = t[a](c), i = u.value;
                } catch (s) {
                    return void n(s);
                }
                u.done ? e(i) : Promise.resolve(i).then(o, r);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = t.apply(e, n);
                        function u(t) {
                            c(a, o, r, u, i, "next", t);
                        }
                        function i(t) {
                            c(a, o, r, u, i, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var l = {
                name: "counselor",
                components: {},
                props: {},
                data: function data() {
                    return {
                        list: [],
                        chatId: null,
                        params: {
                            page: 1,
                            pagesize: 10
                        },
                        isBottom: !1
                    };
                },
                onLoad: function onLoad(t) {
                    var e = t.pfsId;
                    e && (this.params.pfsId = e), this.queryData();
                },
                onReachBottom: function onReachBottom() {
                    this.isBottom || (this.params.page++, this.queryData());
                },
                computed: s({}, (0, r.mapState)({
                    isLogin: function isLogin(t) {
                        return t.isLogin;
                    }
                })),
                watch: {},
                methods: {
                    queryData: function queryData() {
                        var t = this;
                        return u(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$request("seller/list", t.params, "POST");

                                      case 2:
                                        n = e.sent, t.list = t.list.concat(n.data), t.list.length >= n.total && (t.isBottom = !0);

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e);
                        }))();
                    },
                    search: function search(t) {
                        console.log(t);
                    },
                    vocmes: function vocmes(e, n) {
                        var o = t.getStorageSync("user_avt");
                        if (o) {
                            var r = JSON.parse(t.getStorageSync("userTimId"));
                            if (r.chatId !== e.chatId) {
                                this.params.pfsId && this.$request("/add/belong/contack/user", {
                                    toChatId: e.chatId,
                                    toUserId: e.userId
                                }, "post"), e.nickname = e.name, console.log(e.chatId);
                                var a = e.chatId || "";
                                this.$store.commit("createConversationActive", a), t.navigateTo({
                                    url: "../message/mychat?data=".concat(encodeURIComponent(JSON.stringify(e)))
                                });
                            } else t.showToast({
                                icon: "none",
                                duration: 2500,
                                title: "无法与自己聊天"
                            });
                        } else this.wxGetUserInfo();
                    },
                    vocphone: function vocphone(e, n) {
                        var o = this;
                        console.log("item", e), t.makePhoneCall({
                            phoneNumber: e.phone,
                            success: function success() {
                                console.log("成功拨打电话"), o.$request("/add/phone/contack/user", {
                                    toChatId: e.chatId,
                                    toUserId: e.userId
                                }, "POST").then(function(t) {
                                    console.log(t, "拨打电话增加数量");
                                });
                            }
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d")["default"]);
    },
    cf0a2: function cf0a2(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return o;
        });
        var r = function r() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    }
}, [ [ "6773", "common/runtime", "common/vendor" ] ] ]);