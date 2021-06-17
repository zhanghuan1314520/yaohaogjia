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

/* eslint-disable */
// 当ctx传入当前文件，const grd = ctx.createCircularGradient() 和 
// const grd = this.ctx.createLinearGradient() 无效，因此只能分开处理
// 先分析，在外部创建grd，再传入使用就可以
!function() {
    var api = {
        isGradient: function isGradient(bg) {
            if (bg && (bg.startsWith("linear") || bg.startsWith("radial"))) {
                return true;
            }
            return false;
        },
        doGradient: function doGradient(bg, width, height, ctx) {
            if (bg.startsWith("linear")) {
                linearEffect(width, height, bg, ctx);
            } else if (bg.startsWith("radial")) {
                radialEffect(width, height, bg, ctx);
            }
        }
    };
    function analizeGrad(string) {
        var colorPercents = string.substring(0, string.length - 1).split("%,");
        var colors = [];
        var percents = [];
        var _iterator = _createForOfIteratorHelper(colorPercents), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var colorPercent = _step.value;
                colors.push(colorPercent.substring(0, colorPercent.lastIndexOf(" ")).trim());
                percents.push(colorPercent.substring(colorPercent.lastIndexOf(" "), colorPercent.length) / 100);
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
        return {
            colors: colors,
            percents: percents
        };
    }
    function radialEffect(width, height, bg, ctx) {
        var colorPer = analizeGrad(bg.match(/radial-gradient\((.+)\)/)[1]);
        var grd = ctx.createCircularGradient(0, 0, width < height ? height / 2 : width / 2);
        for (var i = 0; i < colorPer.colors.length; i++) {
            grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
        }
        ctx.fillStyle = grd;
        //ctx.fillRect(-(width / 2), -(height / 2), width, height);
        }
    function analizeLinear(bg, width, height) {
        var direction = bg.match(/([-]?\d{1,3})deg/);
        var dir = direction && direction[1] ? parseFloat(direction[1]) : 0;
        var coordinate;
        switch (dir) {
          case 0:
            coordinate = [ 0, -height / 2, 0, height / 2 ];
            break;

          case 90:
            coordinate = [ width / 2, 0, -width / 2, 0 ];
            break;

          case -90:
            coordinate = [ -width / 2, 0, width / 2, 0 ];
            break;

          case 180:
            coordinate = [ 0, height / 2, 0, -height / 2 ];
            break;

          case -180:
            coordinate = [ 0, -height / 2, 0, height / 2 ];
            break;

          default:
            var x1 = 0;
            var y1 = 0;
            var x2 = 0;
            var y2 = 0;
            if (direction[1] > 0 && direction[1] < 90) {
                x1 = width / 2 - (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
                y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
                x2 = -x1;
                y1 = -y2;
            } else if (direction[1] > -180 && direction[1] < -90) {
                x1 = -(width / 2) + (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
                y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
                x2 = -x1;
                y1 = -y2;
            } else if (direction[1] > 90 && direction[1] < 180) {
                x1 = width / 2 + (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
                y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
                x2 = -x1;
                y1 = -y2;
            } else {
                x1 = -(width / 2) - (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
                y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
                x2 = -x1;
                y1 = -y2;
            }
            coordinate = [ x1, y1, x2, y2 ];
            break;
        }
        return coordinate;
    }
    function linearEffect(width, height, bg, ctx) {
        var param = analizeLinear(bg, width, height);
        var grd = ctx.createLinearGradient(param[0], param[1], param[2], param[3]);
        var content = bg.match(/linear-gradient\((.+)\)/)[1];
        var colorPer = analizeGrad(content.substring(content.indexOf(",") + 1));
        for (var i = 0; i < colorPer.colors.length; i++) {
            grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
        }
        ctx.fillStyle = grd;
        //ctx.fillRect(-(width / 2), -(height / 2), width, height);
        }
    module.exports = {
        api: api
    };
}();