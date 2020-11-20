"use strict";
exports.__esModule = true;
var parseTrim = function (string, max) {
    return string.length > max ? string.slice(0, max - 3) + "..." : string;
};
exports["default"] = parseTrim;
