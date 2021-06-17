(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/myExchange" ], {
    "075d": function d(n, t, o) {
        "use strict";
        o.r(t);
        var e = o("7d95"), u = o.n(e);
        for (var i in e) {
            "default" !== i && function(n) {
                o.d(t, n, function() {
                    return e[n];
                });
            }(i);
        }
        t["default"] = u.a;
    },
    2045: function _(n, t, o) {
        "use strict";
        o.r(t);
        var e = o("747d"), u = o("075d");
        for (var i in u) {
            "default" !== i && function(n) {
                o.d(t, n, function() {
                    return u[n];
                });
            }(i);
        }
        o("9890");
        var c, d = o("f0c5"), r = Object(d["a"])(u["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], c);
        t["default"] = r.exports;
    },
    "747d": function d(n, t, o) {
        "use strict";
        var e;
        o.d(t, "b", function() {
            return u;
        }), o.d(t, "c", function() {
            return i;
        }), o.d(t, "a", function() {
            return e;
        });
        var u = function u() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, i = [];
    },
    "7d95": function d95(n, t, o) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                name: "clientPhone",
                components: {},
                props: {},
                data: function data() {
                    return {
                        gold: "",
                        goldAndPoint: {}
                    };
                },
                onLoad: function onLoad() {},
                mounted: function mounted() {
                    this.queryGoldAndPoint();
                },
                computed: {
                    maxGold: function maxGold() {
                        return (this.goldAndPoint.point / 10).toFixed(0);
                    },
                    noMoreExchange: function noMoreExchange() {
                        return this.gold > this.maxGold;
                    }
                },
                watch: {},
                created: function created() {},
                methods: {
                    queryGoldAndPoint: function queryGoldAndPoint() {
                        var n = this;
                        this.$request("/personer/goldAndPoint").then(function(t) {
                            n.goldAndPoint = t.data;
                        });
                    },
                    checkInput: function checkInput() {
                        this.noMoreExchange && n.showToast({
                            icon: "none",
                            title: "可兑换积分不足"
                        });
                    },
                    confirm: function confirm() {
                        var t = this;
                        this.checkInput(), this.noMoreExchange || this.$request("/personer/gold/exchange", {
                            goldNum: this.gold
                        }, "POST").then(function(o) {
                            "0" === o.code ? (n.showToast({
                                icon: "success",
                                title: o.data
                            }), t.queryGoldAndPoint(), t.gold = "") : n.showToast({
                                icon: "none",
                                title: o.msg
                            });
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, o("543d")["default"]);
    },
    9890: function _(n, t, o) {
        "use strict";
        var e = o("d789"), u = o.n(e);
        u.a;
    },
    a490: function a490(n, t, o) {
        "use strict";
        (function(n) {
            o("6d7c");
            e(o("66fd"));
            var t = e(o("2045"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, o("543d")["createPage"]);
    },
    d789: function d789(n, t, o) {}
}, [ [ "a490", "common/runtime", "common/vendor" ] ] ]);