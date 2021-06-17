(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/my" ], {
    "0730": function _(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = c(n("a34a")), o = c(n("99ef")), a = (n("88b3"), n("2f62"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, r, o, a, c) {
                try {
                    var i = e[a](c), u = i.value;
                } catch (s) {
                    return void n(s);
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);
                        function c(e) {
                            i(a, r, o, c, u, "next", e);
                        }
                        function u(e) {
                            i(a, r, o, c, u, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        f(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var d = {
                data: function data() {
                    return {
                        userName: e.getStorageSync("user_nm"),
                        userAvt: e.getStorageSync("user_avt"),
                        user: "",
                        data: null,
                        pwd: "",
                        userList: "",
                        task: {
                            src: "https://cdn.lottery.okgoes.com/myicon1.png",
                            name: "顾问之家",
                            page: "/home/pages/myhouse",
                            id: 2
                        },
                        myiconData: [ {
                            title: "我的服务",
                            content: [ {
                                src: "https://cdn.lottery.okgoes.com/myicon7.png",
                                name: "顾问入驻",
                                page: "/myPackageA/pages/my/counselorCheck",
                                id: 1
                            }, {
                                src: "https://cdn.lottery.okgoes.com/myicon2.png",
                                name: "服务号",
                                id: 3,
                                page: "/myPackageA/pages/urlArticle?url=https://mp.weixin.qq.com/s/AEtu0_GzUjOLXOnL23jWEA"
                            }, {
                                src: "https://cdn.lottery.okgoes.com/myicon3.png",
                                name: "加入购房团",
                                id: 4,
                                page: "/myPackageA/pages/urlArticle?url=https://mp.weixin.qq.com/s/diChXDVh-10oNXVq8RJdVw"
                            }, {
                                src: "https://cdn.lottery.okgoes.com/kefu-icon.png",
                                name: "摇号大师客服",
                                id: 8,
                                page: "/myPackageA/pages/urlArticle?url=https://mp.weixin.qq.com/s/C8YD2ox7KJ4IWLYaoLuxyw"
                            } ]
                        }, {
                            title: "其他服务",
                            content: [ {
                                src: "https://cdn.lottery.okgoes.com/myicon4.png",
                                name: "商务合作",
                                id: 5,
                                page: "/myPackageA/pages/urlArticle?url=https://mp.weixin.qq.com/s/A0_329R7H-IKiDIGy5eWeA"
                            }, {
                                src: "https://cdn.lottery.okgoes.com/myicon6.png",
                                name: "在线客服",
                                id: 7
                            } ]
                        } ],
                        sessionKey: "",
                        openId: "",
                        chatId: "",
                        token: "",
                        userType: "",
                        userInfo: {
                            avatarUrl: "",
                            city: "",
                            country: "",
                            gender: 1,
                            language: "",
                            nickName: ""
                        },
                        needBack: !1
                    };
                },
                computed: l({}, (0, a.mapState)({
                    isLogin: function isLogin(e) {
                        return e.isLogin;
                    },
                    isSDKReady: function isSDKReady(e) {
                        return e.isSDKReady;
                    }
                })),
                onLoad: function onLoad(e) {
                    var t = e.needBack;
                    t && (this.needBack = !0);
                },
                created: function created() {},
                onShow: function onShow() {
                    this.getData();
                },
                methods: {
                    getData: function getData() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var o, a, c;
                            return r.default.wrap(function(n) {
                                while (1) {
                                    switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, t.$request("seller/settle/apply/detail", {}, "get");

                                      case 2:
                                        o = n.sent, a = o.data, c = o.code, "40011" === c ? 2 === t.myiconData[0]["content"][1].id && t.myiconData[0]["content"].splice(1, 1) : 1 === a.status && (e.setStorageSync("user_nm", a.name), 
                                        2 !== t.myiconData[0]["content"][1].id && t.myiconData[0]["content"].splice(1, 0, t.task)), 
                                        t.userAvt = e.getStorageSync("user_avt"), t.userName = e.getStorageSync("user_nm");

                                      case 8:
                                      case "end":
                                        return n.stop();
                                    }
                                }
                            }, n);
                        }))();
                    },
                    curIndex: function curIndex(t) {
                        var n = this;
                        return u(r.default.mark(function o() {
                            var a;
                            return r.default.wrap(function(r) {
                                while (1) {
                                    switch (r.prev = r.next) {
                                      case 0:
                                        if (a = t.id, n.userName || 1 !== a && 2 !== a) {
                                            r.next = 3;
                                            break;
                                        }
                                        return r.abrupt("return");

                                      case 3:
                                        e.navigateTo({
                                            url: t.page
                                        });

                                      case 4:
                                      case "end":
                                        return r.stop();
                                    }
                                }
                            }, o);
                        }))();
                    },
                    toMyFocus: function toMyFocus() {
                        var t = e.getStorageSync("userInfo");
                        t ? e.navigateTo({
                            url: "./myFocus"
                        }) : this.login();
                    },
                    toMylottery: function toMylottery() {
                        var t = e.getStorageSync("userInfo");
                        t ? e.navigateTo({
                            url: "/myPackageA/pages/myLottery"
                        }) : this.login();
                    },
                    loginBtn: function loginBtn() {
                        var t = this;
                        if (this.user && this.pwd) {
                            var n = null;
                            if (o.default.forEach(function(e) {
                                e.user == t.user && (n = e);
                            }), n) {
                                var r = this.tim.login({
                                    userID: n.userId,
                                    userSig: n.userSig
                                });
                                r.then(function(r) {
                                    t.$store.commit("toggleIsLogin", !0), e.setStorageSync("userInfo", JSON.stringify(n)), 
                                    e.setStorageSync("userTIMInfo", JSON.stringify(r.data)), e.reLaunch({
                                        url: "../tim/record"
                                    });
                                }).catch(function(e) {
                                    console.warn("login error:", e);
                                });
                            } else e.showToast({
                                icon: "none",
                                title: "用户不存在",
                                duration: 1500
                            });
                        } else e.showToast({
                            icon: "none",
                            title: "请将账户密码输入完整",
                            duration: 1500
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, n("543d")["default"]);
    },
    "8cc0": function cc0(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("b6d7"), o = n("bd09");
        for (var a in o) {
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return o[e];
                });
            }(a);
        }
        n("d599");
        var c, i = n("f0c5"), u = Object(i["a"])(o["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], c);
        t["default"] = u.exports;
    },
    b6d7: function b6d7(e, t, n) {
        "use strict";
        var r;
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return r;
        });
        var o = function o() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, a = [];
    },
    b9b1: function b9b1(e, t, n) {},
    bd09: function bd09(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("0730"), o = n.n(r);
        for (var a in r) {
            "default" !== a && function(e) {
                n.d(t, e, function() {
                    return r[e];
                });
            }(a);
        }
        t["default"] = o.a;
    },
    d599: function d599(e, t, n) {
        "use strict";
        var r = n("b9b1"), o = n.n(r);
        o.a;
    },
    fee9: function fee9(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            r(n("66fd"));
            var t = r(n("8cc0"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "fee9", "common/runtime", "common/vendor" ] ] ]);