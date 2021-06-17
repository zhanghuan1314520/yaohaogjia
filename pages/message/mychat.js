(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/message/mychat" ], {
    "2e59": function e59(t, e, i) {
        "use strict";
        (function(t) {
            i("6d7c");
            s(i("66fd"));
            var e = s(i("f31b"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, i("543d")["createPage"]);
    },
    "86c3": function c3(t, e, i) {
        "use strict";
        var s;
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {
            return s;
        });
        var n = function n() {
            var t = this, e = t.$createElement, i = (t._self._c, t.__map(t.msgList, function(e, i) {
                var s = t.__get_orig(e), n = t.timeFliter(e.time), o = e.payload.data && "wechatCard" === e.payload.data ? JSON.parse(e.payload.description) : null, r = e.payload.data && "wechatCard" === e.payload.data ? JSON.parse(e.payload.description) : null, a = e.payload.data && "wechatCard" === e.payload.data ? JSON.parse(e.payload.description) : null, c = e.payload.data && "wechatCard" === e.payload.data ? JSON.parse(e.payload.description) : null, u = e.payload.data && "wechatCard" === e.payload.data || e.payload.data && "phoneCard" === e.payload.data || e.type != t.TIM.TYPES.MSG_TEXT ? null : t.nodesFliter(e.payload.text);
                return {
                    $orig: s,
                    m0: n,
                    g0: o,
                    g1: r,
                    g2: a,
                    g3: c,
                    m1: u
                };
            }));
            t._isMounted || (t.e0 = function(e) {
                t.hideMore = !0;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    l0: i
                }
            });
        }, o = [];
    },
    a09a: function a09a(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = o(i("a34a")), n = (o(i("99ef")), i("2f62"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, i, s, n, o, r) {
                try {
                    var a = t[o](r), c = a.value;
                } catch (u) {
                    return void i(u);
                }
                a.done ? e(c) : Promise.resolve(c).then(s, n);
            }
            function a(t) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(s, n) {
                        var o = t.apply(e, i);
                        function a(t) {
                            r(o, s, n, a, c, "next", t);
                        }
                        function c(t) {
                            r(o, s, n, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function c(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, s);
                }
                return i;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(i), !0).forEach(function(e) {
                        h(t, e, i[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return t;
            }
            function h(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            var l = {
                data: function data() {
                    return {
                        timer: null,
                        statusBarHeight: 0,
                        navHeight: 0,
                        keyboardHeight: 0,
                        keyboardFlag: !1,
                        currentCounselor: {},
                        weixinNum: "",
                        vxshow: !1,
                        usefulShow: !1,
                        usefulList: [ "你好,我想咨询一下楼盘信息", "请问你们楼盘什么时候开盘呢?", "有哪些户型,大概什么价格呢?" ],
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
                        RECORDER: t.getRecorderManager(),
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
                        AUDIO: t.createInnerAudioContext(),
                        playMsgid: null,
                        VoiceTimer: null,
                        popupLayerClass: "",
                        hideMore: !0,
                        hideEmoji: !0,
                        avatar: "",
                        inputHeight: 0,
                        showCommon: !0
                    };
                },
                computed: u({}, (0, n.mapState)({
                    currentMessageList: function currentMessageList(t) {
                        return t.currentMessageList;
                    },
                    isSDKReady: function isSDKReady(t) {
                        return t.isSDKReady;
                    }
                })),
                watch: {
                    isSDKReady: function isSDKReady() {
                        this.getMsgList();
                    },
                    currentMessageList: function currentMessageList(t, e) {
                        this.msgList = t, console.log("newVal", t), t.length > 1 && clearTimeout(this.timer), 
                        this.screenMsg(t, e);
                    }
                },
                onLoad: function onLoad(e) {
                    var i = this;
                    if (this.statusBarHeight = getApp().globalData.statusBarHeight, this.navHeight = getApp().globalData.navHeight, 
                    this.getStauts(), e.data) {
                        var s = decodeURIComponent(e.data);
                        this.currentCounselor = JSON.parse(s) || "", this.avatar = this.currentCounselor.avatar;
                    }
                    e.avatar && (this.avatar = e.avatar), e.isCustomService ? this.showCommon = !1 : this.showCommon = !0, 
                    this.userInfo = JSON.parse(t.getStorageSync("userInfo")), console.log("this.$store", this.$store), 
                    this.toUserId = this.$store.state.toUserId, this.conversationActive = this.$store.state.conversationActive, 
                    this.TIM = this.$TIM, this.loginUser(this.getMsgList), this.AUDIO.onEnded(function(t) {
                        i.playMsgid = null;
                    }), this.RECORDER.onStart(function(t) {
                        i.recordBegin(t);
                    }), this.RECORDER.onStop(function(t) {
                        i.recordEnd(t);
                    }), this.$request("/tim/user/info/bychatId/".concat(this.currentCounselor.chatId)).then(function(t) {
                        i.currentCounselor = t.data;
                    });
                },
                onUnload: function onUnload() {
                    clearTimeout(this.timer);
                    var t = this.tim.setMessageRead({
                        conversationID: this.conversationActive.conversationID
                    });
                    t.then(function(t) {
                        console.log("全部已读");
                    }).catch(function(t) {
                        this.loginUser(), console.warn("setMessageRead error:", t);
                    });
                },
                methods: {
                    copyMsg: function copyMsg(e) {
                        t.setClipboardData({
                            data: e,
                            success: function success() {
                                t.showToast({
                                    icon: "none",
                                    title: "复制成功"
                                });
                            }
                        });
                    },
                    handleKeyboardHeightChange: function handleKeyboardHeightChange(t) {
                        var e = this;
                        this.keyboardHeight = t.detail.height, setTimeout(function() {
                            e.scrollTop = e.scrollTop + 10 * Math.random();
                        }, 300);
                    },
                    toHideKeyboard: function toHideKeyboard() {
                        console.log("to toHideKeyboard..."), t.hideKeyboard(), this.keyboardHeight = 0;
                    },
                    useful: function useful() {
                        this.usefulShow = !this.usefulShow, this.usefulShow && (this.hideMore = !0);
                    },
                    send: function send(t) {
                        this.hideDrawer(), this.usefulShow = !1;
                        var e = {
                            text: t
                        };
                        this.sendMsg(e, "text"), this.toHideKeyboard(), this.textMsg = "";
                    },
                    toPhone: function toPhone() {
                        var e = this;
                        t.showModal({
                            title: "",
                            content: "拨通后请说明来自\n【摇号大师】",
                            success: function success(t) {
                                t.confirm && e.phone();
                            }
                        });
                    },
                    phone: function phone() {
                        var e = this;
                        t.makePhoneCall({
                            phoneNumber: this.currentCounselor.phone,
                            success: function success() {
                                console.log("成功拨打电话"), e.$request("/add/phone/contack/user", {
                                    toChatId: e.currentCounselor.chatId,
                                    toUserId: e.currentCounselor.userId
                                }, "POST").then(function(t) {
                                    console.log(t, "拨打电话增加数量");
                                });
                            }
                        });
                    },
                    clickVx: function clickVx(t) {
                        this.weixinNum = t.weixinNum || "", this.vxshow = !this.vxshow;
                    },
                    copy: function copy() {
                        var e = this;
                        t.showModal({
                            title: "小技巧",
                            content: "复制成功，请告知置业顾问您来自【摇号大师】，可优先享受顾问的咨询和服务。",
                            success: function success(i) {
                                i.confirm && t.setClipboardData({
                                    data: e.currentCounselor.weixinNum
                                });
                            }
                        });
                    },
                    erweima: function erweima(e) {
                        var i = [];
                        i.push(e.currentTarget.dataset.url), t.previewImage({
                            urls: i,
                            longPressActions: {
                                itemList: [ "保存图片" ],
                                success: function success(e) {
                                    t.downloadFile({
                                        url: that.list[index].pics[ress.index],
                                        success: function success(e) {
                                            200 === e.statusCode && t.saveImageToPhotosAlbum({
                                                filePath: e.tempFilePath,
                                                success: function success() {
                                                    t.showToast({
                                                        title: "保存成功",
                                                        icon: "success"
                                                    });
                                                },
                                                fail: function fail() {
                                                    t.showToast({
                                                        title: "保存失败，请稍后重试",
                                                        icon: "none"
                                                    });
                                                }
                                            });
                                        }
                                    });
                                },
                                fail: function fail(t) {
                                    console.log(t.errMsg);
                                }
                            }
                        });
                    },
                    goTop: function goTop(t) {
                        this.$nextTick(function() {
                            this.scrollTop = 0;
                        });
                    },
                    nodesFliter: function nodesFliter(t) {
                        var e = '<div style="align-items: center;word-wrap:break-word;">' + t + "</div>";
                        return e;
                    },
                    timeFliter: function timeFliter(t) {
                        var e = new Date(1e3 * t), i = this.$commen.dateTimeFliter(e);
                        return i;
                    },
                    screenMsg: function screenMsg(t, e) {
                        var i = this;
                        if (t.length >= 1) if (t[0] && e[0]) {
                            if (t[0].ID != e[0].ID && t.length >= this.count) t.length, e.length; else this.$nextTick(function() {
                                i.scrollToView = t[t.length - 1].ID;
                            });
                        } else console.log("*****"), this.$nextTick(function() {
                            i.scrollToView = t[t.length - 1].ID, i.scrollTop = 9999999;
                        });
                    },
                    loadHistory: function loadHistory(t) {
                        var e = this;
                        if (!this.isHistoryLoading) {
                            this.isHistoryLoading = !0;
                            var i = this.conversationActive.conversationID, s = this.tim.getMessageList({
                                conversationID: i,
                                nextReqMessageID: this.nextReqMessageID,
                                count: this.count
                            });
                            s.then(function(t) {
                                t.data.messageList.length > 0 && (e.$store.commit("unshiftCurrentMessageList", t.data.messageList), 
                                e.$nextTick(function() {
                                    e.scrollAnimation = !1, e.scrollToView = e.nextReqMessageID, e.$nextTick(function() {
                                        e.nextReqMessageID = t.data.nextReqMessageID, e.isCompleted = t.data.isCompleted, 
                                        e.isHistoryLoading = !1;
                                    });
                                }));
                            }).catch(function() {
                                e.loginUser();
                            });
                        }
                    },
                    getMsgList: function getMsgList() {
                        var t = this, e = this.conversationActive.conversationID, i = this.tim.getMessageList({
                            conversationID: e,
                            count: this.count
                        });
                        i.then(function(e) {
                            e.data.messageList.length > 0 ? (t.$store.commit("pushCurrentMessageList", e.data.messageList), 
                            t.nextReqMessageID = e.data.nextReqMessageID, t.isCompleted = e.data.isCompleted, 
                            t.scrollToView = e.data.messageList[e.data.messageList.length - 1].ID) : t.currentCounselor && t.currentCounselor.pfsName && t.sendFirstText("你好，我刚浏览了这个楼盘，想咨询一些具体情况");
                        }).catch(function(e) {
                            t.loginUser(), console.log(e, t.conversationActive, "err");
                        });
                    },
                    setPicSize: function setPicSize(e) {
                        var i = t.upx2px(350), s = t.upx2px(350);
                        if (e.w > i || e.h > s) {
                            var n = e.w / e.h;
                            e.w = n > 1 ? i : s * n, e.h = n > 1 ? i / n : s;
                        }
                        return e;
                    },
                    showMore: function showMore() {
                        this.usefulShow = !1, this.isVoice = !1, this.hideEmoji = !0, this.hideMore ? (this.hideMore = !1, 
                        this.openDrawer()) : this.hideDrawer();
                    },
                    openDrawer: function openDrawer() {
                        this.popupLayerClass = "showLayer";
                    },
                    hideDrawer: function hideDrawer() {
                        var t = this;
                        this.popupLayerClass = "", setTimeout(function() {
                            t.hideMore = !0, t.hideEmoji = !0;
                        }, 150);
                    },
                    chooseImage: function chooseImage() {
                        this.getImage("album");
                    },
                    camera: function camera() {
                        this.getImage("camera");
                    },
                    getImage: function getImage(e) {
                        var i = this;
                        this.hideDrawer(), t.chooseImage({
                            sourceType: [ e ],
                            sizeType: [ "original", "compressed" ],
                            success: function success(e) {
                                var s = e.tempFilePaths;
                                t.uploadFile({
                                    url: i.apiServer + "upload/file",
                                    filePath: s[0],
                                    name: "files",
                                    formData: {
                                        dir: "userUpload"
                                    },
                                    success: function success(t) {
                                        var e = JSON.parse(t.data);
                                        i.sendMsg(t, "img", e.data.url);
                                    },
                                    fail: function fail(e) {
                                        console.log("uploadImage fail", e), t.showModal({
                                            content: e.errMsg,
                                            showCancel: !1
                                        });
                                    }
                                });
                            }
                        });
                    },
                    textareaFocus: function textareaFocus(t) {
                        "showLayer" == this.popupLayerClass && 0 == this.hideMore && this.hideDrawer(), 
                        t.detail.height && (this.inputHeight = t.detail.height);
                    },
                    textareaBlur: function textareaBlur() {
                        this.inputHeight = 0;
                    },
                    sendText: function sendText(t) {
                        this.hideDrawer();
                        var e = "";
                        if (this.textMsg ? e = this.textMsg : "string" === typeof t && "" !== t && (e = t), 
                        e) {
                            this.usefulShow = !1;
                            var i = {
                                text: e
                            };
                            this.sendMsg(i, "text"), this.textMsg = "";
                        }
                    },
                    sendFirstText: function sendFirstText(t) {
                        this.hideDrawer(), this.usefulShow = !1;
                        var e = {
                            text: t
                        };
                        this.sendMsg(e, "firstText");
                    },
                    sendPhoneCard: function sendPhoneCard() {
                        this.hideDrawer(), this.usefulShow = !1;
                        var t = {
                            name: this.currentCounselor.name || this.currentCounselor.nickname,
                            phone: this.currentCounselor.phone
                        };
                        this.sendMsg(t, "phoneCard", JSON.stringify(t));
                    },
                    sendWechatCard: function sendWechatCard() {
                        this.hideDrawer(), this.usefulShow = !1;
                        var t = {
                            name: this.currentCounselor.name || this.currentCounselor.nickname,
                            weixinNum: this.currentCounselor.weixinNum,
                            weixinQrcode: this.currentCounselor.weixinQrcode
                        };
                        this.sendMsg(t, "wechatCard", JSON.stringify(t));
                    },
                    sendMsg: function sendMsg(t, e, i) {
                        var s, n = this;
                        s = "img" === e || "wechatCard" === e || "phoneCard" === e ? this.tim.createCustomMessage({
                            to: this.toUserId,
                            conversationType: "C2C",
                            onProgress: function onProgress(t) {
                                console.log(t);
                            },
                            payload: {
                                data: e,
                                description: i,
                                extension: ""
                            }
                        }) : this.tim.createTextMessage({
                            to: this.toUserId,
                            conversationType: "C2C",
                            payload: {
                                text: t.text
                            }
                        }), this.$store.commit("pushCurrentMessageList", s);
                        var o = this.tim.sendMessage(s);
                        o.then(function(t) {
                            n.$nextTick(function() {
                                n.scrollToView = t.data.message.ID, "firstText" === e && n.sendPhoneCard();
                            });
                        }).catch(function() {
                            n.loginUser();
                        });
                    },
                    addTextMsg: function addTextMsg(t) {
                        this.msgList.push(t);
                    },
                    addVoiceMsg: function addVoiceMsg(t) {
                        this.msgList.push(t);
                    },
                    addImgMsg: function addImgMsg(t) {
                        t.msg.content = this.setPicSize(t.msg.content), this.msgImgList.push(t.msg.content.url), 
                        this.msgList.push(t);
                    },
                    addRedEnvelopeMsg: function addRedEnvelopeMsg(t) {
                        this.msgList.push(t);
                    },
                    addSystemTextMsg: function addSystemTextMsg(t) {
                        this.msgList.push(t);
                    },
                    sendSystemMsg: function sendSystemMsg(t, e) {
                        var i = this.msgList[this.msgList.length - 1].msg.id;
                        i++;
                        var s = {
                            type: "system",
                            msg: {
                                id: i,
                                type: e,
                                content: t
                            }
                        };
                        this.screenMsg(s);
                    },
                    showPic: function showPic(e) {
                        console.log("e", e);
                        var i = [ e.currentTarget.dataset.url ];
                        t.previewImage({
                            urls: i
                        });
                    },
                    playVoice: function playVoice(t) {
                        this.playMsgid = t.id, this.AUDIO.src = t.content.url, this.$nextTick(function() {
                            this.AUDIO.play();
                        });
                    },
                    voiceBegin: function voiceBegin(t) {
                        t.touches.length > 1 || (this.initPoint.Y = t.touches[0].clientY, this.initPoint.identifier = t.touches[0].identifier, 
                        this.RECORDER.start({
                            format: "mp3"
                        }));
                    },
                    recordBegin: function recordBegin(t) {
                        var e = this;
                        this.recording = !0, this.voiceTis = "松开 结束", this.recordLength = 0, this.recordTimer = setInterval(function() {
                            e.recordLength++;
                        }, 1e3);
                    },
                    voiceCancel: function voiceCancel() {
                        this.recording = !1, this.voiceTis = "按住 说话", this.recordTis = "手指上滑 取消发送", this.willStop = !0, 
                        this.RECORDER.stop();
                    },
                    voiceIng: function voiceIng(e) {
                        if (this.recording) {
                            var i = e.touches[0];
                            this.initPoint.Y - i.clientY >= t.upx2px(100) ? (this.willStop = !0, this.recordTis = "松开手指 取消发送") : (this.willStop = !1, 
                            this.recordTis = "手指上滑 取消发送");
                        }
                    },
                    voiceEnd: function voiceEnd(t) {
                        this.recording && (this.recording = !1, this.voiceTis = "按住 说话", this.recordTis = "手指上滑 取消发送", 
                        this.RECORDER.stop());
                    },
                    recordEnd: function recordEnd(t) {
                        if (clearInterval(this.recordTimer), this.willStop) console.log("取消发送录音"); else {
                            console.log("e: " + JSON.stringify(t));
                            var e = {
                                length: 0,
                                url: t.tempFilePath
                            }, i = parseInt(this.recordLength / 60), s = this.recordLength % 60;
                            i = i < 10 ? "0" + i : i, s = s < 10 ? "0" + s : s, e.length = i + ":" + s, this.sendMsg(e, "voice");
                        }
                        this.willStop = !1;
                    },
                    switchVoice: function switchVoice() {
                        this.hideDrawer(), this.isVoice = !this.isVoice;
                    },
                    getStauts: function getStauts() {
                        var t = this;
                        return a(s.default.mark(function e() {
                            var i, n;
                            return s.default.wrap(function(e) {
                                while (1) {
                                    switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, t.$request("seller/settle/apply/detail", {}, "get");

                                      case 2:
                                        i = e.sent, n = i.data, t.status = n.status, 1 === n.status && (t.usefulList = [ "您可以加我微信，了解更多信息。", "您好，请问您想了解哪方面信息？" ]);

                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }
                            }, e);
                        }))();
                    },
                    discard: function discard() {}
                }
            };
            e.default = l;
        }).call(this, i("543d")["default"]);
    },
    d18a: function d18a(t, e, i) {
        "use strict";
        var s = i("fb8f"), n = i.n(s);
        n.a;
    },
    e308: function e308(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("a09a"), n = i.n(s);
        for (var o in s) {
            "default" !== o && function(t) {
                i.d(e, t, function() {
                    return s[t];
                });
            }(o);
        }
        e["default"] = n.a;
    },
    f31b: function f31b(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("86c3"), n = i("e308");
        for (var o in n) {
            "default" !== o && function(t) {
                i.d(e, t, function() {
                    return n[t];
                });
            }(o);
        }
        i("d18a");
        var r, a = i("f0c5"), c = Object(a["a"])(n["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], r);
        e["default"] = c.exports;
    },
    fb8f: function fb8f(t, e, i) {}
}, [ [ "2e59", "common/runtime", "common/vendor" ] ] ]);