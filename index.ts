import parseCase from "./parseCase";
import parseList from "./parseList";
import parseMembers from "./parseMembers";
import parseRoles from "./parseRoles";
import parseTrim from "./parseTrim";
import parseUsers from "./parseUsers";

const parse = {
  case: parseCase,
  list: parseList,
  members: parseMembers,
  roles: parseRoles,
  trim: parseTrim,
  users: parseUsers,
};

export default parse;
