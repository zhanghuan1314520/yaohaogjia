(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/message/index" ], {
    "176f": function f(t, e, n) {},
    "2f42": function f42(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            o(n("66fd"));
            var e = o(n("ce2d"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "3ceb": function ceb(t, e, n) {
        "use strict";
        var o = n("176f"), i = n.n(o);
        i.a;
    },
    "51c8": function c8(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("99ef")), i = n("2f62");
            function r(t) {
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
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var u = {
                name: "messageList",
                data: function data() {
                    return {
                        isLoading: !1,
                        userList: o.default,
                        friendList: [],
                        isActive: 0
                    };
                },
                computed: a({}, (0, i.mapState)({
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
                        console.log(t, "valvalvalval"), t && (this.updateUserInfo(), this.getConversationList());
                    }
                },
                methods: {
                    follow: function follow() {
                        t.navigateTo({
                            url: "/myPackageA/pages/urlArticle?url=https://mp.weixin.qq.com/s/AEtu0_GzUjOLXOnL23jWEA"
                        });
                    },
                    createGroup: function createGroup() {
                        var t = this.tim.createGroup({
                            type: this.$TIM.TYPES.GRP_PUBLIC,
                            name: "分组",
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
                        "[自定义消息]" == t && (t = "[图片]");
                        var e = '<div style="align-items: center;white-space: nowrap; width: 300rpx;text-overflow: ellipsis;overflow: hidden;">' + t + "</div>";
                        return e;
                    },
                    changeTabBtn: function changeTabBtn(t) {
                        this.isActive = t, this.isSDKReady && this.getConversationList();
                    },
                    getConversationList: function getConversationList() {
                        var t = this;
                        console.log("拉取会话列表");
                        var e = this.tim.getConversationList();
                        e.then(function(e) {
                            var n = e.data.conversationList;
                            console.log("conversationList", n), n.length && t.$store.commit("updateConversationList", n);
                        }).catch(function(t) {
                            console.warn("getConversationList error:", t);
                        });
                    },
                    toRoom: function toRoom(e) {
                        var n = this;
                        this.isLoading || (this.isLoading = !0, this.$store.commit("updateConversationActive", e), 
                        this.$request("/tim/user/info/bychatId/".concat(e.toAccount)).then(function(e) {
                            n.isLoading = !1, t.navigateTo({
                                url: "../message/mychat?data=".concat(encodeURIComponent(JSON.stringify(e.data)))
                            });
                        }));
                    },
                    chatList: function chatList() {
                        this.$request("user/chat/list", {}, "GET").then(function(t) {
                            0 == t.code && console.log(t.data);
                        });
                    },
                    checkUserToRoom: function checkUserToRoom(e) {
                        e = {
                            user: "im",
                            userId: "a8043f96cfc542e9a21e8adbb8495d16",
                            img: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ0SiaByATslJicxibM978eAmALmZkareAF3lrSxkCvsvtzewzWjicXeyIg8IrhxAKq3kY5icawNsDg6uw/132",
                            userSig: "eJw1jssKgzAURP8l2xZJ0puYCN2KLd3YCK5TE8tFWoMG6YP*e0Xb5cycGeZNqpNJ-CPg4EmmJFC6XazJDyQjPKFk1aPrbAjoSMZmBlIuUrEm6Pw9YotLwSoKu1bLpm0EcK8tZ15Zd7ko0MIx*V-D6wyrQ9FDcHVTlP2rO-oazZhTWdE*33DIY-kcTTRmOgPsf8WIt-knk4xRoSXjny-z9TeL"
                        }, this.$store.commit("createConversationActive", e.userId), t.navigateTo({
                            url: "./mychat"
                        });
                    },
                    timeFliter: function timeFliter(t) {
                        var e = new Date(1e3 * t), n = this.$commen.dateTimeFliter(e);
                        return n;
                    }
                },
                onShow: function onShow() {
                    this.isLogin && 0 === this.conversationList.length && this.loginUser(), this.isSDKReady && this.getConversationList();
                },
                onLoad: function onLoad() {
                    var e = this;
                    console.log("...", this.conversationList, this.isSDKReady);
                    var n = JSON.parse(JSON.stringify(t.getStorageSync("userInfo")));
                    this.friendList = [], o.default.forEach(function(t) {
                        t.userId != n.userId && (console.log(t), e.friendList.push(t));
                    });
                }
            };
            e.default = u;
        }).call(this, n("543d")["default"]);
    },
    "72a4": function a4(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("51c8"), i = n.n(o);
        for (var r in o) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return o[t];
                });
            }(r);
        }
        e["default"] = i.a;
    },
    "7d0d": function d0d(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return o;
        });
        var i = function i() {
            var t = this, e = t.$createElement, n = (t._self._c, t.conversationList && t.conversationList.length > 0 ? t.__map(t.conversationList, function(e, n) {
                var o = t.__get_orig(e), i = t.nodesFliter(e.lastMessage.messageForShow), r = t.timeFliter(e.lastMessage.lastTime).slice(0, -3);
                return {
                    $orig: o,
                    m0: i,
                    g0: r
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, r = [];
    },
    ce2d: function ce2d(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("7d0d"), i = n("72a4");
        for (var r in i) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return i[t];
                });
            }(r);
        }
        n("3ceb");
        var s, a = n("f0c5"), c = Object(a["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
        e["default"] = c.exports;
    }
}, [ [ "2f42", "common/runtime", "common/vendor" ] ] ]);