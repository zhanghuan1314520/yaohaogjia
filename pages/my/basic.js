(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/basic" ], {
    "4a40": function a40(n, t, a) {
        "use strict";
        var e = a("a9a7"), u = a.n(e);
        u.a;
    },
    "99eff": function eff(n, t, a) {
        "use strict";
        a.r(t);
        var e = a("9f8f"), u = a("bf59");
        for (var c in u) {
            "default" !== c && function(n) {
                a.d(t, n, function() {
                    return u[n];
                });
            }(c);
        }
        a("4a40");
        var f, r = a("f0c5"), o = Object(r["a"])(u["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], f);
        t["default"] = o.exports;
    },
    "9f8f": function f8f(n, t, a) {
        "use strict";
        var e;
        a.d(t, "b", function() {
            return u;
        }), a.d(t, "c", function() {
            return c;
        }), a.d(t, "a", function() {
            return e;
        });
        var u = function u() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, c = [];
    },
    a020: function a020(n, t, a) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                data: function data() {
                    return {
                        name: "",
                        phone: "",
                        vx: "",
                        code: "",
                        vxImg: "",
                        cardImg: ""
                    };
                },
                onUnload: function onUnload() {
                    this.vxImg = "";
                },
                methods: {
                    confirm: function confirm() {
                        n.navigateTo({
                            url: "/pages/my/basicPic"
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, a("543d")["default"]);
    },
    a9a7: function a9a7(n, t, a) {},
    bf59: function bf59(n, t, a) {
        "use strict";
        a.r(t);
        var e = a("a020"), u = a.n(e);
        for (var c in e) {
            "default" !== c && function(n) {
                a.d(t, n, function() {
                    return e[n];
                });
            }(c);
        }
        t["default"] = u.a;
    },
    c220: function c220(n, t, a) {
        "use strict";
        (function(n) {
            a("6d7c");
            e(a("66fd"));
            var t = e(a("99eff"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, a("543d")["createPage"]);
    }
}, [ [ "c220", "common/runtime", "common/vendor" ] ] ]);