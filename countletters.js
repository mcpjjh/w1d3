//characters found in the input string
//character count
//return countletters: "lighthouse in the house"

function countLetters(string) {
  var noSpaces = string.split(" ").join("");

//console.log(noSpaces);
  var letterCounter = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (letterCounter[noSpaces[i]] === undefined) {
      letterCounter[noSpaces[i]] = 1;
    } else {
      letterCounter[noSpaces[i]] += 1;
    }
  }
  return letterCounter;

}

console.log(countLetters("lighthouse in the house"));


//split string
//count letters
//show how many of each letters there are