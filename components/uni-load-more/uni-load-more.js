(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-load-more/uni-load-more" ], {
    "0c7d": function c7d(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("2d27"), u = e("2e21");
        for (var r in u) {
            "default" !== r && function(t) {
                e.d(n, t, function() {
                    return u[t];
                });
            }(r);
        }
        e("b83a");
        var a, c = e("f0c5"), i = Object(c["a"])(u["default"], o["b"], o["c"], !1, null, "e18de7d2", null, !1, o["a"], a);
        n["default"] = i.exports;
    },
    "2d27": function d27(t, n, e) {
        "use strict";
        var o;
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return o;
        });
        var u = function u() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, r = [];
    },
    "2e21": function e21(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("48e3"), u = e.n(o);
        for (var r in o) {
            "default" !== r && function(t) {
                e.d(n, t, function() {
                    return o[t];
                });
            }(r);
        }
        n["default"] = u.a;
    },
    "48e3": function e3(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = t.getSystemInfoSync().platform, o = {
                name: "UniLoadMore",
                props: {
                    status: {
                        type: String,
                        default: "more"
                    },
                    showIcon: {
                        type: Boolean,
                        default: !0
                    },
                    iconType: {
                        type: String,
                        default: "auto"
                    },
                    iconSize: {
                        type: Number,
                        default: 24
                    },
                    color: {
                        type: String,
                        default: "#777777"
                    },
                    contentText: {
                        type: Object,
                        default: function _default() {
                            return {
                                contentdown: "上拉显示更多",
                                contentrefresh: "正在加载...",
                                contentnomore: "没有更多数据了"
                            };
                        }
                    }
                },
                data: function data() {
                    return {
                        webviewHide: !1,
                        platform: e
                    };
                },
                computed: {
                    iconSnowWidth: function iconSnowWidth() {
                        return 2 * (Math.floor(this.iconSize / 24) || 1);
                    }
                },
                mounted: function mounted() {},
                methods: {
                    onClick: function onClick() {
                        this.$emit("clickLoadMore", {
                            detail: {
                                status: this.status
                            }
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, e("543d")["default"]);
    },
    "922d": function d(t, n, e) {},
    b83a: function b83a(t, n, e) {
        "use strict";
        var o = e("922d"), u = e.n(o);
        u.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-load-more/uni-load-more-create-component", {
    "components/uni-load-more/uni-load-more-create-component": function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("0c7d"));
    }
}, [ [ "components/uni-load-more/uni-load-more-create-component" ] ] ]);