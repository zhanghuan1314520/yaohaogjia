(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/my/daytask" ], {
    "5f1b": function f1b(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                data: function data() {
                    return {
                        Issignin: !1,
                        num1: 100,
                        num2: 10,
                        pfsId: 0,
                        list: [],
                        icon: [ "https://cdn.lottery.okgoes.com/task1.png", "https://cdn.lottery.okgoes.com/task-old-user.png", "https://cdn.lottery.okgoes.com/task-new-user.png", "https://cdn.lottery.okgoes.com/task-adviser.png", "https://cdn.lottery.okgoes.com/task-adviser.png" ],
                        info: {}
                    };
                },
                onLoad: function onLoad(t) {
                    this.pfsId = t.pfsId, this.getData();
                },
                computed: {
                    getTitle: function getTitle() {
                        var t = this.Issignin;
                        return function(n) {
                            switch (n) {
                              case 1:
                                return t ? "已签到" : "签到";

                              case 2:
                                return "分享";

                              case 3:
                                return "分享";

                              case 4:
                                return "完善楼盘信息";

                              case 5:
                                return "邀请";
                            }
                        };
                    }
                },
                methods: {
                    confirm: function confirm() {},
                    getData: function getData() {
                        var t = this;
                        this.$request("/every/day/task/list", {}, "get").then(function(n) {
                            t.$request("/user/signin/status", {}, "get").then(function(n) {
                                1 === n.data && (t.Issignin = !0);
                            }), t.list = n.data;
                        }), this.$request("/system/user/data/get").then(function(n) {
                            t.info = n.data;
                        });
                    },
                    signIn: function signIn(n) {
                        switch (n) {
                          case 1:
                            t.navigateTo({
                                url: "./signIn"
                            });
                            break;

                          case 2:
                            t.navigateTo({
                                url: "/home/pages/houseDis?postersData=" + JSON.stringify(this.info) + "&pfsId=" + this.pfsId
                            });
                            break;

                          case 3:
                            t.navigateTo({
                                url: "/home/pages/houseDis?postersData=" + JSON.stringify(this.info) + "&pfsId=" + this.pfsId
                            });
                            break;

                          case 4:
                            return "完善楼盘信息";

                          case 5:
                            t.navigateTo({
                                url: "/myPackageA/pages/my/counselorShare"
                            });
                            break;
                        }
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d")["default"]);
    },
    "8ea1": function ea1(t, n, e) {
        "use strict";
        e.r(n);
        var s = e("5f1b"), a = e.n(s);
        for (var i in s) {
            "default" !== i && function(t) {
                e.d(n, t, function() {
                    return s[t];
                });
            }(i);
        }
        n["default"] = a.a;
    },
    a4ce: function a4ce(t, n, e) {
        "use strict";
        var s;
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {
            return s;
        });
        var a = function a() {
            var t = this, n = t.$createElement, e = (t._self._c, t.__map(t.list, function(n, e) {
                var s = t.__get_orig(n), a = 4 !== n.sign ? n.label || t.getTitle(n.sign) : null;
                return {
                    $orig: s,
                    m0: a
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, i = [];
    },
    ad9c: function ad9c(t, n, e) {
        "use strict";
        e.r(n);
        var s = e("a4ce"), a = e("8ea1");
        for (var i in a) {
            "default" !== i && function(t) {
                e.d(n, t, function() {
                    return a[t];
                });
            }(i);
        }
        e("ba77");
        var r, o = e("f0c5"), u = Object(o["a"])(a["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], r);
        n["default"] = u.exports;
    },
    ba77: function ba77(t, n, e) {
        "use strict";
        var s = e("f2b3"), a = e.n(s);
        a.a;
    },
    db96: function db96(t, n, e) {
        "use strict";
        (function(t) {
            e("6d7c");
            s(e("66fd"));
            var n = s(e("ad9c"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    f2b3: function f2b3(t, n, e) {}
}, [ [ "db96", "common/runtime", "common/vendor" ] ] ]);