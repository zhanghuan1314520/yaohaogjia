(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/t-table/t-td" ], {
    "237a": function a(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("23ee"), i = n("7f9d");
        for (var a in i) {
            "default" !== a && function(t) {
                n.d(e, t, function() {
                    return i[t];
                });
            }(a);
        }
        n("da32");
        var o, c = n("f0c5"), l = Object(c["a"])(i["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        e["default"] = l.exports;
    },
    "23ee": function ee(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return r;
        });
        var i = function i() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    },
    "37da": function da(t, e, n) {},
    "7f9d": function f9d(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("8734"), i = n.n(r);
        for (var a in r) {
            "default" !== a && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(a);
        }
        e["default"] = i.a;
    },
    8734: function _(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            props: {
                align: String
            },
            data: function data() {
                return {
                    thBorder: "1",
                    borderColor: "#d0dee5",
                    fontSize: "14",
                    color: "#555c60",
                    tdAlign: "center"
                };
            },
            inject: [ "table", "tr" ],
            created: function created() {
                this.thBorder = this.table.border, this.borderColor = this.table.borderColor, this.fontSize = this.tr.fontSize, 
                this.color = this.tr.color, this.align ? this.tdAlign = this.align : this.tdAlign = this.tr.align;
            },
            computed: {
                tdAlignCpd: function tdAlignCpd() {
                    var t = "";
                    switch (this.tdAlign) {
                      case "left":
                        t = "flex-start";
                        break;

                      case "center":
                        t = "center";
                        break;

                      case "right":
                        t = "flex-end";
                        break;

                      default:
                        t = "center";
                        break;
                    }
                    return t;
                }
            }
        };
        e.default = r;
    },
    da32: function da32(t, e, n) {
        "use strict";
        var r = n("37da"), i = n.n(r);
        i.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/t-table/t-td-create-component", {
    "components/t-table/t-td-create-component": function componentsTTableTTdCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("237a"));
    }
}, [ [ "components/t-table/t-td-create-component" ] ] ]);