(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "myPackageA/common/vendor" ], {
    "3be4": function be4(t, e, o) {
        "use strict";
        function r(t) {
            return d(t) || p(t) || a(t) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(t, e) {
            if (t) {
                if ("string" === typeof t) return n(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? n(t, e) : void 0;
            }
        }
        function p(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function d(t) {
            if (Array.isArray(t)) return n(t);
        }
        function n(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, r = new Array(e); o < e; o++) {
                r[o] = t[o];
            }
            return r;
        }
        function l(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function x(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function h(t, e, o) {
            return e && x(t.prototype, e), o && x(t, o), t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var s = function() {
            function t(e) {
                l(this, t), console.log(e), this.qrcode = e.qrcode, this.avatar = e.avatar, this.name = e.name, 
                this.title = e.title, this.content = e.content, this.pic = e.pic, this.nameStart = e.nameStart, 
                this.nameWidth = e.nameWidth, this.avatarStart = e.avatarStart;
            }
            return h(t, [ {
                key: "palette",
                value: function value() {
                    var t = [], e = [ {
                        type: "image",
                        url: "https://cdn.lottery.okgoes.com/img_bg_leaflet.png",
                        css: {
                            width: "375px",
                            height: "600px",
                            top: "0px",
                            left: "0px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "image",
                        url: "https://cdn.lottery.okgoes.com/logo-rect.png",
                        css: {
                            width: "24px",
                            height: "24px",
                            top: "16px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: "摇号大师",
                        css: {
                            color: "#ffffff",
                            background: "rgba(0,0,0,0)",
                            width: "100px",
                            height: "28.599999999999994px",
                            top: "18px",
                            left: "48px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "20px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "28.860000000000007px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#ffffff",
                            width: "343px",
                            height: "529px",
                            top: "54px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "8px",
                            shadow: "",
                            color: "#ffffff"
                        }
                    }, {
                        type: "image",
                        url: this.pic,
                        css: {
                            width: "311px",
                            height: "140px",
                            top: "70px",
                            left: "32px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: this.title,
                        css: {
                            color: "#000000",
                            background: "#ffffff",
                            width: "312px",
                            height: "68.74749999999999px",
                            top: "226.99999999999997px",
                            left: "32px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            maxLines: "2",
                            lineHeight: "34.13250000000001px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#e8edf8",
                            width: "311px",
                            height: "185px",
                            top: "310px",
                            left: "32px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#e8edf8"
                        }
                    }, {
                        type: "text",
                        text: this.content,
                        css: {
                            color: "#666666",
                            background: "transparent",
                            width: "279px",
                            height: "73.4748px",
                            top: "326px",
                            left: "48px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            maxLines: "4",
                            lineHeight: "24.397800000000004px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "text",
                        text: "长按阅读全文",
                        css: {
                            color: "#306CFE",
                            background: "transparent",
                            width: "90px",
                            height: "21.84px",
                            top: "451px",
                            left: "48px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "14px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "22.2222px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "image",
                        url: "https://cdn.lottery.okgoes.com/img_arrow_down.png",
                        css: {
                            width: "20px",
                            height: "20px",
                            top: "450px",
                            left: "132px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "image",
                        url: this.qrcode,
                        css: {
                            width: "72px",
                            height: "72px",
                            top: "503px",
                            left: "30px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    } ], o = null;
                    return o = this.name ? [ {
                        type: "text",
                        text: "长按识别小程序码，查看全部内容",
                        css: {
                            color: "#666666",
                            background: "transparent",
                            width: "175px",
                            height: "14.689999999999998px",
                            top: "547px",
                            left: "168px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "14.430000000000001px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "right"
                        }
                    }, {
                        type: "image",
                        url: this.avatar,
                        css: {
                            width: "24px",
                            height: "24px",
                            top: "516px",
                            left: this.avatarStart + "px",
                            rotate: "0",
                            borderRadius: "50px",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: "向你推荐",
                        css: {
                            color: "#000000",
                            background: "transparent",
                            width: "80px",
                            height: "20.339999999999996px",
                            top: "518px",
                            left: "263px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "19.98px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "right"
                        }
                    }, {
                        type: "text",
                        text: this.name,
                        css: {
                            color: "#000000",
                            background: "transparent",
                            width: this.nameWidth + "px",
                            height: "20.339999999999996px",
                            top: "518px",
                            left: this.nameStart + "px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "19.98px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    } ] : [ {
                        type: "text",
                        text: "识别小程序码，查看全部内容",
                        css: {
                            color: "#666666",
                            background: "transparent",
                            width: "175px",
                            height: "14.689999999999998px",
                            top: "535px",
                            left: "168px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "13px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "14.430000000000001px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "right"
                        }
                    } ], t.push.apply(t, e), t.push.apply(t, r(o)), {
                        width: "375px",
                        height: "600px",
                        background: "#f8f8f8",
                        views: t
                    };
                }
            } ]), t;
        }();
        e.default = s;
    },
    cb62: function cb62(t, e, o) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function i(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function a(t, e, o) {
            return e && i(t.prototype, e), o && i(t, o), t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var p = function() {
            function t(e) {
                r(this, t), console.log(e), this.qrcode = e.qrcode, this.houseName = e.houseName, 
                this.houseImg = e.houseImg, this.statusAndTime = e.statusAndTime, this.statusAndTimeWidth = e.statusAndTimeWidth, 
                this.statusAndTimeBgWidth = e.statusAndTimeBgWidth, this.tabs = e.tabs, this.mixPrice = e.mixPrice, 
                this.nearPlacePrice = e.nearPlacePrice, this.comment = e.comment, this.avatar = e.avatar, 
                this.name = e.name, this.tel = e.tel;
            }
            return a(t, [ {
                key: "palette",
                value: function value() {
                    var t = [ {
                        type: "image",
                        url: "https://cdn.lottery.okgoes.com/postersPage-bg.png",
                        css: {
                            width: "375px",
                            height: "".concat(this.avatar ? 890 : 842, "px"),
                            top: "0px",
                            left: "0px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "image",
                        url: "https://cdn.lottery.okgoes.com/logo-rect.png",
                        css: {
                            width: "24px",
                            height: "24px",
                            top: "36px",
                            left: "26px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: "摇号大师",
                        css: {
                            color: "#ffffff",
                            background: "rgba(0,0,0,0)",
                            width: "200px",
                            height: "28.599999999999994px",
                            top: "38px",
                            left: "58px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "20px",
                            fontWeight: "normal",
                            maxLines: "2",
                            lineHeight: "28.860000000000007px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "text",
                        text: "教你摇号买房",
                        css: {
                            color: "#ffffff",
                            background: "rgba(0,0,0,0)",
                            width: "240px",
                            height: "51.480000000000004px",
                            top: "98px",
                            left: "26px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "36px",
                            fontWeight: "bold",
                            maxLines: "2",
                            lineHeight: "51.94800000000001px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "image",
                        url: this.houseImg,
                        css: {
                            width: "343px",
                            height: "248px",
                            top: "165px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "16px",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#ffffff",
                            width: "343px",
                            height: "201px",
                            top: "399px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#ffffff"
                        }
                    }, {
                        type: "text",
                        text: this.houseName,
                        css: {
                            color: "#000000",
                            background: "rgba(0,0,0,0)",
                            width: "295px",
                            height: "31.459999999999997px",
                            top: "421px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "22px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "31.746000000000006px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#EBF2FC",
                            width: this.statusAndTimeBgWidth + "px",
                            height: "20px",
                            top: "455px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "2px",
                            shadow: "",
                            color: "#EBF2FC"
                        }
                    }, {
                        type: "text",
                        text: this.statusAndTime,
                        css: {
                            color: "#306CFE",
                            background: "rgba(0,0,0,0)",
                            width: this.statusAndTimeWidth + "px",
                            height: "13.559999999999999px",
                            top: "457px",
                            left: "43px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    } ];
                    this.tabs.forEach(function(e) {
                        t.push({
                            type: "rect",
                            css: {
                                background: "#EBF2FC",
                                width: e.bgWidth + "px",
                                height: "20px",
                                top: "455px",
                                left: 40 + e.left + "px",
                                rotate: "0",
                                borderRadius: "2px",
                                shadow: "",
                                color: "#EBF2FC"
                            }
                        }), t.push({
                            type: "text",
                            text: e.tab,
                            css: {
                                color: "#707680",
                                background: "rgba(0,0,0,0)",
                                width: e.width + "px",
                                height: "13.559999999999999px",
                                top: "457px",
                                left: 40 + e.left + 3 + "px",
                                rotate: "0",
                                borderRadius: "",
                                borderWidth: "",
                                borderColor: "#000000",
                                shadow: "",
                                padding: "0px",
                                fontSize: "12px",
                                fontWeight: "normal",
                                maxLines: "1",
                                lineHeight: "13.32px",
                                textStyle: "fill",
                                textDecoration: "none",
                                fontFamily: "",
                                textAlign: "left"
                            }
                        });
                    });
                    var e = [ {
                        type: "rect",
                        css: {
                            background: "#DBDBDB",
                            width: "295px",
                            height: "1px",
                            top: "491px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#DBDBDB"
                        }
                    }, {
                        type: "text",
                        text: this.mixPrice,
                        css: {
                            color: "#FF5637",
                            background: "rgba(0,0,0,0)",
                            width: "140px",
                            height: "18.08px",
                            top: "503.99999999999994px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "17.76px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "text",
                        text: this.nearPlacePrice,
                        css: {
                            color: "#FF5637",
                            background: "rgba(0,0,0,0)",
                            width: "140px",
                            height: "18.08px",
                            top: "503.99999999999994px",
                            left: "210px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "17.76px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#DBDBDB",
                            width: "295px",
                            height: "1px",
                            top: "552px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#DBDBDB"
                        }
                    }, {
                        type: "text",
                        text: "均价",
                        css: {
                            color: "#707680",
                            background: "rgba(0,0,0,0)",
                            width: "30px",
                            height: "13.559999999999999px",
                            top: "528px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "text",
                        text: "周边均价",
                        css: {
                            color: "#707680",
                            background: "rgba(0,0,0,0)",
                            width: "50px",
                            height: "13.559999999999999px",
                            top: "528px",
                            left: "210px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#DBDBDB",
                            width: "1px",
                            height: "36px",
                            top: "504px",
                            left: "187px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#DBDBDB"
                        }
                    }, {
                        type: "text",
                        text: "摇号点评：",
                        css: {
                            color: "#000000",
                            background: "rgba(0,0,0,0)",
                            width: "70px",
                            height: "13.559999999999999px",
                            top: "570px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "text",
                        text: this.comment || "暂无",
                        css: {
                            color: "#707680",
                            background: "rgba(0,0,0,0)",
                            width: "230px",
                            height: "13.559999999999999px",
                            top: "570px",
                            left: "100px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    } ];
                    t.push.apply(t, e);
                    var o = [ {
                        type: "rect",
                        css: {
                            background: "#f1f5ff",
                            width: "343px",
                            height: "80px",
                            top: "598px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "16px",
                            shadow: "",
                            color: "#f1f5ff"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#f1f5ff",
                            width: "343px",
                            height: "16px",
                            top: "598px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#f1f5ff"
                        }
                    }, {
                        type: "image",
                        url: this.avatar,
                        css: {
                            width: "40px",
                            height: "40px",
                            top: "618px",
                            left: "40px",
                            rotate: "0",
                            borderRadius: "20px",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: "置业顾问 " + this.name,
                        css: {
                            color: "#000000",
                            background: "rgba(0,0,0,0)",
                            width: "140px",
                            height: "13.559999999999999px",
                            top: "621px",
                            left: "94px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    }, {
                        type: "text",
                        text: "联系方式：" + this.tel,
                        css: {
                            color: "#595959",
                            background: "rgba(0,0,0,0)",
                            width: "160px",
                            height: "13.559999999999999px",
                            top: "642px",
                            left: "94px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    } ], r = [ {
                        type: "rect",
                        css: {
                            background: "#ffffff",
                            width: "343px",
                            height: "32px",
                            top: "598px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "16px",
                            shadow: "",
                            color: "#ffffff"
                        }
                    }, {
                        type: "rect",
                        css: {
                            background: "#ffffff",
                            width: "343px",
                            height: "16px",
                            top: "598px",
                            left: "16px",
                            rotate: "0",
                            borderRadius: "",
                            shadow: "",
                            color: "#ffffff"
                        }
                    } ], i = [ {
                        type: "image",
                        url: this.qrcode,
                        css: {
                            width: "72px",
                            height: "72px",
                            top: "720px",
                            left: "149px",
                            rotate: "0",
                            borderRadius: "36px",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: "长按识别 摇号大师",
                        css: {
                            color: "#ffffff",
                            background: "rgba(0,0,0,0)",
                            width: "110px",
                            height: "13.559999999999999px",
                            top: "800px",
                            left: "134px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    } ], a = [ {
                        type: "image",
                        url: this.qrcode,
                        css: {
                            width: "72px",
                            height: "72px",
                            top: "672px",
                            left: "149px",
                            rotate: "0",
                            borderRadius: "36px",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            mode: "scaleToFill"
                        }
                    }, {
                        type: "text",
                        text: "长按识别 摇号大师",
                        css: {
                            color: "#ffffff",
                            background: "rgba(0,0,0,0)",
                            width: "110px",
                            height: "13.559999999999999px",
                            top: "752px",
                            left: "134px",
                            rotate: "0",
                            borderRadius: "",
                            borderWidth: "",
                            borderColor: "#000000",
                            shadow: "",
                            padding: "0px",
                            fontSize: "12px",
                            fontWeight: "normal",
                            maxLines: "1",
                            lineHeight: "13.32px",
                            textStyle: "fill",
                            textDecoration: "none",
                            fontFamily: "",
                            textAlign: "left"
                        }
                    } ];
                    return this.avatar ? (t.push.apply(t, o), t.push.apply(t, i)) : (t.push.apply(t, r), 
                    t.push.apply(t, a)), {
                        width: "375px",
                        height: "".concat(this.avatar ? 890 : 842, "px"),
                        background: "#f8f8f8",
                        views: t
                    };
                }
            } ]), t;
        }();
        e.default = p;
    }
} ]);