var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("../../@babel/runtime/helpers/typeof"));

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-clientdb/uni-clientdb" ], {
    5035: function _(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8ad3"), r = n("f419");
        for (var i in r) {
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(i);
        }
        var o, c = n("f0c5"), u = Object(c["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        e["default"] = u.exports;
    },
    "518d": function d(t, e, n) {
        "use strict";
        (function(t) {
            function n(t) {
                return o(t) || i(t) || r(t) || a();
            }
            function a() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function r(t, e) {
                if (t) {
                    if ("string" === typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                }
            }
            function i(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }
            function o(t) {
                if (Array.isArray(t)) return c(t);
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) {
                    a[n] = t[n];
                }
                return a;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = {
                load: "load",
                error: "error"
            }, l = {
                add: "add",
                replace: "replace"
            }, d = [ "collection", "action", "field", "pageCurrent", "pageSize", "getcount", "orderby", "where" ], s = {
                name: "UniClientdb",
                props: {
                    options: {
                        type: [ Object, Array ],
                        default: function _default() {
                            return {};
                        }
                    },
                    collection: {
                        type: String,
                        default: ""
                    },
                    action: {
                        type: String,
                        default: ""
                    },
                    field: {
                        type: String,
                        default: ""
                    },
                    pageData: {
                        type: String,
                        default: "add"
                    },
                    pageCurrent: {
                        type: Number,
                        default: 1
                    },
                    pageSize: {
                        type: Number,
                        default: 20
                    },
                    getcount: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    orderby: {
                        type: String,
                        default: ""
                    },
                    where: {
                        type: [ String, Object ],
                        default: ""
                    },
                    getone: {
                        type: [ Boolean, String ],
                        default: !1
                    },
                    manual: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function data() {
                    return {
                        loading: !1,
                        dataList: [],
                        paginationInternal: {
                            current: this.pageCurrent,
                            size: this.pageSize,
                            count: 0
                        },
                        errorMessage: ""
                    };
                },
                created: function created() {
                    var t = this;
                    this._isEnded = !1, this.$watch(function() {
                        var e = [];
                        return d.forEach(function(n) {
                            e.push(t[n]);
                        }), e;
                    }, function() {
                        t.clear(), t.reset(), t._execLoadData();
                    }), this.manual || this.loadData();
                },
                methods: {
                    loadData: function loadData(t, e) {
                        var n = null;
                        "object" === (0, _typeof2.default)(t) ? (t.clear && (this.clear(), this.reset()), 
                        void 0 !== t.current && (this.paginationInternal.current = t.current), "function" === typeof e && (n = e)) : "function" === typeof t && (n = t), 
                        this._execLoadData(n);
                    },
                    loadMore: function loadMore() {
                        this._isEnded || this._execLoadData();
                    },
                    refresh: function refresh() {
                        this.clear(), this._execLoadData();
                    },
                    clear: function clear() {
                        this._isEnded = !1, this.dataList = [];
                    },
                    reset: function reset() {
                        this.paginationInternal.current = 1;
                    },
                    remove: function remove(e) {
                        var n = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = a.action, i = a.callback, o = a.confirmTitle, c = a.confirmContent;
                        t.showModal({
                            title: o || "提示",
                            content: c || "是否删除该数据",
                            showCancel: !0,
                            success: function success(t) {
                                t.confirm && n._execRemove(e, r, i);
                            }
                        });
                    },
                    _execLoadData: function _execLoadData(t) {
                        var e = this;
                        this.loading || (this.loading = !0, this.errorMessage = "", this._getExec().then(function(a) {
                            e.loading = !1;
                            var r = a.result, i = r.data, o = r.count;
                            if (e._isEnded = i.length < e.pageSize, t && t(i, e._isEnded), e._dispatchEvent(u.load, i), 
                            e.getone) e.dataList = i.length ? i[0] : void 0; else if (e.pageData === l.add) {
                                var c;
                                (c = e.dataList).push.apply(c, n(i)), e.dataList.length && e.paginationInternal.current++;
                            } else e.pageData === l.replace && (e.dataList = i, e.paginationInternal.count = o);
                        }).catch(function(n) {
                            e.loading = !1, e.errorMessage = n, t && t(), e.$emit(u.error, n);
                        }));
                    },
                    removeData: function removeData(t) {
                        for (var e = t.slice(0), n = this.dataList, a = n.length - 1; a >= 0; a--) {
                            var r = e.indexOf(n[a]._id);
                            r >= 0 && (n.splice(a, 1), e.splice(r, 1));
                        }
                    },
                    _dispatchEvent: function _dispatchEvent(t, e) {
                        this._changeDataFunction ? this._changeDataFunction(e, this._isEnded) : this.$emit(t, e, this._isEnded);
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d")["default"]);
    },
    "8ad3": function ad3(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return a;
        });
        var r = function r() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    f419: function f419(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("518d"), r = n.n(a);
        for (var i in a) {
            "default" !== i && function(t) {
                n.d(e, t, function() {
                    return a[t];
                });
            }(i);
        }
        e["default"] = r.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-clientdb/uni-clientdb-create-component", {
    "components/uni-clientdb/uni-clientdb-create-component": function componentsUniClientdbUniClientdbCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("5035"));
    }
}, [ [ "components/uni-clientdb/uni-clientdb-create-component" ] ] ]);