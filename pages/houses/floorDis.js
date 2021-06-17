(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/houses/floorDis" ], {
    "0962": function _(t, e, o) {},
    "4f15": function f15(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("ed95"), a = o.n(n);
        for (var i in n) {
            "default" !== i && function(t) {
                o.d(e, t, function() {
                    return n[t];
                });
            }(i);
        }
        e["default"] = a.a;
    },
    8706: function _(t, e, o) {
        "use strict";
        (function(t) {
            o("6d7c");
            n(o("66fd"));
            var e = n(o("bddb"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, o("543d")["createPage"]);
    },
    bddb: function bddb(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("f460"), a = o("4f15");
        for (var i in a) {
            "default" !== i && function(t) {
                o.d(e, t, function() {
                    return a[t];
                });
            }(i);
        }
        o("ef51");
        var r, c = o("f0c5"), s = Object(c["a"])(a["default"], n["b"], n["c"], !1, null, "758fc162", null, !1, n["a"], r);
        e["default"] = s.exports;
    },
    ed95: function ed95(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("88b3"), a = {
                name: "floorDis",
                components: {},
                props: {},
                data: function data() {
                    return {
                        formatDate: n.formatDate,
                        formatText: n.formatText,
                        url: "",
                        data: {
                            src: "https://cdn.lottery.okgoes.com/fps/2021/3/e0322e12bf2d428aa2c1c027d18d9ddc.png"
                        },
                        sigleData: [],
                        buildingInfo: {},
                        isFocus: !1,
                        pfsId: ""
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var o = getCurrentPages().pop().route, n = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "楼盘详情",
                        path: "/".concat(o, "?pfsId=").concat(this.pfsId, "&chatId=").concat(n)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var o = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "楼盘详情",
                        query: "pfsId=".concat(this.pfsId, "&chatId=").concat(o)
                    };
                },
                onLoad: function onLoad(t) {
                    this.pfsId = t.pfsId, this.queryDetailData(), this.handleShare(t), this.url = "".concat(this.apiServer, "page/publicity/scheme/").concat(t.pfsId, "/type/1");
                },
                watch: {},
                created: function created() {},
                methods: {
                    queryDetailData: function queryDetailData() {
                        var t = this;
                        this.$request("propertiesForSale/".concat(this.pfsId)).then(function(e) {
                            var o = e.data;
                            console.log(o.projectDesc, o.greeningRate, "data"), o.greeningRate > 0 && (o.greeningRate = o.greeningRate + "%"), 
                            null !== o.deliveryTime && (o.deliveryTime = t.formatTime(o.deliveryTime, "YYYY年MM月")), 
                            t.buildingInfo = o, t.sigleData = [ {
                                name: "开发商",
                                title: "[object Array]" === Object.prototype.toString.call(o.developer) ? o.developer.toString() : ""
                            }, {
                                name: "容积率",
                                title: o.plotRatio
                            }, {
                                name: "总户数",
                                title: o.householdsNum
                            }, {
                                name: "绿化率",
                                title: o.greeningRate
                            }, {
                                name: "楼层状况",
                                title: o.floorCondition
                            }, {
                                name: "建筑面积",
                                title: o.buildingArea
                            }, {
                                name: "预计交房",
                                title: o.deliveryTime
                            }, {
                                name: "物业公司",
                                title: o.propertyCompany
                            }, {
                                name: "物业费用",
                                title: o.propertyFee
                            } ], t.isFocus = 1 === o.isFocusOn;
                        });
                    },
                    search: function search(t) {
                        console.log(t);
                    },
                    toFocus: function toFocus() {
                        var e = this;
                        this.$request("user/follow/pfs/".concat(this.buildingInfo.pfsId), {}, "PUT").then(function(o) {
                            1 === o.data ? (e.isFocus = !0, e.tofollow = "取消提醒", t.showToast({
                                icon: "none",
                                title: "关注成功"
                            })) : 2 === o.data && (e.isFocus = !1, e.tofollow = "开盘提醒", t.showToast({
                                icon: "none",
                                title: "取消关注"
                            }));
                        });
                    },
                    chooseRoom: (0, n.throttle)(function(e) {
                        var o = this, n = this.checkLogin("/home/pages/houseDis", 2);
                        n && this.$request("user/get/seller/better/" + this.buildingInfo.pfsId, {}, "POST").then(function(e) {
                            var n = JSON.parse(t.getStorageSync("userTimId"));
                            if (0 == e.code) {
                                var a = e.data;
                                if (console.log("data", a), null === e.data) return void t.navigateTo({
                                    url: "/pages/common/counselor?pfsId=".concat(o.pfsId)
                                });
                                if (n.chatId === e.data.chatId) return void t.navigateTo({
                                    url: "/pages/common/counselor?pfsId=".concat(o.pfsId)
                                });
                                o.$store.commit("createConversationActive", a.chatId), t.navigateTo({
                                    url: "../message/mychat?data=".concat(encodeURIComponent(JSON.stringify(a)))
                                });
                            } else "40011" == e.code ? t.navigateTo({
                                url: "../login/login"
                            }) : t.showToast({
                                icon: "none",
                                duration: 2500,
                                title: e.msg
                            });
                        });
                    }, 2e3)
                }
            };
            e.default = a;
        }).call(this, o("543d")["default"]);
    },
    ef51: function ef51(t, e, o) {
        "use strict";
        var n = o("0962"), a = o.n(n);
        a.a;
    },
    f460: function f460(t, e, o) {
        "use strict";
        var n;
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return i;
        }), o.d(e, "a", function() {
            return n;
        });
        var a = function a() {
            var t = this, e = t.$createElement, o = (t._self._c, null !== t.buildingInfo.projectDesc && "" !== t.buildingInfo.projectDesc ? t.formatText(t.buildingInfo.projectDesc) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: o
                }
            });
        }, i = [];
    }
}, [ [ "8706", "common/runtime", "common/vendor" ] ] ]);