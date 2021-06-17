(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-list/uni-list" ], {
    2432: function _(t, n, e) {
        "use strict";
        var o = e("3826"), u = e.n(o);
        u.a;
    },
    "2a44": function a44(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("945d"), u = e.n(o);
        for (var r in o) {
            "default" !== r && function(t) {
                e.d(n, t, function() {
                    return o[t];
                });
            }(r);
        }
        n["default"] = u.a;
    },
    3826: function _(t, n, e) {},
    "945d": function d(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "uniList",
            "mp-weixin": {
                options: {
                    multipleSlots: !1
                }
            },
            props: {
                enableBackToTop: {
                    type: [ Boolean, String ],
                    default: !1
                },
                scrollY: {
                    type: [ Boolean, String ],
                    default: !1
                },
                border: {
                    type: Boolean,
                    default: !0
                }
            },
            created: function created() {
                this.firstChildAppend = !1;
            },
            methods: {
                loadMore: function loadMore(t) {
                    this.$emit("scrolltolower");
                }
            }
        };
        n.default = o;
    },
    "98b2": function b2(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("ba31"), u = e("2a44");
        for (var r in u) {
            "default" !== r && function(t) {
                e.d(n, t, function() {
                    return u[t];
                });
            }(r);
        }
        e("2432");
        var a, i = e("f0c5"), l = Object(i["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
        n["default"] = l.exports;
    },
    ba31: function ba31(t, n, e) {
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
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-list/uni-list-create-component", {
    "components/uni-list/uni-list-create-component": function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("98b2"));
    }
}, [ [ "components/uni-list/uni-list-create-component" ] ] ]);