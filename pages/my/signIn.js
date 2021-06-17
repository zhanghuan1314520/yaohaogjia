(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/signIn" ], {
    "0a41": function a41(n, t, e) {
        "use strict";
        e.r(t);
        var i = e("6b7a"), u = e("66ad");
        for (var a in u) {
            "default" !== a && function(n) {
                e.d(t, n, function() {
                    return u[n];
                });
            }(a);
        }
        e("4e2a");
        var o, r = e("f0c5"), s = Object(r["a"])(u["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
        t["default"] = s.exports;
    },
    "4e2a": function e2a(n, t, e) {
        "use strict";
        var i = e("aaf2"), u = e.n(i);
        u.a;
    },
    "66ad": function ad(n, t, e) {
        "use strict";
        e.r(t);
        var i = e("ffb6"), u = e.n(i);
        for (var a in i) {
            "default" !== a && function(n) {
                e.d(t, n, function() {
                    return i[n];
                });
            }(a);
        }
        t["default"] = u.a;
    },
    "6b7a": function b7a(n, t, e) {
        "use strict";
        var i;
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {
            return i;
        });
        var u = function u() {
            var n = this, t = n.$createElement;
            n._self._c;
            n._isMounted || (n.e0 = function(t) {
                n.show_openAd = !1;
            });
        }, a = [];
    },
    aaf2: function aaf2(n, t, e) {},
    c4a3: function c4a3(n, t, e) {
        "use strict";
        (function(n) {
            e("6d7c");
            i(e("66fd"));
            var t = i(e("0a41"));
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    ffb6: function ffb6(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = u(e("a34a"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function a(n, t, e, i, u, a, o) {
                try {
                    var r = n[a](o), s = r.value;
                } catch (c) {
                    return void e(c);
                }
                r.done ? t(s) : Promise.resolve(s).then(i, u);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(i, u) {
                        var o = n.apply(t, e);
                        function r(n) {
                            a(o, i, u, r, s, "next", n);
                        }
                        function s(n) {
                            a(o, i, u, r, s, "throw", n);
                        }
                        r(void 0);
                    });
                };
            }
            var r = {
                data: function data() {
                    return {
                        show_openAd: !1,
                        Issignin: !1,
                        list: [],
                        ind: 0,
                        num: {
                            currentSignInPoint: 0,
                            nextSignInPoint: 0
                        }
                    };
                },
                onLoad: function onLoad() {
                    this.getSign(), this.init();
                },
                onUnload: function onUnload() {},
                methods: {
                    getSign: function getSign() {
                        var n = this;
                        this.$request("user/signin/status", {}, "get").then(function(t) {
                            1 === t.data && (n.Issignin = !0);
                        });
                    },
                    confirm: function confirm() {
                        var t = this;
                        this.Issignin || this.$request("user/signin/task/1", {}).then(function(e) {
                            0 == e.code ? (t.num = e.data, t.init(), t.Issignin = !0, t.show_openAd = !0) : n.showToast({
                                icon: "none",
                                title: e.msg,
                                duration: 2e3
                            });
                        });
                    },
                    init: function init() {
                        var n = this;
                        return o(i.default.mark(function t() {
                            return i.default.wrap(function(t) {
                                while (1) {
                                    switch (t.prev = t.next) {
                                      case 0:
                                        return t.next = 2, n.$request("user/signin/task/list", {}).then(function(t) {
                                            if (0 == t.code) {
                                                n.list = t.data;
                                                var e = t.data.findIndex(function(n) {
                                                    return 0 === n.status;
                                                });
                                                -1 !== e && (n.ind = e), console.log(n.ind);
                                            }
                                        });

                                      case 2:
                                      case "end":
                                        return t.stop();
                                    }
                                }
                            }, t);
                        }))();
                    }
                }
            };
            t.default = r;
        }).call(this, e("543d")["default"]);
    }
}, [ [ "c4a3", "common/runtime", "common/vendor" ] ] ]);