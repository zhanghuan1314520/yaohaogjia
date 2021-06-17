var _interopRequireDefault = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("../../../@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("../../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../../@babel/runtime/helpers/createClass"));

function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var it, normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally {
                if (didErr) throw err;
            }
        }
    };
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

var QR = require("./qrcode.js");

var GD = require("./gradient.js");

var Painter = /* */ function() {
    function Painter(ctx, data) {
        (0, _classCallCheck2.default)(this, Painter);
        this.ctx = ctx;
        this.data = data;
        this.globalWidth = {};
        this.globalHeight = {};
    }
    (0, _createClass2.default)(Painter, [ {
        key: "paint",
        value: function paint(callback) {
            this.style = {
                width: this.data.width.toPx(),
                height: this.data.height.toPx()
            };
            this._background();
            var _iterator = _createForOfIteratorHelper(this.data.views), _step;
            try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                    var view = _step.value;
                    this._drawAbsolute(view);
                }
            } catch (err) {
                _iterator.e(err);
            } finally {
                _iterator.f();
            }
            this.ctx.draw(false, function() {
                callback();
            });
        }
    }, {
        key: "_background",
        value: function _background() {
            this.ctx.save();
            var _this$style = this.style, width = _this$style.width, height = _this$style.height;
            var bg = this.data.background;
            this.ctx.translate(width / 2, height / 2);
            this._doClip(this.data.borderRadius, width, height);
            if (!bg) {
                // 如果未设置背景，则默认使用白色
                this.ctx.fillStyle = "#fff";
                this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            } else if (bg.startsWith("#") || bg.startsWith("rgba") || bg.toLowerCase() === "transparent") {
                // 背景填充颜色
                this.ctx.fillStyle = bg;
                this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            } else if (GD.api.isGradient(bg)) {
                GD.api.doGradient(bg, width, height, this.ctx);
                this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            } else {
                // 背景填充图片
                this.ctx.drawImage(bg, -(width / 2), -(height / 2), width, height);
            }
            this.ctx.restore();
        }
    }, {
        key: "_drawAbsolute",
        value: function _drawAbsolute(view) {
            // 证明 css 为数组形式，需要合并
            if (view.css && view.css.length) {
                /* eslint-disable no-param-reassign */
                view.css = Object.assign.apply(Object, (0, _toConsumableArray2.default)(view.css));
            }
            switch (view.type) {
              case "image":
                this._drawAbsImage(view);
                break;

              case "text":
                this._fillAbsText(view);
                break;

              case "rect":
                this._drawAbsRect(view);
                break;

              case "qrcode":
                this._drawQRCode(view);
                break;

              default:
                break;
            }
        }
        /**
     * 根据 borderRadius 进行裁减
     */    }, {
        key: "_doClip",
        value: function _doClip(borderRadius, width, height) {
            if (borderRadius && width && height) {
                var r = Math.min(borderRadius.toPx(), width / 2, height / 2);
                // 防止在某些机型上周边有黑框现象，此处如果直接设置 fillStyle 为透明，在 Android 机型上会导致被裁减的图片也变为透明， iOS 和 IDE 上不会
                // globalAlpha 在 1.9.90 起支持，低版本下无效，但把 fillStyle 设为了 white，相对默认的 black 要好点
                                this.ctx.globalAlpha = 0;
                this.ctx.fillStyle = "white";
                this.ctx.beginPath();
                this.ctx.arc(-width / 2 + r, -height / 2 + r, r, 1 * Math.PI, 1.5 * Math.PI);
                this.ctx.lineTo(width / 2 - r, -height / 2);
                this.ctx.arc(width / 2 - r, -height / 2 + r, r, 1.5 * Math.PI, 2 * Math.PI);
                this.ctx.lineTo(width / 2, height / 2 - r);
                this.ctx.arc(width / 2 - r, height / 2 - r, r, 0, .5 * Math.PI);
                this.ctx.lineTo(-width / 2 + r, height / 2);
                this.ctx.arc(-width / 2 + r, height / 2 - r, r, .5 * Math.PI, 1 * Math.PI);
                this.ctx.closePath();
                this.ctx.fill();
                // 在 ios 的 6.6.6 版本上 clip 有 bug，禁掉此类型上的 clip，也就意味着，在此版本微信的 ios 设备下无法使用 border 属性
                                if (!(getApp().systemInfo && getApp().systemInfo.version <= "6.6.6" && getApp().systemInfo.platform === "ios")) {
                    this.ctx.clip();
                }
                this.ctx.globalAlpha = 1;
            }
        }
        /**
     * 画边框
     */    }, {
        key: "_doBorder",
        value: function _doBorder(view, width, height) {
            if (!view.css) {
                return;
            }
            var _view$css = view.css, borderRadius = _view$css.borderRadius, borderWidth = _view$css.borderWidth, borderColor = _view$css.borderColor;
            if (!borderWidth) {
                return;
            }
            this.ctx.save();
            this._preProcess(view, true);
            var r;
            if (borderRadius) {
                r = Math.min(borderRadius.toPx(), width / 2, height / 2);
            } else {
                r = 0;
            }
            var lineWidth = borderWidth.toPx();
            this.ctx.lineWidth = lineWidth;
            this.ctx.strokeStyle = borderColor || "black";
            this.ctx.beginPath();
            this.ctx.arc(-width / 2 + r, -height / 2 + r, r + lineWidth / 2, 1 * Math.PI, 1.5 * Math.PI);
            this.ctx.lineTo(width / 2 - r, -height / 2 - lineWidth / 2);
            this.ctx.arc(width / 2 - r, -height / 2 + r, r + lineWidth / 2, 1.5 * Math.PI, 2 * Math.PI);
            this.ctx.lineTo(width / 2 + lineWidth / 2, height / 2 - r);
            this.ctx.arc(width / 2 - r, height / 2 - r, r + lineWidth / 2, 0, .5 * Math.PI);
            this.ctx.lineTo(-width / 2 + r, height / 2 + lineWidth / 2);
            this.ctx.arc(-width / 2 + r, height / 2 - r, r + lineWidth / 2, .5 * Math.PI, 1 * Math.PI);
            this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.restore();
        }
    }, {
        key: "_preProcess",
        value: function _preProcess(view, notClip) {
            var width = 0;
            var height;
            var extra;
            switch (view.type) {
              case "text":
                {
                    var textArray = view.text.split("\n");
                    // 处理多个连续的'\n'
                                        for (var i = 0; i < textArray.length; ++i) {
                        if (textArray[i] === "") {
                            textArray[i] = " ";
                        }
                    }
                    var fontWeight = view.css.fontWeight === "bold" ? "bold" : "normal";
                    view.css.fontSize = view.css.fontSize ? view.css.fontSize : "20rpx";
                    this.ctx.font = "normal ".concat(fontWeight, " ").concat(view.css.fontSize.toPx(), "px ").concat(view.css.fontFamily ? view.css.fontFamily : "sans-serif");
                    // this.ctx.setFontSize(view.css.fontSize.toPx());
                    // 计算行数
                                        var lines = 0;
                    var linesArray = [];
                    for (var _i = 0; _i < textArray.length; ++_i) {
                        var textLength = this.ctx.measureText(textArray[_i]).width;
                        var partWidth = view.css.width ? view.css.width.toPx() : textLength;
                        var calLines = Math.ceil(textLength / partWidth);
                        width = partWidth > width ? partWidth : width;
                        lines += calLines;
                        linesArray[_i] = calLines;
                    }
                    lines = view.css.maxLines < lines ? view.css.maxLines : lines;
                    var lineHeight = view.css.lineHeight ? view.css.lineHeight.toPx() : view.css.fontSize.toPx();
                    height = lineHeight * lines;
                    extra = {
                        lines: lines,
                        lineHeight: lineHeight,
                        textArray: textArray,
                        linesArray: linesArray
                    };
                    break;
                }

              case "image":
                {
                    // image的长宽设置成auto的逻辑处理
                    var ratio = getApp().systemInfo.pixelRatio ? getApp().systemInfo.pixelRatio : 2;
                    // 有css却未设置width或height，则默认为auto
                                        if (view.css) {
                        if (!view.css.width) {
                            view.css.width = "auto";
                        }
                        if (!view.css.height) {
                            view.css.height = "auto";
                        }
                    }
                    if (!view.css || view.css.width === "auto" && view.css.height === "auto") {
                        width = Math.round(view.sWidth / ratio);
                        height = Math.round(view.sHeight / ratio);
                    } else if (view.css.width === "auto") {
                        height = view.css.height.toPx();
                        width = view.sWidth / view.sHeight * height;
                    } else if (view.css.height === "auto") {
                        width = view.css.width.toPx();
                        height = view.sHeight / view.sWidth * width;
                    } else {
                        width = view.css.width.toPx();
                        height = view.css.height.toPx();
                    }
                    break;
                }

              default:
                if (!(view.css.width && view.css.height)) {
                    console.error("You should set width and height");
                    return;
                }
                width = view.css.width.toPx();
                height = view.css.height.toPx();
                break;
            }
            var x;
            if (view.css && view.css.right) {
                if (typeof view.css.right === "string") {
                    x = this.style.width - view.css.right.toPx(true);
                } else {
                    // 可以用数组方式，把文字长度计算进去
                    // [right, 文字id, 乘数（默认 1）]
                    var rights = view.css.right;
                    x = this.style.width - rights[0].toPx(true) - this.globalWidth[rights[1]] * (rights[2] || 1);
                }
            } else if (view.css && view.css.left) {
                if (typeof view.css.left === "string") {
                    x = view.css.left.toPx(true);
                } else {
                    var lefts = view.css.left;
                    x = lefts[0].toPx(true) + this.globalWidth[lefts[1]] * (lefts[2] || 1);
                }
            } else {
                x = 0;
            }
            //const y = view.css && view.css.bottom ? this.style.height - height - view.css.bottom.toPx(true) : (view.css && view.css.top ? view.css.top.toPx(true) : 0);
                        var y;
            if (view.css && view.css.bottom) {
                y = this.style.height - height - view.css.bottom.toPx(true);
            } else {
                if (view.css && view.css.top) {
                    if (typeof view.css.top === "string") {
                        y = view.css.top.toPx(true);
                    } else {
                        var tops = view.css.top;
                        y = tops[0].toPx(true) + this.globalHeight[tops[1]] * (tops[2] || 1);
                    }
                } else {
                    y = 0;
                }
            }
            var angle = view.css && view.css.rotate ? this._getAngle(view.css.rotate) : 0;
            // 当设置了 right 时，默认 align 用 right，反之用 left
                        var align = view.css && view.css.align ? view.css.align : view.css && view.css.right ? "right" : "left";
            switch (align) {
              case "center":
                this.ctx.translate(x, y + height / 2);
                break;

              case "right":
                this.ctx.translate(x - width / 2, y + height / 2);
                break;

              default:
                this.ctx.translate(x + width / 2, y + height / 2);
                break;
            }
            this.ctx.rotate(angle);
            if (!notClip && view.css && view.css.borderRadius && view.type !== "rect") {
                this._doClip(view.css.borderRadius, width, height);
            }
            this._doShadow(view);
            if (view.id) {
                this.globalWidth[view.id] = width;
                this.globalHeight[view.id] = height;
            }
            return {
                width: width,
                height: height,
                x: x,
                y: y,
                extra: extra
            };
        }
        // 画文字的背景图片
        }, {
        key: "_doBackground",
        value: function _doBackground(view) {
            this.ctx.save();
            var _this$_preProcess = this._preProcess(view, true), rawWidth = _this$_preProcess.width, rawHeight = _this$_preProcess.height;
            var _view$css2 = view.css, background = _view$css2.background, padding = _view$css2.padding;
            var pd = [ 0, 0, 0, 0 ];
            if (padding) {
                var pdg = padding.split(/\s+/);
                if (pdg.length === 1) {
                    var x = pdg[0].toPx();
                    pd = [ x, x, x, x ];
                }
                if (pdg.length === 2) {
                    var _x = pdg[0].toPx();
                    var y = pdg[1].toPx();
                    pd = [ _x, y, _x, y ];
                }
                if (pdg.length === 3) {
                    var _x2 = pdg[0].toPx();
                    var _y = pdg[1].toPx();
                    var z = pdg[2].toPx();
                    pd = [ _x2, _y, z, _y ];
                }
                if (pdg.length === 4) {
                    var _x3 = pdg[0].toPx();
                    var _y2 = pdg[1].toPx();
                    var _z = pdg[2].toPx();
                    var a = pdg[3].toPx();
                    pd = [ _x3, _y2, _z, a ];
                }
            }
            var width = rawWidth + pd[1] + pd[3];
            var height = rawHeight + pd[0] + pd[2];
            this._doClip(view.css.borderRadius, width, height);
            if (GD.api.isGradient(background)) {
                GD.api.doGradient(background, width, height, this.ctx);
            } else {
                this.ctx.fillStyle = background;
            }
            this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
            this.ctx.restore();
        }
    }, {
        key: "_drawQRCode",
        value: function _drawQRCode(view) {
            this.ctx.save();
            var _this$_preProcess2 = this._preProcess(view), width = _this$_preProcess2.width, height = _this$_preProcess2.height;
            QR.api.draw(view.content, this.ctx, -width / 2, -height / 2, width, height, view.css.background, view.css.color);
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_drawAbsImage",
        value: function _drawAbsImage(view) {
            if (!view.url) {
                return;
            }
            this.ctx.save();
            var _this$_preProcess3 = this._preProcess(view), width = _this$_preProcess3.width, height = _this$_preProcess3.height;
            // 获得缩放到图片大小级别的裁减框
                        var rWidth = view.sWidth;
            var rHeight = view.sHeight;
            var startX = 0;
            var startY = 0;
            // 绘画区域比例
                        var cp = width / height;
            // 原图比例
                        var op = view.sWidth / view.sHeight;
            if (cp >= op) {
                rHeight = rWidth / cp;
                startY = Math.round((view.sHeight - rHeight) / 2);
            } else {
                rWidth = rHeight * cp;
                startX = Math.round((view.sWidth - rWidth) / 2);
            }
            if (view.css && view.css.mode === "scaleToFill") {
                this.ctx.drawImage(view.url, -(width / 2), -(height / 2), width, height);
            } else {
                this.ctx.drawImage(view.url, startX, startY, rWidth, rHeight, -(width / 2), -(height / 2), width, height);
            }
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_fillAbsText",
        value: function _fillAbsText(view) {
            if (!view.text) {
                return;
            }
            if (view.css.background) {
                // 生成背景
                this._doBackground(view);
            }
            this.ctx.save();
            var _this$_preProcess4 = this._preProcess(view, view.css.background && view.css.borderRadius), width = _this$_preProcess4.width, height = _this$_preProcess4.height, extra = _this$_preProcess4.extra;
            this.ctx.fillStyle = view.css.color || "black";
            var lines = extra.lines, lineHeight = extra.lineHeight, textArray = extra.textArray, linesArray = extra.linesArray;
            // 如果设置了id，则保留 text 的长度
                        if (view.id) {
                var textWidth = 0;
                for (var i = 0; i < textArray.length; ++i) {
                    textWidth = this.ctx.measureText(textArray[i]).width > textWidth ? this.ctx.measureText(textArray[i]).width : textWidth;
                }
                this.globalWidth[view.id] = width ? textWidth < width ? textWidth : width : textWidth;
            }
            var lineIndex = 0;
            for (var j = 0; j < textArray.length; ++j) {
                var preLineLength = Math.round(textArray[j].length / linesArray[j]);
                var start = 0;
                var alreadyCount = 0;
                for (var _i2 = 0; _i2 < linesArray[j]; ++_i2) {
                    // 绘制行数大于最大行数，则直接跳出循环
                    if (lineIndex >= lines) {
                        break;
                    }
                    alreadyCount = preLineLength;
                    var text = textArray[j].substr(start, alreadyCount);
                    var measuredWith = this.ctx.measureText(text).width;
                    // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
                    // 如果已经到文本末尾，也不要进行该循环
                                        while (start + alreadyCount <= textArray[j].length && (width - measuredWith > view.css.fontSize.toPx() || measuredWith > width)) {
                        if (measuredWith < width) {
                            text = textArray[j].substr(start, ++alreadyCount);
                        } else {
                            if (text.length <= 1) {
                                // 如果只有一个字符时，直接跳出循环
                                break;
                            }
                            text = textArray[j].substr(start, --alreadyCount);
                        }
                        measuredWith = this.ctx.measureText(text).width;
                    }
                    start += text.length;
                    // 如果是最后一行了，发现还有未绘制完的内容，则加...
                                        if (lineIndex === lines - 1 && (j < textArray.length - 1 || start < textArray[j].length)) {
                        while (this.ctx.measureText("".concat(text, "...")).width > width) {
                            if (text.length <= 1) {
                                // 如果只有一个字符时，直接跳出循环
                                break;
                            }
                            text = text.substring(0, text.length - 1);
                        }
                        text += "...";
                        measuredWith = this.ctx.measureText(text).width;
                    }
                    this.ctx.setTextAlign(view.css.textAlign ? view.css.textAlign : "left");
                    var x = void 0;
                    switch (view.css.textAlign) {
                      case "center":
                        x = 0;
                        break;

                      case "right":
                        x = width / 2;
                        break;

                      default:
                        x = -(width / 2);
                        break;
                    }
                    var y = -(height / 2) + (lineIndex === 0 ? view.css.fontSize.toPx() : view.css.fontSize.toPx() + lineIndex * lineHeight);
                    lineIndex++;
                    if (view.css.textStyle === "stroke") {
                        this.ctx.strokeText(text, x, y, measuredWith);
                    } else {
                        this.ctx.fillText(text, x, y, measuredWith);
                    }
                    var fontSize = view.css.fontSize.toPx();
                    if (view.css.textDecoration) {
                        this.ctx.beginPath();
                        if (/\bunderline\b/.test(view.css.textDecoration)) {
                            this.ctx.moveTo(x, y);
                            this.ctx.lineTo(x + measuredWith, y);
                        }
                        if (/\boverline\b/.test(view.css.textDecoration)) {
                            this.ctx.moveTo(x, y - fontSize);
                            this.ctx.lineTo(x + measuredWith, y - fontSize);
                        }
                        if (/\bline-through\b/.test(view.css.textDecoration)) {
                            this.ctx.moveTo(x, y - fontSize / 3);
                            this.ctx.lineTo(x + measuredWith, y - fontSize / 3);
                        }
                        this.ctx.closePath();
                        this.ctx.strokeStyle = view.css.color;
                        this.ctx.stroke();
                    }
                }
            }
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
    }, {
        key: "_drawAbsRect",
        value: function _drawAbsRect(view) {
            this.ctx.save();
            var _this$_preProcess5 = this._preProcess(view), width = _this$_preProcess5.width, height = _this$_preProcess5.height;
            if (GD.api.isGradient(view.css.color)) {
                GD.api.doGradient(view.css.color, width, height, this.ctx);
            } else {
                this.ctx.fillStyle = view.css.color;
            }
            var borderRadius = view.css.borderRadius;
            var r = borderRadius ? Math.min(borderRadius.toPx(), width / 2, height / 2) : 0;
            this.ctx.beginPath();
            this.ctx.arc(-width / 2 + r, -height / 2 + r, r, 1 * Math.PI, 1.5 * Math.PI);
            //左上角圆弧
                        this.ctx.lineTo(width / 2 - r, -height / 2);
            this.ctx.arc(width / 2 - r, -height / 2 + r, r, 1.5 * Math.PI, 2 * Math.PI);
            // 右上角圆弧
                        this.ctx.lineTo(width / 2, height / 2 - r);
            this.ctx.arc(width / 2 - r, height / 2 - r, r, 0, .5 * Math.PI);
            // 右下角圆弧
                        this.ctx.lineTo(-width / 2 + r, height / 2);
            this.ctx.arc(-width / 2 + r, height / 2 - r, r, .5 * Math.PI, 1 * Math.PI);
            // 左下角圆弧
                        this.ctx.closePath();
            this.ctx.fill();
            this.ctx.restore();
            this._doBorder(view, width, height);
        }
        // shadow 支持 (x, y, blur, color), 不支持 spread
        // shadow:0px 0px 10px rgba(0,0,0,0.1);
        }, {
        key: "_doShadow",
        value: function _doShadow(view) {
            if (!view.css || !view.css.shadow) {
                return;
            }
            var box = view.css.shadow.replace(/,\s+/g, ",").split(" ");
            if (box.length > 4) {
                console.error("shadow don't spread option");
                return;
            }
            this.ctx.shadowOffsetX = parseInt(box[0], 10);
            this.ctx.shadowOffsetY = parseInt(box[1], 10);
            this.ctx.shadowBlur = parseInt(box[2], 10);
            this.ctx.shadowColor = box[3];
        }
    }, {
        key: "_getAngle",
        value: function _getAngle(angle) {
            return Number(angle) * Math.PI / 180;
        }
    } ]);
    return Painter;
}();

exports.default = Painter;