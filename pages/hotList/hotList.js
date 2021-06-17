(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/hotList/hotList" ], {
    2049: function _(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("b393"), a = o("e194");
        for (var i in a) {
            "default" !== i && function(t) {
                o.d(e, t, function() {
                    return a[t];
                });
            }(i);
        }
        o("efe5");
        var s, r = o("f0c5"), u = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
        e["default"] = u.exports;
    },
    "4a6e": function a6e(t, e, o) {
        "use strict";
        (function(t) {
            o("6d7c");
            n(o("66fd"));
            var e = n(o("2049"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, o("543d")["createPage"]);
    },
    b004: function b004(t, e, o) {},
    b393: function b393(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return i;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            uniSwiperDot: function uniSwiperDot() {
                return o.e("components/uni-swiper-dot/uni-swiper-dot").then(o.bind(null, "80b0"));
            },
            uniList: function uniList() {
                return o.e("components/uni-list/uni-list").then(o.bind(null, "98b2"));
            },
            uniListItem: function uniListItem() {
                return o.e("components/uni-list-item/uni-list-item").then(o.bind(null, "5212"));
            },
            uniLoadMore: function uniLoadMore() {
                return o.e("components/uni-load-more/uni-load-more").then(o.bind(null, "0c7d"));
            }
        }, a = function a() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    e194: function e194(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("f8c0"), a = o.n(n);
        for (var i in n) {
            "default" !== i && function(t) {
                o.d(e, t, function() {
                    return n[t];
                });
            }(i);
        }
        e["default"] = a.a;
    },
    efe5: function efe5(t, e, o) {
        "use strict";
        var n = o("b004"), a = o.n(n);
        a.a;
    },
    f8c0: function f8c0(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("2afc"), a = o("88b3"), i = function i() {
                o.e("pages/common/search").then(function() {
                    return resolve(o("77cb"));
                }.bind(null, o)).catch(o.oe);
            }, s = function s() {
                Promise.all([ o.e("common/vendor"), o.e("pages/common/house") ]).then(function() {
                    return resolve(o("9fd6"));
                }.bind(null, o)).catch(o.oe);
            }, r = {
                components: {
                    house: s,
                    search: i
                },
                data: function data() {
                    return {
                        placeholderList: [ "" ],
                        info: [],
                        mode: "round",
                        current: 0,
                        dotsStyles: {
                            backgroundColor: "rgba(255,255,255,0.4)",
                            selectedBackgroundColor: "#FFF",
                            border: "none",
                            selectedBorder: "none"
                        },
                        loading: !1,
                        collection: "opendb-mall-goods",
                        field: "goods_thumb,name,goods_tip,tag,goods_price,comment_count,month_sell_count,shop_name",
                        formData: {
                            status: "loading"
                        },
                        tipShow: !1,
                        data: [],
                        getFloorLevelName: a.getFloorLevelName,
                        getSaleStatus: a.getSaleStatus,
                        background: [ "color1", "color2", "color3" ],
                        indicatorDots: !0,
                        autoplay: !0,
                        interval: 2e3,
                        duration: 500,
                        listType: "",
                        isBottom: !1,
                        params: {
                            keyword: "",
                            page: 1,
                            pagesize: 10
                        },
                        houseData: []
                    };
                },
                onLoad: function onLoad(e) {
                    var o = e.type;
                    this.listType = o, console.log(o), this.listType = o;
                    var n = {
                        3: {
                            title: "即将预售",
                            placeholderType: "11"
                        },
                        31: {
                            title: "正在公示",
                            placeholderType: "13"
                        },
                        32: {
                            title: "正在登记",
                            placeholderType: "14"
                        }
                    };
                    t.setNavigationBarTitle({
                        title: n[o].title
                    }), this.queryHouseData(), this.queryBannerList(), this.querySearchCarousel(n[o].placeholderType);
                },
                onReachBottom: function onReachBottom() {
                    this.isBottom || (this.params.page++, this.queryHouseData());
                },
                methods: {
                    confirm: function confirm(t) {
                        this.params.keyword = t.value, this.houseData = [], this.isBottom = !1, this.params.page = 1, 
                        this.queryHouseData();
                    },
                    querySearchCarousel: function querySearchCarousel(t) {
                        var e = this;
                        this.$request("search/carousel/list/".concat(t), {}, "GET").then(function(t) {
                            e.placeholderList = t.data;
                        });
                    },
                    queryBannerList: function queryBannerList() {
                        var t = this, e = {
                            31: "4",
                            32: "5"
                        }, o = e[this.listType];
                        this.$request("carousel/list/".concat(o)).then(function(e) {
                            t.info = e.data;
                        });
                    },
                    queryHouseData: function queryHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list/".concat(this.listType), this.params, "POST").then(function(e) {
                            e.data.length < t.params.pagesize && (t.isBottom = !0), t.houseData = t.houseData.concat(e.data);
                        });
                    },
                    change: function change(t) {
                        var e = t.detail;
                        this.current = e.current;
                    },
                    previewImage: function previewImage(e) {
                        this.$request("ad/click/".concat(e.adConfigId), {}, "GET").then(function(o) {
                            t.navigateTo({
                                url: "/home/pages/houseDis?pfsId=" + e.linkId
                            });
                        });
                    },
                    changeIndicatorDots: function changeIndicatorDots(t) {
                        this.indicatorDots = !this.indicatorDots;
                    },
                    changeAutoplay: function changeAutoplay(t) {
                        this.autoplay = !this.autoplay;
                    },
                    intervalChange: function intervalChange(t) {
                        this.interval = t.target.value;
                    },
                    durationChange: function durationChange(t) {
                        this.duration = t.target.value;
                    },
                    onPullDownRefresh: function onPullDownRefresh() {
                        var e = this;
                        this.tipShow = !0, this.formData.status = "more", t.request({
                            url: "".concat(n.APIHOST, "propertiesForSale/host/list"),
                            data: {
                                text: "uni.request"
                            },
                            header: {
                                "custom-header": "hello"
                            },
                            success: function success(t) {
                                console.log(t.data), e.text = "request success";
                            }
                        }), this.$refs.udb.loadData({
                            clear: !0
                        }, function() {
                            e.tipShow = !1, t.stopPullDownRefresh();
                        });
                    },
                    load: function load() {
                        var e = this;
                        t.request({
                            url: "".concat(n.APIHOST, "propertiesForSale/host/list"),
                            data: {
                                text: "uni.request"
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/json",
                                "custom-header": "hello"
                            },
                            success: function success(t) {
                                console.log(t.data), e.data = t.data.data, e.text = "request success";
                            }
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, o("543d")["default"]);
    }
}, [ [ "4a6e", "common/runtime", "common/vendor" ] ] ]);