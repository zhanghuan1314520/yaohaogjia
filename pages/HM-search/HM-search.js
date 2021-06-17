(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/HM-search/HM-search" ], {
    "150e": function e(_e, t, o) {
        "use strict";
        o.r(t);
        var r = o("27bf"), n = o("50df");
        for (var i in n) {
            "default" !== i && function(e) {
                o.d(t, e, function() {
                    return n[e];
                });
            }(i);
        }
        o("74ee");
        var s, a = o("f0c5"), d = Object(a["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], s);
        t["default"] = d.exports;
    },
    "27bf": function bf(e, t, o) {
        "use strict";
        var r;
        o.d(t, "b", function() {
            return n;
        }), o.d(t, "c", function() {
            return i;
        }), o.d(t, "a", function() {
            return r;
        });
        var n = function n() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, i = [];
    },
    "2f33": function f33(e, t, o) {},
    "50df": function df(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("a6f2"), n = o.n(r);
        for (var i in r) {
            "default" !== i && function(e) {
                o.d(t, e, function() {
                    return r[e];
                });
            }(i);
        }
        t["default"] = n.a;
    },
    "74ee": function ee(e, t, o) {
        "use strict";
        var r = o("2f33"), n = o.n(r);
        n.a;
    },
    a6f2: function a6f2(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function r() {
                o.e("components/mehaotian-search-revision/mehaotian-search-revision").then(function() {
                    return resolve(o("d981"));
                }.bind(null, o)).catch(o.oe);
            }, n = {
                data: function data() {
                    return {
                        defaultKeyword: "",
                        keyword: "",
                        oldKeywordList: [],
                        hotKeywordList: [],
                        keywordList: [],
                        forbid: "",
                        isShowKeywordList: !1
                    };
                },
                onLoad: function onLoad(e) {
                    var t = e.placeholder;
                    this.defaultKeyword = t, this.init();
                },
                components: {
                    mSearch: r
                },
                methods: {
                    init: function init() {
                        this.loadOldKeyword(), this.loadHotKeyword();
                    },
                    blur: function blur() {
                        e.hideKeyboard();
                    },
                    cancel: function cancel() {
                        this.$refs.mSearch.back();
                    },
                    loadDefaultKeyword: function loadDefaultKeyword() {},
                    loadOldKeyword: function loadOldKeyword() {
                        var t = this;
                        e.getStorage({
                            key: "OldKeys",
                            success: function success(e) {
                                var o = JSON.parse(e.data);
                                t.oldKeywordList = o;
                            }
                        });
                    },
                    hotSearch: function hotSearch(e) {
                        var t = this;
                        this.keyword = e, this.isShowKeywordList = !0, this.$request("propertiesForSale/list", {
                            keyword: e
                        }, "POST").then(function(o) {
                            0 == o.code && (t.keywordList = [], t.keywordList = t.drawCorrelativeKeyword(o.data, e));
                        });
                    },
                    loadHotKeyword: function loadHotKeyword() {
                        var e = this;
                        this.$request("pfs/hot/search/keyword", {}, "GET").then(function(t) {
                            0 == t.code && (e.hotKeywordList = t.data);
                        });
                    },
                    inputChange: function inputChange(e) {
                        var t = this, o = e.detail ? e.detail.value : e;
                        if (!o) return this.keywordList = [], void (this.isShowKeywordList = !1);
                        this.isShowKeywordList = !0, this.$request("propertiesForSale/list", {
                            keyword: o
                        }, "POST").then(function(e) {
                            0 == e.code && (t.keywordList = [], t.keywordList = t.drawCorrelativeKeyword(e.data, o));
                        });
                    },
                    drawCorrelativeKeyword: function drawCorrelativeKeyword(e, t) {
                        for (var o = e.length, r = [], n = 0; n < o; n++) {
                            var i = e[n].name, s = e[n].pfsId, a = i.replace(t, "<span style='color: #9f9f9f;'>" + t + "</span>");
                            a = "<div>" + a + "</div>";
                            var d = {
                                pfsId: s,
                                keyword: i,
                                htmlStr: a
                            };
                            r.push(d);
                        }
                        return r;
                    },
                    setKeyword: function setKeyword(e) {
                        this.keyword = this.keywordList[e].keyword;
                    },
                    oldDelete: function oldDelete() {
                        var t = this;
                        e.showModal({
                            content: "确定清除历史搜索记录？",
                            success: function success(o) {
                                o.confirm ? (t.oldKeywordList = [], e.removeStorage({
                                    key: "OldKeys"
                                })) : o.cancel && console.log("用户点击取消");
                            }
                        });
                    },
                    hotToggle: function hotToggle() {
                        this.forbid = this.forbid ? "" : "_forbid";
                    },
                    doSearch: function doSearch(t, o) {
                        o ? (t = !1 === t ? this.keyword : t, this.keyword = t, this.saveKeyword(t, o), 
                        e.showToast({
                            title: t,
                            icon: "none",
                            duration: 2e3
                        }), e.navigateTo({
                            url: "/home/pages/houseDis?pfsId=" + o
                        })) : e.showToast({
                            title: "没有该楼盘信息",
                            icon: "none",
                            duration: 2e3
                        });
                    },
                    saveKeyword: function saveKeyword(t, o) {
                        var r = this, n = {
                            keyword: t,
                            id: o
                        }, i = [];
                        i.push(n), e.getStorage({
                            key: "OldKeys",
                            success: function success(t) {
                                var i = JSON.parse(t.data), s = i.findIndex(function(e) {
                                    return e.id === o;
                                });
                                -1 == s || i.splice(s, 1), i.unshift(n), i.length > 10 && i.pop(), e.setStorage({
                                    key: "OldKeys",
                                    data: JSON.stringify(i)
                                }), r.oldKeywordList = i;
                            },
                            fail: function fail(o) {
                                var n = i[t];
                                e.setStorage({
                                    key: "OldKeys",
                                    data: JSON.stringify(i)
                                }), r.oldKeywordList = n;
                            }
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, o("543d")["default"]);
    },
    fc1b: function fc1b(e, t, o) {
        "use strict";
        (function(e) {
            o("6d7c");
            r(o("66fd"));
            var t = r(o("150e"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, o("543d")["createPage"]);
    }
}, [ [ "fc1b", "common/runtime", "common/vendor" ] ] ]);