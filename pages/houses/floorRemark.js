(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/houses/floorRemark" ], {
    "1b9f": function b9f(t, e, a) {},
    a32d: function a32d(t, e, a) {
        "use strict";
        (function(t) {
            a("6d7c");
            n(a("66fd"));
            var e = n(a("e133"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    },
    cf0a: function cf0a(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("f97f"), o = a.n(n);
        for (var r in n) {
            "default" !== r && function(t) {
                a.d(e, t, function() {
                    return n[t];
                });
            }(r);
        }
        e["default"] = o.a;
    },
    ddcc: function ddcc(t, e, a) {
        "use strict";
        var n;
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {
            return n;
        });
        var o = function o() {
            var t = this, e = t.$createElement, a = (t._self._c, t.formatDate(t.data.time).replace(/\-/g, ".")), n = void 0 !== t.data.lotteryComment ? t.formatText(t.data.lotteryComment) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: a,
                    m0: n
                }
            });
        }, r = [];
    },
    e133: function e133(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("ddcc"), o = a("cf0a");
        for (var r in o) {
            "default" !== r && function(t) {
                a.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        a("e16d");
        var c, s = a("f0c5"), u = Object(s["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], c);
        e["default"] = u.exports;
    },
    e16d: function e16d(t, e, a) {
        "use strict";
        var n = a("1b9f"), o = a.n(n);
        o.a;
    },
    f97f: function f97f(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a("88b3"), o = {
                name: "floorDis",
                components: {},
                props: {},
                data: function data() {
                    return {
                        statusBarHeight: 0,
                        formatDate: n.formatDate,
                        formatText: n.formatText,
                        data: {
                            text: "",
                            src: "",
                            time: "",
                            lotteryComment: ""
                        },
                        pfsId: ""
                    };
                },
                filters: {
                    suffix: function suffix(t) {
                        if (t) return t + " :";
                    }
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var a = getCurrentPages().pop().route, n = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号点评",
                        path: "/".concat(a, "?pfsId=").concat(this.pfsId, "&chatId=").concat(n)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var a = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号点评",
                        query: "pfsId=".concat(this.pfsId, "&chatId=").concat(a)
                    };
                },
                onLoad: function onLoad(t) {
                    this.pfsId = t.pfsId, this.handleShare(t), this.queryDetailData(), this.statusBarHeight = getApp().globalData.statusBarHeight;
                },
                watch: {},
                created: function created() {},
                methods: {
                    jumpToHouseDis: function jumpToHouseDis() {
                        t.navigateTo({
                            url: "/home/pages/houseDis?pfsId=" + this.pfsId
                        });
                    },
                    queryDetailData: function queryDetailData() {
                        var t = this;
                        this.$request("propertiesForSale/".concat(this.pfsId)).then(function(e) {
                            t.data.src = e.data.propertiesForSaleImage + "?x-oss-process=style/123", t.data.name = e.data.name, 
                            t.data.time = e.data.commentTime, t.data.lotteryComment = e.data.commentsOnRealEstate;
                        });
                    },
                    search: function search(t) {
                        console.log(t);
                    }
                }
            };
            e.default = o;
        }).call(this, a("543d")["default"]);
    }
}, [ [ "a32d", "common/runtime", "common/vendor" ] ] ]);