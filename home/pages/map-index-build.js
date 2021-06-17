(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "home/pages/map-index-build" ], {
    "110c": function c(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            a(n("66fd"));
            var e = a(n("aee0"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    3867: function _(t, e, n) {},
    6635: function _(t, e, n) {
        "use strict";
        (function(t) {
            function n(t, e) {
                var _n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (_n = a(t)) || e && t && "number" === typeof t.length) {
                        _n && (t = _n);
                        var r = 0, o = function o() {};
                        return {
                            s: o,
                            n: function n() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                };
                            },
                            e: function e(t) {
                                throw t;
                            },
                            f: o
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, u = !0, l = !1;
                return {
                    s: function s() {
                        _n = t[Symbol.iterator]();
                    },
                    n: function n() {
                        var t = _n.next();
                        return u = t.done, t;
                    },
                    e: function e(t) {
                        l = !0, i = t;
                    },
                    f: function f() {
                        try {
                            u || null == _n.return || _n.return();
                        } finally {
                            if (l) throw i;
                        }
                    }
                };
            }
            function a(t, e) {
                if (t) {
                    if ("string" === typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
                }
            }
            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) {
                    a[n] = t[n];
                }
                return a;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                name: "remark",
                data: function data() {
                    return {
                        flag: 0,
                        text: "",
                        lastX: 0,
                        lastY: 0,
                        latitude: 30.243646,
                        longitude: 120.18219,
                        marker: [ {
                            id: 0,
                            latitude: 40.013305,
                            longitude: 118.685713,
                            iconPath: "",
                            rotate: 0,
                            width: 20,
                            height: 20,
                            title: "你在哪了",
                            alpha: .6,
                            callout: {
                                content: "天空之城 ¥31,500",
                                color: "#000000",
                                fontSize: 14,
                                borderRadius: 50,
                                bgColor: "#fff",
                                padding: "15",
                                display: "ALWAYS",
                                textAlign: "center"
                            }
                        } ],
                        scale: 9,
                        type: "",
                        params: {
                            areaId: "",
                            type: 0,
                            page: 0,
                            pagesize: 0
                        }
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var n = getCurrentPages().pop().route, a = t.getStorageSync("chatId");
                    return console.log(n, "getCurrentPages"), "button" === e.from && console.log(e.target), 
                    {
                        title: "全部楼盘",
                        path: "/".concat(n, "?chatId=").concat(a)
                    };
                },
                onLoad: function onLoad(t) {
                    var e = this, n = t.areaName, a = t.type;
                    this.type = a, this.$request("area/data/select/1").then(function(t) {
                        e.params.areaId = t.data.find(function(t) {
                            return t.name === n;
                        }).areaId, e.queryHouseData();
                    });
                },
                methods: {
                    callouttap: function callouttap(e) {
                        var n = e.detail.markerId, a = this.marker.find(function(t) {
                            return t.id === n;
                        }).pfsId;
                        t.navigateTo({
                            url: "/home/pages/houseDis?pfsId=" + a
                        });
                    },
                    queryHouseData: function queryHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list", this.params, "POST").then(function(e) {
                            e.data.length < t.params.pagesize && (t.isBottom = !0), t.marker = e.data;
                            var a, r = 0, o = n(t.marker);
                            try {
                                for (o.s(); !(a = o.n()).done; ) {
                                    var i = a.value;
                                    i.callout = {
                                        content: i.name + "\n" + (i.minPrice ? "￥" : "") + (i.minPrice || "价格待定"),
                                        color: "#000000",
                                        fontSize: 14,
                                        borderRadius: 50,
                                        bgColor: "#fff",
                                        padding: "15",
                                        display: "ALWAYS",
                                        textAlign: "center"
                                    }, i.id = r, i.iconPath = "", r++;
                                }
                            } catch (u) {
                                o.e(u);
                            } finally {
                                o.f();
                            }
                        });
                    },
                    handletouchmove: function handletouchmove(t) {
                        if (console.log("move", t), 0 === this.flag) {
                            var e = t.touches[0].pageX, n = t.touches[0].pageY, a = e - this.lastX, r = n - this.lastY, o = "";
                            this.mindex = -1, Math.abs(a) > Math.abs(r) ? a < 0 ? (console.log("向左滑动"), o = "向左滑动", 
                            this.flag = 1) : a > 0 && (console.log("向右滑动"), o = "向右滑动", this.flag = 2) : r < 0 ? (this.istop = !0, 
                            console.log("向上滑动", this.istop), o = "向上滑动", this.flag = 3) : r > 0 && (console.log("向下滑动"), 
                            o = "向下滑动", this.flag = 4), this.lastX = e, this.lastY = n, this.text = o;
                        }
                    },
                    handletouchstart: function handletouchstart(t) {
                        this.lastX = t.touches[0].pageX, this.lastY = t.touches[0].pageY;
                    },
                    handletouchend: function handletouchend(t) {
                        this.flag = 0, this.text = "没有滑动";
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d")["default"]);
    },
    aee0: function aee0(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("dee8"), r = n("d674");
        for (var o in r) {
            "default" !== o && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(o);
        }
        n("d70b");
        var i, u = n("f0c5"), l = Object(u["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = l.exports;
    },
    d674: function d674(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6635"), r = n.n(a);
        for (var o in a) {
            "default" !== o && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(o);
        }
        e["default"] = r.a;
    },
    d70b: function d70b(t, e, n) {
        "use strict";
        var a = n("3867"), r = n.n(a);
        r.a;
    },
    dee8: function dee8(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return a;
        });
        var r = function r() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    }
}, [ [ "110c", "common/runtime", "common/vendor" ] ] ]);