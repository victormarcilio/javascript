//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
let gcd = function(a, b) {
  if (!b)
    return a;
  return gcd(b, a % b);
}
function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let ans = min;
  for(min++; min <= max; min++)
    ans = (ans * min) / gcd(ans, min);
  return ans;
}
