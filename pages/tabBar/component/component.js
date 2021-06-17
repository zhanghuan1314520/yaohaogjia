(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/tabBar/component/component" ], {
    "4bfe": function bfe(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("7c13"), o = e.n(a);
        for (var u in a) {
            "default" !== u && function(t) {
                e.d(n, t, function() {
                    return a[t];
                });
            }(u);
        }
        n["default"] = o.a;
    },
    7522: function _(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("da19"), o = e("4bfe");
        for (var u in o) {
            "default" !== u && function(t) {
                e.d(n, t, function() {
                    return o[t];
                });
            }(u);
        }
        e("c6d3");
        var i, r = e("f0c5"), c = Object(r["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        n["default"] = c.exports;
    },
    "7c13": function c13(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                data: function data() {
                    return {};
                },
                onShareAppMessage: function onShareAppMessage() {
                    return {
                        title: "欢迎体验uni-app",
                        path: "/pages/tabBar/component/component"
                    };
                },
                onNavigationBarButtonTap: function onNavigationBarButtonTap(n) {
                    t.navigateTo({
                        url: "/pages/about/about"
                    });
                },
                methods: {
                    triggerCollapse: function triggerCollapse(t) {
                        if (this.list[t].pages) for (var n = 0; n < this.list.length; ++n) {
                            this.list[n].open = t === n && !this.list[t].open;
                        } else this.goDetailPage(this.list[t].url);
                    },
                    goDetailPage: function goDetailPage(n) {
                        "string" === typeof n ? t.navigateTo({
                            url: "/pages/component/" + n + "/" + n
                        }) : t.navigateTo({
                            url: n.url
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d")["default"]);
    },
    9125: function _(t, n, e) {
        "use strict";
        (function(t) {
            e("6d7c");
            a(e("66fd"));
            var n = a(e("7522"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    "9d6d": function d6d(t, n, e) {},
    c6d3: function c6d3(t, n, e) {
        "use strict";
        var a = e("9d6d"), o = e.n(a);
        o.a;
    },
    da19: function da19(t, n, e) {
        "use strict";
        var a;
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {
            return a;
        });
        var o = function o() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, u = [];
    }
}, [ [ "9125", "common/runtime", "common/vendor" ] ] ]);