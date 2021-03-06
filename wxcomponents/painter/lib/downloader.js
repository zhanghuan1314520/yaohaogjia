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
 * LRU ???????????????????????? downloader ????????????????????????????????????????????????????????????????????????????????????
 * ??????????????????????????? https://juejin.im/post/5b42d3ede51d4519277b6ce3
 */ var util = require("./util");

var SAVED_FILES_KEY = "savedFiles";

var KEY_TOTAL_SIZE = "totalSize";

var KEY_PATH = "path";

var KEY_TIME = "time";

var KEY_SIZE = "size";

// ?????????????????? 6M??????????????????????????????????????????????????? 10M
var MAX_SPACE_IN_B = 6 * 1024 * 1024;

var savedFiles = {};

var Dowloader = /* */ function() {
    function Dowloader() {
        (0, _classCallCheck2.default)(this, Dowloader);
        // app ????????????????????????????????????????????? app ??????
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
   * ????????????????????? lru ??????????????????????????????
   * @param {String} url ????????? url
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
                    // ??????????????????????????????????????????????????????
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
                        // ??????????????????????????????????????????????????????????????????
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
                // ?????? saveFile ????????????res.tempFilePath ?????????????????????????????????????????????????????????????????????????????????????????????
                                resolve(tempFilePath);
                // ???????????????????????????????????????????????????????????????????????????????????????????????????lru??????????????????????????????
                                reset();
            }
        });
    });
}

/**
 * ??????????????????????????????
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
        // ???????????????????????????????????????????????????????????? lru
                var pathsShouldDelete = [];
        // ??????????????????????????????????????????????????????
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
                // ?????? storage ???????????????????????????????????????
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