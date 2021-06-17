require("../../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/my/counselorCheck" ], {
    "3a36": function a36(e, t, n) {},
    "426e": function e(_e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            o(n("66fd"));
            var t = o(n("c814"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "6f3d": function f3d(e, t, n) {
        "use strict";
        var o = n("3a36"), i = n.n(o);
        i.a;
    },
    a70d: function a70d(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("e6fe"), i = n.n(o);
        for (var s in o) {
            "default" !== s && function(e) {
                n.d(t, e, function() {
                    return o[e];
                });
            }(s);
        }
        t["default"] = i.a;
    },
    c814: function c814(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("fc51"), i = n("a70d");
        for (var s in i) {
            "default" !== s && function(e) {
                n.d(t, e, function() {
                    return i[e];
                });
            }(s);
        }
        n("6f3d");
        var a, r = n("f0c5"), c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
        t["default"] = c.exports;
    },
    e6fe: function e6fe(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = s(n("a34a")), i = n("2f62");
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, n, o, i, s, a) {
                try {
                    var r = e[s](a), c = r.value;
                } catch (u) {
                    return void n(u);
                }
                r.done ? t(c) : Promise.resolve(c).then(o, i);
            }
            function r(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, i) {
                        var s = e.apply(t, n);
                        function r(e) {
                            a(s, o, i, r, c, "next", e);
                        }
                        function c(e) {
                            a(s, o, i, r, c, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
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
            var f = {
                data: function data() {
                    return {
                        status: -1,
                        phone: "",
                        vx: "",
                        inviteCode: "",
                        vxImg: "",
                        cardImg: "",
                        selectHouse: "",
                        pfsId: "",
                        name: "",
                        userInfo: {
                            avatarUrl: "",
                            city: "",
                            country: "",
                            gender: 1,
                            language: "",
                            nickName: ""
                        },
                        token: "",
                        openId: "",
                        sessionKey: "",
                        userType: ""
                    };
                },
                onUnload: function onUnload() {},
                onLoad: function onLoad(e) {
                    this.getData(e), e.inviteCode && (this.inviteCode = e.inviteCode), console.log(e, "this.inviteCode", this.inviteCode, "初始化options");
                },
                computed: u({}, (0, i.mapState)({
                    isLogin: function isLogin(e) {
                        return e.isLogin;
                    }
                })),
                methods: {
                    getData: function getData(e) {
                        var t = this;
                        return r(o.default.mark(function n() {
                            var i, s;
                            return o.default.wrap(function(n) {
                                while (1) {
                                    switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, t.$request("seller/settle/apply/detail", {}, "get");

                                      case 2:
                                        if (i = n.sent, s = i.data, console.log(s, "初始化邀请码"), null !== s) {
                                            n.next = 7;
                                            break;
                                        }
                                        return n.abrupt("return");

                                      case 7:
                                        t.status = null == s.status || void 0 == s.status ? "" : s.status, "inviteCode" in e || (t.inviteCode = s.inviteCode || ""), 
                                        t.name = s.name || "", t.phone = s.phone || "", t.vx = s.weixinNum || "", t.pfsId = s.pfsId || "", 
                                        t.vxImg = s.weixinQrcode || "", t.cardImg = s.workCardImage || "", t.selectHouse = s.pfsName || "";

                                      case 16:
                                      case "end":
                                        return n.stop();
                                    }
                                }
                            }, n);
                        }))();
                    },
                    checkTel: function checkTel() {
                        var t = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
                        t.test(this.phone) || e.showToast({
                            icon: "none",
                            title: "请输入正确手机号"
                        });
                    },
                    select: function select() {
                        0 !== this.status && 1 !== this.status && e.navigateTo({
                            url: "/pages/my/selectBuilding?isHideTips=true"
                        });
                    },
                    chooseImage: function chooseImage(t) {
                        var n = this;
                        0 !== this.status && 1 !== this.status && e.chooseImage({
                            count: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album" ],
                            success: function success(o) {
                                console.log("chooseImage success", o), console.log(o.tempFilePaths, o.tempFiles);
                                var i = o.tempFilePaths;
                                e.uploadFile({
                                    url: n.apiServer + "upload/file",
                                    filePath: i[0],
                                    name: "files",
                                    formData: {
                                        dir: "userUpload"
                                    },
                                    success: function success(o) {
                                        var i = JSON.parse(o.data);
                                        e.showToast({
                                            title: "上传成功",
                                            icon: "success",
                                            duration: 1e3
                                        }), "vxImg" == t ? n.vxImg = i.data.url : "cardImg" == t && (n.cardImg = i.data.url);
                                    },
                                    fail: function fail(t) {
                                        console.log("uploadImage fail", t), e.showModal({
                                            content: t.errMsg,
                                            showCancel: !1
                                        });
                                    }
                                });
                            },
                            fail: function fail(t) {
                                console.log("chooseImage fail", t), e.getSetting({
                                    success: function success(t) {
                                        var n = t.authSetting["scope.album"];
                                        n || e.showModal({
                                            title: "授权失败",
                                            content: "需要从您的相册获取图片，请在设置界面打开相关权限",
                                            success: function success(t) {
                                                t.confirm && e.openSetting();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    confirm: function confirm() {
                        var t = this;
                        "" !== this.name ? "" !== this.phone ? "" !== this.pfsId ? "" !== this.vx ? "" !== this.vxImg ? "" !== this.cardImg ? this.$request("seller/settle/apply", {
                            inviteCode: this.inviteCode,
                            name: this.name,
                            pfsId: this.pfsId,
                            phone: this.phone,
                            weixinNum: this.vx,
                            weixinQrcode: this.vxImg,
                            workCardImage: this.cardImg
                        }, "POST").then(function(n) {
                            "0" === n.code ? (t.status = 0, e.switchTab({
                                url: "/pages/my/my"
                            }), setTimeout(function(t) {
                                e.showToast({
                                    title: n.msg,
                                    icon: "none",
                                    duration: 2500
                                });
                            }, 500)) : e.showToast({
                                title: n.msg,
                                icon: "none",
                                duration: 2500
                            });
                        }) : e.showToast({
                            title: "名牌工具不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : e.showToast({
                            title: "微信二维码不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : e.showToast({
                            title: "微信号不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : e.showToast({
                            title: "入驻楼盘不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : e.showToast({
                            title: "手机号不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : e.showToast({
                            title: "姓名不能为空",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }
            };
            t.default = f;
        }).call(this, n("543d")["default"]);
    },
    fc51: function fc51(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return o;
        });
        var i = function i() {
            var e = this, t = e.$createElement;
            e._self._c;
            e._isMounted || (e.e0 = function(t) {
                e.vxImg = "";
            }, e.e1 = function(t) {
                e.cardImg = "";
            });
        }, s = [];
    }
}, [ [ "426e", "common/runtime", "common/vendor" ] ] ]);