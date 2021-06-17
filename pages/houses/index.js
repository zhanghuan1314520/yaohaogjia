(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/houses/index" ], {
    "16cb": function cb(t, e, i) {},
    1931: function _(t, e, i) {
        "use strict";
        var s;
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {
            return s;
        });
        var n = function n() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    "7a45": function a45(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("da5d"), n = i("8d7d");
        for (var o in n) {
            "default" !== o && function(t) {
                i.d(e, t, function() {
                    return n[t];
                });
            }(o);
        }
        i("fbe6");
        var a, r = i("f0c5"), c = Object(r["a"])(n["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], a);
        e["default"] = c.exports;
    },
    "8d7d": function d7d(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("de98"), n = i.n(s);
        for (var o in s) {
            "default" !== o && function(t) {
                i.d(e, t, function() {
                    return s[t];
                });
            }(o);
        }
        e["default"] = n.a;
    },
    a13d: function a13d(t, e, i) {
        "use strict";
        (function(t) {
            i("6d7c");
            s(i("66fd"));
            var e = s(i("7a45"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, i("543d")["createPage"]);
    },
    a316: function a316(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("1931"), n = i("cd94");
        for (var o in n) {
            "default" !== o && function(t) {
                i.d(e, t, function() {
                    return n[t];
                });
            }(o);
        }
        i("e80a");
        var a, r = i("f0c5"), c = Object(r["a"])(n["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], a);
        e["default"] = c.exports;
    },
    cd94: function cd94(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("d923"), n = i.n(s);
        for (var o in s) {
            "default" !== o && function(t) {
                i.d(e, t, function() {
                    return s[t];
                });
            }(o);
        }
        e["default"] = n.a;
    },
    d923: function d923(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "area",
                components: {},
                props: {
                    topDistance: {
                        type: Number,
                        default: 0
                    }
                },
                data: function data() {
                    return {
                        h: [ 0, 0, 0, 0 ],
                        show: !1,
                        priceShow: !1,
                        sizeShow: !1,
                        devShow: !1,
                        titleData: [ "区域", "价格", "面积", "开发商" ],
                        isdown: null,
                        active: 0,
                        p_active: 0,
                        actives: 0,
                        p_actives: 0,
                        activess: 0,
                        area: [],
                        region: [],
                        regionData: [],
                        ids: [],
                        unitPrice: [],
                        totalPrice: [],
                        regionPrice: [],
                        size: [ {
                            name: "50㎡以下",
                            id: 1,
                            checked: !1
                        }, {
                            name: "50㎡以下",
                            id: 2,
                            checked: !1
                        }, {
                            name: "50㎡以下",
                            id: 3,
                            checked: !1
                        }, {
                            name: "50㎡以下",
                            id: 4,
                            checked: !1
                        } ],
                        developer: [],
                        form: {
                            areaId: 0,
                            developerId: 0,
                            hourseAreaId: 0,
                            keyword: "",
                            matchId: 0,
                            tabName: "",
                            page: 1,
                            pagesize: 10,
                            priceRangeId: 0
                        }
                    };
                },
                onLoad: function onLoad() {},
                watch: {},
                created: function created() {
                    this.querySelectData();
                },
                computed: {
                    price: function price() {
                        var t = [ {
                            id: "1",
                            name: "单价",
                            children: this.unitPrice
                        } ];
                        return t;
                    }
                },
                methods: {
                    querySelectData: function querySelectData() {
                        var t = this;
                        this.$request("area/select/0", {}).then(function(e) {
                            t.area = e.data[0].children;
                        }), this.$request("/condition/select/2").then(function(e) {
                            t.unitPrice = e.data;
                        }), this.$request("/condition/select/1").then(function(e) {
                            t.totalPrice = e.data;
                        }), this.$request("/condition/select/3").then(function(e) {
                            t.size = e.data;
                        }), this.$request("/developer/options").then(function(e) {
                            t.developer = e.data;
                        });
                    },
                    handleReset: function handleReset(t) {
                        switch (t) {
                          case "area":
                            this.$set(this.h, 0, 0), this.form.areaId = "", this.active = 0, this.actives = 0, 
                            this.activess = 0, this.region = this.area[0].children, this.regionData = this.region[0].children || [];
                            break;

                          case "price":
                            this.$set(this.h, 1, 0), this.form.priceRangeId = "", this.p_active = 0, this.p_actives = 0, 
                            this.regionPrice = this.price[0].children;
                            break;

                          case "size":
                            this.$set(this.h, 2, 0), this.form.hourseAreaId = "";
                            break;

                          case "developer":
                            this.$set(this.h, 3, 0), this.form.developerId = "";
                            break;
                        }
                        this.isdown = null, this.show = !1, this.priceShow = !1, this.sizeShow = !1, this.devShow = !1, 
                        this.form.page = 1, this.$emit("confirmSelect", this.form);
                    },
                    handleConfirm: function handleConfirm(t) {
                        this.form.page = 1, this.isdown = null, this.show = !1, this.priceShow = !1, this.sizeShow = !1, 
                        this.devShow = !1, "area" === t && (this.form.areaId = this.area[this.active].children[this.actives].id), 
                        this.h = [ this.form.areaId, this.form.priceRangeId, this.form.hourseAreaId, this.form.developerId ], 
                        this.$emit("confirmSelect", this.form);
                    },
                    sizeSeleted: function sizeSeleted(t) {
                        this.form.hourseAreaId = t;
                    },
                    devSeleted: function devSeleted(t) {
                        this.form.developerId = t;
                    },
                    priceSelect: function priceSelect(t, e) {
                        this.p_active = t, this.regionPrice = this.price[t].children;
                    },
                    priceRegionSelect: function priceRegionSelect(t, e) {
                        this.p_actives = e, this.form.priceRangeId = t.id;
                    },
                    selet: function selet(e, i, s) {
                        this.isdown = null;
                        t.pageScrollTo({
                            scrollTop: e.target.offsetTop - this.topDistance - 10,
                            duration: 500
                        }), 0 == s ? (this.priceShow = !1, this.sizeShow = !1, this.devShow = !1, this.show = !this.show, 
                        this.show && (this.isdown = s), this.region = this.area[0].children, this.regionData = this.region[0].children || []) : 1 == s ? (this.show = !1, 
                        this.sizeShow = !1, this.devShow = !1, this.priceShow = !this.priceShow, this.priceShow && (this.isdown = s), 
                        this.regionPrice = this.price[0].children || []) : 2 == s ? (this.show = !1, this.priceShow = !1, 
                        this.devShow = !1, this.sizeShow = !this.sizeShow, this.sizeShow && (this.isdown = s)) : 3 == s && (this.show = !1, 
                        this.priceShow = !1, this.sizeShow = !1, this.devShow = !this.devShow, this.devShow && (this.isdown = s));
                    },
                    typeSelect: function typeSelect(t, e) {
                        e.id;
                        this.active = t, this.region = this.area.find(function(t) {
                            return t.id === e.id;
                        }).children, this.regionData = this.region.length && this.region[0].children || [];
                    },
                    regionSelect: function regionSelect(t, e) {
                        this.actives = t, this.regionData = this.region.find(function(t) {
                            return t.id == e;
                        }).children;
                    },
                    rSelect: function rSelect(t, e) {
                        this.activess = t;
                    },
                    init: function init() {
                        this.active = 0, this.actives = 0, this.activess = 0;
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d")["default"]);
    },
    da5d: function da5d(t, e, i) {
        "use strict";
        var s;
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {
            return s;
        });
        var n = function n() {
            var t = this, e = t.$createElement, i = (t._self._c, t.__map(t.list, function(e, i) {
                var s = t.__get_orig(e), n = e.addr.split("区"), o = t._f("price")(e.minPrice);
                return {
                    $orig: s,
                    g0: n,
                    f0: o
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: i
                }
            });
        }, o = [];
    },
    de98: function de98(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = n(i("a316"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var o = function o() {
                Promise.all([ i.e("common/vendor"), i.e("pages/common/house") ]).then(function() {
                    return resolve(i("9fd6"));
                }.bind(null, i)).catch(i.oe);
            }, a = function a() {
                i.e("pages/common/search").then(function() {
                    return resolve(i("77cb"));
                }.bind(null, i)).catch(i.oe);
            }, r = {
                components: {
                    areaSelect: s.default,
                    house: o,
                    search: a
                },
                data: function data() {
                    return {
                        topDistance: 0,
                        loupan: [ "现房销售", "新盘首开", "闭眼摇" ],
                        floorIndex: 0,
                        tagIndex: 0,
                        houseData: [],
                        tagList: [],
                        noData: "",
                        params: {
                            areaId: 0,
                            developerId: 0,
                            hourseAreaId: 0,
                            keyword: "",
                            matchId: 0,
                            tabName: "",
                            page: 1,
                            pagesize: 10,
                            priceRangeId: 0
                        },
                        existingHouseList: [],
                        newSaleHouseList: [],
                        closeEyeHouseList: [],
                        isBootom: !1,
                        placeholderList: [ "" ]
                    };
                },
                computed: {
                    list: function list() {
                        return 0 === this.floorIndex ? this.existingHouseList : 1 === this.floorIndex ? this.newSaleHouseList : 2 === this.floorIndex ? this.closeEyeHouseList : void 0;
                    },
                    showHouseData: function showHouseData() {
                        return this.houseData;
                    }
                },
                onShareAppMessage: function onShareAppMessage() {
                    var e = getCurrentPages().pop().route, i = t.getStorageSync("chatId");
                    return "button" === res.from && console.log(res.target), {
                        title: "楼盘",
                        path: "/".concat(e, "?chatId=").concat(i)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var i = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "楼盘",
                        query: "chatId=".concat(i)
                    };
                },
                onNavigationBarButtonTap: function onNavigationBarButtonTap(t) {},
                onLoad: function onLoad(t) {
                    this.handleShare(t), this.queryExistingHouseData(), this.queryNewSaleHouseData(), 
                    this.queryCloseEyeHouseData(), this.queryTagsList(), this.queryHouseList();
                },
                onReachBottom: function onReachBottom() {
                    this.isBootom || (this.noData = "", this.params.page++, this.queryHouseList());
                },
                onReady: function onReady() {},
                onShow: function onShow() {},
                onHide: function onHide() {},
                watch: {},
                created: function created() {
                    var t = this;
                    this.$request("search/carousel/list/16", {}, "GET").then(function(e) {
                        t.placeholderList = e.data;
                    });
                },
                mounted: function mounted() {
                    var e = this, i = t.createSelectorQuery().in(this).select(".nav");
                    i.boundingClientRect(function(t) {
                        console.log("data", t), e.topDistance = t.height;
                    }).exec(function(t) {});
                },
                filters: {
                    price: function price(t) {
                        return t ? (t = Number(t).toLocaleString(), "¥" + t) : "价格待定";
                    }
                },
                methods: {
                    queryExistingHouseData: function queryExistingHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list/7", {}, "POST").then(function(e) {
                            t.existingHouseList = e.data;
                        });
                    },
                    queryNewSaleHouseData: function queryNewSaleHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list/8", {}, "POST").then(function(e) {
                            t.newSaleHouseList = e.data;
                        });
                    },
                    queryCloseEyeHouseData: function queryCloseEyeHouseData() {
                        var t = this;
                        this.$request("propertiesForSale/list/9", {}, "POST").then(function(e) {
                            t.closeEyeHouseList = e.data;
                        });
                    },
                    queryTagsList: function queryTagsList() {
                        var t = this;
                        this.$request("pfs/tabs/list/0", {}, "POST").then(function(e) {
                            t.tagList = [ {
                                name: "全部",
                                id: 101
                            } ].concat(e.data);
                        });
                    },
                    queryHouseList: function queryHouseList() {
                        var t = this;
                        console.log("queryHouseList"), this.$request("propertiesForSale/list", this.params, "POST").then(function(e) {
                            e.data.length < t.params.pagesize && (t.isBootom = !0, t.noData = "没有更多信息..."), 
                            t.houseData = t.houseData.concat(e.data);
                        });
                    },
                    confirmSelect: function confirmSelect(t) {
                        this.params = t, this.isBootom = !1, this.houseData = [], this.queryHouseList();
                    },
                    tagSelect: function tagSelect(t) {
                        this.tagIndex = t, this.params.tabName = this.tagList[this.tagIndex].name, "全部" == this.params.tabName && (this.params.tabName = ""), 
                        this.isBootom = !1, this.params.page = 1, this.houseData = [], this.queryHouseList();
                    },
                    floorSelect: function floorSelect(t) {
                        this.floorIndex = t;
                    },
                    skip: function skip(e) {
                        t.navigateTo({
                            url: "/home/pages/houseDis?pfsId=" + e.pfsId
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, i("543d")["default"]);
    },
    e273: function e273(t, e, i) {},
    e80a: function e80a(t, e, i) {
        "use strict";
        var s = i("e273"), n = i.n(s);
        n.a;
    },
    fbe6: function fbe6(t, e, i) {
        "use strict";
        var s = i("16cb"), n = i.n(s);
        n.a;
    }
}, [ [ "a13d", "common/runtime", "common/vendor" ] ] ]);