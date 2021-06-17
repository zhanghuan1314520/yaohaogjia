(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/remark" ], {
    "6b3b": function b3b(t, e, n) {},
    "72ff": function ff(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            n("76b3");
            var a = function a() {
                Promise.all([ n.e("common/vendor"), n.e("pages/common/house") ]).then(function() {
                    return resolve(n("9fd6"));
                }.bind(null, n)).catch(n.oe);
            }, o = function o() {
                n.e("pages/common/search").then(function() {
                    return resolve(n("77cb"));
                }.bind(null, n)).catch(n.oe);
            }, r = {
                name: "remark",
                components: {
                    house: a,
                    search: o
                },
                props: {},
                data: function data() {
                    return {
                        houseData: [],
                        placeholderList: [ "" ],
                        params: {
                            keyword: "",
                            page: 1,
                            pagesize: 10
                        },
                        isBottom: !1
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var n = getCurrentPages().pop().route, a = t.getStorageSync("chatId"), o = a ? "/".concat(n, "?chatId=").concat(a) : "/".concat(n);
                    return {
                        title: "摇号点评",
                        path: o
                    };
                },
                onLoad: function onLoad() {
                    this.queryHouseData();
                },
                onReachBottom: function onReachBottom() {
                    this.isBottom || (this.params.page++, this.queryHouseData());
                },
                onNavigationBarButtonTap: function onNavigationBarButtonTap() {
                    console.log("地图");
                },
                onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(t) {
                    console.log("你输入了信息", t);
                },
                watch: {},
                created: function created() {
                    var t = this;
                    this.$request("search/carousel/list/34", {}, "GET").then(function(e) {
                        t.placeholderList = e.data;
                    });
                },
                methods: {
                    scroll: function scroll() {},
                    confirm: function confirm(t) {
                        this.params.keyword = t.value, this.isBottom = !1, this.params.page = 1, this.houseData = [], 
                        this.queryHouseData();
                    },
                    queryHouseData: function queryHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list/20", this.params, "POST").then(function(e) {
                            e.data.length < t.params.pagesize && (t.isBottom = !0), t.houseData = t.houseData.concat(e.data);
                        });
                    },
                    toDetail: function toDetail(e) {
                        t.navigateTo({
                            url: "../houses/floorRemark?pfsId=".concat(e.pfsId)
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d")["default"]);
    },
    ab117: function ab117(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            a(n("66fd"));
            var e = a(n("ff8d"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    d6f0: function d6f0(t, e, n) {
        "use strict";
        var a = n("6b3b"), o = n.n(a);
        o.a;
    },
    f83e: function f83e(t, e, n) {
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
    f956: function f956(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("72ff"), o = n.n(a);
        for (var r in a) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(r);
        }
        e["default"] = o.a;
    },
    ff8d: function ff8d(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("f83e"), o = n("f956");
        for (var r in o) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        n("d6f0");
        var u, c = n("f0c5"), s = Object(c["a"])(o["default"], a["b"], a["c"], !1, null, "54ff7c49", null, !1, a["a"], u);
        e["default"] = s.exports;
    }
}, [ [ "ab117", "common/runtime", "common/vendor" ] ] ]);