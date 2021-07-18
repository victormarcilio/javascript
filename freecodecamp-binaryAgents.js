//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
function binaryAgent(str) {
  return str.split(' ').map(x => String.fromCharCode(Number.parseInt(x, 2))).join('');
}
