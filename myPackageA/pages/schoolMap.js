require("../common/vendor.js");

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/pages/schoolMap" ], {
    "1ae2": function ae2(t, o, e) {
        "use strict";
        var a;
        e.d(o, "b", function() {
            return n;
        }), e.d(o, "c", function() {
            return i;
        }), e.d(o, "a", function() {
            return a;
        });
        var n = function n() {
            var t = this, o = t.$createElement;
            t._self._c;
        }, i = [];
    },
    "41f5": function f5(t, o, e) {
        "use strict";
        (function(t) {
            e("6d7c");
            a(e("66fd"));
            var o = a(e("c0eb"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(o.default);
        }).call(this, e("543d")["createPage"]);
    },
    4955: function _(t, o, e) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var a = {
            data: function data() {
                return {
                    latitude: 30,
                    longitude: 120,
                    covers: [],
                    curActive: 0,
                    list: [ {
                        name: "",
                        content: "",
                        polygons: []
                    }, {
                        name: "",
                        content: "",
                        polygons: []
                    } ]
                };
            },
            onLoad: function onLoad(t) {
                var o = t.id;
                this.getData(o);
            },
            methods: {
                getData: function getData(t) {
                    var o = this;
                    this.$request("propertiesForSale/".concat(t)).then(function(t) {
                        o.covers = [ {
                            id: 1,
                            latitude: t.data.latitude - 0,
                            longitude: t.data.longitude - 0,
                            callout: {
                                content: t.data.schoolName,
                                color: "#000000",
                                fontSize: 14,
                                borderRadius: 30,
                                bgColor: "#fff",
                                padding: 7,
                                display: "ALWAYS",
                                textAlign: "center"
                            }
                        }, {
                            id: 1,
                            latitude: t.data.middleLatitude - 0,
                            longitude: t.data.middleLongitude - 0,
                            callout: {
                                content: t.data.middleSchoolName,
                                color: "#000000",
                                fontSize: 14,
                                borderRadius: 30,
                                bgColor: "#fff",
                                padding: 7,
                                display: "ALWAYS",
                                textAlign: "center"
                            }
                        } ], o.latitude = t.data.pfsLatitude - 0, o.longitude = t.data.pfsLongitude - 0, 
                        o.list[0].name = t.data.schoolName, o.list[0].content = t.data.briefIntroduction, 
                        o.list[1].name = t.data.middleSchoolName, o.list[1].content = t.data.middleBriefIntroduction;
                        var e = [], a = [];
                        e = t.data.polygons && t.data.polygons.paths.map(function(t) {
                            return {
                                longitude: t.lng,
                                latitude: t.lat
                            };
                        }), a = t.data.middlePolygons && t.data.middlePolygons.paths.map(function(t) {
                            return {
                                longitude: t.lng,
                                latitude: t.lat
                            };
                        }), o.list[0].polygons = [ {
                            zIndex: 1,
                            strokeWidth: 2,
                            strokeColor: "#FEC91A",
                            color: "#FEC91A",
                            fillColor: "#F2E2B2",
                            iconPath: "/static/map-school.png",
                            points: e,
                            latitude: t.data.latitude - 0,
                            longitude: t.data.longitude - 0
                        } ], o.list[1].polygons = [ {
                            zIndex: 1,
                            strokeWidth: 2,
                            strokeColor: "#FEC91A",
                            color: "#FEC91A",
                            fillColor: "#F2E2B2",
                            iconPath: "/static/map-school.png",
                            points: a,
                            latitude: t.data.middleLatitude - 0,
                            longitude: t.data.middleLongitude - 0
                        } ], console.log(o.list);
                    });
                },
                toggleType: function toggleType(t) {
                    this.curActive = t;
                }
            }
        };
        o.default = a;
    },
    "81d9": function d9(t, o, e) {
        "use strict";
        var a = e("c988"), n = e.n(a);
        n.a;
    },
    "9db5": function db5(t, o, e) {
        "use strict";
        e.r(o);
        var a = e("4955"), n = e.n(a);
        for (var i in a) {
            "default" !== i && function(t) {
                e.d(o, t, function() {
                    return a[t];
                });
            }(i);
        }
        o["default"] = n.a;
    },
    c0eb: function c0eb(t, o, e) {
        "use strict";
        e.r(o);
        var a = e("1ae2"), n = e("9db5");
        for (var i in n) {
            "default" !== i && function(t) {
                e.d(o, t, function() {
                    return n[t];
                });
            }(i);
        }
        e("81d9");
        var d, l = e("f0c5"), u = Object(l["a"])(n["default"], a["b"], a["c"], !1, null, "d96a382e", null, !1, a["a"], d);
        o["default"] = u.exports;
    },
    c988: function c988(t, o, e) {}
}, [ [ "41f5", "common/runtime", "common/vendor" ] ] ]);