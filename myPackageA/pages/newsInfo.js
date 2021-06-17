require("../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/newsInfo" ], {
    "0a08": function a08(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("80d1"), r = n.n(o);
        for (var a in o) {
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e];
                });
            }(a);
        }
        t["default"] = r.a;
    },
    "165d": function d(e, t, n) {
        "use strict";
        var o = n("9f43"), r = n.n(o);
        r.a;
    },
    7755: function _(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var r = function r() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, a = [];
    },
    "80d1": function d1(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, r = s(n("a34a")), a = n("2f62"), c = n("88b3");
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, o, r, a, c) {
                try {
                    var s = e[a](c), i = s.value;
                } catch (u) {
                    return void n(u);
                }
                s.done ? t(i) : Promise.resolve(i).then(o, r);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = e.apply(t, n);
                        function c(e) {
                            i(a, o, r, c, s, "next", e);
                        }
                        function s(e) {
                            i(a, o, r, c, s, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var h = {
                onShareAppMessage: function onShareAppMessage(t) {
                    var n = getCurrentPages().pop().route, o = e.getStorageSync("chatId");
                    return "button" === t.from && console.log(t.target), {
                        title: "楼市资讯",
                        path: "/".concat(n, "?newsId=").concat(this.id, "&chatId=").concat(o)
                    };
                },
                onShareTimeline: function onShareTimeline(t) {
                    getCurrentPages().pop().route;
                    var n = e.getStorageSync("chatId");
                    return "button" === t.from && console.log(t.target), {
                        title: "楼市资讯",
                        query: "newsId=".concat(this.id, "&chatId=").concat(n)
                    };
                },
                computed: d({}, (0, a.mapState)({
                    isLogin: function isLogin(e) {
                        return e.isLogin;
                    }
                })),
                onLoad: function onLoad(e) {
                    var t = this;
                    return u(r.default.mark(function n() {
                        var o, a;
                        return r.default.wrap(function(n) {
                            while (1) {
                                switch (n.prev = n.next) {
                                  case 0:
                                    if (e.getCustomers && (t.optionCustomers = e.getCustomers), !e.scene) {
                                        n.next = 13;
                                        break;
                                    }
                                    if (e.scene = t.decodeUrl(e.scene), o = e.scene.split("+"), t.id = o[0], !o[1]) {
                                        n.next = 11;
                                        break;
                                    }
                                    return t.userId = e.userId = o[1], n.next = 9, t.$request("tim/user/info/".concat(t.userId));

                                  case 9:
                                    a = n.sent, null != a.data && t.handleShare({
                                        chatId: a.data.chatId
                                    });

                                  case 11:
                                    n.next = 15;
                                    break;

                                  case 13:
                                    t.id = e.newsId, t.userId = e.userId;

                                  case 15:
                                    t.getData(), t.getUserInfo(t.userId, e.getCustomers), t.getLocationInfo(), e.chatId && t.handleShare({
                                        chatId: e.chatId
                                    });

                                  case 19:
                                  case "end":
                                    return n.stop();
                                }
                            }
                        }, n);
                    }))();
                },
                watch: {},
                data: function data() {
                    return {
                        avatar: e.getStorageSync("user_avt"),
                        customers: !1,
                        optionCustomers: !1,
                        pfsId: "",
                        chatId: "",
                        userId: "",
                        scrolling: !1,
                        isShow: !1,
                        adviser: !1,
                        id: "",
                        url: "",
                        webviewStyles: {
                            progress: {
                                color: "#FF3333"
                            }
                        },
                        info: {}
                    };
                },
                onPageScroll: function onPageScroll() {
                    var e = this;
                    clearTimeout(o), this.scrolling = !0, o = setTimeout(function() {
                        e.scrolling = !1;
                    }, 500);
                },
                onShow: function onShow() {},
                methods: {
                    decodeUrl: function decodeUrl(e) {
                        return decodeURIComponent(e) === e ? e : this.decodeUrl(decodeURIComponent(e));
                    },
                    getLocationInfo: function getLocationInfo() {
                        var t = this;
                        e.getLocation({
                            type: "gcj02",
                            success: function success(n) {
                                t.$request("https://apis.map.qq.com/ws/geocoder/v1?location=" + n.latitude + "," + n.longitude + "&key=KMUBZ-TI6LG-CKSQJ-IPYHU-6XNE3-RMFBN").then(function(t) {
                                    e.setStorageSync("province", t.result.address_component.province);
                                });
                            },
                            fail: function fail(e) {
                                console.log("错误：" + JSON.stringify(e));
                            }
                        });
                    },
                    getData: function getData() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var o;
                            return r.default.wrap(function(n) {
                                while (1) {
                                    switch (n.prev = n.next) {
                                      case 0:
                                        return n.prev = 0, n.next = 3, t.$request("news/".concat(t.id));

                                      case 3:
                                        if (o = n.sent, null != o.data) {
                                            n.next = 7;
                                            break;
                                        }
                                        return e.showToast({
                                            icon: "none",
                                            duration: 2500,
                                            title: o.msg
                                        }), n.abrupt("return");

                                      case 7:
                                        t.url = o.data.url, n.next = 13;
                                        break;

                                      case 10:
                                        n.prev = 10, n.t0 = n["catch"](0), console.log(n.t0);

                                      case 13:
                                      case "end":
                                        return n.stop();
                                    }
                                }
                            }, n, null, [ [ 0, 10 ] ]);
                        }))();
                    },
                    concat: function concat() {
                        this.avatar = e.getStorageSync("user_avt"), this.chooseRoom(0);
                    },
                    getUserInfo: function getUserInfo(t, n) {
                        var o = this;
                        return u(r.default.mark(function a() {
                            var c;
                            return r.default.wrap(function(r) {
                                while (1) {
                                    switch (r.prev = r.next) {
                                      case 0:
                                        if (n) {
                                            r.next = 9;
                                            break;
                                        }
                                        if (null == t) {
                                            r.next = 6;
                                            break;
                                        }
                                        return r.next = 4, o.$request("/seller/user/info/get", {
                                            base64UserId: o.base64Encode(t),
                                            sign: ""
                                        }, "POST").then(function(e) {
                                            o.info = e.data, null !== e.data.pfsName ? o.adviser = !0 : o.isShow = !0;
                                        }).catch(function(e) {
                                            o.isShow = !0, console.log(e, "err");
                                        });

                                      case 4:
                                        r.next = 7;
                                        break;

                                      case 6:
                                        o.isShow = !0;

                                      case 7:
                                        r.next = 21;
                                        break;

                                      case 9:
                                        if (o.isLogin) {
                                            r.next = 14;
                                            break;
                                        }
                                        o.isShow = !0, o.customers = !1, r.next = 21;
                                        break;

                                      case 14:
                                        if (c = e.getStorageSync("chatId"), t) {
                                            r.next = 18;
                                            break;
                                        }
                                        return r.next = 18, o.$request("tim/user/info/bychatId/".concat(c)).then(function(e) {
                                            t = e.data.userId;
                                        }).catch(function(e) {
                                            console.log(e, "err");
                                        });

                                      case 18:
                                        return r.next = 21, o.$request("tim/user/info/".concat(t)).then(function(e) {
                                            o.info = e.data, null !== e.data.pfsName ? (o.customers = !0, o.isShow = !1) : (o.customers = !1, 
                                            o.isShow = !0);
                                        }).catch(function(e) {
                                            o.customers = !1, o.isShow = !0, console.log(e, "err");
                                        });

                                      case 21:
                                        console.log("11111");

                                      case 22:
                                      case "end":
                                        return r.stop();
                                    }
                                }
                            }, a);
                        }))();
                    },
                    navTo: function navTo() {
                        this.isLogin ? e.navigateTo({
                            url: "/myPackageA/pages/my/sharePostersPage?id=".concat(this.id),
                            fail: function fail(e) {
                                console.log(e);
                            }
                        }) : this.wxGetUserInfo(this.navTo);
                    },
                    chooseRoom: (0, c.throttle)(function(t) {
                        var n = e.getStorageSync("user_avt");
                        n || this.wxGetUserInfo(this.concat);
                        var o = this, r = e.getStorageSync("chatId");
                        if (0 === t) {
                            if (this.info.chatId === r) return void e.showToast({
                                icon: "none",
                                duration: 2500,
                                title: "无法与自己聊天"
                            });
                            this.$store.commit("createConversationActive", this.info.chatId), e.navigateTo({
                                url: "/pages/message/mychat?data=".concat(encodeURIComponent(JSON.stringify(this.info)))
                            });
                        } else o.toPhone();
                    }, 2e3),
                    toPhone: function toPhone() {
                        var t = this;
                        e.showModal({
                            title: "",
                            content: "拨通后请说明来自\n【摇号大师】",
                            success: function success(e) {
                                e.confirm && t.phone();
                            }
                        });
                    },
                    phone: function phone() {
                        var t = this;
                        this.info.phone ? this.info.chatId && this.userId && this.info.phone && e.makePhoneCall({
                            phoneNumber: this.info.phone,
                            success: function success() {
                                console.log("成功拨打电话"), t.$request("/add/phone/contack/user", {
                                    toChatId: t.info.chatId,
                                    toUserId: t.userId
                                }, "POST").then(function(e) {
                                    console.log(e, "拨打电话增加数量");
                                });
                            }
                        }) : e.showToast({
                            icon: "none",
                            duration: 2500,
                            title: "电话号码为空"
                        });
                    },
                    base64Encode: function base64Encode(e) {
                        var t, n, o, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, c = e.length, s = "";
                        while (a < c) {
                            if (t = 255 & e.charCodeAt(a++), a == c) {
                                s += r.charAt(t >> 2), s += r.charAt((3 & t) << 4), s += "==";
                                break;
                            }
                            if (n = e.charCodeAt(a++), a == c) {
                                s += r.charAt(t >> 2), s += r.charAt((3 & t) << 4 | (240 & n) >> 4), s += r.charAt((15 & n) << 2), 
                                s += "=";
                                break;
                            }
                            o = e.charCodeAt(a++), s += r.charAt(t >> 2), s += r.charAt((3 & t) << 4 | (240 & n) >> 4), 
                            s += r.charAt((15 & n) << 2 | (192 & o) >> 6), s += r.charAt(63 & o);
                        }
                        return s;
                    }
                }
            };
            t.default = h;
        }).call(this, n("543d")["default"]);
    },
    "9f43": function f43(e, t, n) {},
    b2cb: function b2cb(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("7755"), r = n("0a08");
        for (var a in r) {
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return r[e];
                });
            }(a);
        }
        n("165d");
        var c, s = n("f0c5"), i = Object(s["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], c);
        t["default"] = i.exports;
    },
    d476: function d476(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            o(n("66fd"));
            var t = o(n("b2cb"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "d476", "common/runtime", "common/vendor" ] ] ]);