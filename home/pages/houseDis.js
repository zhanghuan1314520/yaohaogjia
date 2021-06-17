(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "home/pages/houseDis" ], {
    "0e65": function e65(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("a343"), n = a.n(i);
        for (var o in i) {
            "default" !== o && function(t) {
                a.d(e, t, function() {
                    return i[t];
                });
            }(o);
        }
        e["default"] = n.a;
    },
    "824a": function a(t, e, _a) {
        "use strict";
        var i = _a("9aec"), n = _a.n(i);
        n.a;
    },
    "9aec": function aec(t, e, a) {},
    "9d0b": function d0b(t, e, a) {
        "use strict";
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return i;
        });
        var i = {
            dragBall: function dragBall() {
                return a.e("components/drag-ball/drag-ball").then(a.bind(null, "b1e6"));
            },
            uniSwiperDot: function uniSwiperDot() {
                return a.e("components/uni-swiper-dot/uni-swiper-dot").then(a.bind(null, "80b0"));
            }
        }, n = function n() {
            var t = this, e = t.$createElement, a = (t._self._c, t.showStatus(t.pageOriginData.saleStatus)), i = t.showTime(t.pageOriginData), n = a + i !== "" ? t.showStatus(t.pageOriginData.saleStatus) : null, o = a + i !== "" ? t.showTime(t.pageOriginData) : null, s = "" !== t.pageOriginData.commentsOnRealEstate && null !== t.pageOriginData.commentsOnRealEstate ? t.formatText(t.pageOriginData.commentsOnRealEstate) : null, r = (t.modelShow || null != t.pageOriginData.publicityScheme && "" !== t.pageOriginData.publicityScheme) && t.modelShow ? t.__map(t.time, function(e, a) {
                var i = t.__get_orig(e), n = t.getImg(a, a === t.begin);
                return {
                    $orig: i,
                    m5: n
                };
            }) : null, c = t.pageOriginData.schoolAnalysis && "" !== t.pageOriginData.schoolAnalysis.schoolDistrictAnalysis && null !== t.pageOriginData.schoolAnalysis.schoolDistrictAnalysis ? t.formatChangeText(t.pageOriginData.schoolAnalysis.schoolDistrictAnalysis) : null, l = t.formatText(t.maptype[t.maptype_activeIndex].content), u = t.newsList.length > 0 ? t.__map(t.newsList, function(e, a) {
                var i = t.__get_orig(e), n = t.formatDate(e.publishTime).replace(/\-/g, ".");
                return {
                    $orig: i,
                    g0: n
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: a,
                    m1: i,
                    m2: n,
                    m3: o,
                    m4: s,
                    l0: r,
                    m6: c,
                    m7: l,
                    l1: u
                }
            });
        }, o = [];
    },
    a343: function a343(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(a("a34a")), n = (a("2f62"), a("88b3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, a, i, n, o, s) {
                try {
                    var r = t[o](s), c = r.value;
                } catch (l) {
                    return void a(l);
                }
                r.done ? e(c) : Promise.resolve(c).then(i, n);
            }
            function r(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(i, n) {
                        var o = t.apply(e, a);
                        function r(t) {
                            s(o, i, n, r, c, "next", t);
                        }
                        function c(t) {
                            s(o, i, n, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var c, l = function l() {
                Promise.all([ a.e("common/vendor"), a.e("pages/common/house") ]).then(function() {
                    return resolve(a("9fd6"));
                }.bind(null, a)).catch(a.oe);
            }, u = function u() {
                a.e("pages/common/search").then(function() {
                    return resolve(a("77cb"));
                }.bind(null, a)).catch(a.oe);
            }, d = function d() {
                a.e("components/t-table/t-table").then(function() {
                    return resolve(a("d025"));
                }.bind(null, a)).catch(a.oe);
            }, m = function m() {
                a.e("components/t-table/t-th").then(function() {
                    return resolve(a("619c"));
                }.bind(null, a)).catch(a.oe);
            }, g = function g() {
                a.e("components/t-table/t-tr").then(function() {
                    return resolve(a("f282"));
                }.bind(null, a)).catch(a.oe);
            }, p = function p() {
                a.e("components/t-table/t-td").then(function() {
                    return resolve(a("237a"));
                }.bind(null, a)).catch(a.oe);
            }, h = {
                components: {
                    house: l,
                    search: u,
                    tTable: d,
                    tTh: m,
                    tTr: g,
                    tTd: p
                },
                data: function data() {
                    return {
                        autoplay: !1,
                        avatar: t.getStorageSync("user_avt"),
                        scrolling: !1,
                        isEnd: !1,
                        isFirst: !1,
                        startData: {
                            clientX: "",
                            clientY: ""
                        },
                        lotteryTimeStart: null,
                        num: 0,
                        top: getApp().globalData.navTop,
                        navHeight: getApp().globalData.navHeight,
                        statusBarHeight: getApp().globalData.statusBarHeight,
                        isTop: 0,
                        myScroll: "",
                        bottomText: "",
                        isHasSale: !1,
                        begin: -1,
                        latitude: 30.243646,
                        longitude: 120.18219,
                        polygons: [],
                        ptlatitude: 30.243646,
                        ptlongitude: 120.18219,
                        markers: [ [], [], [], [] ],
                        marker: [],
                        circles: [ {
                            latitude: 30.243646,
                            longitude: 120.18219,
                            color: "#d2d2d2",
                            fillColor: "#cccccc50",
                            radius: 1e3,
                            strokeWidth: 1
                        }, {
                            latitude: 30.243646,
                            longitude: 120.18219,
                            color: "#d2d2d2",
                            fillColor: "#cccccc50",
                            radius: 2e3,
                            strokeWidth: 1
                        } ],
                        hourseTypeList: [],
                        modelShow: !1,
                        samePriceRecommendList: [],
                        isFocus: !1,
                        formatDate: n.formatDate,
                        formatText: n.formatText,
                        formatChangeText: n.formatChangeText,
                        base64Encode: n.base64Encode,
                        covers: {},
                        pfsId: "",
                        pageOriginData: {
                            sellerList: [],
                            estimateOpenDetail: {}
                        },
                        sigleInfo: [],
                        estimateOpenDetail: {
                            estimateOpenTime: "预计开盘：",
                            saleFloor: "销售楼栋：",
                            openPrice: "开盘价格：",
                            frozenMoney: "冻资要求：",
                            decoration: "装修情况：",
                            hourseTypeArea: "户型面积：",
                            hourseNum: "房源套数："
                        },
                        swiperData: [],
                        dotsStyles: {
                            backgroundColor: "#BEC4CC",
                            selectedBackgroundColor: "#1F6EFF",
                            border: "1px #BEC4CC solid",
                            selectedBorder: "none"
                        },
                        current: 0,
                        mode: "round",
                        newsList: [],
                        tagIndex: 0,
                        postersData: null,
                        demandIndex: 0,
                        matingIndex: 0,
                        searchVal: "",
                        currentIndex: 0,
                        navTag: [ "开盘 | 2020.12.20", "未来科技城板块", "闭眼摇" ],
                        items: [ "效果图", "位置图", "总平图", "户型图", "样板间" ],
                        maptype: [ {
                            icon: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon1.png",
                            icon_active: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon1-active.png",
                            name: "商业",
                            color: "#FF9800"
                        }, {
                            icon: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon2.png",
                            icon_active: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon2-active.png",
                            name: "交通",
                            color: "#B95DFF"
                        }, {
                            icon: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon3.png",
                            icon_active: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon3-active.png",
                            name: "教育",
                            color: "#2B67FF"
                        }, {
                            icon: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon4.png",
                            icon_active: "https://cdn.lottery.okgoes.com/houseDetail_mapType_icon4-active.png",
                            name: "医疗",
                            color: "#29E8BF"
                        } ],
                        maptype_activeIndex: 0,
                        List: [ {
                            id: 1,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon1.png",
                            title: "摇号点评",
                            url: "/pages/houses/floorRemark"
                        }, {
                            id: 2,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon2.png",
                            title: "楼盘详情",
                            url: "/pages/houses/floorDis"
                        }, {
                            id: 7,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon3.png",
                            title: "下次推盘",
                            url: "/home/pages/pushThePlate"
                        }, {
                            id: 4,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon4.png",
                            title: "历史中签率",
                            url: "/pages/houses/suceessRate"
                        }, {
                            id: 5,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon5.png",
                            title: "一房一价表",
                            url: "/pages/houses/ahousePic"
                        }, {
                            id: 6,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon6.png",
                            title: "公示方案",
                            url: "/pages/houses/publicPlan"
                        }, {
                            id: 3,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon7.png",
                            title: "开盘信息",
                            url: "/pages/houses/openInformation"
                        }, {
                            id: 8,
                            img: "https://cdn.lottery.okgoes.com/houseDetail_icon8.png",
                            title: "摇号结果",
                            url: "/pages/index/lotteryResults"
                        } ],
                        sigleData: [ {
                            name: "选房顺序",
                            title: [ "第一位" ]
                        }, {
                            name: "姓名",
                            title: [ "第八题", "叶良辰", "地阿斯" ]
                        }, {
                            name: "身份证号",
                            title: [ "330823********2722", "330823********2722", "330823********2722" ]
                        }, {
                            name: "摇号编码",
                            title: [ "SYF00353" ]
                        } ],
                        tableList: [],
                        time: [ {
                            title: "取证公示",
                            time: "",
                            over: !1
                        }, {
                            title: "登记",
                            time: "",
                            over: !1
                        }, {
                            title: "补资料",
                            time: "",
                            over: !1
                        }, {
                            title: "意向公示",
                            time: "",
                            over: !1
                        }, {
                            title: "摇号",
                            time: "",
                            over: !1
                        }, {
                            title: "选房",
                            time: "",
                            over: !1
                        } ],
                        timeTag: [ {
                            title: "公示方案",
                            time: "",
                            isShow: !1,
                            url: "/pages/houses/publicPlan"
                        }, {
                            title: "一房一价",
                            time: "",
                            isShow: !1,
                            url: "/pages/houses/ahousePic"
                        }, {
                            title: "意向登记",
                            time: "",
                            isShow: !1,
                            url: "/home/pages/registration"
                        }, {
                            title: "摇号结果",
                            time: "",
                            isShow: !1,
                            url: "/pages/index/searchResult"
                        } ],
                        userId: -1,
                        chatId: ""
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    var a = getCurrentPages().pop().route, i = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "楼盘详情-" + this.pageOriginData.name,
                        path: "/".concat(a, "?pfsId=").concat(this.pfsId, "&chatId=").concat(i)
                    };
                },
                onShareTimeline: function onShareTimeline(e) {
                    getCurrentPages().pop().route;
                    var a = t.getStorageSync("chatId");
                    return "button" === e.from && console.log(e.target), {
                        title: "摇号大师",
                        query: "pfsId=".concat(this.pfsId, "&chatId=").concat(a)
                    };
                },
                onLoad: function onLoad(e) {
                    var a = this;
                    return r(i.default.mark(function n() {
                        var o, s;
                        return i.default.wrap(function(i) {
                            while (1) {
                                switch (i.prev = i.next) {
                                  case 0:
                                    if (console.log(e, "option", t.getStorageSync("user_avt")), !e.scene) {
                                        i.next = 10;
                                        break;
                                    }
                                    if (e.scene = decodeURIComponent(e.scene), o = e.scene.split("+"), e.pfsId = o[0], 
                                    !o[1] || !a.isLogin) {
                                        i.next = 10;
                                        break;
                                    }
                                    return i.next = 8, a.$request("tim/user/info/".concat(o[1]));

                                  case 8:
                                    s = i.sent, e.chatId = s.data.chatId;

                                  case 10:
                                    if (a.addExclusive(e.userId, e.chatId), e.pfsId) {
                                        i.next = 19;
                                        break;
                                    }
                                    if (e.fromPfsId) {
                                        i.next = 18;
                                        break;
                                    }
                                    return t.showToast({
                                        icon: "none",
                                        duration: 2500,
                                        title: "楼盘不存在,fromPfsId:" + e.fromPfsId + " pfsId:" + e.fromPfsId
                                    }), setTimeout(function() {
                                        t.navigateBack();
                                    }, 1e3), i.abrupt("return");

                                  case 18:
                                    e.pfsId = e.fromPfsId;

                                  case 19:
                                    a.userId = e.userId, a.chatId = e.chatId, a.pfsId = e.pfsId, a.postersData = a.pfsId, 
                                    a.queryDetailData(), a.handleShare(e);

                                  case 25:
                                  case "end":
                                    return i.stop();
                                }
                            }
                        }, n);
                    }))();
                },
                mounted: function mounted() {
                    var e = this;
                    console.log("mounted 组件挂载完毕状态===============》");
                    var a = t.createSelectorQuery().in(this);
                    a.select("#scrollView").boundingClientRect(function(t) {
                        console.log("得到布局位置信息" + JSON.stringify(t)), console.log("节点离页面顶部的距离为" + t.top), 
                        e.myScroll = t.top;
                    }).exec();
                },
                onPageScroll: function onPageScroll(t) {
                    var e = this;
                    t.scrollTop > this.myScroll ? this.isTop = 1 : this.isTop = 0, clearTimeout(c), 
                    this.scrolling = !0, c = setTimeout(function() {
                        e.scrolling = !1;
                    }, 500);
                },
                filters: {
                    suffix: function suffix(t) {
                        if (t) return t + " :";
                    }
                },
                computed: {
                    info: function info() {
                        var t = [];
                        return t = this.swiperData[this.currentIndex], t;
                    }
                },
                watch: {},
                onReachBottom: function onReachBottom() {
                    var t = this;
                    return r(i.default.mark(function e() {
                        return i.default.wrap(function(e) {
                            while (1) {
                                switch (e.prev = e.next) {
                                  case 0:
                                    console.log("onReachBottom"), t.bottomText = "到底了...";

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }
                        }, e);
                    }))();
                },
                methods: {
                    addExclusive: function addExclusive(t, e) {
                        var a = this;
                        return r(i.default.mark(function n() {
                            return i.default.wrap(function(i) {
                                while (1) {
                                    switch (i.prev = i.next) {
                                      case 0:
                                        if (null == e) {
                                            i.next = 3;
                                            break;
                                        }
                                        return i.next = 3, a.$request("tim/user/info/bychatId/".concat(e)).then(function(e) {
                                            null != e.data && (a.userId = t = e.data.userId);
                                        });

                                      case 3:
                                        if (null == t) {
                                            i.next = 6;
                                            break;
                                        }
                                        return i.next = 6, a.$request("add/belong/contack/user", {
                                            toChatId: "",
                                            toUserId: t
                                        }, "POST");

                                      case 6:
                                      case "end":
                                        return i.stop();
                                    }
                                }
                            }, n);
                        }))();
                    },
                    queryDetailData: function queryDetailData() {
                        var e = this, a = this;
                        this.$request("propertiesForSale/".concat(this.pfsId)).then(function(i) {
                            if (1 == i.code) return t.showToast({
                                icon: "none",
                                duration: 2500,
                                title: i.msg + " pfsId:" + e.pfsId
                            }), void setTimeout(function() {
                                t.navigateBack();
                            }, 1e3);
                            e.pageOriginData = i.data;
                            var o = [];
                            i.data.hourseTypeList.length > 0 && i.data.hourseTypeList.forEach(function(t) {
                                o.push(t.image + "?x-oss-process=style/123");
                            }), e.hourseTypeList = o, console.log(i.data.hourseNum, "res.data"), e.pageOriginData.estimateOpenDetail || (e.pageOriginData.estimateOpenDetail = {});
                            var s = e.pageOriginData.estimateOpenDetail;
                            if (Object.keys(s).forEach(function(t) {
                                console.log(t, s[t]), null !== s[t] && (a.isHasSale = !0);
                            }), !a.isHasSale) {
                                i.data.greeningRate > 0 && (i.data.greeningRate = i.data.greeningRate + "%"), null !== i.data.deliveryTime && (i.data.deliveryTime = e.formatTime(i.data.deliveryTime, "YYYY年MM月"));
                                var r = [ {
                                    name: "开发商",
                                    title: "[object Array]" === Object.prototype.toString.call(i.data.developer) ? i.data.developer.toString() : null
                                }, {
                                    name: "容积率",
                                    title: i.data.plotRatio
                                }, {
                                    name: "总户数",
                                    title: i.data.householdsNum
                                }, {
                                    name: "绿化率",
                                    title: i.data.greeningRate
                                }, {
                                    name: "楼层状况",
                                    title: i.data.floorCondition
                                }, {
                                    name: "建筑面积",
                                    title: i.data.buildingArea
                                }, {
                                    name: "预计交房",
                                    title: i.data.deliveryTime
                                }, {
                                    name: "物业公司",
                                    title: i.data.propertyCompany
                                }, {
                                    name: "物业费用",
                                    title: i.data.propertyFee
                                } ];
                                r.forEach(function(t) {
                                    null != t.title && (a.ishasInfo = !0);
                                }), a.ishasInfo && (e.sigleInfo = r);
                            }
                            console.log(e.pageOriginData.estimateOpenDetail, "estimateOpenTime"), e.swiperData.push(i.data.designSketch), 
                            e.swiperData.push(i.data.positionImage), e.swiperData.push(i.data.plan), e.swiperData.push(i.data.hourseTypeImage), 
                            e.swiperData.push(i.data.sampleImage), e.swiperData = e.swiperData.map(function(t) {
                                return null === t && (t = []), t = t.map(function(t) {
                                    return t += "?x-oss-process=style/123", t;
                                }), t;
                            });
                            var c = i.data.timeList;
                            null === c || null == c.getPublictityTimeEnd && null == c.getPublictityTimeStart ? e.modelShow = !1 : (e.modelShow = !0, 
                            e.begin = 0), e.num = 0 === i.data.lotteryResult.signUpNum.num ? "-" : i.data.lotteryResult.houseNum.num > i.data.lotteryResult.signUpNum.num ? "100%" : (i.data.lotteryResult.houseNum.num / i.data.lotteryResult.signUpNum.num * 100 || 0).toFixed(2) + "%", 
                            c && (e.time[0].time = "".concat(e._dealTime(c.getPublictityTimeStart), "-").concat(e._dealTime(c.getPublictityTimeEnd)), 
                            null == c.registerTimeStart || null == c.registerTimeEnd ? e.time[1].time = "待定" : (e.time[0].over = !0, 
                            i.timestamp >= c.registerTimeEnd && (e.begin = 1), e.time[1].time = "".concat(e._dealTime(c.registerTimeStart), "-").concat(e._dealTime(c.registerTimeEnd))), 
                            null == c.supplementDataTimeStart ? e.time[2].time = "待定" : (e.time[0].over = !0, 
                            e.time[1].over = !0, i.timestamp >= c.supplementDataTimeStart && (e.begin = 2), 
                            e.time[2].time = "".concat(e._dealTime(c.supplementDataTimeStart))), null == c.intentionPublicityTimeStart ? e.time[3].time = "待定" : (e.time[0].over = !0, 
                            e.time[1].over = !0, e.time[2].over = !0, e.time[3].over = !0, i.timestamp >= c.intentionPublicityTimeStart && (e.begin = 3), 
                            e.time[3].time = "".concat(e._dealTime(c.intentionPublicityTimeStart))), null == c.lotteryTimeStart ? e.time[4].time = "待定" : (e.time[0].over = !0, 
                            e.time[1].over = !0, e.time[2].over = !0, e.time[3].over = !0, e.time[4].over = !0, 
                            i.timestamp >= c.lotteryTimeStart && (e.begin = 4), e.time[4].time = "".concat(e._dealTime(c.lotteryTimeStart)), 
                            e.lotteryTimeStart = (0, n.formatDate)(c.lotteryTimeStart).replace(/\-/g, ".")), 
                            null == c.houseSelectionTimeStart ? e.time[5].time = "待定" : (e.time[0].over = !0, 
                            e.time[1].over = !0, e.time[2].over = !0, e.time[3].over = !0, e.time[4].over = !0, 
                            e.time[5].over = !0, i.timestamp >= c.houseSelectionTimeStart && (e.begin = 5), 
                            e.time[5].time = "".concat(e._dealTime(c.houseSelectionTimeStart)))), e.newsList = i.data.newsList, 
                            e.samePriceRecommendList = i.data.samePriceRecommendList, e.tableList.push(i.data.estimateOpenDetail);
                            var l = i.data.pfsLatitude, u = [ {
                                id: 0,
                                latitude: l - 0,
                                longitude: i.data.pfsLongitude - 0,
                                title: i.data.name,
                                iconPath: "https://cdn.lottery.okgoes.com/map-icon-center.png",
                                width: 32,
                                height: 32,
                                callout: {
                                    content: i.data.name,
                                    color: "#000000",
                                    fontSize: 14,
                                    borderRadius: 30,
                                    bgColor: "#fff",
                                    padding: 7,
                                    display: "ALWAYS",
                                    textAlign: "center"
                                }
                            }, {
                                id: 1,
                                latitude: l - 1 / 120,
                                longitude: i.data.pfsLongitude - 0,
                                alpha: 0,
                                label: {
                                    content: "1公里",
                                    color: "#FFFFFF",
                                    fontSize: 10,
                                    borderRadius: 30,
                                    bgColor: "#868E99",
                                    padding: 4,
                                    display: "ALWAYS",
                                    textAlign: "center"
                                }
                            }, {
                                id: 2,
                                latitude: l - 2 / 120,
                                longitude: i.data.pfsLongitude - 0,
                                alpha: 0,
                                label: {
                                    content: "2公里",
                                    color: "#FFFFFF",
                                    fontSize: 10,
                                    borderRadius: 30,
                                    bgColor: "#868E99",
                                    padding: 4,
                                    display: "ALWAYS",
                                    textAlign: "center"
                                }
                            } ];
                            e.ptlatitude = i.data.pfsLatitude - 0, e.ptlongitude = i.data.pfsLongitude - 0, 
                            i.data.matchDetail.synthesis.length > 0 && (e.markers[0] = e.markers[0].concat(u), 
                            i.data.matchDetail.synthesis.forEach(function(t, a) {
                                e.markers[0].push({
                                    id: a + 50,
                                    latitude: t.latitude - 0,
                                    longitude: t.longitude - 0,
                                    iconPath: "https://cdn.lottery.okgoes.com/map_icon_1.png",
                                    width: 28,
                                    height: 28,
                                    callout: {
                                        title: t.name,
                                        content: t.name,
                                        color: "#ff9800",
                                        borderRadius: 10,
                                        display: "ALWAYS",
                                        padding: "5"
                                    }
                                });
                            })), i.data.matchDetail.traffic.length > 0 && (e.markers[1] = e.markers[1].concat(u), 
                            i.data.matchDetail.traffic.forEach(function(t, a) {
                                e.markers[1].push({
                                    id: a + 100,
                                    latitude: t.latitude - 0,
                                    longitude: t.longitude - 0,
                                    iconPath: "https://cdn.lottery.okgoes.com/map_icon_1.png",
                                    width: 28,
                                    height: 28
                                });
                            })), i.data.matchDetail.education.length > 0 && (e.markers[2] = e.markers[2].concat(u), 
                            i.data.matchDetail.education.forEach(function(t, a) {
                                e.markers[2].push({
                                    id: a + 20,
                                    latitude: t.latitude - 0,
                                    longitude: t.longitude - 0,
                                    iconPath: "https://cdn.lottery.okgoes.com/map_icon_2.png",
                                    width: 28,
                                    height: 28,
                                    callout: {
                                        title: t.name,
                                        content: t.name,
                                        color: "#376bff",
                                        borderRadius: 10,
                                        display: "ALWAYS",
                                        padding: "5"
                                    }
                                });
                            })), i.data.matchDetail.medicalCare.length > 0 && (e.markers[3] = e.markers[3].concat(u), 
                            i.data.matchDetail.medicalCare.forEach(function(t, a) {
                                e.markers[3].push({
                                    id: a + 300,
                                    latitude: t.latitude - 0,
                                    longitude: t.longitude - 0,
                                    iconPath: "https://cdn.lottery.okgoes.com/map_icon_4.png",
                                    width: 28,
                                    height: 28,
                                    callout: {
                                        title: t.name,
                                        content: t.name,
                                        color: "#00BFBF",
                                        borderRadius: 10,
                                        display: "ALWAYS",
                                        padding: "5"
                                    }
                                });
                            })), console.log(e.markers, "this.master[0]"), e.isFocus = 1 === i.data.isFocusOn, 
                            e.maptype[0].content = i.data.matchDetail.synthesisIntroduction, e.maptype[1].content = i.data.matchDetail.trafficIntroduction, 
                            e.maptype[2].content = i.data.matchDetail.educationIntroduction, e.maptype[3].content = i.data.matchDetail.medicalCareIntroduction, 
                            null != i.data.publicityScheme && "" !== i.data.publicityScheme && (e.timeTag[0].isShow = !0, 
                            e.timeTag[0].url = e.timeTag[0].url + "?pfsId=" + e.pfsId + "&type=1"), i.data.oneHouseOnePrice.length > 0 && (e.timeTag[1].isShow = !0), 
                            e.$request("pfs/lottery/search/result", {
                                pfsId: e.pfsId
                            }, "POST").then(function(t) {
                                t.data.lotteryShowResult.length > 0 ? e.timeTag[3].isShow = !0 : e.timeTag[3].isShow = !1;
                            }), e.timeTag[3].url = "/pages/index/searchResult?pfsId=".concat(i.data.pfsId, "&name=").concat(i.data.name, "&active=0"), 
                            e.$request("/pfs/lottery/intention/register/result", {
                                pfsId: e.pfsId
                            }, "POST").then(function(t) {
                                t.data.registerShowResult.length > 0 && (e.timeTag[2].isShow = !0);
                            }), e.timeTag[2].url = "/pages/index/searchResult?pfsId=".concat(i.data.pfsId, "&name=").concat(i.data.name, "&active=1"), 
                            e.latitude = i.data.pfsLatitude - 0, e.longitude = i.data.pfsLongitude - 0, e.circles[0].latitude = i.data.pfsLatitude - 0, 
                            e.circles[0].longitude = i.data.pfsLongitude - 0, e.circles[1].latitude = i.data.pfsLatitude - 0, 
                            e.circles[1].longitude = i.data.pfsLongitude - 0;
                        });
                    },
                    _dealTime: function _dealTime(t) {
                        return (0, n.formatDate)(t).replace(/\-/g, ".").slice(5);
                    },
                    navTo: function navTo(e, a) {
                        e.isShow && t.navigateTo({
                            url: e.url + "?pfsId=" + this.pfsId + "&name=" + this.pageOriginData.name
                        });
                    },
                    jump: function jump(e, a) {
                        if (e) if (6 !== a || null !== this.pageOriginData.publicityScheme) {
                            if (6 !== a) {
                                if (7 === a) return "" === this.pageOriginData.generalLayoutImage || null === this.pageOriginData.generalLayoutImage ? void t.showToast({
                                    icon: "none",
                                    duration: 2500,
                                    title: "暂无推盘信息"
                                }) : void t.navigateTo({
                                    url: e + "?pfsId=".concat(this.pfsId, "&icon=").concat(this.pageOriginData.generalLayoutImage, "&content=").concat(this.pageOriginData.pushBuildingDesc)
                                });
                                if (5 !== a || 0 !== this.pageOriginData.oneHouseOnePrice.length) {
                                    if (3 === a) return "" === this.pageOriginData.openInfoImage || null === this.pageOriginData.openInfoImage ? void t.showToast({
                                        icon: "none",
                                        duration: 2500,
                                        title: "暂无开盘信息"
                                    }) : void t.navigateTo({
                                        url: e + "?pfsId=".concat(this.pfsId, "&name=").concat(this.pageOriginData.name, "&icon=").concat(this.pageOriginData.openInfoImage, "&content=").concat(this.pageOriginData.openInfoDesc)
                                    });
                                    if (4 !== a || 0 !== this.pageOriginData.historyWinningRateList.length) {
                                        if (1 !== a || null !== this.pageOriginData.commentsOnRealEstate && "" !== this.pageOriginData.commentsOnRealEstate) {
                                            if (8 !== a || this.timeTag[3].isShow) return 8 === a ? (this.List[7].url = "/pages/index/searchResult?pfsId=".concat(this.pageOriginData.pfsId, "&name=").concat(this.pageOriginData.name, "&active=0"), 
                                            void t.navigateTo({
                                                url: this.List[7].url
                                            })) : void t.navigateTo({
                                                url: e + "?pfsId=" + this.pfsId
                                            });
                                            t.showToast({
                                                icon: "none",
                                                duration: 2500,
                                                title: "暂无摇号结果"
                                            });
                                        } else t.showToast({
                                            icon: "none",
                                            duration: 2500,
                                            title: "暂无摇号点评数据"
                                        });
                                    } else t.showToast({
                                        icon: "none",
                                        duration: 2500,
                                        title: "暂无历史中签数据"
                                    });
                                } else t.showToast({
                                    icon: "none",
                                    duration: 2500,
                                    title: "暂无一房一价表数据"
                                });
                            } else t.navigateTo({
                                url: e + "?pfsId=" + this.pfsId + "&type=1"
                            });
                        } else t.showToast({
                            icon: "none",
                            duration: 2500,
                            title: "暂无公示方案数据"
                        });
                    },
                    showStatus: function showStatus(t) {
                        var e = "";
                        switch (t) {
                          case 1:
                            e = "即将预售";
                            break;

                          case 2:
                            e = "正在公示";
                            break;

                          case 3:
                            e = "正在登记";
                            break;

                          case 4:
                            e = "正在摇号";
                            break;

                          case 5:
                            e = "补交资料";
                            break;

                          case 6:
                            e = "已摇号";
                            break;

                          case 7:
                            e = "在售";
                            break;

                          case 8:
                            e = "售罄";
                            break;

                          case 9:
                            e = "等待摇号";
                            break;

                          case 10:
                            e = "待首开";
                            break;

                          case 11:
                            e = "即将加推";
                            break;

                          default:
                            e = "";
                            break;
                        }
                        return e;
                    },
                    showTime: function showTime(t) {
                        if (3 === this.pageOriginData.saleStatus) return "";
                        var e = t.saleStatus, a = "", i = "", o = "";
                        switch (e) {
                          case 1:
                            o = t.estimateOpenDetail.estimateOpenTime;
                            break;

                          case 2:
                            t.timeList && (a = (0, n.formatDate)(t.timeList.getPublictityTimeStart).replace(/\-/g, "."), 
                            i = (0, n.formatDate)(t.timeList.getPublictityTimeEnd).replace(/\-/g, ".")), o = "";
                            break;

                          case 3:
                            t.timeList && (a = (0, n.formatDate)(t.timeList.registerTimeStart).replace(/\-/g, "."), 
                            i = (0, n.formatDate)(t.timeList.registerTimeEnd).replace(/\-/g, "."), o = a.slice(5) + "-" + i.slice(5));
                            break;

                          case 4:
                            t.timeList && (a = (0, n.formatDate)(t.timeList.lotteryTimeStart).replace(/\-/g, "."), 
                            i = (0, n.formatDate)(t.timeList.lotteryTimeEnd).replace(/\-/g, ".")), o = "";
                            break;

                          case 8:
                            o = "";
                            break;
                        }
                        return o ? " | " + o : "";
                    },
                    toFocus: function toFocus() {
                        var e = this;
                        console.log("isLogin: ", this.isLogin), this.isLogin ? this.$request("user/follow/pfs/".concat(this.pfsId), {}, "PUT").then(function(a) {
                            1 === a.data ? (e.isFocus = !0, t.showToast({
                                icon: "none",
                                title: "关注成功",
                                duration: 2500
                            }), console.log("isExistPhone: " + t.getStorageSync("isExistPhone"))) : 2 === a.data && (e.isFocus = !1, 
                            t.showToast({
                                icon: "none",
                                title: "取消关注",
                                duration: 2500
                            }));
                        }) : this.wxGetUserInfo();
                    },
                    planStart: function planStart(t) {
                        console.log(t, "planStart"), this.startData.clientX = t.changedTouches[0].clientX, 
                        this.startData.clientY = t.changedTouches[0].clientY;
                    },
                    planEnd: function planEnd(t) {
                        var e = t.changedTouches[0].clientX - this.startData.clientX, a = t.changedTouches[0].clientY - this.startData.clientY;
                        a < 50 && a > -50 && (e > 100 ? this.getNext("right") : e < -100 ? (this.getNext("left"), 
                        console.log("左滑")) : console.log("无效"));
                    },
                    getNext: function getNext(t) {
                        var e = this.swiperData[this.currentIndex].length, a = this.currentIndex;
                        console.log(this.currentIndex, this.current, e, "subY"), this.current + 1 === e && 1 !== e ? (this.isFirst && (this.isEnd = !0), 
                        this.isFirst = !0, console.log(e, this.current, e, "开始滑动len最后一张")) : this.isEnd = !1, 
                        0 === this.current && 1 !== e && (this.isEnd = !0, console.log(this.current, "开始滑动第一张")), 
                        0 !== e && 1 !== e || (this.isEnd = !0);
                        this.swiperData.length, this.currentIndex, console.log(this.isEnd, t, "event"), 
                        this.isEnd && ("left" === t ? (console.log(a, "currentIndex", this.swiperData.length), 
                        a === this.swiperData.length - 1 && (a = -1), this.imgSelect(a + 1)) : (0 === a && (a = this.swiperData.length), 
                        console.log(a, "currentIndex"), this.imgSelect(a - 1)));
                    },
                    swiperChange: function swiperChange(t) {
                        this.current = t.target.current;
                    },
                    consult: function consult(e) {
                        var a = t.getStorageSync("user_avt");
                        if (a) {
                            var i = JSON.parse(t.getStorageSync("userTimId"));
                            i.chatId !== e.chatId ? (this.$request("/add/belong/contack/user", {
                                toChatId: e.chatId,
                                toUserId: e.userId
                            }, "post"), e.pfsName = this.pageOriginData.name, e.nickname = e.nickName, this.$store.commit("createConversationActive", e.chatId), 
                            t.navigateTo({
                                url: "/pages/message/mychat?data=".concat(encodeURIComponent(JSON.stringify(e)))
                            })) : t.showToast({
                                icon: "none",
                                duration: 2500,
                                title: "无法与自己聊天"
                            });
                        } else this.wxGetUserInfo();
                    },
                    MesDeatils: function MesDeatils(e) {
                        null !== e.url && t.navigateTo({
                            url: "/myPackageA/pages/newsInfo?newsId=".concat(e.newsId, "&getCustomers=true")
                        });
                    },
                    changeMapType: function changeMapType(t) {
                        console.log(t, "index"), this.maptype_activeIndex = t, console.log(this.markers[t]);
                    },
                    remark: function remark() {
                        t.navigateTo({
                            url: "/pages/houses/floorRemark?pfsId=" + this.pfsId
                        });
                    },
                    moreBlock: function moreBlock(e) {
                        "counselor" === e && t.navigateTo({
                            url: "/pages/common/counselor?pfsId=".concat(this.pfsId)
                        }), "school" === e && t.navigateTo({
                            url: "/pages/houses/publicPlan?pfsId=".concat(this.pfsId, "&type=2")
                        }), "doorModelDetails" === e && t.navigateTo({
                            url: "/pages/houses/doorModelDetails?id=".concat(this.pfsId, "&name=").concat(this.pageOriginData.name)
                        }), "new" === e && t.reLaunch({
                            url: "/pages/news/index"
                        });
                    },
                    imgSelect: function imgSelect(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        this.current = -1 === e ? 0 : e, this.currentIndex = t, this.isEnd = !1, this.isFirst = !1, 
                        console.log(t, this.currentIndex, e, "===============");
                    },
                    mapAddress: function mapAddress() {
                        t.openLocation({
                            latitude: this.pageOriginData.pfsLatitude - 0,
                            longitude: this.pageOriginData.pfsLongitude - 0,
                            name: this.pageOriginData.name,
                            address: this.pageOriginData.address,
                            success: function success() {
                                console.log("导航成功");
                            },
                            fail: function fail(t) {
                                console.log(t);
                            }
                        });
                    },
                    getImg: function getImg(t, e) {
                        return 0 === t ? e ? "url(https://cdn.lottery.okgoes.com/time_active_1.png)" : "url(https://cdn.lottery.okgoes.com/time_1.png)" : e ? "url(https://cdn.lottery.okgoes.com/time_active_2.png)" : "url(https://cdn.lottery.okgoes.com/time_2.png)";
                    },
                    setAvt: function setAvt() {
                        this.avatar = t.getStorageSync("user_avt");
                    },
                    chooseRoom: (0, n.throttle)(function() {
                        var e = r(i.default.mark(function e(a) {
                            var o, s, r, c, l, u = this;
                            return i.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        if (0 != a) {
                                            e.next = 21;
                                            break;
                                        }
                                        if (o = t.getStorageSync("user_avt"), o) {
                                            e.next = 5;
                                            break;
                                        }
                                        return this.wxGetUserInfo(), e.abrupt("return");

                                      case 5:
                                        if (s = t.getStorageSync("chatId"), !(this.userId > 0)) {
                                            e.next = 17;
                                            break;
                                        }
                                        return e.next = 9, this.$request("/seller/user/info/get", {
                                            base64UserId: (0, n.base64Encode)(this.userId + ""),
                                            sign: ""
                                        }, "POST");

                                      case 9:
                                        if (r = e.sent, c = r.data, l = -1, l = this.pageOriginData.sellerList.findIndex(function(t) {
                                            return t.userId == u.userId;
                                        }), !c || null === c.pfsName || s === c.chatId || -1 === l) {
                                            e.next = 17;
                                            break;
                                        }
                                        return this.$store.commit("createConversationActive", c.chatId), t.navigateTo({
                                            url: "/pages/message/mychat?data=".concat(encodeURIComponent(JSON.stringify(c)))
                                        }), e.abrupt("return");

                                      case 17:
                                        return e.next = 19, this.$request("user/get/seller/better/".concat(this.pfsId), {}, "post").then(function(e) {
                                            if (console.log(e, "res"), "0" === e.code) {
                                                if (null === e.data) return void t.navigateTo({
                                                    url: "/pages/common/counselor?pfsId=".concat(u.pfsId)
                                                });
                                                if (s === e.data.chatId) return void t.navigateTo({
                                                    url: "/pages/common/counselor?pfsId=".concat(u.pfsId)
                                                });
                                                u.$store.commit("createConversationActive", e.data.chatId), t.navigateTo({
                                                    url: "/pages/message/mychat?data=".concat(encodeURIComponent(JSON.stringify(e.data)))
                                                });
                                            } else t.showToast({
                                                icon: "none",
                                                duration: 2500,
                                                title: e.msg
                                            });
                                        });

                                      case 19:
                                        e.next = 22;
                                        break;

                                      case 21:
                                        1 == a && this.$request("select/house/by/qingqiu", {}, "get").then(function(e) {
                                            console.log(e, "res"), "0" === e.code ? (u.$store.commit("createConversationActive", e.data.chatId), 
                                            t.navigateTo({
                                                url: "/pages/message/mychat?data=".concat(encodeURIComponent(JSON.stringify(e.data)))
                                            })) : t.showToast({
                                                icon: "none",
                                                duration: 2500,
                                                title: e.msg
                                            });
                                        });

                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), 2e3),
                    swiperClick: function swiperClick(e, a) {
                        0 === a && 0 == this.currentIndex || (console.log("item", e), t.previewImage({
                            indicator: "none",
                            urls: e
                        }));
                    }
                }
            };
            e.default = h;
        }).call(this, a("543d")["default"]);
    },
    d41d: function d41d(t, e, a) {
        "use strict";
        (function(t) {
            a("6d7c");
            i(a("66fd"));
            var e = i(a("ed3b"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, a("543d")["createPage"]);
    },
    ed3b: function ed3b(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("9d0b"), n = a("0e65");
        for (var o in n) {
            "default" !== o && function(t) {
                a.d(e, t, function() {
                    return n[t];
                });
            }(o);
        }
        a("824a");
        var s, r = a("f0c5"), c = Object(r["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
        e["default"] = c.exports;
    }
}, [ [ "d41d", "common/runtime", "common/vendor" ] ] ]);