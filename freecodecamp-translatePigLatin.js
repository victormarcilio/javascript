https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
function translatePigLatin(str) {
  if(str[0].match(/[aeiou]/))
    return str + "way";
  return str.replace(/(^[^aeiou]+)(.*)/, "$2$1" + "ay")
}

translatePigLatin("consonant");
