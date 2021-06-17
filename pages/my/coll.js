(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/coll" ], {
    "0b76": function b76(n, t, e) {},
    1545: function _(n, t, e) {
        "use strict";
        e.r(t);
        var c = e("6cc4"), o = e.n(c);
        for (var u in c) {
            "default" !== u && function(n) {
                e.d(t, n, function() {
                    return c[n];
                });
            }(u);
        }
        t["default"] = o.a;
    },
    "1d0f": function d0f(n, t, e) {
        "use strict";
        var c;
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return c;
        });
        var o = function o() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, u = [];
    },
    "374a": function a(n, t, e) {
        "use strict";
        e.r(t);
        var c = e("1d0f"), o = e("1545");
        for (var u in o) {
            "default" !== u && function(n) {
                e.d(t, n, function() {
                    return o[n];
                });
            }(u);
        }
        e("a601");
        var a, i = e("f0c5"), f = Object(i["a"])(o["default"], c["b"], c["c"], !1, null, "9ef86ce6", null, !1, c["a"], a);
        t["default"] = f.exports;
    },
    "6cc4": function cc4(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                data: function data() {
                    return {
                        list: [ {
                            head: "新用户点击分享",
                            time: "17:05",
                            count: "+5",
                            open: !0
                        }, {
                            head: "老用户点击分享",
                            time: "16:58",
                            count: "+1",
                            open: !0
                        } ]
                    };
                },
                onPullDownRefresh: function onPullDownRefresh() {
                    n.stopPullDownRefresh();
                },
                onReachBottom: function onReachBottom(n) {
                    console.log("触底加载更多");
                },
                mounted: function mounted() {},
                methods: {
                    handleclick: function handleclick(n) {
                        this.list[n].open = !this.list[n].open;
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d")["default"]);
    },
    a601: function a601(n, t, e) {
        "use strict";
        var c = e("0b76"), o = e.n(c);
        o.a;
    },
    cae0: function cae0(n, t, e) {
        "use strict";
        (function(n) {
            e("6d7c");
            c(e("66fd"));
            var t = c(e("374a"));
            function c(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    }
}, [ [ "cae0", "common/runtime", "common/vendor" ] ] ]);