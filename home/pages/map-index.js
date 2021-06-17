(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "home/pages/map-index" ], {
    "2d7d": function d7d(t, e, n) {
        "use strict";
        (function(t) {
            function n(t, e) {
                var _n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (_n = a(t)) || e && t && "number" === typeof t.length) {
                        _n && (t = _n);
                        var o = 0, r = function r() {};
                        return {
                            s: r,
                            n: function n() {
                                return o >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[o++]
                                };
                            },
                            e: function e(t) {
                                throw t;
                            },
                            f: r
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var i, l = !0, u = !1;
                return {
                    s: function s() {
                        _n = t[Symbol.iterator]();
                    },
                    n: function n() {
                        var t = _n.next();
                        return l = t.done, t;
                    },
                    e: function e(t) {
                        u = !0, i = t;
                    },
                    f: function f() {
                        try {
                            l || null == _n.return || _n.return();
                        } finally {
                            if (u) throw i;
                        }
                    }
                };
            }
            function a(t, e) {
                if (t) {
                    if ("string" === typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                }
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) {
                    a[n] = t[n];
                }
                return a;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = {
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
                        type: ""
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
                    this.handleShare(t), this.type = 3, this.map();
                },
                methods: {
                    callouttap: function callouttap(e) {
                        var n = this.marker[e.detail.markerId].areaName;
                        console.log(e), t.navigateTo({
                            url: "/home/pages/map-index-build?areaName=".concat(n, "&type=").concat(this.type)
                        });
                    },
                    map: function map() {
                        var t = this;
                        this.$request("pfs/map/data", {}, "GET").then(function(e) {
                            if ("0" == e.code) {
                                t.marker = e.data;
                                var a, o = 0, r = n(t.marker);
                                try {
                                    for (r.s(); !(a = r.n()).done; ) {
                                        var i = a.value;
                                        i.callout = {
                                            content: i.areaName + "\n" + i.count,
                                            color: "#000000",
                                            fontSize: 14,
                                            borderRadius: 50,
                                            bgColor: "#fff",
                                            padding: "15",
                                            display: "ALWAYS",
                                            textAlign: "center"
                                        }, i.id = o, i.iconPath = "", o++;
                                    }
                                } catch (l) {
                                    r.e(l);
                                } finally {
                                    r.f();
                                }
                            }
                        });
                    },
                    handletouchmove: function handletouchmove(t) {
                        if (console.log("move", t), 0 === this.flag) {
                            var e = t.touches[0].pageX, n = t.touches[0].pageY, a = e - this.lastX, o = n - this.lastY, r = "";
                            this.mindex = -1, Math.abs(a) > Math.abs(o) ? a < 0 ? (console.log("向左滑动"), r = "向左滑动", 
                            this.flag = 1) : a > 0 && (console.log("向右滑动"), r = "向右滑动", this.flag = 2) : o < 0 ? (this.istop = !0, 
                            console.log("向上滑动", this.istop), r = "向上滑动", this.flag = 3) : o > 0 && (console.log("向下滑动"), 
                            r = "向下滑动", this.flag = 4), this.lastX = e, this.lastY = n, this.text = r;
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
            e.default = r;
        }).call(this, n("543d")["default"]);
    },
    "494f": function f(t, e, n) {
        "use strict";
        var a = n("9368"), o = n.n(a);
        o.a;
    },
    9368: function _(t, e, n) {},
    "9f24": function f24(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("2d7d"), o = n.n(a);
        for (var r in a) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(r);
        }
        e["default"] = o.a;
    },
    d0c9: function d0c9(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var o = function o() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
    },
    d4f1: function d4f1(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d0c9"), o = n("9f24");
        for (var r in o) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        n("494f");
        var i, l = n("f0c5"), u = Object(l["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = u.exports;
    },
    dbb0: function dbb0(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            a(n("66fd"));
            var e = a(n("d4f1"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "dbb0", "common/runtime", "common/vendor" ] ] ]);