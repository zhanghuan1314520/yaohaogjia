(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/randomTask" ], {
    1264: function _(t, n, e) {},
    1328: function _(t, n, e) {
        "use strict";
        var a = e("1264"), o = e.n(a);
        o.a;
    },
    "547f": function f(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("a00a"), o = e.n(a);
        for (var u in a) {
            "default" !== u && function(t) {
                e.d(n, t, function() {
                    return a[t];
                });
            }(u);
        }
        n["default"] = o.a;
    },
    6709: function _(t, n, e) {
        "use strict";
        (function(t) {
            e("6d7c");
            a(e("66fd"));
            var n = a(e("b7e9"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    "8fdd": function fdd(t, n, e) {
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
            var t = this, n = t.$createElement, e = (t._self._c, t.__map(t.news, function(n, e) {
                var a = t.__get_orig(n), o = t.formatTime(n.addTime, "MM月DD日"), u = t.formatTime(n.addTime, "YYYY.MM.DD");
                return {
                    $orig: a,
                    m0: o,
                    m1: u
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, u = [];
    },
    a00a: function a00a(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                name: "randomTask",
                components: {},
                props: {},
                data: function data() {
                    return {
                        timestamp: new Date().getTime(),
                        news: []
                    };
                },
                onLoad: function onLoad() {
                    this.getData();
                },
                watch: {},
                created: function created() {},
                methods: {
                    getData: function getData() {
                        var t = this;
                        this.$request("/rand/task/list").then(function(n) {
                            t.news = n.data, t.timestamp = n.timestamp;
                        });
                    },
                    copyCenter: function copyCenter(n) {
                        t.setClipboardData({
                            data: n,
                            success: function success(e) {
                                console.log("复制的信息：", n), t.showToast({
                                    icon: "none",
                                    duration: 2500,
                                    title: "复制成功"
                                });
                            }
                        });
                    },
                    navTo: function navTo(n) {
                        null !== n.url && t.navigateTo({
                            url: "/myPackageA/pages/newsInfo?newsId=".concat(n.newsId, "&getCustomers=true")
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d")["default"]);
    },
    b7e9: function b7e9(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("8fdd"), o = e("547f");
        for (var u in o) {
            "default" !== u && function(t) {
                e.d(n, t, function() {
                    return o[t];
                });
            }(u);
        }
        e("1328");
        var r, i = e("f0c5"), c = Object(i["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
        n["default"] = c.exports;
    }
}, [ [ "6709", "common/runtime", "common/vendor" ] ] ]);