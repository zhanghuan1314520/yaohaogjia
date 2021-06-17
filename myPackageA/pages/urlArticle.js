require("../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/urlArticle" ], {
    1706: function _(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("be63"), u = n("6509");
        for (var o in u) {
            "default" !== o && function(t) {
                n.d(e, t, function() {
                    return u[t];
                });
            }(o);
        }
        var a, c = n("f0c5"), l = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
        e["default"] = l.exports;
    },
    6509: function _(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("6be1"), u = n.n(r);
        for (var o in r) {
            "default" !== o && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(o);
        }
        e["default"] = u.a;
    },
    "6be1": function be1(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                onShareAppMessage: function onShareAppMessage(e) {
                    var n = getCurrentPages().pop().route;
                    t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号大师",
                        path: "/".concat(n, "?url=").concat(this.url)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route, t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号大师",
                        query: "url=".concat(this.url)
                    };
                },
                computed: {},
                onLoad: function onLoad(t) {
                    var e = t.url;
                    t.share;
                    this.url = e;
                },
                data: function data() {
                    return {
                        url: "",
                        webviewStyles: {
                            progress: {
                                color: "#FF3333"
                            }
                        }
                    };
                },
                methods: {}
            };
            e.default = n;
        }).call(this, n("543d")["default"]);
    },
    be63: function be63(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return r;
        });
        var u = function u() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    fbbd: function fbbd(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            r(n("66fd"));
            var e = r(n("1706"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "fbbd", "common/runtime", "common/vendor" ] ] ]);