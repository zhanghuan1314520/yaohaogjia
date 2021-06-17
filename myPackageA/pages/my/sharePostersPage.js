require("../../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/my/sharePostersPage" ], {
    "081f": function f(e, t, n) {
        "use strict";
        var a;
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var c = function c() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, r = [];
    },
    2196: function _(e, t, n) {
        "use strict";
        var a = n("a437"), c = n.n(a);
        c.a;
    },
    a437: function a437(e, t, n) {},
    ab48: function ab48(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("a34a")), c = (n("2afc"), r(n("3be4")));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, a, c, r, o) {
                try {
                    var s = e[r](o), i = s.value;
                } catch (u) {
                    return void n(u);
                }
                s.done ? t(i) : Promise.resolve(i).then(a, c);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, c) {
                        var r = e.apply(t, n);
                        function s(e) {
                            o(r, a, c, s, i, "next", e);
                        }
                        function i(e) {
                            o(r, a, c, s, i, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var i = {
                data: function data() {
                    return {
                        template: {},
                        show: !1,
                        src: "",
                        id: "",
                        newsDetail: null,
                        userinfo: null,
                        qrcodeUrl: ""
                    };
                },
                onShareAppMessage: function onShareAppMessage(t) {
                    var n = "";
                    if (this.userinfo) {
                        n = "/myPackageA/pages/newsInfo?userId=".concat(this.userinfo.userId, "&newsId=").concat(this.id);
                        var a = e.getStorageSync("chatId");
                        a && (n = "".concat(n, "&chatId=").concat(a));
                    } else n = "/myPackageA/pages/newsInfo?newsId=".concat(this.id);
                    return {
                        title: this.newsDetail.title,
                        path: n
                    };
                },
                onLoad: function onLoad(e) {
                    this.id = e.id, this.queryData();
                },
                watch: {
                    isLogin: function isLogin(e) {
                        e && this.queryData();
                    }
                },
                methods: {
                    onImgOk: function onImgOk(t) {
                        this.src = t.detail.path;
                        var n = wx.getFileSystemManager();
                        n.unlink({
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
                                    title: "已存入系统相册",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    queryData: function queryData() {
                        var t = this;
                        return s(a.default.mark(function n() {
                            var r, o, s, i, u, l, f, d, h, g, v, p, m, w;
                            return a.default.wrap(function(n) {
                                while (1) {
                                    switch (n.prev = n.next) {
                                      case 0:
                                        if (e.showLoading({
                                            title: "正在加载...",
                                            mask: !0
                                        }), n.prev = 1, r = "", o = e.getStorageSync("chatId"), !o) {
                                            n.next = 12;
                                            break;
                                        }
                                        return n.next = 7, t.$request("tim/user/info/bychatId/".concat(o));

                                      case 7:
                                        s = n.sent, t.userinfo = s.data, r = t.base64Encode("myPackageA/pages/newsInfo?".concat(t.id, "+").concat(s.data.userId)), 
                                        n.next = 13;
                                        break;

                                      case 12:
                                        r = t.base64Encode("myPackageA/pages/newsInfo?".concat(t.id));

                                      case 13:
                                        return r = r.replaceAll("+", "-"), r = r.replaceAll("/", "*"), r = r.replaceAll("=", "."), 
                                        n.next = 18, t.$request("invitor/qrcode/build?path=".concat(r), {}, "GET", {
                                            "x-token": e.getStorageSync("user_tk")
                                        }, "arraybuffer");

                                      case 18:
                                        return i = n.sent, n.next = 21, t.$request("news/".concat(t.id));

                                      case 21:
                                        u = n.sent, t.newsDetail = u.data, l = wx.arrayBufferToBase64(i), f = e.getStorageSync("user_avt") ? "https://wx.qlogo.cn".concat(e.getStorageSync("user_avt").split(".cn")[1]) : "", 
                                        d = e.getStorageSync("user_nm") || "", t.userinfo && 1 === t.userinfo.userType && (d = ""), 
                                        h = 0, g = 0, v = 0, f && d && (p = e.createCanvasContext("myCanvas"), p.font = "bold 18px PingFangSC-Regular", 
                                        v = p.measureText(d).width, console.log(v), v > 70 && (v = 70), h = 262 - v, g = h - 30), 
                                        m = wx.getFileSystemManager(), w = new Date().getTime(), m.writeFile({
                                            filePath: "".concat(wx.env.USER_DATA_PATH, "/qrcode").concat(w, ".png"),
                                            data: l,
                                            encoding: "base64",
                                            success: function success(e) {
                                                t.qrcodeUrl = "".concat(wx.env.USER_DATA_PATH, "/qrcode").concat(w, ".png"), t.template = new c.default({
                                                    qrcode: "".concat(wx.env.USER_DATA_PATH, "/qrcode").concat(w, ".png"),
                                                    avatar: f,
                                                    name: d,
                                                    nameStart: h,
                                                    nameWidth: v,
                                                    avatarStart: g,
                                                    title: t.newsDetail.title,
                                                    content: t.newsDetail.content,
                                                    pic: t.newsDetail.picture
                                                }).palette(), console.log(t.template), t.show = !0;
                                            },
                                            fail: function fail(e) {
                                                console.log(e);
                                            }
                                        }), n.next = 39;
                                        break;

                                      case 36:
                                        n.prev = 36, n.t0 = n["catch"](1), console.log(n.t0);

                                      case 39:
                                      case "end":
                                        return n.stop();
                                    }
                                }
                            }, n, null, [ [ 1, 36 ] ]);
                        }))();
                    },
                    base64Encode: function base64Encode(e) {
                        var t, n, a, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", r = 0, o = e.length, s = "";
                        while (r < o) {
                            if (t = 255 & e.charCodeAt(r++), r == o) {
                                s += c.charAt(t >> 2), s += c.charAt((3 & t) << 4), s += "==";
                                break;
                            }
                            if (n = e.charCodeAt(r++), r == o) {
                                s += c.charAt(t >> 2), s += c.charAt((3 & t) << 4 | (240 & n) >> 4), s += c.charAt((15 & n) << 2), 
                                s += "=";
                                break;
                            }
                            a = e.charCodeAt(r++), s += c.charAt(t >> 2), s += c.charAt((3 & t) << 4 | (240 & n) >> 4), 
                            s += c.charAt((15 & n) << 2 | (192 & a) >> 6), s += c.charAt(63 & a);
                        }
                        return s;
                    }
                }
            };
            t.default = i;
        }).call(this, n("543d")["default"]);
    },
    b9f3: function b9f3(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            a(n("66fd"));
            var t = a(n("d4ca"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    d4ca: function d4ca(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("081f"), c = n("e02d");
        for (var r in c) {
            "default" !== r && function(e) {
                n.d(t, e, function() {
                    return c[e];
                });
            }(r);
        }
        n("2196");
        var o, s = n("f0c5"), i = Object(s["a"])(c["default"], a["b"], a["c"], !1, null, "6eebe538", null, !1, a["a"], o);
        t["default"] = i.exports;
    },
    e02d: function e02d(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ab48"), c = n.n(a);
        for (var r in a) {
            "default" !== r && function(e) {
                n.d(t, e, function() {
                    return a[e];
                });
            }(r);
        }
        t["default"] = c.a;
    }
}, [ [ "b9f3", "common/runtime", "common/vendor", "myPackageA/common/vendor" ] ] ]);