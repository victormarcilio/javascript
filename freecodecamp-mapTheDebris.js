//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let calcT = function(rad)
  {
      return Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + rad, 3)/GM));
  }
  for(let i = 0; i < arr.length; i++)
    arr[i] = {name: arr[i].name, orbitalPeriod: calcT(arr[i]['avgAlt'])}
  return arr;  
}
