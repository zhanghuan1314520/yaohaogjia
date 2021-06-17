require("../../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/my/postersPage" ], {
    "0faa": function faa(e, t, a) {},
    "2bdd": function bdd(e, t, a) {
        "use strict";
        (function(e) {
            a("6d7c");
            n(a("66fd"));
            var t = n(a("b9ce"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, a("543d")["createPage"]);
    },
    "7dc9": function dc9(e, t, a) {
        "use strict";
        var n;
        a.d(t, "b", function() {
            return r;
        }), a.d(t, "c", function() {
            return c;
        }), a.d(t, "a", function() {
            return n;
        });
        var r = function r() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, c = [];
    },
    "818f": function f(e, t, a) {
        "use strict";
        var n = a("0faa"), r = a.n(n);
        r.a;
    },
    ab7f: function ab7f(e, t, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(a("a34a")), r = a("88b3"), c = s(a("cb62"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, a, n, r, c, s) {
                try {
                    var o = e[c](s), i = o.value;
                } catch (u) {
                    return void a(u);
                }
                o.done ? t(i) : Promise.resolve(i).then(n, r);
            }
            function i(e) {
                return function() {
                    var t = this, a = arguments;
                    return new Promise(function(n, r) {
                        var c = e.apply(t, a);
                        function s(e) {
                            o(c, n, r, s, i, "next", e);
                        }
                        function i(e) {
                            o(c, n, r, s, i, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var u = {
                data: function data() {
                    return {
                        info: null,
                        houseData: "",
                        counselor: "",
                        tempFilePath: "",
                        qrCode: "",
                        ctx: null,
                        pfsId: "",
                        isDrawDone: !1,
                        template: {},
                        show: !1,
                        src: "",
                        isMine: !1,
                        qrcodeUrl: ""
                    };
                },
                computed: {
                    status_time: function status_time() {
                        return this.showStatus(this.houseData.saleStatus) + this.showTime(this.houseData);
                    }
                },
                onShareAppMessage: function onShareAppMessage(t) {
                    var a = "/home/pages/houseDis?pfsId=".concat(this.pfsId), n = e.getStorageSync("chatId");
                    return n && (a = "".concat(a, "&chatId=").concat(n)), console.log(a), {
                        title: "".concat(this.houseData.name),
                        path: a
                    };
                },
                onLoad: function onLoad(t) {
                    this.pfsId = JSON.parse(t.data), e.showLoading({
                        title: "正在加载...",
                        mask: !0
                    }), this.queryData();
                },
                methods: {
                    onImgOk: function onImgOk(t) {
                        this.src = t.detail.path;
                        var a = wx.getFileSystemManager();
                        a.unlink({
                            filePath: this.qrcodeUrl
                        }), e.hideLoading();
                    },
                    onImgErr: function onImgErr(e) {
                        console.log(e);
                    },
                    handleTap: function handleTap() {
                        wx.saveImageToPhotosAlbum({
                            filePath: this.src,
                            success: function success(t) {
                                "saveImageToPhotosAlbum:ok" == t.errMsg && e.showToast({
                                    title: "已保存到系统相册",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    showStatus: function showStatus(e) {
                        var t = "";
                        switch (e) {
                          case 1:
                            t = "预计开盘";
                            break;

                          case 2:
                            t = "正在公示";
                            break;

                          case 3:
                            t = "登记";
                            break;

                          case 4:
                            t = "摇号";
                            break;

                          case 5:
                            t = "补交资料";
                            break;

                          case 6:
                            t = "摇号结束";
                            break;

                          case 7:
                            t = "在售";

                          case 8:
                            t = "售罄";
                            break;

                          case 9:
                            t = "等待摇号";
                            break;

                          case 10:
                            t = "待首开";
                            break;

                          case 11:
                            t = "即将加推";
                            break;
                        }
                        return t;
                    },
                    showTime: function showTime(e) {
                        var t = e.saleStatus, a = "", n = "", c = "";
                        switch (t) {
                          case 1:
                            c = (0, r.formatDate)(e.estimateOpenDetail.estimateOpenTime).slice(0, 7);
                            break;

                          case 2:
                            a = (0, r.formatDate)(e.timeList.getPublictityTimeStart).replace(/\-/g, "."), n = (0, 
                            r.formatDate)(e.timeList.getPublictityTimeEnd).replace(/\-/g, "."), c = "";
                            break;

                          case 3:
                            a = (0, r.formatDate)(e.timeList.registerTimeStart).replace(/\-/g, "."), n = (0, 
                            r.formatDate)(e.timeList.registerTimeEnd).replace(/\-/g, "."), c = a.slice(5) + "-" + n.slice(5);
                            break;

                          case 4:
                            a = (0, r.formatDate)(e.timeList.lotteryTimeStart).replace(/\-/g, "."), n = (0, 
                            r.formatDate)(e.timeList.lotteryTimeEnd).replace(/\-/g, "."), c = "";
                            break;

                          case 8:
                            c = "";
                            break;
                        }
                        return c ? " | " + c : "";
                    },
                    queryData: function queryData() {
                        var t = this;
                        return i(n.default.mark(function a() {
                            var r, s, o, i, u, l, f, d, h, m;
                            return n.default.wrap(function(a) {
                                while (1) {
                                    switch (a.prev = a.next) {
                                      case 0:
                                        return a.prev = 0, a.next = 3, t.$request("propertiesForSale/".concat(t.pfsId));

                                      case 3:
                                        return r = a.sent, t.houseData = r.data, a.next = 7, t.$request("system/user/data/get");

                                      case 7:
                                        if (s = a.sent, t.counselor = s.data, null == t.counselor && (t.counselor = {}), 
                                        t.isMine = t.counselor.belongPfsId === t.pfsId, o = "home/pages/houseDis?".concat(t.pfsId), 
                                        i = e.getStorageSync("chatId"), !i) {
                                            a.next = 18;
                                            break;
                                        }
                                        return a.next = 16, t.$request("tim/user/info/bychatId/".concat(i));

                                      case 16:
                                        u = a.sent, o = "".concat(o, "+").concat(u.data.userId);

                                      case 18:
                                        return o = t.base64Encode(o), o = o.replaceAll("+", "-"), o = o.replaceAll("/", "*"), 
                                        o = o.replaceAll("=", "."), a.next = 24, t.$request("invitor/qrcode/build?path=".concat(o), {}, "GET", {
                                            "x-token": e.getStorageSync("user_tk")
                                        }, "arraybuffer");

                                      case 24:
                                        l = a.sent, f = wx.arrayBufferToBase64(l), d = e.createCanvasContext("myCanvas"), 
                                        t.ctx = d, d.font = "12px PingFangSC-Regular", h = wx.getFileSystemManager(), m = new Date().getTime(), 
                                        h.writeFile({
                                            filePath: "".concat(wx.env.USER_DATA_PATH, "/test").concat(m, ".png"),
                                            data: f,
                                            encoding: "base64",
                                            success: function success(e) {
                                                t.qrcodeUrl = "".concat(wx.env.USER_DATA_PATH, "/test").concat(m, ".png");
                                                var a = d.measureText(t.status_time).width, n = a > 0 ? a + 6 : 0, r = [], s = n;
                                                t.houseData.tabs.forEach(function(e) {
                                                    var t = d.measureText(e).width, a = t + 6;
                                                    s += 8 + a, s <= 295 && r.push({
                                                        tab: e,
                                                        width: t,
                                                        bgWidth: a,
                                                        left: s - a
                                                    });
                                                });
                                                var o = t.houseData.mixPrice ? t.houseData.mixPrice + "元/㎡起" : "价格待定", i = "暂无";
                                                null != t.houseData.commentsOnRealEstate && (i = t.houseData.commentsOnRealEstate.replace("\n", ""));
                                                var u = t.houseData.nearPlacePrice ? t.houseData.nearPlacePrice + "元/㎡" : "暂无数据";
                                                t.template = new c.default({
                                                    qrcode: t.qrcodeUrl,
                                                    houseName: t.houseData.name,
                                                    houseImg: t.houseData.designSketch[0],
                                                    statusAndTime: t.status_time,
                                                    statusAndTimeWidth: a,
                                                    statusAndTimeBgWidth: n,
                                                    tabs: r,
                                                    mixPrice: o,
                                                    nearPlacePrice: u,
                                                    comment: i,
                                                    avatar: t.counselor.belongPfsId === t.pfsId ? "https://wx.qlogo.cn".concat(t.counselor.avatar.split(".cn")[1]) : "",
                                                    name: t.counselor.name,
                                                    tel: t.counselor.phone
                                                }).palette(), console.log(t.template), t.show = !0;
                                            },
                                            fail: function fail(e) {
                                                console.log(e);
                                            }
                                        }), a.next = 37;
                                        break;

                                      case 34:
                                        a.prev = 34, a.t0 = a["catch"](0), console.log(a.t0);

                                      case 37:
                                      case "end":
                                        return a.stop();
                                    }
                                }
                            }, a, null, [ [ 0, 34 ] ]);
                        }))();
                    },
                    base64Encode: function base64Encode(e) {
                        var t, a, n, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = 0, s = e.length, o = "";
                        while (c < s) {
                            if (t = 255 & e.charCodeAt(c++), c == s) {
                                o += r.charAt(t >> 2), o += r.charAt((3 & t) << 4), o += "==";
                                break;
                            }
                            if (a = e.charCodeAt(c++), c == s) {
                                o += r.charAt(t >> 2), o += r.charAt((3 & t) << 4 | (240 & a) >> 4), o += r.charAt((15 & a) << 2), 
                                o += "=";
                                break;
                            }
                            n = e.charCodeAt(c++), o += r.charAt(t >> 2), o += r.charAt((3 & t) << 4 | (240 & a) >> 4), 
                            o += r.charAt((15 & a) << 2 | (192 & n) >> 6), o += r.charAt(63 & n);
                        }
                        return o;
                    }
                }
            };
            t.default = u;
        }).call(this, a("543d")["default"]);
    },
    b251: function b251(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("ab7f"), r = a.n(n);
        for (var c in n) {
            "default" !== c && function(e) {
                a.d(t, e, function() {
                    return n[e];
                });
            }(c);
        }
        t["default"] = r.a;
    },
    b9ce: function b9ce(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("7dc9"), r = a("b251");
        for (var c in r) {
            "default" !== c && function(e) {
                a.d(t, e, function() {
                    return r[e];
                });
            }(c);
        }
        a("818f");
        var s, o = a("f0c5"), i = Object(o["a"])(r["default"], n["b"], n["c"], !1, null, "1649f8c1", null, !1, n["a"], s);
        t["default"] = i.exports;
    }
}, [ [ "2bdd", "common/runtime", "common/vendor", "myPackageA/common/vendor" ] ] ]);