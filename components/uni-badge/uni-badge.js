(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-badge/uni-badge" ], {
    "0a61": function a61(t, e, n) {},
    "0e3f": function e3f(t, e, n) {
        "use strict";
        var u;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return u;
        });
        var a = function a() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    "2c96": function c96(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("0e3f"), a = n("3962");
        for (var i in a) {
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(i);
        }
        n("6e8c");
        var c, r = n("f0c5"), f = Object(r["a"])(a["default"], u["b"], u["c"], !1, null, "f952f9e2", null, !1, u["a"], c);
        e["default"] = f.exports;
    },
    3962: function _(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("4a77"), a = n.n(u);
        for (var i in u) {
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return u[t];
                });
            }(i);
        }
        e["default"] = a.a;
    },
    "4a77": function a77(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = {
            name: "UniBadge",
            props: {
                type: {
                    type: String,
                    default: "default"
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                text: {
                    type: [ String, Number ],
                    default: ""
                },
                size: {
                    type: String,
                    default: "normal"
                }
            },
            data: function data() {
                return {
                    badgeStyle: ""
                };
            },
            watch: {
                text: function text() {
                    this.setStyle();
                }
            },
            mounted: function mounted() {
                this.setStyle();
            },
            methods: {
                setStyle: function setStyle() {
                    this.badgeStyle = "width: ".concat(8 * String(this.text).length + 12, "px");
                },
                onClick: function onClick() {
                    this.$emit("click");
                }
            }
        };
        e.default = u;
    },
    "6e8c": function e8c(t, e, n) {
        "use strict";
        var u = n("0a61"), a = n.n(u);
        a.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-badge/uni-badge-create-component", {
    "components/uni-badge/uni-badge-create-component": function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("2c96"));
    }
}, [ [ "components/uni-badge/uni-badge-create-component" ] ] ]);