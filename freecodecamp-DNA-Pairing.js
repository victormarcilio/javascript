//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
function pairElement(str) {
  let ans = [];
  for(let curr of str)
    ans.push([curr, curr == 'G' ? 'C' : curr == 'C' ? 'G' : curr == 'A' ? 'T' : 'A']);
  return ans;
}
