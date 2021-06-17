(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/tabBar/extUI/extUI" ], {
    1496: function _(t, n, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = {
                data: function data() {
                    return {};
                },
                onLoad: function onLoad() {},
                onReady: function onReady() {},
                onShareAppMessage: function onShareAppMessage() {
                    return {
                        title: "欢迎体验uni-app",
                        path: "/pages/tabBar/extUI/extUI"
                    };
                },
                onNavigationBarButtonTap: function onNavigationBarButtonTap(n) {
                    t.navigateTo({
                        url: "/pages/about/about"
                    });
                },
                methods: {
                    goDetailPage: function goDetailPage(n) {
                        t.navigateTo({
                            url: "/pages/extUI/" + n + "/" + n
                        });
                    }
                }
            };
            n.default = a;
        }).call(this, a("543d")["default"]);
    },
    "2b52": function b52(t, n, a) {},
    "2f66": function f66(t, n, a) {
        "use strict";
        var e = a("2b52"), u = a.n(e);
        u.a;
    },
    "34ac": function ac(t, n, a) {
        "use strict";
        a.r(n);
        var e = a("1496"), u = a.n(e);
        for (var o in e) {
            "default" !== o && function(t) {
                a.d(n, t, function() {
                    return e[t];
                });
            }(o);
        }
        n["default"] = u.a;
    },
    "44d0": function d0(t, n, a) {
        "use strict";
        var e;
        a.d(n, "b", function() {
            return u;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {
            return e;
        });
        var u = function u() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, o = [];
    },
    bafe: function bafe(t, n, a) {
        "use strict";
        (function(t) {
            a("6d7c");
            e(a("66fd"));
            var n = e(a("f277"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, a("543d")["createPage"]);
    },
    f277: function f277(t, n, a) {
        "use strict";
        a.r(n);
        var e = a("44d0"), u = a("34ac");
        for (var o in u) {
            "default" !== o && function(t) {
                a.d(n, t, function() {
                    return u[t];
                });
            }(o);
        }
        a("2f66");
        var r, c = a("f0c5"), f = Object(c["a"])(u["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], r);
        n["default"] = f.exports;
    }
}, [ [ "bafe", "common/runtime", "common/vendor" ] ] ]);