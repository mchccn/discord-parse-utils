"use strict";
exports.__esModule = true;
var parseUsers = function (args, message) {
    return args
        .map(function (arg) {
        var copy = arg;
        if (/^<@!?\d{18}>$/.test(copy)) {
            copy = copy.slice(2, -1);
            if (copy.startsWith("!")) {
                copy = copy.slice(1);
            }
            return copy;
        }
        else if (/^\d{18}$/.test(copy)) {
            return copy;
        }
        else {
            return undefined;
        }
    })
        .filter(function (arg) { return !!arg; })
        .map(function (id) { return message.client.users.cache.get(id); })
        .filter(function (user) { return !!user; });
};
exports["default"] = parseUsers;
