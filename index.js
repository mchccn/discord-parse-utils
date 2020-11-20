"use strict";
exports.__esModule = true;
var parseCase_1 = require("./parseCase");
var parseList_1 = require("./parseList");
var parseMembers_1 = require("./parseMembers");
var parseRoles_1 = require("./parseRoles");
var parseTrim_1 = require("./parseTrim");
var parseUsers_1 = require("./parseUsers");
var parse = {
    "case": parseCase_1["default"],
    list: parseList_1["default"],
    members: parseMembers_1["default"],
    roles: parseRoles_1["default"],
    trim: parseTrim_1["default"],
    users: parseUsers_1["default"]
};
exports["default"] = parse;
