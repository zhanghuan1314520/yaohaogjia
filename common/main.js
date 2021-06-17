(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/main" ], {
    "14f1": function f1(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("56eb");
        for (var a in n) {
            "default" !== a && function(t) {
                o.d(e, t, function() {
                    return n[t];
                });
            }(a);
        }
        o("b570");
        var r, u, i, l, c = o("f0c5"), s = Object(c["a"])(n["default"], r, u, !1, null, null, null, !1, i, l);
        e["default"] = s.exports;
    },
    "2f45": function f45(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(o("99ef"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var r = {
                globalData: {},
                mounted: function mounted() {
                    var t = this;
                    this.tim.on(this.$TIM.EVENT.SDK_READY, this.onReadyStateUpdate, this), this.tim.on(this.$TIM.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage), 
                    this.tim.on(this.$TIM.EVENT.CONVERSATION_LIST_UPDATED, function(e) {
                        t.$store.commit("updateConversationList", e.data);
                    });
                },
                methods: {
                    onReadyStateUpdate: function onReadyStateUpdate(t) {
                        var e = t.name, o = e === this.$TIM.EVENT.SDK_READY;
                        this.$store.commit("toggleIsSDKReady", o);
                    },
                    onReceiveMessage: function onReceiveMessage(t) {
                        var e = t.data;
                        this.$store.commit("pushCurrentMessageList", e);
                    }
                },
                onLaunch: function onLaunch() {
                    var e = this;
                    console.log("App Launch"), this.$request("user/userSig", {}, "GET"), console.log(n.default);
                    var o = t.getMenuButtonBoundingClientRect();
                    t.getSystemInfo({
                        success: function success(t) {
                            var n = t.statusBarHeight, a = o.top, r = n + o.height + 2 * (o.top - n);
                            e.globalData.navHeight = r, e.globalData.navTop = a, e.globalData.windowHeight = t.windowHeight, 
                            e.globalData.statusBarHeight = n, console.log(e.globalData, "navTop");
                        },
                        fail: function fail(t) {
                            console.log(t);
                        }
                    });
                    var a = wx.getUpdateManager();
                    a.onCheckForUpdate(function(t) {
                        console.log(t.hasUpdate);
                    }), a.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success: function success(t) {
                                t.confirm && a.applyUpdate();
                            }
                        });
                    }), a.onUpdateFailed(function() {});
                },
                onShow: function onShow() {
                    console.log("App Show");
                },
                onHide: function onHide() {
                    console.log("App Hide");
                }
            };
            e.default = r;
        }).call(this, o("543d")["default"]);
    },
    "56eb": function eb(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2f45"), a = o.n(n);
        for (var r in n) {
            "default" !== r && function(t) {
                o.d(e, t, function() {
                    return n[t];
                });
            }(r);
        }
        e["default"] = a.a;
    },
    9098: function _(t, e, o) {
        "use strict";
        (function(t, e) {
            o("6d7c");
            var n = g(o("66fd")), a = g(o("14f1")), r = g(o("88b3")), u = g(o("6057")), i = g(o("a13e"));
            o("4dbb");
            var l = g(o("088b")), c = g(o("65e4")), s = g(o("19bd")), f = g(o("76b3")), d = g(o("7a1d")), p = o("2afc");
            function g(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function h(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(o), !0).forEach(function(e) {
                        m(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : h(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }
            function m(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            n.default.prototype.formatTime = u.default, n.default.prototype.utils = r.default, 
            n.default.config.productionTip = !1, n.default.prototype.$TIM = i.default, n.default.prototype.tim = l.default.tim, 
            console.log(l.default.tim), n.default.prototype.$store = c.default, n.default.prototype.$commen = s.default, 
            n.default.prototype.$request = f.default, n.default.use(d.default), a.default.mpType = "app", 
            n.default.filter("dateFormat", function(t, e) {
                if (!t) return "-";
                var o = new Date(t), n = {
                    "M+": o.getMonth() + 1,
                    "d+": o.getDate(),
                    "h+": o.getHours(),
                    "m+": o.getMinutes(),
                    "s+": o.getSeconds(),
                    "q+": Math.floor((o.getMonth() + 3) / 3),
                    S: o.getMilliseconds()
                };
                for (var a in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))), 
                n) {
                    new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
                }
                return e;
            });
            var v = new n.default(b({}, a.default));
            t(v).$mount(), n.default.prototype.checkLogin = function(t, o) {
                var n = e.getStorageSync("user_tk"), a = e.getStorageSync("user_nm"), r = e.getStorageSync("user_avt");
                return "" == n || "" == a ? (e.redirectTo({
                    url: "../login/login?backpage=" + t + "&backtype=" + o
                }), !1) : [ n, a, r ];
            }, n.default.prototype.apiServer = p.APIHOST;
        }).call(this, o("543d")["createApp"], o("543d")["default"]);
    },
    "9a09": function a09(t, e, o) {},
    b570: function b570(t, e, o) {
        "use strict";
        var n = o("9a09"), a = o.n(n);
        a.a;
    }
}, [ [ "9098", "common/runtime", "common/vendor" ] ] ]);