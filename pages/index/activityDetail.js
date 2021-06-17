(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/index/activityDetail" ], {
    "38f7": function f7(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function u(t, e, n, a, i, r, u) {
                try {
                    var o = t[r](u), c = o.value;
                } catch (f) {
                    return void n(f);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, i);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function o(t) {
                            u(r, a, i, o, c, "next", t);
                        }
                        function c(t) {
                            u(r, a, i, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var c = r({
                name: "activityDetail",
                data: function data() {
                    return {
                        id: "",
                        url: "",
                        webviewStyles: {
                            progress: {
                                color: "#FF3333"
                            }
                        },
                        detail: null
                    };
                },
                watch: {
                    isLogin: function isLogin(t) {
                        t && this.getData();
                    }
                },
                onLoad: function onLoad(t) {
                    this.isLogin && this.getData();
                },
                onShareAppMessage: function onShareAppMessage() {
                    var t = getCurrentPages().pop().route;
                    return console.log(t), {
                        title: "线下讲座-".concat(this.detail.name),
                        path: "/".concat(t, "?id=").concat(this.id),
                        imageUrl: this.detail.cover
                    };
                },
                methods: {
                    toSignup: function toSignup() {
                        1 !== this.detail.status || this.detail.signup || t.navigateTo({
                            url: "/pages/index/activitySignup?id=".concat(this.id)
                        });
                    },
                    phoneCall: function phoneCall() {
                        t.makePhoneCall({
                            phoneNumber: "13251005618"
                        });
                    },
                    toWxGetUserInfo: function toWxGetUserInfo() {
                        this.wxGetUserInfo(this.getData);
                    },
                    getData: function getData() {
                        var t = this;
                        return o(a.default.mark(function e() {
                            var n, i, r;
                            return a.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.prev = 0, e.next = 3, t.$request("activity/".concat(t.id), {}, "GET");

                                      case 3:
                                        n = e.sent, t.url = n.data.activityUrl, i = 3, r = new Date().getTime(), r < n.data.beginTime ? i = 1 : r < n.data.endTime && (i = 2), 
                                        n.data.status = i, t.detail = n.data, e.next = 15;
                                        break;

                                      case 12:
                                        e.prev = 12, e.t0 = e["catch"](0), console.log(e.t0);

                                      case 15:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e, null, [ [ 0, 12 ] ]);
                        }))();
                    }
                },
                onShow: function onShow() {
                    this.getData();
                }
            }, "onLoad", function(t) {
                this.id = t.id;
            });
            e.default = c;
        }).call(this, n("543d")["default"]);
    },
    "53a1": function a1(t, e, n) {
        "use strict";
        (function(t) {
            n("6d7c");
            a(n("66fd"));
            var e = a(n("5b9c"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "5b9c": function b9c(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ff2f"), i = n("de61");
        for (var r in i) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return i[t];
                });
            }(r);
        }
        n("67e4");
        var u, o = n("f0c5"), c = Object(o["a"])(i["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
        e["default"] = c.exports;
    },
    "67e4": function e4(t, e, n) {
        "use strict";
        var a = n("df87"), i = n.n(a);
        i.a;
    },
    de61: function de61(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("38f7"), i = n.n(a);
        for (var r in a) {
            "default" !== r && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(r);
        }
        e["default"] = i.a;
    },
    df87: function df87(t, e, n) {},
    ff2f: function ff2f(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var i = function i() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
    }
}, [ [ "53a1", "common/runtime", "common/vendor" ] ] ]);