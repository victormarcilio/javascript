//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
function myReplace(str, before, after) {
  let lower = before[0] == before[0].toLowerCase();
  after = (lower ? after[0].toLowerCase() : after[0].toUpperCase()) + after.slice(1);
  return str.replace(before, after);
}
