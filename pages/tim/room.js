(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/tim/room" ], {
    "0a8e": function a8e(i, t, e) {
        "use strict";
        var n;
        e.d(t, "b", function() {
            return s;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {
            return n;
        });
        var s = function s() {
            var i = this, t = i.$createElement, e = (i._self._c, i.__map(i.msgList, function(t, e) {
                var n = i.__get_orig(t), s = "out" == t.flow && t.type == i.TIM.TYPES.MSG_TEXT ? i.nodesFliter(t.payload.text) : null, o = "out" != t.flow ? i.timeFliter(t.time) : null, g = "out" != t.flow && t.type == i.TIM.TYPES.MSG_TEXT ? i.nodesFliter(t.payload.text) : null;
                return {
                    $orig: n,
                    m0: s,
                    m1: o,
                    m2: g
                };
            }));
            i.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
    },
    1418: function _(i, t, e) {
        "use strict";
        e.r(t);
        var n = e("0a8e"), s = e("4734");
        for (var o in s) {
            "default" !== o && function(i) {
                e.d(t, i, function() {
                    return s[i];
                });
            }(o);
        }
        e("db36");
        var g, r = e("f0c5"), f = Object(r["a"])(s["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], g);
        t["default"] = f.exports;
    },
    2656: function _(i, t, e) {},
    4734: function _(i, t, e) {
        "use strict";
        e.r(t);
        var n = e("8ce6"), s = e.n(n);
        for (var o in n) {
            "default" !== o && function(i) {
                e.d(t, i, function() {
                    return n[i];
                });
            }(o);
        }
        t["default"] = s.a;
    },
    "76c2": function c2(i, t, e) {
        "use strict";
        (function(i) {
            e("6d7c");
            n(e("66fd"));
            var t = n(e("1418"));
            function n(i) {
                return i && i.__esModule ? i : {
                    default: i
                };
            }
            i(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    "8ce6": function ce6(i, t, e) {
        "use strict";
        (function(i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(e("99ef")), s = e("2f62");
            function o(i) {
                return i && i.__esModule ? i : {
                    default: i
                };
            }
            function g(i, t) {
                var e = Object.keys(i);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(i);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable;
                    })), e.push.apply(e, n);
                }
                return e;
            }
            function r(i) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(e), !0).forEach(function(t) {
                        f(i, t, e[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : g(Object(e)).forEach(function(t) {
                        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
                    });
                }
                return i;
            }
            function f(i, t, e) {
                return t in i ? Object.defineProperty(i, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[t] = e, i;
            }
            var a = {
                data: function data() {
                    return {
                        conversationActive: null,
                        toUserId: "",
                        toUserInfo: null,
                        userInfo: null,
                        nextReqMessageID: "",
                        count: 15,
                        isCompleted: "",
                        msgList: [],
                        TIM: null,
                        textMsg: "",
                        isHistoryLoading: !1,
                        scrollAnimation: !1,
                        scrollTop: 0,
                        scrollToView: "",
                        msgImgList: [],
                        myuid: 0,
                        RECORDER: i.getRecorderManager(),
                        isVoice: !1,
                        voiceTis: "按住 说话",
                        recordTis: "手指上滑 取消发送",
                        recording: !1,
                        willStop: !1,
                        initPoint: {
                            identifier: 0,
                            Y: 0
                        },
                        recordTimer: null,
                        recordLength: 0,
                        AUDIO: i.createInnerAudioContext(),
                        playMsgid: null,
                        VoiceTimer: null,
                        popupLayerClass: "",
                        hideMore: !0,
                        hideEmoji: !0,
                        emojiList: this.$commen.emojiList,
                        onlineEmoji: {
                            "100.gif": "AbNQgA.gif",
                            "101.gif": "AbN3ut.gif",
                            "102.gif": "AbNM3d.gif",
                            "103.gif": "AbN8DP.gif",
                            "104.gif": "AbNljI.gif",
                            "105.gif": "AbNtUS.gif",
                            "106.gif": "AbNGHf.gif",
                            "107.gif": "AbNYE8.gif",
                            "108.gif": "AbNaCQ.gif",
                            "109.gif": "AbNN4g.gif",
                            "110.gif": "AbN0vn.gif",
                            "111.gif": "AbNd3j.gif",
                            "112.gif": "AbNsbV.gif",
                            "113.gif": "AbNwgs.gif",
                            "114.gif": "AbNrD0.gif",
                            "115.gif": "AbNDuq.gif",
                            "116.gif": "AbNg5F.gif",
                            "117.gif": "AbN6ET.gif",
                            "118.gif": "AbNcUU.gif",
                            "119.gif": "AbNRC4.gif",
                            "120.gif": "AbNhvR.gif",
                            "121.gif": "AbNf29.gif",
                            "122.gif": "AbNW8J.gif",
                            "123.gif": "AbNob6.gif",
                            "124.gif": "AbN5K1.gif",
                            "125.gif": "AbNHUO.gif",
                            "126.gif": "AbNIDx.gif",
                            "127.gif": "AbN7VK.gif",
                            "128.gif": "AbNb5D.gif",
                            "129.gif": "AbNX2d.gif",
                            "130.gif": "AbNLPe.gif",
                            "131.gif": "AbNjxA.gif",
                            "132.gif": "AbNO8H.gif",
                            "133.gif": "AbNxKI.gif",
                            "134.gif": "AbNzrt.gif",
                            "135.gif": "AbU9Vf.gif",
                            "136.gif": "AbUSqP.gif",
                            "137.gif": "AbUCa8.gif",
                            "138.gif": "AbUkGQ.gif",
                            "139.gif": "AbUFPg.gif",
                            "140.gif": "AbUPIS.gif",
                            "141.gif": "AbUZMn.gif",
                            "142.gif": "AbUExs.gif",
                            "143.gif": "AbUA2j.gif",
                            "144.gif": "AbUMIU.gif",
                            "145.gif": "AbUerq.gif",
                            "146.gif": "AbUKaT.gif",
                            "147.gif": "AbUmq0.gif",
                            "148.gif": "AbUuZV.gif",
                            "149.gif": "AbUliF.gif",
                            "150.gif": "AbU1G4.gif",
                            "151.gif": "AbU8z9.gif",
                            "152.gif": "AbU3RJ.gif",
                            "153.gif": "AbUYs1.gif",
                            "154.gif": "AbUJMR.gif",
                            "155.gif": "AbUadK.gif",
                            "156.gif": "AbUtqx.gif",
                            "157.gif": "AbUUZ6.gif",
                            "158.gif": "AbUBJe.gif",
                            "159.gif": "AbUdIO.gif",
                            "160.gif": "AbU0iD.gif",
                            "161.gif": "AbUrzd.gif",
                            "162.gif": "AbUDRH.gif",
                            "163.gif": "AbUyQA.gif",
                            "164.gif": "AbUWo8.gif",
                            "165.gif": "AbU6sI.gif",
                            "166.gif": "AbU2eP.gif",
                            "167.gif": "AbUcLt.gif",
                            "168.gif": "AbU4Jg.gif",
                            "169.gif": "AbURdf.gif",
                            "170.gif": "AbUhFS.gif",
                            "171.gif": "AbU5WQ.gif",
                            "172.gif": "AbULwV.gif",
                            "173.gif": "AbUIzj.gif",
                            "174.gif": "AbUTQs.gif",
                            "175.gif": "AbU7yn.gif",
                            "176.gif": "AbUqe0.gif",
                            "177.gif": "AbUHLq.gif",
                            "178.gif": "AbUOoT.gif",
                            "179.gif": "AbUvYF.gif",
                            "180.gif": "AbUjFU.gif",
                            "181.gif": "AbaSSJ.gif",
                            "182.gif": "AbUxW4.gif",
                            "183.gif": "AbaCO1.gif",
                            "184.gif": "Abapl9.gif",
                            "185.gif": "Aba9yR.gif",
                            "186.gif": "AbaFw6.gif",
                            "187.gif": "Abaiex.gif",
                            "188.gif": "AbakTK.gif",
                            "189.gif": "AbaZfe.png",
                            "190.gif": "AbaEFO.gif",
                            "191.gif": "AbaVYD.gif",
                            "192.gif": "AbamSH.gif",
                            "193.gif": "AbaKOI.gif",
                            "194.gif": "Abanld.gif",
                            "195.gif": "Abau6A.gif",
                            "196.gif": "AbaQmt.gif",
                            "197.gif": "Abal0P.gif",
                            "198.gif": "AbatpQ.gif",
                            "199.gif": "Aba1Tf.gif",
                            "200.png": "Aba8k8.png",
                            "201.png": "AbaGtS.png",
                            "202.png": "AbaJfg.png",
                            "203.png": "AbaNlj.png",
                            "204.png": "Abawmq.png",
                            "205.png": "AbaU6s.png",
                            "206.png": "AbaaXn.png",
                            "207.png": "Aba000.png",
                            "208.png": "AbarkT.png",
                            "209.png": "AbastU.png",
                            "210.png": "AbaB7V.png",
                            "211.png": "Abafn1.png",
                            "212.png": "Abacp4.png",
                            "213.png": "AbayhF.png",
                            "214.png": "Abag1J.png",
                            "215.png": "Aba2c9.png",
                            "216.png": "AbaRXR.png",
                            "217.png": "Aba476.png",
                            "218.png": "Abah0x.png",
                            "219.png": "Abdg58.png"
                        },
                        windowsState: "",
                        redenvelopeData: {
                            rid: null,
                            from: null,
                            face: null,
                            blessing: null,
                            money: null
                        }
                    };
                },
                computed: r({}, (0, s.mapState)({
                    currentMessageList: function currentMessageList(i) {
                        return i.currentMessageList;
                    }
                })),
                watch: {
                    currentMessageList: function currentMessageList(i, t) {
                        this.msgList = i, this.screenMsg(i, t);
                    }
                },
                onLoad: function onLoad(t) {
                    var e = this;
                    this.userInfo = JSON.parse(i.getStorageSync("userInfo")), this.toUserId = this.$store.state.toUserId, 
                    this.conversationActive = this.$store.state.conversationActive, this.TIM = this.$TIM, 
                    n.default.forEach(function(i) {
                        e.toUserId == i.userId && (e.toUserInfo = i);
                    }), this.getMsgList(), this.AUDIO.onEnded(function(i) {
                        e.playMsgid = null;
                    }), this.RECORDER.onStart(function(i) {
                        e.recordBegin(i);
                    }), this.RECORDER.onStop(function(i) {
                        e.recordEnd(i);
                    });
                },
                onShow: function onShow() {
                    this.scrollTop = 9999999, this.isHistoryLoading = !1;
                },
                onUnload: function onUnload() {
                    var i = this.tim.setMessageRead({
                        conversationID: this.conversationActive.conversationID
                    });
                    i.then(function(i) {
                        console.log("全部已读");
                    }).catch(function(i) {
                        console.warn("setMessageRead error:", i);
                    });
                },
                methods: {
                    nodesFliter: function nodesFliter(i) {
                        var t = '<div style="align-items: center;word-wrap:break-word;">' + i + "</div>";
                        return t;
                    },
                    timeFliter: function timeFliter(i) {
                        var t = new Date(1e3 * i), e = this.$commen.dateTimeFliter(t);
                        return e;
                    },
                    screenMsg: function screenMsg(i, t) {
                        var e = this;
                        if (i[0] && t[0]) {
                            if (i[0].ID != t[0].ID && i.length >= this.count) {
                                var n = i.length - t.length - 1;
                                this.$nextTick(function() {
                                    e.scrollToView = i[n].ID;
                                });
                            } else this.$nextTick(function() {
                                e.scrollToView = i[i.length - 1].ID;
                            });
                        } else console.log("*****"), this.$nextTick(function() {
                            e.scrollToView = i[i.length - 1].ID, e.scrollTop = 9999999;
                        });
                    },
                    loadHistory: function loadHistory(i) {
                        var t = this;
                        this.isHistoryLoading = !0;
                        var e = this.conversationActive.conversationID, n = this.tim.getMessageList({
                            conversationID: e,
                            nextReqMessageID: this.nextReqMessageID,
                            count: this.count
                        });
                        n.then(function(i) {
                            t.$store.commit("unshiftCurrentMessageList", i.data.messageList), t.nextReqMessageID = i.data.nextReqMessageID, 
                            t.isCompleted = i.data.isCompleted, t.isHistoryLoading = !1;
                        });
                    },
                    getMsgList: function getMsgList() {
                        var i = this, t = this.conversationActive.conversationID, e = this.tim.getMessageList({
                            conversationID: t,
                            count: this.count
                        });
                        e.then(function(t) {
                            i.$store.commit("pushCurrentMessageList", t.data.messageList), i.nextReqMessageID = t.data.nextReqMessageID, 
                            i.isCompleted = t.data.isCompleted, i.scrollToView = t.data.messageList[t.data.messageList.length - 1].ID;
                        }), this.$nextTick(function() {
                            this.scrollTop = 9999, this.$nextTick(function() {
                                this.scrollAnimation = !0;
                            });
                        });
                    },
                    setPicSize: function setPicSize(t) {
                        var e = i.upx2px(350), n = i.upx2px(350);
                        if (t.w > e || t.h > n) {
                            var s = t.w / t.h;
                            t.w = s > 1 ? e : n * s, t.h = s > 1 ? e / s : n;
                        }
                        return t;
                    },
                    showMore: function showMore() {
                        this.isVoice = !1, this.hideEmoji = !0, this.hideMore ? (this.hideMore = !1, this.openDrawer()) : this.hideDrawer();
                    },
                    openDrawer: function openDrawer() {
                        this.popupLayerClass = "showLayer";
                    },
                    hideDrawer: function hideDrawer() {
                        var i = this;
                        this.popupLayerClass = "", setTimeout(function() {
                            i.hideMore = !0, i.hideEmoji = !0;
                        }, 150);
                    },
                    chooseImage: function chooseImage() {
                        this.getImage("album");
                    },
                    camera: function camera() {
                        this.getImage("camera");
                    },
                    handRedEnvelopes: function handRedEnvelopes() {
                        i.navigateTo({
                            url: "HM-hand/HM-hand"
                        }), this.hideDrawer();
                    },
                    getImage: function getImage(t) {
                        var e = this;
                        this.hideDrawer(), i.chooseImage({
                            sourceType: [ t ],
                            sizeType: [ "original", "compressed" ],
                            success: function success(t) {
                                for (var n = function n(_n) {
                                    i.getImageInfo({
                                        src: t.tempFilePaths[_n],
                                        success: function success(i) {
                                            console.log(i.width), console.log(i.height);
                                            var s = {
                                                url: t.tempFilePaths[_n],
                                                w: i.width,
                                                h: i.height
                                            };
                                            e.sendMsg(s, "img");
                                        }
                                    });
                                }, s = 0; s < t.tempFilePaths.length; s++) {
                                    n(s);
                                }
                            }
                        });
                    },
                    chooseEmoji: function chooseEmoji() {
                        this.hideMore = !0, this.hideEmoji ? (this.hideEmoji = !1, this.openDrawer()) : this.hideDrawer();
                    },
                    addEmoji: function addEmoji(i) {
                        this.textMsg += i.alt;
                    },
                    textareaFocus: function textareaFocus() {
                        "showLayer" == this.popupLayerClass && 0 == this.hideMore && this.hideDrawer();
                    },
                    sendText: function sendText() {
                        if (this.hideDrawer(), this.textMsg) {
                            var i = this.replaceEmoji(this.textMsg), t = {
                                text: i
                            };
                            this.sendMsg(t, "text"), this.textMsg = "";
                        }
                    },
                    replaceEmoji: function replaceEmoji(i) {
                        var t = this, e = i.replace(/\[([^(\]|\[)]*)\]/g, function(i, e) {
                            console.log("item: " + i);
                            for (var n = 0; n < t.emojiList.length; n++) {
                                for (var s = t.emojiList[n], o = 0; o < s.length; o++) {
                                    var g = s[o];
                                    if (g.alt == i) {
                                        var r = "https://s2.ax1x.com/2019/04/12/", f = '<img src="' + r + t.onlineEmoji[g.url] + '">';
                                        return console.log("imgstr: " + f), f;
                                    }
                                }
                            }
                        });
                        return e;
                    },
                    sendMsg: function sendMsg(i, t) {
                        var e = this, n = this.tim.createTextMessage({
                            to: this.toUserId,
                            conversationType: "C2C",
                            payload: {
                                text: i.text
                            }
                        });
                        this.$store.commit("pushCurrentMessageList", n);
                        var s = this.tim.sendMessage(n);
                        s.then(function(i) {
                            e.$nextTick(function() {
                                e.scrollToView = i.data.message.ID;
                            });
                        });
                    },
                    addTextMsg: function addTextMsg(i) {
                        this.msgList.push(i);
                    },
                    addVoiceMsg: function addVoiceMsg(i) {
                        this.msgList.push(i);
                    },
                    addImgMsg: function addImgMsg(i) {
                        i.msg.content = this.setPicSize(i.msg.content), this.msgImgList.push(i.msg.content.url), 
                        this.msgList.push(i);
                    },
                    addRedEnvelopeMsg: function addRedEnvelopeMsg(i) {
                        this.msgList.push(i);
                    },
                    addSystemTextMsg: function addSystemTextMsg(i) {
                        this.msgList.push(i);
                    },
                    addSystemRedEnvelopeMsg: function addSystemRedEnvelopeMsg(i) {
                        this.msgList.push(i);
                    },
                    openRedEnvelope: function openRedEnvelope(t, e) {
                        var n = this, s = t.content.rid;
                        i.showLoading({
                            title: "加载中..."
                        }), console.log("index: " + e), setTimeout(function() {
                            0 == s ? n.redenvelopeData = {
                                rid: 0,
                                from: "大黑哥",
                                face: "/static/img/im/face/face.jpg",
                                blessing: "恭喜发财，大吉大利",
                                money: "已领完"
                            } : (n.redenvelopeData = {
                                rid: 1,
                                from: "售后客服008",
                                face: "/static/img/im/face/face_2.jpg",
                                blessing: "恭喜发财",
                                money: "0.01"
                            }, t.content.isReceived || (n.sendSystemMsg({
                                text: "你领取了" + (t.userinfo.uid == n.myuid ? "自己" : t.userinfo.username) + "的红包"
                            }, "redEnvelope"), console.log("this.msgList[index]: " + JSON.stringify(n.msgList[e])), 
                            n.msgList[e].msg.content.isReceived = !0)), i.hideLoading(), n.windowsState = "show";
                        }, 200);
                    },
                    closeRedEnvelope: function closeRedEnvelope() {
                        var i = this;
                        this.windowsState = "hide", setTimeout(function() {
                            i.windowsState = "";
                        }, 200);
                    },
                    sendSystemMsg: function sendSystemMsg(i, t) {
                        var e = this.msgList[this.msgList.length - 1].msg.id;
                        e++;
                        var n = {
                            type: "system",
                            msg: {
                                id: e,
                                type: t,
                                content: i
                            }
                        };
                        this.screenMsg(n);
                    },
                    toDetails: function toDetails(t) {
                        i.navigateTo({
                            url: "HM-details/HM-details?rid=" + t
                        });
                    },
                    showPic: function showPic(t) {
                        i.previewImage({
                            indicator: "none",
                            current: t.content.url,
                            urls: this.msgImgList
                        });
                    },
                    playVoice: function playVoice(i) {
                        this.playMsgid = i.id, this.AUDIO.src = i.content.url, this.$nextTick(function() {
                            this.AUDIO.play();
                        });
                    },
                    voiceBegin: function voiceBegin(i) {
                        i.touches.length > 1 || (this.initPoint.Y = i.touches[0].clientY, this.initPoint.identifier = i.touches[0].identifier, 
                        this.RECORDER.start({
                            format: "mp3"
                        }));
                    },
                    recordBegin: function recordBegin(i) {
                        var t = this;
                        this.recording = !0, this.voiceTis = "松开 结束", this.recordLength = 0, this.recordTimer = setInterval(function() {
                            t.recordLength++;
                        }, 1e3);
                    },
                    voiceCancel: function voiceCancel() {
                        this.recording = !1, this.voiceTis = "按住 说话", this.recordTis = "手指上滑 取消发送", this.willStop = !0, 
                        this.RECORDER.stop();
                    },
                    voiceIng: function voiceIng(t) {
                        if (this.recording) {
                            var e = t.touches[0];
                            this.initPoint.Y - e.clientY >= i.upx2px(100) ? (this.willStop = !0, this.recordTis = "松开手指 取消发送") : (this.willStop = !1, 
                            this.recordTis = "手指上滑 取消发送");
                        }
                    },
                    voiceEnd: function voiceEnd(i) {
                        this.recording && (this.recording = !1, this.voiceTis = "按住 说话", this.recordTis = "手指上滑 取消发送", 
                        this.RECORDER.stop());
                    },
                    recordEnd: function recordEnd(i) {
                        if (clearInterval(this.recordTimer), this.willStop) console.log("取消发送录音"); else {
                            console.log("e: " + JSON.stringify(i));
                            var t = {
                                length: 0,
                                url: i.tempFilePath
                            }, e = parseInt(this.recordLength / 60), n = this.recordLength % 60;
                            e = e < 10 ? "0" + e : e, n = n < 10 ? "0" + n : n, t.length = e + ":" + n, this.sendMsg(t, "voice");
                        }
                        this.willStop = !1;
                    },
                    switchVoice: function switchVoice() {
                        this.hideDrawer(), this.isVoice = !this.isVoice;
                    },
                    discard: function discard() {}
                }
            };
            t.default = a;
        }).call(this, e("543d")["default"]);
    },
    db36: function db36(i, t, e) {
        "use strict";
        var n = e("2656"), s = e.n(n);
        s.a;
    }
}, [ [ "76c2", "common/runtime", "common/vendor" ] ] ]);