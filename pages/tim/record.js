(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/tim/record" ], {
    "0419": function _(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            o(n("66fd"));
            var e = o(n("bf3f"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "39be": function be(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("85fe"), r = n.n(o);
        for (var i in o) {
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(i);
        }
        e["default"] = r.a;
    },
    "58dd": function dd(t, e, n) {},
    "85fe": function fe(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = i(n("99ef")), r = n("2f62");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        a(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var u = {
                name: "record",
                data: function data() {
                    return {
                        userList: o.default,
                        friendList: [],
                        isActive: 0
                    };
                },
                computed: c({}, (0, r.mapState)({
                    isLogin: function isLogin(t) {
                        return t.isLogin;
                    },
                    isSDKReady: function isSDKReady(t) {
                        return t.isSDKReady;
                    },
                    conversationList: function conversationList(t) {
                        return t.conversationList;
                    }
                })),
                watch: {
                    isSDKReady: function isSDKReady(t) {
                        t && (this.updateUserInfo(), this.getConversationList());
                    }
                },
                methods: {
                    createGroup: function createGroup() {
                        var t = this.tim.createGroup({
                            type: this.$TIM.TYPES.GRP_PUBLIC,
                            name: "阿萨德",
                            memberList: [ {
                                userId: "3"
                            }, {
                                userId: "4"
                            } ]
                        });
                        t.then(function(t) {
                            console.log(t.data.group), console.log("sss");
                        }).catch(function(t) {
                            console.warn("createGroup error:", t);
                        });
                    },
                    getGroup: function getGroup() {
                        var t = this.tim.getGroupList();
                        t.then(function(t) {
                            console.log("群组"), console.log(t.data.groupList);
                        }).catch(function(t) {
                            console.warn("getGroupList error:", t);
                        });
                    },
                    outLoginBtn: function outLoginBtn() {
                        var e = this, n = this.tim.logout();
                        n.then(function(n) {
                            e.$store.commit("reset"), t.reLaunch({
                                url: "../index/index"
                            });
                        }).catch(function(t) {
                            console.log("退出失败");
                        });
                    },
                    updateUserInfo: function updateUserInfo() {
                        var e = JSON.parse(t.getStorageSync("userInfo")), n = this.tim.updateMyProfile({
                            nick: e.user,
                            avatar: e.img || t.getStorageSync("user_avt"),
                            gender: this.$TIM.TYPES.GENDER_MALE,
                            selfSignature: "暂无个性签名",
                            allowType: this.$TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
                        });
                        n.then(function(t) {
                            console.log("提交资料成功");
                        }).catch(function(t) {
                            console.warn("updateMyProfile error:", imError);
                        });
                    },
                    nodesFliter: function nodesFliter(t) {
                        var e = '<div style="align-items: center;word-wrap:break-word;">' + t + "</div>";
                        return e;
                    },
                    changeTabBtn: function changeTabBtn(t) {
                        this.isActive = t, this.isSDKReady && this.getConversationList();
                    },
                    getConversationList: function getConversationList() {
                        var t = this, e = this.tim.getConversationList();
                        e.then(function(e) {
                            var n = e.data.conversationList;
                            n.length && t.$store.commit("updateConversationList", n);
                        }).catch(function(t) {
                            console.warn("getConversationList error:", t);
                        });
                    },
                    toRoom: function toRoom(e) {
                        this.$store.commit("updateConversationActive", e), t.navigateTo({
                            url: "./room"
                        });
                    },
                    checkUserToRoom: function checkUserToRoom(e) {
                        this.$store.commit("createConversationActive", e.userId), t.navigateTo({
                            url: "./room"
                        });
                    }
                },
                onShow: function onShow() {
                    this.isSDKReady ? (console.log("2222"), this.getConversationList()) : console.log("333333");
                },
                onLoad: function onLoad() {
                    var e = this;
                    console.log("..."), console.log(this.conversationList);
                    var n = JSON.parse(t.getStorageSync("userInfo"));
                    this.friendList = [], o.default.forEach(function(t) {
                        t.userId != n.userId && (console.log(t), e.friendList.push(t));
                    });
                }
            };
            e.default = u;
        }).call(this, n("543d")["default"]);
    },
    bf3f: function bf3f(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f9ee"), r = n("39be");
        for (var i in r) {
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(i);
        }
        n("e083");
        var s, c = n("f0c5"), a = Object(c["a"])(r["default"], o["b"], o["c"], !1, null, "063a9b76", null, !1, o["a"], s);
        e["default"] = a.exports;
    },
    e083: function e083(t, e, n) {
        "use strict";
        var o = n("58dd"), r = n.n(o);
        r.a;
    },
    f9ee: function f9ee(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        });
        var r = function r() {
            var t = this, e = t.$createElement, n = (t._self._c, 0 == t.isActive && t.conversationList && t.conversationList.length > 0 ? t.__map(t.conversationList, function(e, n) {
                var o = t.__get_orig(e), r = t.nodesFliter(e.lastMessage.messageForShow);
                return {
                    $orig: o,
                    m0: r
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, i = [];
    }
}, [ [ "0419", "common/runtime", "common/vendor" ] ] ]);