(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/t-table/t-th" ], {
    "58e4": function e4(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("f26e"), i = n.n(r);
        for (var o in r) {
            "default" !== o && function(t) {
                n.d(e, t, function() {
                    return r[t];
                });
            }(o);
        }
        e["default"] = i.a;
    },
    "5e29": function e29(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return r;
        });
        var i = function i() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    "619c": function c(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("5e29"), i = n("58e4");
        for (var o in i) {
            "default" !== o && function(t) {
                n.d(e, t, function() {
                    return i[t];
                });
            }(o);
        }
        n("bbde");
        var a, c = n("f0c5"), l = Object(c["a"])(i["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
        e["default"] = l.exports;
    },
    bbde: function bbde(t, e, n) {
        "use strict";
        var r = n("f92f"), i = n.n(r);
        i.a;
    },
    f26e: function f26e(t, e, n) {
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
                    fontSize: "15",
                    color: "#3b4246",
                    thAlign: "center"
                };
            },
            inject: [ "table", "tr" ],
            created: function created() {
                this.thBorder = this.table.border, this.borderColor = this.table.borderColor, this.fontSize = this.tr.fontSize, 
                this.color = this.tr.color, this.align ? this.thAlign = this.align : this.thAlign = this.tr.align;
            },
            computed: {
                thAlignCpd: function thAlignCpd() {
                    var t = "";
                    switch (this.thAlign) {
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
    f92f: function f92f(t, e, n) {}
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/t-table/t-th-create-component", {
    "components/t-table/t-th-create-component": function componentsTTableTThCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("619c"));
    }
}, [ [ "components/t-table/t-th-create-component" ] ] ]);