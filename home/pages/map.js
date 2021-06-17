(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "home/pages/map" ], {
    "12be": function be(t, e, n) {
        "use strict";
        (function(t) {
            function a(t, e) {
                var _n;
                if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (_n = o(t)) || e && t && "number" === typeof t.length) {
                        _n && (t = _n);
                        var a = 0, r = function r() {};
                        return {
                            s: r,
                            n: function n() {
                                return a >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[a++]
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
                var i, s = !0, u = !1;
                return {
                    s: function s() {
                        _n = t[Symbol.iterator]();
                    },
                    n: function n() {
                        var t = _n.next();
                        return s = t.done, t;
                    },
                    e: function e(t) {
                        u = !0, i = t;
                    },
                    f: function f() {
                        try {
                            s || null == _n.return || _n.return();
                        } finally {
                            if (u) throw i;
                        }
                    }
                };
            }
            function o(t, e) {
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
            var i = function i() {
                n.e("home/pages/search").then(function() {
                    return resolve(n("0280"));
                }.bind(null, n)).catch(n.oe);
            }, s = function s() {
                Promise.all([ n.e("common/vendor"), n.e("home/pages/house") ]).then(function() {
                    return resolve(n("080c"));
                }.bind(null, n)).catch(n.oe);
            }, u = {
                name: "remark",
                components: {
                    house: s,
                    search: i
                },
                data: function data() {
                    return {
                        placeholderList: [ "" ],
                        flag: 0,
                        text: "",
                        lastX: 0,
                        lastY: 0,
                        istop: !1,
                        houseData: [],
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
                            keyword: "",
                            page: 1,
                            pagesize: 10
                        },
                        isBottom: !1
                    };
                },
                onLoad: function onLoad(e) {
                    this.handleShare(e), this.type = e.type, this.queryHouseData(), this.map(), this.querySearchCarousel(), 
                    t.setNavigationBarTitle({
                        title: "摇号大师-".concat(24 == this.type ? "热门楼盘" : 3 == this.type ? "即将预售" : "即将加推")
                    });
                },
                onReachBottom: function onReachBottom() {
                    console.log("触底"), this.isBottom || (this.params.page++, this.queryHouseData());
                },
                methods: {
                    querySearchCarousel: function querySearchCarousel() {
                        var t = this, e = {
                            24: 11,
                            3: 12,
                            31: 13,
                            32: 14,
                            17: 36
                        }, n = e[this.type];
                        this.$request("search/carousel/list/".concat(n), {}, "GET").then(function(e) {
                            t.placeholderList = e.data;
                        });
                    },
                    confirm: function confirm(t) {
                        console.log(t), this.params.keyword = t.value, this.houseData = [], this.isBottom = !1, 
                        this.params.page = 1, this.queryHouseData();
                    },
                    queryHouseData: function queryHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list/".concat(this.type), this.params, "POST").then(function(e) {
                            e.data.length < t.params.pagesize && (t.isBottom = !0), t.houseData = t.houseData.concat(e.data);
                        });
                    },
                    callouttap: function callouttap(e) {
                        var n = this.marker[e.detail.markerId].areaName;
                        console.log(e), t.navigateTo({
                            url: "/home/pages/map-build?areaName=".concat(n, "&type=").concat(this.type)
                        });
                    },
                    map: function map() {
                        var t = this;
                        this.$request("pfs/map/data/".concat(this.type), {}, "GET").then(function(e) {
                            if ("0" == e.code) {
                                t.marker = e.data;
                                var n, o = 0, r = a(t.marker);
                                try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                        var i = n.value;
                                        i.callout = {
                                            content: i.areaName + "\n" + i.count,
                                            color: "#000000",
                                            fontSize: 14,
                                            borderRadius: 30,
                                            bgColor: "#fff",
                                            padding: "15",
                                            display: "ALWAYS",
                                            textAlign: "center"
                                        }, i.id = o, i.iconPath = "", o++;
                                    }
                                } catch (s) {
                                    r.e(s);
                                } finally {
                                    r.f();
                                }
                                console.log("this.marker", t.marker);
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
            e.default = u;
        }).call(this, n("543d")["default"]);
    },
    "158e": function e(t, _e, n) {
        "use strict";
        n.r(_e);
        var a = n("12be"), o = n.n(a);
        for (var r in a) {
            "default" !== r && function(t) {
                n.d(_e, t, function() {
                    return a[t];
                });
            }(r);
        }
        _e["default"] = o.a;
    },
    "639d": function d(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d3fe"), o = n("158e");
        for (var r in o) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        n("9d55");
        var i, s = n("f0c5"), u = Object(s["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = u.exports;
    },
    9035: function _(t, e, n) {},
    "9d55": function d55(t, e, n) {
        "use strict";
        var a = n("9035"), o = n.n(a);
        o.a;
    },
    d3fe: function d3fe(t, e, n) {
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
            t._isMounted || (t.e0 = function(e) {
                t.istop = !t.istop;
            });
        }, r = [];
    },
    ddec: function ddec(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            a(n("66fd"));
            var e = a(n("639d"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "ddec", "common/runtime", "common/vendor" ] ] ]);