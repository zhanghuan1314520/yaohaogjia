var _interopRequireDefault = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("../../../@babel/runtime/helpers/typeof"));

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

/**
 * LRU 文件存储，使用该 downloader 可以让下载的文件存储在本地，下次进入小程序后可以直接使用
 * 详细设计文档可查看 https://juejin.im/post/5b42d3ede51d4519277b6ce3
 */ var util = require("./util");

var SAVED_FILES_KEY = "savedFiles";

var KEY_TOTAL_SIZE = "totalSize";

var KEY_PATH = "path";

var KEY_TIME = "time";

var KEY_SIZE = "size";

// 可存储总共为 6M，目前小程序可允许的最大本地存储为 10M
var MAX_SPACE_IN_B = 6 * 1024 * 1024;

var savedFiles = {};

var Dowloader = /* */ function() {
    function Dowloader() {
        (0, _classCallCheck2.default)(this, Dowloader);
        // app 如果设置了最大存储空间，则使用 app 中的
                if (getApp().PAINTER_MAX_LRU_SPACE) {
            MAX_SPACE_IN_B = getApp().PAINTER_MAX_LRU_SPACE;
        }
        wx.getStorage({
            key: SAVED_FILES_KEY,
            success: function success(res) {
                if (res.data) {
                    savedFiles = res.data;
                }
            }
        });
    }
    /**
   * 下载文件，会用 lru 方式来缓存文件到本地
   * @param {String} url 文件的 url
   */    (0, _createClass2.default)(Dowloader, [ {
        key: "download",
        value: function download(url) {
            return new Promise(function(resolve, reject) {
                if (!(url && util.isValidUrl(url))) {
                    resolve(url);
                    return;
                }
                var file = getFile(url);
                if (file) {
                    // 检查文件是否正常，不正常需要重新下载
                    wx.getSavedFileInfo({
                        filePath: file[KEY_PATH],
                        success: function success(res) {
                            resolve(file[KEY_PATH]);
                        },
                        fail: function fail(error) {
                            console.error("the file is broken, redownload it, ".concat(JSON.stringify(error)));
                            downloadFile(url).then(function(path) {
                                resolve(path);
                            }, function() {
                                reject();
                            });
                        }
                    });
                } else {
                    downloadFile(url).then(function(path) {
                        resolve(path);
                    }, function() {
                        reject();
                    });
                }
            });
        }
    } ]);
    return Dowloader;
}();

exports.default = Dowloader;

function downloadFile(url) {
    return new Promise(function(resolve, reject) {
        wx.downloadFile({
            url: url,
            success: function success(res) {
                if (res.statusCode !== 200) {
                    console.error("downloadFile ".concat(url, " failed res.statusCode is not 200"));
                    reject();
                    return;
                }
                var tempFilePath = res.tempFilePath;
                wx.getFileInfo({
                    filePath: tempFilePath,
                    success: function success(tmpRes) {
                        var newFileSize = tmpRes.size;
                        doLru(newFileSize).then(function() {
                            saveFile(url, newFileSize, tempFilePath).then(function(filePath) {
                                resolve(filePath);
                            });
                        }, function() {
                            resolve(tempFilePath);
                        });
                    },
                    fail: function fail(error) {
                        // 文件大小信息获取失败，则此文件也不要进行存储
                        console.error("getFileInfo ".concat(res.tempFilePath, " failed, ").concat(JSON.stringify(error)));
                        resolve(res.tempFilePath);
                    }
                });
            },
            fail: function fail(error) {
                console.error("downloadFile failed, ".concat(JSON.stringify(error), " "));
                reject();
            }
        });
    });
}

function saveFile(key, newFileSize, tempFilePath) {
    return new Promise(function(resolve, reject) {
        wx.saveFile({
            tempFilePath: tempFilePath,
            success: function success(fileRes) {
                var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
                savedFiles[key] = {};
                savedFiles[key][KEY_PATH] = fileRes.savedFilePath;
                savedFiles[key][KEY_TIME] = new Date().getTime();
                savedFiles[key][KEY_SIZE] = newFileSize;
                savedFiles["totalSize"] = newFileSize + totalSize;
                wx.setStorage({
                    key: SAVED_FILES_KEY,
                    data: savedFiles
                });
                resolve(fileRes.savedFilePath);
            },
            fail: function fail(error) {
                console.error("saveFile ".concat(key, " failed, then we delete all files, ").concat(JSON.stringify(error)));
                // 由于 saveFile 成功后，res.tempFilePath 处的文件会被移除，所以在存储未成功时，我们还是继续使用临时文件
                                resolve(tempFilePath);
                // 如果出现错误，就直接情况本地的所有文件，因为你不知道是不是因为哪次lru的某个文件未删除成功
                                reset();
            }
        });
    });
}

/**
 * 清空所有下载相关内容
 */ function reset() {
    wx.removeStorage({
        key: SAVED_FILES_KEY,
        success: function success() {
            wx.getSavedFileList({
                success: function success(listRes) {
                    removeFiles(listRes.fileList);
                },
                fail: function fail(getError) {
                    console.error("getSavedFileList failed, ".concat(JSON.stringify(getError)));
                }
            });
        }
    });
}

function doLru(size) {
    if (size > MAX_SPACE_IN_B) {
        return Promise.reject();
    }
    return new Promise(function(resolve, reject) {
        var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
        if (size + totalSize <= MAX_SPACE_IN_B) {
            resolve();
            return;
        }
        // 如果加上新文件后大小超过最大限制，则进行 lru
                var pathsShouldDelete = [];
        // 按照最后一次的访问时间，从小到大排序
                var allFiles = JSON.parse(JSON.stringify(savedFiles));
        delete allFiles[KEY_TOTAL_SIZE];
        var sortedKeys = Object.keys(allFiles).sort(function(a, b) {
            return allFiles[a][KEY_TIME] - allFiles[b][KEY_TIME];
        });
        var _iterator = _createForOfIteratorHelper(sortedKeys), _step;
        try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var sortedKey = _step.value;
                totalSize -= savedFiles[sortedKey].size;
                pathsShouldDelete.push(savedFiles[sortedKey][KEY_PATH]);
                delete savedFiles[sortedKey];
                if (totalSize + size < MAX_SPACE_IN_B) {
                    break;
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }
        savedFiles["totalSize"] = totalSize;
        wx.setStorage({
            key: SAVED_FILES_KEY,
            data: savedFiles,
            success: function success() {
                // 保证 storage 中不会存在不存在的文件数据
                if (pathsShouldDelete.length > 0) {
                    removeFiles(pathsShouldDelete);
                }
                resolve();
            },
            fail: function fail(error) {
                console.error("doLru setStorage failed, ".concat(JSON.stringify(error)));
                reject();
            }
        });
    });
}

function removeFiles(pathsShouldDelete) {
    var _iterator2 = _createForOfIteratorHelper(pathsShouldDelete), _step2;
    try {
        var _loop = function _loop() {
            var pathDel = _step2.value;
            var delPath = pathDel;
            if ((0, _typeof2.default)(pathDel) === "object") {
                delPath = pathDel.filePath;
            }
            wx.removeSavedFile({
                filePath: delPath,
                fail: function fail(error) {
                    console.error("removeSavedFile ".concat(pathDel, " failed, ").concat(JSON.stringify(error)));
                }
            });
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            _loop();
        }
    } catch (err) {
        _iterator2.e(err);
    } finally {
        _iterator2.f();
    }
}

function getFile(key) {
    if (!savedFiles[key]) {
        return;
    }
    savedFiles[key]["time"] = new Date().getTime();
    wx.setStorage({
        key: SAVED_FILES_KEY,
        data: savedFiles
    });
    return savedFiles[key];
}