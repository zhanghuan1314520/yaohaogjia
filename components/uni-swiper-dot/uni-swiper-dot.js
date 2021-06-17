(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-swiper-dot/uni-swiper-dot" ], {
    "09ba": function ba(t, e, n) {
        "use strict";
        var o = n("6361"), i = n.n(o);
        i.a;
    },
    6361: function _(t, e, n) {},
    "80b0": function b0(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("e59e"), i = n("9b76");
        for (var r in i) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return i[t];
                });
            }(r);
        }
        n("09ba");
        var s, d = n("f0c5"), u = Object(d["a"])(i["default"], o["b"], o["c"], !1, null, "4f5bb684", null, !1, o["a"], s);
        e["default"] = u.exports;
    },
    "9b76": function b76(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c1ca"), i = n.n(o);
        for (var r in o) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        e["default"] = i.a;
    },
    c1ca: function c1ca(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "UniSwiperDot",
            props: {
                info: {
                    type: Array,
                    default: function _default() {
                        return [];
                    }
                },
                current: {
                    type: Number,
                    default: 0
                },
                dotsStyles: {
                    type: Object,
                    default: function _default() {
                        return {};
                    }
                },
                mode: {
                    type: String,
                    default: "default"
                },
                field: {
                    type: String,
                    default: ""
                }
            },
            data: function data() {
                return {
                    dots: {
                        width: 8,
                        height: 8,
                        bottom: 10,
                        color: "#fff",
                        backgroundColor: "rgba(0, 0, 0, .3)",
                        border: "1px rgba(0, 0, 0, .3) solid",
                        selectedBackgroundColor: "#333",
                        selectedBorder: "1px rgba(0, 0, 0, .9) solid"
                    }
                };
            },
            watch: {
                dotsStyles: function dotsStyles(t) {
                    this.dots = Object.assign(this.dots, this.dotsStyles);
                },
                mode: function mode(t) {
                    "indexes" === t ? (this.dots.width = 20, this.dots.height = 20) : (this.dots.width = 8, 
                    this.dots.height = 8);
                }
            },
            created: function created() {
                "indexes" === this.mode && (this.dots.width = 20, this.dots.height = 20), this.dots = Object.assign(this.dots, this.dotsStyles);
            }
        };
        e.default = o;
    },
    e59e: function e59e(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return o;
        });
        var i = function i() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-swiper-dot/uni-swiper-dot-create-component", {
    "components/uni-swiper-dot/uni-swiper-dot-create-component": function componentsUniSwiperDotUniSwiperDotCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("80b0"));
    }
}, [ [ "components/uni-swiper-dot/uni-swiper-dot-create-component" ] ] ]);