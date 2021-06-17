require("../../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/my/counselorShare" ], {
    2280: function _(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                data: function data() {
                    return {
                        userInfo: e.getStorageSync("userInfo"),
                        info: {},
                        rankName: "",
                        qrcode: ""
                    };
                },
                onShareAppMessage: function onShareAppMessage(e) {
                    return console.log(this.info.inviteCode), "button" === e.from && console.log(e.target), 
                    {
                        title: "邀你加入摇号大师",
                        path: "/myPackageA/pages/my/counselorCheck?inviteCode=".concat(this.info.inviteCode),
                        imageUrl: "https://cdn.lottery.okgoes.com/share-img.png"
                    };
                },
                onLoad: function onLoad() {
                    this.queryData();
                },
                methods: {
                    queryData: function queryData() {
                        var e = this;
                        this.$request("/user/login/info").then(function(t) {
                            "40011" !== t.code && (e.rankName = t.data.userTitle);
                        }), this.$request("/system/user/data/get").then(function(t) {
                            e.info = t.data, t.data.inviteCode || (e.info.inviteCode = t.data.invitorCode), 
                            console.log(e.info.inviteCode, "inviteCode");
                        }), this.$request("/invitor/qrcode").then(function(t) {
                            var n = t.data;
                            e.qrcode = n.qrcode;
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d")["default"]);
    },
    "5b5a": function b5a(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return o;
        });
        var a = function a() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, i = [];
    },
    "6f52": function f52(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("5b5a"), a = n("fd9d");
        for (var i in a) {
            "default" !== i && function(e) {
                n.d(t, e, function() {
                    return a[e];
                });
            }(i);
        }
        n("e77b");
        var r, u = n("f0c5"), c = Object(u["a"])(a["default"], o["b"], o["c"], !1, null, "514fe3ee", null, !1, o["a"], r);
        t["default"] = c.exports;
    },
    "9b2a": function b2a(e, t, n) {
        "use strict";
        (function(e) {
            n("6d7c");
            o(n("66fd"));
            var t = o(n("6f52"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "9e90": function e90(e, t, n) {},
    e77b: function e77b(e, t, n) {
        "use strict";
        var o = n("9e90"), a = n.n(o);
        a.a;
    },
    fd9d: function fd9d(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2280"), a = n.n(o);
        for (var i in o) {
            "default" !== i && function(e) {
                n.d(t, e, function() {
                    return o[e];
                });
            }(i);
        }
        t["default"] = a.a;
    }
}, [ [ "9b2a", "common/runtime", "common/vendor" ] ] ]);