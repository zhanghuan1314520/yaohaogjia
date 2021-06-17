(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/talents" ], {
    1589: function _(t, e, a) {},
    2876: function _(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("cb31"), i = a("5e57");
        for (var o in i) {
            "default" !== o && function(t) {
                a.d(e, t, function() {
                    return i[t];
                });
            }(o);
        }
        a("a60b");
        var r, c = a("f0c5"), s = Object(c["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        e["default"] = s.exports;
    },
    "38f0": function f0(t, e, a) {
        "use strict";
        (function(t) {
            a("6d7c");
            n(a("66fd"));
            var e = n(a("2876"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    },
    "5bc6": function bc6(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n, i = c(a("a34a")), o = a("88b3"), r = c(a("5900"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, a, n, i, o, r) {
                try {
                    var c = t[o](r), s = c.value;
                } catch (d) {
                    return void a(d);
                }
                c.done ? e(s) : Promise.resolve(s).then(n, i);
            }
            function d(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, i) {
                        var o = t.apply(e, a);
                        function r(t) {
                            s(o, n, i, r, c, "next", t);
                        }
                        function c(t) {
                            s(o, n, i, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var u = null, l = null, f = {
                name: "daySecond",
                components: {},
                props: {},
                data: function data() {
                    return {
                        maxNum: 0,
                        dayAdd: 0,
                        total: 0,
                        ageListData: "",
                        data: {
                            src: "https://cdn.lottery.okgoes.com/8.png"
                        },
                        cWidth: "",
                        cHeight: "",
                        pixelRatio: 1,
                        time: [],
                        seriesData: [],
                        info: {},
                        textarea: ""
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var a = getCurrentPages().pop().route, n = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "高端人才",
                        path: "/".concat(a, "?chatId=").concat(n)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var a = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "高端人才",
                        query: "chatId=".concat(a)
                    };
                },
                onLoad: function onLoad(e) {
                    var a = this;
                    return d(i.default.mark(function o() {
                        return i.default.wrap(function(i) {
                            while (1) {
                                switch (i.prev = i.next) {
                                  case 0:
                                    return a.handleShare(e), n = a, a.cWidth = t.upx2px(670), a.cHeight = t.upx2px(460), 
                                    i.next = 6, a.init();

                                  case 6:
                                    return i.next = 8, a.initColumn();

                                  case 8:
                                  case "end":
                                    return i.stop();
                                }
                            }
                        }, o);
                    }))();
                },
                watch: {},
                created: function created() {},
                methods: {
                    search: function search(t) {
                        console.log(t);
                    },
                    formatTime: o.formatTime,
                    init: function init() {
                        var t = this;
                        return d(i.default.mark(function e() {
                            var a, n, o, r, c, s, d, u;
                            return i.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$request("high/end/talents/list", {}, "get");

                                      case 2:
                                        return a = e.sent, t.info = a.data, n = a.data.highEndTalentsList[0].dayAdd, a.data.highEndTalentsList.forEach(function(e) {
                                            t.time.push(t.formatTime(e.dateTime).slice(5, 10).replace(/\-/g, ".")), n = n > e.dayAdd ? n : e.dayAdd, 
                                            t.seriesData.push(e.dayAdd);
                                        }), t.maxNum = 10 + n, e.next = 9, t.$request("high/end/talents/age/list", {}, "get");

                                      case 9:
                                        if (o = e.sent, t.ageListData = o.data, null !== o.data) {
                                            e.next = 13;
                                            break;
                                        }
                                        return e.abrupt("return");

                                      case 13:
                                        for (r = {
                                            series: []
                                        }, c = o.data.ageGrade28Down + o.data.ageGrade29To35 + o.data.ageGrade36To45 + o.data.ageGrade45Up, 
                                        t.total = c, s = {
                                            series: [ {
                                                name: "28岁以下    ".concat(Math.round(o.data.ageGrade28Down / c * 100), "%   ").concat(o.data.ageGrade28Down, "人"),
                                                data: o.data.ageGrade28Down
                                            }, {
                                                name: "29-35岁    ".concat(Math.round(o.data.ageGrade29To35 / c * 100), "%   ").concat(o.data.ageGrade29To35, "人"),
                                                data: o.data.ageGrade29To35
                                            }, {
                                                name: "36-45岁    ".concat(Math.round(o.data.ageGrade36To45 / c * 100), "%   ").concat(o.data.ageGrade36To45, "人"),
                                                data: o.data.ageGrade36To45
                                            }, {
                                                name: "45岁以上    ".concat(Math.round(o.data.ageGrade45Up / c * 100), "%   ").concat(o.data.ageGrade45Up, "人"),
                                                data: o.data.ageGrade45Up
                                            } ]
                                        }, r.series = s.series, d = function d(t) {
                                            r.series[t].format = function() {
                                                return r.series[t].name + r.series[t].data;
                                            };
                                        }, u = 0; u < r.series.length; u++) {
                                            d(u);
                                        }
                                        t.showRing("canvasRing", r);

                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e);
                        }))();
                    },
                    initColumn: function initColumn() {
                        console.log(this.info.currentDayAdd, "this.info.currentDayAdd");
                        var t = {
                            categories: [],
                            series: []
                        }, e = {
                            categories: this.time,
                            series: [ {
                                name: "新增总人数",
                                data: this.seriesData
                            } ]
                        };
                        t.categories = e.categories, t.series = e.series, n.showColumn("canvasColumn", t);
                    },
                    showRing: function showRing(t, e) {
                        console.log(e), u = new r.default({
                            $this: n,
                            canvasId: t,
                            type: "ring",
                            colors: [ "#FDAB47", "#2B67FF", "#00BFBF", "#f00" ],
                            fontSize: 14,
                            legend: {
                                show: !0,
                                position: "right",
                                padding: 10,
                                fontSize: 14 * n.pixelRatio,
                                fontColor: "#868E99",
                                lineHeight: 28 * n.pixelRatio
                            },
                            title: {
                                name: this.total,
                                color: "#5B6168",
                                fontSize: 22 * n.pixelRatio,
                                offsetY: 1 * n.pixelRatio
                            },
                            subtitle: {
                                name: "总数",
                                color: "#868E99",
                                fontSize: 14 * n.pixelRatio,
                                offsetY: 4 * n.pixelRatio
                            },
                            extra: {
                                pie: {
                                    ringWidth: 10 * n.pixelRatio,
                                    labelWidth: 4,
                                    disablePieStroke: !0
                                }
                            },
                            background: "#FFFFFF",
                            pixelRatio: n.pixelRatio,
                            series: e.series,
                            animation: !0,
                            width: n.cWidth * n.pixelRatio,
                            height: n.cHeight * n.pixelRatio,
                            padding: [ 5, 5, 5, 5 ],
                            dataLabel: !1
                        });
                    },
                    showColumn: function showColumn(t, e) {
                        l = new r.default({
                            $this: n,
                            canvasId: t,
                            type: "column",
                            legend: {
                                show: !1
                            },
                            fontSize: 11,
                            background: "#FFFFFF",
                            pixelRatio: n.pixelRatio,
                            animation: !0,
                            categories: e.categories,
                            series: e.series,
                            enableScroll: !0,
                            xAxis: {
                                scrollAlign: "right",
                                disableGrid: !0,
                                itemCount: 7,
                                scrollShow: !0
                            },
                            yAxis: {
                                max: this.maxNum
                            },
                            dataLabel: !0,
                            width: n.cWidth * n.pixelRatio,
                            height: n.cHeight * n.pixelRatio,
                            extra: {
                                column: {
                                    type: "group",
                                    width: 20 * n.pixelRatio
                                }
                            }
                        });
                    },
                    touchMix: function touchMix(t) {
                        l.scrollStart(t);
                    },
                    moveMix: function moveMix(t) {
                        l.scroll(t);
                    },
                    touchEndMix: function touchEndMix(t) {
                        l.scrollEnd(t), l.touchLegend(t);
                    },
                    touchRing: function touchRing(t) {
                        u.showToolTip(t, {
                            format: function format(t) {
                                return t.name + ":" + t.data;
                            }
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, a("543d")["default"]);
    },
    "5e57": function e57(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("5bc6"), i = a.n(n);
        for (var o in n) {
            "default" !== o && function(t) {
                a.d(e, t, function() {
                    return n[t];
                });
            }(o);
        }
        e["default"] = i.a;
    },
    a60b: function a60b(t, e, a) {
        "use strict";
        var n = a("1589"), i = a.n(n);
        i.a;
    },
    cb31: function cb31(t, e, a) {
        "use strict";
        var n;
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return n;
        });
        var i = function i() {
            var t = this, e = t.$createElement, a = (t._self._c, t.formatTime(t.info.dateTime).slice(5, 7).replace(/\-/g, "."));
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: a
                }
            });
        }, o = [];
    }
}, [ [ "38f0", "common/runtime", "common/vendor" ] ] ]);