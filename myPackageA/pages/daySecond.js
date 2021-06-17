require("../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/daySecond" ], {
    "0f86": function f86(e, t, n) {},
    "554d": function d(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            a(n("66fd"));
            var t = a(n("afc5"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    5881: function _(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("b63d"), i = n.n(a);
        for (var r in a) {
            "default" !== r && function(e) {
                n.d(t, e, function() {
                    return a[e];
                });
            }(r);
        }
        t["default"] = i.a;
    },
    "80bd": function bd(e, t, n) {
        "use strict";
        var a;
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var i = function i() {
            var e = this, t = e.$createElement, n = (e._self._c, e.formatTime(e.info.dateTime).slice(5, 7).replace(/\-/g, ".")), a = e.__map(e.time, function(t, n) {
                var a = e.__get_orig(t), i = e.formatTime(t[0]).slice(5, 10).replace(/\-/g, "."), r = e.formatTime(t[1]).slice(5, 10).replace(/\-/g, ".");
                return {
                    $orig: a,
                    g1: i,
                    g2: r
                };
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    l0: a
                }
            });
        }, r = [];
    },
    afc5: function afc5(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("80bd"), i = n("5881");
        for (var r in i) {
            "default" !== r && function(e) {
                n.d(t, e, function() {
                    return i[e];
                });
            }(r);
        }
        n("c20c");
        var o, c = n("f0c5"), s = Object(c["a"])(i["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        t["default"] = s.exports;
    },
    b63d: function b63d(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a, i = c(n("a34a")), r = n("88b3"), o = c(n("5900"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, a, i, r, o) {
                try {
                    var c = e[r](o), s = c.value;
                } catch (l) {
                    return void n(l);
                }
                c.done ? t(s) : Promise.resolve(s).then(a, i);
            }
            function l(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = e.apply(t, n);
                        function o(e) {
                            s(r, a, i, o, c, "next", e);
                        }
                        function c(e) {
                            s(r, a, i, o, c, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var u = null, d = {
                name: "daySecond",
                components: {},
                props: {},
                data: function data() {
                    return {
                        scrollLeft: 0,
                        data: {
                            src: "https://cdn.lottery.okgoes.com/8.png"
                        },
                        cWidth: "",
                        cHeight: "",
                        pixelRatio: 1,
                        textarea: "",
                        time: [],
                        currentIndex: 0,
                        info: {},
                        list: [],
                        categories: [],
                        canvaRing: null
                    };
                },
                onShareAppMessage: function onShareAppMessage(t) {
                    var n = getCurrentPages().pop().route, a = e.getStorageSync("chatId");
                    return "button" === t.from && console.log(t.target), {
                        title: "每日二手",
                        path: "/".concat(n, "?chatId=").concat(a)
                    };
                },
                onShareTimeline: function onShareTimeline(t) {
                    getCurrentPages().pop().route;
                    var n = e.getStorageSync("chatId");
                    return "button" === t.from && console.log(t.target), {
                        title: "每日二手",
                        query: "chatId=".concat(n)
                    };
                },
                onLoad: function onLoad(t) {
                    var n = this;
                    return l(i.default.mark(function r() {
                        var o, c;
                        return i.default.wrap(function(i) {
                            while (1) {
                                switch (i.prev = i.next) {
                                  case 0:
                                    n.handleShare(t), a = n, n.cWidth = e.upx2px(706), n.cHeight = e.upx2px(520), n.time = n.getEveryDay(), 
                                    o = new Date().getTime(), c = 0;

                                  case 7:
                                    if (!(c < n.time.length)) {
                                        i.next = 15;
                                        break;
                                    }
                                    if (console.log(o, n.time[c][0], n.time[c][1]), !(o >= n.time[c][0] && o <= n.time[c][1])) {
                                        i.next = 12;
                                        break;
                                    }
                                    return n.currentIndex = c, i.abrupt("break", 15);

                                  case 12:
                                    c++, i.next = 7;
                                    break;

                                  case 15:
                                    return i.next = 17, n.getData(n.currentIndex);

                                  case 17:
                                    n.scrollLeft = 102 * n.currentIndex - 102;

                                  case 18:
                                  case "end":
                                    return i.stop();
                                }
                            }
                        }, r);
                    }))();
                },
                watch: {},
                onUnload: function onUnload() {
                    u = null;
                },
                methods: {
                    search: function search(e) {
                        console.log(e);
                    },
                    timeSelect: function timeSelect(e) {
                        this.currentIndex = e, this.getData(e);
                    },
                    formatTime: r.formatTime,
                    getCountDays: function getCountDays() {
                        var e = new Date(), t = e.getMonth();
                        return e.setMonth(t + 1), e.setDate(0), e.getDate();
                    },
                    getCurrentMonthFirst: function getCurrentMonthFirst() {
                        var e = new Date();
                        return e.setDate(1), new Date(new Date(e).toLocaleDateString()).getTime();
                    },
                    getCurrentMonthLast: function getCurrentMonthLast() {
                        var e = new Date(), t = e.getMonth(), n = ++t, a = new Date(e.getFullYear(), n, 1), i = 864e5;
                        return new Date(a - i).getTime() + 864e5 - 1;
                    },
                    getEveryDay: function getEveryDay() {
                        new Date();
                        for (var e = 5184e5, t = [], n = this.getCountDays(), a = this.getCurrentMonthLast(), i = this.getCurrentMonthFirst(), r = 1; r <= n; r += 6) {
                            a >= i + e ? t.push([ i, i + e - 1e3 ]) : t.push([ i, a ]), i += e;
                        }
                        return t[t.length - 1][1] - t[t.length - 1][0] < 864e5 && (t[t.length - 2][1] = t[t.length - 1][1], 
                        t.splice(t.length - 1, 1)), t;
                    },
                    getData: function getData(e) {
                        var t = this;
                        return l(i.default.mark(function n() {
                            var a, r;
                            return i.default.wrap(function(n) {
                                while (1) {
                                    switch (n.prev = n.next) {
                                      case 0:
                                        return t.categories = [], n.next = 3, t.$request("every/day/second/hand/list", {
                                            beginTime: t.time[e][0],
                                            endTime: t.time[e][1] - 1e3
                                        }, "post");

                                      case 3:
                                        if (a = n.sent, r = a.data, r.everyDaySecondHandList.sort(function(e, t) {
                                            return e.dateTime < t.dateTime ? -1 : 1;
                                        }), console.log(r.everyDaySecondHandList, "datadata"), t.list = r.everyDaySecondHandList, 
                                        t.info = r, t.list.forEach(function(e) {
                                            t.categories.push(t.formatTime(e.dateTime).slice(5, 10).replace(/\-/g, "."));
                                        }), null === u) {
                                            n.next = 15;
                                            break;
                                        }
                                        return n.next = 13, t.changeData();

                                      case 13:
                                        n.next = 17;
                                        break;

                                      case 15:
                                        return n.next = 17, t.getServerData();

                                      case 17:
                                      case "end":
                                        return n.stop();
                                    }
                                }
                            }, n);
                        }))();
                    },
                    getServerData: function getServerData() {
                        var e = {
                            categories: [],
                            series: [ {
                                name: "成交",
                                data: [],
                                type: "column",
                                index: 1,
                                format: function format(e) {
                                    return e + "套";
                                }
                            }, {
                                index: 0,
                                name: "均价",
                                data: [],
                                type: "line",
                                color: "#f04864",
                                lineType: "solid",
                                dashLength: 10,
                                pointShape: "circle",
                                addPoint: !0,
                                dataLabel: !1,
                                format: function format(e) {
                                    return "";
                                }
                            } ]
                        }, t = {
                            categories: [],
                            series: []
                        };
                        t.categories = this.categories, t.series = e.series, this.list.forEach(function(e) {
                            t.series[0].data.push(e.num), t.series[1].data.push(e.price);
                        }), a.showMix("canvasMix", t), console.log("Mix", t);
                    },
                    scroll: function scroll() {},
                    setData: function setData() {},
                    showMix: function showMix(e, t) {
                        console.log(t, "new uChartsnew uCharts"), u = new o.default({
                            $this: a,
                            canvasId: e,
                            type: "mix",
                            fontSize: 11,
                            padding: [ 5, 5, 10, 5 ],
                            legend: {
                                show: !0,
                                position: "top",
                                float: "center",
                                padding: 5,
                                lineHeight: 11,
                                margin: 6
                            },
                            background: "#FFFFFF",
                            pixelRatio: a.pixelRatio,
                            categories: t.categories,
                            series: t.series,
                            animation: !0,
                            enableScroll: !0,
                            xAxis: {
                                disableGrid: !0,
                                itemCount: 7,
                                scrollShow: !1,
                                scrollAlign: "left"
                            },
                            yAxis: {
                                data: [ {
                                    calibration: !0,
                                    position: "right",
                                    title: "均价",
                                    titleFontSize: 12,
                                    min: 0,
                                    max: 500,
                                    format: function format(e) {
                                        return console.log(e, "val"), (e / 1e4).toFixed(0) + "w";
                                    }
                                }, {
                                    calibration: !0,
                                    position: "left",
                                    min: 0,
                                    max: 500,
                                    title: "成交量",
                                    titleFontSize: 12,
                                    format: function format(e) {
                                        return e.toFixed(0);
                                    }
                                } ],
                                showTitle: !0,
                                gridType: "dash",
                                disableGrid: !0,
                                dashLength: 4,
                                splitNumber: 5
                            },
                            width: a.cWidth * a.pixelRatio,
                            height: a.cHeight * a.pixelRatio,
                            dataPointShape: !0,
                            extra: {
                                column: {
                                    width: 20 * a.pixelRatio
                                },
                                tooltip: {
                                    showBox: !1,
                                    bgColor: "#000000",
                                    bgOpacity: .7,
                                    gridType: "dash",
                                    dashLength: 8,
                                    gridColor: "#2B67FF",
                                    fontColor: "#FFFFFF",
                                    horizentalLine: !0,
                                    xAxisLabel: !0,
                                    yAxisLabel: !0,
                                    labelBgColor: "#DFE8FF",
                                    labelBgOpacity: .95,
                                    labelAlign: "left",
                                    labelFontColor: "#666666"
                                }
                            }
                        }), u.addEventListener("scrollLeft", function() {
                            console.log("已经到最【左】边啦");
                        }), u.addEventListener("scrollRight", function() {
                            console.log("已经到最【右】边啦");
                        });
                    },
                    touchMix: function touchMix(e) {
                        u.scrollStart(e);
                    },
                    moveMix: function moveMix(e) {
                        u.scroll(e);
                    },
                    touchEndMix: function touchEndMix(e) {
                        u.scrollEnd(e), u.touchLegend(e), u.showToolTip(e, {
                            format: function format(e, t) {
                                return t + " " + e.name + ":" + e.data;
                            }
                        });
                    },
                    changeData: function changeData() {
                        var e = {
                            categories: [],
                            series: []
                        };
                        e.categories = this.categories, e.series = [ {
                            name: "成交",
                            data: [],
                            type: "column",
                            index: 1,
                            format: function format(e) {
                                return e + "套";
                            }
                        }, {
                            index: 0,
                            name: "均价",
                            data: [],
                            type: "line",
                            color: "#f04864",
                            lineType: "solid",
                            dashLength: 10,
                            pointShape: "circle",
                            addPoint: !0,
                            format: function format(e) {
                                return "";
                            }
                        } ], this.list.forEach(function(t) {
                            e.series[0].data.push(t.num), e.series[1].data.push(t.price);
                        }), u.updateData({
                            series: e.series,
                            categories: e.categories
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, n("543d")["default"]);
    },
    c20c: function c20c(e, t, n) {
        "use strict";
        var a = n("0f86"), i = n.n(a);
        i.a;
    }
}, [ [ "554d", "common/runtime", "common/vendor" ] ] ]);