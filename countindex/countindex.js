function countIndex(string) {

//console.log(noSpaces);
  var letterCounter = {};
  for (var i = 0; i < string.length; i++) {
    if (letterCounter[string[i]] === undefined) {
      // alternative method (but not safer)
      // (!letterCounter[string[i]])
      letterCounter[string[i]] = [i];
    } else {
      letterCounter[string[i]].push(i);
    }
  }
  return letterCounter;

}

console.log(countIndex("lighthouse in the house"));