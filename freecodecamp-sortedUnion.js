//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
function uniteUnique(...arr) {
  let ans = []
  for (let i = 0; i < arr.length; i++)
    for(let j = 0; j < arr[i].length; j++)
      if(ans.indexOf(arr[i][j]) == -1)
        ans.push(arr[i][j])
  return ans;
}
