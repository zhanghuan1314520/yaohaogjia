(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/schoolDistrict" ], {
    "0e85": function e85(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("b573"), o = a("28ab");
        for (var r in o) {
            "default" !== r && function(t) {
                a.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        a("64b5");
        var s, i = a("f0c5"), u = Object(i["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
        e["default"] = u.exports;
    },
    "28ab": function ab(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("8615"), o = a.n(n);
        for (var r in n) {
            "default" !== r && function(t) {
                a.d(e, t, function() {
                    return n[t];
                });
            }(r);
        }
        e["default"] = o.a;
    },
    "64b5": function b5(t, e, a) {
        "use strict";
        var n = a("ba9a"), o = a.n(n);
        o.a;
    },
    8615: function _(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = r(a("a34a")), o = a("88b3");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, a, n, o, r, s) {
                try {
                    var i = t[r](s), u = i.value;
                } catch (c) {
                    return void a(c);
                }
                i.done ? e(u) : Promise.resolve(u).then(n, o);
            }
            function i(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, o) {
                        var r = t.apply(e, a);
                        function i(t) {
                            s(r, n, o, i, u, "next", t);
                        }
                        function u(t) {
                            s(r, n, o, i, u, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var u = function u() {
                a.e("pages/common/search").then(function() {
                    return resolve(a("77cb"));
                }.bind(null, a)).catch(a.oe);
            }, c = {
                fillColor: "#F2F6B2",
                strokeColor: "#FFD700",
                strokeWidth: 2,
                zIndex: 1
            }, l = {
                name: "schoolDistrict",
                components: {
                    search: u
                },
                props: {},
                data: function data() {
                    return {
                        formatText: o.formatText,
                        indicatorDots: !0,
                        interval: 2e3,
                        duration: 500,
                        houseList: [],
                        tagIndex: 0,
                        areaList: [],
                        params: {
                            areaId: "",
                            keyword: "",
                            page: 1,
                            pagesize: 10
                        },
                        isBottom: !1,
                        longitude: 120.119137,
                        latitude: 30.330416,
                        polygons: [],
                        markers: [],
                        placeholderList: [ "" ]
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var a = getCurrentPages().pop().route, n = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "学区分析",
                        path: "/".concat(a, "?chatId=").concat(n)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var a = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "学区分析",
                        query: "chatId=".concat(a)
                    };
                },
                onLoad: function onLoad(t) {
                    this.handleShare(t);
                },
                watch: {},
                created: function created() {
                    var t = this;
                    this.$request("search/carousel/list/35", {}, "GET").then(function(e) {
                        t.placeholderList = e.data;
                    }), this.queryAreaList();
                },
                onReachBottom: function onReachBottom() {
                    this.isBottom || (this.params.page++, this.queryData());
                },
                methods: {
                    queryAreaList: function queryAreaList() {
                        var t = this;
                        return i(n.default.mark(function e() {
                            var a;
                            return n.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.prev = 0, e.next = 3, t.$request("area/data/select/1");

                                      case 3:
                                        a = e.sent, t.areaList = [ {
                                            id: "",
                                            name: "全部",
                                            areaId: ""
                                        } ].concat(a.data), t.params.areaId = t.areaList[0].id, t.queryData(), e.next = 12;
                                        break;

                                      case 9:
                                        e.prev = 9, e.t0 = e["catch"](0), console.error(e.t0);

                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e, null, [ [ 0, 9 ] ]);
                        }))();
                    },
                    queryData: function queryData() {
                        var t = this;
                        return i(n.default.mark(function e() {
                            var a;
                            return n.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$request("school/area/comment/list", t.params, "POST");

                                      case 2:
                                        a = e.sent, a.data.length < t.params.pagesize ? t.isBottom = !0 : t.isBottom = !1, 
                                        t.houseList = t.houseList.concat(a.data);

                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e);
                        }))();
                    },
                    fiflterMap: function fiflterMap(t, e) {
                        this.longitude = t.longitude || 120.119137, this.latitude = t.latitude || 30.330416;
                        try {
                            t && t.map(function(t) {
                                t.polygons = "string" === typeof t.polygons ? JSON.parse(t.polygons) : t.polygons;
                            }), t.map(function(t) {
                                t.polygons.paths.map(function(t) {
                                    t.longitude = t.lng, t.latitude = t.lat;
                                }), t.markers = {
                                    longitude: t.longitude,
                                    latitude: t.latitude,
                                    iconPath: "../../static/map-school.png"
                                }, Object.assign(t.polygons, t.polygons, c), t.polygons.points = t.polygons.paths;
                            });
                            var a = [], n = [];
                            if (t.map(function(t) {
                                return a.push(t.polygons);
                            }), console.log("===", t), t.map(function(t) {
                                return n.push(t.markers);
                            }), "polygons" === e) return a;
                            if ("markers" === e) return n;
                        } catch (o) {
                            console.log(o);
                        }
                    },
                    moreBlock: function moreBlock(e) {
                        t.navigateTo({
                            url: "/pages/houses/publicPlan?pfsId=".concat(e.pfsId, "&type=2")
                        });
                    },
                    distance: function distance(t, e, a, n) {
                        var o = t * Math.PI / 180, r = a * Math.PI / 180, s = o - r, i = e * Math.PI / 180 - n * Math.PI / 180, u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(o) * Math.cos(r) * Math.pow(Math.sin(i / 2), 2)));
                        return u *= 6378.137, u = Math.round(1e4 * u) / 10, u = u.toFixed(2), u;
                    },
                    handle_search: function handle_search(t) {
                        console.log(t), this.params.keyword = t.value, this.params.page = 1, this.isBottom = !1, 
                        this.houseList = [], this.queryData();
                    },
                    areaSelect: function areaSelect(t, e) {
                        this.tagIndex = t, this.params.areaId = e.id, this.params.page = 1, this.isBottom = !1, 
                        this.houseList = [], this.queryData();
                    }
                }
            };
            e.default = l;
        }).call(this, a("543d")["default"]);
    },
    b573: function b573(t, e, a) {
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
            var t = this, e = t.$createElement, a = (t._self._c, t.__map(t.houseList, function(e, a) {
                var n = t.__get_orig(e), o = t.formatText(e.schoolDistrictAnalysis);
                return {
                    $orig: n,
                    m0: o
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: a
                }
            });
        }, r = [];
    },
    ba9a: function ba9a(t, e, a) {},
    f644: function f644(t, e, a) {
        "use strict";
        (function(t) {
            a("6d7c");
            n(a("66fd"));
            var e = n(a("0e85"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    }
}, [ [ "f644", "common/runtime", "common/vendor" ] ] ]);