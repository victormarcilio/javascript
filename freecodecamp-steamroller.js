//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
function steamrollArray(arr) {
  let changed = true;
  while(changed)
  {
    changed = false;
    for(let i = 0; i < arr.length; i++)
      if(Array.isArray(arr[i]))
      {
        changed = true;
        arr = arr.slice(0, i).concat(...arr[i]).concat(arr.slice(i + 1))
        break;
      }
  }
  return arr
}

steamrollArray([1, [2], [3, [[4]]]]);
