"use strict";
exports.__esModule = true;
var parseUsers_1 = require("./parseUsers");
var parseMembers = function (args, message) {
    return parseUsers_1["default"](args, message).map(function (user) { var _a; return (_a = message.guild) === null || _a === void 0 ? void 0 : _a.members.cache.get(user === null || user === void 0 ? void 0 : user.id); });
};
exports["default"] = parseMembers;
