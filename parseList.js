"use strict";
exports.__esModule = true;
var parseList = function (list) {
    return [list.slice(0, -1).join(", "), list.pop()]
        .filter(function (w) { return w !== ""; })
        .join(" and ");
};
exports["default"] = parseList;
