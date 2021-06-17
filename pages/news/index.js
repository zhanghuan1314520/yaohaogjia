(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/news/index" ], {
    "30c1": function c1(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("5387"), i = n.n(a);
        for (var o in a) {
            "default" !== o && function(e) {
                n.d(t, e, function() {
                    return a[e];
                });
            }(o);
        }
        t["default"] = i.a;
    },
    "36b5": function b5(e, t, n) {},
    "3e2a": function e2a(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("7a77"), i = n("30c1");
        for (var o in i) {
            "default" !== o && function(e) {
                n.d(t, e, function() {
                    return i[e];
                });
            }(o);
        }
        n("d1fc");
        var s, r = n("f0c5"), c = Object(r["a"])(i["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], s);
        t["default"] = c.exports;
    },
    5387: function _(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("88b3"), i = n("7bbb"), o = {
                components: {},
                props: {},
                data: function data() {
                    return {
                        res: [ "资讯" ],
                        floorIndex: 0,
                        navIndex: 0,
                        news: [],
                        nav: [],
                        sigleData: [ {
                            name: "本次房源套数",
                            title: [ "85" ]
                        }, {
                            name: "装修情况",
                            title: [ "毛胚" ]
                        }, {
                            name: "户型区间",
                            title: [ "约160-278㎡" ]
                        }, {
                            name: "价格",
                            title: [ "均价1564654元" ]
                        } ],
                        dynamicList: [],
                        loadingText: "加载中...",
                        loadingType: 0,
                        contentText: {
                            contentdown: "上拉显示更多",
                            contentrefresh: "正在加载...",
                            contentnomore: "没有更多数据了"
                        },
                        page: 0,
                        pagesize: 10,
                        timer: {}
                    };
                },
                onLoad: function onLoad() {
                    var e = this;
                    console.log(this.navHeight, "navHeight"), this.getmorenews(), this.$request("dynamic/list", {
                        type: "0"
                    }, "POST").then(function(t) {
                        0 == t.code && (e.nav = t.data.dynamicTypeCounts, e.dynamicList = t.data.dynamicList, 
                        console.log(t.data));
                    });
                },
                watch: {},
                created: function created() {},
                onPullDownRefresh: function onPullDownRefresh() {},
                onReachBottom: function onReachBottom() {
                    var e = this;
                    null != this.timer && clearTimeout(this.timer), this.timer = setTimeout(function() {
                        2 !== e.loadingType && e.getmorenews();
                    }, 1e3);
                },
                methods: {
                    MesDeatils: function MesDeatils(t) {
                        console.log(t.url, "data.url"), null !== t.url && e.navigateTo({
                            url: "/myPackageA/pages/newsInfo?newsId=".concat(t.newsId, "&getCustomers=true")
                        });
                    },
                    floorSelect: function floorSelect(e) {
                        this.floorIndex = e;
                    },
                    setAjax: function setAjax() {
                        var t = this;
                        this.$request("news/list", {
                            type: type,
                            page: this.page,
                            pagesize: this.pagesize
                        }, "POST").then(function(n) {
                            0 == n.code && (e.hideLoading(), t.news = n.data);
                        });
                    },
                    getmorenews: function getmorenews() {
                        var t = this;
                        if (this.page++, 0 != this.loadingType) return !1;
                        this.loadingType = 1, e.showNavigationBarLoading(), this.$request("news/list", {
                            page: this.page,
                            pagesize: this.pagesize
                        }, "POST").then(function(n) {
                            if (0 == n.code) {
                                if (e.hideLoading(), console.log(n.data.length, "res.data.lengt"), "" === n.data && (n.data = []), 
                                t.news = t.news.concat(n.data), n.data.length < t.pagesize) return t.loadingType = 2, 
                                void e.hideNavigationBarLoading();
                                t.loadingType = 0, e.hideNavigationBarLoading();
                            }
                        });
                    },
                    navSelect: function navSelect(e, t) {
                        var n = this;
                        this.navIndex = t, this.$request("dynamic/list", {
                            type: e
                        }, "POST").then(function(e) {
                            0 == e.code && (n.nav = e.data.dynamicTypeCounts, n.dynamicList = e.data.dynamicList, 
                            console.log(e.data));
                        });
                    },
                    formatTime: a.formatTime,
                    graceRichText: i.format
                }
            };
            t.default = o;
        }).call(this, n("543d")["default"]);
    },
    "7a77": function a77(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var a = {
            uniLoadMore: function uniLoadMore() {
                return n.e("components/uni-load-more/uni-load-more").then(n.bind(null, "0c7d"));
            }
        }, i = function i() {
            var e = this, t = e.$createElement, n = (e._self._c, 0 == e.floorIndex ? e.__map(e.news, function(t, n) {
                var a = e.__get_orig(t), i = e.formatTime(t.publishTime).slice(0, 10).replace(/\-/g, ".");
                return {
                    $orig: a,
                    g0: i
                };
            }) : null), a = 1 == e.floorIndex ? e.__map(e.dynamicList, function(t, n) {
                var a = e.__get_orig(t), i = e.graceRichText(t.content);
                return {
                    $orig: a,
                    m0: i
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    l1: a
                }
            });
        }, o = [];
    },
    d1fc: function d1fc(e, t, n) {
        "use strict";
        var a = n("36b5"), i = n.n(a);
        i.a;
    },
    eb29: function eb29(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            a(n("66fd"));
            var t = a(n("3e2a"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "eb29", "common/runtime", "common/vendor" ] ] ]);