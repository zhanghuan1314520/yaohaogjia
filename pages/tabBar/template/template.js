(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/tabBar/template/template" ], {
    "0d80": function d80(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ade7"), u = n.n(a);
        for (var r in a) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(r);
        }
        e["default"] = u.a;
    },
    "7daf": function daf(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var u = function u() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
    },
    ade7: function ade7(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                data: function data() {
                    return {};
                },
                onShareAppMessage: function onShareAppMessage() {
                    return {
                        title: "欢迎体验uni-app",
                        path: "/pages/tabBar/template/template"
                    };
                },
                onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
                    t.navigateTo({
                        url: "/pages/about/about"
                    });
                },
                methods: {
                    triggerCollapse: function triggerCollapse(t) {
                        if (this.list[t].pages) for (var e = 0; e < this.list.length; ++e) {
                            this.list[e].open = t === e && !this.list[t].open;
                        } else this.goDetailPage(this.list[t].url);
                    },
                    goDetailPage: function goDetailPage(e) {
                        var n = e.url ? e.url : e, a = ~n.indexOf("platform") ? n : "/pages/template/" + n + "/" + n;
                        return t.navigateTo({
                            url: a
                        }), !1;
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d")["default"]);
    },
    af7d: function af7d(t, e, n) {
        "use strict";
        var a = n("ed2c"), u = n.n(a);
        u.a;
    },
    cb7c: function cb7c(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7daf"), u = n("0d80");
        for (var r in u) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return u[t];
                });
            }(r);
        }
        n("af7d");
        var i, o = n("f0c5"), l = Object(o["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = l.exports;
    },
    ed2c: function ed2c(t, e, n) {},
    f009: function f009(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            a(n("66fd"));
            var e = a(n("cb7c"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "f009", "common/runtime", "common/vendor" ] ] ]);