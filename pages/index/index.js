(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/index" ], {
    "4f5b": function f5b(t, e, o) {
        "use strict";
        var n = o("8ad2"), i = o.n(n);
        i.a;
    },
    "5ccf": function ccf(t, e, o) {
        "use strict";
        (function(t) {
            o("6d7c");
            n(o("66fd"));
            var e = n(o("846c"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, o("543d")["createPage"]);
    },
    "846c": function c(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("cbb3"), i = o("ebfd");
        for (var r in i) {
            "default" !== r && function(t) {
                o.d(e, t, function() {
                    return i[t];
                });
            }(r);
        }
        o("4f5b");
        var s, a = o("f0c5"), c = Object(a["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
        e["default"] = c.exports;
    },
    "8ad2": function ad2(t, e, o) {},
    "953b": function b(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = s(o("a34a")), i = o("2f62"), r = o("88b3");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t) {
                return d(t) || l(t) || u(t) || c();
            }
            function c() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function u(t, e) {
                if (t) {
                    if ("string" === typeof t) return g(t, e);
                    var o = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? g(t, e) : void 0;
                }
            }
            function l(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }
            function d(t) {
                if (Array.isArray(t)) return g(t);
            }
            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var o = 0, n = new Array(e); o < e; o++) {
                    n[o] = t[o];
                }
                return n;
            }
            function f(t, e, o, n, i, r, s) {
                try {
                    var a = t[r](s), c = a.value;
                } catch (u) {
                    return void o(u);
                }
                a.done ? e(c) : Promise.resolve(c).then(n, i);
            }
            function h(t) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(n, i) {
                        var r = t.apply(e, o);
                        function s(t) {
                            f(r, n, i, s, a, "next", t);
                        }
                        function a(t) {
                            f(r, n, i, s, a, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            function p(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(o), !0).forEach(function(e) {
                        y(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }
            function y(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            var v, L = function L() {
                o.e("components/axb-checkbox/axb-checkbox").then(function() {
                    return resolve(o("f31d"));
                }.bind(null, o)).catch(o.oe);
            }, S = function S() {
                Promise.all([ o.e("common/vendor"), o.e("pages/common/house") ]).then(function() {
                    return resolve(o("9fd6"));
                }.bind(null, o)).catch(o.oe);
            }, b = function b() {
                o.e("pages/common/search").then(function() {
                    return resolve(o("77cb"));
                }.bind(null, o)).catch(o.oe);
            }, I = function I() {
                o.e("pages/index/broadcast").then(function() {
                    return resolve(o("070e"));
                }.bind(null, o)).catch(o.oe);
            }, T = {
                fillColor: "#F2F6B2",
                strokeColor: "#FFD700",
                strokeWidth: 2,
                zIndex: 1
            }, B = {
                components: {
                    axbCheckBox: L,
                    house: S,
                    search: b,
                    broadcast: I
                },
                data: function data() {
                    return {
                        scrolling: !1,
                        show_openAd: !1,
                        adBigConfig: {},
                        placeholderList: [ "" ],
                        positionList: [ {
                            name: "热门楼盘",
                            src: "https://cdn.lottery.okgoes.com/lottery13.png",
                            size: "",
                            url: "/home/pages/map?type=24",
                            type: 24
                        }, {
                            name: "即将预售",
                            src: "https://cdn.lottery.okgoes.com/lottery3.png",
                            size: "",
                            url: "/home/pages/map?type=3",
                            type: 3
                        }, {
                            name: "正在公示",
                            src: "https://cdn.lottery.okgoes.com/lottery4.png",
                            size: "",
                            url: "/pages/hotList/hotList?type=31",
                            type: 31
                        }, {
                            name: "正在登记",
                            src: "https://cdn.lottery.okgoes.com/lottery5.png",
                            size: "",
                            url: "/pages/hotList/hotList?type=32",
                            type: 32
                        }, {
                            name: "摇号查询",
                            src: "https://cdn.lottery.okgoes.com/lottery6.png",
                            size: "",
                            url: "./lotterySearch",
                            type: 33
                        } ],
                        headerCarousel: [],
                        broadcastList: [],
                        registeringList: [],
                        background: [ "color1", "color2", "color3" ],
                        indicatorDots: !0,
                        autoplay: !0,
                        interval: 2e3,
                        duration: 500,
                        items: [ "12.21", "12.2", "12.3", "12.60", "12.11", "12.60", "12.11" ],
                        lotteryTimeSignList: [],
                        goodSellerList: [],
                        lotteryCommentList: [],
                        schoolBuildingList: [],
                        sunshineCommentList: [],
                        betterBulidingList: [],
                        recommendBuildingList: [],
                        focusBuildingList: [],
                        schoolList: [ "天空之城", "御滨府", "悦东方", "天空之城" ],
                        sunList: [ "天空之城", "御滨府", "悦东方", "天空之城" ],
                        currentIndex: 0,
                        adList: [ {
                            id: 6,
                            img: "https://cdn.lottery.okgoes.com/logo.png",
                            title: "广告位语"
                        }, {
                            id: 7,
                            img: "https://cdn.lottery.okgoes.com/logo.png",
                            title: "广告位语"
                        }, {
                            id: 8,
                            img: "https://cdn.lottery.okgoes.com/logo.png",
                            title: "广告位语"
                        }, {
                            id: 7,
                            img: "https://cdn.lottery.okgoes.com/logo.png",
                            title: "广告位语"
                        }, {
                            id: 8,
                            img: "https://cdn.lottery.okgoes.com/logo.png",
                            title: "广告位语"
                        } ],
                        List: [ {
                            id: 1,
                            img: "https://cdn.lottery.okgoes.com/index/icon1.png",
                            title: "每日二手",
                            url: "/myPackageA/pages/daySecond"
                        }, {
                            id: 2,
                            img: "https://cdn.lottery.okgoes.com/index/icon2.png",
                            title: "高端人才",
                            url: "./talents"
                        }, {
                            id: 3,
                            img: "https://cdn.lottery.okgoes.com/index/icon3.png",
                            title: "学区分析",
                            url: "./schoolDistrict"
                        }, {
                            id: 4,
                            img: "https://cdn.lottery.okgoes.com/icon7.png",
                            title: "摇号点评",
                            url: "./remark"
                        }, {
                            id: 5,
                            img: "https://cdn.lottery.okgoes.com/icon8.png",
                            title: "线下讲座",
                            url: "./activityList",
                            auth: !0
                        } ],
                        schoolIndex: 0,
                        sunIndex: 0,
                        sartTime: [ {
                            name: "99",
                            value: "3day",
                            checked: 0
                        }, {
                            name: "33",
                            value: "1week",
                            checked: 0
                        }, {
                            name: "#66",
                            value: "1month",
                            checked: 0
                        }, {
                            name: "777",
                            value: "6month",
                            checked: 0
                        } ],
                        formatDate: r.formatDate,
                        getMonth: r.getMonth,
                        getFloorLevelName: r.getFloorLevelName,
                        getSaleStatus: r.getSaleStatus,
                        loupan: [ "优质楼盘", "刚需推荐", "关注楼盘" ],
                        floorIndex: 0,
                        title: "map",
                        longitude: "120.119137",
                        latitude: "30.330416",
                        markerList: [],
                        markers: [],
                        polygons: [ {
                            points: [ {
                                longitude: 100.789761,
                                latitude: 22.022137
                            }, {
                                longitude: 100.789833,
                                latitude: 22.022136
                            }, {
                                longitude: 100.790838,
                                latitude: 22.019582
                            }, {
                                longitude: 100.794509,
                                latitude: 22.020163
                            }, {
                                longitude: 100.792928,
                                latitude: 22.022182
                            }, {
                                longitude: 100.789761,
                                latitude: 22.022137
                            } ],
                            fillColor: "#55888888",
                            strokeColor: "#22FF00",
                            strokeWidth: 2,
                            zIndex: 1
                        } ],
                        houseData: [],
                        dotsStyles: {
                            backgroundColor: "rgba(255,255,255,0.4)",
                            selectedBackgroundColor: "#FFF",
                            border: "none",
                            selectedBorder: "none"
                        },
                        info: [],
                        current: 0,
                        mode: "round",
                        params: {
                            page: 1,
                            pagesize: 10
                        },
                        params_1: {
                            page: 1,
                            pagesize: 10
                        },
                        params_2: {
                            page: 1,
                            pagesize: 10
                        },
                        params_3: {
                            page: 1,
                            pagesize: 10
                        },
                        isBottom_1: !1,
                        isBottom_2: !1,
                        isBottom_3: !1,
                        timeLIst: []
                    };
                },
                computed: m(m({}, (0, i.mapState)({
                    isLogin: function isLogin(t) {
                        return t.isLogin;
                    },
                    isSDKReady: function isSDKReady(t) {
                        return t.isSDKReady;
                    },
                    conversationList: function conversationList(t) {
                        return t.conversationList;
                    },
                    isActivityNoticeShow: function isActivityNoticeShow(t) {
                        return t.isActivityNoticeShow;
                    }
                })), {}, {
                    showTip: function showTip() {
                        var t = "";
                        return 0 === this.floorIndex && this.isBottom_1 && (t = "没有更多信息..."), 1 === this.floorIndex && this.isBottom_2 && (t = "没有更多信息..."), 
                        2 === this.floorIndex && this.isBottom_3 && (t = "没有更多信息..."), t;
                    },
                    lotteryTimeList: function lotteryTimeList() {
                        return this.timeLIst.length && this.timeLIst[this.currentIndex].data;
                    },
                    showBuildingData: function showBuildingData() {
                        var t = [];
                        return t = 0 === this.floorIndex ? this.betterBulidingList : 1 === this.floorIndex ? this.recommendBuildingList : this.focusBuildingList, 
                        t;
                    }
                }),
                onLoad: function onLoad(e) {
                    var o = this;
                    e && this.handleShare(e), t.getLocation({
                        type: "gcj02",
                        success: function success(e) {
                            o.$request("https://apis.map.qq.com/ws/geocoder/v1?location=" + e.latitude + "," + e.longitude + "&key=KMUBZ-TI6LG-CKSQJ-IPYHU-6XNE3-RMFBN").then(function(e) {
                                t.setStorageSync("province", e.result.address_component.province);
                            });
                        },
                        fail: function fail(t) {
                            console.log("错误：" + JSON.stringify(t));
                        }
                    });
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var o = getCurrentPages().pop().route, n = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号大师",
                        path: "/".concat(o, "?chatId=").concat(n)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var o = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号大师",
                        query: "chatId=".concat(o)
                    };
                },
                onReachBottom: function onReachBottom() {
                    if (0 === this.floorIndex) {
                        if (this.isBottom_1) return;
                        this.params_1.page++, this.queryBetterBuildingList();
                    } else if (1 === this.floorIndex) {
                        if (this.isBottom_2) return;
                        this.params_2.page++, this.queryRecommendBuildingData();
                    } else {
                        if (this.isBottom_2) return;
                        this.params_2.page++, this.queryFocusBuilding();
                    }
                },
                onNavigationBarButtonTap: function onNavigationBarButtonTap() {
                    console.log("地图");
                },
                onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(t) {
                    console.log("你输入了信息", t);
                },
                watch: {
                    isLogin: function isLogin(t) {
                        t && this.queryIndexDataForDot();
                    },
                    isSDKReady: function isSDKReady(t) {
                        t && (this.updateUserInfo(), this.getConversationList());
                    }
                },
                created: function created() {},
                mounted: function mounted() {
                    this.queryIndexData(), this.queryBetterBuildingList(), this.queryRecommendBuildingData(), 
                    this.querySearchCarousel(), this.queryData();
                },
                onPageScroll: function onPageScroll() {
                    var t = this;
                    clearTimeout(v), this.scrolling = !0, v = setTimeout(function() {
                        t.scrolling = !1;
                    }, 500);
                },
                methods: {
                    toMap: function toMap() {
                        t.navigateTo({
                            url: "/home/pages/map-index"
                        });
                    },
                    updateUserInfo: function updateUserInfo() {
                        var e = JSON.parse(t.getStorageSync("userInfo")), o = this.tim.updateMyProfile({
                            nick: e.user,
                            avatar: e.img || t.getStorageSync("user_avt"),
                            gender: this.$TIM.TYPES.GENDER_MALE,
                            selfSignature: "暂无个性签名",
                            allowType: this.$TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
                        });
                        o.then(function(t) {
                            console.log("提交资料成功");
                        }).catch(function(t) {
                            console.warn("updateMyProfile error:", t);
                        });
                    },
                    getConversationList: function getConversationList() {
                        var t = this;
                        console.log("拉取会话列表");
                        var e = this.tim.getConversationList();
                        e.then(function(e) {
                            var o = e.data.conversationList;
                            console.log("conversationList", o), o.length && t.$store.commit("updateConversationList", o);
                        }).catch(function(t) {
                            console.warn("getConversationList error:", t);
                        });
                    },
                    navTo: function navTo(e) {
                        t.navigateTo({
                            url: "/pages/houses/publicPlan?pfsId=".concat(e.pfsId, "&type=2")
                        });
                    },
                    queryData: function queryData() {
                        var t = this;
                        return h(n.default.mark(function e() {
                            var o, i, s, a, c;
                            return n.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$request("lottery/time/list", {
                                            page: 1,
                                            pagesize: 100
                                        }, "POST");

                                      case 2:
                                        for (o = e.sent, i = o.data.reduce(function(t, e) {
                                            return t.concat(e.data);
                                        }, []).reduce(function(t, e) {
                                            return t.find(function(t) {
                                                return t.pfsId === e.pfsId;
                                            }) || t.push(e), t;
                                        }, []), s = new Date().getTime(), a = [], c = 0; c < 15; c++) {
                                            a.push({
                                                lotteryTime: s + 864e5 * c
                                            });
                                        }
                                        t.timeLIst = a.map(function(t) {
                                            return m(m({}, t), {}, {
                                                data: i.filter(function(e) {
                                                    return e.registerTimeStart <= t.lotteryTime && e.registerTimeEnd >= t.lotteryTime;
                                                })
                                            });
                                        }).filter(function(t) {
                                            return t.data.length > 0;
                                        }), console.log(t.timeLIst, "==> timeLIst"), t.lotteryTimeSignList = t.timeLIst.map(function(t) {
                                            return {
                                                timeSign: (0, r.formatDate)(t.lotteryTime).slice(-5).replace(/\-/g, ".")
                                            };
                                        }).slice(0, 7);

                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e);
                        }))();
                    },
                    queryPositionListSize: function queryPositionListSize() {
                        var t = this, e = {
                            keyword: "",
                            page: 1,
                            pagesize: 10
                        };
                        Promise.all([ this.$request("propertiesForSale/list/24", e, "POST"), this.$request("propertiesForSale/list/3", e, "POST"), this.$request("propertiesForSale/list/31", e, "POST"), this.$request("propertiesForSale/list/32", e, "POST"), this.$request("propertiesForSale/list/33", e, "POST") ]).then(function(e) {
                            t.positionList.map(function(t, o) {
                                t.size = e[o].total;
                            });
                        });
                    },
                    querySearchCarousel: function querySearchCarousel() {
                        var t = this;
                        this.$request("search/carousel/list/10", {}, "GET").then(function(e) {
                            t.placeholderList = e.data;
                        });
                    },
                    consult: (0, r.throttle)(function(e) {
                        var o = this;
                        t.getStorageSync("user_avt") || this.wxGetUserInfo(), t.showLoading({
                            title: "加载中..."
                        });
                        var n = JSON.parse(t.getStorageSync("userTimId"));
                        this.$request("tim/user/info/" + e.sellerId, {}).then(function(e) {
                            if (t.hideLoading(), 0 == e.code) {
                                var i = e.data, r = i.chatId;
                                if (n.chatId === r) return void t.showToast({
                                    icon: "none",
                                    duration: 2500,
                                    title: "无法与自己聊天"
                                });
                                if (o.conversationList.length > 0) {
                                    var s = null;
                                    o.conversationList.forEach(function(t) {
                                        t.toAccount === r && (s = t);
                                    }), s ? (o.$store.commit("updateConversationActive", s), o.$request("/tim/user/info/bychatId/".concat(r)).then(function(e) {
                                        t.navigateTo({
                                            url: "../message/mychat?data=".concat(encodeURIComponent(JSON.stringify(e.data)))
                                        });
                                    })) : (o.$store.commit("createConversationActive", r), t.navigateTo({
                                        url: "../message/mychat?data=".concat(encodeURIComponent(JSON.stringify(i)))
                                    }));
                                } else o.$store.commit("createConversationActive", r), t.navigateTo({
                                    url: "../message/mychat?data=".concat(encodeURIComponent(JSON.stringify(i)))
                                });
                            } else "40011" == e.code && t.navigateTo({
                                url: "../login/login"
                            });
                        });
                    }, 2e3),
                    routeTo: function routeTo(e) {
                        !e.auth || this.isLogin ? e.url ? t.navigateTo({
                            url: e.url
                        }) : t.navigateTo({
                            url: "/home/pages/houseDis?pfsId=".concat(e.linkId)
                        }) : this.wxGetUserInfo();
                    },
                    counselor: function counselor(e) {
                        t.navigateTo({
                            url: "./mychat"
                        });
                    },
                    previewImage: function previewImage(e) {
                        this.$request("ad/click/".concat(e.adConfigId), {}, "GET").then(function(o) {
                            t.navigateTo({
                                url: "/home/pages/houseDis?pfsId=" + e.linkId
                            });
                        });
                    },
                    queryIndexDataForDot: function queryIndexDataForDot() {
                        var t = this;
                        this.$request("index/data", {}, "GET").then(function(e) {
                            if (0 == e.code) {
                                var o = e.data;
                                t.$store.commit("setIsActivityNoticeShow", !o.activityListIsVisit);
                            }
                        });
                    },
                    queryIndexData: function queryIndexData() {
                        var t = this;
                        this.$request("index/data", {}, "GET").then(function(e) {
                            if (0 == e.code) {
                                var o, n = e.data;
                                n.adBigConfig && (t.adBigConfig = n.adBigConfig, t.show_openAd = !0), t.positionList.forEach(function(t) {
                                    n.pfsIndexCount.forEach(function(e) {
                                        t.type === e.type && (t.size = e.count);
                                    });
                                }), t.headerCarousel = n.carouselListResult, t.headerCarousel.forEach(function(t) {
                                    return t.picture = "url(" + t.picture + "?x-oss-process=style/123)", t;
                                }), t.adList = n.adConfigList.slice(0, 5), t.adList.forEach(function(t, e) {
                                    t.img = t.icon, t.id = 5 + e;
                                }), (o = t.List).push.apply(o, a(t.adList)), t.$store.commit("setIsActivityNoticeShow", !n.activityListIsVisit), 
                                t.registeringList = n.registeringList, t.goodSellerList = n.goodSellerList, t.lotteryCommentList = n.lotteryCommentList, 
                                t.schoolBuildingList = n.schoolBuildingList, t.schoolSelect(0), t.info = n.carouselListResult, 
                                t.broadcastList = n.lotteryBroadcastList;
                            }
                        });
                    },
                    queryBetterBuildingList: function queryBetterBuildingList() {
                        var t = this;
                        this.$request("propertiesForSale/list/22", this.params_1, "POST").then(function(e) {
                            e.data.length < t.params_1.pagesize && (t.isBottom_1 = !0), t.betterBulidingList = t.betterBulidingList.concat(e.data);
                        });
                    },
                    queryRecommendBuildingData: function queryRecommendBuildingData() {
                        var t = this;
                        this.$request("propertiesForSale/list/23", this.params_2, "POST").then(function(e) {
                            e.data.length < t.params_2.pagesize && (t.isBottom_2 = !0), t.recommendBuildingList = t.recommendBuildingList.concat(e.data);
                        });
                    },
                    queryFocusBuilding: function queryFocusBuilding() {
                        var t = this;
                        this.$request("user/focus/propertiesForSale/list", this.params_3, "POST").then(function(e) {
                            0 == e.code ? (e.data.length < t.params_3.pagesize && (t.isBottom_3 = !0), 1 == t.params_3.page && (t.focusBuildingList = []), 
                            t.focusBuildingList = t.focusBuildingList.concat(e.data)) : e.code;
                        });
                    },
                    showBroadcastDetail: function showBroadcastDetail(e) {
                        var o = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/, n = new RegExp(o);
                        n.test(e.linkUrl) ? t.navigateTo({
                            url: "/myPackageA/pages/newsInfo?newsId=".concat(e.linkId, "&getCustomers=true")
                        }) : t.showToast({
                            title: "非法链接",
                            duration: 2e3,
                            icon: "none"
                        });
                    },
                    change: function change(t) {
                        var e = t.detail;
                        this.current = e.current;
                    },
                    cons: function cons(t, e) {
                        for (var o = 0; o < e; o++) {
                            t = t.concat(t);
                        }
                        return t;
                    },
                    jump: function jump(e) {
                        t.navigateTo({
                            url: e,
                            success: function success(t) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        });
                    },
                    timeSelect: function timeSelect(t, e) {
                        e.time;
                        this.currentIndex = t;
                    },
                    schoolSelect: function schoolSelect(t) {
                        var e = this;
                        this.schoolIndex = t, this.longitude = this.schoolBuildingList[t].longitude || 120.119137, 
                        this.latitude = this.schoolBuildingList[t].latitude || 30.330416, this.schoolBuildingList[t].schoolDetailResult && this.schoolBuildingList[t].schoolDetailResult.map(function(t) {
                            try {
                                t.polygons = "string" === typeof t.polygons ? JSON.parse(t.polygons) : t.polygons;
                            } catch (e) {
                                t && (t.polygons = {
                                    paths: []
                                });
                            }
                        });
                        var o = [];
                        o = this.schoolBuildingList[t].schoolDetailResult, o.map(function(t) {
                            t && t.polygons && (t.polygons.paths.map(function(t) {
                                t.longitude = t.lng, t.latitude = t.lat;
                            }), t.polygons.markers = {
                                longitude: t.longitude,
                                latitude: t.latitude,
                                iconPath: "../../static/map-school.png"
                            }, Object.assign(t.polygons, t.polygons, T), t.polygons.points = t.polygons.paths);
                        });
                        try {
                            this.polygons = [], this.markers = [], o.map(function(t) {
                                return e.polygons.push(t.polygons);
                            }), o.map(function(t) {
                                return e.markers.push(t.polygons.markers);
                            });
                        } catch (n) {
                            this.polygons = [], this.markers = [], console.log(n);
                        }
                    },
                    SunSelect: function SunSelect(t) {
                        this.sunIndex = t;
                    },
                    radioChangeType: function radioChangeType(t) {},
                    floorSelect: function floorSelect(t) {
                        this.floorIndex = t, 2 === t && this.queryFocusBuilding();
                    },
                    toLottery: function toLottery(e) {
                        t.navigateTo({
                            url: "/pages/houses/floorRemark?pfsId=" + e
                        });
                    },
                    toLotteryTime: function toLotteryTime(e) {
                        t.navigateTo({
                            url: "/home/pages/houseDis?pfsId=" + e
                        });
                    },
                    remark: function remark() {
                        t.navigateTo({
                            url: "./remark",
                            success: function success(t) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        });
                    },
                    scroll: function scroll() {},
                    jump_houseDis: function jump_houseDis(e) {
                        var o = e.pfsId;
                        t.navigateTo({
                            url: "/home/pages/houseDis?pfsId=" + o
                        });
                    },
                    mapTap: function mapTap(t) {
                        console.log(JSON.stringify(t)), console.log("当前位置的经度：" + t.detail.longitude), console.log("当前位置的纬度：" + t.detail.latitude), 
                        this.markerList.push({
                            latitude: t.detail.latitude,
                            longitude: t.detail.longitude
                        }), this.markerList = JSON.parse(JSON.stringify(this.markerList));
                        var e = [ {
                            points: this.markerList,
                            fillColor: "#55888888",
                            strokeColor: "#22FF00",
                            strokeWidth: 2,
                            zIndex: 1
                        } ];
                        this.polygons = e;
                    },
                    moreBlock: function moreBlock(e) {
                        "lottery" == e ? t.navigateTo({
                            url: "./lotteryTime",
                            success: function success(t) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        }) : "counselor" == e ? t.navigateTo({
                            url: "../common/counselor",
                            success: function success(t) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        }) : "schoolDistrict" == e ? t.navigateTo({
                            url: "./schoolDistrict",
                            success: function success(t) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        }) : (console.log(e, "url"), t.navigateTo({
                            url: e,
                            success: function success(t) {},
                            fail: function fail() {},
                            complete: function complete() {}
                        }));
                    }
                }
            };
            e.default = B;
        }).call(this, o("543d")["default"]);
    },
    cbb3: function cbb3(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return i;
        }), o.d(e, "c", function() {
            return r;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            dragBall: function dragBall() {
                return o.e("components/drag-ball/drag-ball").then(o.bind(null, "b1e6"));
            },
            uniSwiperDot: function uniSwiperDot() {
                return o.e("components/uni-swiper-dot/uni-swiper-dot").then(o.bind(null, "80b0"));
            }
        }, i = function i() {
            var t = this, e = t.$createElement, o = (t._self._c, t.__map(t.registeringList, function(e, o) {
                var n = t.__get_orig(e), i = 1 != e.status || e.timeStart ? t.getSaleStatus(e.status) : null, r = 9 != e.status && 11 != e.status ? t.formatDate(e.timeStart).slice(-5).replace(/\-/g, ".") : null, s = 9 != e.status && 11 != e.status ? t.formatDate(e.timeEnd).slice(-5).replace(/\-/g, ".") : null, a = e.addr.slice(0, 3), c = null;
                return {
                    $orig: n,
                    m0: i,
                    g0: r,
                    g1: s,
                    g2: a,
                    l0: c
                };
            })), n = t.lotteryTimeSignList.length > 0 ? t.__map(t.lotteryTimeList, function(e, o) {
                var n = t.__get_orig(e), i = t.getSaleStatus(e.saleStatus), r = t.formatDate(e.registerTimeStart).slice(-5).replace(/\-/g, "."), s = t.formatDate(e.registerTimeEnd).slice(-5).replace(/\-/g, ".");
                return {
                    $orig: n,
                    m1: i,
                    g3: r,
                    g4: s
                };
            }) : null;
            t._isMounted || (t.e0 = function(e) {
                t.show_openAd = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    l1: o,
                    l2: n
                }
            });
        }, r = [];
    },
    ebfd: function ebfd(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("953b"), i = o.n(n);
        for (var r in n) {
            "default" !== r && function(t) {
                o.d(e, t, function() {
                    return n[t];
                });
            }(r);
        }
        e["default"] = i.a;
    }
}, [ [ "5ccf", "common/runtime", "common/vendor" ] ] ]);