(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/drag-ball/drag-ball" ], {
    "0b94": function b94(t, a, n) {
        "use strict";
        var e = n("346e"), o = n.n(e);
        o.a;
    },
    "346e": function e(t, a, n) {},
    "8a57": function a57(t, a, n) {
        "use strict";
        n.r(a);
        var e = n("ca30"), o = n.n(e);
        for (var u in e) {
            "default" !== u && function(t) {
                n.d(a, t, function() {
                    return e[t];
                });
            }(u);
        }
        a["default"] = o.a;
    },
    "8d26": function d26(t, a, n) {
        "use strict";
        var e;
        n.d(a, "b", function() {
            return o;
        }), n.d(a, "c", function() {
            return u;
        }), n.d(a, "a", function() {
            return e;
        });
        var o = function o() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, u = [];
    },
    b1e6: function b1e6(t, a, n) {
        "use strict";
        n.r(a);
        var e = n("8d26"), o = n("8a57");
        for (var u in o) {
            "default" !== u && function(t) {
                n.d(a, t, function() {
                    return o[t];
                });
            }(u);
        }
        n("0b94");
        var r, l = n("f0c5"), c = Object(l["a"])(o["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], r);
        a["default"] = c.exports;
    },
    ca30: function ca30(t, a, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = {
                name: "dragBall",
                props: {
                    isScrolling: {
                        type: Boolean,
                        default: !1
                    },
                    postersData: {
                        type: String,
                        default: null
                    }
                },
                methods: {
                    houseDetails: function houseDetails() {
                        t.navigateTo({
                            url: "/myPackageA/pages/my/postersPage?data=" + this.postersData
                        });
                    }
                },
                mounted: function mounted() {
                    console.log("postersData-----------------"), console.log(this.postersData);
                }
            };
            a.default = n;
        }).call(this, n("543d")["default"]);
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/drag-ball/drag-ball-create-component", {
    "components/drag-ball/drag-ball-create-component": function componentsDragBallDragBallCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("b1e6"));
    }
}, [ [ "components/drag-ball/drag-ball-create-component" ] ] ]);